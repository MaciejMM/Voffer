import {Component} from '@angular/core';
import {FormGroup, FormControl, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {Store} from '@ngrx/store';
import * as offerActions from '../../../store/offer/offer.actions';
import * as offerSelectors from '../../../store/offer/offer.selectors';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-teleroute-login-dialog',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatLabel,
    MatFormField,
    MatInput,
    MatButton,
    AsyncPipe,
    MatProgressSpinner
  ],
  templateUrl: './teleroute-login-dialog.component.html',
  styleUrl: './teleroute-login-dialog.component.scss'
})
export class TelerouteLoginDialogComponent {

  isFetching$: Observable<boolean>;

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private store: Store) {
    this.isFetching$ = this.store.select(offerSelectors.selectIsTelerouteTokenFetching);
  }

  onSubmit() {
    this.store.dispatch(offerActions.fetchTelerouteToken({
      username: this.form.value.username!,
      password: this.form.value.password!
    }));
  }

}
