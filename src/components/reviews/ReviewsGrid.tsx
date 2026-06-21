import type { GoogleReview } from "@/lib/reviews";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { ReviewCard } from "./ReviewCard";

export function ReviewsGrid({ reviews }: { reviews: GoogleReview[] }) {
  if (reviews.length === 0) return null;

  return (
    <StaggerGrid
      className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      staggerMs={100}
    >
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </StaggerGrid>
  );
}

export function FeaturedReviewsGrid({ reviews }: { reviews: GoogleReview[] }) {
  if (reviews.length === 0) return null;

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
        Featured reviews
      </h2>
      <StaggerGrid
        className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        staggerMs={120}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} featured />
        ))}
      </StaggerGrid>
    </div>
  );
}
