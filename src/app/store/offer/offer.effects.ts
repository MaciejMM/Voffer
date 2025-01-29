import {Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {VehicleOfferService} from '../../features/offer/services/vehicle-offer-service';


@Injectable()
export class OfferEffects {

  constructor(private actions$: Actions, private offerService: VehicleOfferService) {
  }
}
