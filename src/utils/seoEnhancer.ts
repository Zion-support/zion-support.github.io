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
  structuredData?: any;
  robots?: string;
  language?: string;
  author?: string;
  publisher?: string;
  lastModified?: string;
  alternateUrls?: { [key: string]: string };
}

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
  key?: string;
}

class SEOEnhancer {
  private config: SEOConfig;
  private baseUrl: string;

  constructor(config: SEOConfig) {
    this.config = config;
    this.baseUrl = 'https://ziontechgroup.com';
    this.init();
  }

  private init(): void {
    this.setTitle();
    this.setMetaTags();
    this.setOpenGraphTags();
    this.setTwitterTags();
    this.setStructuredData();
    this.setCanonicalUrl();
    this.setAlternateUrls();
    this.setRobotsMeta();
    this.optimizeImages();
    this.setupBreadcrumbs();
  }

  private setTitle(): void {
    const _title = this.config.title || 'Zion Tech Group - Advanced AI and IT Solutions';
    document.title = title;
    
    // Update meta title
    this.updateOrCreateMetaTag('name', 'title', title);
  }

  private setMetaTags(): void {
    const metaTags: MetaTag[] = [
      { name: 'description', content: this.config.description },
      { name: 'keywords', content: this.config.keywords.join(', ') },
      { name: 'author', content: this.config.author || 'Zion Tech Group' },
      { name: 'publisher', content: this.config.publisher || 'Zion Tech Group' },
      { name: 'language', content: this.config.language || 'en' },
      { name: 'robots', content: this.config.robots || 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'revisit-after', content: '3 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },
      { name: 'format-detection', content: 'telephone=yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: this.config.title },
      { name: 'application-name', content: 'Zion Tech Group' },
      { name: 'msapplication-TileColor', content: '#4f46e5' },
      { name: 'theme-color', content: '#4f46e5' },
      { name: 'color-scheme', content: 'dark light' }
    ];

    if (this.config.lastModified) {
      metaTags.push({ name: 'last-modified', content: this.config.lastModified });
    }

    metaTags.forEach(tag => {
      this.updateOrCreateMetaTag('name', tag.name!, tag.content);
    });
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
    let _meta = document.querySelector(selector) as HTMLMetaElement;

    if (meta) {
      meta.content = content;
    } else {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, value);
      meta.content = content;
      document.head.appendChild(meta);
    }
  }

  public generateSitemap(): string {
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
      { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' },
      { url: '/about', priority: '0.7', changefreq: 'monthly' }
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${this.baseUrl}${page.url}</loc>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';
    return sitemap;
  }

  public generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: ${this.baseUrl}/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`;
  }

  public optimizeForCoreWebVitals(): void {
    // Optimize LCP
    this.optimizeLCP();
    
    // Optimize FID
    this.optimizeFID();
    
    // Optimize CLS
    this.optimizeCLS();
  }

  private optimizeLCP(): void {
    // Preload critical resources
    const criticalResources = [
      '/assets/index.css',
      '/assets/vendor.js',
      '/assets/index.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  private optimizeFID(): void {
    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[src]:not([defer]):not([async])');
    scripts.forEach(script => {
      if (!script.src.includes('critical')) {
        script.defer = true;
      }
    });
  }

  private optimizeCLS(): void {
    // Add dimensions to images to prevent layout shift
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.style.width = img.naturalWidth + 'px';
        img.style.height = img.naturalHeight + 'px';
      });
    });
  }
}

export default SEOEnhancer;