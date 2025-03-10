import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Offer} from '../../model/Offer';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleOfferApiService {

  constructor(readonly http: HttpClient) {
  }

  createOffer(offer: any) {
    return this.http.post(`${environment.backendUrl}/api/v1/vehicle-offers`, {
      ...offer
    }, {withCredentials: true});
  }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${environment.backendUrl}/api/v1/vehicle-offers`);
  }

  updateOffer(offerId: number): Observable<Offer> {
    return this.http.put<Offer>(`${environment.backendUrl}/api/v1/vehicle-offers/${offerId}`, {}, {withCredentials: true});
  }

  editOffer(offerId: number, offer: any): Observable<Offer> {

    const editOfferRequest = {
      offerId: offerId,
      offer: offer
    }

    return this.http.put<Offer>(`${environment.backendUrl}/api/v1/vehicle-offers`,  {
        ...editOfferRequest
      },
      {withCredentials: true})
  }


  deleteOffer(id: number) {
    return this.http.delete(`${environment.backendUrl}/api/v1/vehicle-offers/${id}`, {withCredentials: true});
  }
}
