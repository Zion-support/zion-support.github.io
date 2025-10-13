<<<<<<< HEAD
interface SEOUtilsConfig {
  enabled: boolean;
  analytics: boolean;
  sitemap: boolean;
}

export class SEOUtils {
  private config: SEOUtilsConfig;

  constructor(config: Partial<SEOUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      analytics: true,
      sitemap: true,
=======
interface SeoConfig {
  enabled: boolean;
  metaTags: boolean;
  structuredData: boolean;
}

export class SeoUtils {
  private config: SeoConfig;

  constructor(config: Partial<SeoConfig> = {}) {
    this.config = {
      enabled: true,
      metaTags: true,
      structuredData: true,
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('SEO utils initialized');
    }
  }

<<<<<<< HEAD
/**
 * SEO utility functions
 */;
export interface SEOConfig {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: string
  description: string
  keywords?: string[]
  ogImage?: string,,
  canonicalUrl?: string
  }
;
export const generateMetaTags = (config: SEOConfig): string => {,;
export interface SEOConfig {/* TODO: Fix JSX expression */}
}
;
export const generateMetaTags = (confi)
  g: SEOConfig): string => {/* TODO: Fix JSX expression */}
  const { title, description, keywords, ogImage, canonicalUrl } = config;
let _tags = `<title>${title}</title>`;`
  tags += `<meta name="description" content="${description}" />`"
  if (keywords && keywords.length > 0) {/* TODO: Fix JSX expression */}"`"
    tags += `<meta name="keywords" content="${keywords.join(', ')}" />`"'"
  }

  if (ogImage) {/* TODO: Fix JSX expression */}"`"
  g:image" content="${ogImage}" />`"
  }

  if (canonicalUrl) {/* TODO: Fix JSX expression */}"`"
    tags += `<link rel="canonical" href="${canonicalUrl}" />`"
  }

  return tags
}
;
export const updatePageTitle = (title: string) => {,
  if (typeof window !== 'undefined') {,'
    document.title = title;
export const updatePageTitle = (titl)
  e: string) => {/* TODO: Fix JSX expression */}
  }
}
"`"
</li>
=======
  generateMetaTags(title: string, description: string): void {
    if (this.config.enabled) {
      document.title = title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }

  generateSitemap(): void {
    if (this.config.sitemap) {
      console.log('Generating sitemap...');
    }
  }
}

export const seoUtils = new SEOUtils();
export default seoUtils;
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
  generateMetaTags(title: string, description: string): Record<string, string> {
    if (this.config.metaTags) {
      return {
        title,
        description,
        'og:title': title,
        'og:description': description,
        'twitter:title': title,
        'twitter:description': description,
      };
    }
    return {};
  }

  generateStructuredData(data: Record<string, unknown>): string {
    if (this.config.structuredData) {
      return JSON.stringify(data);
    }
    return '';
  }
}

export const seoUtils = new SeoUtils();
export default seoUtils;
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
