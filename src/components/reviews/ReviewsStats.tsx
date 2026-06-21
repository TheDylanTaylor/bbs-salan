import { getReviewStats } from "@/lib/reviews";

export function ReviewsStats() {
  const { count, average, hasReviews } = getReviewStats();

  if (!hasReviews && average == null) {
    return (
      <div className="card flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-medium tracking-widest text-[#6B7280] uppercase">
            Google Reviews
          </p>
          <p className="mt-2 text-lg text-[#111111]">
            See what customers are saying on Google Maps.
          </p>
        </div>
        <GoogleSourceBadge />
      </div>
    );
  }

  return (
    <div className="card flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-end gap-8">
        {average != null && (
          <div>
            <p className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
              {average.toFixed(1)}
            </p>
            <p className="mt-1 text-sm text-[#6B7280]">Average rating</p>
          </div>
        )}
        <div>
          <p className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
            {count}
          </p>
          <p className="mt-1 text-sm text-[#6B7280]">
            {count === 1 ? "Review" : "Reviews"}
          </p>
        </div>
      </div>
      <GoogleSourceBadge />
    </div>
  );
}

function GoogleSourceBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] px-4 py-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      <span className="text-sm font-medium text-[#111111]">Reviews from Google</span>
    </div>
  );
}
