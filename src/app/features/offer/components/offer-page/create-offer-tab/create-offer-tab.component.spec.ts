import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfferTabComponent } from './create-offer-tab.component';

describe('CreateOfferTabComponent', () => {
  let component: CreateOfferTabComponent;
  let fixture: ComponentFixture<CreateOfferTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOfferTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOfferTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
