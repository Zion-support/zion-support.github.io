/**
 * SEO Utilities
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

// Open Graph tags management
export const setOpenGraphTags = (tags: Record<string, string>): void => {
  if (typeof document === 'undefined') return;
  
  Object.entries(tags).forEach(([property, content]) => {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  });
};

// Twitter Card tags management
export const setTwitterCardTags = (tags: Record<string, string>): void => {
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

// Structured data management
export const setStructuredData = (data: object): void => {
  if (typeof document === 'undefined') return;
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Canonical URL management
export const setCanonicalUrl = (url: string): void => {
  if (typeof document === 'undefined') return;
  
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
};

// Title management
export const setTitle = (title: string): void => {
  if (typeof document === 'undefined') return;
  document.title = title;
};

// Description management
export const setDescription = (description: string): void => {
  setMetaTags({ description });
};

// Keywords management
export const setKeywords = (keywords: string): void => {
  setMetaTags({ keywords });
};

// Robots meta tag management
export const setRobots = (robots: string): void => {
  setMetaTags({ robots });
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

// SEO score calculation (simplified)
export const calculateSEOScore = (): number => {
  let score = 0;
  
  // Check for title
  if (document.title && document.title.length > 0) {
    score += 20;
  }
  
  // Check for meta description
  const description = document.querySelector('meta[name="description"]');
  if (description && description.getAttribute('content')) {
    score += 20;
  }
  
  // Check for h1 tag
  if (document.querySelector('h1')) {
    score += 20;
  }
  
  // Check for images with alt text
  const images = document.querySelectorAll('img');
  const imagesWithAlt = Array.from(images).filter(img => img.alt);
  if (imagesWithAlt.length === images.length && images.length > 0) {
    score += 20;
  }
  
  // Check for internal links
  const links = document.querySelectorAll('a[href]');
  const internalLinks = Array.from(links).filter(link => {
    const href = link.getAttribute('href');
    return href && (href.startsWith('/') || href.includes(window.location.hostname));
  });
  if (internalLinks.length > 0) {
    score += 20;
  }
  
  return score;
};

// SEO recommendations
export const getSEORecommendations = (): string[] => {
  const recommendations = [];
  
  // Check title length
  if (document.title.length > 60) {
    recommendations.push('Title is too long (should be under 60 characters)');
  } else if (document.title.length < 30) {
    recommendations.push('Title is too short (should be at least 30 characters)');
  }
  
  // Check meta description length
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    const descContent = description.getAttribute('content') || '';
    if (descContent.length > 160) {
      recommendations.push('Meta description is too long (should be under 160 characters)');
    } else if (descContent.length < 120) {
      recommendations.push('Meta description is too short (should be at least 120 characters)');
    }
  } else {
    recommendations.push('Missing meta description');
  }
  
  // Check for h1 tag
  if (!document.querySelector('h1')) {
    recommendations.push('Missing H1 tag');
  }
  
  // Check for images without alt text
  const images = document.querySelectorAll('img');
  const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
  if (imagesWithoutAlt.length > 0) {
    recommendations.push(`${imagesWithoutAlt.length} images missing alt text`);
  }
  
  return recommendations;
};

export default {
  setMetaTags,
  setOpenGraphTags,
  setTwitterCardTags,
  setStructuredData,
  setCanonicalUrl,
  setTitle,
  setDescription,
  setKeywords,
  setRobots,
  generateSitemap,
  calculateSEOScore,
  getSEORecommendations
};