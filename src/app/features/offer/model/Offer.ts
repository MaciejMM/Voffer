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
    loadingStartDateAndTime: string;
    loadingEndDateAndTime: string;
  };
  unloadingPlace: Array<{
    unloadingId: number;
    unloadingCountry: string;
    unloadingCity: string;
    unloadingPostalCode: string | null;
    unloadingStartDateAndTime: string;
    unloadingEndDateAndTime: string;
  }>;
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
  loadingStartDateAndTime: string;
  loadingEndDateAndTime: string;
  unloadingCountry: string;
  unloadingCity: string;
  unloadingPostalCode: string | null;
  unloadingStartDateAndTime: string;
  unloadingEndDateAndTime: string;
  description: string;
  loadingType: string;
  loadingWeight: string;
  loadingLength: string;
  loadingVolume: string | null;
  loadingBodyType: string | null;
  goodsType: string;
}
