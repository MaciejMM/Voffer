import {Component, OnDestroy, OnInit} from '@angular/core';
import {OfferTableComponent} from './offer-table/offer-table.component';
import {TelerouteAuthService} from '../../../../shared/services/teleroute/teleroute-auth.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as appActions from '../../../../store/app/app.actions';

@Component({
  selector: 'app-offer-page',
  imports: [
    OfferTableComponent
  ],
  templateUrl: './offer-page.component.html',
  styleUrl: './offer-page.component.scss',

})
export class OfferPageComponent implements OnInit {

  constructor(readonly store: Store) {
  }


  ngOnInit(): void {
    this.store.dispatch(appActions.fetchTelerouteRefreshToken());
  }

}

