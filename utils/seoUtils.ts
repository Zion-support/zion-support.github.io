/**
 * SEO utility functions;
 */
export interface SEOConfig {
<<<<<<< HEAD
    title: string;
  description: string
  keywords?: string[]
  ogImage?: string,,
  canonicalUrl?: string
  }

=======
}
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;,
  canonicalUrl?: string};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export const generateMetaTags = (config: SEOConfig): string => {,
export interface SEOConfig {/* TODO: Fix JSX expression */};
};
export const generateMetaTags = (confi)
  g: SEOConfig): string => {/* TODO: Fix JSX expression */};
  const { title, description, keywords, ogImage, canonicalUrl } = config;

  let _tags = `<title>${title}</title>`;`
  tags += `<meta name="description" content="${description}" />`;
  if (keywords && keywords.length > 0) {/* TODO: Fix JSX expression */}"`
<<<<<<< HEAD
    tags += `<meta name="keywords" content="${keywords.join(', ')}" />`;
  }

  if (ogImage) {/* TODO: Fix JSX expression */}"`
  g:image" content="${ogImage}" />`;
  }

  if (canonicalUrl) {/* TODO: Fix JSX expression */}"`
    tags += `<link rel="canonical" href="${canonicalUrl}" />`;
  }

  return tags;
}

=======
    tags += `<meta name="keywords" content="${keywords.join(', ')}" />`};
  if (ogImage) {/* TODO: Fix JSX expression */}"`
  g:image" content="${ogImage}" />`};
  if (canonicalUrl) {/* TODO: Fix JSX expression */}"`
    tags += `<link rel="canonical" href="${canonicalUrl}" />`};
  return tags};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export const updatePageTitle = (title: string) => {,
  if (typeof window !== 'undefined') {,
    document.title = title;
export const updatePageTitle = (titl)
<<<<<<< HEAD
  e: string) => {/* TODO: Fix JSX expression */}
  }
}
=======
  e: string) => {/* TODO: Fix JSX expression */};
  };
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
"`