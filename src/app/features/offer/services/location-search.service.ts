import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LocationResponse} from '../model/LocationResponse';
import {environment} from '../../../../environments/environment';


type LocationRequest = {
  searchText: string;
  country: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {

  constructor(readonly http: HttpClient) {
  }


  getLocation(searchText: string, countryCode: string): Observable<LocationResponse[]> {
    const body: LocationRequest = {
      searchText: searchText,
      country: countryCode
    }

    return this.http.post<LocationResponse[]>(`${environment.backendUrl}/api/v1/location/search`,body, {responseType: 'json'});
  }
}
