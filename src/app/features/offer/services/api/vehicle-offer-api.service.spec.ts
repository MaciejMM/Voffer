import { TestBed } from '@angular/core/testing';

import { VehicleOfferApiService } from './vehicle-offer-api.service';

describe('VehicleOfferApiService', () => {
  let service: VehicleOfferApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleOfferApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
