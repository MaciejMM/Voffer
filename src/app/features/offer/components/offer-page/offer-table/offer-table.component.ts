import {Component, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Offer, OfferFlat} from '../../../model/Offer';
import * as offerSelectors from '../../../../../store/offer/offer.selectors';
import {map, Subscription} from 'rxjs';
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
import {DatePipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {DeleteOfferDialogComponent} from './delete-offer-dialog/delete-offer-dialog.component';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {Store} from '@ngrx/store';
import * as offerActions from '../../../../../store/offer/offer.actions';
import {DataService} from '../../../services/data.service';
import {FlatOfferMapperService} from '../../../services/flat-offer-mapper.service';
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
export class OfferTableComponent implements OnDestroy, OnInit {
  displayedColumns: string[] = ['loadingDateAndTime', 'loadingCity', 'unloadingDateAndTime', 'unloadingCity', 'goodsType', 'loadingType', "loadingWeight", "loadingLength", "loadingVolume", "status", "actions"];
  dataSource: MatTableDataSource<OfferFlat> = new MatTableDataSource();
  readonly dialog = inject(MatDialog);
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  OfferTableSubscription$: Subscription;

  constructor(
    readonly store: Store,
    readonly dataService: DataService,
    readonly flatOfferMapper: FlatOfferMapperService
  ) {
  }

  ngOnInit() {
    this.store.dispatch(offerActions.fetchOffers());
    this.OfferTableSubscription$ = this.store.select(offerSelectors.selectOfferList).pipe(
      map((offers: Offer[]) => this.flatOfferMapper.map(offers)
      ))
      .subscribe((offers: OfferFlat[]) => {
        this.dataSource = new MatTableDataSource(offers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.OfferTableSubscription$.unsubscribe();
  }

  deleteOffer(id: number) {
    this.store.dispatch(offerActions.setEditingOfferId({id: id}));
    this.dialog.open(DeleteOfferDialogComponent);
  }

  getFlag(country: string) {
    return `fi fi-${country.toLowerCase()}`;
  }

}
