// SEO utilities and metadata management
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export const generateSEOMeta = (data: SEOData) => {
  const {
    title,
    description,
    keywords = [],
    image = '/og-image.jpg',
    url = typeof window !== 'undefined' ? window.location.href : '',
    type = 'website'
  } = data;

  return {
    title: `${title} | Zion Tech Group`,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `${title} | Zion Tech Group`,
      description,
      url,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Zion Tech Group`,
      description,
      images: [image],
    },
  };
};

export const generateStructuredData = (data: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
    description: 'Leading technology solutions provider specializing in AI, cloud computing, and digital transformation.',
    ...data,
  };
};
