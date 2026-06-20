import type { Metadata } from "next";
import { PageHero } from "@/components/home/HomeSections";
import { business, getAverageRating } from "@/lib/business";
import {
  ReviewsGrid,
  GoogleReviewsLink,
} from "@/components/reviews/ReviewsGrid";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read reviews from barbers and stylists who shop at BBS Barber & Salon Supply in Los Angeles.",
};

export default function ReviewsPage() {
  const avgRating = getAverageRating();

  return (
    <>
      <PageHero
        title="Reviews"
        subtitle={`${avgRating} average from ${business.reviews.length} customers.`}
      />
      <section className="section-muted pb-28 sm:pb-36">
        <div className="page-container">
          <ReviewsGrid reviews={business.reviews} />
          <GoogleReviewsLink />
        </div>
      </section>
    </>
  );
}
