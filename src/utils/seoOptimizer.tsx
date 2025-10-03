/**
 * SEO Optimization Utilities
 * Comprehensive SEO tools and metadata management
 */

import { Helmet } from 'react-helmet-async';

// SEO metadata interface
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// Default SEO values
const DEFAULT_SEO = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services. Expert consulting in AI workflow automation, quantum computing, and edge AI.',
  keywords: 'AI, artificial intelligence, cloud computing, IT solutions, digital transformation, AI automation, quantum computing, edge AI',
  image: '/images/og-image.jpg',
  url: typeof window !== 'undefined' ? window.location.href : '',
  type: 'website',
  author: 'Zion Tech Group'
};

// SEO component
export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  image = DEFAULT_SEO.image,
  url = DEFAULT_SEO.url,
  type = DEFAULT_SEO.type,
  author = DEFAULT_SEO.author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  canonical,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullImage = image.startsWith('http') ? image : `${window.location.origin}${image}`;
  const canonicalUrl = canonical || url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Article specific */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags && tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Language */}
      <html lang="en" />
    </Helmet>
  );
};

// Generate structured data
export const generateStructuredData = (type: 'Organization' | 'Article' | 'Service' | 'FAQPage', data: any) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseSchema,
        name: 'Zion Tech Group',
        description: 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.',
        url: 'https://ziontechgroup.com',
        logo: 'https://ziontechgroup.com/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-302-464-0950',
          contactType: 'customer service',
          availableLanguage: 'English'
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '364 E Main St STE 1008',
          addressLocality: 'Middletown',
          addressRegion: 'DE',
          postalCode: '19709',
          addressCountry: 'US'
        },
        sameAs: [
          'https://linkedin.com/company/zion-tech-group',
          'https://twitter.com/ziontechgroup'
        ],
        foundingDate: '2020',
        numberOfEmployees: '50-100',
        services: [
          'AI Workflow Automation',
          'AI Virtual Assistant',
          'AI Data Analytics',
          'Quantum Computing Consulting',
          'Edge AI Solutions',
          'Zero Trust Security',
          'Cybersecurity',
          'Cloud Infrastructure'
        ]
      };

    case 'Article':
      return {
        ...baseSchema,
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Person',
          name: data.author || 'Zion Tech Group'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/logo.png'
          }
        },
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime,
        image: data.image,
        url: data.url
      };

    case 'Service':
      return {
        ...baseSchema,
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        },
        areaServed: 'Worldwide',
        serviceType: data.category,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        }
      };

    case 'FAQPage':
      return {
        ...baseSchema,
        mainEntity: data.faqs.map((faq: any) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };

    default:
      return baseSchema;
  }
};

// SEO utility functions
export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }

  return cleanContent.substring(0, maxLength - 3) + '...';
};

export const generateTitle = (pageTitle: string, siteName: string = 'Zion Tech Group'): string => {
  if (pageTitle.includes(siteName)) {
    return pageTitle;
  }
  return `${pageTitle} | ${siteName}`;
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single
    .trim();
};

export const generateKeywords = (content: string, tags: string[] = []): string => {
  const baseKeywords = [
    'AI', 'artificial intelligence', 'cloud computing', 'IT solutions',
    'digital transformation', 'automation', 'quantum computing', 'edge AI'
  ];

  // Extract keywords from content (simplified)
  const contentKeywords = content
    .toLowerCase()
    .match(/\b\w{4,}\b/g) || [];
  
  // Get most common words
  const wordCount = contentKeywords.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topKeywords = Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);

  return [...baseKeywords, ...tags, ...topKeywords]
    .filter((keyword, index, arr) => arr.indexOf(keyword) === index)
    .join(', ');
};

// Breadcrumb generator
export const generateBreadcrumbs = (path: string) => {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://ziontechgroup.com'
    }
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      item: `https://ziontechgroup.com${currentPath}`
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs
  };
};

// Sitemap generation helper
export const generateSitemapEntry = (url: string, priority: number = 0.5, changefreq: string = 'monthly') => ({
  url,
  lastmod: new Date().toISOString().split('T')[0],
  changefreq,
  priority
});

// Page speed optimization
export const optimizePageSpeed = () => {
  // Preload critical resources
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/styles/critical.css',
    '/scripts/critical.js'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });

  // Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// SEO performance tracking
export const trackSEOMetrics = () => {
  // Track Core Web Vitals
  if ('web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }

  // Track page load time
  window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`📊 Page Load Time: ${loadTime}ms`);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_load_time', {
        value: loadTime,
        event_category: 'Performance'
      });
    }
  });
};