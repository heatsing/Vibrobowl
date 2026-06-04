import type { Metadata } from "next";
import { cases } from "@/lib/site-data";
import { JsonLd } from "@/components/json-ld";
import { PageSpecificBrief } from "@/components/page-specific";
import { MetricsBand, SimpleHero, VisualBand } from "@/components/simple-page";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Customer Success Stories",
  description: "Customer success stories for vibratory bowl feeders, automated feeding systems, hopper integration, and vision inspection projects.",
  path: "/success-stories",
  keywords: ["customer success stories", "feeding automation customer results", "bowl feeder project results"]
});

export default function SuccessStoriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Customer Success Stories", path: "/success-stories" }])} />
      <JsonLd data={itemListSchema("Customer Success Stories", "/success-stories", cases.map((item) => ({ name: item.title, href: "/success-stories", description: item.result })))} />
      <SimpleHero eyebrow="Customer Success" title="How customers use feeding systems to stabilize production" text="These stories focus on what changed for the customer: line stability, downtime reduction, integration clarity, and confidence in automated part handling." />
      <PageSpecificBrief
        eyebrow="Customer View"
        title="Success stories are written from the plant team's perspective"
        intro="Unlike case studies, which focus on technical project structure, this page emphasizes the customer outcome and why it mattered to the production team."
        audience="Factory owners, production managers, project sponsors, and procurement leaders who want proof that the feeder system improves real operations."
        painPoints={[
          { title: "Production disruption", text: "Feeding instability creates downstream stoppages, operator intervention, and uncertainty during ramp-up." },
          { title: "Supplier confidence", text: "Customers need to know the supplier can support the system after delivery, not just during the sale." }
        ]}
        proof={[
          { title: "Operational outcomes", text: "Each story highlights efficiency, downtime, support, or integration improvements." },
          { title: "Global customer context", text: "Stories span Germany, USA, Japan, and multiple industrial sectors." }
        ]}
        nextStep="Review the outcome closest to your production challenge, then send project details for an application-specific recommendation."
      />
      <section className="py-14">
        <div className="container-wide grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="industrial-card rounded-lg p-6">
              <p className="eyebrow">{item.country}</p>
              <h2 className="mt-3 text-2xl font-black text-navy-900">{item.title}</h2>
              <p className="mt-2 font-bold text-slate-500">{item.industry}</p>
              <p className="mt-5 leading-7 text-slate-700">{item.result}</p>
            </article>
          ))}
        </div>
      </section>
      <MetricsBand />
      <VisualBand eyebrow="Customer Outcome" title="The goal is not just feeding parts, but protecting production flow" text="A successful feeding system reduces operator intervention, improves consistency, supports downstream automation, and gives project teams confidence during launch." reverse />
    </>
  );
}
