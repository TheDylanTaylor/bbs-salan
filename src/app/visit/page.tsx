import type { Metadata } from "next";
import { PageHero } from "@/components/home/HomeSections";
import {
  GoogleMapEmbed,
  ContactBlock,
} from "@/components/map/MapComponents";

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
      <section className="page-container pb-20 sm:pb-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <GoogleMapEmbed />
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
