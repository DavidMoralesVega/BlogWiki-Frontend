import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/user/user.module')
    .then(m => m.UserModule),
  },

  {
    path: 'usuario',
    loadChildren: () => import('./pages/user/user.module')
    .then(m => m.UserModule),
  },

  {
    path: 'categoria',
    loadChildren: () => import('./pages/category/category.module')
    .then(m => m.CategoryModule),
  },

];

