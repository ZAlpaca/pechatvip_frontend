"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Field, Label, TextArea } from "@/components/ui/input";

export function AskQuestionForm({
  heading = "Задайте вопрос",
  subheading,
  className,
}: {
  heading?: string;
  subheading?: string;
  className?: string;
}) {
  const [sent, setSent] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div
        className={
          "glass-light flex flex-col items-center justify-center rounded-3xl border border-beige px-8 py-14 text-center shadow-card " +
          (className ?? "")
        }
      >
        <p className="text-4xl">✓</p>
        <p className="mt-4 text-xl font-extrabold uppercase text-espresso">
          Сообщение отправлено
        </p>
        <p className="mt-2 max-w-sm text-sm text-ink/70">
          Спасибо! Мы ответим вам на указанную почту в ближайшее время.
        </p>
        <Button
          className="mt-6"
          variant="brown"
          onClick={() => setSent(false)}
          type="button"
        >
          Написать ещё
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        "glass-light protected-content rounded-3xl border border-beige p-6 shadow-card md:p-8 " +
        (className ?? "")
      }
    >
      <h3 className="text-xl font-extrabold uppercase text-espresso md:text-2xl">
        {heading}
      </h3>
      {subheading ? (
        <p className="mt-1 text-sm text-ink/70">{subheading}</p>
      ) : null}
      <div className="mt-6 space-y-4">
        <div>
          <Label htmlFor={`${heading}-name`}>Ваше имя</Label>
          <Field
            id={`${heading}-name`}
            name="name"
            placeholder="Иван"
            required
            autoComplete="name"
          />
        </div>
        <div>
          <Label htmlFor={`${heading}-email`}>Ваш email</Label>
          <Field
            id={`${heading}-email`}
            name="email"
            type="email"
            placeholder="ivan@example.ru"
            required
            autoComplete="email"
          />
        </div>
        <div>
          <Label htmlFor={`${heading}-message`}>Сообщение</Label>
          <TextArea
            id={`${heading}-message`}
            name="message"
            placeholder="Здравствуйте! Хотел(а) бы уточнить..."
            required
            rows={5}
          />
        </div>
        <label className="flex cursor-pointer items-start gap-3 text-xs text-ink/70">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#6A3D27]"
          />
          <span>
            Я принимаю условия соглашения об обработке и использовании моих
            персональных данных
          </span>
        </label>
        <Button type="submit" className="w-full" variant="brown" disabled={!agreed}>
          Отправить
        </Button>
      </div>
    </form>
  );
}
