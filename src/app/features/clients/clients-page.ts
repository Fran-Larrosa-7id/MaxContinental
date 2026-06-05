import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { VisitAction, VisitContextService } from '../../core/visit-context.service';
import { MOCK_CLIENTS } from '../samples/samples.mock';
import { MockClient } from '../samples/samples.types';

@Component({
  selector: 'app-clients-page',
  imports: [FormsModule, MatIconModule],
  templateUrl: './clients-page.html',
})
export class ClientsPage {
  private readonly visitContext = inject(VisitContextService);

  readonly query = signal('');
  readonly clients = MOCK_CLIENTS;
  readonly activeClientId = this.visitContext.activeClientId;

  readonly filteredClients = computed(() => {
    const term = this.query().trim().toLowerCase();
    if (!term) {
      return this.clients;
    }

    return this.clients.filter(
      (client) =>
        client.name.toLowerCase().includes(term) ||
        client.locality.toLowerCase().includes(term) ||
        client.address.toLowerCase().includes(term) ||
        client.phone.toLowerCase().includes(term),
    );
  });

  constructor(private readonly router: Router) {}

  selectClient(client: MockClient, action: VisitAction): void {
    this.visitContext.start(client, action);
    this.router.navigate(['/cli', client.id]);
  }
}
