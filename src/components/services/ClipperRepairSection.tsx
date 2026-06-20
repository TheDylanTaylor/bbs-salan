import Link from "next/link";
import { business, HOURS_LABELS, HOURS_ORDER } from "@/lib/business";
import { siteImages } from "@/lib/site-images";
import { DirectionsButton } from "@/components/layout/Header";
import { BrandImage } from "@/components/ui/BrandImage";

const SERVICES = [
  {
    title: "Clipper sharpening",
    description:
      "Restore dull blades to clean, even cutting performance.",
  },
  {
    title: "Zero-gap adjustment",
    description:
      "Precise blade alignment for crisp line-ups and detail work.",
  },
  {
    title: "Motor & cord repair",
    description:
      "Diagnosis and repair for weak motors, charging issues, and cord damage.",
  },
  {
    title: "Blade replacement",
    description:
      "Quality replacement blades matched to your clipper model.",
  },
];

const BRANDS = ["Wahl", "Andis", "Oster", "BabylissPRO", "Gamma+", "StyleCraft"];

export function ClipperRepairSection() {
  return (
    <div className="space-y-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <p className="body-text">
          Your clippers are your livelihood. When blades dull or motors struggle,
          you need a fix fast — not a week-long mail-in wait. Our on-site
          technician handles sharpening, zero-gap adjustments, and repairs while
          you browse. Most jobs are completed same-day during business hours.
        </p>
        <BrandImage
          src={siteImages.servicesRepair}
          alt="On-site clipper repair at BBS"
          aspect="wide"
        />
      </div>

      <section>
        <h2 className="text-xs font-medium tracking-widest text-[#6B7280] uppercase">
          What we service
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div key={service.title} className="card">
              <h3 className="text-lg font-semibold text-[#111111]">{service.title}</h3>
              <p className="mt-3 body-text text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-medium tracking-widest text-[#6B7280] uppercase">
          Brands we work with
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="rounded-full border border-[#E5E7EB] bg-[#F8F9FA] px-4 py-2 text-sm font-medium text-[#6B7280]"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      <section className="card">
        <span className="badge-gold">Walk-in service</span>
        <h2 className="mt-4 text-2xl font-semibold text-[#111111] sm:text-3xl">
          Bring your clippers during store hours
        </h2>
        <p className="mt-4 body-text">
          No appointment needed. Walk in and our technician will assess your tools.
        </p>
        <ul className="mt-8 max-w-xs space-y-2 text-sm text-[#6B7280]">
          {HOURS_ORDER.map((day) => (
            <li key={day} className="flex justify-between gap-4">
              <span>{HOURS_LABELS[day]}</span>
              <span>{business.hours[day]}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <DirectionsButton />
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
