import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VehicleRequestMapperService} from '../vehicle-request-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleOfferApiService {

  constructor(readonly http:HttpClient,readonly vehicleRequestMapper:VehicleRequestMapperService) { }

  createOffer(offer: any) {
    //stringify the offer


    return this.http.post('http://localhost:8080/api/v1/vehicle-offers',{
      ...offer
    } );
  }

  getOffers() {
    return this.http.get('http://localhost:8080/api/v1/vehicle-offers');
  }
}
