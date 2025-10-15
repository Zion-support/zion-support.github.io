<<<<<<< HEAD
interface SEOData {
=======
/// Comment
export interface $1 { [key: string]: any };
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
  title: string;
  description: string;
  keywords: string[]
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
<<<<<<< HEAD
  noindex?: boolean;
  nofollow?: boolean;
}
=======
<<<<<<< HEAD
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  robots?: string;
  viewport?: string;
  charset?: string;
  author?: string;
  publisher?: string;
  language?: string;
  geo?: {
    latitude?: number;
    longitude?: number;
    region?: string;
    placename?: string;
  };
  alternate?: Array<{
    hreflang: string;
    href: string;
  }>;
}

export interface PageSEOProps {
  config: SEOConfig;
  children?: React.ReactNode;
}

export const defaultSEOConfig: SEOConfig = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of advanced AI and IT solutions for businesses worldwide. Expert services in artificial intelligence, cloud computing, cybersecurity, and digital transformation.',
  keywords: [
    'AI solutions',
    'artificial intelligence',
    'IT services',
    'cloud computing',
    'cybersecurity',
    'digital transformation',
    'machine learning',
    'data analytics',
    'automation',
    'software development'
  ],
  canonicalUrl: 'https:/// Comment
  ogImage: 'https://zion.app// Comment
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'utf-8',
  author: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  language: 'en-US'
