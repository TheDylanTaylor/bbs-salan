import {
  Hero,
  ClipperRepairBanner,
  CategoryPreview,
  ReviewsTeaser,
} from "@/components/home/HomeSections";
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
