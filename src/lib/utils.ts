import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format price: 3000 -> "3 000 ₽" */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}
