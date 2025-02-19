import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State} from './offer.reducer';
import {Offer} from '../../features/offer/model/Offer';

export const selectOfferState = createFeatureSelector<State>('offer');
export const selectOfferList = createSelector(selectOfferState, (state: State) => state.offerList);
export const selectDisplayError = createSelector(selectOfferState, (state: State) => state.displayError);
export const selectDisplaySuccess = createSelector(selectOfferState, (state: State) => state.displaySuccess);
export const selectError = createSelector(selectOfferState, (state: State) => state.error);

export const selectIsLoading = createSelector(selectOfferState, (state: State) => state.isLoading);
export const selectEditingOfferId = createSelector(selectOfferState, (state: State) => state.editingOfferId);

export const selectIsTelerouteTokenFetching = createSelector(selectOfferState, (state: State) => state.isTelerouteTokenFetching);
export const selectTelerouteTokenError = createSelector(selectOfferState, (state: State) => state.telerouteTokenError);

export const selectShowCloseButton = createSelector(selectOfferState, (state: State) => state.showCloseButton);
export const selectLocations = createSelector(
  selectOfferState,
  (state) => state.locationList
);

export const selectIsLocationFetching = createSelector(
  selectOfferState,
  (state) => state.showLocationLoader
);

export const selectUnloadingLocations = createSelector(
  selectOfferState,
  (state) => state.unloadingLocationList
);
export const selectIsUnloadingLocationFetching = createSelector(
  selectOfferState,
  (state) => state.showLocationLoader
);

export const showUnloadingLocationLoader = createSelector(
  selectOfferState,
  (state) => state.showUnloadingLocationLoader
);

export const selectOfferById =  (id: number) => createSelector(
  selectOfferList,
  (offers) => offers.find((offer:Offer) => offer.id === id)
);

export const selectEditOffer = createSelector(selectOfferState,   (state) => state.editOffer);
