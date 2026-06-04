import Link from "next/link";
import { ArrowRight, Download, FileCheck, LockKeyhole, Mail } from "lucide-react";
import { downloadHref, downloadResources } from "@/lib/downloads";

export function DownloadCenter() {
  return (
    <section className="py-14">
      <div className="container-wide">
        <div className="grid gap-4 md:grid-cols-2">
          {downloadResources.map((resource) => (
            <article key={resource.slug} className="industrial-card rounded-lg p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-electric">{resource.category}</p>
                  <h2 className="mt-2 text-xl font-black text-navy-900">{resource.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{resource.summary}</p>
                </div>
                <FileCheck className="h-7 w-7 shrink-0 text-electric" />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={downloadHref(resource)} download className="focus-ring inline-flex items-center gap-2 rounded-md bg-electric px-4 py-3 text-sm font-black uppercase text-white hover:bg-blue-700">
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
                <Link href={`/rfq?document=${resource.slug}`} className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-black uppercase text-navy-900 hover:bg-slate-50">
                  <Mail className="h-4 w-4" />
                  Ask Engineer
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-start gap-3">
            <LockKeyhole className="mt-1 h-6 w-6 shrink-0 text-electric" />
            <div>
              <h2 className="text-xl font-black text-navy-900">Need official certificate copies or project-specific files?</h2>
              <p className="mt-2 leading-7 text-slate-700">
                Public downloads provide engineering briefs. Official certificates, FAT media, wiring notes, and supplier approval files can be attached to your RFQ after project qualification.
              </p>
              <Link href="/rfq" className="mt-4 inline-flex items-center gap-2 font-black uppercase text-electric">
                Submit project details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
