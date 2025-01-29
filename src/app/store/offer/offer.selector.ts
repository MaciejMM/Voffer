import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State} from './offer.reducer';

export const selectOfferState = createFeatureSelector<State>('offer');
export const selectOfferList = createSelector(selectOfferState, (state: State) => state.offerList);
export const selectDisplayError = createSelector(selectOfferState, (state: State) => state.displayError);
export const selectDisplaySuccess = createSelector(selectOfferState, (state: State) => state.displaySuccess);
export const selectError = createSelector(selectOfferState, (state: State) => state.error);
