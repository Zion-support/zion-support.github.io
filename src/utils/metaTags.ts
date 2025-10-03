// SEO meta tags generator
export const generateMetaTags = (pageData) => {
  const {
    title = 'Zion AI - Advanced AI Solutions',
    description = 'Leading provider of AI-powered solutions for enterprises',
    keywords = 'AI, artificial intelligence, machine learning, enterprise solutions',
    image = '/images/og-default.jpg',
    url = window.location.href
  } = pageData;
  
  return {
    title: `${title} | Zion AI`,
    description,
    keywords,
    openGraph: {
      title,
      description,
      image,
      url,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image
    }
  };
};