import {Component} from '@angular/core';
import {CountrySelectorComponent} from '../country-selector/country-selector.component';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {CalendarComponent} from '../calendar/calendar.component';
import {MatInput} from '@angular/material/input';
import {TimePickerComponent} from '../time-picker/time-picker.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VehicleOfferService} from '../../../../services/vehicle-offer-service';
import {AsyncPipe} from '@angular/common';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {debounceTime, Observable} from 'rxjs';
import {LocationResponse} from '../../../../model/LocationResponse';
import {LocationSearchService} from '../../../../services/location-search.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-unloading-section',
  imports: [
    CountrySelectorComponent,
    MatFormField,
    CalendarComponent,
    MatInput,
    MatLabel,
    TimePickerComponent,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption,
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
    this.formService.getControl('unloadCity').setValue(location.city);
    this.formService.getControl('unloadPostalCode').setValue(location.postalCode);
    this.formService.getControl('unloadingCountryCode').setValue(location.countryCode);
  }
}
