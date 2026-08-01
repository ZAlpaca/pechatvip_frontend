import { cn } from "@/lib/utils";
import { StarIcon } from "@/components/icons/ui";

export function Rating({
  value = 5,
  max = 5,
  size = "md",
  className,
}: {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeCls =
    size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-7 w-7" : "h-5 w-5";
  return (
    <div
      className={cn("flex items-center gap-0.5 text-gold", className)}
      role="img"
      aria-label={`Рейтинг ${value} из ${max}`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <StarIcon
          key={i}
          className={cn(sizeCls, i < Math.round(value) ? "text-gold" : "text-gray-3")}
        />
      ))}
    </div>
  );
}
