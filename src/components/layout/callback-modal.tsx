"use client";

import { useEffect, useState } from "react";
import { useCallbackModal } from "./callback-context";
import { Button } from "@/components/ui/button";
import { Field, Label } from "@/components/ui/input";
import { CloseIcon } from "@/components/icons/ui";

export function CallbackModal() {
  const { open, closeCallback } = useCallbackModal();
  const [sent, setSent] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setSent(false);
    closeCallback();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Заказать обратный звонок"
    >
      <button
        type="button"
        aria-label="Закрыть"
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-cream shadow-soft">
        <div className="brown-gradient px-8 py-6">
          <h3 className="text-2xl font-extrabold uppercase text-cream">
            Заказать обратный звонок
          </h3>
          <p className="mt-1 text-sm text-cream/80">
            Оставьте номер — менеджер свяжется с вами в рабочее время
          </p>
          <button
            type="button"
            aria-label="Закрыть окно"
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full p-1.5 text-cream/80 transition hover:bg-white/10 hover:text-cream"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {sent ? (
          <div className="px-8 py-12 text-center">
            <p className="text-3xl">✓</p>
            <p className="mt-3 text-lg font-bold text-espresso">
              Спасибо! Заявка отправлена
            </p>
            <p className="mt-2 text-sm text-ink/70">
              Мы перезвоним вам в ближайшее время с 10:00 до 20:00.
            </p>
            <Button className="mt-6" variant="brown" onClick={handleClose}>
              Отлично
            </Button>
          </div>
        ) : (
          <form
            className="protected-content space-y-4 px-8 py-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div>
              <Label htmlFor="cb-name">Ваше имя</Label>
              <Field id="cb-name" name="name" placeholder="Иван" required autoComplete="name" />
            </div>
            <div>
              <Label htmlFor="cb-phone">Телефон</Label>
              <Field
                id="cb-phone"
                name="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
                autoComplete="tel"
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
            <Button
              type="submit"
              className="w-full"
              variant="brown"
              disabled={!agreed}
            >
              Отправить заявку
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
