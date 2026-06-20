import siteImagesData from "../../data/site-images.json";

export interface SiteImages {
  hero: string;
  aboutStore: string;
  visitExterior: string;
  servicesRepair: string;
  gallery: string[];
}

export const siteImages = siteImagesData as SiteImages;
