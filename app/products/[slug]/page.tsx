import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Download, FileText, PlayCircle } from "lucide-react";
import { IndustryGrid, ProductGrid } from "@/components/cards";
import { RFQModal } from "@/components/rfq-modal";
import { JsonLd } from "@/components/json-ld";
import { advantages, cases, certifications, faqs, products } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";
import { breadcrumbSchema, pageMetadata, productSchema } from "@/lib/seo";
import { PageSpecificBrief } from "@/components/page-specific";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return pageMetadata({
    title: product.name,
    description: `${product.summary} ISO 9001 custom feeder manufacturing, technical datasheets, RFQ support, and global engineering service.`,
    path: `/products/${product.slug}`,
    image: product.image,
    keywords: [product.category, product.name, "custom feeder tooling", "automated production line feeder"]
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const specs = [
    ["VF-250", "250 mm", "110/220V", "50/60Hz", "40-120 ppm", "SUS304", "45 kg", "Small fasteners"],
    ["VF-400", "400 mm", "110/220V", "50/60Hz", "80-260 ppm", "SUS304/Coated", "82 kg", "Automotive clips"],
    ["VF-650", "650 mm", "220V", "50/60Hz", "150-520 ppm", "Tool steel", "138 kg", "Connectors"],
    ["VF-900", "900 mm", "220/380V", "50/60Hz", "Custom", "SUS316", "260 kg", "Packaging parts"]
  ];
  const authorityChecks = [
    ["Tooling Design Review", "Track profile, bowl coating, orienting features, return paths, and jam recovery are checked against part samples or drawings."],
    ["Controls & Sensor Review", "Controller, sensors, reject logic, counting, and machine signals are defined before final quotation."],
    ["Factory Acceptance Evidence", "Feed rate checks, operating video, tuning notes, and FAT records can be prepared for project approval."],
    ["Lifecycle Support", "Spare parts, maintenance access, replacement tooling, and remote engineering support are included in the project scope."]
  ];

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.name, path: `/products/${product.slug}` }])} />

      <section className="bg-slate-50 bg-industrial-grid bg-[length:34px_34px] py-16">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <nav className="text-sm font-semibold text-slate-600">Home &nbsp;›&nbsp; Products &nbsp;›&nbsp; {product.name}</nav>
            <h1 className="mt-7 text-balance text-5xl font-black uppercase tracking-tight text-navy-900 md:text-6xl">{product.name}</h1>
            <p className="mt-5 text-2xl font-bold text-navy-800">High Precision Feeding Solutions for Automated Production Lines</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">Designed for accurate orientation and feeding of small parts with maximum efficiency and reliability.</p>
            <div className="mt-6 grid gap-2 text-sm font-bold text-navy-900">
              {["ISO9001 Certified", "CE Certified", "20+ Years Experience", "5000+ Installations", "50+ Countries"].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-electric" /> {item}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <RFQModal />
              <Link href="/downloads" className="inline-flex items-center gap-2 rounded-md border border-navy-800 px-5 py-3 text-sm font-black uppercase text-navy-900"><Download className="h-4 w-4" /> Download Catalog</Link>
              <Link href="/resources" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-black uppercase text-navy-900"><PlayCircle className="h-4 w-4" /> Watch Video</Link>
            </div>
          </div>
          <Image src={product.image} alt={product.name} width={960} height={700} priority className="object-contain drop-shadow-[0_30px_70px_rgba(8,36,73,.2)]" />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-8">
        <div className="container-wide grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {advantages.map((item) => <div key={item.title} className="rounded-lg p-4 transition hover:bg-slate-50"><item.icon className="h-9 w-9 text-electric" /><p className="mt-3 font-black uppercase text-navy-900">{item.title}</p><p className="mt-1 text-sm text-slate-600">{item.text}</p></div>)}
        </div>
      </section>

      <PageSpecificBrief
        eyebrow="Product Fit"
        title={`${product.name} page focused on application fit and quote readiness`}
        intro={`This detail page explains when ${product.name.toLowerCase()} make sense, what engineering inputs are needed, and how the system should be validated before production.`}
        audience="Automation engineers, OEM machine builders, system integrators, and procurement teams evaluating this specific feeder type for a production line."
        painPoints={[
          { title: "Part behavior uncertainty", text: "The same feeder category can perform differently depending on part geometry, material, burrs, coating, and orientation target." },
          { title: "Integration assumptions", text: "Discharge position, sensors, controller interface, hopper supply, and changeover needs must be defined early." }
        ]}
        proof={[
          { title: "Annotated machine overview", text: "The page calls out bowl track, controller, base drive, tooling, sensors, and output areas." },
          { title: "Specification table", text: "Model, voltage, capacity, material, weight, and applications are presented for engineering review." }
        ]}
        nextStep={`Use this page to confirm whether ${product.name.toLowerCase()} fit your part family, then submit drawings and target feed rate for final engineering review.`}
      />

      <section className="py-16">
        <div className="container-wide rounded-lg border border-slate-200 bg-white p-6 shadow-industrial">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Overview</p>
              <h2 className="section-title mt-2">Engineered orientation, stable flow, clean integration</h2>
              <p className="mt-5 leading-7 text-slate-700">{product.name} are engineered for versatility and reliability. They support broad part sizes, shapes, and materials while keeping production lines running at peak efficiency.</p>
              <ul className="mt-6 grid gap-2 text-sm font-semibold text-slate-700">
                {["Automotive", "Electronics", "Pharmaceutical", "Medical devices", "General manufacturing"].map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="relative">
              <Image src="/images/product-machine.png" alt="Annotated bowl feeder" width={820} height={620} className="object-contain" />
              {["Bowl Track", "Controller", "Base Drive Unit", "Linear Feeder", "Sensor System", "Customized Tooling"].map((label, index) => (
                <span key={label} className="absolute rounded-md border border-electric/30 bg-white/90 px-3 py-2 text-xs font-black text-navy-900 shadow-sm" style={{ top: `${12 + index * 13}%`, left: index % 2 ? "68%" : "4%" }}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-wide">
          <h2 className="section-title text-center">Technical Specifications</h2>
          <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-navy-900 text-white"><tr>{["Model", "Bowl Diameter", "Voltage", "Frequency", "Capacity", "Material", "Weight", "Application"].map((h) => <th key={h} className="p-4 font-black uppercase">{h}</th>)}</tr></thead>
              <tbody>{specs.map((row) => <tr key={row[0]} className="border-t border-slate-200">{row.map((cell) => <td key={cell} className="p-4 font-semibold text-slate-700">{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <Link href="/downloads" className="mt-6 inline-flex items-center gap-2 rounded-md bg-electric px-5 py-3 text-sm font-black uppercase text-white"><FileText className="h-4 w-4" /> Download Datasheet</Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Engineering Validation</p>
              <h2 className="section-title mt-2">Built for supplier approval, not just product display</h2>
              <p className="mt-5 leading-7 text-slate-700">
                {product.name} projects are reviewed with a production engineering mindset: part behavior, uptime risk, tooling durability, integration interface, and serviceability are considered before build.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {authorityChecks.map(([title, text]) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-black text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16"><div className="container-wide"><h2 className="section-title text-center">Application Industries</h2><div className="mt-8"><IndustryGrid /></div></div></section>

      <section className="bg-slate-50 py-16">
        <div className="container-wide">
          <h2 className="section-title text-center">Customer Success Stories</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {cases.map((item) => <article key={item.title} className="industrial-card rounded-lg p-6"><p className="eyebrow">{item.industry} • {item.country}</p><h3 className="mt-3 text-xl font-black text-navy-900">{item.title}</h3><p className="mt-4 leading-7 text-slate-700">{item.result}</p><Link href="/case-studies" className="mt-5 inline-flex items-center gap-2 font-black text-electric">Read Case Study <ArrowRight className="h-4 w-4" /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="rounded-lg bg-navy-900 p-8 text-white">
            <h2 className="text-3xl font-black">Need a Custom Feeding Solution?</h2>
            <p className="mt-3 leading-7 text-slate-300">Our engineering team designs and manufactures customized vibratory feeding systems based on your parts and automation requirements.</p>
            <div className="mt-6 flex flex-wrap gap-3"><RFQModal /><Link href="/contact" className="rounded-md border border-white/40 px-5 py-3 text-sm font-black uppercase">Talk To Engineer</Link></div>
          </div>
          <div className="rounded-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-black text-navy-900">Certifications</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">{certifications.map((item) => <span key={item} className="rounded-md bg-slate-50 p-4 text-center font-black text-navy-900">{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-wide">
          <h2 className="section-title text-center">FAQ</h2>
          <div className="mx-auto mt-8 max-w-4xl space-y-3">
            {faqs.map(([q, a]) => <details key={q} className="rounded-lg border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-black text-navy-900">{q}</summary><p className="mt-3 leading-7 text-slate-700">{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="py-16"><div className="container-wide"><h2 className="section-title text-center">Related Products</h2><div className="mt-8"><ProductGrid limit={4} /></div></div></section>
    </>
  );
}
