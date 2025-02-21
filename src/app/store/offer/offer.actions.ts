import {createAction, props} from '@ngrx/store';
import {Offer} from '../../features/offer/model/Offer';
import {VehicleOfferRequest} from '../../features/offer/model/VehicleOfferRequest';
import {ErrorResponse} from '../../shared/model/ErrorResponse';
import {LocationResponse} from '../../features/offer/model/LocationResponse';

enum ActionTypes {

  SET_OFFER = '[Offer] Set Offer Request',
  CLEAR_OFFER = '[Offer] Clear Offer Request',

  FETCH_OFFERS = '[Offer] Fetch Offers',
  FETCH_OFFERS_SUCCESS = '[Offer] Fetch Offers Success',
  FETCH_OFFERS_FAILURE = '[Offer] Fetch Offers Failure',

  CREATE_OFFER = '[Offer] Create Offer',
  CREATE_OFFER_SUCCESS = '[Offer] Create Offer Success',
  CREATE_OFFER_FAILURE = '[Offer] Create Offer Failure',

  UPDATE_OFFER = '[Offer] Update Offer',
  UPDATE_OFFER_SUCCESS = '[Offer] Update Offer Success',
  UPDATE_OFFER_FAILURE = '[Offer] Update Offer Failure',

  EDIT_OFFER = '[Offer] Edit Offer',
  EDIT_OFFER_SUCCESS = '[Offer] Edit Offer Success',
  EDIT_OFFER_FAILURE = '[Offer] Edit Offer Failure',

  DELETE_OFFER = '[Offer] Delete Offer',
  DELETE_OFFER_SUCCESS = '[Offer] Delete Offer Success',
  DELETE_OFFER_FAILURE = '[Offer] Delete Offer Failure',

  SET_EDITING_OFFER_ID = '[Offer] Set Editing Offer Id',

  SET_IS_LOADING = '[Offer] Set Is Loading',

  FETCH_TELEROUTE_TOKEN = '[Offer] Fetch Teleroute Token',
  FETCH_TELEROUTE_TOKEN_SUCCESS = '[Offer] Fetch Teleroute Token Success',
  FETCH_TELEROUTE_TOKEN_FAILURE = '[Offer] Fetch Teleroute Token Failure',
  CLOSE_TELEROUTE_LOGIN_DIALOG = '[Offer] Close Teleroute Login Dialog',

  FETCH_LOCATIONS = '[Offer] Fetch Loading Locations',
  FETCH_LOCATIONS_SUCCESS = '[Offer] Fetch Loading Locations Success',
  FETCH_LOCATIONS_FAILURE = '[Offer] Fetch Loading Locations Failure',

  FETCH_UNLOADING_LOCATIONS = '[Offer] Fetch Unloading Locations',
  FETCH_UNLOADING_LOCATIONS_SUCCESS = '[Offer] Fetch Unloading Locations Success',
  FETCH_UNLOADING_LOCATIONS_FAILURE = '[Offer] Fetch Unloading Locations Failure',

  RESET_LOCATIONS = '[Offer] Reset Locations',
  RESET_UNLOADING_LOCATIONS = '[Offer] Reset Unloading Locations',

}


export const fetchOffers = createAction(ActionTypes.FETCH_OFFERS);
export const fetchOffersSuccess = createAction(
  ActionTypes.FETCH_OFFERS_SUCCESS,
  props<{ offers: Offer[] }>()
);
export const fetchOffersFailure = createAction(
  ActionTypes.FETCH_OFFERS_FAILURE,
  (error: any) => ({error}));

export const createOffer = createAction(
  ActionTypes.CREATE_OFFER,
  props<{ offer: VehicleOfferRequest }>());
export const createOfferSuccess = createAction(
  ActionTypes.CREATE_OFFER_SUCCESS,
  props<{ offer: Offer }>()
);
export const createOfferFailure = createAction(
  ActionTypes.CREATE_OFFER_FAILURE,
  props<{ error: any }>()
);

export const deleteOffer = createAction(
  ActionTypes.DELETE_OFFER,
  props<{ id: number }>());
export const deleteOfferSuccess = createAction(
  ActionTypes.DELETE_OFFER_SUCCESS,
  props<{ id: number }>()
);
export const deleteOfferFailure = createAction(
  ActionTypes.DELETE_OFFER_FAILURE,
  props<{ error: any }>()
);

export const setEditingOfferId = createAction(
  ActionTypes.SET_EDITING_OFFER_ID,
  props<{ id: number }>()
);

export const setIsLoading = createAction(
  ActionTypes.SET_IS_LOADING,
  props<{ isLoading: boolean }>()
);

export const fetchTelerouteToken = createAction(
  ActionTypes.FETCH_TELEROUTE_TOKEN,
  props<{ username: string, password: string }>()
);

export const fetchTelerouteTokenSuccess = createAction(
  ActionTypes.FETCH_TELEROUTE_TOKEN_SUCCESS
);

export const fetchTelerouteTokenFailure = createAction(
  ActionTypes.FETCH_TELEROUTE_TOKEN_FAILURE,
  props<{ error: ErrorResponse }>()
);

export const closeTelerouteLoginDialog = createAction(
  ActionTypes.CLOSE_TELEROUTE_LOGIN_DIALOG
);

export const fetchLoadingLocations = createAction(
  ActionTypes.FETCH_LOCATIONS,
  props<{ query: string, countryCode: string }>()
);

export const fetchLoadingLocationsSuccess = createAction(
  ActionTypes.FETCH_LOCATIONS_SUCCESS,
  props<{ locations: LocationResponse[] }>()
);

export const fetchLoadingLocationsFailure = createAction(
  ActionTypes.FETCH_LOCATIONS_FAILURE,
  props<{ error: any }>()
);

export const resetLocations = createAction(
  ActionTypes.RESET_LOCATIONS
);

export const fetchUnloadingLocations = createAction(
  ActionTypes.FETCH_UNLOADING_LOCATIONS,
  props<{ query: string, countryCode: string }>()
);

export const fetchUnloadingLocationsSuccess = createAction(
  ActionTypes.FETCH_UNLOADING_LOCATIONS_SUCCESS,
  props<{ locations: LocationResponse[] }>()
);

export const fetchUnloadingLocationsFailure = createAction(
  ActionTypes.FETCH_UNLOADING_LOCATIONS_FAILURE,
  props<{ error: any }>()
);

export const resetUnloadingLocations = createAction(
  ActionTypes.RESET_UNLOADING_LOCATIONS
);

export const updateOffer = createAction(
  ActionTypes.UPDATE_OFFER,
  props<{ offerId: number }>()
);

export const updateOfferSuccess = createAction(
  ActionTypes.UPDATE_OFFER_SUCCESS,
  props<{ offer: Offer, oldOfferId: number }>()
);

export const updateOfferFailure = createAction(
  ActionTypes.UPDATE_OFFER_FAILURE,
  props<{ error: any }>()
);

export const setOffer = createAction(
  ActionTypes.SET_OFFER,
  props<{ offerRequest: VehicleOfferRequest }>()
);

export const clearOffer = createAction(
  ActionTypes.CLEAR_OFFER
);

export const editOffer = createAction(
  ActionTypes.EDIT_OFFER,
  props<{ id: number,offerRequest: VehicleOfferRequest }>()
);
export const editOfferSuccess = createAction(
  ActionTypes.EDIT_OFFER_SUCCESS,
  props<{ offer: Offer }>()
);

export const editOfferFailure = createAction(
  ActionTypes.EDIT_OFFER_FAILURE,
  props<{ error: any }>()
);
