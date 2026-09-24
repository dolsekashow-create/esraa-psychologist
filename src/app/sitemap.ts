import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...articles.map((a) => ({ url: `${site.url}/articles/${a.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
