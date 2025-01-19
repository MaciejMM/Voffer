import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'voffer-frontend';

  constructor(private readonly authService: AuthService) {
    if (this.authService.isLoggedIn()) {
      this.authService.refreshToken().subscribe();
    }
  }

}
