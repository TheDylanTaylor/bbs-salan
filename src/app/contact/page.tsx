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
      <section className="page-container pb-20 sm:pb-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <ContactBlock />
          <div className="space-y-12">
            <div>
              <p className="text-xs tracking-widest text-neutral-600 uppercase">Social</p>
              <div className="mt-4 space-y-3">
                <a
                  href={business.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-neutral-400 transition-colors hover:text-white"
                >
                  Instagram · {business.social.instagram.handle}
                </a>
                <a
                  href={business.social.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-neutral-400 transition-colors hover:text-white"
                >
                  TikTok · {business.social.tiktok.handle}
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-widest text-neutral-600 uppercase">Products</p>
              <p className="mt-4 text-sm text-neutral-500">
                Browse the catalog, then visit to see everything in person.
              </p>
              <Link href="/products" className="link-subtle mt-4 inline-block">
                View products →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
