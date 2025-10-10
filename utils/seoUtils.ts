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

  let _tags = `<title>${title}</title>`;
  tags += `<meta name="description" content="${description}" />`;</meta>if</meta> (keywords && keywords.length > 0) {
    tags += `<meta name="keywords" content="${keywords.join(', ')}" />`;</meta>
  }

  if (ogImage) {
    tags += `<meta property="og:image" content="${ogImage}" />`;</meta>
  }

  if (canonicalUrl) {
    tags += `<link rel="canonical" href="${canonicalUrl}" />`;</link>
  }

  return tags;
};

export const updatePageTitle = (title: string) => {
  if (typeof window !== 'undefined') {
    document.title = title;
  }
};
