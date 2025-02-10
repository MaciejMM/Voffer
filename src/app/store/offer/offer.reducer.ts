import {createReducer, on} from '@ngrx/store';
import {Offer} from '../../features/offer/model/Offer';
import * as OfferActions from './offer.actions';
import {ErrorResponse} from '../../shared/model/ErrorResponse';

export type State = {
  offerList: Offer[];
  displayError: boolean;
  displaySuccess: boolean;
  error: any;
  isLoading: boolean;
  editingOfferId?: number;
  isTelerouteTokenFetching: boolean;
  telerouteTokenError: ErrorResponse | null;
  showCloseButton: boolean;
}

export const initialState: State = {
  offerList: [],
  displayError: false,
  displaySuccess: false,
  error: null,
  isLoading: false,
  editingOfferId: 0,
  isTelerouteTokenFetching: false,
  telerouteTokenError: null,
  showCloseButton: false
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
  })),
  on(OfferActions.setEditingOfferId, (state, payload) => ({
    ...state,
    editingOfferId: payload.id
  })),

  on(OfferActions.fetchTelerouteToken, (state) => ({
    ...state,
    isTelerouteTokenFetching: true
  })),
  on(OfferActions.fetchTelerouteTokenSuccess, (state) => ({
    ...state,
    isTelerouteTokenFetching: false,
    showCloseButton: true
  })),
  on(OfferActions.fetchTelerouteTokenFailure, (state,payload) => ({
    ...state,
    isTelerouteTokenFetching: false,
    telerouteTokenError: payload.error
  })),
  on(OfferActions.closeTelerouteLoginDialog, (state) => ({
    ...state,
    showCloseButton:false,
  }))
)
