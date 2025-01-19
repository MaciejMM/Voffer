import {Component} from '@angular/core';
import {AppHeaderComponent} from "../../../../shared/components/app-header/app-header.component";
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {CreateOfferTabComponent} from './create-offer-tab/create-offer-tab.component';

@Component({
    selector: 'app-offer-page',
  imports: [
    AppHeaderComponent,
    MatTabGroup,
    MatTab,
    CreateOfferTabComponent
  ],
    templateUrl: './offer-page.component.html',
    styleUrl: './offer-page.component.scss',

})
export class OfferPageComponent {

   goodsTypeList = [
    { code: "ABNORMAL", description: "Abnormal" },
    { code: "CONTAINER", description: "Container" },
    { code: "LIQUID_BULK", description: "Liquid bulk cargo" },
    { code: "GENERAL_MERCHANDISE", description: "General Merchandise" },
    { code: "SOLID_BULK", description: "Solid bulk cargo" }
  ];
  constructor() {
  }

  }

