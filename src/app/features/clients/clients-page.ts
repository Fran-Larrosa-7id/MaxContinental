import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SessionService } from '../../core/session.service';
import { VisitContextService } from '../../core/visit-context.service';
import { MOCK_CLIENTS } from '../samples/samples.mock';
import { MockClient } from '../samples/samples.types';

@Component({
  selector: 'app-clients-page',
  imports: [FormsModule, MatIconModule],
  templateUrl: './clients-page.html',
})
export class ClientsPage {
  private readonly visitContext = inject(VisitContextService);
  private readonly session = inject(SessionService);

  readonly query = signal('');
  readonly clients = MOCK_CLIENTS;
  readonly activeClientId = this.visitContext.activeClientId;

  readonly filteredClients = computed(() => {
    const term = this.query().trim().toLowerCase();
    const currentUser = this.session.currentUser();
    return this.clients.filter((client) => {
      const matchesOwner = currentUser.role === 'Coordinador' || client.sellerId === currentUser.id;
      const matchesTerm =
        !term ||
        client.name.toLowerCase().includes(term) ||
        client.locality.toLowerCase().includes(term) ||
        client.address.toLowerCase().includes(term) ||
        client.phone.toLowerCase().includes(term);
      return matchesOwner && matchesTerm;
    });
  });

  constructor(private readonly router: Router) {}

  selectClient(client: MockClient): void {
    this.visitContext.start(client);
    this.router.navigateByUrl('/app/articulos');
  }
}
