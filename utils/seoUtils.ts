<<<<<<< HEAD
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export class SEOUtils {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  updateTitle(title: string) {
    document.title = title;
  }

  updateMetaDescription(description: string) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }

  updateMetaKeywords(keywords: string[]) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));
  }

  updateCanonicalUrl(url: string) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  updateOpenGraphTags() {
    const ogTags = [
      { property: 'og:title', content: this.config.title },
      { property: 'og:description', content: this.config.description },
      { property: 'og:url', content: this.config.canonicalUrl },
      { property: 'og:type', content: this.config.ogType || 'website' },
    ];

    if (this.config.ogImage) {
      ogTags.push({ property: 'og:image', content: this.config.ogImage });
    }

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });
  }

  updateTwitterCard() {
    if (this.config.twitterCard) {
      let meta = document.querySelector('meta[name="twitter:card"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'twitter:card');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', this.config.twitterCard);
    }
  }

  generateStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": this.config.description,
      "url": this.config.canonicalUrl,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  applySEO() {
    this.updateTitle(this.config.title);
    this.updateMetaDescription(this.config.description);
    this.updateMetaKeywords(this.config.keywords);
    this.updateCanonicalUrl(this.config.canonicalUrl);
    this.updateOpenGraphTags();
    this.updateTwitterCard();
    this.generateStructuredData();
  }
}

export default SEOUtils;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// seoUtils utility functions
// Utility functions

export interface seoUtilsConfig {
  enabled: boolean;
// Utility functions;
export function utilityFunction() {
  // Implementation here;
  return null;
}

export class seoUtils {
  private config: seoUtilsConfig;
=======
interface SEOUtilsConfig {
  enabled: boolean;
  analytics: boolean;
  sitemap: boolean;
=======
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
<<<<<<< HEAD
=======
  private currentPage: string = '';

  constructor(config: Partial<SEOUtilsConfig> = {}) {
    this.config = {
      enabled: true,
<<<<<<< HEAD
      analytics: true,
      sitemap: true,
=======
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
<<<<<<< HEAD
      console.log('SEO utils initialized');
    }
  }

<<<<<<< HEAD
export const seoutils = new seoUtils();
export default seoutils;
export default utilityFunction;
// SEO utilities and helpers

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface PageSEOData {
  page: string;
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod: string;
}

export class SEOOptimizer {
  private static instance: SEOOptimizer;
  private siteUrl = 'https://ziontechgroup.com';
  private siteName = 'Zion Tech Group';
  private defaultImage = 'https://ziontechgroup.com/og-image.jpg';

  static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  // Generate page title
  generateTitle(pageTitle: string, includeSiteName: boolean = true): string {
    if (includeSiteName && !pageTitle.includes(this.siteName)) {
      return `${pageTitle} | ${this.siteName}`;
    }
    return pageTitle;
  }

  // Generate meta description
  generateDescription(content: string, maxLength: number = 160): string {
    if (content.length <= maxLength) return content;

    // Try to cut at sentence boundary
    const sentences = content.split('. ');
    let description = '';

    for (const sentence of sentences) {
      if ((description + sentence + '. ').length <= maxLength) {
        description += sentence + '. ';
      } else {
        break;
      }
    }

    // If no sentences fit, cut at word boundary
    if (!description) {
      const words = content.split(' ');
      for (const word of words) {
        if ((description + word + ' ').length <= maxLength) {
          description += word + ' ';
        } else {
          break;
        }
      }
      description = description.trim() + '...';
    }

    return description.trim();
  }

  // Generate keywords from content
  generateKeywords(content: string, additionalKeywords: string[] = []): string[] {
    const commonWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
//       'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
//       'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'
    ]);

    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3 && !commonWords.has(word));

    const wordCount = new Map<string, number>();
    words.forEach(word => {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    });

