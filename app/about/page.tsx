import type { Metadata } from "next";
import Image from "next/image";
import { timeline } from "@/lib/site-data";
import { CapabilityMatrix, MetricsBand, ProcessFlow, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";

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
      <section className="py-14"><div className="container-wide grid items-center gap-10 lg:grid-cols-2"><Image src="/images/product-machine.png" alt="VibraFlow engineering" width={760} height={560} className="rounded-lg bg-slate-50 object-contain shadow-industrial" /><div>{timeline.map(([year, text]) => <div key={year} className="border-l-2 border-electric pb-8 pl-5 last:pb-0"><p className="text-2xl font-black text-navy-900">{year}</p><p className="mt-1 text-slate-700">{text}</p></div>)}</div></div></section>
      <MetricsBand />
      <VisualBand eyebrow="Engineering Culture" title="German-style manufacturing discipline with practical application support" text="Our team treats feeder design as a production engineering problem: part behavior, uptime, maintenance access, controls, documentation, and lifecycle service all matter." reverse />
      <CapabilityMatrix title="Why Global Manufacturers Work With Us" />
      <ProcessFlow />
    </>
  );
}
