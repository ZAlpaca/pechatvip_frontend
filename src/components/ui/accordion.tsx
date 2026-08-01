"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/icons/ui";

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-colors duration-300",
        open
          ? "border-gold bg-white shadow-card"
          : "border-beige bg-white/60 hover:border-gold/60",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-8 md:py-6"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-espresso md:text-xl">
          {question}
        </span>
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300",
            open ? "rotate-180 bg-ink text-gold" : "bg-sand text-mocha",
          )}
        >
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="protected-content px-5 pb-6 text-sm leading-relaxed text-ink/80 md:px-8 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({
  items,
  className,
}: {
  items: { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          defaultOpen={i === 0}
        />
      ))}
    </div>
  );
}
