import type { MetadataRoute } from "next";
import { industries, products } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    ["", 1, "daily"],
    ["/products", 0.95, "weekly"],
    ["/industries", 0.9, "weekly"],
    ["/rfq", 0.9, "weekly"],
    ["/case-studies", 0.82, "weekly"],
    ["/success-stories", 0.78, "weekly"],
    ["/downloads", 0.75, "weekly"],
    ["/resources", 0.75, "weekly"],
    ["/about", 0.7, "monthly"],
    ["/factory", 0.7, "monthly"],
    ["/certifications", 0.7, "monthly"],
    ["/blog", 0.65, "weekly"],
    ["/faq", 0.65, "monthly"],
    ["/contact", 0.65, "monthly"],
    ["/privacy", 0.3, "yearly"],
    ["/terms", 0.3, "yearly"]
  ] as const;
  return [
    ...staticPages.map(([path, priority, changeFrequency]) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency, priority })),
    ...products.map((p) => ({ url: `${siteUrl}/products/${p.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 })),
    ...industries.map((i) => ({ url: `${siteUrl}/industries/${i.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }))
  ];
}
