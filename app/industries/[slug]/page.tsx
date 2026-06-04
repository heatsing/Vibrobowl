import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { ProductGrid } from "@/components/cards";
import { CapabilityMatrix, MetricsBand, ProcessFlow, SimpleHero, VisualBand } from "@/components/simple-page";
import { industries } from "@/lib/site-data";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, industrySchema, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  return industry ? pageMetadata({
    title: `${industry.name} Feeding Systems`,
    description: `${industry.detail} Custom vibratory bowl feeders, linear feeders, hoppers, and vision inspection systems for ${industry.name.toLowerCase()} automation.`,
    path: `/industries/${industry.slug}`,
    keywords: [`${industry.name} feeder`, `${industry.name} automation`, `${industry.name} part feeding system`]
  }) : {};
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  const Icon = industry.icon;
  return (
    <>
      <JsonLd data={industrySchema(industry)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: industry.name, path: `/industries/${industry.slug}` }])} />
      <SimpleHero eyebrow="Industry Solution" title={`${industry.name} Automated Feeding Systems`} text={industry.detail} />
      <section className="py-14">
        <div className="container-wide grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div className="rounded-lg bg-navy-900 p-8 text-white"><Icon className="h-16 w-16 text-blue-300" /><h2 className="mt-5 text-3xl font-black">Application Requirements</h2></div>
          <div className="grid gap-4 md:grid-cols-2">
            {["Stable part orientation", "Clean machine integration", "Validated quality documentation", "Fast engineering support"].map((item) => <div key={item} className="industrial-card rounded-lg p-5"><CheckCircle className="h-6 w-6 text-electric" /><p className="mt-3 font-black text-navy-900">{item}</p></div>)}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-14"><div className="container-wide"><h2 className="section-title text-center">Recommended Products</h2><div className="mt-8"><ProductGrid limit={3} /></div></div></section>
      <VisualBand eyebrow="Line Integration" title={`${industry.name} projects need stable feeding before automation can scale`} text="Our engineering team reviews the part, line layout, throughput target, and inspection requirement to build a reliable feeding concept for production use." reverse />
      <MetricsBand />
      <CapabilityMatrix title={`${industry.name} Engineering Support`} />
      <ProcessFlow />
    </>
  );
}
