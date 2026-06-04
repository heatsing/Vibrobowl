import type { Metadata } from "next";
import { Clock, Globe2, Mail, MapPin } from "lucide-react";
import { company } from "@/lib/site-data";
import { CapabilityMatrix, InlineRFQForm, MetricsBand, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/utils";
import { PageSpecificBrief } from "@/components/page-specific";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: "Contact VibraFlow for feeder engineering support, sales, service, and RFQ assistance.",
  path: "/contact",
  keywords: ["request feeder quote", "bowl feeder sales", "feeding automation support"]
});

export default function ContactPage() {
  const contactCards = [
    [Clock, company.responseTime, "RFQ, application review, and project qualification."],
    [Mail, company.email, "Sales, documents, and engineering follow-up."],
    [Globe2, company.serviceRegion, "Export project support for major manufacturing markets."],
    [MapPin, company.address, "Remote engineering review before project-specific documentation."]
  ] as const;

  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }])} /><JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact VibraFlow", url: `${siteUrl}/contact`, mainEntity: { "@type": "Organization", name: company.name, email: company.email } }} /><SimpleHero eyebrow="Contact" title="Talk with a feeding automation engineer" text="Send project details or book a technical review for your automated production line." /><PageSpecificBrief eyebrow="Contact Routing" title="This page separates sales, engineering review, and support needs" intro="Contact pages often become a generic inbox. This one makes it clear what to send for a quote, what to send for service, and how project teams can get a practical next step." audience="Buyers, automation engineers, plant teams, and integrators who need a direct path to the right conversation." painPoints={[{ title: "Wrong contact path", text: "Service questions, new RFQs, and supplier approval requests need different information." }, { title: "Slow project handoff", text: "A short message without part context can delay the first useful engineering response." }]} proof={[{ title: "Direct contact details", text: "Email, service regions, response time, and RFQ form are all visible on the page." }, { title: "RFQ form embedded", text: "Visitors can send structured project information without leaving the contact page." }]} nextStep="Use the contact cards for direct communication, or complete the embedded RFQ form for project review." /><section className="py-14"><div className="container-wide grid gap-6 md:grid-cols-2 lg:grid-cols-4">{contactCards.map(([Icon, text, helper]) => <div key={String(text)} className="industrial-card rounded-lg p-6"><Icon className="h-8 w-8 text-electric" /><p className="mt-4 font-black text-navy-900">{String(text)}</p><p className="mt-2 text-sm leading-6 text-slate-600">{helper}</p></div>)}</div></section><InlineRFQForm /><MetricsBand /><VisualBand eyebrow="Global Support" title="Support for OEMs, machine builders, integrators, and factories" text="Whether you need a replacement bowl, a complete feeding cell, a hopper and linear feeder package, or an inspection-ready system, our team can review your application and recommend the next step." reverse /><CapabilityMatrix title="Contact Channels" /></>;
}
