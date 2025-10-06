/**
 * SEO Utilities
 */
<<<<<<< HEAD

// Meta tags management
export const setMetaTags = (tags: Record<string, string>): void => {
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
  siteName?: string;
}): void => {
  const ogTags = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
    'og:title': ogData.title,
    'og:description': ogData.description,
    'og:image': ogData.image,
    'og:url': ogData.url,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    'og:type': ogData.type || 'website',
    'og:site_name': ogData.siteName,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a4f
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
<<<<<<< HEAD
<<<<<<< HEAD
  title?: string;
  description?: string;
  image?: string;
  site?: string;
  creator?: string;
<<<<<<< HEAD
}) => {
=======
}): void => {
  const twitterTags = {
    'twitter:card': twitterData.card || 'summary_large_image',
    'twitter:title': twitterData.title,
    'twitter:description': twitterData.description,
    'twitter:image': twitterData.image,
    'twitter:site': twitterData.site,
    'twitter:creator': twitterData.creator
}): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a4f
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
  title?: string;
  description?: string;
  image?: string;
}): void => {
  const twitterTags = {
    'twitter: card': twitterData.card || 'summary_large_image',
    'twitter: site': twitterData.site,
    'twitter: creator': twitterData.creator,
    'twitter: title': twitterData.title,
    'twitter: description': twitterData.description,
    'twitter: image': twitterData.image
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3b0a
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
<<<<<<< HEAD
<<<<<<< HEAD

// Structured data
export const setStructuredData = (data: Record<string, unknown>): void => {
=======
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
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
<<<<<<< HEAD
=======
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a4f
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

// Canonical URL
export const setCanonicalUrl = (url: string): void => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
  }
  link.href = url;
};
<<<<<<< HEAD
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
<<<<<<< HEAD
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
export const setKeywords = (keywords: string[]): void => {let meta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'keywords';
    document.head.appendChild(meta);
  }
  meta.content = keywords.join(') ');
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
  meta.content = directives.join(') ');
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
<<<<<<< HEAD
// Schema.org structured data generators
export const schemaGenerators = {
  organization: (data: {
    name: string;
    url?: string;
    logo?: string;
    description?: string;
    address?: any;
    contactPoint?: any;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    address: data.address,
    contactPoint: data.contactPoint
  }),
  website: (data: {
    name: string;
    url: string;
    description?: string;
    publisher?: any;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
    description: data.description,
    publisher: data.publisher
  }),
  article: (data: {
    headline: string;
    author: any;
    datePublished: string;
    dateModified?: string;
    description?: string;
    image?: string;
    url?: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    author: data.author,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    description: data.description,
    image: data.image,
    url: data.url
  }),
  breadcrumb: (items: Array<{name: string; url: string}>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    })),
  }),
};
<<<<<<< HEAD
// SEO audit helpers
export const seoAudit = {
  checkTitle: (): {
    hasTitle: boolean;
    titleLength: number;
    isValid: boolean;
  } => {
    const title = document.title;
    return {
      hasTitle: !!title,
      titleLength: title.length,
      isValid: title.length >= 30 && title.length <= 60
    };
  },
  checkDescription: (): {
    hasDescription: boolean;
    descriptionLength: number;
    isValid: boolean;
  } => {
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    const description = meta?.content || '';
    return {
      hasDescription: !!description,
      descriptionLength: description.length,
      isValid: description.length >= 120 && description.length <= 160
    };
  },
  checkHeadings: (): {
    h1Count: number;
    hasH1: boolean;
    headingStructure: string[];
  } => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    const headingStructure = Array.from(headings).map(h =>
      h.tagName.toLowerCase()
    );
    return {
      h1Count,
      hasH1: h1Count > 0,
      headingStructure
    };
  },
  checkImages: (): {
    totalImages: number;
    imagesWithoutAlt: number;
    imagesWithoutAltText: string[];
  } => {
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    const imagesWithoutAltText = Array.from(imagesWithoutAlt).map(img => img.src);
    return {
      totalImages: images.length,
      imagesWithoutAlt: imagesWithoutAlt.length,
      imagesWithoutAltText
    };
  },
  checkLinks: (): {
    totalLinks: number;
    internalLinks: number;
    externalLinks: number;
  } => {
    const links = document.querySelectorAll('a[href]');
    const currentDomain = window.location.hostname;
    let internalLinks = 0;
    let externalLinks = 0;
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        try {
          const url = new URL(href, window.location.href);
          if (url.hostname === currentDomain) {
            internalLinks++;
          } else {
            externalLinks++;
          }
        } catch {
          // Relative links are considered internal
          internalLinks++;
        }
      }
    });
    return {
      totalLinks: links.length,
      internalLinks,
      externalLinks
    };
  },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3b0a
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
