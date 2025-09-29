// Advanced Performance Monitor
export class AdvancedPerformanceMonitor {
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];
  
  startMonitoring(): void {
    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor resource loading
    this.observeResources();
    
    // Monitor long tasks
    this.observeLongTasks();
  }
  
  private observeWebVitals(): void {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS((metric) => this.recordMetric('CLS', metric.value));
      onINP((metric) => this.recordMetric('INP', metric.value));
      onFCP((metric) => this.recordMetric('FCP', metric.value));
      onLCP((metric) => this.recordMetric('LCP', metric.value));
      onTTFB((metric) => this.recordMetric('TTFB', metric.value));
    });
  }
  
  private observeResources(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            this.recordMetric(`resource_${entry.name}`, entry.duration);
          }
        }
      });
      
      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    }
  }
  
  private observeLongTasks(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric('long_task', entry.duration);
        }
      });
      
      observer.observe({ entryTypes: ['longtask'] });
      this.observers.push(observer);
    }
  }
  
  private recordMetric(name: string, value: number): void {
    this.metrics.set(name, value);
    console.log(`Performance Metric - ${name}: ${value}`);
  }
  
  getMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }
  
  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export const performanceMonitor = new AdvancedPerformanceMonitor();
