import {Route} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';

export const routes: Route[] = [
  {path: '', redirectTo: 'vehicle-offer', pathMatch: 'full'},
  {
    path: "login",
    loadChildren: () => import('./features/login/routes').then((module) => module.LOGIN_ROUTES),
  },
  {
    path: 'vehicle-offer',
    loadChildren: () => import('./features/offer/routes').then((module) => module.OFFER_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/routes').then((module) => module.ADMIN_ROUTES),
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  }

];
