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
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('SEO utils initialized');
    }
  }

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