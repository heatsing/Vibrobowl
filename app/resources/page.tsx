import type { Metadata } from "next";
import { CapabilityMatrix, LinkCard, SearchPanel, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";
import { PageSpecificBrief } from "@/components/page-specific";

export const metadata: Metadata = pageMetadata({
  title: "Resources Center",
  description: "Technical resources, videos, brochures, feeder selection guides, case studies, and support materials.",
  path: "/resources",
  keywords: ["feeder datasheets", "bowl feeder brochure", "automation feeder resources"]
});

export default function ResourcesPage() {
  const resources = [["Technical Guides", "Download feeder selection and integration notes."], ["Videos", "Review factory demos, feeder operation, and tuning content."], ["Brochures", "Download product catalogs and capability documents."], ["Application Notes", "Use industry-specific feeder design guidance before RFQ."], ["Maintenance", "Download drive tuning, cleaning, and spare parts checklists."], ["Comparison Tools", "Compare bowl, linear, centrifugal, and flexible feeders."]];
  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])} /><JsonLd data={itemListSchema("Engineering Resources", "/resources", resources.map(([name, description]) => ({ name, href: "/downloads", description })))} /><SimpleHero eyebrow="Resources" title="Engineering resources for feeding automation projects" text="Built for SEO, search, downloads, technical guides, videos, and CMS-driven articles." /><PageSpecificBrief eyebrow="Resource Strategy" title="A library organized around engineering decisions" intro="Resources should help a buyer decide what information to collect, what feeder type to compare, and what evidence procurement will need." audience="Early-stage researchers, automation engineers, procurement teams, and integrators preparing for RFQ or supplier qualification." painPoints={[{ title: "Scattered information", text: "Users often need datasheets, videos, guides, and certificates in one path before contacting sales." }, { title: "Unclear next action", text: "Technical content should lead toward a useful RFQ, not just generic reading." }]} proof={[{ title: "Grouped resource types", text: "Guides, videos, brochures, application notes, maintenance, and comparison content are separated by user intent." }, { title: "Search-first layout", text: "The page starts with search so buyers can jump directly to the evidence they need." }]} nextStep="Search by application or feeder type, download the relevant documents, then submit the RFQ with that context." /><SearchPanel /><section className="py-14"><div className="container-wide grid gap-6 md:grid-cols-3">{resources.map(([title, text]) => <LinkCard key={title} title={title} text={text} href="/downloads" />)}</div></section><VisualBand eyebrow="Resource Center" title="Give engineers the evidence they need before RFQ" text="A complete resource center builds authority with datasheets, videos, selection guides, case studies, support content, and search-ready technical articles." reverse /><CapabilityMatrix title="Resource Types" /></>;
}
