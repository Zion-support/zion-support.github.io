<<<<<<< HEAD
interface SeoUtilsConfig {
  enabled: boolean;
}

export class SeoUtils {
  private config: SeoUtilsConfig;

  constructor(config: Partial<SeoUtilsConfig> = {}) {
    this.config = {
      enabled: true,
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
>>>>>>> cursor/fix-errors-and-merge-to-main-e61d
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
<<<<<<< HEAD
      console.log('SeoUtils initialized');
    }
  }
=======
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

  generateStructuredData(data: any): string {
    if (this.config.structuredData) {
      return JSON.stringify(data);
    }
    return '';
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-e61d
}

export const seoUtils = new SeoUtils();
export default seoUtils;