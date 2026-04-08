import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.finnishsaunaguide.com";

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const, lastModified: "2026-04-08" },
    { url: "/sauna-etiquette", priority: 0.9, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/sauna-etiquette/first-time", priority: 0.9, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/sauna-etiquette/germany", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/sauna-accessories", priority: 0.9, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/sauna-accessories/sauna-hats", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/sauna-accessories/bucket-and-ladle", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/sauna-gift-guide", priority: 0.9, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/best-saunas", priority: 0.9, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/best-saunas/finland", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/best-saunas/germany", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/best-saunas/iceland", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/faq", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/glossary", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
    { url: "/about", priority: 0.5, changeFrequency: "yearly" as const, lastModified: "2026-03-15" },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
