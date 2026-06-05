import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SimpleHero } from "@/components/simple-page";
import { company } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for VibraFlow RFQ submissions, engineering inquiries, downloads, and website contact forms.",
  path: "/privacy",
  keywords: ["VibraFlow privacy policy", "RFQ data privacy", "industrial website privacy"]
});

const sections = [
  ["Information we collect", "We collect business contact details, company information, RFQ requirements, uploaded file names, and website inquiry details when visitors submit forms or request engineering support."],
  ["How we use information", "Information is used to review feeder applications, respond to RFQs, prepare quotations, share technical documents, and support supplier qualification or project follow-up."],
  ["Engineering files", "Drawings, part photos, CAD files, and project notes are treated as confidential application inputs and are used only for feeder review, quotation, and support."],
  ["Data sharing", "We do not sell inquiry data. Information may be shared with internal engineering, sales, quality, or support personnel required to respond to the project."],
  ["Retention", "RFQ and project information may be retained for quotation history, technical support, spare parts, and future project reference unless deletion is requested."],
  ["Contact", `For privacy requests or data questions, contact ${company.email}.`]
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Privacy Policy", url: `${siteUrl}/privacy` }} />
      <SimpleHero eyebrow="Privacy" title="Privacy Policy" text="How RFQ details, engineering files, and business contact information are handled when visitors use the VibraFlow website." />
      <section className="bg-white py-16">
        <div className="container-wide max-w-4xl">
          <div className="grid gap-5">
            {sections.map(([title, text]) => (
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
