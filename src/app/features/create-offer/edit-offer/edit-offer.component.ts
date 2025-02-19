import {Component} from '@angular/core';
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoadingSectionComponent} from "../components/create-offer-tab/loading-section/loading-section.component";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {UnloadingSectionComponent} from "../components/create-offer-tab/unloading-section/unloading-section.component";
import {VehicleSelectorComponent} from "../components/create-offer-tab/vehicle-selector/vehicle-selector.component";
import {CreateOfferPageComponent} from '../components/create-offer-tab/create-offer-page.component';
import {VehicleOfferRequest} from '../../offer/model/VehicleOfferRequest';
import {VehicleOfferService} from '../../offer/services/vehicle-offer-service';
import {VehicleRequestMapperService} from '../../offer/services/vehicle-request-mapper.service';
import {Store} from '@ngrx/store';
import {EditOfferService} from '../services/edit-offer.service';
import {ActivatedRoute} from '@angular/router';
import {EditConfirmDialogComponent} from './edit-confirm-dialog/edit-confirm-dialog.component';
import * as offerActions from '../../../store/offer/offer.actions';
@Component({
  selector: 'app-edit-offer',
  imports: [
    AsyncPipe,
    FormsModule,
    LoadingSectionComponent,
    MatButton,
    MatFormField,
    MatHint,
    MatIcon,
    MatInput,
    MatLabel,
    MatProgressSpinner,
    MatRadioButton,
    MatRadioGroup,
    NgIf,
    UnloadingSectionComponent,
    VehicleSelectorComponent,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './edit-offer.component.html',
})
export class EditOfferComponent extends CreateOfferPageComponent {
  id:string;

  constructor(override readonly formService: VehicleOfferService,
              override readonly vehicleRequestMapper: VehicleRequestMapperService,
              override readonly store: Store,
              readonly editOfferService: EditOfferService,
              private route: ActivatedRoute,

  ) {
    super(formService, vehicleRequestMapper, store);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.editOfferService.editOffer(Number(this.id))
  }


  submitEditOffer() {
    const offer: any = this.formService.getForm()
    const mapToRequest: VehicleOfferRequest = this.vehicleRequestMapper.mapToRequest(offer);
    this.store.dispatch(offerActions.setEditingOfferId({id: Number(this.id)}))
    this.store.dispatch(offerActions.setOffer({offerRequest: mapToRequest}))
    this.dialog.open(EditConfirmDialogComponent)
  }

}
