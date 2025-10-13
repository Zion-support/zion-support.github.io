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
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('SEO utils initialized');
    }
  }

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