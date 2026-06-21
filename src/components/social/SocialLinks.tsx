import { business } from "@/lib/business";
import { googlePlaceMeta } from "@/lib/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import {
  GoogleMapsLogo,
  InstagramLogo,
  TikTokLogo,
} from "./SocialLogos";

const PLATFORMS = [
  {
    id: "instagram",
    name: "Instagram",
    handle: business.social.instagram.handle,
    url: business.social.instagram.url,
    Logo: InstagramLogo,
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: business.social.tiktok.handle,
    url: business.social.tiktok.url,
    Logo: TikTokLogo,
  },
  {
    id: "google-maps",
    name: "Google Maps",
    handle: "View our listing",
    url: googlePlaceMeta.placeUrl,
    Logo: GoogleMapsLogo,
  },
] as const;

function SocialPlatformCard({
  name,
  handle,
  url,
  Logo,
}: {
  name: string;
  handle: string;
  url: string;
  Logo: typeof InstagramLogo;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex flex-col items-center justify-center text-center !p-8 sm:!p-10"
    >
      <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-[#F8F9FA] transition-transform duration-300 group-hover:scale-105">
        <Logo className="h-20 w-20" />
      </div>
      <p className="mt-6 text-lg font-semibold text-[#111111]">{name}</p>
      <p className="mt-1 text-sm text-[#6B7280] transition-colors group-hover:text-[#2563EB]">
        {handle}
      </p>
    </a>
  );
}

export function SocialLinks() {
  return (
    <section className="section-white">
      <div className="page-container section-spacing">
        <SectionHeading
          title="Follow us"
          subtitle="New arrivals and in-store content on social."
        />
        <StaggerGrid
          className="mt-12 grid gap-8 sm:grid-cols-3"
          staggerMs={100}
        >
          {PLATFORMS.map((platform) => (
            <SocialPlatformCard key={platform.id} {...platform} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
