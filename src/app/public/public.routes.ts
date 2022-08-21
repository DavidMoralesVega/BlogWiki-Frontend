import { Routes } from '@angular/router';

export const PublicRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/login/login.module')
      .then(m => m.LoginModule),
  },
  {
    path: 'noticia/:Term',
    loadChildren: () => import('./pages/news/news.module')
      .then(m => m.NewsModule)
  },
  {
    path: 'categoria/:Term',
    loadChildren: () => import('./pages/category/category.module')
      .then(m => m.CategoryModule)
  }
];

