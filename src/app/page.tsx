import {
  Hero,
  ClipperRepairBanner,
  CategoryPreview,
} from "@/components/home/HomeSections";
import { ReviewsTeaser } from "@/components/reviews/ReviewsTeaser";
import { SocialLinks } from "@/components/social/SocialLinks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClipperRepairBanner />
      <CategoryPreview />
      <ReviewsTeaser />
      <SocialLinks />
    </>
  );
}
