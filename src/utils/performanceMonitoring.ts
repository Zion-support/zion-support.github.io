// PerformanceMonitoring utilities
export interface PerformanceMonitoringConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultPerformanceMonitoringConfig: PerformanceMonitoringConfig = {
  enabled: true,
  options: {}
};
