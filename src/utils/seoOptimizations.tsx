// SEO Enhancement Utilities

export const seoUtils = {
  generateMetaTags: (title: string, description: string, keywords: string[]) => {
    return {
      title,
      description,
      keywords: keywords.join(', '),
      openGraph: {
        title,
        description,
        type: 'website',
      },
    };
  },

  optimizeContent: (content: string) => {
    // Basic content optimization
    return content
      .replace(/s+/g, ' ')
      .trim()
      .substring(0, 160); // Truncate for meta description
  },

  generateStructuredData: (data: any) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      ...data,
    };
  },
};

export default seoUtils;