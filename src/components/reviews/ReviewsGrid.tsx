import { business } from "@/lib/business";
import type { Review } from "@/lib/types";

export function ReviewsGrid({ reviews }: { reviews: Review[] }) {
  return (
    <div className="divide-y divide-neutral-800 border-t border-neutral-800">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="py-10">
      <div className="flex items-center gap-3">
        <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`h-1 w-4 ${i < review.rating ? "bg-white" : "bg-neutral-800"}`}
              aria-hidden="true"
            />
          ))}
        </div>
        {review.verified && (
          <span className="text-xs text-neutral-500">Verified</span>
        )}
        {!review.verified && review.source === "placeholder" && (
          /* PLACEHOLDER REVIEWS — replace with real Google reviews when available */
          <span className="sr-only">Placeholder review</span>
        )}
      </div>
      <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-neutral-300">
        &ldquo;{review.text}&rdquo;
      </p>
      <p className="mt-4 text-sm text-neutral-500">
        {review.author} · {review.date}
      </p>
    </article>
  );
}

export function GoogleReviewsLink() {
  return (
    <div className="mt-12">
      <a
        href={business.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="link-subtle inline-flex items-center gap-2"
      >
        Read more on Google →
      </a>
    </div>
  );
}
