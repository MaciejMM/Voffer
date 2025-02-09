import {Routes} from "@angular/router";
import {canActivateAuthGuard} from 'kinde-angular';
import {OfferPageComponent} from './components/offer-page/offer-page.component';

export const OFFER_ROUTES: Routes = [{path: '', component: OfferPageComponent, canActivate: [canActivateAuthGuard]}];
