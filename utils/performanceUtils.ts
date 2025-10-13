// performanceUtils utility functions

export interface performanceUtilsConfig {
  enabled: boolean;
}

export class performanceUtils {
  private config: performanceUtilsConfig;

  constructor(config: Partial<performanceUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('performanceUtils initialized');
    }
  }
}

export const performanceutils = new performanceUtils();
export default performanceutils;