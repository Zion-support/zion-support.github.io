/**
 * SEO Utilities
 */
=======

// Meta tags management
export const setMetaTags = (tags: Record<string, string>): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
  Object.entries(tags).forEach(([name, content]) => {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  });
};

// Open Graph tags
export const setOpenGraphTags = (ogData: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
=======
  siteName?: string;
}): void => {
  const ogTags = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
    'og:title': ogData.title,
    'og:description': ogData.description,
    'og:image': ogData.image,
    'og:url': ogData.url,
  };

=======
    'og: title': ogData.title,
    'og: description': ogData.description,
    'og: image': ogData.image,
    'og: url': ogData.url,
    'og: type': ogData.type || 'website',
    'og: site_name': ogData.siteName
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3b0a
=======
    'og:type': ogData.type || 'website',
    'og:site_name': ogData.siteName
  };
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
  Object.entries(ogTags).forEach(([property, content]) => {
=======
}): void => {
  if (typeof document === 'undefined') return;

  const ogTags = [
    { property: 'og:title', content: ogData.title },
    { property: 'og:description', content: ogData.description },
    { property: 'og:image', content: ogData.image },
    { property: 'og:url', content: ogData.url },
    { property: 'og:type', content: ogData.type || 'website' }
  ];

  ogTags.forEach(({ property, content }) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
    'og:type': ogData.type || 'website',
    'og:site_name': ogData.siteName
  };
  
  Object.entries(ogTags).forEach(([property, content]) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
    if (content) {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    }
  });
};

// Twitter Card tags
export const setTwitterCardTags = (twitterData: {
  card?: string;
  title?: string;
  description?: string;
  image?: string;
  site?: string;
  creator?: string;
  const twitterTags = {
    'twitter:card': twitterData.card || 'summary_large_image',
    'twitter:title': twitterData.title,
    'twitter:description': twitterData.description,
    'twitter:image': twitterData.image,
    'twitter:site': twitterData.site,
    'twitter:creator': twitterData.creator
  };

=======
  site?: string;
  creator?: string;
=======
  site?: string;
  creator?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
  title?: string;
  description?: string;
  image?: string;
}): void => {
  const twitterTags = {
=======
  title?: string;
  description?: string;
  image?: string;
  creator?: string;
  site?: string;
}): void => {
  const twitterTags = {
    'twitter:card': twitterData.card || 'summary_large_image',
    'twitter:title': twitterData.title,
    'twitter:description': twitterData.description,
    'twitter:image': twitterData.image,
    'twitter:creator': twitterData.creator,
    'twitter:site': twitterData.site
  };
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
  Object.entries(twitterTags).forEach(([name, content]) => {
=======
}): void => {
  if (typeof document === 'undefined') return;

  const twitterTags = [
    { name: 'twitter:card', content: twitterData.card || 'summary_large_image' },
    { name: 'twitter:title', content: twitterData.title },
    { name: 'twitter:description', content: twitterData.description },
    { name: 'twitter:image', content: twitterData.image },
    { name: 'twitter:site', content: twitterData.site },
    { name: 'twitter:creator', content: twitterData.creator }
  ];

  twitterTags.forEach(({ name, content }) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
    'twitter:card': twitterData.card || 'summary_large_image',
    'twitter:site': twitterData.site,
    'twitter:creator': twitterData.creator,
    'twitter:title': twitterData.title,
    'twitter:description': twitterData.description,
    'twitter:image': twitterData.image
  };
  
  Object.entries(twitterTags).forEach(([name, content]) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
    if (content) {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    }
  });
};
// Structured data (JSON-LD)
export const setStructuredData = (data: any): void => {
  // Remove existing structured data
  const existingScript = document.querySelector(
    'script[type="application/ld+json"]'
  );
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3b0a
=======

// Structured data
export const setStructuredData = (data: any): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

// Structured data
export const setStructuredData = (data: any): void => {
  if (typeof document === 'undefined') return;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
// Canonical URL
export const setCanonicalUrl = (url: string): void => {
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
  }
  link.href = url;
};
// Page title optimization
export const setPageTitle = (title: string, siteName?: string): void => {
  const fullTitle = siteName ? `${title} | ${siteName}` : title;
  document.title = fullTitle;
=======

// Page title
export const setPageTitle = (title: string): void => {
  document.title = title;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
};

// Meta description
export const setMetaDescription = (description: string): void => {
  let meta = document.querySelector(
    'meta[name="description"]'
  ) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'description';
    document.head.appendChild(meta);
  }
  meta.content = description;
};

// Keywords meta tag
export const setKeywords = (keywords: string[]): void => {
  let meta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'keywords';
    document.head.appendChild(meta);
  }
  meta.content = keywords.join(', ');
};

