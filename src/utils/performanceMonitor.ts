/**
 * Enhanced Performance Monitor for tracking and optimizing app performance
 */

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  memoryUsage?: number;
  bundleSize?: number;
  loadTime?: number;
}

interface PerformanceConfig {
  enableWebVitals: boolean;
  enableMemoryMonitoring: boolean;
  enableBundleAnalysis: boolean;
  enableCustomMetrics: boolean;
  samplingRate: number;
  reportInterval: number;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics = {} as PerformanceMetrics;
  private observers: PerformanceObserver[] = [];
  private reportTimer?: NodeJS.Timeout;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableWebVitals: true,
      enableMemoryMonitoring: true,
      enableBundleAnalysis: true,
      enableCustomMetrics: true,
      samplingRate: 1.0,
      reportInterval: 30000, // 30 seconds
      ...config
    };

    this.initialize();
  }

  static getInstance(config?: Partial<PerformanceConfig>): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor(config);
    }
    return PerformanceMonitor.instance;
  }

  private initialize(): void {
    if (this.config.enableWebVitals) {
      this.observeWebVitals();
    }

    if (this.config.enableMemoryMonitoring) {
      this.observeMemoryUsage();
    }

    if (this.config.enableCustomMetrics) {
      this.observeCustomMetrics();
    }

    this.startReporting();
  }

  private observeWebVitals(): void {
    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEventTiming;
      this.metrics.lcp = lastEntry.startTime;
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(lcpObserver);

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if ('processingStart' in entry && entry.startTime) {
          this.metrics.fid = (entry as PerformanceEntry & { processingStart?: number }).processingStart - entry.startTime;
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    this.observers.push(fidObserver);

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.cls = clsValue;
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(clsObserver);

    // FCP - First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });
    this.observers.push(fcpObserver);

    // TTFB - Time to First Byte
    const ttfbObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          this.metrics.ttfb = (entry as PerformanceNavigationTiming).responseStart - (entry as PerformanceNavigationTiming).requestStart;
        }
      });
    });
    ttfbObserver.observe({ entryTypes: ['navigation'] });
    this.observers.push(ttfbObserver);
  }

  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
    }
  }

  private observeCustomMetrics(): void {
    // Track bundle size
    if (this.config.enableBundleAnalysis) {
      this.trackBundleSize();
    }

    // Track load time
    window.addEventListener('load', () => {
      this.metrics.loadTime = performance.now();
    });
  }

  private trackBundleSize(): void {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;

    scripts.forEach((script) => {
      const src = script.getAttribute('src');
      if (src) {
        // This is a simplified approach - in production you'd want to fetch actual sizes
        totalSize += src.length * 2; // Rough estimate
      }
    });

    this.metrics.bundleSize = totalSize;
  }

  private startReporting(): void {
    this.reportTimer = setInterval(() => {
      this.reportMetrics();
    }, this.config.reportInterval);
  }

  private reportMetrics(): void {
    if (Math.random() > this.config.samplingRate) {
      return;
    }

    const report = {
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      metrics: this.metrics,
      config: this.config
    };

    // Send to analytics service
    this.sendToAnalytics(report);
  }

  private sendToAnalytics(data: Record<string, unknown>): void {
    // In production, send to your analytics service
    console.log('Performance Metrics:', data);
    
    // Example: Send to custom analytics endpoint
    if (typeof fetch !== 'undefined') {
      fetch('/api/performance-metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).catch(error => {
        console.warn('Failed to send performance metrics:', error);
      });
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public updateConfig(newConfig: Partial<PerformanceConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    if (this.reportTimer) {
      clearInterval(this.reportTimer);
    }
  }

  public measureCustomMetric(name: string, fn: () => void): number {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    
    console.log(`Custom metric "${name}": ${duration.toFixed(2)}ms`);
    return duration;
  }

  public async measureAsyncMetric<T>(name: string, fn: () => Promise<T>): Promise<number> {
    const start = performance.now();
    await fn();
    const end = performance.now();
    const duration = end - start;
    
    console.log(`Async metric "${name}": ${duration.toFixed(2)}ms`);
    return duration;
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance();
export default PerformanceMonitor;