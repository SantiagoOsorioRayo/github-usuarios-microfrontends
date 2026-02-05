import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'seguidores/:username',
    loadComponent: () =>
      import('./seguidores/seguidores')
        .then(m => m.Seguidores),
  },
];