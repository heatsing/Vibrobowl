import type { Metadata } from "next";
import { faqs } from "@/lib/site-data";
import { CapabilityMatrix, ProcessFlow, SearchPanel, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

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
      <SearchPanel placeholder="Search feeder selection, customization, delivery, support..." />
      <section className="py-14"><div className="container-wide max-w-4xl space-y-3">{faqs.map(([q, a]) => <details key={q} className="rounded-lg border border-slate-200 p-5"><summary className="cursor-pointer font-black text-navy-900">{q}</summary><p className="mt-3 leading-7 text-slate-700">{a}</p></details>)}</div></section>
      <VisualBand eyebrow="Buyer Guidance" title="Use the FAQ as a conversion path, not just support content" text="The FAQ page supports SEO long-tail queries and helps buyers move from early research into part review, feeder selection, quote building, and engineering discussion." />
      <CapabilityMatrix title="Support Topics" />
      <ProcessFlow />
    </>
  );
}
