import { Routes } from '@angular/router';

export const routes: Routes = [
  

  {
  path: 'lista-personaje',
  loadComponent: () =>
    import('./pages/lista-personaje/lista-personaje.page').then(m => m.ListaPersonajesPage)
},
  {
    path: 'detalle-personaje',
    loadComponent: () => import('./pages/detalle-personaje/detalle-personaje.page').then( m => m.DetallePersonajePage)
  },
];
