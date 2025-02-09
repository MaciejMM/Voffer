import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloadingSectionComponent } from './unloading-section.component';

describe('UnloadingSectionComponent', () => {
  let component: UnloadingSectionComponent;
  let fixture: ComponentFixture<UnloadingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnloadingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnloadingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
