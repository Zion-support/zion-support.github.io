export const seoUtils = {
  // Generate meta tags
  generateMetaTags: (
    title: string,
    description: string,
    keywords?: string[],
  ) => {
    return {
      title,
      description,
      keywords: keywords?.join(", "),
      "og:title": title,
      "og:description": description,
      "twitter:title": title,
      "twitter:description": description,
    };
  },

  // Generate structured data
  generateStructuredData: (type: string, data: any) => {
    return {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };
  },

  // Generate sitemap entry
  generateSitemapEntry: (
    url: string,
    lastmod: string,
    changefreq: string = "weekly",
    priority: number = 0.5,
  ) => {
    return {
      url,
      lastmod,
      changefreq,
      priority,
    };
  },
};
