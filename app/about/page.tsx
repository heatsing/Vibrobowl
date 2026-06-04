import type { Metadata } from "next";
import Image from "next/image";
import { timeline } from "@/lib/site-data";
import { CapabilityMatrix, MetricsBand, ProcessFlow, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";
import { PageSpecificBrief } from "@/components/page-specific";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: "VibraFlow designs and manufactures precision automated feeding systems for global industrial automation customers.",
  path: "/about",
  keywords: ["bowl feeder manufacturer", "industrial automation equipment manufacturer", "feeding system factory"]
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "About VibraFlow", url: `${siteUrl}/about`, mainEntity: { "@type": "Organization", name: company.legalName, url: siteUrl } }} />
      <SimpleHero eyebrow="About VibraFlow" title="Precision feeding engineering with global manufacturing support" text="We combine custom tooling, controls, vision inspection, documentation, and service to support OEMs, machine builders, and factories." />
      <PageSpecificBrief eyebrow="Company Fit" title="The about page explains why buyers can trust the engineering process" intro="This page is not a company slogan page. It shows how VibraFlow developed from feeder tooling into integrated feeding systems, and why that matters to industrial buyers." audience="Supplier qualification teams, project owners, and OEM buyers who need confidence in the manufacturer behind the equipment." painPoints={[{ title: "Supplier risk", text: "Custom feeders are difficult to replace once integrated, so buyers need confidence in long-term support." }, { title: "Capability ambiguity", text: "A company must show whether it only sells machines or can solve tooling, controls, and integration problems." }]} proof={[{ title: "Timeline of capability", text: "The page shows progression from tooling to full automated feeding systems." }, { title: "Engineering culture", text: "Content focuses on production behavior, uptime, maintenance, documentation, and lifecycle service." }]} nextStep="Use the About page to judge supplier fit, then review Factory, Certifications, and Case Studies for deeper evidence." />
      <section className="py-14"><div className="container-wide grid items-center gap-10 lg:grid-cols-2"><Image src="/images/product-machine.png" alt="VibraFlow engineering" width={760} height={560} className="rounded-lg bg-slate-50 object-contain shadow-industrial" /><div>{timeline.map(([year, text]) => <div key={year} className="border-l-2 border-electric pb-8 pl-5 last:pb-0"><p className="text-2xl font-black text-navy-900">{year}</p><p className="mt-1 text-slate-700">{text}</p></div>)}</div></div></section>
      <MetricsBand />
      <VisualBand eyebrow="Engineering Culture" title="German-style manufacturing discipline with practical application support" text="Our team treats feeder design as a production engineering problem: part behavior, uptime, maintenance access, controls, documentation, and lifecycle service all matter." reverse />
      <CapabilityMatrix title="Why Global Manufacturers Work With Us" />
      <ProcessFlow />
    </>
  );
}
