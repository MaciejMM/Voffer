import {createAction, props} from '@ngrx/store';
import {Offer} from '../../features/offer/model/Offer';
import {VehicleOfferRequest} from '../../features/offer/model/VehicleOfferRequest';
import {ErrorResponse} from '../../shared/model/ErrorResponse';

enum ActionTypes {
  FETCH_OFFERS = '[Offer] Fetch Offers',
  FETCH_OFFERS_SUCCESS = '[Offer] Fetch Offers Success',
  FETCH_OFFERS_FAILURE = '[Offer] Fetch Offers Failure',

  CREATE_OFFER = '[Offer] Create Offer',
  CREATE_OFFER_SUCCESS = '[Offer] Create Offer Success',
  CREATE_OFFER_FAILURE = '[Offer] Create Offer Failure',

  DELETE_OFFER = '[Offer] Delete Offer',
  DELETE_OFFER_SUCCESS = '[Offer] Delete Offer Success',
  DELETE_OFFER_FAILURE = '[Offer] Delete Offer Failure',

  SET_EDITING_OFFER_ID = '[Offer] Set Editing Offer Id',

  SET_IS_LOADING = '[Offer] Set Is Loading',

  FETCH_TELEROUTE_TOKEN = '[Offer] Fetch Teleroute Token',
  FETCH_TELEROUTE_TOKEN_SUCCESS = '[Offer] Fetch Teleroute Token Success',
  FETCH_TELEROUTE_TOKEN_FAILURE = '[Offer] Fetch Teleroute Token Failure',
  CLOSE_TELEROUTE_LOGIN_DIALOG = '[Offer] Close Teleroute Login Dialog',
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
  props<{ error:ErrorResponse }>()
);

export const closeTelerouteLoginDialog = createAction(
  ActionTypes.CLOSE_TELEROUTE_LOGIN_DIALOG
);
