import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOfferDialogComponent } from './delete-offer-dialog.component';

describe('DeleteOfferDialogComponent', () => {
  let component: DeleteOfferDialogComponent;
  let fixture: ComponentFixture<DeleteOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteOfferDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
