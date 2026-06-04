"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Clock, FileCheck, Send, Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function RFQModal({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const fields = [
    ["Name", "name", "text", "Your name"],
    ["Company", "company", "text", "Company name"],
    ["Email", "email", "email", "name@company.com"],
    ["WhatsApp / Phone", "phone", "tel", "+1 123 456 7890"]
  ];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/rfq", {
        method: "POST",
        body: formData
      });
      const data = (await response.json()) as { ok: boolean; message?: string; errors?: string[] };
      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.errors?.join(" ") || "Please check the RFQ details and try again.");
        return;
      }
      event.currentTarget.reset();
      setStatus("success");
      setMessage(data.message || "RFQ received. Our engineering team will review your project.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or contact us by email.");
    }
  }

  useEffect(() => {
    if (!open) return;
    modalScrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "focus-ring inline-flex items-center justify-center rounded-md bg-electric px-5 py-3 text-sm font-black uppercase text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-700",
          compact && "px-4 py-2"
        )}
      >
        Request a Quote
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/75 p-4 backdrop-blur-md sm:p-8" role="dialog" aria-modal="true" aria-labelledby="rfq-title">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="focus-ring absolute right-4 top-4 z-10 rounded-md bg-white/90 p-2 text-slate-500 shadow-sm hover:bg-slate-100"
              aria-label="Close RFQ modal"
            >
              <X className="h-5 w-5" />
            </button>
            <div ref={modalScrollRef} className="grid max-h-[min(820px,88dvh)] overflow-y-auto overscroll-contain scroll-smooth lg:grid-cols-[1.15fr_.85fr]">
              <form onSubmit={handleSubmit} className="grid gap-4 p-5 sm:p-7 md:grid-cols-2">
                <div className="md:col-span-2">
                  <p className="eyebrow">Engineering RFQ</p>
                  <h2 id="rfq-title" className="mt-2 text-3xl font-black tracking-tight text-navy-900">Get expert advice for your feeding application</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    Send part details, drawings, feed rate, and machine interface requirements. Our engineers will recommend the right feeder architecture.
                  </p>
                </div>
                {fields.map(([field, name, type, placeholder]) => (
                  <label key={field} className="text-sm font-black text-navy-900">
                    {field}
                    <input
                      name={name}
                      type={type}
                      required={name !== "phone"}
                      className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100"
                      placeholder={placeholder}
                    />
                  </label>
                ))}
                <label className="text-sm font-black text-navy-900">
                  Product Type
                  <select name="productType" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100">
                    <option>Vibratory Bowl Feeder</option>
                    <option>Linear Feeder</option>
                    <option>Centrifugal Feeder</option>
                    <option>Flexible Feeder</option>
                    <option>Custom Feeding System</option>
                  </select>
                </label>
                <label className="text-sm font-black text-navy-900">
                  Target Feed Rate
                  <input name="targetFeedRate" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100" placeholder="e.g. 120 parts/min" />
                </label>
                <label className="text-sm font-black text-navy-900 md:col-span-2">
                  Part Description / Project Requirement
                  <textarea name="requirement" required className="mt-2 min-h-28 w-full rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100" placeholder="Part size, material, orientation, machine layout, voltage, delivery target..." />
                </label>
                <label className="flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 text-center text-sm font-black text-navy-900 md:col-span-2">
                  <Upload className="mb-2 h-5 w-5 text-electric" />
                  Upload drawing, CAD file, or part photo
                  <span className="mt-1 text-xs font-semibold text-slate-500">PDF, JPG, PNG, STEP, ZIP</span>
                  <input name="attachment" type="file" className="sr-only" />
                </label>
                <input type="hidden" name="source" value="RFQ modal" />
                {message ? (
                  <p
                    className={cn(
                      "rounded-md px-4 py-3 text-sm font-bold md:col-span-2",
                      status === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
                    )}
                  >
                    {message}
                  </p>
                ) : null}
                <button disabled={status === "submitting"} type="submit" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-electric px-5 py-4 text-sm font-black uppercase text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2">
                  {status === "submitting" ? "Submitting..." : "Submit RFQ"} <Send className="h-4 w-4" />
                </button>
              </form>
              <aside className="bg-navy-950 p-7 text-white">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">What happens next</p>
                <div className="mt-7 grid gap-5">
                  {[
                    ["Application review", "We evaluate part geometry, orientation risk, feed rate, and downstream handoff.", FileCheck],
                    ["Fast response", "A feeder engineer replies with questions, concept direction, or quote scope.", Clock],
                    ["Custom recommendation", "You receive a practical architecture recommendation before tooling begins.", CheckCircle]
                  ].map(([title, text, Icon]) => (
                    <div key={title as string} className="rounded-lg border border-white/15 bg-white/[0.04] p-5">
                      <Icon className="h-7 w-7 text-blue-300" />
                      <h3 className="mt-4 font-black">{title as string}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{text as string}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-lg bg-white p-5 text-navy-900">
                  <p className="text-3xl font-black">24h</p>
                  <p className="mt-1 text-sm font-bold text-slate-600">Typical engineering response time for complete RFQ inputs.</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
