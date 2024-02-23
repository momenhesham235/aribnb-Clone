export type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};

export type ExploreData = ExploreItem[];

export type LiveItem = {
  img: string;
  title: string;
};

export type LiveData = LiveItem[];

export type SearchParamsType = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};

export type ListingCardItem = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};

export type SearchResultData = ListingCardItem[];
