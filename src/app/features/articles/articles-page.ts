import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SampleOrdersService } from '../../core/sample-orders.service';
import { SessionService } from '../../core/session.service';
import { VisitContextService } from '../../core/visit-context.service';
import { SampleCartDialog } from '../../shared/dialogs/sample-cart-dialog';
import { MOCK_CLIENT_SUPPLY_IDS, MOCK_SUPPLIES } from '../samples/samples.mock';
import { SupplyAbcCategory } from '../samples/samples.types';

type ArticleTab = {
  id: SupplyAbcCategory;
  label: string;
  icon: string;
};

@Component({
  selector: 'app-articles-page',
  imports: [FormsModule, MatIconModule, SampleCartDialog],
  templateUrl: './articles-page.html',
})
export class ArticlesPage {
  private readonly visitContext = inject(VisitContextService);
  private readonly ordersService = inject(SampleOrdersService);
  private readonly router = inject(Router);
  private readonly session = inject(SessionService);

  readonly query = signal('');
  readonly selectedCategory = signal<SupplyAbcCategory>('flagship');
  readonly isCartOpen = signal(false);
  readonly activeClient = this.visitContext.activeClient;
  readonly currentUser = this.session.currentUser;
  readonly cart = this.ordersService.cart;
  readonly cartCount = this.ordersService.cartCount;
  readonly cartLines = computed(() => this.cart().length);
  readonly canCreateSample = computed(
    () => this.currentUser().role === 'Vendedor' && Boolean(this.activeClient()),
  );
  readonly articleTabs: ArticleTab[] = [
    {
      id: 'flagship',
      label: 'Buque insignia',
      icon: 'workspace_premium',
    },
    {
      id: 'featured',
      label: 'Destacados',
      icon: 'star',
    },
    {
      id: 'common',
      label: 'Comunes',
      icon: 'inventory_2',
    },
  ];
  readonly selectedTab = computed(
    () =>
      this.articleTabs.find((tab) => tab.id === this.selectedCategory()) ?? this.articleTabs[0],
  );
  readonly availableArticles = computed(() => {
    const clientId = this.visitContext.activeClientId();
    const allowedIds = clientId ? (MOCK_CLIENT_SUPPLY_IDS[clientId] ?? []) : null;

    return MOCK_SUPPLIES.filter((article) => allowedIds === null || allowedIds.includes(article.id));
  });
  readonly tabCounts = computed(() =>
    this.articleTabs.reduce(
      (counts, tab) => ({
        ...counts,
        [tab.id]: this.availableArticles().filter((article) => article.abcCategory === tab.id)
          .length,
      }),
      {} as Record<SupplyAbcCategory, number>,
    ),
  );

  readonly filteredArticles = computed(() => {
    const term = this.query().trim().toLowerCase();
    const selectedCategory = this.selectedCategory();

    return this.availableArticles().filter((article) => {
      const matchesCategory = article.abcCategory === selectedCategory;
      const matchesQuery =
        !term ||
        article.name.toLowerCase().includes(term) ||
        article.brand.toLowerCase().includes(term) ||
        article.description.toLowerCase().includes(term);

      return matchesCategory && matchesQuery;
    });
  });

  addToSample(supplyId: string): void {
    if (!this.canCreateSample()) {
      return;
    }

    this.ordersService.addToCart(supplyId);
    this.isCartOpen.set(true);
  }

  confirmOrder(): void {
    const clientId = this.visitContext.activeClientId();
    const currentUser = this.session.currentUser();
    if (
      !clientId ||
      !this.ordersService.confirmOrder(
        clientId,
        currentUser.role === 'Vendedor' ? currentUser.id : 'user-cristian',
        currentUser.coordinatorId,
      )
    ) {
      return;
    }

    this.isCartOpen.set(false);
    this.router.navigateByUrl('/app/muestras');
  }
}
