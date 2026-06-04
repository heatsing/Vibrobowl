import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CirclePlay, Globe2, Headphones, ShieldCheck, Star, Trophy } from "lucide-react";
import { FadeUp } from "@/components/animated";
import { ProductGrid } from "@/components/cards";
import { JsonLd } from "@/components/json-ld";
import { RFQModal } from "@/components/rfq-modal";
import { advantages, company, stats, trustLogos } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";
import { itemListSchema, pageMetadata } from "@/lib/seo";
import { PageSpecificBrief } from "@/components/page-specific";

export const metadata: Metadata = pageMetadata({
  title: "Vibratory Bowl Feeders & Automated Feeding Systems",
  description: "ISO 9001 vibratory bowl feeder manufacturer delivering bowl feeders, linear feeders, hopper systems, custom feeding systems, and vision inspection for global industrial automation.",
  path: "/",
  keywords: ["vibratory bowl feeder manufacturer", "automated feeding systems", "custom feeding solution", "industrial automation supplier"]
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "VibraFlow",
          url: siteUrl,
          potentialAction: { "@type": "SearchAction", target: `${siteUrl}/resources?q={search_term_string}`, "query-input": "required name=search_term_string" }
        }}
      />
      <JsonLd
        data={itemListSchema("VibraFlow Core Product Categories", "/", [
          { name: "Vibratory Bowl Feeders", href: "/products/standard-bowl-feeders", description: "Precision orientation and feeding for small parts." },
          { name: "Linear Feeders", href: "/products/linear-feeders", description: "Controlled transfer from feeder to automated machine." },
          { name: "Centrifugal Feeders", href: "/products/centrifugal-feeders", description: "High-speed rotary feeding and singulation." },
          { name: "Flexible Feeders", href: "/products/flexible-feeders", description: "Vision-guided flexible feeding for mixed parts." }
        ])}
      />
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(0,102,255,.35),transparent_35%),linear-gradient(90deg,rgba(6,26,51,.98),rgba(6,26,51,.76))]" />
        <div className="container-wide relative grid min-h-[630px] items-center gap-12 py-16 lg:grid-cols-[.9fr_1.1fr]">
          <FadeUp>
            <p className="eyebrow text-blue-200">Precision. Reliability. Performance.</p>
            <h1 className="mt-4 text-balance text-5xl font-black uppercase tracking-tight md:text-7xl">
              Vibratory Bowl <span className="block font-semibold">Feeding Solutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">Engineered for consistent part handling and maximum uptime across the world's most demanding automated production lines.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <RFQModal />
              <Link href="/products" className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-4 text-sm font-black uppercase text-white hover:bg-white/10">
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/resources" className="focus-ring inline-flex items-center gap-3 rounded-md border border-white/40 px-6 py-4 text-sm font-black uppercase text-white hover:bg-white/10">
                Watch Video <CirclePlay className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[["Proven Performance", "Thousands of installations worldwide", Trophy], ["Engineered Reliability", "Built for 24/7 operation", ShieldCheck], ["Global Support", "Local service. Fast response.", Headphones]].map(([title, text, Icon]) => (
                <div key={title as string} className="flex gap-3">
                  <Icon className="h-8 w-8 text-blue-300" />
                  <div><p className="font-black">{title as string}</p><p className="text-sm text-slate-300">{text as string}</p></div>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="relative">
              <Image src="/images/product-machine.png" alt="Vibratory bowl feeder system" width={900} height={700} priority className="drop-shadow-[0_36px_80px_rgba(0,0,0,.45)]" />
              <div className="absolute bottom-6 right-2 hidden rounded-full border border-amber-300 bg-navy-900/90 p-6 text-center shadow-2xl md:block">
                <p className="text-4xl font-black">20+</p>
                <p className="text-xs font-black uppercase tracking-widest text-amber-200">Years of Excellence</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-7">
        <div className="container-wide">
          <p className="text-center text-sm font-black uppercase tracking-[0.2em] text-navy-900">Trusted by industry leaders worldwide</p>
          <div className="mt-5 grid grid-cols-2 gap-4 text-center text-xl font-black text-navy-800 md:grid-cols-4 lg:grid-cols-8">
            {trustLogos.map((logo) => <span key={logo} className="border-r border-slate-200 last:border-r-0">{logo}</span>)}
          </div>
        </div>
      </section>

      <PageSpecificBrief
        eyebrow="Homepage Purpose"
        title="The homepage directs each buyer to the right proof path"
        intro="The homepage is designed as a routing layer for industrial buyers: products for engineers, industries for application fit, resources for research, and RFQ for active projects."
        audience="First-time visitors, automation engineers, factory owners, procurement teams, OEMs, and system integrators evaluating whether VibraFlow is worth a technical conversation."
        painPoints={[
          { title: "Too many feeder choices", text: "Buyers may know the part problem but not whether a bowl, linear, centrifugal, flexible, or hopper-based system is right." },
          { title: "Trust before inquiry", text: "Industrial buyers need proof of engineering capability before they share drawings or request a quote." }
        ]}
        proof={[
          { title: "Trust logos and metrics", text: "The page presents global installations, country coverage, ISO quality, support, and customer proof early." },
          { title: "Clear route map", text: "Products, industries, case studies, downloads, and RFQ all appear as distinct decision paths." }
        ]}
        nextStep="Start with Products if you know the feeder type, Industries if you know the application, or Request a Quote if you already have part details."
      />

      <section className="py-16">
        <div className="container-wide">
          <div className="text-center">
            <p className="eyebrow">Product Systems</p>
            <h2 className="section-title mt-2">Our Vibratory Bowl Solutions</h2>
          </div>
          <div className="mt-10"><ProductGrid limit={6} /></div>
        </div>
      </section>

      <section className="bg-navy-950 py-10 text-white">
        <div className="container-wide grid gap-6 md:grid-cols-5">
          {stats.map(([value, label]) => (
            <div key={label} className="flex items-center gap-4 border-white/20 md:border-r md:last:border-r-0">
              <Globe2 className="h-10 w-10 text-blue-300" />
              <div><p className="text-3xl font-black">{value}</p><p className="text-xs font-black uppercase tracking-wide text-slate-300">{label}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["Bosch Germany", "Denso Japan", "TE Connectivity USA"].map((name) => (
              <article key={name} className="industrial-card rounded-lg p-7">
                <div className="flex text-amber-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
                <p className="mt-5 leading-7 text-slate-700">Outstanding quality and reliability. The feeder system has been running continuously with minimal maintenance.</p>
                <p className="mt-5 font-black text-navy-900">{name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[1fr_1.2fr_.5fr]">
          <Image src="/images/product-machine.png" alt="VibraFlow factory automation feeder" width={620} height={460} className="rounded-lg bg-white object-contain shadow-industrial" />
          <div>
            <p className="eyebrow">About {company.name}</p>
            <h2 className="section-title mt-2">Advanced engineering for precision manufacturing</h2>
            <p className="mt-5 leading-7 text-slate-700">We design and manufacture automated feeding systems that improve productivity, reduce measurable downtime, and integrate cleanly into robotic assembly, packaging, inspection, and OEM equipment.</p>
            <div className="mt-6 grid gap-4">
              {advantages.slice(0, 3).map((item) => <div key={item.title} className="flex gap-3"><item.icon className="h-6 w-6 text-electric" /><div><p className="font-black text-navy-900">{item.title}</p><p className="text-sm text-slate-600">{item.text}</p></div></div>)}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-industrial">
            <ShieldCheck className="mx-auto h-14 w-14 text-electric" />
            <p className="mt-4 text-3xl font-black text-navy-900">ISO 9001</p>
            <p className="mt-2 text-sm text-slate-600">Certified quality management system</p>
          </div>
        </div>
      </section>

    </>
  );
}
