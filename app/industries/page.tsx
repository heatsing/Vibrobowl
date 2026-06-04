import type { Metadata } from "next";
import { IndustryGrid } from "@/components/cards";
import { CapabilityMatrix, MetricsBand, ProcessFlow, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";
import { industries } from "@/lib/site-data";
import { PageSpecificBrief } from "@/components/page-specific";

export const metadata: Metadata = pageMetadata({
  title: "Industries",
  description: "Vibratory feeding systems for automotive, electronics, medical devices, pharmaceutical, packaging, aerospace, and manufacturing.",
  path: "/industries",
  keywords: ["automotive feeder system", "electronics part feeder", "medical device feeder", "pharmaceutical packaging feeder"]
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <JsonLd data={itemListSchema("Industries Served", "/industries", industries.map((i) => ({ name: i.name, href: `/industries/${i.slug}`, description: i.detail })))} />
      <SimpleHero eyebrow="Industries" title="Feeding automation engineered for demanding production environments" text="Each industry has different validation, cleanliness, throughput, and part-handling requirements. VibraFlow designs the feeder architecture around your application, not a catalog shortcut." />
      <PageSpecificBrief
        eyebrow="Industry Matching"
        title="Each industry page starts from the production environment"
        intro="The same feeder can behave differently in automotive, electronics, medical, pharmaceutical, food packaging, or aerospace lines. This page directs users to the right application context first."
        audience="Project teams that already know their industry constraints and need a feeding partner who understands validation, uptime, cleanliness, and integration pressure."
        painPoints={[
          { title: "Industry-specific risk", text: "Medical and pharma projects need documentation discipline; automotive and electronics lines often prioritize speed and uptime." },
          { title: "Part families vary", text: "Clips, caps, contacts, vials, fasteners, and packaging components each need different tooling assumptions." }
        ]}
        proof={[
          { title: "Eight industry paths", text: "Each industry card links to a dedicated application page with relevant examples." },
          { title: "Engineering review flow", text: "The page explains why industry context changes the feeder recommendation." }
        ]}
        nextStep="Choose the closest industry page first, then review recommended products and send part information from that context."
      />
      <section className="py-14"><div className="container-wide"><IndustryGrid /></div></section>
      <VisualBand eyebrow="Application Engineering" title="Built around your parts, line speed, and compliance needs" text="Automotive clips, electronic contacts, sterile medical caps, packaging closures, aerospace hardware, and consumer goods all need different tooling behavior. We evaluate geometry, friction, nesting risk, orientation, and downstream handoff before designing the system." />
      <MetricsBand />
      <CapabilityMatrix title="Industry Support Capabilities" />
      <ProcessFlow />
    </>
  );
}
