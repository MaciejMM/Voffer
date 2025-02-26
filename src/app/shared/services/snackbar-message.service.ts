import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarMessageService {
  CLOSE_TEXT = 'Zamknij';
  private _snackBar = inject(MatSnackBar);
  constructor() { }

  showSuccessMessage(message: string): void {
    this._snackBar.open(message, this.CLOSE_TEXT, {
      duration: 5000,
      panelClass: ['success-snackbar']
    });
  }

  showErrorMessage(message: string): void {
    this._snackBar.open(message, this.CLOSE_TEXT, {
      duration: 5000,
      panelClass: ['error-snackbar']
    });
  }

  showWarningMessage(message: string): void {
    this._snackBar.open(message, this.CLOSE_TEXT, {
      duration: 5000,
      panelClass: ['warning-snackbar']
    });
  }

}
