/**
 * SEO Optimization Utilities
 * Enhance search engine visibility and social media sharing
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  category?: string;
  tags?: string[];
}

/**
 * Generate optimized page title
 */
export const generatePageTitle = (
  pageTitle: string,
  suffix: string = "Zion Tech Group"
): string => {
  const maxLength = 60;
  const fullTitle = `${pageTitle} | ${suffix}`;
  
  if (fullTitle.length <= maxLength) {
    return fullTitle;
  }
  
  // Truncate page title to fit within limit
  const availableLength = maxLength - suffix.length - 3; // 3 for " | "
  const truncatedTitle = pageTitle.substring(0, availableLength - 3) + "...";
  return `${truncatedTitle} | ${suffix}`;
};

/**
 * Generate optimized meta description
 */
export const generateMetaDescription = (
  description: string,
  maxLength: number = 155
): string => {
  if (description.length <= maxLength) {
    return description;
  }
  
  // Truncate at last complete word before max length
  const truncated = description.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace) + '...';
};

/**
 * Generate article schema.org structured data
 */
export const generateArticleSchema = (metadata: SEOMetadata) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": metadata.title,
    "description": metadata.description,
    "image": metadata.ogImage || "https://ziontechgroup.com/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": metadata.author || "Zion Tech Group"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png"
      }
    },
    "datePublished": metadata.publishedDate || new Date().toISOString(),
    "dateModified": metadata.modifiedDate || new Date().toISOString(),
    "keywords": metadata.keywords.join(', '),
    "articleSection": metadata.category,
    "articleBody": metadata.description
  };
};

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Generate FAQ schema
 */
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Generate OpenGraph tags
 */
export const generateOGTags = (metadata: SEOMetadata) => {
  const tags: Record<string, string> = {
    'og:title': metadata.title,
    'og:description': generateMetaDescription(metadata.description),
    'og:type': metadata.ogType || 'article',
    'og:url': metadata.canonicalUrl || window.location.href,
    'og:site_name': 'Zion Tech Group',
    'og:locale': 'en_US'
  };
  
  if (metadata.ogImage) {
    tags['og:image'] = metadata.ogImage;
    tags['og:image:width'] = '1200';
    tags['og:image:height'] = '630';
    tags['og:image:alt'] = metadata.title;
  }
  
  if (metadata.publishedDate) {
    tags['article:published_time'] = metadata.publishedDate;
  }
  
  if (metadata.modifiedDate) {
    tags['article:modified_time'] = metadata.modifiedDate;
  }
  
  if (metadata.author) {
    tags['article:author'] = metadata.author;
  }
  
  if (metadata.tags && metadata.tags.length > 0) {
    metadata.tags.forEach((tag, i) => {
      tags[`article:tag${i}`] = tag;
    });
  }
  
  return tags;
};

/**
 * Generate Twitter Card tags
 */
export const generateTwitterTags = (metadata: SEOMetadata) => {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:site': '@ziontechgroup',
    'twitter:title': metadata.title,
    'twitter:description': generateMetaDescription(metadata.description, 200),
    'twitter:image': metadata.ogImage || 'https://ziontechgroup.com/og-image.jpg',
    'twitter:image:alt': metadata.title
  };
};

/**
 * Extract keywords from content
 */
export const extractKeywords = (content: string, maxKeywords: number = 10): string[] => {
  // Simple keyword extraction - in production, use NLP library
  const words = content.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 4);
  
  const wordFreq: Record<string, number> = {};
  words.forEach(word => {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  });
  
  return Object.entries(wordFreq)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

/**
 * Generate canonical URL
 */
export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://ziontechgroup.com';
  const cleanPath = path.replace(/\/$/, ''); // Remove trailing slash
  return `${baseUrl}${cleanPath}`;
};

/**
 * Check SEO health of a page
 */
export interface SEOHealth {
  score: number;
  issues: string[];
  suggestions: string[];
}

export const checkSEOHealth = (metadata: SEOMetadata): SEOHealth => {
  const issues: string[] = [];
  const suggestions: string[] = [];
  let score = 100;
  
  // Check title
  if (!metadata.title) {
    issues.push('Missing page title');
    score -= 20;
  } else if (metadata.title.length < 30) {
    suggestions.push('Title is too short (< 30 chars). Consider adding more descriptive words.');
    score -= 5;
  } else if (metadata.title.length > 60) {
    suggestions.push('Title is too long (> 60 chars). It may be truncated in search results.');
    score -= 5;
  }
  
  // Check description
  if (!metadata.description) {
    issues.push('Missing meta description');
    score -= 20;
  } else if (metadata.description.length < 120) {
    suggestions.push('Description is too short (< 120 chars). Add more details.');
    score -= 5;
  } else if (metadata.description.length > 155) {
    suggestions.push('Description is too long (> 155 chars). It may be truncated.');
    score -= 5;
  }
  
  // Check keywords
  if (!metadata.keywords || metadata.keywords.length === 0) {
    suggestions.push('No keywords defined. Add relevant keywords for better targeting.');
    score -= 10;
  } else if (metadata.keywords.length < 5) {
    suggestions.push('Consider adding more keywords (at least 5-10 recommended).');
    score -= 5;
  }
  
  // Check image
  if (!metadata.ogImage) {
    suggestions.push('No OG image defined. Add an image for better social sharing.');
    score -= 10;
  }
  
  // Check canonical URL
  if (!metadata.canonicalUrl) {
    suggestions.push('No canonical URL defined. This helps prevent duplicate content issues.');
    score -= 5;
  }
  
  // Check publish date
  if (!metadata.publishedDate) {
    suggestions.push('No publish date. This helps with freshness signals.');
    score -= 5;
  }
  
  return {
    score: Math.max(0, score),
    issues,
    suggestions
  };
};