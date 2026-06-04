"use client";

import Link from "next/link";
import { FileText, Mail, ShieldCheck } from "lucide-react";
import { RFQModal } from "@/components/rfq-modal";
import { company } from "@/lib/site-data";

export function ConversionDock() {
  return (
    <>
      <div className="fixed bottom-5 left-1/2 z-30 hidden w-[min(1040px,calc(100%-32px))] -translate-x-1/2 rounded-lg border border-white/15 bg-navy-950/95 px-4 py-3 text-white shadow-2xl shadow-navy-950/25 backdrop-blur-md lg:block">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-electric">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-blue-200">Engineering RFQ Desk</p>
              <p className="text-sm font-semibold text-slate-200">Send drawings, part photos, feed rate, and machine interface. Typical response within 24 hours.</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Link href="/downloads" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10" aria-label="Open technical downloads">
              <FileText className="h-5 w-5" />
            </Link>
            <Link href={`mailto:${company.email}`} className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10" aria-label="Email VibraFlow">
              <Mail className="h-5 w-5" />
            </Link>
            <RFQModal compact />
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/15 bg-navy-950/95 p-3 text-white shadow-2xl backdrop-blur-md lg:hidden">
        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2">
          <RFQModal compact />
          <Link href="/downloads" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20" aria-label="Open technical downloads">
            <FileText className="h-5 w-5" />
          </Link>
          <Link href={`mailto:${company.email}`} className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20" aria-label="Email VibraFlow">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
