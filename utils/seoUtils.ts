/**
 * SEO utility functions;
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;,
  canonicalUrl?: string;
}

export const generateMetaTags = (config: SEOConfig): string => {,
}

export const generateMetaTags = (confi)
  const { title, description, keywords, ogImage, canonicalUrl } = config;

  let _tags = `<title>${title}</title>`;`
  tags += `<meta name="description" content="${description}" />`;

    tags += `<meta name="keywords" content="${keywords.join(', ')}" />`;
  }

  g:image" content="${ogImage}" />`;
  }

    tags += `<link rel="canonical" href="${canonicalUrl}" />`;
  }

  return tags;
};

export const updatePageTitle = (title: string) => {,
  if (typeof window !== 'undefined') {,
    document.title = title;
export const updatePageTitle = (titl)
  }
};
"`