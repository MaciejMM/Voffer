import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {UserService} from '../../services/user-service';
import { UserRequest } from '../../models/UserRequest';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialogRef} from '@angular/material/dialog';

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
    role: new FormControl('USER',[Validators.required]),
    gender: new FormControl('Mr',[Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    readonly userService: UserService) {
  }

  onSubmit() {

    let userRequest:UserRequest = {
      email: this.form.value.email!,
      firstName: this.form.value.firstName!,
      lastName: this.form.value.lastName!,
      password: this.form.value.password!,
      title: this.form.value.gender!,
      role: this.form.value.role!
    }

    this.userService.createUser(userRequest)
      .subscribe({
        next: () => {
          console.log('User created');
          this.dialogRef.close();
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error creating user', error);
        }
      }
    );

  }
}
