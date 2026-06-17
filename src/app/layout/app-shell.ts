import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { SampleOrdersService } from '../core/sample-orders.service';
import { SessionService } from '../core/session.service';
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
  private readonly session = inject(SessionService);
  private readonly ordersService = inject(SampleOrdersService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  readonly activeClient = this.visitContext.activeClient;
  readonly currentUser = this.session.currentUser;
  readonly cartCount = this.ordersService.cartCount;
  readonly homePath = computed(() =>
    this.currentUser().role === 'Vendedor' ? '/app/clientes' : '/app/muestras',
  );
  readonly navItems = computed<NavItem[]>(() => {
    const commonItems: NavItem[] = [
      { label: 'Muestras', mobileLabel: 'Muestras', icon: 'science', path: '/app/muestras' },
      {
        label: 'Tablero de Control',
        mobileLabel: 'Tablero',
        icon: 'pie_chart',
        path: '/app/tablero',
      },
    ];

    if (this.currentUser().role !== 'Vendedor') {
      return commonItems;
    }

    return [
      {
        label: 'Nueva Muestra',
        mobileLabel: 'Nueva',
        icon: 'groups',
        path: '/app/clientes',
      },
      ...commonItems,
    ];
  });
  readonly pageTitle = computed(() => {
    const client = this.activeClient();
    return client ? `Modo venta: ${client.name}` : this.titleForUrl(this.currentUrl());
  });
  readonly visitStep = computed(() => {
    const url = this.currentUrl();
    if (url.includes('/articulos')) {
      return 'Catalogo';
    }
    if (url.includes('/muestras')) {
      return 'Seguimiento';
    }
    return 'Seleccion';
  });

  constructor() {
    const clientId = this.route.snapshot.paramMap.get('clientId');
    if (clientId) {
      this.visitContext.startById(clientId);
    }
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
    this.ordersService.clearCart();
    this.router.navigateByUrl('/login');
  }

  private titleForUrl(url: string): string {
    if (url.includes('/articulos')) {
      return 'Articulos';
    }
    if (url.includes('/muestras')) {
      return 'Gestion de Muestras';
    }
    if (url.includes('/tablero')) {
      return 'Tablero de Control';
    }
    return 'Nueva Muestra';
  }
}
