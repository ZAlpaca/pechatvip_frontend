"use client";

import { useMemo, useState } from "react";
import { Rating } from "@/components/ui/rating";
import { reviews, ratingStats, type Review } from "@/data/reviews";
import { cn } from "@/lib/utils";

type SortMode = "date" | "rating";

const sorters: Record<SortMode, (a: Review, b: Review) => number> = {
  date: (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime(),
  rating: (a, b) => b.rating - a.rating,
};

function parseDate(value: string): Date {
  const [d, m, y] = value.split(".").map(Number);
  return new Date(y, m - 1, d);
}

export function ReviewsView() {
  const [mode, setMode] = useState<SortMode>("date");
  const sorted = useMemo(() => [...reviews].sort(sorters[mode]), [mode]);

  return (
    <>
      <div className="protected-content flex flex-col items-center gap-4 rounded-3xl border border-beige/60 bg-white px-8 py-10 text-center shadow-card md:py-14">
        <p className="text-6xl font-extrabold text-espresso md:text-8xl">
          {ratingStats.average.toFixed(1)}
        </p>
        <Rating value={ratingStats.average} size="lg" />
        <p className="text-base text-ink/70 md:text-lg">
          {ratingStats.count} отзывов · проверенные покупатели
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
        <span className="text-sm font-semibold text-ink/60">Сортировка:</span>
        {(["date", "rating"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-bold transition-all duration-300",
              mode === m
                ? "bg-ink text-cream shadow-card"
                : "border border-beige bg-white text-ink hover:border-mocha hover:text-mocha",
            )}
          >
            {m === "date" ? "По дате" : "По оценке"}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
        {sorted.map((review) => (
          <article
            key={review.id}
            className="protected-content flex flex-col gap-4 rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full gold-gradient text-base font-extrabold text-ink shadow-plaque">
                  {review.author.charAt(0)}
                </span>
                <div>
                  <p className="font-extrabold text-espresso">{review.author}</p>
                  <p className="text-xs text-gray">{review.date}</p>
                </div>
              </div>
              <Rating value={review.rating} size="sm" />
            </div>

            {review.product ? (
              <p className="text-xs font-bold uppercase tracking-wider text-mocha">
                {review.product}
              </p>
            ) : null}

            <div className="flex flex-col gap-3 text-sm leading-relaxed text-ink/80">
              <div>
                <p className="mb-1 font-bold text-espresso">Комментарий:</p>
                <p>{review.comment}</p>
              </div>
              {review.pros ? (
                <div>
                  <p className="mb-1 font-bold text-espresso">Достоинства:</p>
                  <p>{review.pros}</p>
                </div>
              ) : null}
              {review.cons ? (
                <div>
                  <p className="mb-1 font-bold text-espresso">Недостатки:</p>
                  <p>{review.cons}</p>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
