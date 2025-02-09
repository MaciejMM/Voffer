import {Component} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {debounceTime, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {LocationResponse} from '../../../../offer/model/LocationResponse';
import {VehicleOfferService} from '../../../../offer/services/vehicle-offer-service';
import {LocationSearchService} from '../../../../offer/services/location-search.service';
import {CountrySelectorComponent} from '../country-selector/country-selector.component';
import {CalendarComponent} from '../calendar/calendar.component';
import {TimePickerComponent} from '../time-picker/time-picker.component';

@Component({
  selector: 'app-unloading-section',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption,
    CountrySelectorComponent,
    CalendarComponent,
    TimePickerComponent,
  ],
  templateUrl: './unloading-section.component.html',
  styleUrl: './unloading-section.component.scss'
})
export class UnloadingSectionComponent {
  unloadingCity = new FormControl();
  locations$: Observable<LocationResponse[]>;
  searchUnloadingCity = new FormControl();

  constructor(readonly formService: VehicleOfferService, private readonly locationService: LocationSearchService) {
    this.subscribeToFormControl(this.unloadingCity, 'unloadingCity');
  }

  private subscribeToFormControl(control: FormControl, controlName: string) {
    control.valueChanges.subscribe((value: string) => {
      this.formService.getControl(controlName).setValue(value);
    });
  }

  getLocation() {
    this.locations$ = this.searchUnloadingCity.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value: string) => this.locationService.getLocation(value))
      )

  }

  setValues(location: LocationResponse) {
    this.formService.getControl('unloadingCity').setValue(location.city);
    this.formService.getControl('unloadingPostalCode').setValue(location.postalCode);
    this.formService.getControl('unloadingCountryCode').setValue(location.countryCode);
  }
}
