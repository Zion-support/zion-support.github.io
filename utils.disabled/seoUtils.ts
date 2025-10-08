/**
 * SEO Utilities
 */

// Meta tags management
export const setMetaTags = (tags: Record<string, string>): void => {

// Meta tags management
export const setMetaTags = (tags: Record<string, string>): void => {
  if (typeof document === 'undefined') return;
  

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

    'og:title': ogData.title,
    'og:description': ogData.description,
    'og:image': ogData.image,
    'og:url': ogData.url,
  };

    'og: title': ogData.title,
    'og: description': ogData.description,
    'og: image': ogData.image,
    'og: url': ogData.url,
    'og: type': ogData.type || 'website',
    'og: site_name': ogData.siteName
  };
    'og:type': ogData.type || 'website',
    'og:site_name': ogData.siteName
  };
  
  Object.entries(ogTags).forEach(([property, content]) => {
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
    'og:type': ogData.type || 'website',
    'og:site_name': ogData.siteName
  };
  
    }
  });
};

  title?: string;
  description?: string;
  image?: string;
}): void => {
  const twitterTags = {
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
  
  Object.entries(twitterTags).forEach(([name, content]) => {
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
    'twitter:card': twitterData.card || 'summary_large_image',
    'twitter:site': twitterData.site,
    'twitter:creator': twitterData.creator,
    'twitter:title': twitterData.title,
    'twitter:description': twitterData.description,
    'twitter:image': twitterData.image
  };
  
    }
  });
};

// Structured data
export const setStructuredData = (data: any): void => {

// Structured data management
export const setStructuredData = (data: object): void => {
  if (typeof document === 'undefined') return;
  

// Structured data
export const setStructuredData = (data: Record<string, unknown>): void => {
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

// Structured data
export const setStructuredData = (data: any): void => {

// Structured data
export const setStructuredData = (data: any): void => {
  if (typeof document === 'undefined') return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
// Canonical URL
export const setCanonicalUrl = (url: string): void => {
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  link.href = url;
};
// Page title optimization
export const setPageTitle = (title: string, siteName?: string): void => {
  const fullTitle = siteName ? `${title} | ${siteName}` : title;
  document.title = fullTitle;

// Page title
export const setPageTitle = (title: string): void => {
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

    meta.name = 'viewport';
    document.head.appendChild(meta);
  }
  meta.content = viewport;
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
