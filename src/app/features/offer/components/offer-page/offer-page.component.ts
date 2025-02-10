import {Component, OnDestroy, OnInit} from '@angular/core';
import {OfferTableComponent} from './offer-table/offer-table.component';
import {TelerouteAuthService} from '../../../../shared/services/teleroute/teleroute-auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-offer-page',
  imports: [
    OfferTableComponent
  ],
  templateUrl: './offer-page.component.html',
  styleUrl: './offer-page.component.scss',

})
export class OfferPageComponent implements OnInit, OnDestroy {
  telerouteServiceSubscription$: Subscription;

  constructor(private telerouteAuthService: TelerouteAuthService) {
  }

  ngOnDestroy(): void {
    this.telerouteServiceSubscription$.unsubscribe();
  }

  ngOnInit(): void {
    this.telerouteServiceSubscription$ = this.telerouteAuthService.refreshToken().subscribe();
  }

}

