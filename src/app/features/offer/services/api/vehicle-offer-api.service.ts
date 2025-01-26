import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VehicleRequestMapperService} from '../vehicle-request-mapper.service';
import {Observable} from 'rxjs';
import {Offer} from '../../model/offer';

@Injectable({
  providedIn: 'root'
})
export class VehicleOfferApiService {

  constructor(readonly http:HttpClient,readonly vehicleRequestMapper:VehicleRequestMapperService) { }

  createOffer(offer: any) {

    return this.http.post('http://localhost:8080/api/v1/vehicle-offers',{
      ...offer
    } );
  }

  getOffers():Observable<Offer[]> {
    return this.http.get<Offer[]>('http://localhost:8080/api/v1/vehicle-offers');
  }

  deleteOffer(id: number) {
    return this.http.delete(`http://localhost:8080/api/v1/vehicle-offers/${id}`);
  }
}
