import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },


  {
    path: 'inicio',
    loadComponent: () =>
      import('./paginas/inicio/inicio.page').then((m) => m.InicioPage),
  },

 
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.routes').then((m) => m.routes),
  },

  // Otras páginas
  {
    path: 'paginas',
    loadComponent: () =>
      import('./paginas/paginas.page').then((m) => m.PaginasPage),
  },
  {
    path: 'action-sheet',
    loadComponent: () =>
      import('./paginas/action-sheet/action-sheet.page').then(
        (m) => m.ActionSheetPage
      ),
  },
  {
    path: 'alert',
    loadComponent: () =>
      import('./paginas/alert/alert.page').then((m) => m.AlertPage),
  },
  {
    path: 'botones',
    loadComponent: () =>
      import('./paginas/botones/botones.page').then((m) => m.BotonesPage),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./paginas/list/list.page').then((m) => m.ListPage),
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./paginas/button/button.page').then((m) => m.ButtonPage),
  },
  {
    path: 'header',
    loadComponent: () =>
      import('./header/header.page').then((m) => m.HeaderPage),
  },
  {
    path: 'card',
    loadComponent: () =>
      import('./paginas/card/card.page').then((m) => m.CardPage),
  },
  {
    path: 'checkbox',
    loadComponent: () =>
      import('./paginas/checkbox/checkbox.page').then((m) => m.CheckboxPage),
  },
  {
    path: 'date-time',
    loadComponent: () =>
      import('./paginas/date-time/date-time.page').then((m) => m.DateTimePage),
  },
];
