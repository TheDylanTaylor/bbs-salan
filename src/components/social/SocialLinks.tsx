import { business } from "@/lib/business";
import { siteImages } from "@/lib/site-images";
import { BrandImage } from "@/components/ui/BrandImage";

export function SocialLinks() {
  return (
    <section className="section-white">
      <div className="page-container section-spacing">
        <h2 className="section-title">Follow us</h2>
        <p className="section-lead">
          New arrivals and in-store content on social.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {siteImages.gallery.map((src, i) => (
            <BrandImage
              key={src}
              src={src}
              alt={`BBS in-store gallery photo ${i + 1}`}
              aspect="square"
            />
          ))}
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
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
        </div>
      </div>
    </section>
  );
}
