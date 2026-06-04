import Link from "next/link";
import { company } from "@/lib/site-data";

export function Logo() {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" aria-label="VibraFlow home">
      <span className="grid h-12 w-12 place-items-center rounded-full border-4 border-electric">
        <span className="h-5 w-5 rounded-full border-[6px] border-navy-800" />
      </span>
      <span className="leading-none">
        <span className="block text-2xl font-black tracking-tight text-navy-900">{company.name.toUpperCase()}</span>
        <span className="text-sm font-semibold text-slate-600">{company.tagline}</span>
      </span>
    </Link>
  );
}
