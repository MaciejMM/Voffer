/* tslint:disable:no-unused-variable */

import { TestBed,  inject } from '@angular/core/testing';
import { AdminDialogService } from './admin-dialog.service';

describe('Service: AdminDialog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDialogService]
    });
  });

  it('should ...', inject([AdminDialogService], (service: AdminDialogService) => {
    expect(service).toBeTruthy();
  }));
});
