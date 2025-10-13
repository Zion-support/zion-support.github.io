<<<<<<< HEAD
// seoUtils utility functions

export interface seoUtilsConfig {
  enabled: boolean;
=======
// Utility functions;
export function utilityFunction() {
  // Implementation here;
  return null;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
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
