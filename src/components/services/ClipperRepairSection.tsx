import Link from "next/link";
import { business, HOURS_LABELS, HOURS_ORDER } from "@/lib/business";
import { DirectionsButton } from "@/components/layout/Header";

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

export function ClipperRepairSection() {
  return (
    <div className="space-y-20">
      <section className="max-w-2xl">
        <p className="text-neutral-400 leading-relaxed">
          Your clippers are your livelihood. When blades dull or motors struggle,
          you need a fix fast — not a week-long mail-in wait. Our on-site
          technician handles sharpening, zero-gap adjustments, and repairs while
          you browse. Most jobs are completed same-day during business hours.
        </p>
      </section>

      <section>
        <h2 className="text-xs tracking-widest text-neutral-600 uppercase">
          What we service
        </h2>
        <ul className="mt-8 divide-y divide-neutral-800 border-t border-neutral-800">
          {SERVICES.map((service) => (
            <li key={service.title} className="py-8">
              <h3 className="text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-neutral-800 px-8 py-10">
        <h2 className="text-lg font-light text-white">
          Bring your clippers during store hours
        </h2>
        <p className="mt-3 text-sm text-neutral-500">
          No appointment needed. Walk in and our technician will assess your tools.
        </p>
        <ul className="mt-8 max-w-xs space-y-2 text-sm text-neutral-400">
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
