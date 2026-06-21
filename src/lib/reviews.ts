import {
  googlePlaceMeta,
  googleReviews,
  type GoogleReview,
} from "@/data/reviews";

export type { GoogleReview };

export function getGoogleReviews(): GoogleReview[] {
  return googleReviews;
}

export function getReviewStats() {
  const reviews = getGoogleReviews();
  const count =
    googlePlaceMeta.totalReviewCount ?? reviews.length;
  const average =
    googlePlaceMeta.averageRating ??
    (reviews.length === 0
      ? null
      : Math.round(
          (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10
        ) / 10);

  return {
    count,
    average,
    hasReviews: reviews.length > 0,
    hasAggregateData:
      reviews.length > 0 ||
      googlePlaceMeta.totalReviewCount != null ||
      googlePlaceMeta.averageRating != null,
  };
}

export function sortReviewsForPage(reviews: GoogleReview[]): GoogleReview[] {
  return [...reviews].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.text.length - a.text.length;
  });
}

export function getFeaturedReviews(limit = 3): GoogleReview[] {
  const sorted = sortReviewsForPage(getGoogleReviews());
  return sorted.slice(0, limit);
}

export function getFeaturedReviewsForHome(limit = 3): GoogleReview[] {
  return getFeaturedReviews(Math.min(limit, 6));
}

export { googlePlaceMeta };
