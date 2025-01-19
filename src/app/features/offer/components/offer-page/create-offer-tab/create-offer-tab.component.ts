import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatButton} from '@angular/material/button';
import {VehicleSelectorComponent} from './vehicle-selector/vehicle-selector.component';
import {LoadingSectionComponent} from './loading-section/loading-section.component';
import {UnloadingSectionComponent} from './unloading-section/unloading-section.component';
import {VehicleOfferService} from '../../../services/vehicle-offer-service';
import {Subscription} from 'rxjs';
import {NgClass, NgIf} from '@angular/common';

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
    NgIf
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-offer-tab.component.html',
  styleUrl: './create-offer-tab.component.scss'
})
export class CreateOfferTabComponent {

  description: FormControl;
  weight: FormControl;
  length: FormControl;
  volume: FormControl;
  truckLoad: FormControl;

  constructor(readonly formService: VehicleOfferService) {
    this.description = this.formService.getControl('description');
    this.weight = this.formService.getControl('weight');
    this.length = this.formService.getControl('length');
    this.volume = this.formService.getControl('volume');
    this.truckLoad = this.formService.getControl('truckLoad');
  }


  submitOffer() {
    this.formService.form.updateValueAndValidity();
    if (this.formService.form.valid) {
      // Proceed with form submission
      console.log('Form is valid, proceed with submission');
    } else {
      // Handle validation errors
      console.log('Form is invalid, handle errors');
    }
    console.log(this.formService.form.value);
  }

}
