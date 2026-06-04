import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries, products } from "@/lib/site-data";

export function ProductGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.slice(0, limit).map((product) => (
        <Link key={product.slug} href={`/products/${product.slug}`} className="industrial-card group rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-industrial">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-50">
            <Image src={product.image} alt={product.name} fill className="object-contain p-4 transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
          </div>
          <h3 className="mt-5 text-lg font-black uppercase text-navy-900">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{product.summary}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase text-electric">Learn More <ArrowRight className="h-4 w-4" /></span>
        </Link>
      ))}
    </div>
  );
}

export function IndustryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((industry) => {
        const Icon = industry.icon;
        return (
          <Link key={industry.slug} href={`/industries/${industry.slug}`} className="industrial-card rounded-lg p-6 transition hover:-translate-y-1 hover:shadow-industrial">
            <Icon className="h-9 w-9 text-electric" />
            <h3 className="mt-4 text-lg font-black text-navy-900">{industry.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{industry.detail}</p>
          </Link>
        );
      })}
    </div>
  );
}
