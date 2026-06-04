import type { Metadata } from "next";
import Image from "next/image";
import { CapabilityMatrix, MetricsBand, ProcessFlow, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";

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
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Place", name: `${company.name} Factory`, url: `${siteUrl}/factory`, address: company.address, description: "Manufacturing, tooling, assembly and testing facility for automated feeding systems." }} />
      <SimpleHero eyebrow="Factory" title="Manufacturing capability for custom feeding systems" text="From part analysis to bowl tooling, drive tuning, controls, inspection, and final FAT documentation." />
      <section className="py-14"><div className="container-wide grid gap-6 md:grid-cols-3">{["Tooling Workshop", "System Assembly", "Quality Inspection"].map((item) => <div key={item} className="industrial-card rounded-lg p-4"><Image src="/images/product-machine.png" alt={item} width={500} height={360} className="aspect-[4/3] rounded-md bg-slate-50 object-contain" /><h2 className="mt-4 text-xl font-black text-navy-900">{item}</h2></div>)}</div></section>
      <VisualBand eyebrow="Factory Workflow" title="Tooling, assembly, controls, and inspection in one controlled process" text="Every feeder system moves through application review, machining, bowl tooling, controller tuning, sensor setup, test documentation, and shipment preparation." />
      <MetricsBand />
      <CapabilityMatrix title="Manufacturing Capabilities" />
      <ProcessFlow />
    </>
  );
}
