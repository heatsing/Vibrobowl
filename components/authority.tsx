import Link from "next/link";
import { BadgeCheck, ClipboardCheck, FileText, Globe2, Ruler, ShieldCheck } from "lucide-react";

export function TrustBar() {
  const items = ["ISO 9001 Quality System", "CE / RoHS Documentation", "5,000+ Installations", "50+ Countries Served", "FAT Reports Available"];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-wide flex min-h-12 flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3 text-xs font-black uppercase tracking-wide text-navy-900">
        {items.map((item) => (
          <span key={item} className="inline-flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-electric" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export function AuthorityProof() {
  const proofCards = [
    {
      title: "Application Engineering Review",
      text: "Every RFQ is reviewed against part geometry, orientation risk, feed rate, tooling access, controls interface, and downstream handoff.",
      icon: Ruler
    },
    {
      title: "Supplier Approval Ready",
      text: "Datasheets, certification files, FAT media, spare parts lists, maintenance notes, and factory audit documents support procurement review.",
      icon: ClipboardCheck
    },
    {
      title: "Quality-Controlled Build",
      text: "Systems move through tooling setup, drive tuning, sensor verification, feeding rate checks, inspection review, and shipment documentation.",
      icon: ShieldCheck
    }
  ];

  const standards = ["ISO 9001", "CE", "RoHS", "SGS", "FAT Report", "CAD Review", "PLC Interface", "Spare Parts"];

  return (
    <section className="bg-slate-50 py-16">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Engineering Authority</p>
            <h2 className="section-title mt-2">Evidence buyers, engineers, and integrators can verify</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              VibraFlow pages are structured around the information industrial buyers actually need: technical scope, quality documentation, integration readiness, application proof, and quote-ready project inputs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/downloads" className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-black uppercase text-white">
                <FileText className="h-4 w-4" />
                View Documents
              </Link>
              <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-md border border-navy-800 px-5 py-3 text-sm font-black uppercase text-navy-900">
                <Globe2 className="h-4 w-4" />
                See Case Studies
              </Link>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {proofCards.map((card) => (
              <div key={card.title} className="industrial-card rounded-lg p-6">
                <card.icon className="h-9 w-9 text-electric" />
                <h3 className="mt-4 text-lg font-black text-navy-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Procurement and Engineering Evidence</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((standard) => (
              <span key={standard} className="rounded-md bg-slate-50 px-4 py-3 text-center text-sm font-black text-navy-900">
                {standard}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
