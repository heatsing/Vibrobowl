import { notFound } from "next/navigation";
import { findDownloadResource } from "@/lib/downloads";
import { company } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export async function GET(_: Request, { params }: Props) {
  const { slug } = await params;
  const resource = findDownloadResource(slug);
  if (!resource) notFound();

  const pdf = createBriefPdf([
    company.name,
    resource.title,
    resource.category,
    resource.summary,
    `Primary audience: ${resource.audience}`,
    ...resource.sections,
    `Next step: submit drawings, part photos, feed rate, and machine interface requirements at vibrobowl.com/rfq.`
  ]);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${resource.slug}.pdf"`,
      "Cache-Control": "public, max-age=3600"
    }
  });
}

function createBriefPdf(lines: string[]) {
  const encoded = new TextEncoder();
  const wrapped = lines.flatMap((line) => wrapLine(line, 82)).slice(0, 34);
  const textCommands = wrapped
    .map((line, index) => `72 ${760 - index * 20} Td (${escapePdfText(line)}) Tj`)
    .join("\n0 -20 Td\n");
  const stream = `BT\n/F1 11 Tf\n1 0 0 1 0 0 Tm\n${textCommands}\nET`;
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${encoded.encode(stream).length} >>\nstream\n${stream}\nendstream`
  ];

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];
  for (const [index, object] of objects.entries()) {
    offsets.push(encoded.encode(pdf).length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  }
  const xrefOffset = encoded.encode(pdf).length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  pdf += offsets.slice(1).map((offset) => `${String(offset).padStart(10, "0")} 00000 n `).join("\n");
  pdf += `\ntrailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return encoded.encode(pdf);
}

function wrapLine(line: string, length: number) {
  const words = line.split(" ");
  const wrapped: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > length && current) {
      wrapped.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) wrapped.push(current);
  return wrapped;
}

function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}
