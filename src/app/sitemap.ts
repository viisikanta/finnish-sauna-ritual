import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://finnishsaunaguide.com";

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/sauna-etiquette", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/sauna-etiquette/first-time", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/sauna-etiquette/germany", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sauna-accessories", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/sauna-accessories/sauna-hats", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sauna-accessories/bucket-and-ladle", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sauna-gift-guide", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/best-saunas", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/best-saunas/finland", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/best-saunas/germany", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/best-saunas/iceland", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/glossary", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
