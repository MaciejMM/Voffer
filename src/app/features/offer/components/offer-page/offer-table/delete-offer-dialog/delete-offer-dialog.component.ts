import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDialogRef} from '@angular/material/dialog';
import * as offerSelectors from '../../../../../../store/offer/offer.selectors';
import {Store} from '@ngrx/store';
import * as offerActions from '../../../../../../store/offer/offer.actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-delete-offer-dialog',
  imports: [
    MatButton
  ],
  templateUrl: './delete-offer-dialog.component.html',
  styleUrl: './delete-offer-dialog.component.scss'
})
export class DeleteOfferDialogComponent implements OnInit, OnDestroy {
  readonly dialogRef = inject(MatDialogRef<DeleteOfferDialogComponent>);
  deletedOfferId: number;
  subscription$: Subscription;

  constructor(readonly store: Store) {
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngOnInit() {
    this.subscription$ = this.store.select(offerSelectors.selectEditingOfferId).subscribe((editingOfferId) => {
      this.deletedOfferId = editingOfferId!;
    });
  }

  deleteOffer() {
    this.store.dispatch(offerActions.deleteOffer({id: this.deletedOfferId}));
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
