import {Component, inject, OnInit} from '@angular/core';
import {OfferTableComponent} from './offer-table/offer-table.component';
import {Store} from '@ngrx/store';
import * as appActions from '../../../../store/app/app.actions';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {
  TranseuLoginDialogComponent
} from '../../../../shared/components/transeu-login-dialog/transeu-login-dialog.component';

@Component({
  selector: 'app-offer-page',
  imports: [
    OfferTableComponent
  ],
  templateUrl: './offer-page.component.html',
  styleUrl: './offer-page.component.scss',

})
export class OfferPageComponent implements OnInit {
  readonly dialog = inject(MatDialog);


  constructor(readonly store: Store, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    if (this.route.snapshot.queryParamMap.get('code') !== undefined) {
      this.store.dispatch(appActions.setTranseuCode({code: this.route.snapshot.queryParamMap.get('code')!}));
      this.dialog.open(TranseuLoginDialogComponent);
    }
    this.store.dispatch(appActions.fetchTelerouteRefreshToken());
  }

}

