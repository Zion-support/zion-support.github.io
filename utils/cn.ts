// cn utility functions

export interface cnConfig {
  enabled: boolean;
}

export class cn {
  private config: cnConfig;

  constructor(config: Partial<cnConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('cn initialized');
    }
  }
}

export const cnInstance = new cn();
export default cnInstance;
