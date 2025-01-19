import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../../auth/auth.service';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatFormFieldModule, MatInputModule, MatButton
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  private readonly _snackBar = inject(MatSnackBar);
  isLoading = false;

  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService,
              private readonly router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['vehicle-offer']);
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    const {username, password}  = this.loginForm.value;
    this.authService.login(username, password)
      .subscribe({
        next: () => {
          this.router.navigate(['vehicle-offer']);
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
          this._snackBar.open('Invalid username or password', 'Close');
          this.isLoading = false;

        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

  isEmailInputValid() {
    return this.loginForm.get('username')?.hasError('email') || !this.loginForm.get('username')?.hasError('required');
  }
}
