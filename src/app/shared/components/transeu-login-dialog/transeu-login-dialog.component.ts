import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Store} from '@ngrx/store';
import * as appActions from '../../../store/app/app.actions';
import * as appSelectors from '../../../store/app/app.selectors';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-transeu-login-dialog',
  imports: [
    MatButton
  ],
  templateUrl: './transeu-login-dialog.component.html',
  styleUrl: './transeu-login-dialog.component.scss'
})
export class TranseuLoginDialogComponent implements OnInit, OnDestroy {

  authCode: string = '';
  storeSubscription$: Subscription;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.storeSubscription$ = this.store.select(appSelectors.selectTranseuCode).subscribe((code) => {
      if (code) {
        this.authCode = code;
      }
    });
  }

  ngOnDestroy(): void {
    this.storeSubscription$.unsubscribe();
  }


  onLoginToTranseu() {
    this.store.dispatch(appActions.fetchTranseuToken({code: this.authCode}));
  }
}
