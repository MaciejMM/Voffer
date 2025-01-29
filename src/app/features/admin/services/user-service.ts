import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {UserRequest} from '../models/UserRequest';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(readonly http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.backendUrl}/api/v1/admin/users`, {responseType: 'json'});
  }

  createUser(user: UserRequest): Observable<any> {
    return this.http.post<User>(`${environment.backendUrl}/api/v1/admin`, user, {responseType: 'json'});
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${environment.backendUrl}/api/v1/admin/${id}`, {responseType: 'json'});
  }

}
