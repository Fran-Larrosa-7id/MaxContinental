import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SampleOrdersService } from '../../core/sample-orders.service';
import { VisitContextService } from '../../core/visit-context.service';
import { SampleCartDialog } from '../../shared/dialogs/sample-cart-dialog';
import { MOCK_CLIENT_SUPPLY_IDS, MOCK_SUPPLIES } from '../samples/samples.mock';

@Component({
  selector: 'app-articles-page',
  imports: [FormsModule, MatIconModule, SampleCartDialog],
  templateUrl: './articles-page.html',
})
export class ArticlesPage {
  private readonly visitContext = inject(VisitContextService);
  private readonly ordersService = inject(SampleOrdersService);
  private readonly router = inject(Router);

  readonly query = signal('');
  readonly isCartOpen = signal(false);
  readonly activeClient = this.visitContext.activeClient;
  readonly cart = this.ordersService.cart;
  readonly cartCount = this.ordersService.cartCount;

  readonly filteredArticles = computed(() => {
    const term = this.query().trim().toLowerCase();
    const clientId = this.visitContext.activeClientId();
    const allowedIds = clientId ? (MOCK_CLIENT_SUPPLY_IDS[clientId] ?? []) : null;

    return MOCK_SUPPLIES.filter((article) => {
      const belongsToClient = allowedIds === null || allowedIds.includes(article.id);
      const matchesQuery =
        !term ||
        article.name.toLowerCase().includes(term) ||
        article.brand.toLowerCase().includes(term) ||
        article.description.toLowerCase().includes(term);

      return belongsToClient && matchesQuery;
    });
  });

  addToOrder(supplyId: string): void {
    if (!this.activeClient()) {
      return;
    }

    this.ordersService.addToCart(supplyId);
    this.isCartOpen.set(true);
  }

  confirmOrder(): void {
    const clientId = this.visitContext.activeClientId();
    if (!clientId || !this.ordersService.confirmOrder(clientId)) {
      return;
    }

    this.isCartOpen.set(false);
    this.router.navigateByUrl('/app/muestras');
  }
}
