import type { Metadata } from "next";
import { PageHero } from "@/components/home/HomeSections";
import {
  GoogleMapEmbed,
  ContactBlock,
  OurStoreSection,
} from "@/components/map/MapComponents";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find BBS Barber & Salon Supply at 202 E Martin Luther King Jr Blvd, Ste B, Los Angeles, CA 90011. Get directions, store hours, and phone number.",
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        title="Visit"
        subtitle="202 E Martin Luther King Jr Blvd, Ste B — South Los Angeles."
      />
      <section className="page-container pb-28 sm:pb-36">
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimateOnScroll>
            <GoogleMapEmbed />
          </AnimateOnScroll>
          <AnimateOnScroll delay={120}>
            <ContactBlock />
          </AnimateOnScroll>
        </div>
        <OurStoreSection />
      </section>
    </>
  );
}
