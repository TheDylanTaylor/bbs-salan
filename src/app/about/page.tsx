import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/home/HomeSections";
import { business } from "@/lib/business";
import { siteImages } from "@/lib/site-images";
import { DirectionsButton } from "@/components/layout/Header";
import { BrandImage } from "@/components/ui/BrandImage";

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
      <section className="page-container pb-28 sm:pb-36">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="badge-gold">Est. 25+ Years</span>
            <p className="mt-6 body-text">
              {business.about}
            </p>
          </div>
          <BrandImage
            src={siteImages.aboutStore}
            alt="Inside BBS Barber and Salon Supply"
            aspect="portrait"
          />
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="card">
              <h2 className="text-lg font-semibold text-[#111111]">{item.title}</h2>
              <p className="mt-3 body-text text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="card mt-20">
          <h2 className="text-xl font-semibold text-[#111111] sm:text-2xl">Visit in person</h2>
          <p className="mt-4 max-w-lg body-text">
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
