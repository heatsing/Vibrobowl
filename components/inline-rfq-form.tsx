"use client";

import { useState } from "react";
import { CheckCircle, Clock, FileCheck, Globe2, Send, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

const contactFields = [
  ["Name", "name", "text", "Your name"],
  ["Company", "company", "text", "Company name"],
  ["Email", "email", "email", "name@company.com"],
  ["WhatsApp / Phone", "phone", "tel", "+1 123 456 7890"]
] as const;

const productTypes = [
  "Vibratory Bowl Feeder",
  "Linear Feeder",
  "Centrifugal Feeder",
  "Flexible Feeder",
  "Step Feeder",
  "Hopper System",
  "Custom Feeding System",
  "Vision Inspection System"
];

export function InlineRFQForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/rfq", { method: "POST", body: formData });
      const data = (await response.json()) as { ok: boolean; message?: string; errors?: string[] };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.errors?.join(" ") || "Please check the RFQ details and submit again.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(data.message || "RFQ received. Our engineering team will review your project details.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or contact us by email.");
    }
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="container-wide grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="eyebrow">RFQ Details</p>
          <h2 className="section-title mt-2">Tell us what you need to feed, orient, inspect, or transfer</h2>
          <p className="mt-5 leading-7 text-slate-700">
            A complete inquiry lets engineering respond with feeder architecture, questions, or quotation scope instead of a generic sales reply.
          </p>
          <div className="mt-7 grid gap-4 text-sm text-slate-700">
            <span className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-electric" /> Typical engineering reply within 24 hours for complete RFQ inputs.</span>
            <span className="flex gap-3"><FileCheck className="h-5 w-5 shrink-0 text-electric" /> Drawings, part photos, STEP files, and samples are welcome.</span>
            <span className="flex gap-3"><Globe2 className="h-5 w-5 shrink-0 text-electric" /> Support for North America, Europe, Australia, Japan, and Korea projects.</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="industrial-card grid gap-4 rounded-lg p-6 md:grid-cols-2">
          {contactFields.map(([field, name, type, placeholder]) => (
            <label key={name} className="text-sm font-black text-navy-900">
              {field}
              <input
                name={name}
                type={type}
                required={name !== "phone"}
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100"
                placeholder={placeholder}
              />
            </label>
          ))}
          <label className="text-sm font-black text-navy-900">
            Product Type
            <select name="productType" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100">
              {productTypes.map((type) => <option key={type}>{type}</option>)}
            </select>
          </label>
          <label className="text-sm font-black text-navy-900">
            Target Feed Rate
            <input name="targetFeedRate" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100" placeholder="e.g. 120 parts/min" />
          </label>
          <label className="text-sm font-black text-navy-900 md:col-span-2">
            Project Requirement
            <textarea
              name="requirement"
              required
              className="mt-2 min-h-32 w-full rounded-md border border-slate-300 px-3 py-3 outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100"
              placeholder="Part size, material, required orientation, feed rate, machine interface, voltage, delivery target..."
            />
          </label>
          <label className="flex min-h-16 cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm font-black text-navy-900 md:col-span-2 lg:col-span-1">
            <Upload className="h-5 w-5 text-electric" /> Upload Drawing / Photo
            <input name="attachment" type="file" className="sr-only" />
          </label>
          <input type="hidden" name="source" value="Inline RFQ form" />
          <button disabled={status === "submitting"} type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-electric px-5 py-4 text-sm font-black uppercase text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70">
            {status === "submitting" ? "Submitting..." : "Submit RFQ"} <Send className="h-4 w-4" />
          </button>
          {message ? (
            <p
              className={cn(
                "flex items-start gap-2 rounded-md px-4 py-3 text-sm font-bold md:col-span-2",
                status === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
              )}
            >
              {status === "success" ? <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" /> : null}
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
