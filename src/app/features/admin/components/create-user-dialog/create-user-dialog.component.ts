import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {UserRequest} from '../../models/UserRequest';
import {MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import * as adminActions from '../../../../store/admin/admin.actions';

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
  ],
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss'
})
export class CreateUserDialogComponent {

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('USER', [Validators.required]),
    gender: new FormControl('Mr', [Validators.required])
  });

  constructor(
    public userDialog: MatDialogRef<CreateUserDialogComponent>,
    readonly store: Store) {
  }

  onSubmit() {
    let userRequest = this.mapRequest();
    this.store.dispatch(adminActions.createUser({user: userRequest}));
    this.userDialog.close();
  }

  private mapRequest(): UserRequest {
    return {
      email: this.form.value.email!,
      firstName: this.form.value.firstName!,
      lastName: this.form.value.lastName!,
      password: this.form.value.password!,
      title: this.form.value.gender!,
      role: this.form.value.role!
    };
  }
}
