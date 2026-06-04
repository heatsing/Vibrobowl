"use client";

import Link from "next/link";
import { ChevronDown, Globe2, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { nav, products } from "@/lib/site-data";
import { Logo } from "@/components/logo";
import { RFQModal } from "@/components/rfq-modal";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur">
      <div className="bg-navy-950 text-white">
        <div className="container-wide flex h-10 items-center justify-between text-xs font-semibold">
          <span>Global Leader in Vibratory Bowl Feeding Solutions</span>
          <div className="flex items-center gap-5">
            <Link href="/resources">Resources</Link>
            <Link href="/faq">Support</Link>
            <button className="inline-flex items-center gap-1"><Globe2 className="h-4 w-4" /> English <ChevronDown className="h-3 w-3" /></button>
          </div>
        </div>
      </div>
      <div className="container-wide flex h-24 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link href={item.href} className="focus-ring inline-flex items-center gap-1 rounded-md px-4 py-3 text-sm font-black uppercase text-navy-900 hover:text-electric">
                {item.label}
                {item.label === "Products" || item.label === "Resources" ? <ChevronDown className="h-3 w-3" /> : null}
              </Link>
              {item.label === "Products" ? (
                <div className="invisible absolute left-0 top-full w-[680px] translate-y-2 rounded-b-lg border border-slate-200 bg-white p-5 opacity-0 shadow-industrial transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-3">
                    {products.map((product) => (
                      <Link key={product.slug} href={`/products/${product.slug}`} className="rounded-md p-3 hover:bg-slate-50">
                        <span className="block font-black text-navy-900">{product.name}</span>
                        <span className="mt-1 block text-sm text-slate-600">{product.summary}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
              {item.label === "Resources" ? (
                <div className="invisible absolute left-0 top-full w-[520px] translate-y-2 rounded-b-lg border border-slate-200 bg-white p-5 opacity-0 shadow-industrial transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["Resources Center", "/resources", "Guides, videos, brochures, and engineering tools."],
                      ["Case Studies", "/case-studies", "Customer projects and measurable production results."],
                      ["Downloads", "/downloads", "Datasheets, catalogs, certificates, and audit files."],
                      ["Blog", "/blog", "Technical articles for feeder selection and integration."],
                      ["FAQ", "/faq", "Common questions for engineering and procurement."],
                      ["Certifications", "/certifications", "ISO, CE, RoHS, SGS, and quality documents."]
                    ].map(([label, href, text]) => (
                      <Link key={href} href={href} className="rounded-md p-3 hover:bg-slate-50">
                        <span className="block font-black text-navy-900">{label}</span>
                        <span className="mt-1 block text-sm text-slate-600">{text}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/resources" className="focus-ring rounded-md p-3 text-navy-900 hover:bg-slate-100" aria-label="Search resources"><Search className="h-5 w-5" /></Link>
          <RFQModal compact />
        </div>
        <button onClick={() => setMobileOpen(true)} className="focus-ring rounded-md p-2 lg:hidden" aria-label="Open menu">
          <Menu className="h-7 w-7" />
        </button>
      </div>
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-white p-5 lg:hidden">
          <div className="flex items-center justify-between">
            <Logo />
            <button onClick={() => setMobileOpen(false)} className="focus-ring rounded-md p-2" aria-label="Close menu"><X /></button>
          </div>
          <nav className="mt-8 grid gap-2">
            {[...nav, { label: "RFQ", href: "/rfq" }].map((item) => (
              <Link key={item.href} onClick={() => setMobileOpen(false)} href={item.href} className="rounded-md border border-slate-200 p-4 font-black uppercase text-navy-900">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
