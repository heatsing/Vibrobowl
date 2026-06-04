import type { Metadata } from "next";
import { CapabilityMatrix, LinkCard, SearchPanel, SimpleHero, VisualBand } from "@/components/simple-page";
import { JsonLd } from "@/components/json-ld";
import { articleSchema, breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";
import { PageSpecificBrief } from "@/components/page-specific";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description: "Technical articles about vibratory bowl feeders, feeder selection, automation integration, and part orientation.",
  path: "/blog",
  keywords: ["feeder selection guide", "bowl feeder integration", "part orientation guide"]
});

const posts = ["How to Select a Vibratory Bowl Feeder", "Bowl Feeder vs Flexible Feeder", "Designing for Reliable Part Orientation"];

export default function BlogPage() {
  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} /><JsonLd data={itemListSchema("Engineering Articles", "/blog", posts.map((post) => ({ name: post, href: "/blog", description: "Technical guidance for automated feeding systems." })))} /><JsonLd data={articleSchema({ title: "Engineering Articles for Automated Feeding Systems", description: "Technical articles about feeder selection, bowl tooling, controls, inspection, and maintenance.", path: "/blog" })} /><SimpleHero eyebrow="Blog" title="Engineering articles for automated feeding systems" text="SEO-ready CMS structure for application guides, design notes, and factory automation insights." /><PageSpecificBrief eyebrow="Editorial Purpose" title="The blog is built for technical search intent, not company news" intro="Each article topic is chosen to answer a real engineering question: how to select a feeder, when to use flexible feeding, or how to design for reliable orientation." audience="Engineers and machine builders searching for decision support before they contact suppliers." painPoints={[{ title: "Generic articles", text: "B2B buyers leave quickly when blog posts do not answer practical equipment decisions." }, { title: "No path to action", text: "Technical content should move readers toward comparison, downloads, or RFQ with clearer requirements." }]} proof={[{ title: "Topic cluster structure", text: "Selection, comparison, orientation, tooling, controls, inspection, and maintenance topics can expand into CMS articles." }, { title: "Resource connection", text: "Article cards link toward deeper resources instead of isolated posts." }]} nextStep="Use the blog to answer early technical questions, then move to Resources or Products for documents and RFQ preparation." /><SearchPanel placeholder="Search feeder selection, tooling, controls, inspection..." /><section className="py-14"><div className="container-wide grid gap-6 md:grid-cols-3">{posts.map((post) => <LinkCard key={post} title={post} text="Practical guidance for automation engineers and machine builders." href="/resources" />)}</div></section><VisualBand eyebrow="Technical Content" title="Blog pages are structured for SEO topic clusters" text="Feeder selection, part orientation, bowl tooling, flexible feeding, vision inspection, and maintenance content can be managed from CMS entries later." /><CapabilityMatrix title="Content Categories" /></>;
}
