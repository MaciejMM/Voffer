import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranseuLoginDialogComponent } from './transeu-login-dialog.component';

describe('TranseuLoginDialogComponent', () => {
  let component: TranseuLoginDialogComponent;
  let fixture: ComponentFixture<TranseuLoginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranseuLoginDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranseuLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
