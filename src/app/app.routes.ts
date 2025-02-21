import {Route} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {MainPageComponent} from './features/main-page/main-page.component';
import {canActivateAuthGuard} from 'kinde-angular';

export const routes: Route[] = [
  {path: '', component:MainPageComponent,canActivate: [canActivateAuthGuard]},
  {
    path: 'vehicle-offer',
    loadChildren: () => import('./features/offer/routes').then((module) => module.OFFER_ROUTES),
  },
  {
    path: '',
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
