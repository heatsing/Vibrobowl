export type RFQPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  productType?: string;
  targetFeedRate?: string;
  requirement: string;
  source?: string;
  attachmentName?: string;
};

export function normalizeRFQValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateRFQ(payload: RFQPayload) {
  const errors: string[] = [];

  if (!payload.name) errors.push("Name is required.");
  if (!payload.company) errors.push("Company is required.");
  if (!payload.email) errors.push("Email is required.");
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.push("A valid email is required.");
  if (!payload.requirement || payload.requirement.length < 10) errors.push("Project requirement must be at least 10 characters.");

  return errors;
}

export function rfqEmailText(payload: RFQPayload) {
  return [
    "New VibraFlow RFQ",
    "",
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Product Type: ${payload.productType || "Not provided"}`,
    `Target Feed Rate: ${payload.targetFeedRate || "Not provided"}`,
    `Source: ${payload.source || "Website"}`,
    `Attachment: ${payload.attachmentName || "None"}`,
    "",
    "Requirement:",
    payload.requirement
  ].join("\n");
}
