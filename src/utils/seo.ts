// SEO utilities and helpers
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, any>;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export class SEOOptimizer {
  private static instance: SEOOptimizer;
  private defaultData: Partial<SEOData> = {
    title: 'Zion Tech Group - Advanced Technology Solutions',
    description: 'Leading provider of AI, blockchain, cloud computing, and digital transformation services. Empowering businesses with cutting-edge technology solutions.',
    keywords: ['AI', 'artificial intelligence', 'blockchain', 'cloud computing', 'digital transformation', 'technology solutions', 'Zion Tech Group'],
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
    author: 'Zion Tech Group'
  };

  private constructor() {}

  public static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  public generateMetaTags(data: SEOData): string {
    const seoData = { ...this.defaultData, ...data };
    
    const tags = [
      `<title>${seoData.title}</title>`,
      `<meta name="description" content="${seoData.description}" />`,
      `<meta name="keywords" content="${seoData.keywords?.join(', ')}" />`,
      `<meta name="author" content="${seoData.author}" />`,
      `<meta name="robots" content="${seoData.robots}" />`,
      seoData.canonical ? `<link rel="canonical" href="${seoData.canonical}" />` : '',
      
      // Open Graph
      `<meta property="og:title" content="${seoData.ogTitle || seoData.title}" />`,
      `<meta property="og:description" content="${seoData.ogDescription || seoData.description}" />`,
      `<meta property="og:type" content="website" />`,
      seoData.ogUrl ? `<meta property="og:url" content="${seoData.ogUrl}" />` : '',
      seoData.ogImage ? `<meta property="og:image" content="${seoData.ogImage}" />` : '',
      
      // Twitter Card
      `<meta name="twitter:card" content="${seoData.twitterCard}" />`,
      `<meta name="twitter:title" content="${seoData.twitterTitle || seoData.title}" />`,
      `<meta name="twitter:description" content="${seoData.twitterDescription || seoData.description}" />`,
      seoData.twitterImage ? `<meta name="twitter:image" content="${seoData.twitterImage}" />` : '',
      
      // Additional meta tags
      seoData.publishedTime ? `<meta property="article:published_time" content="${seoData.publishedTime}" />` : '',
      seoData.modifiedTime ? `<meta property="article:modified_time" content="${seoData.modifiedTime}" />` : '',
      seoData.section ? `<meta property="article:section" content="${seoData.section}" />` : '',
      seoData.tags ? seoData.tags.map(tag => `<meta property="article:tag" content="${tag}" />`).join('\n') : '',
    ].filter(Boolean);

    return tags.join('\n');
  }

  public generateStructuredData(data: SEOData): string {
    if (!data.structuredData) return '';

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: data.description,
      url: data.canonical || 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group'
      ],
      ...data.structuredData
    };

    return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
  }

  public generateSitemap(links: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${links.map(link => `  <url>
    <loc>${link.url}</loc>
    ${link.lastmod ? `<lastmod>${link.lastmod}</lastmod>` : ''}
    ${link.changefreq ? `<changefreq>${link.changefreq}</changefreq>` : ''}
    ${link.priority ? `<priority>${link.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }

  public generateRobotsTxt(disallow: string[] = []): string {
    return `User-agent: *
Allow: /
${disallow.map(path => `Disallow: ${path}`).join('\n')}

Sitemap: https://ziontechgroup.com/sitemap.xml`;
  }

  public optimizeTitle(title: string, maxLength: number = 60): string {
    if (title.length <= maxLength) return title;
    
    const words = title.split(' ');
    let optimized = '';
    
    for (const word of words) {
      if ((optimized + ' ' + word).trim().length <= maxLength) {
        optimized += (optimized ? ' ' : '') + word;
      } else {
        break;
      }
    }
    
    return optimized || title.substring(0, maxLength - 3) + '...';
  }

  public optimizeDescription(description: string, maxLength: number = 160): string {
    if (description.length <= maxLength) return description;
    
    return description.substring(0, maxLength - 3) + '...';
  }

  public generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>): string {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };

    return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
  }

  public generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>): string {
    const structuredData = {
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

    return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
  }
}

// Utility functions
export const generateMetaTags = (data: SEOData): string => {
  return SEOOptimizer.getInstance().generateMetaTags(data);
};

export const generateStructuredData = (data: SEOData): string => {
  return SEOOptimizer.getInstance().generateStructuredData(data);
};

export const optimizeTitle = (title: string, maxLength?: number): string => {
  return SEOOptimizer.getInstance().optimizeTitle(title, maxLength);
};

export const optimizeDescription = (description: string, maxLength?: number): string => {
  return SEOOptimizer.getInstance().optimizeDescription(description, maxLength);
};

// Common SEO data for different pages
export const SEO_PAGES = {
  HOME: {
    title: 'Zion Tech Group - Advanced Technology Solutions',
    description: 'Leading provider of AI, blockchain, cloud computing, and digital transformation services. Empowering businesses with cutting-edge technology solutions.',
    keywords: ['AI', 'artificial intelligence', 'blockchain', 'cloud computing', 'digital transformation', 'technology solutions']
  },
  ABOUT: {
    title: 'About Zion Tech Group - Technology Innovation Leaders',
    description: 'Learn about Zion Tech Group\'s mission to revolutionize technology through AI, blockchain, and cloud solutions. Discover our team and company values.',
    keywords: ['about', 'company', 'mission', 'team', 'technology innovation', 'AI solutions']
  },
  SERVICES: {
    title: 'Technology Services - AI, Blockchain, Cloud Solutions',
    description: 'Comprehensive technology services including AI development, blockchain solutions, cloud migration, and digital transformation consulting.',
    keywords: ['services', 'AI development', 'blockchain solutions', 'cloud migration', 'consulting', 'technology services']
  },
  CONTACT: {
    title: 'Contact Zion Tech Group - Get In Touch',
    description: 'Contact Zion Tech Group for technology consulting, AI solutions, and digital transformation services. Get in touch with our expert team.',
    keywords: ['contact', 'consulting', 'get in touch', 'technology support', 'AI consulting']
  }
} as const;