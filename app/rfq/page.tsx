import type { Metadata } from "next";
import { RFQModal } from "@/components/rfq-modal";
import { CapabilityMatrix, InlineRFQForm, ProcessFlow, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { PageSpecificBrief } from "@/components/page-specific";
import { downloadResources } from "@/lib/downloads";
import { products } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Request a Quote",
  description: "Submit an RFQ for vibratory bowl feeders, custom feeding systems, hoppers, and vision inspection systems.",
  path: "/rfq",
  keywords: ["vibratory feeder RFQ", "request bowl feeder quote", "custom feeding system quotation"]
});

type Props = { searchParams?: Promise<{ products?: string; document?: string }> };

export default async function RFQPage({ searchParams }: Props) {
  const params = await searchParams;
  const selectedSlugs = (params?.products || "").split(",").map((slug) => slug.trim()).filter(Boolean);
  const selectedProducts = products.filter((product) => selectedSlugs.includes(product.slug));
  const documentSlug = params?.document;
  const documentResource = downloadResources.find((resource) => resource.slug === documentSlug);
  const hasContext = selectedProducts.length > 0 || Boolean(documentResource || documentSlug);
  const initialProductType = selectedProducts.length === 1 ? selectedProducts[0].category : selectedProducts.length > 1 ? "Custom Feeding System" : "Vibratory Bowl Feeder";
  const initialRequirement = [
    selectedProducts.length ? `Selected product shortlist: ${selectedProducts.map((product) => product.name).join(", ")}.` : "",
    documentResource ? `Related document: ${documentResource.title}.` : documentSlug ? `Related document request: ${documentSlug}.` : "",
    "Please review the feeder architecture, required project inputs, and quotation scope for this application."
  ].filter(Boolean).join("\n");
  const source = hasContext ? `RFQ page with context: ${[selectedProducts.map((product) => product.slug).join(","), documentSlug].filter(Boolean).join(" | ")}` : "Inline RFQ form";

  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Request a Quote", path: "/rfq" }])} /><JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Request a Quote", description: "RFQ page for automated feeding systems.", potentialAction: { "@type": "QuoteAction", target: "/rfq", name: "Submit RFQ" } }} /><SimpleHero eyebrow="RFQ" title="Get expert advice for your feeding application" text="Open the quote builder and submit part details, drawings, target feed rate, and integration requirements." />{hasContext ? <section className="bg-white py-8"><div className="container-wide"><div className="rounded-lg border border-blue-200 bg-blue-50 p-6"><p className="eyebrow">RFQ Context Captured</p><h2 className="mt-2 text-2xl font-black text-navy-900">We carried your selection into this quote request</h2><p className="mt-3 leading-7 text-slate-700">{selectedProducts.length ? `Product shortlist: ${selectedProducts.map((product) => product.name).join(", ")}.` : ""} {documentResource ? `Document reference: ${documentResource.title}.` : documentSlug && !documentResource ? `Document reference: ${documentSlug}.` : ""}</p><p className="mt-2 text-sm font-bold text-navy-900">The form below is prefilled with this context so engineering can respond with fewer clarification emails.</p></div></div></section> : null}<PageSpecificBrief eyebrow="Quote Preparation" title="This RFQ page is designed to reduce back-and-forth before engineering review" intro="A useful feeder quote depends on part behavior, target rate, discharge position, controls expectations, and documentation needs. This page asks for those inputs directly." audience="Engineers and project managers who are ready to move from research to technical review and need a realistic scope, not a generic price." painPoints={[{ title: "Incomplete part data", text: "Without size, material, orientation, and feed rate, the first response becomes a clarification email instead of a useful concept." }, { title: "Hidden integration requirements", text: "Voltage, machine interface, sensor logic, and discharge location can change the feeder architecture." }]} proof={[{ title: "RFQ-specific fields", text: "The form asks for target feed rate, product type, requirements, and drawings." }, { title: "Clear review path", text: "The page explains what engineering uses to form the recommendation." }]} nextStep="Submit the form with drawings or part photos. If the application is not ready, use the quick modal and start the conversation." /><InlineRFQForm initialProductType={initialProductType} initialRequirement={initialRequirement} source={source} /><section className="py-14"><div className="container-wide rounded-lg bg-navy-900 p-10 text-white"><h2 className="text-3xl font-black">Prefer the quick RFQ modal?</h2><p className="mt-3 text-slate-300">Use the compact quote builder for fast project capture and engineering follow-up.</p><div className="mt-6"><RFQModal /></div></div></section><VisualBand eyebrow="What to Send" title="The better the part information, the faster the feeder concept" text="Useful RFQ inputs include drawings, part material, surface finish, dimensions, target feed rate, required orientation, downstream machine, electrical requirements, and target delivery date." /><CapabilityMatrix title="RFQ Review Checklist" /><ProcessFlow /></>;
}
