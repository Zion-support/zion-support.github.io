// SEO optimization utilities
export const generateMetaTags = (title: string, description: string, url: string) => {
  return {
    title,
    description,
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
  };
};

export const generateStructuredData = (type: string, data: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
};

export const generateSitemap = (routes: string[]) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com';
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }));
};