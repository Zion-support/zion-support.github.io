interface SeoUtilsConfig {
  enabled: boolean;
}

export class SeoUtils {
  private config: SeoUtilsConfig;

  constructor(config: Partial<SeoUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('SeoUtils initialized');
    }
  }
}

export const seoUtils = new SeoUtils();
export default seoUtils;