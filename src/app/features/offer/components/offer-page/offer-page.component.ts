import {Component} from '@angular/core';
import {AppHeaderComponent} from "../../../../shared/components/app-header/app-header.component";
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {CreateOfferTabComponent} from './create-offer-tab/create-offer-tab.component';
import {OfferTableComponent} from './offer-table/offer-table.component';

@Component({
    selector: 'app-offer-page',
  imports: [
    AppHeaderComponent,
    MatTabGroup,
    MatTab,
    CreateOfferTabComponent,
    OfferTableComponent
  ],
    templateUrl: './offer-page.component.html',
    styleUrl: './offer-page.component.scss',

})
export class OfferPageComponent {
  constructor() {
  }

  }

