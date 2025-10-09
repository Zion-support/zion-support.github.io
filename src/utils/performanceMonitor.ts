// Enhanced Performance Monitor for Zion Tech Group
interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  memory?: {
    used: number;
    total: number;
    limit: number;
  };
  navigation?: {
    dns: number;
    tcp: number;
    request: number;
    response: number;
    dom: number;
    load: number;
  };
  resources?: Array<{
    name: string;
    duration: number;
    size: number;
    type: string;
  }>;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    this.isInitialized = true;
    this.setupWebVitalsObserver();
    this.setupNavigationObserver();
    this.setupResourceObserver();
    this.setupMemoryObserver();
    this.setupErrorObserver();
  }

  private setupWebVitalsObserver() {
    if (!('PerformanceObserver' in window)) return;

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      this.metrics.lcp = lastEntry.startTime;
      this.reportMetric('LCP', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(lcpObserver);

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime;
        this.metrics.fid = fid;
        this.reportMetric('FID', fid);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    this.observers.push(fidObserver);

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          this.metrics.cls = clsValue;
          this.reportMetric('CLS', clsValue);
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(clsObserver);
  }

  private setupNavigationObserver() {
    if (!('PerformanceObserver' in window)) return;

    const navObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const navEntry = entries[0] as PerformanceNavigationTiming;
      
      if (navEntry) {
        this.metrics.navigation = {
          dns: navEntry.domainLookupEnd - navEntry.domainLookupStart,
          tcp: navEntry.connectEnd - navEntry.connectStart,
          request: navEntry.responseStart - navEntry.requestStart,
          response: navEntry.responseEnd - navEntry.responseStart,
          dom: navEntry.domContentLoadedEventEnd - navEntry.navigationStart,
          load: navEntry.loadEventEnd - navEntry.navigationStart
        };

        // First Contentful Paint (FCP)
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
        if (fcpEntry) {
          this.metrics.fcp = fcpEntry.startTime;
          this.reportMetric('FCP', fcpEntry.startTime);
        }

        // Time to First Byte (TTFB)
        this.metrics.ttfb = navEntry.responseStart - navEntry.navigationStart;
        this.reportMetric('TTFB', this.metrics.ttfb);
      }
    });

    navObserver.observe({ entryTypes: ['navigation'] });
    this.observers.push(navObserver);
  }

  private setupResourceObserver() {
    if (!('PerformanceObserver' in window)) return;

    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceResourceTiming) => {
        const resource = {
          name: entry.name,
          duration: entry.responseEnd - entry.startTime,
          size: entry.transferSize || 0,
          type: this.getResourceType(entry.name)
        };

        if (!this.metrics.resources) {
          this.metrics.resources = [];
        }
        this.metrics.resources.push(resource);

        // Log slow resources
        if (resource.duration > 1000) {
          console.warn('Slow resource detected:', resource);
        }
      });
    });

    resourceObserver.observe({ entryTypes: ['resource'] });
    this.observers.push(resourceObserver);
  }

  private setupMemoryObserver() {
    if (!('memory' in performance)) return;

    const checkMemory = () => {
      const memory = (performance as any).memory;
      this.metrics.memory = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };

      const usagePercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
      if (usagePercent > 80) {
        console.warn('High memory usage detected:', usagePercent + '%');
      }
    };

    // Check memory every 30 seconds
    setInterval(checkMemory, 30000);
    checkMemory(); // Initial check
  }

  private setupErrorObserver() {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.reportError('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError('unhandled_promise_rejection', {
        reason: event.reason,
        promise: event.promise
      });
    });

    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.reportError('resource_error', {
          type: (event.target as any).tagName,
          src: (event.target as any).src || (event.target as any).href,
          error: event.type
        });
      }
    }, true);
  }

  private getResourceType(url: string): string {
    if (url.match(/\.(js|mjs)$/)) return 'script';
    if (url.match(/\.css$/)) return 'stylesheet';
    if (url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) return 'image';
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font';
    if (url.match(/\.(mp4|webm|ogg)$/)) return 'video';
    if (url.match(/\.(mp3|wav|ogg)$/)) return 'audio';
    return 'other';
  }

  private reportMetric(name: string, value: number) {
    // Report to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        name,
        value: Math.round(value),
        event_category: 'Performance'
      });
    }

    // Store in localStorage for debugging
    const vitals = JSON.parse(localStorage.getItem('performance-metrics') || '{}');
    vitals[name] = value;
    vitals.timestamp = Date.now();
    localStorage.setItem('performance-metrics', JSON.stringify(vitals));

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }
  }

  private reportError(type: string, details: any) {
    // Report to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: type,
        fatal: false,
        custom_map: details
      });
    }

    // Store error locally
    const errors = JSON.parse(localStorage.getItem('app-errors') || '[]');
    errors.push({
      type,
      details,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    });
    localStorage.setItem('app-errors', JSON.stringify(errors.slice(-50))); // Keep last 50 errors
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getWebVitals() {
    return {
      lcp: this.metrics.lcp,
      fid: this.metrics.fid,
      cls: this.metrics.cls,
      fcp: this.metrics.fcp,
      ttfb: this.metrics.ttfb
    };
  }

  public getResourceMetrics() {
    if (!this.metrics.resources) return [];

    const totalSize = this.metrics.resources.reduce((sum, r) => sum + r.size, 0);
    const totalDuration = this.metrics.resources.reduce((sum, r) => sum + r.duration, 0);
    const slowResources = this.metrics.resources.filter(r => r.duration > 1000);
    const largeResources = this.metrics.resources.filter(r => r.size > 100000); // > 100KB

    return {
      totalResources: this.metrics.resources.length,
      totalSize,
      totalDuration,
      averageSize: totalSize / this.metrics.resources.length,
      averageDuration: totalDuration / this.metrics.resources.length,
      slowResources: slowResources.length,
      largeResources: largeResources.length,
      resourcesByType: this.groupResourcesByType()
    };
  }

  private groupResourcesByType() {
    if (!this.metrics.resources) return {};

    return this.metrics.resources.reduce((acc, resource) => {
      acc[resource.type] = (acc[resource.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  public checkPerformanceBudget() {
    const budget = {
      lcp: 2500, // 2.5 seconds
      fid: 100,  // 100ms
      cls: 0.1,  // 0.1
      fcp: 1800, // 1.8 seconds
      ttfb: 600  // 600ms
    };

    const violations: string[] = [];
    const webVitals = this.getWebVitals();

    Object.entries(budget).forEach(([metric, threshold]) => {
      const value = webVitals[metric as keyof typeof webVitals];
      if (value && value > threshold) {
        violations.push(`${metric}: ${value} > ${threshold}`);
      }
    });

    if (violations.length > 0) {
      console.warn('Performance budget violations:', violations);
    }

    return violations;
  }

  public generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      webVitals: this.getWebVitals(),
      resourceMetrics: this.getResourceMetrics(),
      memory: this.metrics.memory,
      navigation: this.metrics.navigation,
      budgetViolations: this.checkPerformanceBudget()
    };

    return report;
  }

  public reportMetrics() {
    const report = this.generateReport();
    
    // Send to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_report', {
        event_category: 'Performance',
        custom_map: report
      });
    }

    // Store report
    const reports = JSON.parse(localStorage.getItem('performance-reports') || '[]');
    reports.push(report);
    localStorage.setItem('performance-reports', JSON.stringify(reports.slice(-10))); // Keep last 10 reports

    return report;
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export for use in components
export default performanceMonitor;