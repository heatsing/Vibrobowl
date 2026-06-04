import {
  BadgeCheck,
  Boxes,
  Building2,
  CircuitBoard,
  Factory,
  Gauge,
  Globe2,
  Headphones,
  HeartPulse,
  PackageCheck,
  Pill,
  Plane,
  Settings,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap
} from "lucide-react";

export const company = {
  name: "VibraFlow",
  legalName: "VibraFlow Precision Automation Co., Ltd.",
  tagline: "Driven by Precision",
  phone: "+1 123 456 7890",
  email: "info@vibraflow.com",
  address: "123 Innovation Way, Detroit, MI 48201, USA",
  whatsapp: "+1 123 456 7890"
};

export const products = [
  {
    slug: "standard-bowl-feeders",
    name: "Standard Bowl Feeders",
    category: "Vibratory Bowl Feeders",
    summary: "Versatile orientation and feeding for small parts across high-volume automation lines.",
    specs: "150-1200 mm bowl diameter, stainless steel or coated tooling",
    image: "/images/product-machine.png"
  },
  {
    slug: "linear-feeders",
    name: "Linear Feeders",
    category: "Linear Feeders",
    summary: "Controlled transfer from bowl to machine in compact, quiet, and stable layouts.",
    specs: "50-1800 mm track length, modular controls",
    image: "/images/product-machine.png"
  },
  {
    slug: "centrifugal-feeders",
    name: "Centrifugal Feeders",
    category: "Centrifugal Feeders",
    summary: "High-speed rotary feeding for parts that need rapid singulation and orientation.",
    specs: "Up to 1,000 ppm depending on part geometry",
    image: "/images/product-machine.png"
  },
  {
    slug: "flexible-feeders",
    name: "Flexible Feeders",
    category: "Flexible Feeders",
    summary: "Vision-guided flexible feeding for mixed parts and short product lifecycles.",
    specs: "Robot-ready, camera integrated, recipe driven",
    image: "/images/product-machine.png"
  },
  {
    slug: "step-feeders",
    name: "Step Feeders",
    category: "Step Feeders",
    summary: "Quiet vertical lifting and gentle feeding for larger or delicate components.",
    specs: "Low-noise drive, bulk loading compatible",
    image: "/images/product-machine.png"
  },
  {
    slug: "hopper-systems",
    name: "Hopper Systems",
    category: "Hopper Systems",
    summary: "Bulk storage and metered part supply for uninterrupted automatic feeding.",
    specs: "Sensor controlled, stainless or powder-coated builds",
    image: "/images/product-machine.png"
  }
];

export const industries = [
  { slug: "automotive", name: "Automotive", icon: Factory, detail: "Fasteners, clips, connectors, springs, and powertrain components." },
  { slug: "electronics", name: "Electronics", icon: CircuitBoard, detail: "Terminals, pins, contacts, housings, micro components, and PCB hardware." },
  { slug: "medical-devices", name: "Medical Devices", icon: HeartPulse, detail: "Clean, precise systems for caps, needles, cartridges, and device parts." },
  { slug: "pharmaceutical", name: "Pharmaceutical", icon: Pill, detail: "Validated feeding for caps, vials, closures, and sterile packaging workflows." },
  { slug: "food-packaging", name: "Food Packaging", icon: PackageCheck, detail: "Washdown-friendly solutions for caps, scoops, sachets, and packaging parts." },
  { slug: "consumer-goods", name: "Consumer Goods", icon: Boxes, detail: "Flexible feeding for personal care, home goods, toys, and accessories." },
  { slug: "aerospace", name: "Aerospace", icon: Plane, detail: "High-reliability component orientation for precision assemblies." },
  { slug: "general-manufacturing", name: "General Manufacturing", icon: Building2, detail: "Custom feeding systems for machine builders and system integrators." }
];

export const advantages = [
  { title: "High Precision", text: "Consistent orientation and smooth feeding.", icon: Gauge },
  { title: "Built to Last", text: "Heavy-duty construction for long-term reliability.", icon: ShieldCheck },
  { title: "Maximum Efficiency", text: "Optimized flow to reduce downtime.", icon: Zap },
  { title: "Easy Integration", text: "PLC, sensor, and machine interface ready.", icon: Settings },
  { title: "Certified Quality", text: "ISO 9001 driven quality management.", icon: BadgeCheck },
  { title: "Global Support", text: "Expert help across major manufacturing markets.", icon: Headphones }
];

export const stats = [
  ["20+", "Years of Experience"],
  ["5,000+", "Installations"],
  ["50+", "Countries Served"],
  ["ISO 9001", "Certified Quality"],
  ["24/7", "Global Support"]
];

export const cases = [
  {
    title: "Automotive Fastener Feeding Cell",
    country: "Germany",
    industry: "Automotive",
    result: "Increased feeding efficiency by 35% and reduced downtime by 42%."
  },
  {
    title: "Medical Cap Orientation System",
    country: "USA",
    industry: "Medical Devices",
    result: "Delivered stable sterile-line feeding with validated inspection checkpoints."
  },
  {
    title: "Electronics Connector Assembly",
    country: "Japan",
    industry: "Electronics",
    result: "Integrated bowl, linear feeder, vision inspection, and reject handling."
  }
];

export const faqs = [
  ["What is a vibratory bowl feeder?", "It is an automated machine that uses controlled vibration and custom tooling to orient, singulate, and feed parts into assembly, packaging, or inspection equipment."],
  ["How do I select the right feeder?", "Selection depends on part geometry, material, required feed rate, orientation, machine interface, and operating environment. Our engineers review samples or drawings before recommending a configuration."],
  ["What materials can be fed?", "Metal, plastic, rubber, glass, ceramic, and many molded or stamped components can be fed when the tooling and drive system are matched to the part."],
  ["Can you customize feeders?", "Yes. Bowl track tooling, coatings, sensors, controllers, hoppers, escapements, and vision inspection modules can all be customized."],
  ["How long is delivery time?", "Standard systems usually ship in 3-6 weeks. Complex custom systems vary by tooling, validation, and integration scope."],
  ["Do you provide overseas support?", "Yes. We support customers in North America, Europe, and Asia through remote engineering, documentation, spare parts, and partner service networks."]
];

export const certifications = ["ISO 9001", "CE", "RoHS", "SGS", "Patent Certificates", "Factory Audit Reports"];

export const trustLogos = ["SIEMENS", "BOSCH", "ABB", "GE", "DENSO", "TE", "SCHAEFFLER", "FOXCONN"];

export const nav = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
];

export const timeline = [
  ["2003", "Precision feeder tooling workshop founded."],
  ["2010", "Expanded into full automated feeding systems."],
  ["2017", "Added vision inspection and export engineering support."],
  ["2024", "5,000+ global installations across 50+ countries."]
];

export const SparkIcon = Sparkles;
export const TrophyIcon = Trophy;
export const GlobeIcon = Globe2;
