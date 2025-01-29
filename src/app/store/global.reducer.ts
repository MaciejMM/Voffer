import * as fromOffer from './offer/offer.reducer';
import {ActionReducerMap} from '@ngrx/store';

export type AppState = {
  offer: fromOffer.State;
}

export const globalReducer: ActionReducerMap<AppState> = {
  offer: fromOffer.offerReducer
};
