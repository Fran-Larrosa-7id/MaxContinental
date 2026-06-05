import { computed, Injectable, signal } from '@angular/core';
import { MOCK_CLIENTS } from '../features/samples/samples.mock';
import { MockClient } from '../features/samples/samples.types';

export type VisitAction = 'call' | 'visit';

@Injectable({
  providedIn: 'root',
})
export class VisitContextService {
  private readonly selectedClient = signal<MockClient | null>(null);
  private readonly selectedAction = signal<VisitAction | null>(null);

  readonly activeClient = this.selectedClient.asReadonly();
  readonly action = this.selectedAction.asReadonly();
  readonly activeClientId = computed(() => this.selectedClient()?.id ?? null);
  readonly isActive = computed(() => this.selectedClient() !== null);

  start(client: MockClient, action: VisitAction): void {
    this.selectedClient.set(client);
    this.selectedAction.set(action);
  }

  startById(clientId: string, action: VisitAction = 'visit'): boolean {
    const client = MOCK_CLIENTS.find((item) => item.id === clientId);
    if (!client) {
      return false;
    }

    this.start(client, action);
    return true;
  }

  finish(): void {
    this.selectedClient.set(null);
    this.selectedAction.set(null);
  }
}
