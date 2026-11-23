import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Inicio | Classic Motor',
    loadComponent: () => import('./pages/inicio/inicio').then((m) => m.Inicio),
  },
  {
    path: 'catalogo',
    title: 'Catálogo de vehículos | Classic Motor',
    loadComponent: () => import('./pages/catalogo/catalogo').then((m) => m.Catalogo),
  },
  {
    path: 'itinerario',
    title: 'Itinerario y programa oficial | Classic Motor',
    loadComponent: () => import('./pages/itinerario/itinerario').then((m) => m.Itinerario),
  },
  {
    path: 'inscripcion',
    title: 'Inscripción | Classic Motor',
    loadComponent: () => import('./pages/inscripcion/inscripcion').then((m) => m.Inscripcion),
  },
  {
    path: 'guia-estilo',
    title: 'Guía de estilo | Classic Motor',
    loadComponent: () => import('./pages/guia-estilo/guia-estilo').then((m) => m.GuiaEstilo),
  },
  { path: '**', redirectTo: '' },
];
