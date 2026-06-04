import { products } from "@/lib/site-data";

export type DownloadResource = {
  slug: string;
  title: string;
  category: "Datasheet" | "Catalog" | "Certificate" | "Audit" | "Guide" | "Checklist";
  summary: string;
  audience: string;
  sections: string[];
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const productDownloads: DownloadResource[] = products.map((product) => ({
  slug: `${product.slug}-datasheet`,
  title: `${product.name} Datasheet`,
  category: "Datasheet",
  summary: product.summary,
  audience: "Automation engineers, machine builders, procurement teams, and system integrators.",
  sections: [
    `Product category: ${product.category}`,
    `Typical specification range: ${product.specs}`,
    "Engineering review should include part geometry, material, required orientation, target feed rate, discharge position, controls interface, and hopper strategy.",
    "Recommended RFQ attachments: drawings, part photos, STEP files, line layout, voltage requirement, delivery target, and quality documentation needs."
  ]
}));

const companyDownloadBase: Omit<DownloadResource, "slug">[] = [
  {
    title: "Full Product Catalog",
    category: "Catalog",
    summary: "Overview of vibratory bowl feeders, linear feeders, centrifugal feeders, flexible feeders, step feeders, hopper systems, and custom feeding systems.",
    audience: "Project managers and procurement teams preparing a supplier shortlist.",
    sections: [
      "Covers product categories, feeder architecture choices, engineering workflow, and RFQ preparation.",
      "Use this catalog to identify the feeder families that should be included in the first engineering review.",
      "For accurate quotation, submit part drawings, feed rate, orientation target, machine interface, and downstream handoff requirements."
    ]
  },
  {
    title: "ISO 9001 Certificate",
    category: "Certificate",
    summary: "Quality management evidence for supplier approval and procurement review.",
    audience: "Supplier quality, procurement, and engineering approval teams.",
    sections: [
      "Quality workflow covers application review, tooling setup, drive tuning, sensor verification, feeding checks, and release documentation.",
      "Formal certificate files can be supplied during supplier qualification or purchase approval.",
      "Use this placeholder PDF as the website-facing download brief until your official certificate file is attached in the CMS."
    ]
  },
  {
    title: "CE Declaration",
    category: "Certificate",
    summary: "Compliance brief for export-oriented automation equipment review.",
    audience: "EU project teams, machine builders, integrators, and procurement departments.",
    sections: [
      "CE documentation requirements vary by machine scope, controls package, and final installation environment.",
      "Project-specific declarations and supporting files can be prepared after final equipment configuration is confirmed.",
      "Send voltage, controller, guarding, sensor, and integration details with the RFQ for faster compliance review."
    ]
  },
  {
    title: "Factory Audit Profile",
    category: "Audit",
    summary: "Supplier review brief covering engineering process, quality workflow, testing, and documentation readiness.",
    audience: "OEM buyers, supplier development teams, and procurement managers.",
    sections: [
      "The audit profile summarizes design review, tooling capability, FAT evidence, maintenance documentation, and support readiness.",
      "Recommended audit evidence includes factory photos, production process notes, sample FAT media, certification records, and export support details.",
      "A complete audit package can be shared after project qualification."
    ]
  },
  {
    title: "Feeder Selection Guide",
    category: "Guide",
    summary: "Decision guide for choosing bowl, linear, centrifugal, flexible, step, or hopper-based feeding architecture.",
    audience: "Automation engineers and machine builders comparing feeder types.",
    sections: [
      "Use bowl feeders for repeatable high-volume orientation when part geometry supports custom tooling.",
      "Use flexible feeders for mixed parts, short lifecycle products, or robot-guided picking.",
      "Use centrifugal feeders for high-speed singulation where part behavior and orientation risk are suitable.",
      "Use hoppers and linear feeders to stabilize supply, buffering, and downstream transfer."
    ]
  },
  {
    title: "Maintenance Checklist",
    category: "Checklist",
    summary: "Practical checklist for keeping feeding systems stable after installation.",
    audience: "Plant maintenance teams, line engineers, and production supervisors.",
    sections: [
      "Check bowl surface, track wear, fasteners, sensors, vibration settings, hopper refill logic, and discharge timing.",
      "Record feed rate, jam frequency, reject rate, and operator interventions during each maintenance window.",
      "Keep spare tooling, drive components, sensors, controllers, and critical fasteners available for production lines with high uptime requirements."
    ]
  }
];

const companyDownloads: DownloadResource[] = companyDownloadBase.map((resource) => ({
  ...resource,
  slug: slugify(resource.title)
}));

export const downloadResources: DownloadResource[] = [...productDownloads, ...companyDownloads];

export function findDownloadResource(slug: string) {
  return downloadResources.find((resource) => resource.slug === slug);
}

export function downloadHref(resource: DownloadResource) {
  return `/downloads/${resource.slug}`;
}
