export type Offer = {
  id: number;
  userId: number | null;
  telerouteOfferId: string;
  telerouteExternalId: string;
  timoconOfferId: string | null;
  transeuOfferId: string | null;
  publishDateTime: string;
  loadingPlace: {
    loadingId: number;
    loadingCountry: string;
    loadingCity: string;
    loadingPostalCode: string | null;
    loadingDateAndTime: string;
  };
  unloadingPlace: {
    unloadingId: number;
    unloadingCountry: string;
    unloadingCity: string;
    unloadingPostalCode: string | null;
    unloadingDateAndTime: string;
  };
  description: string;
  loadingType: string;
  loadingWeight: string;
  loadingLength: string;
  loadingVolume: string | null;
  loadingBodyType: string | null;
  goodsType: string;
}

export type OfferFlat = {
  id: number;
  telerouteOfferId: string;
  telerouteExternalId: string;
  timoconOfferId: string | null;
  transeuOfferId: string | null;
  publishDateTime: string;
  loadingCountry: string;
  loadingCity: string;
  loadingPostalCode: string | null;
  loadingDateAndTime: string;
  unloadingCountry: string;
  unloadingCity: string;
  unloadingPostalCode: string | null;
  unloadingDateAndTime: string;
  description: string;
  loadingType: string;
  loadingWeight: string;
  loadingLength: string;
  loadingVolume: string | null;
  loadingBodyType: string | null;
  goodsType: string;
}
