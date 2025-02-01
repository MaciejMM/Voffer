import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as adminActions from '../../../../store/admin/admin.actions';
import { selectEditedUserId } from '../../../../store/admin/admin.selectors';

@Component({
  selector: 'app-delete-user-dialog',
  imports: [
    MatButton
  ],
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss'
})
export class DeleteUserDialogComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  private userId: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteUserDialogComponent>,
    readonly store: Store
  ) {
  }
  ngOnInit() {
    this.store.select(selectEditedUserId).subscribe((id) => {
      this.userId = id;
    });
  }

  onDelete() {
    this.store.dispatch(adminActions.deleteUser({ id: this.userId }));
    this.dialogRef.close();
  }

  onCancel() {
    console.log('Canceling delete user');
    this.dialogRef.close();
  }
}
