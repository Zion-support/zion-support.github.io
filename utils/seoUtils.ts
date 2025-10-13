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
    let metaDescription = document.querySelector('meta[name="description"keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));
  }

  updateCanonicalUrl(url: string) {
    let canonical = document.querySelector('link[rel="]');
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
      let meta = document.querySelector(`meta[property="${tag.property}"twitter:card"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'twitter:card');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', this.config.twitterCard);
    }
  generateStructuredData() {
    const structuredData = {
      ": "https://schema.org"@type": ",
      "name"Zion Tech Group",
      ": this.config.description,
      "url"${tag.name}"]` : `meta[property="]`;
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
    const sitemap = `<?xml version="1.0"UTF-8"?>
<urlset xmlns=">
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
;
export const generateMetaTags = (confi)
  g: SEOConfig): string => {/* TODO: Fix JSX expression */}
  const { title, description, keywords, ogImage, canonicalUrl } = config;
let _tags = `<title>${title}</title>`;`
  tags += `<meta name="description"${description}" />`"`"
    tags += `<meta name=" content="${keywords.join(', ')}"'"
  }

  if (ogImage) {/* TODO: Fix JSX expression */}"
  g:image" content=" />`"
  }

  if (canonicalUrl) {/* TODO: Fix JSX expression */}"
    tags += `<link rel="canonical"${canonicalUrl}" />`"`"
</li>
  generateMetaTags(title: string, description: string): void {
    if (this.config.enabled) {
      document.title = title;
      const metaDescription = document.querySelector('meta[name="]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
  }

  generateSitemap(): void {
    if (this.config.sitemap) {
      console.log('Generating sitemap...');
    }
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
    
    let sitemap = '<?xml version="1.0"UTF-8"?>\n';
    sitemap += '<urlset xmlns=">\n';
    
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
export const seoUtils = new SEOUtils();

export default seoUtils;