    const sortedWords = Array.from(wordCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word]) => word);

    return [...new Set([...sortedWords, ...additionalKeywords])];
  }

  // Generate canonical URL
  generateCanonical(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${this.siteUrl}${cleanPath}`;
  }

  // Generate Open Graph data
  generateOpenGraph(data: SEOData): object {
    return {
//       'og:site_name': this.siteName,
//       'og:title': data.ogTitle || data.title,
//       'og:description': data.ogDescription || data.description,
      'og:type': data.ogType || 'website',
//       'og:url': data.canonical,
//       'og:image': data.ogImage || this.defaultImage,
//       'og:image:width': '1200',
//       'og:image:height': '630',
//       'og:image:alt': data.ogTitle || data.title,
//       'og:locale': 'en_US'
    };
  }

  // Generate Twitter Card data
  generateTwitterCard(data: SEOData): object {
    return {
//       'twitter:card': data.twitterCard || 'summary_large_image',
//       'twitter:site': '@ziontechgroup',
//       'twitter:creator': '@ziontechgroup',
//       'twitter:title': data.ogTitle || data.title,
//       'twitter:description': data.ogDescription || data.description,
//       'twitter:image': data.ogImage || this.defaultImage,
//       'twitter:image:alt': data.ogTitle || data.title
    };
  }

  // Generate structured data for organization
  generateOrganizationStructuredData(): object {
    return {
//       '@context': 'https://schema.org',
      '@type': 'Organization',
//       name: this.siteName,
//       url: this.siteUrl,
      logo: `${this.siteUrl}/logo.svg`,
      description: 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',
      address: {
        '@type': 'PostalAddress',
//         streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
//         addressRegion: 'DE',
//         postalCode: '19709',
//         addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
//         telephone: '+1-302-464-0950',
//         contactType: 'customer service',
//         email: 'kleber@ziontechgroup.com'
      },
//       sameAs: [
//         'https://twitter.com/ziontechgroup',
//         'https://linkedin.com/company/ziontechgroup'
//       ],
//       foundingDate: '2020',
//       numberOfEmployees: '10-50',
      industry: 'Information Technology',
//       knowsAbout: [
        'Artificial Intelligence',
//         'Cybersecurity',
//         'Cloud Computing',
        'Digital Transformation',
//         'Micro SAAS',
//         '5G Technology'
//       ]
    };
  }

  // Generate structured data for service
  generateServiceStructuredData(service: {
    name: string;
    description: string;
    url: string;
    provider: string;
    category: string;
=======
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
<<<<<<< HEAD
  }): object {
    return {
//       '@context': 'https://schema.org',
      '@type': 'Service',
//       name: service.name,
//       description: service.description,
//       url: service.url,
      provider: {
        '@type': 'Organization',
//         name: service.provider,
//         url: this.siteUrl
      },
//       category: service.category,
//       serviceType: service.category,
      ...(service.offers && {
        offers: {
          '@type': 'Offer',
//           price: service.offers.price,
//           priceCurrency: service.offers.priceCurrency,
//           availability: service.offers.availability
        }
      })
    };
  }

  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>): object {
    return {
//       '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
//         position: index + 1,
//         name: crumb.name,
//         item: crumb.url
      }))
=======
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
<<<<<<< HEAD
  generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>): object {
    return {
//       '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
//         name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
//           text: faq.answer
        }
      }))
    };
  }

  // Generate sitemap data
  generateSitemapData(pages: PageSEOData[]): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.canonical}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    return sitemap;
  }

  // Generate robots.txt content
  generateRobotsTxt(): string {
    return `User-agent: *
// Allow: /

Sitemap: ${this.siteUrl}/sitemap.xml

# Crawl-delay for respectful crawling
// Crawl-delay: 1

// # Disallow admin and private areas
// Disallow: /admin/
// Disallow: /private/
// Disallow: /api/
// Disallow: /_next/
Disallow: /static/`;
  }

  // Validate SEO data
  validateSEOData(data: SEOData): string[] {
    const errors: string[] = [];

    if (!data.title || data.title.length < 30) {
      errors.push('Title should be at least 30 characters long');
    }

    if (data.title && data.title.length > 60) {
      errors.push('Title should be less than 60 characters long');
    }

    if (!data.description || data.description.length < 120) {
      errors.push('Description should be at least 120 characters long');
    }

    if (data.description && data.description.length > 160) {
      errors.push('Description should be less than 160 characters long');
    }

    if (!data.keywords || data.keywords.length === 0) {
      errors.push('Keywords should not be empty');
    }

    if (data.keywords && data.keywords.length > 10) {
      errors.push('Keywords should not exceed 10 items');
    }

    if (!data.canonical) {
      errors.push('Canonical URL is required');
    }

    return errors;
  }

  // Generate meta tags for a page
  generateMetaTags(data: SEOData): object {
    const ogData = this.generateOpenGraph(data);
    const twitterData = this.generateTwitterCard(data);

    return {
      title: this.generateTitle(data.title),
//       description: data.description,
      keywords: data.keywords.join(', '),
//       canonical: data.canonical,
//       robots: [
//         data.noindex ? 'noindex' : 'index',
//         data.nofollow ? 'nofollow' : 'follow',
//         'max-snippet:-1',
//         'max-image-preview:large',
//         'max-video-preview:-1'
      ].join(', '),
//       ...ogData,
//       ...twitterData
    };
  }
}

// Export singleton instance
export const seoOptimizer = SEOOptimizer.getInstance();

// Utility functions
export const generatePageSEO = (pageData: {
  title: string;
  content: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}): SEOData => {
  const seo = seoOptimizer;

  return {
    title: seo.generateTitle(pageData.title),
    description: seo.generateDescription(pageData.content),
    keywords: seo.generateKeywords(pageData.content, pageData.keywords || []),
    canonical: seo.generateCanonical(pageData.path),
//     noindex: pageData.noindex || false,
//     nofollow: pageData.nofollow || false
  };
};

export const generateServiceSEO = (serviceData: {
  name: string;
  description: string;
  path: string;
  category: string;
  features: string[];
}): SEOData => {
  const seo = seoOptimizer;
  const content = `${serviceData.description} ${serviceData.features.join(' ')}`;

  return {
    title: seo.generateTitle(serviceData.name),
    description: seo.generateDescription(content),
    keywords: seo.generateKeywords(content, [serviceData.category, serviceData.name]),
    canonical: seo.generateCanonical(serviceData.path),
//     ogType: 'product',
    structuredData: seo.generateServiceStructuredData({
//       name: serviceData.name,
//       description: serviceData.description,
      url: seo.generateCanonical(serviceData.path),
//       provider: 'Zion Tech Group',
//       category: serviceData.category
    })
  };
};
=======
/**
 * SEO utility functions
 */;
export interface SEOConfig {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: string
  description: string
  keywords?: string[]
  ogImage?: string,,
  canonicalUrl?: string
  }
;
export const generateMetaTags = (config: SEOConfig): string => {,;
export interface SEOConfig {/* TODO: Fix JSX expression */}
}
;
export const generateMetaTags = (confi)
  g: SEOConfig): string => {/* TODO: Fix JSX expression */}
  const { title, description, keywords, ogImage, canonicalUrl } = config;
let _tags = `<title>${title}</title>`;`
  tags += `<meta name="description" content="${description}" />`"
  if (keywords && keywords.length > 0) {/* TODO: Fix JSX expression */}"`"
    tags += `<meta name="keywords" content="${keywords.join(', ')}" />`"'"
  }

  if (ogImage) {/* TODO: Fix JSX expression */}"`"
  g:image" content="${ogImage}" />`"
  }

  if (canonicalUrl) {/* TODO: Fix JSX expression */}"`"
    tags += `<link rel="canonical" href="${canonicalUrl}" />`"
  }

  return tags
}
;
export const updatePageTitle = (title: string) => {,
  if (typeof window !== 'undefined') {,'
    document.title = title;
export const updatePageTitle = (titl)
  e: string) => {/* TODO: Fix JSX expression */}
  }
}
"`"
</li>
=======
  generateMetaTags(title: string, description: string): void {
    if (this.config.enabled) {
      document.title = title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }

  generateSitemap(): void {
    if (this.config.sitemap) {
      console.log('Generating sitemap...');
    }
=======
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
<<<<<<< HEAD
export default seoUtils;
=======
export default seoUtils;
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
