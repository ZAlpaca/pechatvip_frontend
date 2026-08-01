import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/catalog",
    "/categories",
    "/cart",
    "/checkout",
    "/how-to-order",
    "/reviews",
    "/rules",
    "/contacts",
    "/about",
    "/favorites",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${siteConfig.url}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
