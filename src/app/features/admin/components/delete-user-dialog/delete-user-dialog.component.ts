import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-delete-user-dialog',
  imports: [
    MatButton
  ],
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss'
})
export class DeleteUserDialogComponent {
  data = inject(MAT_DIALOG_DATA);

  constructor(
    public dialogRef: MatDialogRef<DeleteUserDialogComponent>,
    readonly userService: UserService
  ) {
  }

  onDelete() {
    this.userService.deleteUser(this.data.id).subscribe({
      next: () => {
        console.log('User deleted');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error deleting user', error);
      }
    } );
  }

  onCancel() {
    console.log('Canceling delete user');
    this.dialogRef.close();
  }
}
