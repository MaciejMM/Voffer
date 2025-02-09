import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {dateAndTimeValidator} from './validators/dateAndTimeValidator';
import {mergeDateAndTime} from './validators/TimeUtil';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

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
    vehicleType: new FormControl('', [Validators.required]),
    goodsType: new FormControl('', Validators.required),
    loadingStartDate: new FormControl(this.mapDefaultValue('2025-01-28T10:00:00.000Z'), [Validators.required, Validators.min(new Date().getDate())]),
    loadingEndDate: new FormControl(this.mapDefaultValue(`2025-01-28T14:00:00.000Z`), Validators.required),
    loadingStartTime: new FormControl(this.mapDefaultValue("2025-01-28T10:00:00.000Z"), Validators.required),
    loadingEndTime: new FormControl(this.mapDefaultValue("2025-01-28T12:30:00.000Z"), Validators.required),
    loadingCountryCode: new FormControl(this.mapDefaultValue('PL'), Validators.required),
    loadingCity: new FormControl(this.mapDefaultValue('Poznan'), Validators.required),
    loadingPostalCode: new FormControl(this.mapDefaultValue('61-000')),

    unloadingStartDate: new FormControl(this.mapDefaultValue("2025-01-30T23:00:00.000Z"), Validators.required),
    unloadingEndDate: new FormControl(this.mapDefaultValue("2025-01-30T23:00:00.000Z"), Validators.required),
    unloadingStartTime: new FormControl(this.mapDefaultValue("2025-01-30T12:00:00.000Z"), Validators.required),
    unloadingEndTime: new FormControl(this.mapDefaultValue("2025-01-30T14:30:00.000Z"), Validators.required),
    unloadingCountryCode: new FormControl(this.mapDefaultValue('PL'), Validators.required),
    unloadingCity: new FormControl(this.mapDefaultValue('Koscian'), Validators.required),
    unloadingPostalCode: new FormControl(this.mapDefaultValue('64-000')),

    truckLoad: new FormControl(this.mapDefaultValue(this.mapDefaultValue('LTL')), Validators.required),
    description: new FormControl(this.mapDefaultValue(this.mapDefaultValue('Some description')), Validators.required),
    weight: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(999)]),
    length: new FormControl(1, [Validators.required, Validators.min(1)]),
    volume: new FormControl(1, [Validators.required, Validators.min(1)]),
  }, {validators: dateAndTimeValidator(mergeDateAndTime)});

  constructor() {
  }

  mapDefaultValue(value: string | null) {
    return environment.name === 'local' ? `${value}` : "";
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

  disableForm() {
    this.form.disable();
  }

  formStatusChanges(): Observable<any> {
    console.log(this.form.value);
    return this.form.statusChanges;
  }

  enableForm() {
    this.form.enable();
  }

  resetAndEnableForm() {
    // this.form.reset();
    this.form.enable();
  }
}
