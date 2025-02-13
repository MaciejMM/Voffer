import {Component} from '@angular/core';
import {CalendarComponent} from "../calendar/calendar.component";
import {CountrySelectorComponent} from "../country-selector/country-selector.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TimePickerComponent} from '../time-picker/time-picker.component';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {AsyncPipe, NgIf} from '@angular/common';
import {debounceTime, distinctUntilChanged, filter, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {LocationResponse} from '../../../../offer/model/LocationResponse';
import {VehicleOfferService} from '../../../../offer/services/vehicle-offer-service';
import {LocationSearchService} from '../../../../offer/services/location-search.service';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {NgxSkeletonLoaderComponent} from 'ngx-skeleton-loader';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Store} from '@ngrx/store';
import * as offerSelectors from '../../../../../store/offer/offer.selectors';
import * as offerActions from '../../../../../store/offer/offer.actions';

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
    MatIcon,
    MatIconButton,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinner
  ],
  templateUrl: './loading-section.component.html',
  styleUrl: './loading-section.component.scss'
})
export class LoadingSectionComponent {
  loadingCity = new FormControl();
  loadingCountryCode = new FormControl();
  locations$: Observable<LocationResponse[]>;
  showLocationLoader$: Observable<boolean>;

  constructor(readonly formService: VehicleOfferService,
              private store: Store) {
    this.formService.getControl('loadingCity').valueChanges
      .pipe(
        filter(value => typeof value === 'string' && value.trim().length > 0),
        distinctUntilChanged()
      )
      .subscribe(value => {
        const countryCode = this.formService.getControl('loadingCountryCode').value
        this.store.dispatch(offerActions.fetchLoadingLocations({query: value, countryCode: countryCode}));
      });

    this.locations$ = this.store.select(offerSelectors.selectLocations);
    this.showLocationLoader$ = this.store.select(offerSelectors.selectIsLocationFetching);

  }

  setValues(location: LocationResponse) {
    this.formService.getControl('loadingCity').setValue(location.city);
    this.formService.getControl('loadingPostalCode').setValue(location.postalCode);
    this.formService.getControl('loadingCountryCode').setValue(location.countryCode);
  }

  clearLoadingFields() {
    this.formService.getControl('loadingCity').setValue("");
    this.formService.getControl('loadingPostalCode').setValue("");
    this.formService.getControl('loadingCountryCode').setValue("");
    this.store.dispatch(offerActions.resetLocations())
  }
}
