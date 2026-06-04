import type { Metadata } from "next";
import CaseStudiesPage from "../case-studies/page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Customer Success Stories",
  description: "Customer success stories for vibratory bowl feeders, automated feeding systems, hopper integration, and vision inspection projects.",
  path: "/success-stories",
  keywords: ["customer success stories", "feeding automation customer results", "bowl feeder project results"]
});

export default CaseStudiesPage;
