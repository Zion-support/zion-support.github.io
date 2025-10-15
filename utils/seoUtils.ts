/**
 * SEO utilities for better search engine optimization
 */

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle?: string;
  facebookAppId?: string;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "product" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

class SEOOptimizer {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  generateMetaTags(pageSEO: PageSEO): Record<string, string> {
    const {
      title,
      description,
      keywords,
      image,
      url,
      type = "website",
      publishedTime,
      modifiedTime,
      author,
      section,
      tags,
    } = pageSEO;

    const fullTitle = title
      ? `${title} | ${this.config.siteName}`
      : this.config.defaultTitle;
    const fullDescription = description || this.config.defaultDescription;
    const fullImage = image || this.config.defaultImage;
    const fullUrl = url ? `${this.config.siteUrl}${url}` : this.config.siteUrl;

    const metaTags: Record<string, string> = {
      // Basic meta tags
      title: fullTitle,
      description: fullDescription,
      viewport: "width=device-width, initial-scale=1.0",
      robots: "index, follow",
      language: "en",
      "revisit-after": "7 days",

      // Open Graph tags
      "og:title": fullTitle,
      "og:description": fullDescription,
      "og:image": fullImage,
      "og:url": fullUrl,
      "og:type": type,
      "og:site_name": this.config.siteName,
      "og:locale": "en_US",

      // Twitter Card tags
      "twitter:card": "summary_large_image",
      "twitter:title": fullTitle,
      "twitter:description": fullDescription,
      "twitter:image": fullImage,
    };

    // Add Twitter handle if available
    if (this.config.twitterHandle) {
      metaTags["twitter:site"] = `@${this.config.twitterHandle}`;
      metaTags["twitter:creator"] = `@${this.config.twitterHandle}`;
    }

    // Add Facebook App ID if available
    if (this.config.facebookAppId) {
      metaTags["fb:app_id"] = this.config.facebookAppId;
    }

    // Add keywords if provided
    if (keywords && keywords.length > 0) {
      metaTags["keywords"] = keywords.join(", ");
    }

    // Add article-specific tags
    if (type === "article") {
      if (publishedTime) {
        metaTags["article:published_time"] = publishedTime;
        metaTags["og:article:published_time"] = publishedTime;
      }
      if (modifiedTime) {
        metaTags["article:modified_time"] = modifiedTime;
        metaTags["og:article:modified_time"] = modifiedTime;
      }
      if (author) {
        metaTags["article:author"] = author;
        metaTags["og:article:author"] = author;
      }
      if (section) {
        metaTags["article:section"] = section;
        metaTags["og:article:section"] = section;
      }
      if (tags && tags.length > 0) {
        tags.forEach((tag, index) => {
          metaTags[`article:tag:${index}`] = tag;
        });
      }
    }

    return metaTags;
  }

  generateStructuredData(pageSEO: PageSEO): object {
    const {
      title,
      description,
      image,
      url,
      type,
      publishedTime,
      modifiedTime,
      author,
    } = pageSEO;

    const fullTitle = title
      ? `${title} | ${this.config.siteName}`
      : this.config.defaultTitle;
    const fullDescription = description || this.config.defaultDescription;
    const fullImage = image || this.config.defaultImage;
    const fullUrl = url ? `${this.config.siteUrl}${url}` : this.config.siteUrl;

    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebPage",
      name: fullTitle,
      description: fullDescription,
      url: fullUrl,
      image: fullImage,
      publisher: {
        "@type": "Organization",
        name: this.config.siteName,
        url: this.config.siteUrl,
      },
    };

    if (type === "article" && publishedTime) {
      return {
        ...baseStructuredData,
        "@type": "Article",
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: author
          ? {
              "@type": "Person",
              name: author,
            }
          : undefined,
        headline: title,
      };
    }

    return baseStructuredData;
  }

  generateSitemap(
    pages: Array<{
      url: string;
      lastmod?: string;
      changefreq?: string;
      priority?: number;
    }>,
  ): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${this.config.siteUrl}${page.url}</loc>
    ${page.lastmod ? `    <lastmod>${page.lastmod}</lastmod>` : ""}
    ${page.changefreq ? `    <changefreq>${page.changefreq}</changefreq>` : ""}
    ${page.priority ? `    <priority>${page.priority}</priority>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>`;

    return sitemap;
  }

  generateRobotsTxt(allowAll: boolean = true, sitemapUrl?: string): string {
    const robotsTxt = `User-agent: *
${allowAll ? "Allow: /" : "Disallow: /"}

${sitemapUrl ? `Sitemap: ${sitemapUrl}` : ""}`;

    return robotsTxt;
  }

  // Utility functions
  slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
  }

  extractKeywords(text: string, maxKeywords: number = 10): string[] {
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter((word) => word.length > 3);

    const wordCount: Record<string, number> = {};
    words.forEach((word) => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return Object.entries(wordCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, maxKeywords)
      .map(([word]) => word);
  }
}

// Default SEO configuration
const defaultSEOConfig: SEOConfig = {
  siteName: "Zion Tech Group",
  siteUrl: "https://ziontechgroup.com",
  defaultTitle: "Zion Tech Group - Advanced AI and IT Solutions",
  defaultDescription:
    "Leading provider of AI and IT solutions for businesses worldwide. Expert consulting, development, and implementation services.",
  defaultImage: "https://ziontechgroup.com/og-image.jpg",
  twitterHandle: "ziontechgroup",
};

// Create default SEO optimizer instance
export const seoOptimizer = new SEOOptimizer(defaultSEOConfig);

// Export utility functions
export const generateMetaTags = (pageSEO: PageSEO): Record<string, string> => {
  return seoOptimizer.generateMetaTags(pageSEO);
};

export const generateStructuredData = (pageSEO: PageSEO): object => {
  return seoOptimizer.generateStructuredData(pageSEO);
};

export const generateSitemap = (
  pages: Array<{
    url: string;
    lastmod?: string;
    changefreq?: string;
    priority?: number;
  }>,
): string => {
  return seoOptimizer.generateSitemap(pages);
};

export const generateRobotsTxt = (
  allowAll: boolean = true,
  sitemapUrl?: string,
): string => {
  return seoOptimizer.generateRobotsTxt(allowAll, sitemapUrl);
};

export const slugify = (text: string): string => {
  return seoOptimizer.slugify(text);
};

export const truncateText = (text: string, maxLength: number): string => {
  return seoOptimizer.truncateText(text, maxLength);
};

export const extractKeywords = (
  text: string,
  maxKeywords: number = 10,
): string[] => {
  return seoOptimizer.extractKeywords(text, maxKeywords);
};

// Export the SEOOptimizer class
export { SEOOptimizer };
