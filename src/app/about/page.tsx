import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/home/HomeSections";
import { business } from "@/lib/business";
import { DirectionsButton } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "For over 25 years, BBS Barber & Salon Supply has been Los Angeles's trusted source for professional barber and salon supplies with on-site clipper repair.",
};

const HIGHLIGHTS = [
  {
    title: "25+ years",
    description:
      "Serving barbers, cosmetologists, and stylists across Los Angeles.",
  },
  {
    title: "Pro-grade brands",
    description:
      "Wahl, Andis, Oster, BabylissPRO, and the lines professionals use.",
  },
  {
    title: "On-site repair",
    description:
      "Sharpening, zero-gap, and motor repair by our in-store technician.",
  },
  {
    title: "Knowledgeable staff",
    description:
      "Barbershop people who help you find the right tools and products.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="Built by professionals, for professionals."
      />
      <section className="page-container pb-20 sm:pb-28">
        <p className="max-w-2xl text-neutral-400 leading-relaxed">
          {business.about}
        </p>

        <ul className="mt-16 divide-y divide-neutral-800 border-t border-neutral-800">
          {HIGHLIGHTS.map((item) => (
            <li key={item.title} className="py-8">
              <h2 className="text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 border border-neutral-800 px-8 py-10">
          <h2 className="text-lg font-light text-white">Visit in person</h2>
          <p className="mt-3 max-w-lg text-sm text-neutral-500">
            This site showcases what we carry. The full experience is in the
            store.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <DirectionsButton />
            <Link href="/products" className="btn-secondary">
              Browse products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
