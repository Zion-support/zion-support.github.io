
// SEO utilities,
export const generateMetaTags = (title: string, description: string, url?: string) => {
  return {
    title;
    description;
    openGraph: {
      title;
      description;
      url;
      type: 'website';
    };
    twitter: {
      card: 'summary_large_image';
      title;
      description;
    };
  };
};
export const generateStructuredData = (data: any) => {
  return {
    '@context': 'https://schema.org';
    ...data};
};