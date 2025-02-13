import {Component} from '@angular/core';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {distinctUntilChanged, filter, Observable} from 'rxjs';
import {LocationResponse} from '../../../../offer/model/LocationResponse';
import {VehicleOfferService} from '../../../../offer/services/vehicle-offer-service';
import {LocationSearchService} from '../../../../offer/services/location-search.service';
import {CountrySelectorComponent} from '../country-selector/country-selector.component';
import {CalendarComponent} from '../calendar/calendar.component';
import {TimePickerComponent} from '../time-picker/time-picker.component';
import * as offerActions from '../../../../../store/offer/offer.actions';
import {Store} from '@ngrx/store';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import * as offerSelectors from '../../../../../store/offer/offer.selectors';

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
    MatIcon,
    MatIconButton,
    MatProgressSpinner,
    MatSuffix,
  ],
  templateUrl: './unloading-section.component.html',
  styleUrl: './unloading-section.component.scss'
})
export class UnloadingSectionComponent {
  unloadingLocations$: Observable<LocationResponse[]>;
  showUnloadingLocationLoader$: Observable<boolean>;

  constructor(
    readonly formService: VehicleOfferService,
    readonly store: Store) {
    this.formService.getControl('unloadingCity').valueChanges
      .pipe(
        filter(value => typeof value === 'string' && value.trim().length > 0),
        distinctUntilChanged()
      )
      .subscribe(value => {
        const countryCode = this.formService.getControl('unloadingCountryCode').value
        this.store.dispatch(offerActions.fetchUnloadingLocations({query: value, countryCode: countryCode}));
      });
    this.unloadingLocations$ = this.store.select(offerSelectors.selectUnloadingLocations);
    this.showUnloadingLocationLoader$ = this.store.select(offerSelectors.selectIsUnloadingLocationFetching);

  }

  setValues(location: LocationResponse) {
    this.formService.getControl('unloadingCity').setValue(location.city);
    this.formService.getControl('unloadingPostalCode').setValue(location.postalCode);
    this.formService.getControl('unloadingCountryCode').setValue(location.countryCode);
  }

  clearLoadingFields() {
    this.formService.getControl('unloadingCity').setValue("");
    this.formService.getControl('unloadingPostalCode').setValue("");
    this.formService.getControl('unloadingCountryCode').setValue("");
    this.store.dispatch(offerActions.resetUnloadingLocations())
  }
}
