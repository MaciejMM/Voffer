import { Injectable } from '@angular/core';
import {GoodType, VehicleType} from '../model/VehicleType';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  goodsTypeList:GoodType[] = [
    { code: "ABNORMAL", description: "Abnormal" },
    { code: "CONTAINER", description: "Container" },
    { code: "LIQUID_BULK", description: "Liquid bulk cargo" },
    { code: "GENERAL_MERCHANDISE", description: "General Merchandise" },
    { code: "SOLID_BULK", description: "Solid bulk cargo" }
  ];


  vehicleTypeList:VehicleType[]  = [
    { vehicleType: "VAN", typeOfGoods: "GENERAL_MERCHANDISE", matchingValue: "General merchandise" },
    { vehicleType: "TAUTLINER", typeOfGoods: "GENERAL_MERCHANDISE", matchingValue: "General merchandise" },
    { vehicleType: "BOX", typeOfGoods: "GENERAL_MERCHANDISE", matchingValue: "General merchandise" },
    { vehicleType: "OPEN", typeOfGoods: "GENERAL_MERCHANDISE", matchingValue: "General merchandise" },
    { vehicleType: "TRAX_WALKING_FLOOR", typeOfGoods: "GENERAL_MERCHANDISE", matchingValue: "General merchandise" },
    { vehicleType: "COIL", typeOfGoods: "GENERAL_MERCHANDISE", matchingValue: "General merchandise" },
    { vehicleType: "JUMBO", typeOfGoods: "GENERAL_MERCHANDISE", matchingValue: "General merchandise" },
    { vehicleType: "MEGATRAILER", typeOfGoods: "GENERAL_MERCHANDISE", matchingValue: "General merchandise" },
    { vehicleType: "PUBLIC_WORKS_TIPPERS", typeOfGoods: "SOLID_BULK", matchingValue: "Solid Bulk" },
    { vehicleType: "CEREAL_TIPPER", typeOfGoods: "SOLID_BULK", matchingValue: "Solid Bulk" },
    { vehicleType: "STEEL_TROUGH", typeOfGoods: "SOLID_BULK", matchingValue: "Solid Bulk" },
    { vehicleType: "ARMOURED_TROUGH", typeOfGoods: "SOLID_BULK", matchingValue: "Solid Bulk" },
    { vehicleType: "PALLETABLE_BULK_CARRIERS", typeOfGoods: "SOLID_BULK", matchingValue: "Solid Bulk" },
    { vehicleType: "WALKING_FLOOR", typeOfGoods: "SOLID_BULK", matchingValue: "Solid Bulk" },
    { vehicleType: "LIQUID_TANK", typeOfGoods: "LIQUID_BULK", matchingValue: "Liquid Bulk" },
    { vehicleType: "PULVERULENT_TANK", typeOfGoods: "LIQUID_BULK", matchingValue: "Liquid Bulk" },
    { vehicleType: "MEGATRAILER", typeOfGoods: "ABNORMAL", matchingValue: "Abnormal" },
    { vehicleType: "FLAT", typeOfGoods: "ABNORMAL", matchingValue: "Abnormal" },
    { vehicleType: "LOWLOADER", typeOfGoods: "ABNORMAL", matchingValue: "Abnormal" },
    { vehicleType: "CONTAINER_20", typeOfGoods: "CONTAINER", matchingValue: "Container" },
    { vehicleType: "CONTAINER_40", typeOfGoods: "CONTAINER", matchingValue: "Container" },
    { vehicleType: "CONTAINER_45", typeOfGoods: "CONTAINER", matchingValue: "Container" },
    { vehicleType: "ISOTHERMIC", typeOfGoods: "TEMPERATURE_CONTROLLED", matchingValue: "Temperature Controlled" },
    { vehicleType: "REFRIGERATED", typeOfGoods: "TEMPERATURE_CONTROLLED", matchingValue: "Temperature Controlled" },
    { vehicleType: "FREEZER", typeOfGoods: "TEMPERATURE_CONTROLLED", matchingValue: "Temperature Controlled" },
    { vehicleType: "MULTI_TEMPERATURE", typeOfGoods: "TEMPERATURE_CONTROLLED", matchingValue: "Temperature Controlled" }
  ];

  private readonly countries = [
    {name: "Austria", code: "AT"},
    {name: "Belgium", code: "BE"},
    {name: "France", code: "FR"},
    {name: "Germany", code: "DE"},
    {name: "Italy", code: "IT"},
    {name: "Luxembourg", code: "LU"},
    {name: "Netherlands", code: "NL"},
    {name: "Poland", code: "PL"},
    {name: "Portugal", code: "PT"},
    {name: "Romania", code: "RO"},
    {name: "Spain", code: "ES"},
    {name: "Switzerland", code: "CH"},
    {name: "United Kingdom", code: "GB"},
    {name: "Albania", code: "AL"},
    {name: "Andorra", code: "AD"},
    {name: "Belarus", code: "BY"},
    {name: "Bosnia and Herzegovina", code: "BA"},
    {name: "Bulgaria", code: "BG"},
    {name: "Cyprus", code: "CY"},
    {name: "Czech Republic", code: "CZ"},
    {name: "Denmark", code: "DK"},
    {name: "Estonia", code: "EE"},
    {name: "Finland", code: "FI"},
    {name: "Greece", code: "GR"},
    {name: "Hungary", code: "HU"},
    {name: "Croatia", code: "HR"},
    {name: "Iceland", code: "IS"},
    {name: "Ireland", code: "IE"},
    {name: "Latvia", code: "LV"},
    {name: "Liechtenstein", code: "LI"},
    {name: "Lithuania", code: "LT"},
    {name: "Macedonia, Republic of", code: "MK"},
    {name: "Malta", code: "MT"},
    {name: "Moldova", code: "MD"},
    {name: "Monaco", code: "MC"},
    {name: "Montenegro", code: "ME"},
    {name: "Norway", code: "NO"},
    {name: "San Marino", code: "SM"},
    {name: "Serbia", code: "RS"},
    {name: "Slovakia", code: "SK"},
    {name: "Slovenia", code: "SI"},
    {name: "Sweden", code: "SE"},
    {name: "Turkey", code: "TR"},
    {name: "Ukraine", code: "UA"},
    {name: "Gibraltar", code: "GI"},
    {name: "Russian Federation", code: "RU"},
  ];

  getCountryList(){
    return this.countries;
  }
}
