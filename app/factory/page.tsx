import type { Metadata } from "next";
import Image from "next/image";
import { CapabilityMatrix, MetricsBand, ProcessFlow, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";
import { PageSpecificBrief } from "@/components/page-specific";

export const metadata: Metadata = pageMetadata({
  title: "Factory",
  description: "Explore VibraFlow manufacturing, tooling, testing, quality inspection, and feeder system assembly capabilities.",
  path: "/factory",
  keywords: ["feeder factory", "bowl feeder tooling workshop", "automated feeding system manufacturing"]
});

export default function FactoryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Factory", path: "/factory" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Place", name: `${company.name} Factory`, url: `${siteUrl}/factory`, description: "Manufacturing, tooling, assembly and testing capability for automated feeding systems." }} />
      <SimpleHero eyebrow="Factory" title="Manufacturing capability for custom feeding systems" text="From part analysis to bowl tooling, drive tuning, controls, inspection, and final FAT documentation." />
      <PageSpecificBrief eyebrow="Factory Evidence" title="The factory page shows how a custom feeder becomes a controlled build" intro="Custom feeding systems depend on repeatable tooling, careful tuning, and proof before shipment. This page focuses on the build process rather than generic facility claims." audience="Supplier quality engineers, procurement teams, and integrators checking whether the factory can support custom equipment programs." painPoints={[{ title: "Unclear build control", text: "Without a visible workflow, buyers cannot judge how tooling, controls, and testing are managed." }, { title: "Acceptance risk", text: "A feeder may look finished but still fail if feed-rate verification and handoff testing are weak." }]} proof={[{ title: "Workshop categories", text: "Tooling workshop, system assembly, and quality inspection are separated as distinct factory functions." }, { title: "FAT-oriented workflow", text: "The page describes review, tuning, sensor setup, test documentation, and shipment preparation." }]} nextStep="Use the Factory page for capability review, then request FAT expectations and documentation requirements during RFQ." />
      <section className="py-14"><div className="container-wide grid gap-6 md:grid-cols-3">{["Tooling Workshop", "System Assembly", "Quality Inspection"].map((item) => <div key={item} className="industrial-card rounded-lg p-4"><Image src="/images/product-machine.png" alt={item} width={500} height={360} className="aspect-[4/3] rounded-md bg-slate-50 object-contain" /><h2 className="mt-4 text-xl font-black text-navy-900">{item}</h2></div>)}</div></section>
      <VisualBand eyebrow="Factory Workflow" title="Tooling, assembly, controls, and inspection in one controlled process" text="Every feeder system moves through application review, machining, bowl tooling, controller tuning, sensor setup, test documentation, and shipment preparation." />
      <MetricsBand />
      <CapabilityMatrix title="Manufacturing Capabilities" />
      <ProcessFlow />
    </>
  );
}
