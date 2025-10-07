/**
 * SEO utilities for optimizing search engine visibility
 */

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
    'og:title': ogData.title,
    'og:description': ogData.description,
    'og:image': ogData.image,
    'og:url': ogData.url,
    'og:type': ogData.type || 'website',
    'og:site_name': ogData.siteName,
  };

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
  title?: string;
  description?: string;
  image?: string;
  site?: string;
  creator?: string;
  }): void => {
  const twitterTags = {
    'twitter:card': twitterData.card || 'summary_large_image',
    'twitter:title': twitterData.title,
    'twitter:description': twitterData.description,
    'twitter:image': twitterData.image,
    'twitter:site': twitterData.site,
    'twitter:creator': twitterData.creator,
  };

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

// Structured data
export const setStructuredData = (data: Record<string, unknown>): void => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Canonical URL
export const setCanonicalUrl = (url: string): void => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

// Page title
export const setPageTitle = (title: string): void => {
  document.title = title;
};

// Meta description
export const setMetaDescription = (description: string): void => {
  setMetaTags({ description });
};

// Keywords
export const setKeywords = (keywords: string[]): void => {
  setMetaTags({ keywords: keywords.join(', ') });
};

// Robots meta
export const setRobotsMeta = (robots: string): void => {
  setMetaTags({ robots });
};

// Language
export const setLanguage = (language: string): void => {
  document.documentElement.lang = language;
};

// Viewport
export const setViewport = (viewport: string): void => {
  let viewportMeta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
  if (!viewportMeta) {
    viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    document.head.appendChild(viewportMeta);
  }
  viewportMeta.content = viewport;
};

// Schema generators
export const schemaGenerators = {
  organization: (data: {
    name: string;
    url: string;
    description?: string;
    logo?: string;
    sameAs?: string[];
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    description: data.description,
    logo: data.logo,
    sameAs: data.sameAs,
  }),

  website: (data: {
    name: string;
    url: string;
    description?: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
    description: data.description,
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};

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
};

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
};