import type { MetadataRoute } from "next";
<<<<<<< HEAD

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
  ];
}
=======
>>>>>>> origin/main

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: "https://example.com/", lastModified: new Date() },
		{ url: "https://example.com/about", lastModified: new Date() },
	];
}