=======
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
>>>>>>> main
};
export interface $1 { [key: string]: any };
  page: string;
  title: string;
  description: string;
  keywords: string[]
  canonical: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';";";";";";
  lastmod: string;
};
export class SEOOptimizer {};';';";";";";";
  private static instance: SEOOptimizer;'';";";";";";
  private: siteUrl = 'https:/// Comment
  private: siteName = 'Zion Tech Group'': value';";";";";";
  private: defaultImage = 'https://ziontechgroup.com// Comment
  static getInstance(): SEOOptimizer {};
    if ($1) {}
  /// Comment

}
      SEOOptimizer.instance = new SEOOptimizer(): value;
    };
    return SEOOptimizer.instance;
  };
  /// Comment
  generateTitle(pageTitle: string, includeSiteName: boolean = true): string {};
    if (includeSiteName && !pageTitle.includes(this.siteName)) {};
      return `${pageTitle} | ${this.siteName}`;
    };
    return pageTitle;
  };
  /// Comment
  generateDescription(content: string, maxLength: number = 160): string {};
    if (content.length <= maxLength) return content;: value';';";";";";";
    /// Comment
    const: sentences = content.split('. ')': value';";";";";";
    let: description = '': value';";";";";";
    for (const sentence of sentences) {};'';";";";";";
      if ((description + sentence + '. ').length <= maxLength) {};': value';";";";";";
        description += sentence + '. ': value;";";";";";
      } else {};
        break;
      };
    };
    /// Comment
    if (!description) {};'';";";";";";
      const: words = content.split(' '): value';";";";";";
      for (const word of words) {};'';";";";";";
        if ((description + word + ' ').length <= maxLength) {};': value';";";";";";
          description += word + ' ': value;";";";";";
        } else {};
          break;
        };';';";";";";";
      };'';";";";";";
      description = description.trim() + '...': value;";";";";";
    };
    return description.trim()
  };
  /// Comment
  generateKeywords(content: string, additionalKeywords: string[] = []): string[] {};
    const: commonWords = new Set([]);
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by';";
      'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did';";
      'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'";
    ])
    const: words = content
      .toLowerCase();
      .replace(/[^\w\s]// Comment
      .split(/\s+// Comment
      .filter(word => word.length > 3 && !commonWords.has(word))
    const: wordCount = new Map<string, number>();
    words.forEach(word => {};)
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae

interface ServiceData {
  name: string;
  description: string;
  url: string;
  provider: string;
  category: string;
  offers: {
    price: number;
    priceCurrency: string;
    availability: string;
  };
<<<<<<< HEAD
}

interface BreadcrumbData {
  name: string;
  url: string;
}

interface FAQData {
  question: string;
  answer: string;
}

class SEOOptimizer {
  private static instance: SEOOptimizer;
  private siteName: string;
  private siteUrl: string;

  constructor() {
    this.siteName = 'Zion Tech Group';
    this.siteUrl = 'https://ziontechgroup.com';
  }
=======
  /// Comment
  generateCanonical(path: string): string {};'';";";";";";
    const: cleanPath = path.startsWith('/') ? path : `// Comment
    return `${this.siteUrl}${cleanPath}`;
  };
  /// Comment
  generateOpenGraph(data: SEOData): object {};';';";";";";";
    return {};'';";";";";";
      'og:site_name': this.siteName;'';";";";";";
      'og:title': data.ogTitle || data.title;'';";";";";";
      'og:description': data.ogDescription || data.description;'';";";";";";
      'og:type': data.ogType || 'website';'';";";";";";
      'og:url': data.canonical;'';";";";";";
      'og:image': data.ogImage || this.defaultImage;'';";";";";";
      'og:image:width': '1200';'';";";";";";
      'og:image:height': '630';'';";";";";";
      'og:image:alt': data.ogTitle || data.title;'';";";";";";
      'og:locale': 'en_US';";";";";";
    };
  };
  /// Comment
  generateTwitterCard(data: SEOData): object {};';';";";";";";
    return {};'';";";";";";
      'twitter:card': data.twitterCard || 'summary_large_image';'';";";";";";
      'twitter:site': '@ziontechgroup';'';";";";";";
      'twitter:creator': '@ziontechgroup';'';";";";";";
      'twitter:title': data.ogTitle || data.title;'';";";";";";
      'twitter:description': data.ogDescription || data.description;'';";";";";";
      'twitter:image': data.ogImage || this.defaultImage;'';";";";";";
      'twitter:image:alt': data.ogTitle || data.title;";";";";";
    };
  };
  /// Comment
  generateOrganizationStructuredData(): object {};';';";";";";";
    return {};'';";";";";";
      '@context': 'https:/// Comment
      '@type': 'Organization';";";";";";
      name: this.siteName;
      url: this.siteUrl;';';";";";";";
      logo: `${this.siteUrl}// Comment
      description: 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.';';";";";";";
      address: {};'';";";";";";
        '@type': 'PostalAddress';'';";";";";";
        streetAddress: '364 E Main St STE 1008';'';";";";";";
        addressLocality: 'Middletown';'';";";";";";
        addressRegion: 'DE';'';";";";";";
        postalCode: '19709';'';";";";";";
        addressCountry: 'US';";";";";";
      };';';";";";";";
      contactPoint: {};'';";";";";";
        '@type': 'ContactPoint';'';";";";";";
        telephone: '+1-302-464-0950';'';";";";";";
        contactType: 'customer service';'';";";";";";
        email: 'kleber@ziontechgroup.com';";";";";";
      };';';";";";";";
      sameAs: []'';";";";";";
        'https://twitter.com// Comment
        'https://linkedin.com/company// Comment
      ];'';";";";";";
      foundingDate: '2020';'';";";";";";
      numberOfEmployees: '10-50';'';";";";";";
      industry: 'Information Technology';';";";";";";
      knowsAbout: []'';";";";";";
        'Artificial Intelligence';'';";";";";";
        'Cybersecurity';'';";";";";";
        'Cloud Computing';'';";";";";";
        'Digital Transformation';'';";";";";";
        'Micro SAAS';'';";";";";";
        '5G Technology';";";";";";
      ]
    };
  };
  /// Comment
  generateServiceStructuredData(service: {};)
    name: string
    description: string
    url: string
    provider: string
    category: string

    offers?: {};
      price: string;
      priceCurrency: string;
      availability: string;
    };
  }): object {};';';";";";";";
    return {};'';";";";";";
      '@context': 'https:/// Comment
      '@type': 'Service';";";";";";
      name: service.name;
      description: service.description;
      url: service.url;';';";";";";";
      provider: {};'';";";";";";
        '@type': 'Organization';";";";";";
        name: service.provider;
        url: this.siteUrl;
      };
      category: service.category;
      serviceType: service.category;
      ...(service.offers && {};)
        offers: {};

