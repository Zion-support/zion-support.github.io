/**
 * SEO utility functions
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export const generateMetaTags = (config: SEOConfig): string => {
  const { title, description, keywords, ogImage, canonicalUrl } = config;

  let tags = `<title>${title}</title>`;
  tags += `<meta name="description" content="${description}" />`;

  if (keywords && keywords.length > 0) {
    tags += `<meta name="keywords" content="${keywords.join(', ')}" />`;
  }

  if (ogImage) {
    tags += `<meta property="og:image" content="${ogImage}" />`;
  }

  if (canonicalUrl) {
    tags += `<link rel="canonical" href="${canonicalUrl}" />`;
  }

  return tags;
};

export const updatePageTitle = (title: string) => {
  if (typeof window !== 'undefined') {
    document.title = title;
  }
};
