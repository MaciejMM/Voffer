import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatTimepicker, MatTimepickerInput, MatTimepickerToggle} from "@angular/material/timepicker";
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {VehicleOfferService} from '../../../../services/vehicle-offer-service';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-time-picker',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatTimepicker,
    MatTimepickerInput,
    MatTimepickerToggle,
    ReactiveFormsModule
  ],
  template: `
    <mat-form-field class="">
      <mat-label>{{ time }}</mat-label>
      <input
        matInput  [matTimepicker]="timePicker" [formControl]="timeControl">
      <mat-timepicker-toggle matIconSuffix [for]="timePicker"></mat-timepicker-toggle>
      <mat-timepicker #timePicker></mat-timepicker>
    </mat-form-field>
  `,
  styleUrl: './time-picker.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class TimePickerComponent implements OnInit {

  @Input() time: "loadingStartTime" | "loadingEndTime" | "unloadingStartTime" | "unloadingEndTime";
  timeControl: FormControl;

  constructor(private readonly formService: VehicleOfferService) {
  }

  ngOnInit() {
    this.timeControl = this.formService.getControl(this.time);
  }

}

