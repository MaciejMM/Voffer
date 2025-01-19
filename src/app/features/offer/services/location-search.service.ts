import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LocationResponse} from '../model/LocationResponse';

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {

  constructor(readonly http: HttpClient) {}

  getLocation(searchText:string): Observable<LocationResponse[]> {
    return this.http.get<LocationResponse[]>(`http://localhost:8080/api/v1/location/search?query=${searchText}`, {responseType: 'json'});
  }
}
