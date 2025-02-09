import {Component} from '@angular/core';
import {OfferTableComponent} from './offer-table/offer-table.component';

@Component({
    selector: 'app-offer-page',
  imports: [
    OfferTableComponent
  ],
    templateUrl: './offer-page.component.html',
    styleUrl: './offer-page.component.scss',

})
export class OfferPageComponent {
  constructor() {
  }

  }

