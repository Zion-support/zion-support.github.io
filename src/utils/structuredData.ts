/**
 * Structured Data (JSON-LD) Utilities for SEO
 * Generates schema.org compatible structured data for better search engine understanding
 * @module structuredData
 */

export interface Organization {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: ContactPoint[];
  sameAs?: string[];
  address?: PostalAddress;
}

export interface ContactPoint {
  '@type': 'ContactPoint';
  telephone: string;
  contactType: string;
  email?: string;
  areaServed?: string;
  availableLanguage?: string[];
}

export interface PostalAddress {
  '@type': 'PostalAddress';
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

export interface Article {
  headline: string;
  description: string;
  author: string | Person;
  datePublished: string;
  dateModified?: string;
  image?: string | string[];
  publisher?: Organization;
  url?: string;
}

export interface Person {
  '@type': 'Person';
  name: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  worksFor?: Organization;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface Service {
  name: string;
  description: string;
  provider: Organization;
  serviceType?: string;
  areaServed?: string;
  url?: string;
}

/**
 * Generate Organization schema
 * @param org - Organization details
 * @returns JSON-LD structured data
 */
export function generateOrganizationSchema(org: Organization): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    ...(org.logo && { logo: org.logo }),
    ...(org.description && { description: org.description }),
    ...(org.contactPoint && { contactPoint: org.contactPoint }),
    ...(org.sameAs && { sameAs: org.sameAs }),
    ...(org.address && { address: org.address }),
  };
}

/**
 * Generate WebSite schema
 * @param name - Website name
 * @param url - Website URL
 * @param description - Website description
 * @param searchUrl - Search URL pattern
 * @returns JSON-LD structured data
 */
export function generateWebSiteSchema(
  name: string,
  url: string,
  description?: string,
  searchUrl?: string
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
  };

  if (description) {
    schema.description = description;
  }

  if (searchUrl) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: searchUrl,
      },
      'query-input': 'required name=search_term_string',
    };
  }

  return schema;
}

/**
 * Generate Article schema
 * @param article - Article details
 * @returns JSON-LD structured data
 */
export function generateArticleSchema(article: Article): Record<string, unknown> {
  const author =
    typeof article.author === 'string'
      ? { '@type': 'Person', name: article.author }
      : article.author;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    author,
    datePublished: article.datePublished,
    ...(article.dateModified && { dateModified: article.dateModified }),
    ...(article.image && { image: article.image }),
    ...(article.publisher && { publisher: generateOrganizationSchema(article.publisher) }),
    ...(article.url && { url: article.url }),
  };
}

/**
 * Generate BreadcrumbList schema
 * @param items - Breadcrumb items
 * @returns JSON-LD structured data
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Service schema
 * @param service - Service details
 * @returns JSON-LD structured data
 */
export function generateServiceSchema(service: Service): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: generateOrganizationSchema(service.provider),
    ...(service.serviceType && { serviceType: service.serviceType }),
    ...(service.areaServed && { areaServed: service.areaServed }),
    ...(service.url && { url: service.url }),
  };
}

/**
 * Generate FAQ schema
 * @param questions - Array of Q&A pairs
 * @returns JSON-LD structured data
 */
export function generateFAQSchema(
  questions: Array<{ question: string; answer: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(qa => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  };
}

/**
 * Generate LocalBusiness schema
 * @param business - Business details
 * @returns JSON-LD structured data
 */
export function generateLocalBusinessSchema(business: {
  name: string;
  image?: string;
  telephone?: string;
  address?: PostalAddress;
  url?: string;
  priceRange?: string;
  openingHours?: string[];
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    ...(business.image && { image: business.image }),
    ...(business.telephone && { telephone: business.telephone }),
    ...(business.address && { address: business.address }),
    ...(business.url && { url: business.url }),
    ...(business.priceRange && { priceRange: business.priceRange }),
    ...(business.openingHours && { openingHours: business.openingHours }),
  };
}

/**
 * Generate SoftwareApplication schema
 * @param app - Application details
 * @returns JSON-LD structured data
 */
export function generateSoftwareApplicationSchema(app: {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    applicationCategory: app.applicationCategory,
    ...(app.operatingSystem && { operatingSystem: app.operatingSystem }),
    ...(app.offers && {
      offers: {
        '@type': 'Offer',
        price: app.offers.price,
        priceCurrency: app.offers.priceCurrency,
      },
    }),
    ...(app.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: app.aggregateRating.ratingValue,
        reviewCount: app.aggregateRating.reviewCount,
      },
    }),
  };
}

/**
 * Generate Review schema
 * @param review - Review details
 * @returns JSON-LD structured data
 */
export function generateReviewSchema(review: {
  itemReviewed: {
    name: string;
    type: string;
  };
  author: string;
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
  };
  reviewBody: string;
  datePublished?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': review.itemReviewed.type,
      name: review.itemReviewed.name,
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.reviewRating.ratingValue,
      bestRating: review.reviewRating.bestRating || 5,
    },
    reviewBody: review.reviewBody,
    ...(review.datePublished && { datePublished: review.datePublished }),
  };
}

/**
 * Convert structured data to JSON-LD script tag content
 * @param data - Structured data object
 * @returns JSON string for script tag
 */
export function toJSONLD(data: Record<string, unknown> | Array<Record<string, unknown>>): string {
  return JSON.stringify(data, null, 2);
}

/**
 * Generate complete structured data for a typical webpage
 * @param config - Page configuration
 * @returns Array of structured data objects
 */
export function generatePageStructuredData(config: {
  organization: Organization;
  websiteName: string;
  websiteUrl: string;
  websiteDescription?: string;
  breadcrumbs?: BreadcrumbItem[];
  article?: Article;
  services?: Service[];
}): Array<Record<string, unknown>> {
  const schemas: Array<Record<string, unknown>> = [];

  // Always include organization
  schemas.push(generateOrganizationSchema(config.organization));

  // Website schema
  schemas.push(
    generateWebSiteSchema(config.websiteName, config.websiteUrl, config.websiteDescription)
  );

  // Breadcrumbs if provided
  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(config.breadcrumbs));
  }

  // Article if provided
  if (config.article) {
    schemas.push(generateArticleSchema(config.article));
  }

  // Services if provided
  if (config.services && config.services.length > 0) {
    config.services.forEach(service => {
      schemas.push(generateServiceSchema(service));
    });
  }

  return schemas;
}

/**
 * Default organization data for Zion Tech Group
 */
export const ZION_ORGANIZATION: Organization = {
  name: 'Zion Tech Group',
  url: 'https://zion.app',
  logo: 'https://zion.app/logo.png',
  description: 'Advanced AI and IT Solutions Provider',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-555-ZION-TECH',
      contactType: 'Customer Service',
      email: 'contact@zion.app',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://twitter.com/ziontech',
    'https://linkedin.com/company/ziontech',
    'https://github.com/ziontech',
  ],
};
