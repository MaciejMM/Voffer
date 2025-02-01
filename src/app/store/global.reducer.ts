import * as fromOffer from './offer/offer.reducer';
import {ActionReducerMap} from '@ngrx/store';
import * as fromAdmin from './admin/admin.reducer';

export type AppState = {
  offer: fromOffer.State;
  admin: fromAdmin.State;
}

export const globalReducer: ActionReducerMap<AppState> = {
  offer: fromOffer.offerReducer,
  admin: fromAdmin.adminReducer
};
