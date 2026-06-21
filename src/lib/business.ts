import businessInfo from "../../data/business-info.json";
import type { BusinessInfo } from "./types";

export const business = businessInfo as BusinessInfo;

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
