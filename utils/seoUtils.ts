interface SEOData {
  title: string;
  description: string;
  keywords: string[]
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}
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
  }

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