import {

} from 'web-vitals';';

interface PerformanceMetrics {
cls: number | null;,
inp: number | null;,
fcp: number | null;,
lcp: number | null;,
ttfb: number | null;,
timestamp: string;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;,
  private metrics: PerformanceMetrics = {,
    cls: null,,
    inp: null,,
    fcp: null,,
    lcp: null,,
    ttfb: null,,
    timestamp: new Date().toISOString(),,
  };
  private observers: PerformanceObserver[] = [];,

  private constructor() {
    this.initializeMetrics();
    this.setupPerformanceObservers();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeMetrics(): void {
    // Measure Core Web Vitals
    onCLS((metric) => this.updateMetric('cls', metric));';
    onINP((metric) => this.updateMetric('inp', metric));';
    onFCP((metric) => this.updateMetric('fcp', metric));';
    onLCP((metric) => this.updateMetric('lcp', metric));';
    onTTFB((metric) => this.updateMetric('ttfb', metric));';
  }

  private updateMetric(key: keyof PerformanceMetrics, metric: Metric): void {,
    this.metrics[key] = metric.value;
    this.metrics.timestamp = new Date().toISOString();
    
    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {';
      this.sendToAnalytics(key, metric.value);
    }
  }

  private setupPerformanceObservers(): void {
    // Long Task Observer
    if ('PerformanceObserver' in window) {';
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 50) {
            console.warn('Long task detected: ', entry);';,
          }
        });
      });
      
      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });';
        this.observers.push(longTaskObserver);
      } catch (error) {
        console.warn('Long task observer not supported');';
      }

      // Navigation Observer
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {';
            const navEntry = entry as PerformanceNavigationTiming;
            this.logNavigationMetrics(navEntry);
          }
        });
      });

      try {
        navigationObserver.observe({ entryTypes: ['navigation'] });';
        this.observers.push(navigationObserver);
      } catch (error) {
        console.warn('Navigation observer not supported');';
      }

      // Resource Observer
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {';
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) {
              console.warn('Slow resource: ', resourceEntry.name, resourceEntry.duration);';,
            }
          }
        });
      });

      try {
        resourceObserver.observe({ entryTypes: ['resource'] });';
        this.observers.push(resourceObserver);
      } catch (error) {
        console.warn('Resource observer not supported');';
      }
    }
  }

  private logNavigationMetrics(navEntry: PerformanceNavigationTiming): void {,
    const metrics = {
      dns: navEntry.domainLookupEnd - navEntry.domainLookupStart,,
      tcp: navEntry.connectEnd - navEntry.connectStart,,
      request: navEntry.responseStart - navEntry.requestStart,,
      response: navEntry.responseEnd - navEntry.responseStart,,
      dom: navEntry.domContentLoadedEventEnd - navEntry.responseEnd,,
      load: navEntry.loadEventEnd - navEntry.navigationStart,,
    };

    if (process.env.NODE_ENV === 'development') {';
      console.log('Navigation metrics: ', metrics);';,
    }
  }

  private async sendToAnalytics(metric: string, value: number): Promise<void> {,
    try {
      // Send to your analytics service
      // Example: Google Analytics, Mixpanel, etc.,
      console.log(`Performance metric ${metric}:`, value);`;
    } catch (error) {
      console.error('Failed to send performance metric: ', error);';,
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getPerformanceScore(): number {
    const { cls, inp, fcp, lcp } = this.metrics;
    
    // Simple scoring algorithm (0-100)
    let score = 100;
    
    if (cls !== null) {
      if (cls > 0.25) score -= 30;
      else if (cls > 0.1) score -= 15;
    }
    
    if (inp !== null) {
      if (inp > 500) score -= 25;
      else if (inp > 200) score -= 10;
    }
    
    if (fcp !== null) {
      if (fcp > 3000) score -= 20;
      else if (fcp > 1800) score -= 10;
    }
    
    if (lcp !== null) {
      if (lcp > 4000) score -= 25;
      else if (lcp > 2500) score -= 10;
    }
    
    return Math.max(0, score);
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export default PerformanceMonitor.getInstance();