// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  public startMeasure(name: string): void {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(`${name}-start`);
    }
  }

  public endMeasure(name: string): number {
    if (typeof performance !== 'undefined' && performance.mark && performance.measure) {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
      
      const measures = performance.getEntriesByName(name);
      const duration = measures[measures.length - 1]?.duration || 0;
      this.metrics.set(name, duration);
      
      return duration;
    }
    return 0;
  }

  public getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  public reportCoreWebVitals(): void {
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      // This would integrate with web-vitals library
      console.log('Core Web Vitals monitoring active');
    }
  }

  public measurePageLoad(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            'page-load-time': navigation.loadEventEnd - navigation.fetchStart,
            'dom-content-loaded': navigation.domContentLoadedEventEnd - navigation.fetchStart,
            'first-byte': navigation.responseStart - navigation.fetchStart,
            'dom-interactive': navigation.domInteractive - navigation.fetchStart
          };

          Object.entries(metrics).forEach(([key, value]) => {
            this.metrics.set(key, value);
          });

          console.log('Page Load Metrics:', metrics);
        }
      });
    }
  }
}

// Initialize performance monitoring
export const performanceMonitor = PerformanceMonitor.getInstance();
performanceMonitor.measurePageLoad();