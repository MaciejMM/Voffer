import {createReducer, on} from '@ngrx/store';
import {Offer} from '../../features/offer/model/offer';
import * as OfferActions from './offer.actions';

export type State = {
  offerList: Offer[];
  displayError: boolean;
  displaySuccess: boolean;
  error: any;
}

export const initialState: State = {
  offerList: [],
  displayError: false,
  displaySuccess: false,
  error: null
}

export const offerReducer = createReducer(
  initialState,
  on(OfferActions.fetchOffers, (state) => ({
    ...state,
    isLoading: true
  })),
  on(OfferActions.fetchOffersSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    offerList: payload.offers
  })),
  on(OfferActions.fetchOffersFailure, (state, payload) => ({
    ...state,
    isLoading: false,
    displayError: true,
    error: payload.error
  })),
  on(OfferActions.createOffer, (state) => ({
    ...state,
    isLoading: true
  })),
  on(OfferActions.createOfferSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    offerList: [...state.offerList, payload.offer],
    displaySuccess: true
  })),
  on(OfferActions.createOfferFailure, (state, payload) => ({
    ...state,
    isLoading: false,
    displayError: true,
    error: payload.error
  })),
  on(OfferActions.deleteOffer, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(OfferActions.deleteOfferSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    offerList: state.offerList.filter(offer => offer.id !== payload.id),
    displaySuccess: true
  })),
  on(OfferActions.deleteOfferFailure, (state, payload) => ({
    ...state,
    isLoading: false,
    displayError: true,
    error: payload.error
  }))
)