// Robots meta tag
export const setRobotsMeta = (robots: {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
}): void => {
  const directives: string[] = [];
  if (robots.index === false) directives.push('noindex');
  if (robots.follow === false) directives.push('nofollow');
  if (robots.noarchive) directives.push('noarchive');
  if (robots.nosnippet) directives.push('nosnippet');
  if (robots.noimageindex) directives.push('noimageindex');
  if (directives.length === 0) {
    directives.push('index', 'follow');
  }
  
  let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'robots';
    document.head.appendChild(meta);
  }
  meta.content = directives.join(', ');
};

// Language and locale
export const setLanguage = (lang: string): void => {
  document.documentElement.lang = lang;
};

// Viewport meta tag
export const setViewport = (viewport: {
  width?: string;
  initialScale?: number;
  maximumScale?: number;
  userScalable?: boolean;
}): void => {
  const content = [
    viewport.width ? `width=${viewport.width}` : 'width=device-width',
    viewport.initialScale
      ? `initial-scale=${viewport.initialScale}`
      : 'initial-scale=1',
    viewport.maximumScale ? `maximum-scale=${viewport.maximumScale}` : '',
    viewport.userScalable === false ? 'user-scalable=no' : '',
  ]
    .filter(Boolean)
    .join(') ');
  let meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
  if (!meta) {meta = document.createElement('meta');
=======
  setMetaTags({ description });
};

// Keywords
export const setKeywords = (keywords: string): void => {
  setMetaTags({ keywords });
};

// Robots meta
export const setRobotsMeta = (robots: string): void => {
  setMetaTags({ robots });
};

// Language
export const setLanguage = (lang: string): void => {
  document.documentElement.lang = lang;
};

// Viewport
export const setViewport = (viewport: string): void => {
  let meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
    meta.name = 'viewport';
    document.head.appendChild(meta);
  }
  meta.content = viewport;
};
=======

// SEO audit
export const seoAudit = async (): Promise<{
  title: boolean;
  description: boolean;
  h1: boolean;
  images: boolean;
  links: boolean;
  score: number;
}> => {
  const results = {
    title: !!document.title,
    description: !!document.querySelector('meta[name="description"]'),
    h1: !!document.querySelector('h1'),
    images: document.querySelectorAll('img[alt]').length > 0,
    links: document.querySelectorAll('a[href]').length > 0,
    score: 0,
  };

  const score = Object.values(results).filter(Boolean).length;
  results.score = (score / (Object.keys(results).length - 1)) * 100;

  return results;
=======
// Generate sitemap
export const generateSitemap = (urls: string[]): string => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return sitemap;
};

// Optimize images
export const optimizeImages = (): void => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Add loading="lazy" if not present
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }

    // Add alt text if missing
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', '');
    }

    // Add width and height if missing
    if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
      img.addEventListener('load', () => {
        img.setAttribute('width', img.naturalWidth.toString());
        img.setAttribute('height', img.naturalHeight.toString());
      });
    }
  });
};

// Generate robots.txt
export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

