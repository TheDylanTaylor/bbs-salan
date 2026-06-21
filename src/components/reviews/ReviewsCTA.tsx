import { googlePlaceMeta } from "@/lib/reviews";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function ReviewsCTA() {
  return (
    <AnimateOnScroll>
      <section className="card mt-20 text-center">
        <h2 className="text-xl font-semibold text-[#111111] sm:text-2xl">
          Visited BBS Barber &amp; Salon Supply?
        </h2>
        <p className="mx-auto mt-4 max-w-md body-text">
          Share your experience on Google and help other barbers and stylists
          find us.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={googlePlaceMeta.writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Leave a Google Review
          </a>
          <a
            href={googlePlaceMeta.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View on Google
          </a>
        </div>
      </section>
    </AnimateOnScroll>
  );
}

export function ReviewsEmptyState() {
  return (
    <AnimateOnScroll>
      <div className="card mt-16 text-center">
        <p className="text-lg font-medium text-[#111111]">
          Google reviews will appear here
        </p>
        <p className="mx-auto mt-3 max-w-md body-text">
          Real customer reviews from our Google Business Profile are shown on
          this page. Visit our listing to read the latest feedback.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={googlePlaceMeta.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View on Google
          </a>
          <a
            href={googlePlaceMeta.writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Leave a Google Review
          </a>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
