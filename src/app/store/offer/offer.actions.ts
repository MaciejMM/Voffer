import {createAction} from '@ngrx/store';
import {Offer} from '../../features/offer/model/offer';

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

}


export const fetchOffers = createAction(ActionTypes.FETCH_OFFERS);
export const fetchOffersSuccess = createAction(ActionTypes.FETCH_OFFERS_SUCCESS, (offers: Offer[]) => ({offers}));
export const fetchOffersFailure = createAction(ActionTypes.FETCH_OFFERS_FAILURE, (error: any) => ({error}));

export const createOffer = createAction(ActionTypes.CREATE_OFFER, (offer: Offer) => ({offer}));
export const createOfferSuccess = createAction(ActionTypes.CREATE_OFFER_SUCCESS, (offer: Offer) => ({offer}));
export const createOfferFailure = createAction(ActionTypes.CREATE_OFFER_FAILURE, (error: any) => ({error}));

export const deleteOffer = createAction(ActionTypes.DELETE_OFFER, (id: number) => ({id}));
export const deleteOfferSuccess = createAction(ActionTypes.DELETE_OFFER_SUCCESS, (id: number) => ({id}));
export const deleteOfferFailure = createAction(ActionTypes.DELETE_OFFER_FAILURE, (error: any) => ({error}));
