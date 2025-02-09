import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {UserRequest} from '../../models/UserRequest';
import {Store} from '@ngrx/store';
import * as adminActions from '../../../../store/admin/admin.actions';
import * as adminSelectors from '../../../../store/admin/admin.selectors';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-create-user-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    MatRadioGroup,
    MatRadioButton,
    AsyncPipe,
    MatProgressSpinner,
  ],
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss'
})
export class CreateUserDialogComponent implements OnInit {

  isLoading$: Observable<boolean>;

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    gender: new FormControl('Mr', [Validators.required])
  });

  constructor(
    readonly store: Store) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(adminSelectors.selectIsLoading);
  }

  onSubmit() {
    let userRequest = this.mapRequest();
    this.store.dispatch(adminActions.createUser({user: userRequest}));
  }

  private mapRequest(): UserRequest {
    return {
      email: this.form.value.email!,
      firstName: this.form.value.firstName!,
      lastName: this.form.value.lastName!,
      username: this.form.value.username!,
      title: this.form.value.gender!,
      role: 'USER'
    };
  }
}
