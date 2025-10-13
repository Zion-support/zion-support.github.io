<<<<<<< HEAD
// cn utility functions

export interface cnConfig {
  enabled: boolean;
=======
// Utility function for combining class names;
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
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
