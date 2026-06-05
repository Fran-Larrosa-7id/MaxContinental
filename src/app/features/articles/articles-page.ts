import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { VisitContextService } from '../../core/visit-context.service';
import { MOCK_CLIENT_SUPPLY_IDS, MOCK_SUPPLIES } from '../samples/samples.mock';

@Component({
  selector: 'app-articles-page',
  imports: [FormsModule, MatIconModule],
  templateUrl: './articles-page.html',
})
export class ArticlesPage {
  private readonly visitContext = inject(VisitContextService);

  readonly query = signal('');
  readonly activeClient = this.visitContext.activeClient;

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
}
