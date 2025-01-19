import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {UsersTableComponent} from '../users-table/users-table.component';
import {MatDialog} from '@angular/material/dialog';
import {CreateUserDialogComponent} from '../create-user-dialog/create-user-dialog.component';
import {AppHeaderComponent} from '../../../../shared/components/app-header/app-header.component';

@Component({
    selector: 'app-admin-page',
  imports: [MatButtonModule, UsersTableComponent, AppHeaderComponent],
    templateUrl: './admin-page.component.html',
    styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

  readonly dialog = inject(MatDialog);

  constructor() {
  }

  openDialog() {
    this.dialog.open(CreateUserDialogComponent);
  }
}
