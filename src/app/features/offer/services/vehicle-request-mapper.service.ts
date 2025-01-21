import {Injectable} from '@angular/core';
import {mergeDateAndTime} from './validators/TimeUtil';
import {VehicleOfferForm} from './vehicle-offer-service';


@Injectable({
  providedIn: 'root'
})
export class VehicleRequestMapperService {

  constructor() {
  }

  public mapToRequest(form: any) {
    return {
      loadingPlace: this.mapLoadingPlace(form),
      unloadingPlace: this.mapUnloadingPlace(form),
      description: form.value.description,
      loadingType: form.value.truckLoad,
      loadingWeight: form.value.weight,
      loadingLength: form.value.length,
      loadingVolume: form.value.volume,
      loadingBodyType: form.value.vehicleType,
      goodsType: form.value.goodsType,
      publishSelected: null

    }
  }

  private mapLoadingPlace(form: any): {
    country: string | null | undefined;
    postalCode: string | null | undefined;
    city: string | null;
    loadingStartDateAndTime: Date;
    loadingEndDateAndTime: Date
  } {
    return {
      country: form.value.loadingCountryCode,
      postalCode: form.value.loadingPostalCode ?? null,
      city: form.value.loadingCity,
      loadingStartDateAndTime: mergeDateAndTime(String(form.value.loadingStartDate), String(form.value.loadingStartTime)),
      loadingEndDateAndTime: mergeDateAndTime(String(form.value.loadingEndDate), String(form.value.loadingEndTime))
    }
  }

  private mapUnloadingPlace(form: any): {
    country: string | null | undefined;
    postalCode: string | null | undefined;
    city: string | null;
    unloadingStartDateAndTime: Date;
    unloadingEndDateAndTime: Date
  } {
    return {
      country: form.value.unloadingCountryCode,
      postalCode: form.value.unloadingPostalCode ?? null,
      city: form.value.unloadingCity,
      unloadingStartDateAndTime: mergeDateAndTime((String(form.value.unloadingStartDate)), String(form.value.unloadingStartTime)),
      unloadingEndDateAndTime: mergeDateAndTime(String(form.value.unloadingEndDate), String(form.value.unloadingEndTime))
    }
  }

}
