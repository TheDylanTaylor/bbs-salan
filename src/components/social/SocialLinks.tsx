import { business } from "@/lib/business";

export function SocialLinks() {
  return (
    <section className="divider">
      <div className="page-container section-spacing !py-16">
        <h2 className="section-title">Follow us</h2>
        <p className="section-lead">
          New arrivals and in-store content on social.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
          <a
            href={business.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border border-neutral-800 px-6 py-5 transition-colors hover:border-neutral-600"
          >
            <div>
              <p className="text-sm text-white">Instagram</p>
              <p className="mt-1 text-sm text-neutral-500">
                {business.social.instagram.handle}
              </p>
            </div>
            <span className="text-neutral-600 transition-colors group-hover:text-white">
              →
            </span>
          </a>
          <a
            href={business.social.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border border-neutral-800 px-6 py-5 transition-colors hover:border-neutral-600"
          >
            <div>
              <p className="text-sm text-white">TikTok</p>
              <p className="mt-1 text-sm text-neutral-500">
                {business.social.tiktok.handle}
              </p>
            </div>
            <span className="text-neutral-600 transition-colors group-hover:text-white">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
