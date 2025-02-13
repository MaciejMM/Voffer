import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatButton} from '@angular/material/button';
import {VehicleSelectorComponent} from './vehicle-selector/vehicle-selector.component';
import {LoadingSectionComponent} from './loading-section/loading-section.component';
import {UnloadingSectionComponent} from './unloading-section/unloading-section.component';
import {AsyncPipe, NgClass, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Store} from '@ngrx/store';
import {MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {Observable} from 'rxjs';
import {VehicleOfferService} from '../../../offer/services/vehicle-offer-service';
import {VehicleRequestMapperService} from '../../../offer/services/vehicle-request-mapper.service';
import * as offerActions from '../../../../store/offer/offer.actions';
import * as offerSelectors from '../../../../store/offer/offer.selectors';
import * as appActions from '../../../../store/app/app.actions';
import {VehicleOfferRequest} from '../../../offer/model/VehicleOfferRequest';
import * as appSelectors from '../../../../store/app/app.selectors';
import {MatDialog} from '@angular/material/dialog';
import {
  TelerouteLoginDialogComponent
} from '../../../../shared/components/teleroute-login-dialog/teleroute-login-dialog.component';

@Component({
  selector: 'app-create-offer-tab',
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatButton,
    VehicleSelectorComponent,
    LoadingSectionComponent,
    UnloadingSectionComponent,
    NgClass,
    NgIf,
    MatIcon,
    MatProgressSpinner,
    MatProgressSpinnerModule,
    AsyncPipe,
    MatHint
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-offer-page.component.html',
  styleUrl: './create-offer-page.component.scss'
})
export class CreateOfferPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  description: FormControl;
  weight: FormControl;
  length: FormControl;
  volume: FormControl;
  truckLoad: FormControl;
  isFormValid: boolean = false;
  isTelerouteAuthenticated$: Observable<boolean>;
  readonly dialog = inject(MatDialog);

  constructor(readonly formService: VehicleOfferService,
              readonly vehicleRequestMapper: VehicleRequestMapperService,
              readonly store: Store
  ) {
    this.description = this.formService.getControl('description');
    this.weight = this.formService.getControl('weight');
    this.length = this.formService.getControl('length');
    this.volume = this.formService.getControl('volume');
    this.truckLoad = this.formService.getControl('truckLoad');
  }

  ngOnInit(): void {
    this.store.dispatch(appActions.fetchTelerouteRefreshToken());
    this.isTelerouteAuthenticated$ = this.store.select(appSelectors.selectIsAuthenticatedToTeleroute);
    this.isLoading$ = this.store.select(offerSelectors.selectIsLoading);
    this.formService.formStatusChanges().subscribe({
      next: (status: any) => this.isFormValid = status === 'VALID',
      error: (error: any) => console.error('Error in form', error)
    });
  }

  submitOffer() {
    this.formService.disableForm();
    const offer: any = this.formService.getForm()
    const mapToRequest: VehicleOfferRequest = this.vehicleRequestMapper.mapToRequest(offer);
    this.store.dispatch(offerActions.createOffer({offer: mapToRequest}));
  }

  openTelerouteLoginDialog() {
    this.dialog.open(TelerouteLoginDialogComponent);
  }
}
