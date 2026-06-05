import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SimpleHero } from "@/components/simple-page";
import { company } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms of use for VibraFlow website content, downloads, RFQ forms, and engineering resources.",
  path: "/terms",
  keywords: ["VibraFlow terms", "industrial website terms", "RFQ terms"]
});

const terms = [
  ["Website content", "Product descriptions, specifications, downloads, and resource content are provided for preliminary engineering and procurement review."],
  ["No final specification without review", "Feeder performance, capacity, materials, controls, compliance, and delivery scope must be confirmed through project-specific engineering review."],
  ["Downloads", "Public PDF downloads are website briefs. Official certificates, FAT records, drawings, and project-specific files may require RFQ qualification or supplier approval review."],
  ["RFQ submissions", "Submitting an RFQ does not create a purchase order or binding quote. A formal quotation must be issued after application review."],
  ["Intellectual property", "Website content, branding, layouts, and technical summaries are owned by VibraFlow or its licensors and may not be copied as a competing catalog."],
  ["Contact", `For website terms or commercial questions, contact ${company.email}.`]
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms of Use", path: "/terms" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Terms of Use", url: `${siteUrl}/terms` }} />
      <SimpleHero eyebrow="Terms" title="Terms of Use" text="Terms for using VibraFlow website content, downloads, RFQ forms, and engineering resources." />
      <section className="bg-white py-16">
        <div className="container-wide max-w-4xl">
          <div className="grid gap-5">
            {terms.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-xl font-black text-navy-900">{title}</h2>
                <p className="mt-3 leading-7 text-slate-700">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
