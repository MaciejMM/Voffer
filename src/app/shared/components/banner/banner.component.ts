import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {BannerStatus} from '../../model/BannerStatus';


type BannerData = {
  message: string;
  status: BannerStatus;
}

@Component({
  selector: 'app-banner',
  imports: [],
  template: `
    <div class="w-[50vh] bg-white shadow-md rounded-md flex items-center justify-center">
      <div class="container text-red-500 h-40">{{this.data.status}} {{this.data.message }}</div>
    </div>
  `,
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: BannerData) { }

}
