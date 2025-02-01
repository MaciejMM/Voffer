import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject, Injectable} from '@angular/core';
import {catchError, map, mergeMap, of, switchMap} from 'rxjs';
import * as offerActions from './offer.actions';
import {VehicleOfferApiService} from '../../features/offer/services/api/vehicle-offer-api.service';
import {Store} from '@ngrx/store';
import * as OfferState from './offer.reducer';
import {Offer} from '../../features/offer/model/offer';

@Injectable()
export class OfferEffects {

  constructor(
    private readonly actions$: Actions,
    private offerService: VehicleOfferApiService,
    private readonly store: Store<OfferState.State>
  ) {}


  loadOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offerActions.fetchOffers),
      switchMap(() =>
        this.offerService.getOffers().pipe(
          map((res: Offer[]) => {
            return offerActions.fetchOffersSuccess({ offers: res });
          }),
          catchError((error: any) => {
            return of(offerActions.fetchOffersFailure({ error }));
          })
        )
    ) )
  );


}
