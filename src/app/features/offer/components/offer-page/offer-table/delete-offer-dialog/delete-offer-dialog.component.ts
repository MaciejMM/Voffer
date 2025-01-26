import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {VehicleOfferApiService} from '../../../../services/api/vehicle-offer-api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export type DialogData =  {
  offerId: number;
}

@Component({
  selector: 'app-delete-offer-dialog',
  imports: [
    MatButton
  ],
  templateUrl: './delete-offer-dialog.component.html',
  styleUrl: './delete-offer-dialog.component.scss'
})
export class DeleteOfferDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteOfferDialogComponent>);
  private _snackBar = inject(MatSnackBar);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);


  constructor(readonly vehicleOfferApiService: VehicleOfferApiService) {
  }

  deleteOffer() {
    this.vehicleOfferApiService.deleteOffer(this.data.offerId).subscribe(() => {
      this._snackBar.open('Offer deleted', 'OK', {
        duration: 3000,
      });
      this.dialogRef.close();
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