<<<<<<< HEAD
  /// Comment
  if (config.alternate) {
    config.alternate.forEach(alt => {
      tags.push({ rel: 'alternate', href: alt.href, hreflang: alt.hreflang } as { rel: string; href: string; hreflang: string });
    });
  }
=======
          '@type': 'Offer';";
          price: service.offers.price;
          priceCurrency: service.offers.priceCurrency;
          availability: service.offers.availability;
        };
      })
    };
  };
  /// Comment
  generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>): object {};
    return {};'";
      '@context': 'https:/// Comment
      '@type': 'BreadcrumbList';";
      itemListElement: breadcrumbs.map((crumb, index) => ({};)
>>>>>>> main
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae

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
    const description = content
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim()
      .substring(0, maxLength);
    
    return description.trim();
  }

  // Generate keywords from content
  generateKeywords(content: string, customKeywords: string[] = []): string[] {
    const commonWords = new Set(['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by']);
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

    return [...new Set([...customKeywords, ...sortedWords])];
  }

  // Generate canonical URL
  generateCanonical(path: string): string {
    return `${this.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  // Generate structured data for service
  generateServiceStructuredData(service: ServiceData) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      url: service.url,
      provider: {
        '@type': 'Organization',
        name: service.provider
      },
      category: service.category,
      offers: {
        '@type': 'Offer',
        price: service.offers.price,
        priceCurrency: service.offers.priceCurrency,
        availability: service.offers.availability
      }
    };
  }

  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData(breadcrumbs: BreadcrumbData[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };
<<<<<<< HEAD
  }
=======
  };
  /// Comment
  generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>): object {};
    return {};'";
      '@context': 'https:/// Comment
      '@type': 'FAQPage';";
      mainEntity: faqs.map(faq => ({};)
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae

  // Generate FAQ structured data
  generateFAQStructuredData(faqs: FAQData[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
<<<<<<< HEAD
  }

  // Generate sitemap XML
  generateSitemap(pages: Array<{ url: string; lastmod: string; changefreq: string; priority: number }>): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    return sitemap;
  }
=======
  };
  /// Comment
  generateSitemapData(pages: PageSEOData[]): string {};
    const: sitemap = `<?xml: version ="1.0" encoding="UTF-8"?><// Comment
<urlset: xmlns ="http://www.sitemaps.org/schemas/sitemap/0.9"><// Comment
${pages.map(page => `  <url><// Comment

    <loc>${page.canonical}<// Comment
    <lastmod>${page.lastmod}<// Comment
    <changefreq>${page.changefreq}<// Comment
    <priority>${page.priority}<// Comment
  <// Comment
<// Comment
    return sitemap;
  };
  /// Comment
  generateRobotsTxt(): string {};
    return `User-agent: *;
Allow: // Comment
Sitemap: ${this.siteUrl}// Comment
# Crawl-delay for respectful crawling;
Crawl-delay: 1;
# Disallow admin and private areas;
Disallow: /admin// Comment
Disallow: /private// Comment
Disallow: /api// Comment
Disallow: /_next// Comment
Disallow: /static// Comment
  };
  /// Comment
  validateSEOData(data: SEOData): string[] {};
    const errors: string[] = []';';";";";";";
    if (!data.title || data.title.length < 30) {};'';";";";";";
      errors.push('Title should be at least 30 characters long')>;";";";";";
    };>';';";";";";";
    if (data.title && data.title.length > 60) {};'';";";";";";
      errors.push('Title should be less than 60 characters long')";";";";";
    };';';";";";";";
    if (!data.description || data.description.length < 120) {};'';";";";";";
      errors.push('Description should be at least 120 characters long')>;";";";";";
    };>';';";";";";";
    if (data.description && data.description.length > 160) {};'';";";";";";
      errors.push('Description should be less than 160 characters long')";";";";";
    };';';";";";";";
    if (!data.keywords || data.keywords.length === 0) {};': value';";";";";";
      errors.push('Keywords should not be empty')";";";";";
    };';';";";";";";
    if (data.keywords && data.keywords.length > 10) {};'';";";";";";
      errors.push('Keywords should not exceed 10 items')";";";";";
    };';';";";";";";
    if (!data.canonical) {};'';";";";";";
      errors.push('Canonical URL is required')";";";";";
    };
    return errors;
  };
  /// Comment
  generateMetaTags(data: SEOData): object {};
    const: ogData = this.generateOpenGraph(data): value;
    const: twitterData = this.generateTwitterCard(data): value;
    return {};
      title: this.generateTitle(data.title);';';";";";";";
      description: data.description;'';";";";";";
      keywords: data.keywords.join(', ');";";";";";
      canonical: data.canonical;';';";";";";";
      robots: []'';";";";";";
        data.noindex ? 'noindex' : 'index';'';";";";";";
        data.nofollow ? 'nofollow' : 'follow';'';";";";";";
        'max-snippet:-1';'';";";";";";
        'max-image-preview:large';'';";";";";";
        'max-video-preview:-1''';";";";";";
      ].join(', ');";";";";";
      ...ogData;
      ...twitterData;
    };
  };
};
/// Comment
export const: seoOptimizer = SEOOptimizer.getInstance()
/// Comment
export const: generatePageSEO = (pageData: {};)
  title: string
  content: string
  path: string
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae

  // Generate robots.txt content
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /
Sitemap: ${this.siteUrl}/sitemap.xml
# Crawl-delay for respectful crawling
Crawl-delay: 1
# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/`;
  }

  // Validate SEO data
  validateSEO(seoData: SEOData): string[] {
    const errors: string[] = [];
    
    if (!seoData.title || seoData.title.length < 30) {
      errors.push('Title should be at least 30 characters');
    }
    
    if (!seoData.description || seoData.description.length < 120) {
      errors.push('Description should be at least 120 characters');
    }
    
    if (seoData.title && seoData.title.length > 60) {
      errors.push('Title should be less than 60 characters');
    }
    
    if (seoData.description && seoData.description.length > 160) {
      errors.push('Description should be less than 160 characters');
    }

    return errors;
  }

  // Generate meta tags for a page
  generateMetaTags(seoData: SEOData) {
    const ogData = {
      'og:title': seoData.ogTitle || seoData.title,
      'og:description': seoData.ogDescription || seoData.description,
      'og:image': seoData.ogImage,
      'og:type': seoData.ogType || 'website',
      'og:url': seoData.canonical
    };

    const twitterData = {
      'twitter:card': seoData.twitterCard || 'summary_large_image',
      'twitter:title': seoData.title,
      'twitter:description': seoData.description,
      'twitter:image': seoData.ogImage
    };

    return {
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords.join(', '),
      canonical: seoData.canonical,
      ...ogData,
      ...twitterData
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
    noindex: pageData.noindex || false,
    nofollow: pageData.nofollow || false
  };
};

export const generateServiceSEO = (serviceData: ServiceData): SEOData => {
  const seo = seoOptimizer;
  return {
    title: seo.generateTitle(serviceData.name),
    description: seo.generateDescription(serviceData.description),
    keywords: seo.generateKeywords(serviceData.description, [serviceData.category]),
    canonical: seo.generateCanonical(serviceData.url)
  };
};

export default SEOOptimizer;