// PerformanceMetrics utilities
export interface PerformanceMetricsConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultPerformanceMetricsConfig: PerformanceMetricsConfig = {
  enabled: true,
  options: {}
};
