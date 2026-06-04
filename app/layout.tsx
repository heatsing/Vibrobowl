import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ConversionBand } from "@/components/simple-page";
import { AuthorityProof, TrustBar } from "@/components/authority";
import { ConversionDock } from "@/components/conversion-dock";
import { company } from "@/lib/site-data";
import { JsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/utils";
import { seoKeywords } from "@/lib/seo";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VibraFlow | Vibratory Bowl Feeders & Automated Feeding Systems",
    template: "%s | VibraFlow"
  },
  description: "ISO 9001 vibratory bowl feeder manufacturer for automotive, electronics, medical, pharmaceutical, packaging, and aerospace automation.",
  keywords: seoKeywords,
  applicationName: "VibraFlow",
  authors: [{ name: "VibraFlow Engineering Team" }],
  creator: "VibraFlow",
  publisher: "VibraFlow",
  category: "Industrial Automation",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "VibraFlow Industrial Feeding Systems",
    description: "Premium vibratory bowl feeders, linear feeders, hopper systems, custom feeding systems, and vision inspection.",
    url: siteUrl,
    images: ["/images/product-machine.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "VibraFlow Industrial Feeding Systems",
    description: "Precision vibratory bowl feeding solutions for automated production lines.",
    images: ["/images/product-machine.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} pb-20 font-sans antialiased lg:pb-24`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.legalName,
            alternateName: company.name,
            url: siteUrl,
            logo: `${siteUrl}/images/product-machine.png`,
            email: company.email,
            address: { "@type": "PostalAddress", addressCountry: "Global export support" },
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: company.email,
                contactType: "sales and engineering support",
                areaServed: ["US", "CA", "DE", "GB", "AU", "JP", "KR"],
                availableLanguage: ["English"]
              }
            ],
            knowsAbout: [
              "Vibratory bowl feeders",
              "Automated part feeding",
              "Linear feeders",
              "Centrifugal feeders",
              "Flexible feeders",
              "Hopper systems",
              "Vision inspection systems",
              "Industrial automation"
            ],
            areaServed: ["USA", "Canada", "Germany", "United Kingdom", "Australia", "Japan", "South Korea"],
            sameAs: ["https://www.linkedin.com", "https://www.youtube.com"]
          }}
        />
        <Header />
        <TrustBar />
        <main>{children}</main>
        <AuthorityProof />
        <ConversionBand />
        <Footer />
        <ConversionDock />
      </body>
    </html>
  );
}
