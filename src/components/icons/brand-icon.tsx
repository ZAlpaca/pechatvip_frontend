import fs from "node:fs";
import path from "node:path";
import { cn } from "@/lib/utils";

/**
 * Brand icons (ВК, Telegram, Ozon, WB, Яндекс Маркет, телефон, e-mail)
 * rendered as true inline SVG (клиентские SVG-файлы заказчика).
 * Server Component — reads the SVG source and injects it into the HTML.
 */
const BRAND_DIR = path.join(
  process.cwd(),
  "src",
  "components",
  "icons",
  "brand",
);

const brandMap = {
  vk: "vk.svg",
  telegram: "telegram.svg",
  ozon: "ozon.svg",
  wb: "wb.svg",
  "yandex-market": "yandex-market.svg",
  call: "call.svg",
  email: "email.svg",
} as const;

export type BrandIconName = keyof typeof brandMap;

const cache = new Map<string, string>();

export function BrandIcon({
  name,
  className,
  title,
}: {
  name: BrandIconName;
  className?: string;
  title?: string;
}) {
  const file = brandMap[name];
  let svg = cache.get(file);
  if (!svg) {
    svg = fs.readFileSync(path.join(BRAND_DIR, file), "utf8");
    cache.set(file, svg);
  }
  const cls = cn("inline-block h-6 w-6 shrink-0", className);
  const injected = svg
    .replace(/<svg([^>]*?)>/i, (_m, attrs: string) => {
      const cleaned = attrs
        .replace(/\swidth="[^"]*"/i, "")
        .replace(/\sheight="[^"]*"/i, "");
      return `<svg${cleaned} class="${cls}"${title ? ` role="img" aria-label="${title}"` : " aria-hidden=\"true\""}>`;
    })
    .replace(/<\/svg>\s*$/i, (m) => (title ? m : m));
  return <span dangerouslySetInnerHTML={{ __html: injected }} />;
}
