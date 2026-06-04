import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { normalizeRFQValue, rfqEmailText, type RFQPayload, validateRFQ } from "@/lib/rfq";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const attachment = formData.get("attachment");

  const payload: RFQPayload = {
    name: normalizeRFQValue(formData.get("name")),
    company: normalizeRFQValue(formData.get("company")),
    email: normalizeRFQValue(formData.get("email")),
    phone: normalizeRFQValue(formData.get("phone")),
    productType: normalizeRFQValue(formData.get("productType")),
    targetFeedRate: normalizeRFQValue(formData.get("targetFeedRate")),
    requirement: normalizeRFQValue(formData.get("requirement")),
    source: normalizeRFQValue(formData.get("source")) || "Website RFQ",
    attachmentName: attachment instanceof File ? attachment.name : undefined
  };

  const errors = validateRFQ(payload);
  if (errors.length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  await Promise.allSettled([saveToSupabase(payload), sendEmail(payload)]);

  return NextResponse.json({
    ok: true,
    message: "RFQ received. Our engineering team will review your project details."
  });
}

async function saveToSupabase(payload: RFQPayload) {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) return;

  const supabase = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  await supabase.from("rfq_inquiries").insert({
    name: payload.name,
    company: payload.company,
    email: payload.email,
    phone: payload.phone,
    product_type: payload.productType,
    target_feed_rate: payload.targetFeedRate,
    requirement: payload.requirement,
    source: payload.source,
    attachment_name: payload.attachmentName
  });
}

async function sendEmail(payload: RFQPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RFQ_TO_EMAIL;
  const from = process.env.RFQ_FROM_EMAIL || "VibraFlow RFQ <onboarding@resend.dev>";
  if (!apiKey || !to) return;

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `New RFQ from ${payload.company}`,
    text: rfqEmailText(payload)
  });
}
