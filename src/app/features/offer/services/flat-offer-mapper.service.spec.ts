import { TestBed } from '@angular/core/testing';

import { FlatOfferMapperService } from './flat-offer-mapper.service';

describe('FlatOfferMapperService', () => {
  let service: FlatOfferMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatOfferMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
