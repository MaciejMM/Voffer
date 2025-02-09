import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {KindeAngularService} from 'kinde-angular';
import {TelerouteLoginDialogComponent} from '../teleroute-login-dialog/teleroute-login-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatButton,
    MatIconModule,
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

  readonly dialog = inject(MatDialog);

  constructor(
    private readonly authService: KindeAngularService,
  ) {
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('logged out');
    });
  }

  openTelerouteLoginDialog() {
    this.dialog.open(TelerouteLoginDialogComponent);
  }
}
