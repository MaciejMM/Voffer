import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserDialogComponent } from '../components/delete-user-dialog/delete-user-dialog.component';
import { CreateUserDialogComponent } from '../components/create-user-dialog/create-user-dialog.component';
import { UpdateUserDialogComponent } from '../components/update-user-dialog/update-user-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AdminDialogService {

  dialog = inject(MatDialog);
  constructor() { }


  openCreateUserDialog() {
    this.dialog.open(CreateUserDialogComponent);
  }


  openEditUserDialog() {
    this.dialog.open(UpdateUserDialogComponent);
  }


  openDeleteUserDialog(mongoId: number) {
    this.dialog.open(DeleteUserDialogComponent);
  }


}
