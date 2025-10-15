export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export const generateSEOTags = (data: SEOData) => {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords.join(', '),
    canonical: data.canonical,
    openGraph: {
      title: data.ogTitle || data.title,
      description: data.ogDescription || data.description,
      images: data.ogImage ? [{ url: data.ogImage }] : [],
    },
    twitter: {
      card: data.twitterCard || 'summary_large_image',
      title: data.twitterTitle || data.title,
      description: data.twitterDescription || data.description,
      images: data.twitterImage ? [data.twitterImage] : [],
    },
  };
};
