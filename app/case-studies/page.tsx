import type { Metadata } from "next";
import { cases } from "@/lib/site-data";
import { CapabilityMatrix, MetricsBand, ProcessFlow, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/utils";
import { articleSchema, breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";
import { PageSpecificBrief } from "@/components/page-specific";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description: "Industrial feeding automation case studies with measurable efficiency, downtime, and integration results.",
  path: "/case-studies",
  keywords: ["vibratory feeder case study", "automation feeder success story", "industrial feeding system results"]
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "VibraFlow Case Studies", url: `${siteUrl}/case-studies` }} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])} />
      <JsonLd data={itemListSchema("Customer Case Studies", "/case-studies", cases.map((c) => ({ name: c.title, href: "/case-studies", description: c.result })))} />
      <JsonLd data={articleSchema({ title: "VibraFlow Industrial Feeding Automation Case Studies", description: "Customer success stories for vibratory feeding systems, hoppers, and vision inspection integrations.", path: "/case-studies" })} />
      <SimpleHero eyebrow="Case Studies" title="Customer results from real automated feeding projects" text="Explore how manufacturers use bowl feeders, linear feeders, hoppers, and vision inspection to improve production stability." />
      <PageSpecificBrief eyebrow="Proof of Results" title="Case studies are written for risk reduction, not storytelling alone" intro="Industrial buyers use case studies to understand whether a supplier can handle similar parts, constraints, countries, and integration expectations." audience="Decision makers comparing suppliers for high-value automation projects where downtime, acceptance, and support matter." painPoints={[{ title: "No measurable proof", text: "A supplier claim is weak unless it connects to throughput, downtime, or validation outcomes." }, { title: "Different operating contexts", text: "Automotive, medical, and electronics cases need different success metrics." }]} proof={[{ title: "Result-focused cards", text: "Each case card names industry, country, challenge area, and measurable outcome." }, { title: "Integration evidence", text: "The page points to feeder concept, tooling decision, and production result." }]} nextStep="Find the closest industry case, then send your part details so engineering can compare the constraints." />
      <section className="py-14"><div className="container-wide grid gap-6 md:grid-cols-3">{cases.map((item) => <article key={item.title} className="industrial-card rounded-lg p-6"><p className="eyebrow">{item.industry}</p><h2 className="mt-3 text-2xl font-black text-navy-900">{item.title}</h2><p className="mt-2 font-bold text-slate-500">{item.country}</p><p className="mt-5 leading-7 text-slate-700">{item.result}</p></article>)}</div></section>
      <VisualBand eyebrow="Measured Results" title="Case studies are built on throughput, uptime, and integration evidence" text="Each project story documents the application challenge, feeder concept, tooling decision, integration path, and measurable production result so procurement and engineering teams can evaluate fit." />
      <MetricsBand />
      <CapabilityMatrix title="What Customers Evaluate" />
      <ProcessFlow />
    </>
  );
}
