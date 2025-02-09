import { TestBed } from '@angular/core/testing';

import { TelerouteAuthService } from './teleroute-auth.service';

describe('TelerouteAuthService', () => {
  let service: TelerouteAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelerouteAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
