import { TestBed } from '@angular/core/testing';

import { TranseuTokenService } from './transeu-token.service';

describe('TranseuTokenService', () => {
  let service: TranseuTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranseuTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
