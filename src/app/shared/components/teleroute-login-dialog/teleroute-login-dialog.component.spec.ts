import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelerouteLoginDialogComponent } from './teleroute-login-dialog.component';

describe('TelerouteLoginDialogComponent', () => {
  let component: TelerouteLoginDialogComponent;
  let fixture: ComponentFixture<TelerouteLoginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelerouteLoginDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelerouteLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
