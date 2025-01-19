import {Component, Input} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {VehicleOfferService} from '../../../../services/vehicle-offer-service';
import {DataService} from '../../../../services/data.service';
@Component({
  selector: 'app-country-selector',
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    ReactiveFormsModule
  ],
  template: `
    <mat-form-field>
      <mat-label>Kraj</mat-label>
      <mat-select [formControl]="type=='loading' ? loadingCountryCode :  unloadingCountryCode ">
        @for( country of getSortedCountries();track country.code){
          <mat-option [value]="country.code">
            {{ country.code }}
          </mat-option>
        }

      </mat-select>
    </mat-form-field>
  `,
  styleUrl: './country-selector.component.scss'
})
export class CountrySelectorComponent {
  @Input() type: 'loading' | 'unloading';

  unloadingCountryCode: FormControl;
  loadingCountryCode: FormControl;

  constructor(private readonly formService: VehicleOfferService,
              private readonly dataService: DataService) {
    this.loadingCountryCode = this.formService.getControl('loadingCountryCode');
    this.unloadingCountryCode = this.formService.getControl('unloadingCountryCode');
  }

  getSortedCountries() {
    return this.dataService.getCountryList().sort((a:{name:string,code:string}, b:{name:string,code:string}) => a.name.localeCompare(b.name));
  }


}
