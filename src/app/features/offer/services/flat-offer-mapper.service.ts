import {Injectable} from '@angular/core';
import {Offer, OfferFlat} from '../model/Offer';

@Injectable({
  providedIn: 'root'
})
export class FlatOfferMapperService {

  constructor() {
  }

  map(offer: Offer[]): OfferFlat[] {
    return offer.map(offer => {
      return {
        id: offer.id,
        telerouteOfferId: offer.telerouteOfferId,
        telerouteExternalId: offer.telerouteExternalId,
        timoconOfferId: offer.timoconOfferId,
        transeuOfferId: offer.transeuOfferId,
        publishDateTime: offer.publishDateTime,
        loadingCountry: offer.loadingPlace.loadingCountry,
        loadingCity: offer.loadingPlace.loadingCity,
        loadingPostalCode: offer.loadingPlace.loadingPostalCode,
        loadingDateAndTime: offer.loadingPlace.loadingDateAndTime,
        unloadingCountry: offer.unloadingPlace.unloadingCountry,
        unloadingCity: offer.unloadingPlace.unloadingCity,
        unloadingPostalCode: offer.unloadingPlace.unloadingPostalCode,
        unloadingDateAndTime: offer.unloadingPlace.unloadingDateAndTime,
        description: offer.description,
        loadingType: offer.loadingType,
        loadingBodyType: offer.loadingBodyType,
        loadingWeight: offer.loadingWeight,
        loadingLength: offer.loadingLength,
        loadingVolume: offer.loadingVolume,
        goodsType: offer.goodsType
      }
  });
  }
}
