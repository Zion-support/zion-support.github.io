// SEO utilities
export const generateMetaTags = (data: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}) => {
  const tags = [
    { name: 'title', content: data.title },
    { name: 'description', content: data.description },
    { name: 'robots', content: data.noindex ? 'noindex, nofollow' : 'index, follow' },
    { property: 'og:title', content: data.title },
    { property: 'og:description', content: data.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: data.title },
    { name: 'twitter:description', content: data.description }
  ];
  
  if (data.canonical) {
    tags.push({ rel: 'canonical', href: data.canonical });
  }
  
  if (data.ogImage) {
    tags.push(
      { property: 'og:image', content: data.ogImage },
      { name: 'twitter:image', content: data.ogImage }
    );
  }
  
  return tags;
};

export const generateStructuredData = (type: string, data: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
};