import { business, getAverageRating } from "@/lib/business";

export function LocalBusinessSchema() {
  const avgRating = getAverageRating();
  const { reviews } = business;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: business.name,
    description: business.tagline,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://bbs-barber-supply.vercel.app",
    telephone: business.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [business.social.instagram.url, business.social.tiktok.url],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews
      .filter((r) => r.verified)
      .map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        datePublished: r.date,
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating: 5,
        },
        reviewBody: r.text,
      })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const siteMetadata = {
  title: {
    default: "BBS Barber & Salon Supply | Barber Supply Store Los Angeles",
    template: "%s | BBS Barber & Salon Supply",
  },
  description:
    "BBS Barber & Salon Supply in Los Angeles — professional clippers, cosmetology products, and on-site clipper repair. Visit us at 202 E Martin Luther King Jr Blvd. Open Mon–Fri 8:30am–5pm.",
  keywords: [
    "barber supply store near me",
    "barber supply Los Angeles",
    "salon supply LA",
    "clipper repair Los Angeles",
    "barber shop supplies",
    "cosmetology products",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BBS Barber & Salon Supply",
    title: "BBS Barber & Salon Supply | Barber Supply Store Los Angeles",
    description:
      "Everything a barber or stylist needs — clippers, cosmetology products, and on-site clipper repair. Visit our Los Angeles store.",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "BBS Barber & Salon Supply",
    description:
      "Professional barber and salon supply store in Los Angeles with on-site clipper repair.",
  },
};
