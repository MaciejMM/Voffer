import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TelerouteAuthService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const body = {
      username:username,
      password:password
    };
    return this.http.post(`${environment.backendUrl}/api/v1/teleroute/token`,body, {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true
    });
  }

  refreshToken(): Observable<any> {
    return this.http.post(`${environment.backendUrl}/api/v1/teleroute/refresh-token`,{}, {
      withCredentials: true
    });
  }
  checkAndRefreshToken() {
    const token = this.getCookie('teleroute_refresh_token');

    if (token) {
      const expiration = this.getTokenExpiration(token);
      if (expiration && expiration > Date.now()) {
        console.log('Token jest jeszcze ważny');
        this.refreshToken().subscribe(() => {});
      }
    }

    console.log('Token wygasł lub brak tokena – odświeżam');
    this.refreshToken();
  }


  private getTokenExpiration(token: string): number | null {
    try {
      const decoded: any = jwtDecode(token);
      return decoded.exp ? decoded.exp * 1000 : null;
    } catch (error) {
      return null;
    }
  }
  private getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
}
