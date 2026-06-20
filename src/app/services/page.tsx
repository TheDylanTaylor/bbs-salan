import type { Metadata } from "next";
import { PageHero } from "@/components/home/HomeSections";
import { ClipperRepairSection } from "@/components/services/ClipperRepairSection";

export const metadata: Metadata = {
  title: "Clipper Repair Services",
  description:
    "On-site clipper and trimmer repair, sharpening, and zero-gap adjustments at BBS Barber & Salon Supply in Los Angeles. Bring your tools during store hours.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="On-site clipper and trimmer repair."
      />
      <section className="page-container pb-20 sm:pb-28">
        <ClipperRepairSection />
      </section>
    </>
  );
}
