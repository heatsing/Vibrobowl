"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Filter, Search, X } from "lucide-react";
import { products } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))];

export function ProductExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [compare, setCompare] = useState<string[]>([]);

  const normalizedQuery = query.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const searchText = `${product.name} ${product.category} ${product.summary} ${product.specs}`.toLowerCase();
    return matchesCategory && (!normalizedQuery || searchText.includes(normalizedQuery));
  });
  const comparedProducts = products.filter((product) => compare.includes(product.slug));
  const shortlistHref = `/rfq?products=${encodeURIComponent(compare.join(","))}`;

  function toggleCompare(slug: string) {
    setCompare((current) => {
      if (current.includes(slug)) return current.filter((item) => item !== slug);
      return current.length >= 3 ? [...current.slice(1), slug] : [...current, slug];
    });
  }

  return (
    <section className="py-14">
      <div className="container-wide">
        <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm lg:grid-cols-[1fr_auto]">
          <label className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3">
            <Search className="h-5 w-5 shrink-0 text-electric" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent outline-none" placeholder="Search feeder type, application, speed, material..." />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-md border px-4 py-3 text-sm font-black text-navy-900 transition",
                  category === item ? "border-electric bg-blue-50 text-electric" : "border-slate-200 bg-white hover:bg-slate-50"
                )}
              >
                {item === "All" ? <Filter className="h-4 w-4" /> : null}
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="font-bold text-slate-600">
            Showing <span className="text-navy-900">{visibleProducts.length}</span> feeder systems. Select up to 3 products to compare.
          </p>
          {compare.length ? (
            <button type="button" onClick={() => setCompare([])} className="inline-flex items-center gap-1 font-black uppercase text-electric">
              Clear Compare <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        {comparedProducts.length ? (
          <div className="mt-6 rounded-lg border border-navy-200 bg-navy-900 p-5 text-white">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-blue-200">Product Comparison</p>
                <h2 className="mt-1 text-2xl font-black">Compare shortlist before RFQ</h2>
              </div>
              <Link href={shortlistHref} className="inline-flex items-center justify-center rounded-md bg-electric px-5 py-3 text-sm font-black uppercase text-white hover:bg-blue-700">
                Submit shortlist RFQ
              </Link>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {comparedProducts.map((product) => (
                <div key={product.slug} className="rounded-md border border-white/15 bg-white/[0.05] p-4">
                  <p className="font-black">{product.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{product.specs}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => {
            const selected = compare.includes(product.slug);
            return (
              <article key={product.slug} className="industrial-card rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-industrial">
                <Link href={`/products/${product.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-50">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-4 transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-wide text-electric">{product.category}</p>
                  <h3 className="mt-2 text-lg font-black uppercase text-navy-900">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{product.summary}</p>
                  <p className="mt-3 text-sm font-bold text-navy-900">{product.specs}</p>
                </Link>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 text-sm font-black uppercase text-electric">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleCompare(product.slug)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-black uppercase",
                      selected ? "border-electric bg-blue-50 text-electric" : "border-slate-200 text-navy-900 hover:bg-slate-50"
                    )}
                  >
                    {selected ? <Check className="h-4 w-4" /> : null}
                    {selected ? "Selected" : "Compare"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
