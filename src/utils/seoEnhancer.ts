/**
 * Advanced SEO Enhancer
 * Comprehensive SEO optimization utilities
 */
interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: unknown;
  robots?: string;
  language?: string;
  author?: string;
  publisher?: string;
  lastModified?: string;
}
class SEOEnhancer {
  private config: SEOConfig;
  constructor(config: SEOConfig) {
    this.config = config;
  }
  initialize(): void {
    this.updateTitle();
    this.updateMetaTags();
    this.updateStructuredData();
    this.updateCanonicalUrl();
  }
private setTitle(): void {
    document.title = title;
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  }
private setOpenGraphTags(): void {
    const ogTags: MetaTag[] = [
      { property: 'og:type', content: this.config.ogType || 'website' },
      { property: 'og:url', content: this.config.canonicalUrl },
      { property: 'og:title', content: this.config.title },
      { property: 'og:description', content: this.config.description },
      { property: 'og:image', content: this.config.ogImage || `${this.baseUrl}/og-image.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: this.config.title },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' }
    ];
    ogTags.forEach(tag => {
      this.updateOrCreateMetaTag('property', tag.property!, tag.content);
    });
  }
  private setTwitterTags(): void {
    const twitterTags: MetaTag[] = [
      { name: 'twitter:card', content: this.config.twitterCard || 'summary_large_image' },
      { name: 'twitter:url', content: this.config.canonicalUrl },
      { name: 'twitter:title', content: this.config.title },
      { name: 'twitter:description', content: this.config.description },
      { name: 'twitter:image', content: this.config.ogImage || `${this.baseUrl}/og-image.jpg` },
      { name: 'twitter:image:alt', content: this.config.title },
      { name: 'twitter:site', content: '@ziontechgroup' },
      { name: 'twitter:creator', content: '@ziontechgroup' }
    ];
    twitterTags.forEach(tag => {
      this.updateOrCreateMetaTag('name', tag.name!, tag.content);
    });
  }
  private setStructuredData(): void {
    if (!this.config.structuredData) return;
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(this.config.structuredData);
    document.head.appendChild(script);
  }
  private setCanonicalUrl(): void {
    // Remove existing canonical
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    // Add new canonical
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = this.config.canonicalUrl;
    document.head.appendChild(canonical);
  }
  private setAlternateUrls(): void {
    if (!this.config.alternateUrls) return;
    Object.entries(this.config.alternateUrls).forEach(([hreflang, url]) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = url;
      document.head.appendChild(link);
    });
  }
  private setRobotsMeta(): void {
    this.updateOrCreateMetaTag('name', 'robots', this.config.robots || 'index, follow');
  }
  private optimizeImages(): void {
    // Add loading="lazy" to images below the fold
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach((img, index) => {
      if (index > 2) { // Skip first 3 images (likely above the fold)
        img.setAttribute('loading', 'lazy');
      }
    });
    // Add alt attributes to images without them
    images.forEach(img => {
      if (!img.getAttribute('alt')) {
        img.setAttribute('alt', this.config.title);
      }
    });
  }
  private setupBreadcrumbs(): void {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: this.baseUrl
        }
      ]
    };
    // Add breadcrumb structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);
  }
  private updateOrCreateMetaTag(attribute: 'name' | 'property', value: string, content: string): void {
    const selector = `meta[${attribute}="${value}"]`;
    if (meta) {
      meta.content = content;
    } else {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, value);
      meta.content = content;
      document.head.appendChild(meta);
    }
  }
  private updateCanonicalUrl(): void {
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = this.config.canonicalUrl;
  }
  generateSitemap(): string {
    // This would typically generate a sitemap XML
    // For now, return a simple structure
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${this.config.canonicalUrl}</loc>
    <lastmod>${this.config.lastModified || new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  }
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: ${this.config.canonicalUrl}/sitemap.xml`;
  }
}
export default SEOEnhancer;