import { CheckCircle, ClipboardList, FileText, Target, Users } from "lucide-react";

type Point = {
  title: string;
  text: string;
};

export function PageSpecificBrief({
  eyebrow,
  title,
  intro,
  audience,
  painPoints,
  proof,
  nextStep
}: {
  eyebrow: string;
  title: string;
  intro: string;
  audience: string;
  painPoints: Point[];
  proof: Point[];
  nextStep: string;
}) {
  return (
    <section className="bg-white py-16">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title mt-2">{title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">{intro}</p>
            <div className="mt-7 rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-electric" />
                <p className="text-sm font-black uppercase tracking-wide text-navy-900">Primary Audience</p>
              </div>
              <p className="mt-3 leading-7 text-slate-700">{audience}</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <BriefColumn icon="target" title="Page-Specific Problems" points={painPoints} />
            <BriefColumn icon="proof" title="Evidence Shown Here" points={proof} />
          </div>
        </div>
        <div className="mt-8 rounded-lg bg-navy-900 p-6 text-white">
          <div className="flex items-start gap-3">
            <ClipboardList className="mt-1 h-6 w-6 shrink-0 text-blue-300" />
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-blue-200">Recommended Next Step</p>
              <p className="mt-2 text-lg font-bold leading-7">{nextStep}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BriefColumn({ icon, title, points }: { icon: "target" | "proof"; title: string; points: Point[] }) {
  const Icon = icon === "target" ? Target : FileText;

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-electric" />
        <h3 className="font-black text-navy-900">{title}</h3>
      </div>
      <div className="mt-5 grid gap-4">
        {points.map((point) => (
          <div key={point.title} className="flex gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
            <div>
              <p className="font-black text-navy-900">{point.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">{point.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
