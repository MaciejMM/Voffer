import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfferComponent } from './edit-offer.component';

describe('EditOfferComponent', () => {
  let component: EditOfferComponent;
  let fixture: ComponentFixture<EditOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
