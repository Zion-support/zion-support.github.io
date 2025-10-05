<<<<<<< HEAD
// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startMonitoring(): void {
    this.observeWebVitals();
    this.observeResourceTiming();
    this.observeNavigationTiming();
    console.log('Performance monitoring started');
  }

  private observeWebVitals(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric(entry.name, entry.startTime);
        }
      });

      try {
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
        this.observers.push(observer);
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
=======
// Performance Monitoring Script
const performanceObserver = new PerformanceObserver(list => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'navigation') {
      console.log('Page Load Time:', entry.loadEventEnd - entry.loadEventStart);
    }
    if (entry.entryType === 'paint') {
      console.log('Paint Time:', entry.startTime);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
    }
  }

<<<<<<< HEAD
  private observeResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            this.recordMetric(`resource-${entry.name}`, entry.duration);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['resource'] });
        this.observers.push(observer);
      } catch (error) {
        console.warn('Resource timing observer not supported:', error);
      }
    }
  }

  private observeNavigationTiming(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            this.recordMetric('navigation', entry.duration);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['navigation'] });
        this.observers.push(observer);
      } catch (error) {
        console.warn('Navigation timing observer not supported:', error);
      }
    }
  }

  private recordMetric(name: string, value: number): void {
    this.metrics.set(name, value);
  }

  getMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }

  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  clearMetrics(): void {
    this.metrics.clear();
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics.clear();
    console.log('Performance monitoring cleaned up');
  }
}

export default PerformanceMonitor;
=======
performanceObserver.observe({ entryTypes: ['navigation', 'paint'] });

// Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
