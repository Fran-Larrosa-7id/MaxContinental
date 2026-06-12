import { computed, Service, signal } from '@angular/core';
import { MOCK_CLIENTS } from '../features/samples/samples.mock';
import { MockClient } from '../features/samples/samples.types';

@Service()
export class VisitContextService {
  private readonly selectedClient = signal<MockClient | null>(null);

  readonly activeClient = this.selectedClient.asReadonly();
  readonly activeClientId = computed(() => this.selectedClient()?.id ?? null);
  readonly isActive = computed(() => this.selectedClient() !== null);

  start(client: MockClient): void {
    this.selectedClient.set(client);
  }

  startById(clientId: string): boolean {
    const client = MOCK_CLIENTS.find((item) => item.id === clientId);
    if (!client) {
      return false;
    }

    this.start(client);
    return true;
  }

  finish(): void {
    this.selectedClient.set(null);
  }
}
