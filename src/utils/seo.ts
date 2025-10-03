interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const seoUtils = {
  generateMetaTags: (data: SEOData) => {
    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords.join(', '),
      'og:title': data.title,
      'og:description': data.description,
      'og:image': data.ogImage || '/og-image.jpg',
      'og:type': data.ogType || 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': data.title,
      'twitter:description': data.description,
      'twitter:image': data.ogImage || '/og-image.jpg',
      canonical: data.canonical
    };
  },

  generateStructuredData: (type: string, data: any) => {
    return {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
  },

  optimizeImageAlt: (filename: string, context: string) => {
    const name = filename.replace(/\.[^/.]+$/, '');
    return `${name} - ${context}`;
  }
};

export default seoUtils;
