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
}): void => {
  const ogTags = {
    'og:title': ogData.title,
    'og:description': ogData.description,
    'og:image': ogData.image,
    'og:url': ogData.url,
    'og:type': ogData.type
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
}): void => {
  const twitterTags = {
    'twitter:card': twitterData.card,
    'twitter:title': twitterData.title,
    'twitter:description': twitterData.description,
    'twitter:image': twitterData.image
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
export const setStructuredData = (data: any): void => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
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