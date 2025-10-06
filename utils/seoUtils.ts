/**
 * SEO utilities for optimizing search engine visibility
 */

// Meta tags management
export const setMetaTags = (tags: Record<string, string>): void => {
  if (typeof document === 'undefined') return;
  
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
export const setStructuredData = (data: any): void => {
  if (typeof document === 'undefined') return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

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