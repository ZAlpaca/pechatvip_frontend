import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const fieldCls =
  "w-full rounded-xl border border-beige bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-2 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/40";

export function Field({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldCls, className)} {...props} />;
}

export function TextArea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldCls, "min-h-32 resize-y", className)} {...props} />;
}

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-semibold text-espresso", className)}
      {...props}
    />
  );
}
