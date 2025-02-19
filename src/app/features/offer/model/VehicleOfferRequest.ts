export type VehicleOfferRequest = {
  loadingPlace: LoadingPlace;
  unloadingPlace: UnloadingPlace[];
  description: string | null;
  loadingType: string | null;
  loadingWeight: number | null;
  loadingLength: number | null;
  loadingVolume: number | null;
  loadingBodyType: string | null;
  goodsType: string | null;
  publishSelected: null
}

export type LoadingPlace = {
  country: string;
  postalCode: string;
  city: string;
  loadingStartDateAndTime: Date;
  loadingEndDateAndTime: Date;
}

export type UnloadingPlace = {
  country: string;
  postalCode: string;
  city: string;
  unloadingStartDateAndTime: Date;
  unloadingEndDateAndTime: Date;
}
