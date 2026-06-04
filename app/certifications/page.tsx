import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/site-data";
import { CapabilityMatrix, MetricsBand, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Certifications",
  description: "VibraFlow certifications including ISO 9001, CE, RoHS, SGS, patent certificates, and factory audit reports.",
  path: "/certifications",
  keywords: ["ISO 9001 feeder manufacturer", "CE certified bowl feeder", "RoHS feeder system", "factory audit report"]
});

export default function CertificationsPage() {
  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Certifications", path: "/certifications" }])} /><JsonLd data={itemListSchema("Certifications and Quality Documents", "/certifications", certifications.map((name) => ({ name, href: "/certifications", description: "Quality and compliance document for industrial procurement." })))} /><SimpleHero eyebrow="Certifications" title="Quality documentation for enterprise procurement" text="Trust assets for global B2B buyers, machine builders, and regulated production teams." /><section className="py-14"><div className="container-wide grid gap-4 md:grid-cols-3">{certifications.map((item) => <div key={item} className="industrial-card rounded-lg p-8 text-center"><ShieldCheck className="mx-auto h-10 w-10 text-electric" /><h2 className="mt-4 text-xl font-black text-navy-900">{item}</h2><p className="mt-3 text-sm leading-6 text-slate-600">Available for procurement, supplier qualification, and factory audit workflows.</p></div>)}</div></section><MetricsBand /><VisualBand eyebrow="Quality System" title="Documented manufacturing quality for global industrial buyers" text="Our certification page is structured for ISO, CE, RoHS, SGS, patent, and factory audit assets so customers can complete supplier approval faster." reverse /><CapabilityMatrix title="Quality Assurance Areas" /></>;
}
