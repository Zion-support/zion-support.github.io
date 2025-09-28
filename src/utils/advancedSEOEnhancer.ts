/**
 * Advanced SEO Enhancer
 * Provides comprehensive SEO optimization utilities
 */

interface SEOConfig {
  enableStructuredData: boolean;
  enableMetaOptimization: boolean;
  enableSitemapGeneration: boolean;
  enableRobotsTxt: boolean;
  enableCanonicalUrls: boolean;
  enableOpenGraph: boolean;
  enableTwitterCards: boolean;
  enableSchemaMarkup: boolean;
  enableBreadcrumbs: boolean;
  enableInternalLinking: boolean;
}

interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

class AdvancedSEOEnhancer {
  private config: SEOConfig;
  private currentPageData: PageSEOData | null = null;

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      enableStructuredData: true,
      enableMetaOptimization: true,
      enableSitemapGeneration: true,
      enableRobotsTxt: true,
      enableCanonicalUrls: true,
      enableOpenGraph: true,
      enableTwitterCards: true,
      enableSchemaMarkup: true,
      enableBreadcrumbs: true,
      enableInternalLinking: true,
      ...config,
    };
  }

  /**
   * Initialize SEO enhancer
   */
  public async initialize(): Promise<void> {
    try {
      if (this.config.enableRobotsTxt) {
        await this.generateRobotsTxt();
      }

      if (this.config.enableSitemapGeneration) {
        await this.generateSitemap();
      }

      if (this.config.enableStructuredData) {
        this.setupStructuredData();
      }

      console.log("Advanced SEO Enhancer initialized successfully");
    } catch (error) {
      console.error("Failed to initialize Advanced SEO Enhancer:", error);
    }
  }

  /**
   * Optimize page SEO
   */
  public optimizePage(pageData: PageSEOData): void {
    this.currentPageData = pageData;

    if (this.config.enableMetaOptimization) {
      this.optimizeMetaTags(pageData);
    }

    if (this.config.enableCanonicalUrls) {
      this.setCanonicalUrl(pageData.canonical);
    }

    if (this.config.enableOpenGraph) {
      this.setOpenGraphTags(pageData);
    }

    if (this.config.enableTwitterCards) {
      this.setTwitterCardTags(pageData);
    }

    if (this.config.enableSchemaMarkup && pageData.structuredData) {
      this.addStructuredData(pageData.structuredData);
    }

    if (this.config.enableBreadcrumbs && pageData.breadcrumbs) {
      this.addBreadcrumbs(pageData.breadcrumbs);
    }
  }

  /**
   * Optimize meta tags
   */
  private optimizeMetaTags(pageData: PageSEOData): void {
    // Update title
    document.title = pageData.title;

    // Update meta description
    this.updateMetaTag("description", pageData.description);

    // Update keywords
    if (pageData.keywords.length > 0) {
      this.updateMetaTag("keywords", pageData.keywords.join(", "));
    }

    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement("meta");
      viewport.name = "viewport";
      viewport.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(viewport);
    }

    // Add language meta tag
    this.updateMetaTag("language", "en");

    // Add author meta tag
    this.updateMetaTag("author", "Zion Tech Group");

    // Add robots meta tag
    this.updateMetaTag("robots", "index, follow");

    // Add charset if not present
    if (!document.querySelector("meta[charset]")) {
      const charset = document.createElement("meta");
      charset.setAttribute("charset", "UTF-8");
      document.head.insertBefore(charset, document.head.firstChild);
    }
  }

  /**
   * Set canonical URL
   */
  private setCanonicalUrl(url: string): void {
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

  /**
   * Set Open Graph tags
   */
  private setOpenGraphTags(pageData: PageSEOData): void {
    const ogTags = [
      { property: "og:title", content: pageData.ogTitle || pageData.title },
      {
        property: "og:description",
        content: pageData.ogDescription || pageData.description,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageData.canonical },
      { property: "og:site_name", content: "Zion Tech Group" },
      { property: "og:locale", content: "en_US" },
    ];

    if (pageData.ogImage) {
      ogTags.push({ property: "og:image", content: pageData.ogImage });
    }

    ogTags.forEach((tag) => {
      this.updateMetaTag(tag.property, tag.content, "property");
    });
  }

  /**
   * Set Twitter Card tags
   */
  private setTwitterCardTags(pageData: PageSEOData): void {
    const twitterTags = [
      {
        name: "twitter:card",
        content: pageData.twitterCard || "summary_large_image",
      },
      {
        name: "twitter:title",
        content: pageData.twitterTitle || pageData.title,
      },
      {
        name: "twitter:description",
        content: pageData.twitterDescription || pageData.description,
      },
      { name: "twitter:site", content: "@ZionTechGroup" },
    ];

    if (pageData.twitterImage) {
      twitterTags.push({
        name: "twitter:image",
        content: pageData.twitterImage,
      });
    }

    twitterTags.forEach((tag) => {
      this.updateMetaTag(tag.name, tag.content);
    });
  }

  /**
   * Add structured data
   */
  private addStructuredData(structuredData: Record<string, unknown>): void {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  /**
   * Add breadcrumbs
   */
  private addBreadcrumbs(
    breadcrumbs: Array<{ name: string; url: string }>,
  ): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };

    this.addStructuredData(structuredData);
  }

  /**
   * Update or create meta tag
   */
  private updateMetaTag(
    name: string,
    content: string,
    attribute: string = "name",
  ): void {
    let meta = document.querySelector(
      `meta[${attribute}="${name}"]`,
    ) as HTMLMetaElement;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }

    meta.content = content;
  }

  /**
   * Generate robots.txt
   */
  private async generateRobotsTxt(): Promise<void> {
    const robotsContent = `User-agent: *
Allow: /

Sitemap: ${window.location.origin}/sitemap.xml
`;

    // In a real implementation, this would be served by the server
    console.log("Robots.txt content:", robotsContent);
  }

  /**
   * Generate sitemap
   */
  private async generateSitemap(): Promise<void> {
    const pages = [
      { url: "/", priority: "1.0", changefreq: "daily" },
      { url: "/about", priority: "0.8", changefreq: "monthly" },
      { url: "/services", priority: "0.9", changefreq: "weekly" },
      { url: "/contact", priority: "0.7", changefreq: "monthly" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${window.location.origin}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`,
  )
  .join("\n")}
</urlset>`;

    // In a real implementation, this would be served by the server
    console.log("Sitemap content:", sitemap);
  }

  /**
   * Setup default structured data
   */
  private setupStructuredData(): void {
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Zion Tech Group",
      url: window.location.origin,
      logo: `${window.location.origin}/logo.png`,
      description: "Leading AI & Technology Solutions provider",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      sameAs: [
        "https://twitter.com/ZionTechGroup",
        "https://linkedin.com/company/zion-tech-group",
      ],
    };

    this.addStructuredData(organizationData);
  }

  /**
   * Get current page SEO data
   */
  public getCurrentPageData(): PageSEOData | null {
    return this.currentPageData;
  }

  /**
   * Generate SEO report
   */
  public generateSEOReport(): string {
    if (!this.currentPageData) {
      return "No page data available for SEO report";
    }

    const data = this.currentPageData;
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Check title length
    if (data.title.length < 30 || data.title.length > 60) {
      issues.push(
        `Title length should be 30-60 characters (current: ${data.title.length})`,
      );
    } else {
      recommendations.push("Title length is optimal");
    }

    // Check description length
    if (data.description.length < 120 || data.description.length > 160) {
      issues.push(
        `Description length should be 120-160 characters (current: ${data.description.length})`,
      );
    } else {
      recommendations.push("Description length is optimal");
    }

    // Check for missing Open Graph image
    if (!data.ogImage) {
      issues.push("Missing Open Graph image");
    } else {
      recommendations.push("Open Graph image is present");
    }

    // Check for missing keywords
    if (data.keywords.length === 0) {
      issues.push("No keywords specified");
    } else {
      recommendations.push("Keywords are specified");
    }

    // Calculate score based on issues
    const score = Math.max(0, 100 - issues.length * 20);

    return `
SEO Report:
- Issues Found: ${issues.length}
- Recommendations: ${recommendations.length}
- Score: ${score}/100
`;
  }
}

// Export singleton instance
export const seoEnhancer = new AdvancedSEOEnhancer();
export { AdvancedSEOEnhancer };
export type { SEOConfig, PageSEOData };
