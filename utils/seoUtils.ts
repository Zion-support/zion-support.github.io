// SEO utilities

export const seoUtils = {
  generateMetaTags: (title: string, description: string) => {
    return {
      title,
      description,
      keywords: 'technology, solutions, consulting'
    };
  }
};

export default seoUtils;