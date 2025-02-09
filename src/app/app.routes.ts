import {Route} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';

export const routes: Route[] = [
  {path: '', redirectTo: 'vehicle-offer', pathMatch: 'full'},
  {
    path: 'vehicle-offer',
    loadChildren: () => import('./features/offer/routes').then((module) => module.OFFER_ROUTES),
  },
  {
    path: 'create',
    loadChildren: () => import('./features/create-offer/routes').then((module) => module.CREATE_OFFER_ROUTES),
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
