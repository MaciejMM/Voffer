import {TestBed} from '@angular/core/testing';
import {FormControl, } from '@angular/forms';

import {VehicleRequestMapperService} from './vehicle-request-mapper.service';
import {VehicleOfferForm} from './vehicle-offer-service';

describe('VehicleRequestMapperService', () => {
  let service: VehicleRequestMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleRequestMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should map form to request', () => {
    //given
    const form:VehicleOfferForm = {
      vehicleType: new FormControl('VAN'),
      goodsType: new FormControl('GENERAL_MERCHANDISE'),
      loadingStartDate: new FormControl(new Date('2021-08-01T00:00:00.000Z')),
      loadingEndDate: new FormControl(new Date('2021-08-01T00:00:00.000Z')),
      loadingStartTime: new FormControl(new Date('2021-08-01T10:00:00.000Z')),
      loadingEndTime: new FormControl(new Date('2021-08-01T12:00:00.000Z')),
      loadingCountryCode: new FormControl('PL'),
      loadingCity: new FormControl('Warsaw'),
      loadingPostalCode: new FormControl('00-000'),
      unloadingStartDate: new FormControl(new Date('2021-08-02T00:00:00.000Z')),
      unloadingEndDate: new FormControl(new Date('2021-08-02T00:00:00.000Z')),
      unloadingStartTime: new FormControl(new Date('2021-08-02T10:00:00.000Z')),
      unloadingEndTime: new FormControl(new Date('2021-08-02T12:00:00.000Z')),
      unloadingCountryCode: new FormControl('DE'),
      unloadingCity: new FormControl('Berlin'),
      unloadingPostalCode: new FormControl('00-000'),
      truckLoad: new FormControl('FTL'),
      description: new FormControl('description'),
      weight: new FormControl(122),
      length: new FormControl(10),
      volume: new FormControl(300)

    }
    //when
    const request = service.mapToRequest(form);

    //then
    expect(request.loadingPlace.country).toBe('PL');
    expect(request.loadingPlace.postalCode).toBe('00-000');
    expect(request.loadingPlace.city).toBe('Warsaw');
    expect(request.loadingPlace.loadingStartDateAndTime.toDateString()).toEqual(new Date('2021-08-01T10:00:00.000Z').toDateString());
    expect(request.loadingPlace.loadingEndDateAndTime.toDateString()).toEqual(new Date('2021-08-01T14:00:00.000Z').toDateString());

    expect(request.unloadingPlace.country).toBe('DE');
    expect(request.unloadingPlace.postalCode).toBe('00-000');
    expect(request.unloadingPlace.city).toBe('Berlin');
    expect(request.unloadingPlace.unloadingStartDateAndTime.toDateString()).toEqual(new Date('2021-08-02T12:00:00.000Z').toDateString());
    expect(request.unloadingPlace.unloadingEndDateAndTime.toDateString()).toEqual(new Date('2021-08-02T14:00:00.000Z').toDateString());

    expect(request.description).toBe('description');
    expect(request.loadingType).toBe('FTL');
    expect(request.loadingWeight).toBe(122);
    expect(request.loadingLength).toBe(10);
    expect(request.loadingVolume).toBe(300);
    expect(request.loadingBodyType).toBe('VAN');
    expect(request.goodsType).toBe('GENERAL_MERCHANDISE');
    expect(request.publishSelected).toBeNull();
  })

  it('should map all values without throwing error', () => {
     //given
      const form:VehicleOfferForm = {
        vehicleType: new FormControl("MEGATRAILER"),
        goodsType: new FormControl("ABNORMAL"),
        loadingStartDate: new FormControl(new Date("2025-01-06T01:00:00.000Z")),
        loadingEndDate: new FormControl(new Date("2025-01-06T04:00:00.000Z")),
        loadingStartTime: new FormControl(new Date("2025-01-20T03:30:00.000Z")),
        loadingEndTime: new FormControl(new Date("2025-01-20T05:00:00.000Z")),
        loadingCountryCode:new FormControl ("PL"),
        loadingCity: new FormControl("Pocz"),
        loadingPostalCode: new FormControl("41-908"),
        unloadingStartDate: new FormControl(new Date("2025-01-20T10:00:00.000Z")),
        unloadingEndDate: new FormControl(new Date("2025-01-20T11:00:00.000Z")),
        unloadingStartTime: new FormControl(new Date("2025-01-20T00:00:00.000Z")),
        unloadingEndTime: new FormControl(new Date("2025-01-20T01:00:00.000Z")),
        unloadingCountryCode: new FormControl("PL"),
        unloadingCity: new FormControl("Jelcz"),
        unloadingPostalCode: new FormControl("55-231"),
        truckLoad: new FormControl("FTL"),
        description: new FormControl("qedcsds"),
        weight: new FormControl(2),
        length: new FormControl(3),
        volume: new FormControl(4)
      }

      //when
      const request = service.mapToRequest(form);

      //then

      expect(request.loadingPlace.country).toBe('PL');
      expect(request.loadingPlace.postalCode).toBe('41-908');
      expect(request.loadingPlace.city).toBe('Pocz');
      expect(request.loadingPlace.loadingStartDateAndTime.toDateString()).toEqual(new Date('2025-01-06T03:30:00.000Z').toDateString());
      expect(request.loadingPlace.loadingEndDateAndTime.toDateString()).toEqual(new Date('2025-01-06T05:00:00.000Z').toDateString());
      expect(request.unloadingPlace.country).toBe('PL');
      expect(request.unloadingPlace.postalCode).toBe('55-231');
      expect(request.unloadingPlace.city).toBe('Jelcz');
      expect(request.unloadingPlace.unloadingStartDateAndTime.toDateString()).toEqual(new Date('2025-01-20T00:00:00.000Z').toDateString());
      expect(request.unloadingPlace.unloadingEndDateAndTime.toDateString()).toEqual(new Date('2025-01-20T01:00:00.000Z').toDateString());

      expect(request.description).toBe('qedcsds');
      expect(request.loadingType).toBe('FTL');
      expect(request.loadingWeight).toBe(2);
      expect(request.loadingLength).toBe(3);
      expect(request.loadingVolume).toBe(4);
      expect(request.loadingBodyType).toBe('MEGATRAILER');
      expect(request.goodsType).toBe('ABNORMAL');
      expect(request.publishSelected).toBeNull();

  }
  )
});
