import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, CheckCircle, Clock, FileCheck, Globe2, Headphones, Search, Send, Upload } from "lucide-react";
import { RFQModal } from "@/components/rfq-modal";
import { stats } from "@/lib/site-data";

export function SimpleHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container-wide">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-balance text-5xl font-black tracking-tight text-navy-900">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{text}</p>
        <div className="mt-7 flex flex-wrap gap-3 text-xs font-black uppercase tracking-wide text-navy-900">
          {["Reviewed by Application Engineering", "ISO 9001 Quality Workflow", "Global OEM / Integrator Support"].map((item) => (
            <span key={item} className="rounded-md border border-slate-200 bg-white px-4 py-2 shadow-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConversionBand() {
  return (
    <section className="bg-navy-900 py-16 text-white">
      <div className="container-wide flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-black md:text-4xl">Need a custom feeding solution?</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Send your drawings, part photos, feed rate, and machine interface requirements. Our engineers will recommend the right feeder architecture.
          </p>
        </div>
        <RFQModal />
      </div>
    </section>
  );
}

export function LinkCard({ title, text, href }: { title: string; text: string; href: string }) {
  return (
    <Link href={href} className="industrial-card rounded-lg p-6 transition hover:-translate-y-1 hover:shadow-industrial">
      <h3 className="text-xl font-black text-navy-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{text}</p>
      <span className="mt-5 inline-flex items-center gap-2 font-black text-electric">Explore <ArrowRight className="h-4 w-4" /></span>
    </Link>
  );
}

export function VisualBand({
  eyebrow,
  title,
  text,
  points = ["Part analysis and tooling design", "Drive tuning and controller setup", "Factory acceptance testing", "Documentation for procurement review"],
  reverse = false
}: {
  eyebrow: string;
  title: string;
  text: string;
  points?: string[];
  reverse?: boolean;
}) {
  return (
    <section className="bg-white py-16">
      <div className={`container-wide grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-2">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">{text}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                <span className="text-sm font-bold leading-6 text-navy-900">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-slate-50 p-8 shadow-industrial">
          <div className="absolute inset-0 bg-industrial-grid bg-[length:32px_32px] opacity-60" />
          <Image src="/images/product-machine.png" alt={title} width={820} height={620} className="relative mx-auto object-contain drop-shadow-[0_22px_45px_rgba(8,36,73,.18)]" />
        </div>
      </div>
    </section>
  );
}

export function CapabilityMatrix({ title = "Engineering Capabilities" }: { title?: string }) {
  const items = [
    ["Custom tooling", "Bowl track, escapement, coating, and changeover geometry built around your parts.", BadgeCheck],
    ["Controls integration", "PLC-ready controllers, sensors, counters, reject logic, and machine interface support.", FileCheck],
    ["Global programs", "Documentation and support for USA, Canada, Germany, UK, Australia, Japan, and Korea.", Globe2],
    ["Fast response", "Application review, RFQ support, spare parts, and remote engineering assistance.", Headphones]
  ] as const;
  return (
    <section className="bg-slate-50 py-16">
      <div className="container-wide">
        <h2 className="section-title text-center">{title}</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([itemTitle, text, Icon]) => (
            <div key={itemTitle} className="industrial-card rounded-lg p-6">
              <Icon className="h-9 w-9 text-electric" />
              <h3 className="mt-4 text-lg font-black text-navy-900">{itemTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessFlow() {
  const steps = [
    ["01", "Part Review", "Send drawings, photos, samples, target rate, and machine layout."],
    ["02", "Feeder Concept", "We define bowl size, track tooling, drive system, sensors, and discharge method."],
    ["03", "Build & Test", "Tooling is tuned, feed rate is measured, and FAT media is prepared."],
    ["04", "Install & Support", "Documentation, spare parts, and remote engineering keep the line productive."]
  ];
  return (
    <section className="bg-navy-950 py-16 text-white">
      <div className="container-wide">
        <p className="eyebrow text-blue-200">Project Workflow</p>
        <h2 className="mt-2 text-4xl font-black tracking-tight">From sample parts to production-ready feeding</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <div key={number} className="rounded-lg border border-white/15 bg-white/[0.04] p-6">
              <p className="font-mono text-4xl font-black text-blue-300">{number}</p>
              <h3 className="mt-4 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MetricsBand() {
  return (
    <section className="border-y border-slate-200 bg-white py-9">
      <div className="container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map(([value, label]) => (
          <div key={label} className="rounded-lg bg-slate-50 p-5 text-center">
            <p className="text-3xl font-black text-navy-900">{value}</p>
            <p className="mt-1 text-xs font-black uppercase tracking-wide text-slate-600">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SearchPanel({ placeholder = "Search products, industries, datasheets, or applications..." }: { placeholder?: string }) {
  return (
    <section className="bg-white py-10">
      <div className="container-wide rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm">
        <label className="flex items-center gap-3 rounded-md bg-white px-4 py-4">
          <Search className="h-5 w-5 text-electric" />
          <input className="w-full bg-transparent font-semibold outline-none" placeholder={placeholder} />
          <button className="rounded-md bg-navy-900 px-5 py-2 text-sm font-black uppercase text-white">Search</button>
        </label>
      </div>
    </section>
  );
}

export function InlineRFQForm() {
  const fields = ["Name", "Company", "Email", "WhatsApp"];
  return (
    <section className="bg-slate-50 py-16">
      <div className="container-wide grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="eyebrow">RFQ Details</p>
          <h2 className="section-title mt-2">Tell us what you need to feed, orient, inspect, or transfer</h2>
          <div className="mt-7 grid gap-4 text-sm text-slate-700">
            <span className="flex gap-3"><Clock className="h-5 w-5 text-electric" /> Typical engineering reply within 24 hours.</span>
            <span className="flex gap-3"><FileCheck className="h-5 w-5 text-electric" /> Drawings, part photos, and samples are welcome.</span>
            <span className="flex gap-3"><Globe2 className="h-5 w-5 text-electric" /> Support for North America, Europe, and Asia projects.</span>
          </div>
        </div>
        <form className="industrial-card grid gap-4 rounded-lg p-6 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field} className="text-sm font-black text-navy-900">
              {field}
              <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 outline-none focus:border-electric" placeholder={field} />
            </label>
          ))}
          <label className="text-sm font-black text-navy-900 md:col-span-2">
            Project Requirement
            <textarea className="mt-2 min-h-32 w-full rounded-md border border-slate-300 px-3 py-3 outline-none focus:border-electric" placeholder="Part geometry, required feed rate, orientation, machine interface, and delivery target." />
          </label>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm font-black text-navy-900">
            <Upload className="h-5 w-5 text-electric" /> Upload Drawing
            <input type="file" className="sr-only" />
          </label>
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md bg-electric px-5 py-4 text-sm font-black uppercase text-white">
            Submit RFQ <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
