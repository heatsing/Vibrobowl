import type { Metadata } from "next";
import { faqs } from "@/lib/site-data";
import { CapabilityMatrix, ProcessFlow, SearchPanel, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { PageSpecificBrief } from "@/components/page-specific";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description: "Frequently asked questions about vibratory bowl feeders, feeder selection, customization, delivery, and overseas support.",
  path: "/faq",
  keywords: ["vibratory bowl feeder FAQ", "how to select a bowl feeder", "custom feeder delivery time"]
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])} />
      <SimpleHero eyebrow="FAQ" title="Questions automation teams ask before buying feeders" text="Clear answers for engineering, procurement, project management, and factory ownership teams." />
      <PageSpecificBrief eyebrow="FAQ Intent" title="This FAQ answers buying blockers before they become sales delays" intro="The FAQ page is organized around the practical questions that usually slow down feeder selection: what the machine does, how to choose one, what parts can be fed, and what customization requires." audience="First-time buyers, procurement teams, project managers, and engineers validating whether vibratory feeding fits their application." painPoints={[{ title: "Unclear feeder basics", text: "Some buyers know they need automation but do not yet know what a bowl feeder can and cannot do." }, { title: "Customization uncertainty", text: "Delivery time, overseas support, material handling, and tooling scope often need direct answers." }]} proof={[{ title: "SEO FAQ schema", text: "Questions are marked up for search engines and written for user clarity." }, { title: "RFQ conversion path", text: "Answers lead naturally toward sending drawings and part details." }]} nextStep="Read the relevant answer, then use RFQ if your question depends on part geometry or production rate." />
      <SearchPanel placeholder="Search feeder selection, customization, delivery, support..." />
      <section className="py-14"><div className="container-wide max-w-4xl space-y-3">{faqs.map(([q, a]) => <details key={q} className="rounded-lg border border-slate-200 p-5"><summary className="cursor-pointer font-black text-navy-900">{q}</summary><p className="mt-3 leading-7 text-slate-700">{a}</p></details>)}</div></section>
      <VisualBand eyebrow="Buyer Guidance" title="Use the FAQ as a conversion path, not just support content" text="The FAQ page supports SEO long-tail queries and helps buyers move from early research into part review, feeder selection, quote building, and engineering discussion." />
      <CapabilityMatrix title="Support Topics" />
      <ProcessFlow />
    </>
  );
}
