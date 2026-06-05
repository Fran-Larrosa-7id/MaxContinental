import { Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { VisitContextService } from '../core/visit-context.service';

type NavItem = {
  label: string;
  mobileLabel: string;
  icon: string;
  path: string;
};

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './app-shell.html',
})
export class AppShell {
  private readonly visitContext = inject(VisitContextService);

  readonly navItems: NavItem[] = [
    { label: 'Clientes', mobileLabel: 'Clientes', icon: 'groups', path: '/app/clientes' },
    { label: 'Artículos', mobileLabel: 'Artículos', icon: 'inventory_2', path: '/app/articulos' },
    { label: 'Muestras', mobileLabel: 'Muestras', icon: 'science', path: '/app/muestras' },
    {
      label: 'Tablero de Control',
      mobileLabel: 'Tablero',
      icon: 'pie_chart',
      path: '/app/tablero',
    },
  ];

  readonly routeTitle = signal('Clientes');
  readonly activeClient = this.visitContext.activeClient;
  readonly pageTitle = computed(() => {
    const client = this.activeClient();
    return client ? `Visitando: ${client.name}` : this.routeTitle();
  });

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    const clientId = this.route.snapshot.paramMap.get('clientId');
    if (clientId) {
      this.visitContext.startById(clientId);
    }

    this.setPageTitle(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.setPageTitle(event.urlAfterRedirects);
      });
  }

  finishVisit(): void {
    const isClientRoute = this.router.url.startsWith('/cli/');
    this.visitContext.finish();
    if (isClientRoute) {
      this.router.navigateByUrl('/app/clientes');
    }
  }

  logout(): void {
    this.visitContext.finish();
    this.router.navigateByUrl('/login');
  }

  private setPageTitle(url: string): void {
    if (url.includes('/articulos')) {
      this.routeTitle.set('Artículos');
      return;
    }

    if (url.includes('/muestras')) {
      this.routeTitle.set('Gestión de Muestras');
      return;
    }

    if (url.includes('/tablero')) {
      this.routeTitle.set('Tablero de Control');
      return;
    }

    this.routeTitle.set('Clientes');
  }
}
