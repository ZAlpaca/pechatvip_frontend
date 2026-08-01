import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "brown" | "dark" | "outline" | "white" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

const variants: Record<Variant, string> = {
  gold: "gold-gradient text-ink font-semibold shadow-card hover:brightness-105",
  brown:
    "brown-gradient text-white font-semibold shadow-card hover:brightness-110",
  dark: "bg-ink text-cream font-semibold hover:bg-coffee",
  outline:
    "border-2 border-ink/80 text-ink font-semibold hover:bg-ink hover:text-cream",
  white:
    "bg-white/90 text-ink font-semibold shadow-card backdrop-blur hover:bg-white",
  ghost: "text-ink hover:text-mocha",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-5 text-lg",
};

const baseCls =
  "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold select-none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button({
  variant = "gold",
  size = "md",
  className,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(baseCls, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "gold",
  size = "md",
  className,
  href,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href ?? "#"}
      className={cn(baseCls, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
