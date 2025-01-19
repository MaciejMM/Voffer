import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [
    MatButton
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

  constructor(private readonly authService:AuthService) {

  }
  logout() {
    this.authService.logout();
  }
}
