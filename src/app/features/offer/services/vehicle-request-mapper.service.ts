import {Injectable} from '@angular/core';
import {mergeDateAndTime} from './validators/TimeUtil';
import {LoadingPlace, UnloadingPlace, VehicleOfferRequest} from '../model/VehicleOfferRequest';


@Injectable({
  providedIn: 'root'
})
export class VehicleRequestMapperService {

  constructor() {
  }

  public mapToRequest(form: any): VehicleOfferRequest {
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

  private mapLoadingPlace(form: any): LoadingPlace {
    return {
      country: form.value.loadingCountryCode,
      postalCode: form.value.loadingPostalCode ?? null,
      city: form.value.loadingCity,
      loadingStartDateAndTime: mergeDateAndTime(form.value.loadingStartDate, form.value.loadingStartTime),
      loadingEndDateAndTime: mergeDateAndTime(form.value.loadingEndDate, form.value.loadingEndTime)
    }
  }

  private mapUnloadingPlace(form: any): UnloadingPlace[] {
    const unloadingPlace: UnloadingPlace = {
      country: form.value.unloadingCountryCode,
      postalCode: form.value.unloadingPostalCode ?? null,
      city: form.value.unloadingCity,
      unloadingStartDateAndTime: mergeDateAndTime(form.value.unloadingStartDate, form.value.unloadingStartTime),
      unloadingEndDateAndTime: mergeDateAndTime(form.value.unloadingEndDate, form.value.unloadingEndTime)
    }
    return [unloadingPlace];
  }

}
