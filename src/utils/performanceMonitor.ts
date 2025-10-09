// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure page load performance
  measurePageLoad(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      this.metrics.set('pageLoadTime', navigation.loadEventEnd - navigation.fetchStart);
      this.metrics.set('domContentLoaded', navigation.domContentLoadedEventEnd - navigation.fetchStart);
      this.metrics.set('firstPaint', this.getFirstPaint());
      this.metrics.set('firstContentfulPaint', this.getFirstContentfulPaint());
      
      // Log performance metrics
      console.log('Performance Metrics:', {
        pageLoadTime: this.metrics.get('pageLoadTime'),
        domContentLoaded: this.metrics.get('domContentLoaded'),
        firstPaint: this.metrics.get('firstPaint'),
        firstContentfulPaint: this.metrics.get('firstContentfulPaint')
      });
    });
  }

  // Measure component render time
  measureComponent(componentName: string, startTime: number): void {
    const renderTime = performance.now() - startTime;
    this.metrics.set(`${componentName}_renderTime`, renderTime);
    
    if (renderTime > 100) { // Log slow renders
      console.warn(`Slow render detected: ${componentName} took ${renderTime}ms`);
    }
  }

  // Measure API call performance
  measureApiCall(endpoint: string, startTime: number): void {
    const duration = performance.now() - startTime;
    this.metrics.set(`api_${endpoint}`, duration);
    
    if (duration > 2000) { // Log slow API calls
      console.warn(`Slow API call: ${endpoint} took ${duration}ms`);
    }
  }

  // Get First Paint time
  private getFirstPaint(): number {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? firstPaint.startTime : 0;
  }

  // Get First Contentful Paint time
  private getFirstContentfulPaint(): number {
    const paintEntries = performance.getEntriesByType('paint');
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return firstContentfulPaint ? firstContentfulPaint.startTime : 0;
  }

  // Get all metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
  }
}

// Web Vitals monitoring
export const measureWebVitals = (): void => {
  if (typeof window === 'undefined') return;

  // Measure Largest Contentful Paint
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Measure First Input Delay
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  }).observe({ entryTypes: ['first-input'] });

  // Measure Cumulative Layout Shift
  let clsValue = 0;
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    console.log('CLS:', clsValue);
  }).observe({ entryTypes: ['layout-shift'] });
};

// Initialize performance monitoring
export const initPerformanceMonitoring = (): void => {
  const monitor = PerformanceMonitor.getInstance();
  monitor.measurePageLoad();
  measureWebVitals();
};