import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { company, industries, products } from "@/lib/site-data";
import { Logo } from "@/components/logo";

const footerGroups = [
  { title: "Products", links: products.slice(0, 5).map((p) => [p.name, `/products/${p.slug}`]) },
  { title: "Industries", links: industries.slice(0, 6).map((i) => [i.name, `/industries/${i.slug}`]) },
  { title: "Resources", links: [["Case Studies", "/case-studies"], ["Brochures", "/downloads"], ["Videos", "/resources"], ["Blog", "/blog"]] },
  { title: "Support", links: [["Service", "/contact"], ["Technical Resources", "/resources"], ["Downloads", "/downloads"], ["FAQ", "/faq"]] }
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-wide grid gap-10 py-12 lg:grid-cols-[1.4fr_repeat(4,1fr)_1.4fr]">
        <div>
          <div className="[&_span]:text-white"><Logo /></div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">Smart feeding solutions that move your productivity forward.</p>
          <div className="mt-5 flex gap-3 text-slate-300">
            <Linkedin className="h-5 w-5" /><Youtube className="h-5 w-5" />
          </div>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-black uppercase tracking-wide">{group.title}</h3>
            <div className="mt-4 grid gap-2">
              {group.links.map(([label, href]) => <Link key={href + label} href={href} className="text-sm text-slate-300 hover:text-white">{label}</Link>)}
            </div>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-black uppercase tracking-wide">Contact Us</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <span className="flex gap-2"><Phone className="h-4 w-4" /> {company.phone}</span>
            <span className="flex gap-2"><Mail className="h-4 w-4" /> {company.email}</span>
            <span className="flex gap-2"><MapPin className="h-4 w-4" /> {company.address}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-wide flex flex-col justify-between gap-3 text-sm text-slate-300 md:flex-row">
          <span>Copyright 2026 VibraFlow. All rights reserved.</span>
          <span>Privacy Policy &nbsp; | &nbsp; Terms of Use</span>
        </div>
      </div>
    </footer>
  );
}
