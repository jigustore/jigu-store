import { _navItems } from "@/lib/data/_navItems";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jigustore.com.np";

  return _navItems.map((item) => ({
    url: `${baseUrl}${item.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: item.url === "/" ? 1.0 : 0.8,
  }));
}
