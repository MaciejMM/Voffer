import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

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
    return this.http.post(`${environment.backendUrl}/api/v1/teleroute/refresh-token`, {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true
    });
  }
}
