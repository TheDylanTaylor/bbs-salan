import { business } from "@/lib/business";
import type { Review } from "@/lib/types";

export function ReviewsGrid({ reviews }: { reviews: Review[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="card flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-4 w-4 ${i < review.rating ? "text-[#2563EB]" : "text-[#E5E7EB]"}`}
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        {review.verified && (
          <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
            Verified
          </span>
        )}
        {!review.verified && review.source === "placeholder" && (
          /* PLACEHOLDER REVIEWS — replace with real Google reviews when available */
          <span className="sr-only">Placeholder review</span>
        )}
      </div>
      <p className="mt-6 flex-1 text-base leading-relaxed text-[#111111] sm:text-lg">
        &ldquo;{review.text}&rdquo;
      </p>
      <p className="mt-6 text-sm text-[#6B7280]">
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
        className="link-subtle inline-flex items-center gap-2 font-medium"
      >
        Read more on Google →
      </a>
    </div>
  );
}
