import type { Metadata } from "next";
import { Download } from "lucide-react";
import { products } from "@/lib/site-data";
import { CapabilityMatrix, SearchPanel, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Downloads Center",
  description: "Download technical datasheets, catalogs, brochures, certificates, and factory audit resources.",
  path: "/downloads",
  keywords: ["feeder datasheet", "vibratory bowl feeder catalog", "ISO 9001 certificate", "CE declaration"]
});

export default function DownloadsPage() {
  const docs = ["Full Product Catalog", "ISO 9001 Certificate", "CE Declaration", "Factory Audit Profile", "Feeder Selection Guide", "Maintenance Checklist"];
  const allDocs = [...products.map((p) => `${p.name} Datasheet`), ...docs];
  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Downloads", path: "/downloads" }])} /><JsonLd data={itemListSchema("Technical Downloads", "/downloads", allDocs.map((name) => ({ name, href: "/downloads", description: "PDF-ready resource for engineering and procurement review." })))} /><SimpleHero eyebrow="Downloads" title="Technical datasheets, catalogs, and certificates" text="A CMS-ready download center for sales enablement, procurement review, and engineering documentation." /><SearchPanel placeholder="Search datasheets, certificates, catalogs..." /><section className="py-14"><div className="container-wide grid gap-4 md:grid-cols-2">{allDocs.map((title) => <div key={title} className="industrial-card flex items-center justify-between rounded-lg p-5"><div><h2 className="font-black text-navy-900">{title}</h2><p className="text-sm text-slate-600">PDF-ready resource for engineering and procurement review.</p></div><Download className="h-6 w-6 text-electric" /></div>)}</div></section><VisualBand eyebrow="Document Control" title="Technical documents that shorten procurement and engineering review" text="Datasheets, certificates, factory documents, operation notes, and selection guides help buyers evaluate feeder performance, compliance, and integration readiness." /><CapabilityMatrix title="Download Center Features" /></>;
}
