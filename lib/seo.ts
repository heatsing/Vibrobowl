import type { Metadata } from "next";
import { company, industries, products } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";

const defaultImage = "/images/product-machine.png";

export const seoKeywords = [
  "vibratory bowl feeder",
  "vibratory bowl feeders manufacturer",
  "bowl feeder automation",
  "linear feeder",
  "centrifugal feeder",
  "flexible feeder",
  "step feeder",
  "hopper system",
  "custom feeding system",
  "vision inspection system",
  "automated part feeding",
  "industrial automation equipment"
];

export function absoluteUrl(path = "/") {
  return path.startsWith("http") ? path : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  keywords = []
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical: path,
      languages: {
        en: path,
        "x-default": path
      }
    },
    openGraph: {
      type: "website",
      title: `${title} | ${company.name}`,
      description,
      url: absoluteUrl(path),
      siteName: company.name,
      images: [{ url: image, width: 1200, height: 630, alt: `${company.name} ${title}` }],
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.name}`,
      description,
      images: [image]
    }
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function productSchema(product: (typeof products)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: absoluteUrl(product.image),
    description: product.summary,
    brand: { "@type": "Brand", name: company.name },
    manufacturer: {
      "@type": "Organization",
      name: company.legalName,
      url: siteUrl
    },
    category: product.category,
    sku: `VF-${product.slug.toUpperCase()}`,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Specifications", value: product.specs },
      { "@type": "PropertyValue", name: "Application", value: "Automated part feeding and orientation" },
      { "@type": "PropertyValue", name: "Customization", value: "Custom tooling, coating, sensors, controller, hopper and vision integration" }
    ],
    potentialAction: {
      "@type": "QuoteAction",
      target: absoluteUrl("/rfq"),
      name: "Request a Quote"
    }
  };
}

export function itemListSchema(name: string, path: string, items: Array<{ name: string; href: string; description?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: item.name,
        description: item.description,
        url: absoluteUrl(item.href)
      }
    }))
  };
}

export function industrySchema(industry: (typeof industries)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.name} Automated Feeding Systems`,
    description: industry.detail,
    provider: { "@type": "Organization", name: company.name, url: siteUrl },
    areaServed: ["USA", "Canada", "Germany", "UK", "Australia", "Japan", "South Korea"],
    serviceType: "Industrial automation feeding system design and manufacturing",
    url: absoluteUrl(`/industries/${industry.slug}`)
  };
}

export function articleSchema({ title, description, path }: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(defaultImage),
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name, logo: { "@type": "ImageObject", url: absoluteUrl(defaultImage) } },
    mainEntityOfPage: absoluteUrl(path)
  };
}
