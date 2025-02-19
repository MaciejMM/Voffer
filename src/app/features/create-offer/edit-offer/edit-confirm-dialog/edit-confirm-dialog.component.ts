import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import * as offerSelectors from '../../../../store/offer/offer.selectors';
import * as offerActions from '../../../../store/offer/offer.actions';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-edit-confirm-dialog',
  imports: [
    MatButton
  ],
  templateUrl: './edit-confirm-dialog.component.html',
  styleUrl: './edit-confirm-dialog.component.scss'
})
export class EditConfirmDialogComponent {
  readonly editOfferDialog = inject(MatDialogRef<EditConfirmDialogComponent>);
  editOffer: any;
  editOfferId: number;

  constructor(readonly store: Store) {
    combineLatest([
      this.store.select(offerSelectors.selectEditingOfferId),
      this.store.select(offerSelectors.selectEditOffer)
    ]).subscribe(([id, editOffer]) => {
      this.editOfferId = id!;
      this.editOffer = editOffer;
    });
  }

  closeDialog() {
    this.editOfferDialog.close();
  }

  submitEditOffer() {
    this.store.dispatch(offerActions.editOffer({id: this.editOfferId, offerRequest: this.editOffer}));
    this.editOfferDialog.close();
  }
}
