import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/home/HomeSections";
import { ContactBlock } from "@/components/map/MapComponents";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BBS Barber & Salon Supply — call (323) 715-4214 or visit us at 202 E Martin Luther King Jr Blvd, Los Angeles.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Call us or stop by during store hours."
      />
      <section className="page-container pb-28 sm:pb-36">
        <div className="grid gap-12 lg:grid-cols-2">
          <ContactBlock />
          <div className="space-y-8">
            <a
              href={business.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex items-center justify-between hover:shadow-lg"
            >
              <div>
                <p className="font-semibold text-[#111111]">Instagram</p>
                <p className="mt-1 text-sm text-[#6B7280]">
                  {business.social.instagram.handle}
                </p>
              </div>
              <span className="text-[#6B7280] transition-colors group-hover:text-[#2563EB]">
                →
              </span>
            </a>
            <a
              href={business.social.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex items-center justify-between hover:shadow-lg"
            >
              <div>
                <p className="font-semibold text-[#111111]">TikTok</p>
                <p className="mt-1 text-sm text-[#6B7280]">
                  {business.social.tiktok.handle}
                </p>
              </div>
              <span className="text-[#6B7280] transition-colors group-hover:text-[#2563EB]">
                →
              </span>
            </a>
            <div className="card">
              <p className="font-semibold text-[#111111]">Products</p>
              <p className="mt-3 body-text">
                Browse the catalog, then visit to see everything in person.
              </p>
              <Link href="/products" className="link-subtle mt-4 inline-block font-medium">
                View products →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
