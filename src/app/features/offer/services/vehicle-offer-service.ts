import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {dateAndTimeValidator} from './validators/dateAndTimeValidator';
import {mergeDateAndTime} from './validators/TimeUtil';
import {Observable} from 'rxjs';

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

  currentDay = new Date().getDay();
  currentMonth = new Date().getMonth()+1;
  currentYear = new Date().getFullYear();
  form: any = new FormGroup({
    vehicleType: new FormControl('', [Validators.required]),
    goodsType: new FormControl('', Validators.required),
    loadingStartDate: new FormControl('2025-01-28T10:00:00.000Z', [Validators.required,Validators.min(new Date().getDate())]),
    loadingEndDate: new FormControl(`2025-01-28T14:00:00.000Z`, Validators.required),
    loadingStartTime: new FormControl("2025-01-28T00:00:00.000Z", Validators.required),
    loadingEndTime: new FormControl("2025-01-28T00:30:00.000Z", Validators.required),
    loadingCountryCode: new FormControl('PL', Validators.required),
    loadingCity: new FormControl('Poznan', Validators.required),
    loadingPostalCode: new FormControl('60-203'),

    unloadingStartDate: new FormControl("2025-01-30T23:00:00.000Z", Validators.required),
    unloadingEndDate: new FormControl("2025-01-30T23:00:00.000Z", Validators.required),
    unloadingStartTime: new FormControl("2025-01-30T00:30:00.000Z", Validators.required),
    unloadingEndTime: new FormControl("2025-01-30T00:30:00.000Z", Validators.required),
    unloadingCountryCode: new FormControl('PL', Validators.required),
    unloadingCity: new FormControl('Koscian', Validators.required),
    unloadingPostalCode: new FormControl('64-000'),

    truckLoad: new FormControl('LTL', Validators.required),
    description: new FormControl('Some description', Validators.required),
    weight: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(999)]),
    length: new FormControl(1, [Validators.required, Validators.min(1)]),
    volume: new FormControl(1, [Validators.required, Validators.min(1)]),
  }, {validators: dateAndTimeValidator(mergeDateAndTime)});

  constructor() {
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }

  getForm(): VehicleOfferForm {
    return this.form;
  }

  isValid(): boolean {
    return this.form.valid;
  }
  formStatusChanges(): Observable<any> {
    return this.form.statusChanges;
  }
}
