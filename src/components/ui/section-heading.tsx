import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em]",
            light ? "text-gold" : "text-mocha",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl",
          light ? "text-cream" : "text-espresso",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mx-auto mt-4 max-w-3xl text-base leading-relaxed md:text-lg",
            align === "center" ? "mx-auto" : "mx-0",
            light ? "text-cream/80" : "text-ink/75",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
