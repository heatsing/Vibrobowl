import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/site-data";
import { CapabilityMatrix, InlineRFQForm, MetricsBand, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: "Contact VibraFlow for feeder engineering support, sales, service, and RFQ assistance.",
  path: "/contact",
  keywords: ["request feeder quote", "bowl feeder sales", "feeding automation support"]
});

export default function ContactPage() {
  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }])} /><JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact VibraFlow", url: `${siteUrl}/contact`, mainEntity: { "@type": "Organization", name: company.name, telephone: company.phone, email: company.email } }} /><SimpleHero eyebrow="Contact" title="Talk with a feeding automation engineer" text="Send project details or book a technical review for your automated production line." /><section className="py-14"><div className="container-wide grid gap-6 md:grid-cols-3">{[[Phone, company.phone], [Mail, company.email], [MapPin, company.address]].map(([Icon, text]) => <div key={String(text)} className="industrial-card rounded-lg p-6"><Icon className="h-8 w-8 text-electric" /><p className="mt-4 font-black text-navy-900">{String(text)}</p><p className="mt-2 text-sm leading-6 text-slate-600">Sales, service, engineering review, and project support.</p></div>)}</div></section><InlineRFQForm /><MetricsBand /><VisualBand eyebrow="Global Support" title="Support for OEMs, machine builders, integrators, and factories" text="Whether you need a replacement bowl, a complete feeding cell, a hopper and linear feeder package, or an inspection-ready system, our team can review your application and recommend the next step." reverse /><CapabilityMatrix title="Contact Channels" /></>;
}
