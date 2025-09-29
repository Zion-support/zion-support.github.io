/**
 * SEO utilities for enhanced search engine optimization
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export class SEOOptimizer {
  private static instance: SEOOptimizer;

  public static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  public updateMetaTags(data: SEOData): void {
    // Update title
    document.title = data.title;

    // Update meta description
    this.updateMetaTag("description", data.description);

    // Update keywords
    if (data.keywords) {
      this.updateMetaTag("keywords", data.keywords.join(", "));
    }

    // Update Open Graph tags
    this.updateOpenGraphTags(data);

    // Update Twitter Card tags
    this.updateTwitterCardTags(data);

    // Update canonical URL
    if (data.url) {
      this.updateCanonicalUrl(data.url);
    }

    // Update structured data
    this.updateStructuredData(data);
  }

  private updateMetaTag(name: string, content: string): void {
    let meta = document.querySelector(
      `meta[name="${name}"]`,
    ) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private updateOpenGraphTags(data: SEOData): void {
    const ogTags = {
      "og:title": data.title,
      "og:description": data.description,
      "og:type": data.type || "website",
      "og:url": data.url || window.location.href,
      "og:image": data.image || "/images/og-default.jpg",
      "og:site_name": "Zion Tech Group",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(
        `meta[property="${property}"]`,
      ) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });
  }

  private updateTwitterCardTags(data: SEOData): void {
    const twitterTags = {
      "twitter:card": "summary_large_image",
      "twitter:title": data.title,
      "twitter:description": data.description,
      "twitter:image": data.image || "/images/twitter-default.jpg",
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let meta = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    });
  }

  private updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  private updateStructuredData(data: SEOData): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": data.type === "article" ? "Article" : "WebPage",
      name: data.title,
      description: data.description,
      url: data.url || window.location.href,
      ...(data.image && { image: data.image }),
      ...(data.author && { author: { "@type": "Person", name: data.author } }),
      ...(data.publishedTime && { datePublished: data.publishedTime }),
      ...(data.modifiedTime && { dateModified: data.modifiedTime }),
    };

    // Remove existing structured data
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]',
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  public generateSitemap(): string {
    const baseUrl = "https://ziontechgroup.com";
    const pages = [
      { url: "/", priority: "1.0", changefreq: "daily" },
      { url: "/blog", priority: "0.8", changefreq: "weekly" },
      { url: "/contact", priority: "0.7", changefreq: "monthly" },
      { url: "/services", priority: "0.9", changefreq: "weekly" },
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach((page) => {
      sitemap += "  <url>\n";
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += "  </url>\n";
    });

    sitemap += "</urlset>";
    return sitemap;
  }
}

export const seoOptimizer = SEOOptimizer.getInstance();
