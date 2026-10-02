import type { MetadataRoute } from "next";
import { site, projects } from "@/data/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  return [site.url, ...projects.map((p) => `${site.url}/projects/${p.slug}`)].map((url) => ({ url, lastModified: new Date() }));
}
