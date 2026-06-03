import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-02");

  return [
    {
      url: "https://nexusdentallab.com/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
