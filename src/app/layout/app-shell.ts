import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

type NavItem = {
  label: string;
  icon: string;
  path: string;
};

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './app-shell.html'
})
export class AppShell {
  readonly navItems: NavItem[] = [
    { label: 'Muestras', icon: 'science', path: '/app/muestras' },
    { label: 'Tablero de Control', icon: 'pie_chart', path: '/app/tablero' }
  ];

  readonly pageTitle = signal('Gestion de Muestras');

  constructor(private readonly router: Router) {
    this.setPageTitle(this.router.url);
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe((event) => {
      this.setPageTitle(event.urlAfterRedirects);
    });
  }

  logout(): void {
    this.router.navigateByUrl('/login');
  }

  private setPageTitle(url: string): void {
    this.pageTitle.set(url.includes('/tablero') ? 'Tablero de Control' : 'Gestion de Muestras');
  }
}
