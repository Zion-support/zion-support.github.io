// seoUtils utility functions

export interface seoUtilsConfig {
  enabled: boolean;
}

export class seoUtils {
  private config: seoUtilsConfig;

  constructor(config: Partial<seoUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('seoUtils initialized');
    }
  }
}

export const seoutils = new seoUtils();
export default seoutils;
