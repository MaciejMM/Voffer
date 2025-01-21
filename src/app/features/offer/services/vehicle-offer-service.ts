import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {dateAndTimeValidator} from './validators/dateAndTimeValidator';
import {mergeDateAndTime} from './validators/TimeUtil';

export type VehicleOfferForm = {
  vehicleType: FormControl<string | null>;
  goodsType: FormControl<string | null>;
  loadingStartDate: FormControl<Date | null>;
  loadingEndDate: FormControl<Date | null>;
  loadingStartTime: FormControl<Date | null>;
  loadingEndTime: FormControl<Date | null>;
  loadingCountryCode: FormControl<string | null>;
  loadingCity: FormControl<string | null>;
  loadingPostalCode: FormControl<string | null>;
  unloadingStartDate: FormControl<Date | null>;
  unloadingEndDate: FormControl<Date | null>;
  unloadingStartTime: FormControl<Date | null>;
  unloadingEndTime: FormControl<Date | null>;
  unloadingCountryCode: FormControl<string | null>;
  unloadingCity: FormControl<string | null>;
  unloadingPostalCode: FormControl<string | null>;
  truckLoad: FormControl<string | null>;
  description: FormControl<string | null>;
  weight: FormControl<number | null>;
  length: FormControl<number | null>;
  volume: FormControl<number | null>
}

@Injectable({
  providedIn: 'root'
})
export class VehicleOfferService {

  form: any = new FormGroup({
    vehicleType: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    goodsType: new FormControl('', Validators.required),
    loadingStartDate: new FormControl('', Validators.required),
    loadingEndDate: new FormControl('', Validators.required),
    loadingStartTime: new FormControl('', Validators.required),
    loadingEndTime: new FormControl('', Validators.required),
    loadingCountryCode: new FormControl('', Validators.required),
    loadingCity: new FormControl('', Validators.required),
    loadingPostalCode: new FormControl('', Validators.required),

    unloadingStartDate: new FormControl('', Validators.required),
    unloadingEndDate: new FormControl('', Validators.required),
    unloadingStartTime: new FormControl('', Validators.required),
    unloadingEndTime: new FormControl('', Validators.required),
    unloadingCountryCode: new FormControl('', Validators.required),
    unloadingCity: new FormControl('', Validators.required),
    unloadingPostalCode: new FormControl('', Validators.required),

    truckLoad: new FormControl('FTL', Validators.required),
    description: new FormControl('', Validators.required),
    weight: new FormControl(0, Validators.required),
    length: new FormControl(0, Validators.required),
    volume: new FormControl(0, Validators.required),
  }, {validators: dateAndTimeValidator(mergeDateAndTime)});

  constructor() {
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }

  getForm(): VehicleOfferForm {
    return this.form;
  }

}
