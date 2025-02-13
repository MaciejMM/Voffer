import * as fromOffer from './offer/offer.reducer';
import {ActionReducerMap} from '@ngrx/store';
import * as fromAdmin from './admin/admin.reducer';
import * as fromApp from './app/app.reducer';

export type AppState = {
  offer: fromOffer.State;
  admin: fromAdmin.State;
  app: fromApp.State;
}

export const globalReducer: ActionReducerMap<AppState> = {
  offer: fromOffer.offerReducer,
  admin: fromAdmin.adminReducer,
  app: fromApp.appReducer
};
