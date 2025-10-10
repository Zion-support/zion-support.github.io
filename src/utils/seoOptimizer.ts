// SEO optimization utilities
export class SEOOptimizer {
  private static instance: SEOOptimizer;

  static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  // Generate structured data for organization
  generateOrganizationSchema(data: {
    name: string;
    description: string;
    url: string;
    logo: string;
    phone: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    socialProfiles: string[];
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: data.name,
      description: data.description,
      url: data.url,
      logo: data.logo,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: data.phone,
        contactType: 'customer service',
        email: data.email,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.street,
        addressLocality: data.address.city,
        addressRegion: data.address.state,
        postalCode: data.address.zipCode,
        addressCountry: data.address.country,
      },
      sameAs: data.socialProfiles,
    };
  }

  // Generate structured data for services
  generateServiceSchema(services: Array<{
    name: string;
    description: string;
    url: string;
    price?: string;
    priceCurrency?: string;
  }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: services.map((service, index) => ({
        '@type': 'Service',
        position: index + 1,
        name: service.name,
        description: service.description,
        url: service.url,
        ...(service.price && {
          offers: {
            '@type': 'Offer',
            price: service.price,
            priceCurrency: service.priceCurrency || 'USD',
          },
        }),
      })),
    };
  }

  // Generate breadcrumb schema
  generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
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

  // Generate FAQ schema
  generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  // Optimize meta tags
  optimizeMetaTags(meta: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
    ogImage?: string;
    ogType?: string;
  }) {
    const optimizedTitle = meta.title.length > 60 
      ? meta.title.substring(0, 57) + '...' 
      : meta.title;
    
    const optimizedDescription = meta.description.length > 160 
      ? meta.description.substring(0, 157) + '...' 
      : meta.description;

    return {
      title: optimizedTitle,
      description: optimizedDescription,
      keywords: meta.keywords.join(', '),
      canonical: meta.canonicalUrl,
      openGraph: {
        title: optimizedTitle,
        description: optimizedDescription,
        url: meta.canonicalUrl,
        type: meta.ogType || 'website',
        image: meta.ogImage || `${meta.canonicalUrl}/og-image.jpg`,
      },
      twitter: {
        card: 'summary_large_image',
        title: optimizedTitle,
        description: optimizedDescription,
        image: meta.ogImage || `${meta.canonicalUrl}/og-image.jpg`,
      },
    };
  }

  // Generate sitemap data
  generateSitemapData(pages: Array<{
    url: string;
    lastModified: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }>) {
    return {
      urlset: {
        '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
        url: pages.map((page) => ({
          loc: page.url,
          lastmod: page.lastModified,
          changefreq: page.changeFrequency,
          priority: page.priority,
        })),
      },
    };
  }

  // Check for SEO issues
  checkSEOIssues(content: string, meta: { title: string; description: string }) {
    const issues: string[] = [];

    // Check title length
    if (meta.title.length < 30) {
      issues.push('Title is too short (less than 30 characters)');
    } else if (meta.title.length > 60) {
      issues.push('Title is too long (more than 60 characters)');
    }

    // Check description length
    if (meta.description.length < 120) {
      issues.push('Description is too short (less than 120 characters)');
    } else if (meta.description.length > 160) {
      issues.push('Description is too long (more than 160 characters)');
    }

    // Check for heading structure
    const headingCount = (content.match(/<h[1-6]/g) || []).length;
    if (headingCount === 0) {
      issues.push('No headings found in content');
    }

    // Check for images without alt text
    const imagesWithoutAlt = (content.match(/<img(?!.*alt=)/g) || []).length;
    if (imagesWithoutAlt > 0) {
      issues.push(`${imagesWithoutAlt} images without alt text found`);
    }

    // Check for internal links
    const internalLinks = (content.match(/href="\/(?!\/)/g) || []).length;
    if (internalLinks === 0) {
      issues.push('No internal links found');
    }

    return issues;
  }
}

// Default SEO configuration
export const defaultSEOConfig = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords: [
    'AI solutions',
    'artificial intelligence',
    'enterprise solutions',
    'digital transformation',
    'IT services',
    'quantum computing',
    'autonomous systems',
    'machine learning',
    'automation',
    'cloud services',
    'cybersecurity',
    'business intelligence',
    'micro SAAS'
  ],
  canonicalUrl: 'https://ziontechgroup.com',
  ogImage: 'https://ziontechgroup.com/og-image.jpg',
  ogType: 'website'
};