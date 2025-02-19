import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from "@angular/material/datepicker";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import {VehicleOfferService} from '../../../../offer/services/vehicle-offer-service';

@Component({
  selector: 'app-calendar',
  imports: [
    MatDateRangeInput,
    MatDateRangePicker,
    MatDatepickerToggle,
    MatEndDate,
    MatFormField,
    MatHint,
    MatLabel,
    MatStartDate,
    MatSuffix,
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  @Input() type: 'loading' | 'unloading';
  minDate = new Date();

  loadingStartDate: FormControl;
  loadingEndDate: FormControl;
  unloadingStartDate: FormControl;
  unloadingEndDate: FormControl;

  constructor(private readonly formService: VehicleOfferService) {
    this.loadingStartDate = this.formService.getControl('loadingStartDate');
    this.loadingEndDate = this.formService.getControl('loadingEndDate');
    this.unloadingStartDate = this.formService.getControl('unloadingStartDate');
    this.unloadingEndDate = this.formService.getControl('unloadingEndDate');
  }

}


