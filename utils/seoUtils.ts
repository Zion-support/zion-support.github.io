export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const generateMetaTags = (seoData: SEOData) => {
  const {
    title,
    description,
    keywords,
    image = 'https://ziontechgroup.com/og-image.jpg',
    url = 'https://ziontechgroup.com',
    type = 'website',
    author = 'Zion Tech Group',
    publishedTime,
    modifiedTime,
    section,
    tags = []
  } = seoData;

  const metaTags = [
    // Basic meta tags
    { name: 'title', content: title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords || 'AI solutions, IT services, cloud computing, digital transformation, 5G implementation' },
    { name: 'author', content: author },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    
    // Open Graph tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:site', content: '@ziontechgroup' },
    { name: 'twitter:creator', content: '@ziontechgroup' },
    
    // Additional meta tags
    { name: 'theme-color', content: '#1e40af' },
    { name: 'msapplication-TileColor', content: '#1e40af' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
  ];

  if (publishedTime) {
    metaTags.push({ property: 'article:published_time', content: publishedTime });
  }
  
  if (modifiedTime) {
    metaTags.push({ property: 'article:modified_time', content: modifiedTime });
  }
  
  if (section) {
    metaTags.push({ property: 'article:section', content: section });
  }
  
  if (tags.length > 0) {
    tags.forEach(tag => {
      metaTags.push({ property: 'article:tag', content: tag });
    });
  }

  return metaTags;
};

export const generateStructuredData = (seoData: SEOData) => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    url: baseUrl,
    description: seoData.description,
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      }
    ]
  };

  return {
    organization: organizationSchema,
    website: websiteSchema,
    breadcrumb: breadcrumbSchema
  };
};

export const generateSitemap = (pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>) => {
  const baseUrl = 'https://ziontechgroup.com';
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq || 'weekly'}</changefreq>\n`;
    sitemap += `    <priority>${page.priority || '0.8'}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;
};

export const optimizeTitle = (title: string, siteName: string = 'Zion Tech Group') => {
  const maxLength = 60;
  const separator = ' | ';
  const fullTitle = `${title}${separator}${siteName}`;
  
  if (fullTitle.length <= maxLength) {
    return fullTitle;
  }
  
  const availableLength = maxLength - siteName.length - separator.length;
  const truncatedTitle = title.substring(0, availableLength - 3) + '...';
  
  return `${truncatedTitle}${separator}${siteName}`;
};

export const optimizeDescription = (description: string) => {
  const maxLength = 160;
  
  if (description.length <= maxLength) {
    return description;
  }
  
  return description.substring(0, maxLength - 3) + '...';
};