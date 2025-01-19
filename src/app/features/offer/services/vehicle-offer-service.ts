import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {dateAndTimeValidator} from './validators/dateAndTimeValidator';
import {mergeDateAndTime} from './validators/TimeUtil';

@Injectable({
  providedIn: 'root'
})
export class VehicleOfferService {

  form: FormGroup = new FormGroup({
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
    unloadCity: new FormControl('', Validators.required),
    unloadPostalCode: new FormControl('', Validators.required),

    truckLoad: new FormControl('FTL', Validators.required),
    description: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    length: new FormControl('', Validators.required),
    volume: new FormControl('', Validators.required),
  }, {validators: dateAndTimeValidator(mergeDateAndTime)});

  constructor() {
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }

  getErrors(){
    return this.form.errors ? Object.keys(this.form.errors) : [];
  }
}
