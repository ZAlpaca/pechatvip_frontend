"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";
import { Field, Label, TextArea } from "@/components/ui/input";
import { cn, formatPrice } from "@/lib/utils";

const PROMO_CODES: Record<string, number> = {
  PROMO10: 10,
  PECHATVIP: 5,
};

const deliveryOptions = [
  { id: "courier", label: "Курьерская доставка", price: 350, hint: "По Краснодару — согласуйте время с менеджером" },
  { id: "tc", label: "Пункт выдачи ТК", price: 200, hint: "СДЭК, Почта России, Яндекс Доставка" },
  { id: "pickup", label: "Самовывоз", price: 0, hint: "г. Краснодар, улица Вишняковой, 2литД" },
] as const;

const paymentOptions = [
  { id: "card", label: "Банковской картой онлайн", hint: "Visa, Mastercard, МИР — через защищённое соединение" },
  { id: "sbp", label: "СБП (Система быстрых платежей)", hint: "Оплата по QR-коду" },
  { id: "cash", label: "При получении / после печати", hint: "Наличными или переводом" },
] as const;

export function CheckoutForm() {
  const { items, total, clear } = useCart();
  const [delivery, setDelivery] = useState<(typeof deliveryOptions)[number]["id"]>("tc");
  const [payment, setPayment] = useState<(typeof paymentOptions)[number]["id"]>("card");
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState<string | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [orderNumber] = useState(() => `PV-${Math.floor(100000 + Math.random() * 900000)}`);

  const applyPromo = () => {
    const code = promo.trim().toUpperCase();
    if (!code) return;
    if (PROMO_CODES[code]) {
      setApplied(code);
      setPromoError(null);
    } else {
      setApplied(null);
      setPromoError("Промокод не найден. Попробуйте ещё раз.");
    }
  };

  if (placed) {
    return (
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-beige/60 bg-white px-8 py-16 text-center shadow-card">
        <p className="text-4xl">✓</p>
        <h2 className="text-2xl font-extrabold uppercase text-espresso md:text-3xl">
          Заказ {orderNumber} оформлен
        </h2>
        <p className="mx-auto max-w-md text-ink/70">
          Спасибо за заказ! Менеджер свяжется с вами для подтверждения деталей и
          уточнения способа оплаты. Проверяйте телефон и почту.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-base font-bold text-cream shadow-card transition hover:bg-coffee"
          >
            Перейти в каталог
          </Link>
          <Link
            href="/how-to-order"
            className="inline-flex items-center justify-center rounded-full border-2 border-ink/80 px-8 py-4 text-base font-bold text-ink transition hover:bg-ink hover:text-cream"
          >
            Как заказать
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-5 rounded-3xl border border-beige/60 bg-white px-8 py-16 text-center shadow-card">
        <h2 className="text-2xl font-extrabold uppercase text-espresso">
          Корзина пуста
        </h2>
        <p className="max-w-md text-ink/70">
          Добавьте картины в корзину, чтобы оформить заказ.
        </p>
        <Link
          href="/catalog"
          className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-base font-bold text-cream shadow-card transition hover:bg-coffee"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  const deliveryPrice =
    deliveryOptions.find((d) => d.id === delivery)?.price ?? 0;
  const discount = applied ? Math.round((total * PROMO_CODES[applied]) / 100) : 0;
  const grandTotal = total - discount + deliveryPrice;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clear();
  };

  return (
    <form onSubmit={onSubmit} className="protected-content grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr]">
      <div className="flex flex-col gap-8">
        <section className="rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8">
          <h2 className="text-xl font-extrabold uppercase text-espresso md:text-2xl">
            Контактные данные
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="co-name">Ваше имя</Label>
              <Field id="co-name" name="name" placeholder="Иван" required autoComplete="name" />
            </div>
            <div>
              <Label htmlFor="co-phone">Телефон</Label>
              <Field
                id="co-phone"
                name="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
                autoComplete="tel"
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="co-email">Электронная почта</Label>
              <Field
                id="co-email"
                name="email"
                type="email"
                placeholder="ivan@example.ru"
                required
                autoComplete="email"
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="co-address">Адрес доставки</Label>
              <TextArea
                id="co-address"
                name="address"
                placeholder="Город, улица, дом, квартира / индекс"
                required
                rows={3}
                autoComplete="street-address"
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8">
          <h2 className="text-xl font-extrabold uppercase text-espresso md:text-2xl">
            Способ доставки
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            {deliveryOptions.map((opt) => (
              <label
                key={opt.id}
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-all duration-300",
                  delivery === opt.id
                    ? "border-ink bg-sand"
                    : "border-beige bg-white hover:border-mocha/40",
                )}
              >
                <input
                  type="radio"
                  name="delivery"
                  value={opt.id}
                  checked={delivery === opt.id}
                  onChange={() => setDelivery(opt.id)}
                  className="mt-1 h-4 w-4 accent-[#6A3D27]"
                />
                <span className="flex flex-1 flex-col">
                  <span className="font-bold text-espresso">
                    {opt.label}{" "}
                    <span className="font-extrabold">
                      {opt.price > 0 ? formatPrice(opt.price) : "Бесплатно"}
                    </span>
                  </span>
                  <span className="text-sm text-ink/60">{opt.hint}</span>
                </span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8">
          <h2 className="text-xl font-extrabold uppercase text-espresso md:text-2xl">
            Способ оплаты
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            {paymentOptions.map((opt) => (
              <label
                key={opt.id}
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-all duration-300",
                  payment === opt.id
                    ? "border-ink bg-sand"
                    : "border-beige bg-white hover:border-mocha/40",
                )}
              >
                <input
                  type="radio"
                  name="payment"
                  value={opt.id}
                  checked={payment === opt.id}
                  onChange={() => setPayment(opt.id)}
                  className="mt-1 h-4 w-4 accent-[#6A3D27]"
                />
                <span className="flex flex-1 flex-col">
                  <span className="font-bold text-espresso">{opt.label}</span>
                  <span className="text-sm text-ink/60">{opt.hint}</span>
                </span>
              </label>
            ))}
          </div>
        </section>
      </div>

      <aside className="h-fit rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8">
        <h2 className="text-xl font-extrabold uppercase text-espresso">Ваш заказ</h2>
        <ul className="mt-5 flex flex-col gap-3">
          {items.map((item) => (
            <li key={`${item.id}-${item.size}`} className="flex justify-between gap-3 text-sm">
              <span className="text-ink/75">
                {item.name} · {item.size} см × {item.qty}
              </span>
              <span className="font-bold text-espresso">
                {formatPrice(item.price * item.qty)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <div className="flex gap-2">
            <Field
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              placeholder="Промокод"
              aria-label="Промокод"
            />
            <Button type="button" variant="dark" size="md" onClick={applyPromo}>
              Применить
            </Button>
          </div>
          {applied ? (
            <p className="mt-2 text-sm font-semibold text-green-700">
              Промокод {applied} применён: −{PROMO_CODES[applied]}%
            </p>
          ) : null}
          {promoError ? (
            <p className="mt-2 text-sm text-wine">{promoError}</p>
          ) : null}
        </div>

        <dl className="mt-5 space-y-2.5 border-t border-beige/60 pt-5 text-sm">
          <div className="flex justify-between">
            <dt className="text-ink/70">Товары</dt>
            <dd className="font-bold text-espresso">{formatPrice(total)}</dd>
          </div>
          {discount > 0 ? (
            <div className="flex justify-between">
              <dt className="text-ink/70">Скидка по промокоду</dt>
              <dd className="font-bold text-wine">−{formatPrice(discount)}</dd>
            </div>
          ) : null}
          <div className="flex justify-between">
            <dt className="text-ink/70">Доставка</dt>
            <dd className="font-bold text-espresso">
              {deliveryPrice > 0 ? formatPrice(deliveryPrice) : "Бесплатно"}
            </dd>
          </div>
        </dl>
        <div className="mt-4 flex justify-between border-t border-beige/60 pt-4">
          <span className="font-extrabold uppercase text-espresso">Итого</span>
          <span className="text-2xl font-extrabold text-espresso">
            {formatPrice(grandTotal)}
          </span>
        </div>

        <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs text-ink/70">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#6A3D27]"
          />
          <span>
            Я принимаю условия соглашения об обработке и использовании моих
            персональных данных (152-ФЗ)
          </span>
        </label>
        <Button
          type="submit"
          variant="brown"
          size="lg"
          className="mt-5 w-full"
          disabled={!agreed}
        >
          Оформить заказ
        </Button>
        <p className="mt-3 text-center text-xs text-gray">
          Нажимая кнопку, вы подтверждаете правильность указанных данных.
        </p>
      </aside>
    </form>
  );
}
