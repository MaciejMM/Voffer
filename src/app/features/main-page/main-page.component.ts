import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as appActions from '../../store/app/app.actions';
import {MatDialog} from '@angular/material/dialog';
import {TranseuLoginDialogComponent} from '../../shared/components/transeu-login-dialog/transeu-login-dialog.component';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  constructor(
    readonly route: ActivatedRoute,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParamMap.has('code')
    ) {
      this.store.dispatch(appActions.setTranseuCode({code: this.route.snapshot.queryParamMap.get('code')!}));
      this.dialog.open(TranseuLoginDialogComponent);
    }
  }
}
