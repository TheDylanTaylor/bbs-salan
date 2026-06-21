import type { Metadata } from "next";
import { ReviewsHero } from "@/components/reviews/ReviewsHero";
import { ReviewsStats } from "@/components/reviews/ReviewsStats";
import {
  FeaturedReviewsGrid,
  ReviewsGrid,
} from "@/components/reviews/ReviewsGrid";
import { ReviewsCTA, ReviewsEmptyState } from "@/components/reviews/ReviewsCTA";
import {
  getGoogleReviews,
  getReviewStats,
  sortReviewsForPage,
} from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read Google reviews from barbers and stylists who shop at BBS Barber & Salon Supply in Los Angeles.",
};

export default function ReviewsPage() {
  const sorted = sortReviewsForPage(getGoogleReviews());
  const { hasReviews } = getReviewStats();
  const showFeatured = sorted.length > 3;
  const featured = showFeatured ? sorted.slice(0, 3) : [];
  const gridReviews = showFeatured ? sorted.slice(3) : sorted;

  return (
    <>
      <ReviewsHero />

      <section className="section-muted">
        <div className="page-container py-16 sm:py-20">
          <ReviewsStats />
        </div>
      </section>

      <section className="section-white pb-28 sm:pb-36">
        <div className="page-container pt-16 sm:pt-20">
          {hasReviews ? (
            <>
              {showFeatured && <FeaturedReviewsGrid reviews={featured} />}
              {gridReviews.length > 0 && (
                <div className={showFeatured ? "mt-20" : ""}>
                  {showFeatured && (
                    <h2 className="mb-10 text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
                      All reviews
                    </h2>
                  )}
                  <ReviewsGrid reviews={gridReviews} />
                </div>
              )}
            </>
          ) : (
            <ReviewsEmptyState />
          )}

          <ReviewsCTA />
        </div>
      </section>
    </>
  );
}
