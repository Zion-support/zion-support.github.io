interface PerformanceConfig {
  enabled: boolean;
  monitoring: boolean;
  optimization: boolean;
}

export class PerformanceUtils {
  private config: PerformanceConfig;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enabled: true,
      monitoring: true,
      optimization: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('Performance utils initialized');
    }
  }

  measurePerformance(name: string, fn: () => void): void {
    if (this.config.monitoring) {
      const start = performance.now();
      fn();
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    } else {
      fn();
    }
  }

  optimizeImages(): void {
    if (this.config.optimization) {
      console.log('Optimizing images...');
    }
  }
}

export const performanceUtils = new PerformanceUtils();
export default performanceUtils;