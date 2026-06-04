import type { Metadata } from "next";
import { RFQModal } from "@/components/rfq-modal";
import { CapabilityMatrix, InlineRFQForm, ProcessFlow, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Request a Quote",
  description: "Submit an RFQ for vibratory bowl feeders, custom feeding systems, hoppers, and vision inspection systems.",
  path: "/rfq",
  keywords: ["vibratory feeder RFQ", "request bowl feeder quote", "custom feeding system quotation"]
});

export default function RFQPage() {
  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Request a Quote", path: "/rfq" }])} /><JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Request a Quote", description: "RFQ page for automated feeding systems.", potentialAction: { "@type": "QuoteAction", target: "/rfq", name: "Submit RFQ" } }} /><SimpleHero eyebrow="RFQ" title="Get expert advice for your feeding application" text="Open the quote builder and submit part details, drawings, target feed rate, and integration requirements." /><InlineRFQForm /><section className="py-14"><div className="container-wide rounded-lg bg-navy-900 p-10 text-white"><h2 className="text-3xl font-black">Prefer the quick RFQ modal?</h2><p className="mt-3 text-slate-300">Use the compact quote builder for fast project capture and engineering follow-up.</p><div className="mt-6"><RFQModal /></div></div></section><VisualBand eyebrow="What to Send" title="The better the part information, the faster the feeder concept" text="Useful RFQ inputs include drawings, part material, surface finish, dimensions, target feed rate, required orientation, downstream machine, electrical requirements, and target delivery date." /><CapabilityMatrix title="RFQ Review Checklist" /><ProcessFlow /></>;
}
