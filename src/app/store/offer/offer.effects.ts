import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, mergeMap, of, switchMap} from 'rxjs';
import * as offerActions from './offer.actions';
import {VehicleOfferApiService} from '../../features/offer/services/api/vehicle-offer-api.service';
import {Store} from '@ngrx/store';
import * as OfferState from './offer.reducer';
import {Offer} from '../../features/offer/model/Offer';
import {SnackbarMessageService} from '../../shared/services/snackbar-message.service';
import {ErrorResponse} from '../../shared/model/ErrorResponse';
import {VehicleOfferService} from '../../features/offer/services/vehicle-offer-service';
import {TelerouteAuthService} from '../../shared/services/teleroute/teleroute-auth.service';

@Injectable()
export class OfferEffects {

  constructor(
    private readonly actions$: Actions,
    private offerService: VehicleOfferApiService,
    private readonly store: Store<OfferState.State>,
    private readonly snackbarMessageService:SnackbarMessageService,
    private readonly vehicleOfferService:VehicleOfferService,
    private telerouteAuthService: TelerouteAuthService
  ) {
  }


  loadOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offerActions.fetchOffers),
      switchMap(() =>
        this.offerService.getOffers().pipe(
          map((res: Offer[]) => {
            return offerActions.fetchOffersSuccess({offers: res});
          }),
          catchError((error: any) => {
            return of(offerActions.fetchOffersFailure({error}));
          })
        )
      ))
  );

  createOffer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offerActions.createOffer),
      mergeMap(action =>
        this.offerService.createOffer(action.offer).pipe(
          map((res: any) => {
            this.snackbarMessageService.showSuccessMessage('Oferta została dodana');
            this.vehicleOfferService.resetAndEnableForm();
            return offerActions.createOfferSuccess({offer: res});
          }),
          catchError((error: ErrorResponse) => {
            this.vehicleOfferService.enableForm();
            this.snackbarMessageService.showErrorMessage('Błąd podczas dodawania oferty');
            return of(offerActions.createOfferFailure({error}));
          })
        )
      )
    )
  );


  deleteOffer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offerActions.deleteOffer),
      mergeMap(action =>
        this.offerService.deleteOffer(action.id).pipe(
          map(() => {
            this.snackbarMessageService.showSuccessMessage('Oferta została usunięta');
            return offerActions.deleteOfferSuccess({id: action.id})
          }),
          catchError((error: any) => {
            this.snackbarMessageService.showErrorMessage('Błąd podczas usuwania oferty');
            return of(offerActions.deleteOfferFailure({error}));
          })
        )
      )
    )
  );

  fetchTelerouteToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offerActions.fetchTelerouteToken),
      mergeMap(action =>
        this.telerouteAuthService.login(action.username, action.password).pipe(
          map(() => {
            this.snackbarMessageService.showSuccessMessage('Zalogowano do Teleroute');
            return offerActions.fetchTelerouteTokenSuccess();
          }),
          catchError((error: ErrorResponse) => {
            this.snackbarMessageService.showErrorMessage(error.message);
            return of(offerActions.fetchTelerouteTokenFailure({error}));
          })
        )
      )
    )
  );

}
