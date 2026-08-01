import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@/components/icons/ui";

export function Breadcrumbs({
  items,
  className,
}: {
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <nav
      aria-label="Хлебные крошки"
      className={cn("flex flex-wrap items-center gap-1.5 text-sm", className)}
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.href && !last ? (
              <Link
                href={item.href}
                className="text-gray transition-colors hover:text-mocha"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  last ? "font-semibold text-ink" : "text-gray",
                )}
              >
                {item.label}
              </span>
            )}
            {!last ? <ChevronRightIcon className="h-3.5 w-3.5 text-gray-3" /> : null}
          </span>
        );
      })}
    </nav>
  );
}
