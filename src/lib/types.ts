export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  source: "yelp" | "google" | "placeholder";
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phone: string;
  phoneTel: string;
  hours: Record<string, string>;
  hoursSummary: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  social: {
    instagram: { handle: string; url: string };
    tiktok: { handle: string; url: string };
  };
  googleMapsUrl: string;
  directionsUrl: string;
  about: string;
  reviews: Review[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  priceRange?: string;
  cta: string;
}

export interface ProductsData {
  categories: string[];
  products: Product[];
}
