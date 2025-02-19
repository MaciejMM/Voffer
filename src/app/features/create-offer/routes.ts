import {Routes} from "@angular/router";
import {canActivateAuthGuard} from 'kinde-angular';
import {CreateOfferPageComponent} from './components/create-offer-tab/create-offer-page.component';
import {EditOfferComponent} from './edit-offer/edit-offer.component';

export const CREATE_OFFER_ROUTES: Routes = [
  {
    path: 'create',
    component: CreateOfferPageComponent,
    canActivate: [canActivateAuthGuard]
  },
  {
    path: 'edit/:id',
    component: EditOfferComponent,
    canActivate: [canActivateAuthGuard]
  }

];
