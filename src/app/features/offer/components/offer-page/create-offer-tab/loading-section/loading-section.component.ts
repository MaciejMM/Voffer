import {Component} from '@angular/core';
import {CalendarComponent} from "../calendar/calendar.component";
import {CountrySelectorComponent} from "../country-selector/country-selector.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VehicleOfferService} from '../../../../services/vehicle-offer-service';
import {TimePickerComponent} from '../time-picker/time-picker.component';
import {LocationSearchService} from '../../../../services/location-search.service';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {AsyncPipe} from '@angular/common';
import {debounceTime, Observable} from 'rxjs';
import {LocationResponse} from '../../../../model/LocationResponse';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-loading-section',
  imports: [
    FormsModule,
    CalendarComponent,
    CountrySelectorComponent,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    TimePickerComponent,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    AsyncPipe,
  ],
  templateUrl: './loading-section.component.html',
  styleUrl: './loading-section.component.scss'
})
export class LoadingSectionComponent {
  loadStartTime = new FormControl();
  loadEndTime = new FormControl();
  loadingCity = new FormControl();
  searchCity = new FormControl();
  loadingCountryCode = new FormControl();
  locations$: Observable<LocationResponse[]>;

  constructor(readonly formService: VehicleOfferService,
              private readonly locationService: LocationSearchService) {
    this.subscribeToFormControl(this.loadStartTime, 'loadingStartTime');
    this.subscribeToFormControl(this.loadEndTime, 'loadingEndTime');
    this.subscribeToFormControl(this.loadingCity, 'loadingCity');
  }

  getLocation() {
    this.locations$ = this.searchCity.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value: string) => this.locationService.getLocation(value))
      )

  }

  setValues(location: LocationResponse) {
    this.formService.getControl('loadingCity').setValue(location.city);
    this.formService.getControl('loadingPostalCode').setValue(location.postalCode);
    this.formService.getControl('loadingCountryCode').setValue(location.countryCode);
  }

  private subscribeToFormControl(control: FormControl, controlName: string) {
    control.valueChanges.subscribe((value: string) => {
      this.formService.getControl(controlName).setValue(value);
    });
  }
}
