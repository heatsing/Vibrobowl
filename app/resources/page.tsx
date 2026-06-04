import type { Metadata } from "next";
import { CapabilityMatrix, LinkCard, SearchPanel, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Resources Center",
  description: "Technical resources, videos, brochures, feeder selection guides, case studies, and support materials.",
  path: "/resources",
  keywords: ["feeder datasheets", "bowl feeder brochure", "automation feeder resources"]
});

export default function ResourcesPage() {
  const resources = [["Technical Guides", "Selection guides and integration notes."], ["Videos", "Factory demos, feeder operation, and tuning."], ["Brochures", "Product catalogs and capability documents."], ["Application Notes", "Industry-specific feeder design guidance."], ["Maintenance", "Drive tuning, cleaning, and spare parts support."], ["Comparison Tools", "Compare bowl, linear, centrifugal, and flexible feeders."]];
  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])} /><JsonLd data={itemListSchema("Engineering Resources", "/resources", resources.map(([name, description]) => ({ name, href: "/downloads", description })))} /><SimpleHero eyebrow="Resources" title="Engineering resources for feeding automation projects" text="Built for SEO, search, downloads, technical guides, videos, and CMS-driven articles." /><SearchPanel /><section className="py-14"><div className="container-wide grid gap-6 md:grid-cols-3">{resources.map(([title, text]) => <LinkCard key={title} title={title} text={text} href="/downloads" />)}</div></section><VisualBand eyebrow="Resource Center" title="Give engineers the evidence they need before RFQ" text="A complete resource center builds authority with datasheets, videos, selection guides, case studies, support content, and search-ready technical articles." reverse /><CapabilityMatrix title="Resource Types" /></>;
}
