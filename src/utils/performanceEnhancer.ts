// PerformanceEnhancer utilities
export interface PerformanceEnhancerConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultPerformanceEnhancerConfig: PerformanceEnhancerConfig = {
  enabled: true,
  options: {}
};
