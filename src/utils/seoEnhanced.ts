/**
 * Enhanced SEO utilities with advanced features
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>[];
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLanguages?: { hreflang: string; href: string }[];
}

class SEOManager {
  private static instance: SEOManager;
  private currentData: SEOData | null = null;

  public static getInstance(): SEOManager {
    if (!SEOManager.instance) {
      SEOManager.instance = new SEOManager();
    }
    return SEOManager.instance;
  }

  public updateSEO(data: SEOData): void {
    this.currentData = data;
    this.updateTitle(data.title);
    this.updateMetaTags(data);
    this.updateOpenGraph(data);
    this.updateTwitterCard(data);
    this.updateStructuredData(data.structuredData);
    this.updateCanonical(data.canonical);
    this.updateAlternateLanguages(data.alternateLanguages);
  }

  private updateTitle(title: string): void {
    document.title = title;
  }

  private updateMetaTags(data: SEOData): void {
    this.setMetaTag('description', data.description);
    
    if (data.keywords?.length) {
      this.setMetaTag('keywords', data.keywords.join(', '));
    }

    if (data.robots) {
      this.setMetaTag('robots', data.robots);
    }

    if (data.author) {
      this.setMetaTag('author', data.author);
    }

    if (data.publishedTime) {
      this.setMetaTag('article:published_time', data.publishedTime);
    }

    if (data.modifiedTime) {
      this.setMetaTag('article:modified_time', data.modifiedTime);
    }

    if (data.section) {
      this.setMetaTag('article:section', data.section);
    }

    if (data.tags?.length) {
      data.tags.forEach(tag => {
        this.addMetaTag('article:tag', tag);
      });
    }

    if (data.locale) {
      this.setMetaTag('og:locale', data.locale);
    }

    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      this.setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    }

    // Add charset meta tag if not present
    if (!document.querySelector('meta[charset]')) {
      const charsetMeta = document.createElement('meta');
      charsetMeta.setAttribute('charset', 'utf-8');
      document.head.insertBefore(charsetMeta, document.head.firstChild);
    }
  }

  private updateOpenGraph(data: SEOData): void {
    this.setMetaTag('og:title', data.ogTitle || data.title, 'property');
    this.setMetaTag('og:description', data.ogDescription || data.description, 'property');
    this.setMetaTag('og:type', data.ogType || 'website', 'property');
    this.setMetaTag('og:url', data.canonical || window.location.href, 'property');
    
    if (data.ogImage) {
      this.setMetaTag('og:image', data.ogImage, 'property');
      this.setMetaTag('og:image:alt', data.ogTitle || data.title, 'property');
    }

    // Add site name if not present
    if (!document.querySelector('meta[property="og:site_name"]')) {
      this.setMetaTag('og:site_name', 'Zion Tech Group', 'property');
    }
  }

  private updateTwitterCard(data: SEOData): void {
    this.setMetaTag('twitter:card', data.twitterCard || 'summary_large_image', 'name');
    this.setMetaTag('twitter:title', data.twitterTitle || data.ogTitle || data.title, 'name');
    this.setMetaTag('twitter:description', data.twitterDescription || data.ogDescription || data.description, 'name');
    
    if (data.twitterImage || data.ogImage) {
      this.setMetaTag('twitter:image', data.twitterImage || data.ogImage!, 'name');
    }

    // Add Twitter site handle if not present
    if (!document.querySelector('meta[name="twitter:site"]')) {
      this.setMetaTag('twitter:site', '@ziontechgroup', 'name');
    }
  }

  private updateStructuredData(structuredData?: Record<string, unknown>[]): void {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
      if (script.getAttribute('data-seo-manager') === 'true') {
        script.remove();
      }
    });

    if (structuredData?.length) {
      structuredData.forEach(data => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-manager', 'true');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }
  }

  private updateCanonical(canonical?: string): void {
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.href = canonical || window.location.href;
  }

  private updateAlternateLanguages(alternateLanguages?: { hreflang: string; href: string }[]): void {
    // Remove existing alternate language links
    const existingAlternates = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingAlternates.forEach(link => link.remove());

    if (alternateLanguages?.length) {
      alternateLanguages.forEach(({ hreflang, href }) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hreflang;
        link.href = href;
        document.head.appendChild(link);
      });
    }
  }

  private setMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name'): void {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }

    meta.content = content;
  }

  private addMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name'): void {
    const meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    meta.content = content;
    document.head.appendChild(meta);
  }

  public getCurrentData(): SEOData | null {
    return this.currentData;
  }

  public generateBreadcrumbStructuredData(breadcrumbs: { name: string; url: string }[]): Record<string, unknown> {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  }

  public generateArticleStructuredData(article: {
    headline: string;
    description: string;
    author: string;
    publishedDate: string;
    modifiedDate?: string;
    image?: string;
    url: string;
  }): Record<string, unknown> {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "description": article.description,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": "/logo.png"
        }
      },
      "datePublished": article.publishedDate,
      "dateModified": article.modifiedDate || article.publishedDate,
      "image": article.image ? {
        "@type": "ImageObject",
        "url": article.image
      } : undefined,
      "url": article.url
    };
  }

  public generateOrganizationStructuredData(): Record<string, unknown> {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading technology solutions and consulting services",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "email": "support@ziontechgroup.com"
      },
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup",
        "https://github.com/zion-holdings"
      ]
    };
  }

  public generateWebsiteStructuredData(): Record<string, unknown> {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "description": "Leading technology solutions and consulting services",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ziontechgroup.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };
  }
}

// Export singleton instance
export const seoManager = SEOManager.getInstance();

// Convenience functions
export const updateSEO = (data: SEOData) => {
  seoManager.updateSEO(data);
};

export const getCurrentSEOData = () => {
  return seoManager.getCurrentData();
};

// SEO validation utilities
export const validateSEO = (data: SEOData): { isValid: boolean; warnings: string[] } => {
  const warnings: string[] = [];

  if (!data.title) {
    warnings.push('Title is required');
  } else if (data.title.length > 60) {
    warnings.push('Title should be under 60 characters');
  }

  if (!data.description) {
    warnings.push('Description is required');
  } else if (data.description.length > 160) {
    warnings.push('Description should be under 160 characters');
  }

  if (data.keywords && data.keywords.length > 10) {
    warnings.push('Consider using fewer than 10 keywords');
  }

  if (!data.ogImage) {
    warnings.push('Open Graph image is recommended');
  }

  return {
    isValid: warnings.length === 0,
    warnings
  };
};