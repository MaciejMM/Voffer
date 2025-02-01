import { AfterViewInit, Component, inject, OnDestroy, ViewChild } from '@angular/core';
import { UserService } from '../../services/user-service';
import { CommonModule } from '@angular/common';
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from '@angular/material/table';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { User } from '../../models/User';
import { Store } from '@ngrx/store';
import * as  AdminState from '../../../../store/admin/admin.reducer';
import * as adminActions from '../../../../store/admin/admin.actions';
import { AdminDialogService } from '../../services/admin-dialog.service';
import * as adminSelectors from '../../../../store/admin/admin.selectors';

@Component({
  selector: 'users-table',
  imports: [CommonModule, MatHeaderRow,
    MatRow, MatHeaderCell, MatCell, MatColumnDef, MatTable,
    MatLabel, MatFormField, MatFormFieldModule, MatInputModule,
    MatTableModule, MatButton, MatSortModule, MatPaginatorModule],
  providers: [UserService],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss'
})
export class UsersTableComponent implements AfterViewInit, OnDestroy {
  usersSubscription$: Subscription;
  readonly displayedColumns: string[] = ['email', 'firstName', 'lastName', 'createdAt', 'updatedAt', 'actions'];
  dataSource = new MatTableDataSource();
  readonly dialog = inject(MatDialog);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(readonly userService: UserService,
    readonly store: Store<AdminState.State>,
    readonly adminDialogService: AdminDialogService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnDestroy(): void {
    this.usersSubscription$.unsubscribe();
  }

  ngAfterViewInit() {
    this.store.dispatch(adminActions.fetchUsers());
    this.usersSubscription$ = this.store.select(adminSelectors.selectUserList).subscribe((users: User[]) => {
      this.dataSource.data = users;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showDeleteDialog(userId: number) {
    this.store.dispatch(adminActions.setEditedUserId({ id: userId }));
    this.adminDialogService.openDeleteUserDialog(userId);
  }

  showUpdateDialog(userId: number) {
    this.store.dispatch(adminActions.setEditedUserId({ id: userId }));
    this.adminDialogService.openEditUserDialog();
  }
}
