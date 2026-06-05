import { Routes } from '@angular/router';

const appChildren: Routes = [
  {
    path: 'clientes',
    loadComponent: () => import('./features/clients/clients-page').then((m) => m.ClientsPage),
  },
  {
    path: 'articulos',
    loadComponent: () => import('./features/articles/articles-page').then((m) => m.ArticlesPage),
  },
  {
    path: 'muestras',
    loadComponent: () => import('./features/samples/samples-page').then((m) => m.SamplesPage),
  },
  {
    path: 'tablero',
    loadComponent: () =>
      import('./features/control-board/control-board-page').then((m) => m.ControlBoardPage),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'clientes',
  },
];

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login').then((m) => m.Login),
  },
  {
    path: 'app',
    loadComponent: () => import('./layout/app-shell').then((m) => m.AppShell),
    children: appChildren,
  },
  {
    path: 'cli/:clientId',
    loadComponent: () => import('./layout/app-shell').then((m) => m.AppShell),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/clients/clients-page').then((m) => m.ClientsPage),
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
