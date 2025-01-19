export type VehicleOfferRequest = {

  loadingPlace: Place;
  "unloadingPlace": Place;
  "description": string,
  "loadingType": string,
  "loadingWeight": number,
  "loadingLength": number,
  "loadingVolume": number,
  "loadingBodyType": string,
  "publishSelected": null,

}

type Place = {
  country: string;
  postalCode: string;
  city: string;
  loadingStartDateAndTime?: string;
  loadingEndDateAndTime?: string;
  unloadingDateAndTime?: string;

}
