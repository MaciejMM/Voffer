import {Injectable} from '@angular/core';
import {GoodType, VehicleType} from '../model/VehicleType';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }


  goodsTypeList:GoodType[] = [
    { code: "ABNORMAL", description: "Abnormal", translation: "Nietypowe" },
    { code: "CONTAINER", description: "Container", translation: "Kontener" },
    { code: "LIQUID_BULK", description: "Liquid bulk cargo", translation: "Przewóz materiałów ciekłych" },
    { code: "GENERAL_MERCHANDISE", description: "General Merchandise", translation: "Ładunki neutralne" },
    { code: "SOLID_BULK", description: "Solid bulk cargo", translation: "Przewóz materiałów sypkich" },
  ];

  vehicleTypeList: VehicleType[] = [
    {vehicleType: "VAN", typeOfGoods: "GENERAL_MERCHANDISE", matchingValue: "General merchandise", translation: "BUS"},
    {
      vehicleType: "TAUTLINER",
      typeOfGoods: "GENERAL_MERCHANDISE",
      matchingValue: "General merchandise",
      translation: "FIRANKA"
    },
    {
      vehicleType: "BOX",
      typeOfGoods: "GENERAL_MERCHANDISE",
      matchingValue: "General merchandise",
      translation: "SKRZYNIA"
    },
    {
      vehicleType: "OPEN",
      typeOfGoods: "GENERAL_MERCHANDISE",
      matchingValue: "General merchandise",
      translation: "OTWARTY"
    },
    {
      vehicleType: "TRAX_WALKING_FLOOR",
      typeOfGoods: "GENERAL_MERCHANDISE",
      matchingValue: "General merchandise",
      translation: "TRAX (RUCHOMA PODŁOGA)"
    },
    {
      vehicleType: "COIL",
      typeOfGoods: "GENERAL_MERCHANDISE",
      matchingValue: "General merchandise",
      translation: "MULDA"
    },
    {
      vehicleType: "JUMBO",
      typeOfGoods: "GENERAL_MERCHANDISE",
      matchingValue: "General merchandise",
      translation: "JUMBO"
    },
    {
      vehicleType: "MEGATRAILER",
      typeOfGoods: "GENERAL_MERCHANDISE",
      matchingValue: "General merchandise",
      translation: "MEGA"
    },
    {
      vehicleType: "PUBLIC_WORKS_TIPPERS",
      typeOfGoods: "SOLID_BULK",
      matchingValue: "Solid Bulk",
      translation: "WYWROTKA DO PRAC PUBLICZNYCH"
    },
    {
      vehicleType: "CEREAL_TIPPER",
      typeOfGoods: "SOLID_BULK",
      matchingValue: "Solid Bulk",
      translation: "WYWROTKA DO ZBÓŻ"
    },
    {vehicleType: "STEEL_TROUGH", typeOfGoods: "SOLID_BULK", matchingValue: "Solid Bulk", translation: "WANNA"},
    {
      vehicleType: "ARMOURED_TROUGH",
      typeOfGoods: "SOLID_BULK",
      matchingValue: "Solid Bulk",
      translation: "ARMOURED TROUGH"
    },
    {
      vehicleType: "PALLETABLE_BULK_CARRIERS",
      typeOfGoods: "SOLID_BULK",
      matchingValue: "Solid Bulk",
      translation: "SPALETYZOWANY TOWAR LUZEM"
    },
    {
      vehicleType: "WALKING_FLOOR",
      typeOfGoods: "SOLID_BULK",
      matchingValue: "Solid Bulk",
      translation: "RUCHOMA PODŁOGA"
    },
    {vehicleType: "LIQUID_TANK", typeOfGoods: "LIQUID_BULK", matchingValue: "Liquid Bulk", translation: "CYSTERNA"},
    {vehicleType: "PULVERULENT_TANK", typeOfGoods: "LIQUID_BULK", matchingValue: "Liquid Bulk", translation: "SILOS"},
    {vehicleType: "MEGATRAILER", typeOfGoods: "ABNORMAL", matchingValue: "Abnormal", translation: "MEGA"},
    {vehicleType: "FLAT", typeOfGoods: "ABNORMAL", matchingValue: "Abnormal", translation: "PLATFORMA"},
    {
      vehicleType: "LOWLOADER",
      typeOfGoods: "ABNORMAL",
      matchingValue: "Abnormal",
      translation: "POJAZD NISKOPODWOZIOWY"
    },
    {
      vehicleType: "CONTAINER_20",
      typeOfGoods: "CONTAINER",
      matchingValue: "Container",
      translation: "KONTENER 20-STOPOWY"
    },
    {
      vehicleType: "CONTAINER_40",
      typeOfGoods: "CONTAINER",
      matchingValue: "Container",
      translation: "KONTENER 40-STOPOWY"
    },
    {
      vehicleType: "CONTAINER_45",
      typeOfGoods: "CONTAINER",
      matchingValue: "Container",
      translation: "KONTENER 45-STOPOWY"
    },
    {
      vehicleType: "ISOTHERMIC",
      typeOfGoods: "TEMPERATURE_CONTROLLED",
      matchingValue: "Temperature Controlled",
      translation: "IZOTERMA"
    },
    {
      vehicleType: "REFRIGERATED",
      typeOfGoods: "TEMPERATURE_CONTROLLED",
      matchingValue: "Temperature Controlled",
      translation: "CHŁODNIA"
    },
    {
      vehicleType: "FREEZER",
      typeOfGoods: "TEMPERATURE_CONTROLLED",
      matchingValue: "Temperature Controlled",
      translation: "MROŹNIA"
    },
    {
      vehicleType: "MULTI_TEMPERATURE",
      typeOfGoods: "TEMPERATURE_CONTROLLED",
      matchingValue: "Temperature Controlled",
      translation: "MULTI TEMPERATURA"
    }
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

  getCountryList() {
    return this.countries;
  }


  getTranslationForVehicleType(vehicleType: string): string {
    return this.vehicleTypeList?.find(v => v.vehicleType === vehicleType)?.translation ?? vehicleType;
  }

  getTranslationForGoodsType(goodsType: string): string {
    return this.goodsTypeList?.find(g => g.code === goodsType)?.translation ?? goodsType;
  }

}
