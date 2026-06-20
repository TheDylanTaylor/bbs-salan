import businessInfo from "../../data/business-info.json";
import type { BusinessInfo } from "./types";

export const business = businessInfo as BusinessInfo;

export function getAverageRating(): number {
  const { reviews } = business;
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

export function getVerifiedReviews() {
  return business.reviews.filter((r) => r.verified);
}

export const HOURS_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export const HOURS_LABELS: Record<(typeof HOURS_ORDER)[number], string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};
