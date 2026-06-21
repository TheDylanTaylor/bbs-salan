import Link from "next/link";
import { business, HOURS_LABELS, HOURS_ORDER } from "@/lib/business";
import { siteImages } from "@/lib/site-images";
import { DirectionsButton } from "@/components/layout/Header";
import { BrandImage } from "@/components/ui/BrandImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export function GoogleMapEmbed() {
  const { lat, lng } = business.coordinates;
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-sm">
      <iframe
        title="BBS Barber & Salon Supply location on Google Maps"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
      />
    </div>
  );
}

export function OurStoreSection() {
  return (
    <section className="mt-20 border-t border-[#E5E7EB] pt-20">
      <SectionHeading
        title="Our store"
        subtitle="Walk in to browse clippers, cosmetology products, and talk with our team — on-site clipper repair available."
      />
      <StaggerGrid
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        staggerMs={100}
      >
        {siteImages.ourStore.map((src, i) => (
          <BrandImage
            key={src}
            src={src}
            alt={
              i === 0
                ? "BBS Barber and Salon Supply storefront exterior"
                : i === 1
                  ? "Product aisles inside BBS Barber and Salon Supply"
                  : i === 2
                    ? "Clipper and trimmer display at BBS Barber and Salon Supply"
                    : "Staff helping a customer at BBS Barber and Salon Supply"
            }
            aspect={i === 0 ? "wide" : "portrait"}
            className={`group shadow-md ${i === 0 ? "sm:col-span-2 lg:col-span-3 [&_img]:object-center" : ""}`}
          />
        ))}
      </StaggerGrid>
    </section>
  );
}

export function ContactBlock() {
  return (
    <div className="card space-y-8 !py-8">
      <div>
        <p className="text-xs font-medium tracking-widest text-[#6B7280] uppercase">Address</p>
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-base text-[#111111] transition-colors hover:text-[#2563EB]"
        >
          {business.address.full}
        </a>
      </div>

      <div>
        <p className="text-xs font-medium tracking-widest text-[#6B7280] uppercase">Phone</p>
        <a
          href={`tel:${business.phoneTel}`}
          className="mt-3 block text-lg font-medium text-[#111111] transition-colors hover:text-[#2563EB]"
        >
          {business.phone}
        </a>
      </div>

      <div>
        <p className="text-xs font-medium tracking-widest text-[#6B7280] uppercase">Hours</p>
        <ul className="mt-3 space-y-2">
          {HOURS_ORDER.map((day) => (
            <li
              key={day}
              className="flex justify-between gap-8 text-base text-[#6B7280]"
            >
              <span>{HOURS_LABELS[day]}</span>
              <span>{business.hours[day]}</span>
            </li>
          ))}
        </ul>
      </div>

      <DirectionsButton />
    </div>
  );
}

export function VisitCTA() {
  return (
    <section className="card mt-16 text-center">
      <h2 className="text-xl font-semibold text-[#111111] sm:text-2xl">Visit the store</h2>
      <p className="mx-auto mt-4 max-w-md body-text">
        Browse the full selection and talk to our team in person.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <DirectionsButton />
        <Link href="/products" className="btn-secondary">
          Browse products
        </Link>
      </div>
    </section>
  );
}
