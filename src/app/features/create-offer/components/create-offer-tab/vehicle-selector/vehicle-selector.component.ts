import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {GoodType, VehicleType} from '../../../../offer/model/VehicleType';
import {VehicleOfferService} from '../../../../offer/services/vehicle-offer-service';
import {DataService} from '../../../../offer/services/data.service';

@Component({
  selector: 'app-vehicle-selector',
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
  ],
  templateUrl: './vehicle-selector.component.html',
  styleUrl: './vehicle-selector.component.scss'
})
export class VehicleSelectorComponent implements OnInit {

  goodsTypeControl: FormControl;
  vehicleTypeControl: FormControl;
  goodsTypeList: GoodType[];
  filteredList: VehicleType[];
  vehicleTypeList: VehicleType[];

  constructor(
    private readonly formService: VehicleOfferService,
    private readonly dataService: DataService,
  ) {

  }

  ngOnInit(): void {
    this.goodsTypeList = this.dataService.goodsTypeList;
    this.vehicleTypeList = this.dataService.vehicleTypeList;
    this.goodsTypeControl = this.formService.getControl('goodsType');
    this.vehicleTypeControl = this.formService.getControl('vehicleType');
    if(this.goodsTypeControl.value) {
      this.filteredList = this.vehicleTypeList.filter(vehicle => vehicle.typeOfGoods === this.goodsTypeControl.value);
    }
  }

  onSelectedVehicleType(vehicleType: string) {
    this.vehicleTypeControl.setValue(vehicleType);
    this.filteredList = this.vehicleTypeList.filter(vehicle => vehicle.typeOfGoods === vehicleType);

  }

}
