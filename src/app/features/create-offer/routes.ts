import {Routes} from "@angular/router";
import {canActivateAuthGuard} from 'kinde-angular';
import {CreateOfferPageComponent} from './components/create-offer-tab/create-offer-page.component';

export const CREATE_OFFER_ROUTES: Routes = [{path: '', component: CreateOfferPageComponent, canActivate: [canActivateAuthGuard]}];
