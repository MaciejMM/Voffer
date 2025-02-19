import {Injectable, OnDestroy} from '@angular/core';
import {VehicleOfferService} from '../../offer/services/vehicle-offer-service';
import {Store} from '@ngrx/store';
import * as offerSelectors from '../../../store/offer/offer.selectors';
import {Offer} from '../../offer/model/Offer';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditOfferService implements OnDestroy {
  editOfferSubscription$: Subscription

  constructor(private formService: VehicleOfferService,
              private store: Store) {
  }

  ngOnDestroy(): void {
    this.editOfferSubscription$.unsubscribe();
  }

  editOffer(id: number) {
    this.editOfferSubscription$ = this.store.select(offerSelectors.selectOfferById((id)))
      .subscribe((offer: Offer | undefined) => {
        if (offer) {
          this.formService.getControl('vehicleType').setValue(offer.loadingBodyType)
          this.formService.getControl('goodsType').setValue(offer.goodsType)
          this.formService.getControl('loadingStartDate').setValue(offer.loadingPlace.loadingStartDateAndTime)
          this.formService.getControl('loadingEndDate').setValue(offer.loadingPlace.loadingEndDateAndTime)
          this.formService.getControl('loadingStartTime').setValue(offer.loadingPlace.loadingStartDateAndTime)
          this.formService.getControl('loadingEndTime').setValue(offer.loadingPlace.loadingEndDateAndTime)
          this.formService.getControl('loadingCountryCode').setValue(offer.loadingPlace.loadingCountry)
          this.formService.getControl('loadingCity').setValue(offer.loadingPlace.loadingCity)
          this.formService.getControl('loadingPostalCode').setValue(offer.loadingPlace.loadingPostalCode)
          this.formService.getControl('unloadingStartDate').setValue(offer.unloadingPlace[0].unloadingStartDateAndTime)
          this.formService.getControl('unloadingEndDate').setValue(offer.unloadingPlace[0].unloadingEndDateAndTime)
          this.formService.getControl('unloadingStartTime').setValue(new Date(offer.unloadingPlace[0].unloadingStartDateAndTime))
          this.formService.getControl('unloadingEndTime').setValue(offer.unloadingPlace[0].unloadingEndDateAndTime)
          this.formService.getControl('unloadingCountryCode').setValue(offer.unloadingPlace[0].unloadingCountry)
          this.formService.getControl('unloadingCity').setValue(offer.unloadingPlace[0].unloadingCity)
          this.formService.getControl('unloadingPostalCode').setValue(offer.unloadingPlace[0].unloadingPostalCode)
          this.formService.getControl('description').setValue(offer.description)
          this.formService.getControl('weight').setValue(offer.loadingWeight)
          this.formService.getControl('length').setValue(offer.loadingLength)
          this.formService.getControl('volume').setValue(offer.loadingVolume)
        }

      });
  }
}
