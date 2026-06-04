import type { Metadata } from "next";
import { CapabilityMatrix, SearchPanel, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";
import { PageSpecificBrief } from "@/components/page-specific";
import { DownloadCenter } from "@/components/download-center";
import { downloadHref, downloadResources } from "@/lib/downloads";

export const metadata: Metadata = pageMetadata({
  title: "Downloads Center",
  description: "Download technical datasheets, catalogs, brochures, certificates, and factory audit resources.",
  path: "/downloads",
  keywords: ["feeder datasheet", "vibratory bowl feeder catalog", "ISO 9001 certificate", "CE declaration"]
});

export default function DownloadsPage() {
  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Downloads", path: "/downloads" }])} /><JsonLd data={itemListSchema("Technical Downloads", "/downloads", downloadResources.map((resource) => ({ name: resource.title, href: downloadHref(resource), description: resource.summary })))} /><SimpleHero eyebrow="Downloads" title="Technical datasheets, catalogs, and certificates" text="Download feeder datasheets, selection guides, quality briefs, and procurement-ready files for engineering review." /><PageSpecificBrief eyebrow="Document Center" title="Downloads organized for engineering and supplier approval" intro="This page is for buyers who need files, not marketing copy. Every item is now a real downloadable PDF brief that can support internal review, quotation, or supplier qualification." audience="Procurement managers, supplier quality teams, automation engineers, and project managers building an approval package." painPoints={[{ title: "Missing approval files", text: "Projects stall when datasheets, certificates, audit profiles, or maintenance documents are not easy to collect." }, { title: "Wrong document timing", text: "Teams often need different files before RFQ, before PO, and before installation." }]} proof={[{ title: "Datasheet-first list", text: "Product datasheets are shown before general company documents and each one has a working download link." }, { title: "Qualification documents", text: "Certificates, factory audit profiles, selection guides, and maintenance checklists are grouped in one place." }]} nextStep="Download the product datasheet and qualification files needed for internal approval, then submit the RFQ with part details." /><SearchPanel placeholder="Search datasheets, certificates, catalogs..." /><DownloadCenter /><VisualBand eyebrow="Document Control" title="Technical documents that shorten procurement and engineering review" text="Datasheets, certificates, factory documents, operation notes, and selection guides help buyers evaluate feeder performance, compliance, and integration readiness." /><CapabilityMatrix title="Download Center Features" /></>;
}
