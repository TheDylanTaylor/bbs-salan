import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { StarRating } from "@/components/reviews/StarRating";
import {
  getFeaturedReviewsForHome,
  getReviewStats,
  googlePlaceMeta,
} from "@/lib/reviews";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ReviewsTeaser() {
  const featured = getFeaturedReviewsForHome(3);
  const { average, count, hasReviews } = getReviewStats();

  return (
    <section className="section-muted">
      <div className="page-container section-spacing">
        <SectionHeading
          title="Reviews"
          subtitle={
            hasReviews && average != null
              ? `${average.toFixed(1)} average from ${count} Google ${count === 1 ? "review" : "reviews"}.`
              : "See what barbers, stylists, and customers are saying about BBS."
          }
        />

        {featured.length > 0 ? (
          <StaggerGrid
            className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            staggerMs={120}
          >
            {featured.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </StaggerGrid>
        ) : (
          <AnimateOnScroll className="mt-16">
            <div className="card max-w-2xl text-center sm:text-left">
              {average != null && (
                <div className="mb-6 flex flex-col items-center gap-2 sm:items-start">
                  <p className="text-3xl font-semibold text-[#111111]">
                    {average.toFixed(1)}
                  </p>
                  <StarRating rating={Math.round(average)} />
                </div>
              )}
              <p className="body-text">
                Read customer reviews on our Google Business Profile.
              </p>
              <a
                href={googlePlaceMeta.placeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex"
              >
                View on Google
              </a>
            </div>
          </AnimateOnScroll>
        )}

        <AnimateOnScroll className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link href="/reviews" className="btn-secondary text-center">
            Read More Reviews
          </Link>
          {featured.length > 0 && (
            <a
              href={googlePlaceMeta.placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              View on Google
            </a>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
