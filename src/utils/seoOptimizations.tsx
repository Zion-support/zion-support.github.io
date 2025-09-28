/**
 * Enhanced SEO Optimization Utilities
 * Comprehensive SEO tools for better search engine visibility
 */

import { Helmet } from "react-helmet-async";

/**
 * SEO metadata interface
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "product" | "profile";
  siteName?: string;
  locale?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Open Graph metadata interface
 */
export interface OpenGraphMetadata {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
}

/**
 * Twitter Card metadata interface
 */
export interface TwitterCardMetadata {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

/**
 * Structured data interface
 */
export interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

/**
 * SEO optimization hook
 */
export function useSEOOptimization() {
  /**
   * Generate optimized meta tags
   */
  const generateMetaTags = (metadata: SEOMetadata) => {
    const {
      title,
      description,
      keywords,
      image,
      url,
      type = "website",
      siteName = "Zion Tech Group",
      locale = "en_US",
      canonical,
      noindex = false,
      nofollow = false,
    } = metadata;

    const robotsContent = [
      noindex ? "noindex" : "index",
      nofollow ? "nofollow" : "follow",
    ].join(", ");

    return (
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords.join(", ")} />}
        <meta name="robots" content={robotsContent} />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={locale} />
        {url && <meta property="og:url" content={url} />}
        {image && <meta property="og:image" content={image} />}
        {image && <meta property="og:image:alt" content={title} />}

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
        {image && <meta name="twitter:image:alt" content={title} />}

        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#1f2937" />
        <meta name="msapplication-TileColor" content="#1f2937" />
      </Helmet>
    );
  };

  /**
   * Generate structured data
   */
  const generateStructuredData = (data: StructuredData) => {
    return <script type="application/ld+json">{JSON.stringify(data)}</script>;
  };

  /**
   * Generate breadcrumb structured data
   */
  const generateBreadcrumbStructuredData = (
    items: Array<{ name: string; url: string }>,
  ) => {
    const structuredData: StructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };

    return generateStructuredData(structuredData);
  };

  /**
   * Generate organization structured data
   */
  const generateOrganizationStructuredData = () => {
    const structuredData: StructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Zion Tech Group",
      url: "https://ziontechgroup.com",
      logo: "https://ziontechgroup.com/logo.png",
      description: "Advanced AI and IT Solutions Provider",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-0123",
        contactType: "customer service",
        email: "contact@ziontechgroup.com",
      },
      sameAs: [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
      ],
    };

    return generateStructuredData(structuredData);
  };

  /**
   * Generate service structured data
   */
  const generateServiceStructuredData = (service: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
    serviceType: string;
  }) => {
    const structuredData: StructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: service.provider,
      },
      areaServed: service.areaServed,
      serviceType: service.serviceType,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
    };

    return generateStructuredData(structuredData);
  };

  /**
   * Generate article structured data
   */
  const generateArticleStructuredData = (article: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified: string;
    image?: string;
    url: string;
  }) => {
    const structuredData: StructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      author: {
        "@type": "Person",
        name: article.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Zion Tech Group",
        logo: {
          "@type": "ImageObject",
          url: "https://ziontechgroup.com/logo.png",
        },
      },
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      url: article.url,
    };

    if (article.image) {
      structuredData.image = article.image;
    }

    return generateStructuredData(structuredData);
  };

  /**
   * Optimize page title for SEO
   */
  const optimizeTitle = (title: string, siteName?: string) => {
    const maxLength = 60;
    const siteNameSuffix = siteName ? ` | ${siteName}` : "";

    if (title.length + siteNameSuffix.length <= maxLength) {
      return title + siteNameSuffix;
    }

    const availableLength = maxLength - siteNameSuffix.length - 3; // 3 for "..."
    return title.substring(0, availableLength) + "..." + siteNameSuffix;
  };

  /**
   * Optimize meta description
   */
  const optimizeDescription = (description: string) => {
    const maxLength = 160;

    if (description.length <= maxLength) {
      return description;
    }

    // Try to cut at a sentence boundary
    const sentences = description.split(/[.!?]+/);
    let result = "";

    for (const sentence of sentences) {
      if ((result + sentence).length <= maxLength - 1) {
        result += sentence + ".";
      } else {
        break;
      }
    }

    // If no sentences fit, just truncate
    if (!result) {
      result = description.substring(0, maxLength - 3) + "...";
    }

    return result;
  };

  /**
   * Generate sitemap data
   */
  const generateSitemapData = (
    pages: Array<{
      url: string;
      lastModified: string;
      changeFrequency:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never";
      priority: number;
    }>,
  ) => {
    return pages.map((page) => ({
      url: page.url,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }));
  };

  return {
    generateMetaTags,
    generateStructuredData,
    generateBreadcrumbStructuredData,
    generateOrganizationStructuredData,
    generateServiceStructuredData,
    generateArticleStructuredData,
    optimizeTitle,
    optimizeDescription,
    generateSitemapData,
  };
}

/**
 * SEO performance monitoring
 */
export const seoPerformanceMonitor = {
  /**
   * Track Core Web Vitals for SEO
   */
  trackCoreWebVitals: () => {
    if (typeof window !== "undefined" && "web-vitals" in window) {
      import("web-vitals").then((webVitals) => {
        if (webVitals.onCLS) webVitals.onCLS(console.log);
        if ("onFID" in webVitals)
          (
            webVitals as {
              onFID: (callback: (metric: unknown) => void) => void;
            }
          ).onFID(console.log);
        if (webVitals.onFCP) webVitals.onFCP(console.log);
        if (webVitals.onLCP) webVitals.onLCP(console.log);
        if (webVitals.onTTFB) webVitals.onTTFB(console.log);
      });
    }
  },

  /**
   * Monitor page load performance
   */
  monitorPageLoad: () => {
    if (typeof window !== "undefined" && "performance" in window) {
      window.addEventListener("load", () => {
        const navigation = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;

        console.log("Page Load Performance:", {
          domContentLoaded:
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        });
      });
    }
  },
};
