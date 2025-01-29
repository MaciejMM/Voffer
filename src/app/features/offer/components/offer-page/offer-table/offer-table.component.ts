import {AfterViewInit, Component, inject, OnDestroy, ViewChild} from '@angular/core';
import {VehicleOfferApiService} from '../../../services/api/vehicle-offer-api.service';
import {Offer} from '../../../model/offer';
import {Subscription} from 'rxjs';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {DatePipe, LowerCasePipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {DeleteOfferDialogComponent} from './delete-offer-dialog/delete-offer-dialog.component';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';


@Component({
  selector: 'app-offer-table',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    DatePipe,
    MatLabel,
    MatFormField,
    MatInput,
    MatFormField,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatMenu,
    MatButton,
    MatMenuItem,
    MatMenuTrigger,
    MatIcon,
    MatTooltip,
  ],
  templateUrl: './offer-table.component.html',
  styleUrl: './offer-table.component.scss'
})
export class OfferTableComponent implements OnDestroy, AfterViewInit {
  displayedColumns: string[] = ['unloadingPlace.unloadingCity', 'loadingPlace', 'unloadingDate', 'unloadingPlace', 'loadingBodyType', 'loadingType', "loadingWeight", "loadingLength", "loadingVolume", "status", "actions"];
  dataSource: MatTableDataSource<Offer> = new MatTableDataSource();
  readonly dialog = inject(MatDialog);

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  OfferTableSubscription$: Subscription;

  constructor(readonly vehicleOfferApiService: VehicleOfferApiService) {
  }

  ngAfterViewInit(): void {
    this.OfferTableSubscription$ = this.vehicleOfferApiService.getOffers().subscribe((offers: Offer[]) => {
      this.dataSource = new MatTableDataSource(offers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sortingDataAccessor = (item: Offer, property: string) => {
        switch (property) {
          case 'unloadingPlace.unloadingCity':
            return item.unloadingPlace.unloadingCity;
          case 'unloadingPlace.unloadingDateAndTime':
            return item.unloadingPlace.unloadingDateAndTime;
          case 'loadingPlace.loadingCity':
            return item.loadingPlace.loadingCity;
          case 'loadingPlace.loadingDateAndTime':
            return item.loadingPlace.loadingDateAndTime;
          default:
            return item["id"];
        }
      };
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.OfferTableSubscription$.unsubscribe();
  }

  deleteOffer(id: number) {
    const dialogRef = this.dialog.open(DeleteOfferDialogComponent, {
      data: {offerId: id},
    });

    dialogRef.afterClosed().subscribe({
      next: () => {
        this.dataSource.data = this.dataSource.data.filter((offer: Offer) => offer.id !== id);
      },
      error: (error) => {
        console.error(error);
        }
    });

  }

  getFlag(country: string) {
    return `fi fi-${country.toLowerCase()}`;
  }

}
