import type { Metadata } from "next";
import { Filter, Search } from "lucide-react";
import { ProductGrid } from "@/components/cards";
import { products } from "@/lib/site-data";
import { JsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/utils";
import { CapabilityMatrix, MetricsBand, ProcessFlow, VisualBand } from "@/components/simple-page";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";
import { PageSpecificBrief } from "@/components/page-specific";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description: "Browse vibratory bowl feeders, linear feeders, centrifugal feeders, flexible feeders, step feeders, hopper systems, and custom feeding systems.",
  path: "/products",
  keywords: ["parts feeder catalog", "industrial feeder products", "feeding automation product category"]
});

export default function ProductsPage() {
  const evaluation = [
    ["Part Geometry", "Shape, center of gravity, nesting risk, burrs, surface finish, and material behavior."],
    ["Line Interface", "Discharge position, escapement timing, PLC signal, sensor logic, and machine envelope."],
    ["Throughput Target", "Required feed rate, buffer strategy, hopper capacity, and downtime tolerance."],
    ["Documentation", "Datasheet, quote scope, FAT record, spare parts, wiring notes, and maintenance plan."]
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Industrial Feeding Products", url: `${siteUrl}/products` }} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])} />
      <JsonLd data={itemListSchema("Industrial Feeding Products", "/products", products.map((p) => ({ name: p.name, href: `/products/${p.slug}`, description: p.summary })))} />
      <section className="bg-slate-50 py-16">
        <div className="container-wide">
          <p className="eyebrow">Product Center</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-black tracking-tight text-navy-900">Automated Feeding Systems for Precision Manufacturing</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">Filter feeder types, compare machine architectures, and download datasheets for engineering review.</p>
          <div className="mt-8 grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm md:grid-cols-[1fr_auto_auto]">
            <label className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3">
              <Search className="h-5 w-5 text-electric" />
              <input className="w-full bg-transparent outline-none" placeholder="Search products, applications, materials..." />
            </label>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 px-5 py-3 font-black text-navy-900"><Filter className="h-4 w-4" /> Filter</button>
            <button className="rounded-md bg-navy-900 px-5 py-3 font-black text-white">Compare Products</button>
          </div>
        </div>
      </section>
      <PageSpecificBrief
        eyebrow="Product Selection"
        title="A product page built for feeder architecture decisions"
        intro="This page helps engineers compare feeder formats before they send parts for review. The goal is to move from a broad equipment category to a realistic machine architecture."
        audience="Automation engineers, machine builders, OEM project managers, and procurement teams comparing bowl, linear, centrifugal, flexible, step, and hopper-based feeding systems."
        painPoints={[
          { title: "Wrong feeder type", text: "A fast catalog choice can fail when part geometry, nesting, or discharge timing is not reviewed." },
          { title: "Incomplete quote scope", text: "Feeders need tooling, controls, hoppers, sensors, and documentation considered together." }
        ]}
        proof={[
          { title: "Category-level comparison", text: "Each product card shows where that feeder format fits and what engineering data matters." },
          { title: "RFQ-ready path", text: "The page points buyers toward drawings, part details, feed rate, and integration requirements." }
        ]}
        nextStep="Shortlist the feeder type that seems closest, then submit drawings or part photos so engineering can confirm the architecture."
      />
      <section className="py-14">
        <div className="container-wide">
          <ProductGrid />
          <div className="mt-10 rounded-lg bg-navy-900 p-8 text-white">
            <h2 className="text-2xl font-black">Quote Builder Ready</h2>
            <p className="mt-2 text-slate-300">Shortlist feeders, add part drawings, and submit one consolidated RFQ to our engineering team.</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center">
            <p className="eyebrow">Selection Method</p>
            <h2 className="section-title mt-2">How our engineers recommend the right feeder type</h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {evaluation.map(([title, text]) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-navy-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <VisualBand eyebrow="Product Architecture" title="Choose the feeder type around part behavior and line requirements" text="Bowl feeders, linear feeders, centrifugal feeders, flexible feeders, step feeders, hoppers, and vision modules can be combined into a complete custom feeding system." />
      <MetricsBand />
      <CapabilityMatrix title="Product Engineering Capabilities" />
      <ProcessFlow />
    </>
  );
}
