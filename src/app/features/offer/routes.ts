import {Routes} from '@angular/router';
import {OfferPageComponent} from './components/offer-page/offer-page.component';
import {AuthGuard} from '../../auth/guard/auth.guard';

export const OFFER_ROUTES: Routes = [{path: '', component: OfferPageComponent,canActivate: [AuthGuard]}];
