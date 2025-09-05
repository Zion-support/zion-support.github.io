export interface MonitoringMetrics {
  timestamp: number;
  performance: {
    loadTime: number;
    renderTime: number;
  };
  errors: string[];
  userAgent: string;
}

export function collectMetrics(): MonitoringMetrics {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    timestamp: Date.now(),
    performance: {
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      renderTime: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
    },
    errors: [],
    userAgent: typeof window !== 'undefined' && typeof window.navigator !== 'undefined' ? window.navigator.userAgent : 'unknown'
  };
}

export function reportError(error: Error): void {
  // Error reporting logic
  // eslint-disable-next-line no-console
  console.error('Error reported:', error);
}