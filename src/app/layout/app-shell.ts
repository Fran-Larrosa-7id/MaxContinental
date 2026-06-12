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

  readonly navItems: NavItem[] = [
    { label: 'Nueva Muestra', mobileLabel: 'Nueva Muestra', icon: 'groups', path: '/app/clientes' },
    { label: 'Muestras', mobileLabel: 'Muestras', icon: 'science', path: '/app/muestras' },
    {
      label: 'Tablero de Control',
      mobileLabel: 'Tablero',
      icon: 'pie_chart',
      path: '/app/tablero',
    },
  ];

  readonly activeClient = this.visitContext.activeClient;
  readonly currentUser = this.session.currentUser;
  readonly availableUsers = this.session.availableUsers;
  readonly pageTitle = computed(() => {
    const client = this.activeClient();
    return client ? `Visitando: ${client.name}` : this.titleForUrl(this.currentUrl());
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

  changeSession(userId: string): void {
    this.visitContext.finish();
    this.ordersService.clearCart();
    this.session.selectUser(userId);
    this.router.navigateByUrl('/app/clientes');
  }

  logout(): void {
    this.visitContext.finish();
    this.router.navigateByUrl('/login');
  }

  private titleForUrl(url: string): string {
    if (url.includes('/articulos')) {
      return 'Artículos';
    }
    if (url.includes('/muestras')) {
      return 'Gestión de Muestras';
    }
    if (url.includes('/tablero')) {
      return 'Tablero de Control';
    }
    return 'Clientes';
  }
}
