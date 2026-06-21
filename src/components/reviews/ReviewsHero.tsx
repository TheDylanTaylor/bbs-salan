import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BrandImage } from "@/components/ui/BrandImage";
import { StarRating } from "@/components/reviews/StarRating";
import { getReviewStats, googlePlaceMeta } from "@/lib/reviews";

const REVIEWS_HERO_IMAGE = "/images/brand/reviews-storefront.png";

export function ReviewsHero() {
  const { average, count, hasReviews } = getReviewStats();

  return (
    <section className="section-white border-b border-[#E5E7EB]">
      <div className="page-container py-28 sm:py-36 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <AnimateOnScroll triggerOnMount delay={0}>
              <h1 className="section-title">Customer Reviews</h1>
              <p className="section-lead">
                See what barbers, stylists, and customers are saying about BBS
                Barber &amp; Salon Supply.
              </p>
            </AnimateOnScroll>

            {hasReviews && average != null && (
              <AnimateOnScroll triggerOnMount delay={80}>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-4">
                    <p className="text-4xl font-semibold tracking-tight text-[#111111]">
                      {average.toFixed(1)}
                    </p>
                    <StarRating rating={Math.round(average)} />
                  </div>
                  <p className="text-base text-[#6B7280]">
                    Based on {count} Google {count === 1 ? "review" : "reviews"}
                  </p>
                </div>
              </AnimateOnScroll>
            )}

            <AnimateOnScroll triggerOnMount delay={160}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={googlePlaceMeta.placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  View on Google
                </a>
                <Link href="/visit" className="btn-secondary text-center">
                  Visit the store
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll triggerOnMount delay={120} className="group">
            <BrandImage
              src={REVIEWS_HERO_IMAGE}
              alt="BBS Barber and Salon Supply storefront with Barber Supply signage"
              aspect="wide"
              priority
              className="shadow-md [&_img]:object-center"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
