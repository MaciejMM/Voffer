import {AfterViewInit, Component, inject, OnDestroy, ViewChild} from '@angular/core';
import {UserService} from '../../services/user-service';
import {CommonModule} from '@angular/common';
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
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {DeleteUserDialogComponent} from '../delete-user-dialog/delete-user-dialog.component';
import {User} from '../../models/User';

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

  constructor(readonly userService: UserService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnDestroy(): void {
    this.usersSubscription$.unsubscribe();
  }

  ngAfterViewInit() {
    this.getUsers$();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getUsers$() {
    this.usersSubscription$ = this.userService.getUsers().subscribe({
        next: (res) => {
          this.dataSource.data = res
        },
        error: (error: HttpErrorResponse) => {
          console.log(error)
        }
      }
    );
  }

  showDeleteDialog(userId: User) {
    this.dialog.open(DeleteUserDialogComponent, {
      data: {
        email: userId.email,
        id: userId.id
      }
    });
  }

}
