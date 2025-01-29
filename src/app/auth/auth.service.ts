import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap, throwError} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    readonly http: HttpClient,
    private readonly cookieService: CookieService,
    private readonly router: Router
    ) {
  }

  login(username: string, password: string) {
    return this.http.post<{ token: string, refreshToken: string }>(`${environment.backendUrl}/auth/login`, {
      email: username,
      password: password
    }).pipe(
      tap(response => {
        this.setToken(response.token);
        this.setRefreshToken(response.refreshToken);
        this.router.navigate(['/vehicle-offer']);

      })
    )

  }

  refreshToken() {

    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
    }

    const refreshToken = this.getRefreshToken();
    return this.http.post<{ token: string, refreshToken:string }>(`${environment.backendUrl}/auth/refresh-token`, {token: refreshToken })
      .pipe(
        tap(response => {
          this.setToken(response.token);
          this.setRefreshToken(response.refreshToken);
        }),
        catchError(error => {
          this.logout();
          return throwError(error);
        })
      );
  }

  setToken(token: string) {
    this.cookieService.set('authToken', token, { secure: true, sameSite: 'Strict' });
  }

  getToken() {
    return this.cookieService.get('authToken');
  }

  setRefreshToken(refreshToken: string) {
    this.cookieService.set('refreshToken', refreshToken, {  secure: true, sameSite: 'Strict' });
  }

  getRefreshToken() {
    return this.cookieService.get('refreshToken');
  }
  isLoggedIn() {
    return !!this.cookieService.get('authToken');
  }

  logout() {
    this.cookieService.delete('authToken');
    this.cookieService.delete('refreshToken');
    this.router.navigate(['/login']);
  }
}
