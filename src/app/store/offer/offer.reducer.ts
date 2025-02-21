import {createReducer, on} from '@ngrx/store';
import {Offer} from '../../features/offer/model/Offer';
import * as OfferActions from './offer.actions';
import {ErrorResponse} from '../../shared/model/ErrorResponse';
import {LocationResponse} from '../../features/offer/model/LocationResponse';
import {VehicleOfferRequest} from '../../features/offer/model/VehicleOfferRequest';

export type State = {
  editOffer: VehicleOfferRequest | null;
  offerList: Offer[];
  displayError: boolean;
  displaySuccess: boolean;
  error: any;
  isLoading: boolean;
  editingOfferId?: number;
  isTelerouteTokenFetching: boolean;
  telerouteTokenError: ErrorResponse | null;
  showCloseButton: boolean;
  showLocationLoader: boolean;
  locationList: LocationResponse[];
  showUnloadingLocationLoader: boolean;
  unloadingLocationList: LocationResponse[];
  transeuCode:string | undefined;
}

export const initialState: State = {
  editOffer: null,
  offerList: [],
  displayError: false,
  displaySuccess: false,
  error: null,
  isLoading: false,
  editingOfferId: 0,
  isTelerouteTokenFetching: false,
  telerouteTokenError: null,
  showCloseButton: false,
  showLocationLoader: false,
  locationList: [],
  showUnloadingLocationLoader: false,
  unloadingLocationList: [],
  transeuCode: undefined
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
  on(OfferActions.fetchTelerouteTokenFailure, (state, payload) => ({
    ...state,
    isTelerouteTokenFetching: false,
    telerouteTokenError: payload.error
  })),
  on(OfferActions.closeTelerouteLoginDialog, (state) => ({
    ...state,
    showCloseButton: false,
  })),
  on(OfferActions.fetchLoadingLocations, (state) => ({
    ...state,
    showLocationLoader: true,
  })),
  on(OfferActions.fetchLoadingLocationsSuccess, (state, payload) => ({
    ...state,
    showLocationLoader: false,
    locationList: payload.locations
  })),
  on(OfferActions.fetchLoadingLocationsFailure, (state) => ({
    ...state,
    showLocationLoader: false,
  })),
  on(OfferActions.resetLocations, (state) => ({
    ...state,
    locationList: []
  })),
  on(OfferActions.fetchUnloadingLocations, (state) => ({
    ...state,
    showUnloadingLocationLoader: true,
  })),
  on(OfferActions.fetchUnloadingLocationsSuccess, (state, payload) => ({
    ...state,
    showUnloadingLocationLoader: false,
    unloadingLocationList: payload.locations
  })),
  on(OfferActions.fetchUnloadingLocationsFailure, (state) => ({
    ...state,
    showUnloadingLocationLoader: false,
  })),
  on(OfferActions.resetUnloadingLocations, (state) => ({
    ...state,
    unloadingLocationList: []
  })),
  on(OfferActions.updateOffer, (state) => ({
    ...state,
    isLoading: true
  })),
  on(OfferActions.updateOfferSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    displaySuccess: true,
    offerList: state.offerList.filter(offer => offer.id !== payload.oldOfferId).concat(payload.offer)
  })),
  on(OfferActions.updateOfferFailure, (state, payload) => ({
    ...state,
    isLoading: false,
    displayError: true,
    error: payload.error
  })),
  on(OfferActions.setOffer, (state, payload) => ({
    ...state,
    editOffer: payload.offerRequest
  })),
  on(OfferActions.clearOffer, (state) => ({
    ...state,
    editOffer: null
  })),
  on(OfferActions.editOffer, (state) => ({
    ...state,
    isLoading: true
  })),
  on(OfferActions.editOfferSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    displaySuccess: true,
    offerList: state.offerList.map(offer => offer.id === payload.offer.id ? payload.offer : offer)
  })),
  on(OfferActions.editOfferFailure, (state, payload) => ({
    ...state,
    isLoading: false,
    displayError: true,
    error: payload.error
  }))
);