Sitemap: ${window.location.origin}/sitemap.xml`;
};

export default {
  setMetaTags,
  setOpenGraphTags,
  setTwitterCardTags,
  setStructuredData,
  generateSitemap,
  optimizeImages,
  generateRobotsTxt
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a4f
=======

// Schema generators
export const schemaGenerators = {
  organization: (data: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    ...data
  }),
  website: (data: any) => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    ...data
  }),
  article: (data: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    ...data
  })
};

// SEO audit
export const seoAudit = (): any => {
  const issues: string[] = [];
  
  // Check for title
  if (!document.title) {
    issues.push('Missing page title');
  }
  
  // Check for meta description
  const description = document.querySelector('meta[name="description"]');
  if (!description) {
    issues.push('Missing meta description');
  }
  
  // Check for canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    issues.push('Missing canonical URL');
  }
  
  // Check for h1 tag
  const h1 = document.querySelector('h1');
  if (!h1) {
    issues.push('Missing h1 tag');
  }
  
  return {
    issues,
    score: Math.max(0, 100 - issues.length * 10)
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
};
=======
export function setMetaTags(tags: Record<string, string>): void {
  // Meta tags implementation
}

export function setOpenGraphTags(tags: Record<string, string>): void {
  // OpenGraph implementation
}

export function setTwitterCardTags(tags: Record<string, string>): void {
  // Twitter Card implementation
}

export function setStructuredData(data: any): void {
  // Structured data implementation
}

export function setCanonicalUrl(url: string): void {
  // Canonical URL implementation
}

export function setPageTitle(title: string): void {
  document.title = title;
}

export function setMetaDescription(description: string): void {
  // Meta description implementation
}

export function setKeywords(keywords: string): void {
  // Keywords implementation
}

export function setRobotsMeta(robots: string): void {
  // Robots meta implementation
}

export function setLanguage(lang: string): void {
  document.documentElement.lang = lang;
}

export function setViewport(): void {
  // Viewport implementation
}

export const schemaGenerators = {
  organization: () => ({}),
  website: () => ({}),
  article: () => ({}),
};

export async function seoAudit(): Promise<any> {
  return {};
}

export default {
  setMetaTags,
  setOpenGraphTags,
  setTwitterCardTags,
  setStructuredData,
  setCanonicalUrl,
  setPageTitle,
  setMetaDescription,
  setKeywords,
  setRobotsMeta,
  setLanguage,
  setViewport,
  schemaGenerators,
  seoAudit,
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

// Generate sitemap
export const generateSitemap = async (): Promise<string> => {
  // This would typically generate a sitemap based on your routes
  const baseUrl = process.env['NEXT_PUBLIC_BASE_URL'] || 'https://example.com';
  const routes = ['/', '/about', '/services', '/contact'];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Optimize images for SEO
export const optimizeImages = async (): Promise<void> => {
  if (typeof document === 'undefined') return;

  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Add alt text if missing
    if (!img.alt) {
      img.alt = 'Image';
    }
    
    // Add loading="lazy" for performance
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
};

// SEO score calculator
export const calculateSEOScore = (): number => {
  if (typeof document === 'undefined') return 0;

  let score = 0;
  const checks = [
    // Title tag
    () => document.title ? 10 : 0,
    // Meta description
    () => document.querySelector('meta[name="description"]') ? 10 : 0,
    // H1 tag
    () => document.querySelector('h1') ? 10 : 0,
    // Alt text on images
    () => {
      const images = document.querySelectorAll('img');
      const imagesWithAlt = document.querySelectorAll('img[alt]');
      return images.length > 0 ? (imagesWithAlt.length / images.length) * 20 : 20;
    },
    // Open Graph tags
    () => document.querySelector('meta[property="og:title"]') ? 10 : 0,
    // Structured data
    () => document.querySelector('script[type="application/ld+json"]') ? 10 : 0,
    // Internal links
    () => {
      const links = document.querySelectorAll('a[href]');
      const internalLinks = Array.from(links).filter(link => 
        (link as HTMLAnchorElement).href.startsWith(window.location.origin)
      );
      return internalLinks.length > 0 ? 10 : 0;
    },
    // External links
    () => {
      const links = document.querySelectorAll('a[href]');
      const externalLinks = Array.from(links).filter(link => 
        !(link as HTMLAnchorElement).href.startsWith(window.location.origin)
      );
      return externalLinks.length > 0 ? 10 : 0;
    }
  ];

  checks.forEach(check => {
    try {
      score += check();
    } catch (e) {
      // Ignore errors in individual checks
    }
  });

  return Math.min(score, 100);
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
