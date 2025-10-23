// SEO utility functions
export const generateMetaTags = (title: string, description: string) => {
  return {
    title,
    description,
    'og:title': title,
    'og:description': description,
    'twitter:title': title,
    'twitter:description': description,
  };
};