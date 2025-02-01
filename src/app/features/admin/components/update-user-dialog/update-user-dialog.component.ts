import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {Store} from '@ngrx/store';
import * as adminActions from '../../../../store/admin/admin.actions';
import * as adminSelectors from '../../../../store/admin/admin.selectors';
import {combineLatest, Subscription} from 'rxjs';
import {User} from '../../models/User';
import {UpdateUser} from '../../models/UserRequest';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-update-user-dialog',
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatRadioButton,
    MatRadioGroup,
    ReactiveFormsModule
  ],
  templateUrl: './update-user-dialog.component.html',
  styleUrl: './update-user-dialog.component.scss'
})
export class UpdateUserDialogComponent implements OnInit, OnDestroy {

  storeSubscription$: Subscription;

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('USER', [Validators.required]),
    gender: new FormControl('Mr', [Validators.required]),
    title: new FormControl('Mr', [Validators.required]),
  });


  constructor(readonly store: Store,
              public dialogRef: MatDialogRef<UpdateUserDialogComponent>,
  ) {

  }

  ngOnInit(): void {
    this.storeSubscription$ = combineLatest([this.store.select(adminSelectors.selectUserList), this.store.select(adminSelectors.selectEditedUserId)])
      .subscribe(([users, id]) => {
          const user: User = users.find(user => user.id === id) as User;
          if (user) {
            this.form.patchValue({
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: user.password,
              role: user.role,
            });
          }
        }
      );
  }

  ngOnDestroy() {
    this.storeSubscription$.unsubscribe();
  }

  onSubmit() {
    let userRequest: UpdateUser = {
      firstName: this.form.value.firstName!,
      lastName: this.form.value.lastName!,
      password: this.form.value.password!,
      active: true,
    };
    this.store.dispatch(adminActions.updateUser({user: userRequest}));
    this.dialogRef.close();
  }

}
