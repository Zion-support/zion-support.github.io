<<<<<<< HEAD
// Utility functions

export function utilityFunction() {
  // Implementation here
  return null;
}

export default utilityFunction;
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
