import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'detalle/octocat',
    pathMatch: 'full',
  },
  {
    path: 'detalle/:username',
    loadComponent: () =>
      import('./detalle-usuario/detalle/detalle')
        .then(m => m.Detalle),
  }
];