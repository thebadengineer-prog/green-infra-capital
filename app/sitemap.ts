import { MetadataRoute } from "next";
import { FEATURED_CASE_STUDIES } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://greeninfracapital.in";
  const currentDate = new Date().toISOString();

  // Core Static Pages
  const staticPages = [
    "",
    "/about",
    "/financial-models",
    "/resources",
    "/case-studies",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Case Studies
  const caseStudyPages = FEATURED_CASE_STUDIES.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...caseStudyPages];
}
