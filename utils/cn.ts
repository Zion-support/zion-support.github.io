// cn utility functions

export interface CnConfig {
  enabled: boolean;
}

export class Cn {
  private config: CnConfig;

  constructor(config: Partial<CnConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

// Export default instance
export const cn = new Cn();
