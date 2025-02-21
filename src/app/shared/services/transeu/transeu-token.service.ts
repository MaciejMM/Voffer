import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranseuTokenService {

  constructor(private http: HttpClient) {
  }

  login(code: string) {
    const body = {
      code: code
    };
    console.log('body', body);
    return this.http.post(`${environment.backendUrl}/api/v1/transeu/token`, {...body}, {
      withCredentials: true
    });
  }

  refreshToken(): Observable<any> {
    return this.http.post(`${environment.backendUrl}/api/v1/transeu/refresh-token`, {}, {
      withCredentials: true
    });
  }

}
