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
    'og:site_name': ogData.siteName
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

// Canonical URL
export const setCanonicalUrl = (url: string): void => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
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
    meta.name = 'viewport';
    document.head.appendChild(meta);
  }
  meta.content = viewport;
};

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
};