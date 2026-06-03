import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login').then((m) => m.Login)
  },
  {
    path: 'app',
    loadComponent: () => import('./layout/app-shell').then((m) => m.AppShell),
    children: [
      {
        path: 'muestras',
        loadComponent: () => import('./features/samples/samples-page').then((m) => m.SamplesPage)
      },
      {
        path: 'tablero',
        loadComponent: () =>
          import('./features/control-board/control-board-page').then((m) => m.ControlBoardPage)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'muestras'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
