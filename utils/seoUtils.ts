interface SEOUtilsConfig {
  enabled: boolean;
  generateSitemap?: boolean;
  generateRobotsTxt?: boolean;
  generateMetaTags?: boolean;
  generateStructuredData?: boolean;
  trackPageViews?: boolean;
}

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export class SEOUtils {
  private config: SEOUtilsConfig;
  private currentPage: string = '';

  constructor(config: Partial<SEOUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      generateSitemap: true,
      generateRobotsTxt: true,
      generateMetaTags: true,
      generateStructuredData: true,
      trackPageViews: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      this.setupPageTracking();
      this.setupMetaTagGeneration();
      this.setupStructuredData();
      console.log('SEOUtils initialized');
    }
  }

  private setupPageTracking(): void {
    if (!this.config.trackPageViews) return;

    if (typeof window === 'undefined') return;

    // Track page views
    const trackPageView = (url: string) => {
      this.currentPage = url;
      
      // Send to analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: url
        });
      }
    };

    // Track initial page load
    trackPageView(window.location.pathname);

    // Track route changes (for SPA)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      trackPageView(window.location.pathname);
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      trackPageView(window.location.pathname);
    };

    window.addEventListener('popstate', () => {
      trackPageView(window.location.pathname);
    });
  }

  private setupMetaTagGeneration(): void {
    if (!this.config.generateMetaTags) return;

    // Set up dynamic meta tag updates
    this.updateMetaTags = (tags: MetaTag[]) => {
      tags.forEach(tag => {
        const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
        let element = document.querySelector(selector) as HTMLMetaElement;
        
        if (!element) {
          element = document.createElement('meta');
          if (tag.name) element.name = tag.name;
          if (tag.property) element.setAttribute('property', tag.property);
          document.head.appendChild(element);
        }
        
        element.content = tag.content;
      });
    };
  }

  private setupStructuredData(): void {
    if (!this.config.generateStructuredData) return;

    this.addStructuredData = (data: StructuredData) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };
  }

  // Public method for updating meta tags
  updateMetaTags: (tags: MetaTag[]) => void = () => {};

  // Public method for adding structured data
  addStructuredData: (data: StructuredData) => void = () => {};

  // Generate page-specific meta tags
  generatePageMetaTags(pageData: {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
  }): MetaTag[] {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const fullUrl = pageData.url ? `${baseUrl}${pageData.url}` : baseUrl;
    const imageUrl = pageData.image ? `${baseUrl}${pageData.image}` : `${baseUrl}/og-image.jpg`;

    return [
      { name: 'title', content: pageData.title },
      { name: 'description', content: pageData.description },
      { name: 'keywords', content: pageData.keywords || '' },
      { property: 'og:title', content: pageData.title },
      { property: 'og:description', content: pageData.description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: pageData.type || 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageData.title },
      { name: 'twitter:description', content: pageData.description },
      { name: 'twitter:image', content: imageUrl },
    ];
  }

  // Generate organization structured data
  generateOrganizationStructuredData(orgData: {
    name: string;
    description: string;
    url: string;
    logo?: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    contactPoint?: {
      telephone: string;
      contactType: string;
      email?: string;
    };
  }): StructuredData {
    const structuredData: StructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: orgData.name,
      description: orgData.description,
      url: orgData.url,
    };

    if (orgData.logo) {
      structuredData.logo = orgData.logo;
    }

    if (orgData.address) {
      structuredData.address = {
        '@type': 'PostalAddress',
        ...orgData.address,
      };
    }

    if (orgData.contactPoint) {
      structuredData.contactPoint = {
        '@type': 'ContactPoint',
        ...orgData.contactPoint,
      };
    }

    return structuredData;
  }

  // Generate service structured data
  generateServiceStructuredData(serviceData: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
    serviceType: string;
    offers?: {
      price: string;
      priceCurrency: string;
      availability: string;
    };
  }): StructuredData {
    const structuredData: StructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceData.name,
      description: serviceData.description,
      provider: {
        '@type': 'Organization',
        name: serviceData.provider,
      },
      areaServed: serviceData.areaServed,
      serviceType: serviceData.serviceType,
    };

    if (serviceData.offers) {
      structuredData.offers = {
        '@type': 'Offer',
        ...serviceData.offers,
      };
    }

    return structuredData;
  }

  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData(breadcrumbs: Array<{
    name: string;
    url: string;
  }>): StructuredData {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  }

  // Generate FAQ structured data
  generateFAQStructuredData(faqs: Array<{
    question: string;
    answer: string;
  }>): StructuredData {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  // Generate sitemap
  generateSitemap(pages: Array<{
    url: string;
    lastModified: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }>): string {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${page.lastModified}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changeFrequency}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    return sitemap;
  }

  // Generate robots.txt
  generateRobotsTxt(disallowPaths: string[] = []): string {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    
    let robots = `User-agent: *\n`;
    robots += `Allow: /\n`;
    
    disallowPaths.forEach(path => {
      robots += `Disallow: ${path}\n`;
    });
    
    robots += `\nSitemap: ${baseUrl}/sitemap.xml`;
    return robots;
  }

  // Get current page
  getCurrentPage(): string {
    return this.currentPage;
  }
}

export const seoUtils = new SEOUtils();
export default seoUtils;