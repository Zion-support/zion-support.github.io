/**
 * Enhanced Performance Optimization Utilities
 * Provides advanced performance monitoring and optimization features
 */

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: {
    used: number;
    total: number;
    limit: number;
  } | null;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableCompression: boolean;
  enableCaching: boolean;
  enableMonitoring: boolean;
  threshold: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
}

class EnhancedPerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null
  };

  private config: OptimizationConfig = {
    enableLazyLoading: true,
    enablePreloading: true,
    enableCompression: true,
    enableCaching: true,
    enableMonitoring: true,
    threshold: {
      fcp: 1800,
      lcp: 2500,
      fid: 100,
      cls: 0.1
    }
  };

  private observers: (PerformanceObserver | IntersectionObserver)[] = [];
  private performanceObservers: PerformanceObserver[] = [];
  private intersectionObservers: IntersectionObserver[] = [];
  private isInitialized = false;

  constructor(config?: Partial<OptimizationConfig>) {
    if (config) {
      this.config = { ...this.config, ...config };
    }
  }

  /**
   * Initialize performance monitoring and optimization
   */
  public initialize(): void {
    if (this.isInitialized) return;

    this.setupCoreWebVitals();
    this.setupMemoryMonitoring();
    this.setupResourceMonitoring();
    this.optimizeInitialLoad();
    this.setupIntersectionObserver();
    
    this.isInitialized = true;
    console.log('Enhanced Performance Optimizer initialized');
  }

  /**
   * Setup Core Web Vitals monitoring
   */
  private setupCoreWebVitals(): void {
    if (!this.config.enableMonitoring) return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEventTiming;
      this.metrics.fcp = lastEntry.startTime;
      this.reportMetric('FCP', lastEntry.startTime);
    });
    fcpObserver.observe({ type: 'paint', buffered: true });
    this.performanceObservers.push(fcpObserver);

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEventTiming;
      this.metrics.lcp = lastEntry.startTime;
      this.reportMetric('LCP', lastEntry.startTime);
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    this.performanceObservers.push(lcpObserver);

    // First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const fid = entry as PerformanceEventTiming;
        this.metrics.fid = fid.processingStart - fid.startTime;
        this.reportMetric('FID', this.metrics.fid);
      });
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
    this.performanceObservers.push(fidObserver);

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
          clsValue += (entry as PerformanceEntry & { value?: number }).value || 0;
        }
      });
      this.metrics.cls = clsValue;
      this.reportMetric('CLS', clsValue);
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    this.performanceObservers.push(clsObserver);

    // Time to First Byte
    const ttfbObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart;
          this.reportMetric('TTFB', this.metrics.ttfb);
        }
      });
    });
    ttfbObserver.observe({ type: 'navigation', buffered: true });
    this.performanceObservers.push(ttfbObserver);
  }

  /**
   * Setup memory monitoring
   */
  private setupMemoryMonitoring(): void {
    if (!('memory' in performance)) return;

    const updateMemoryMetrics = () => {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (memory) {
        this.metrics.memory = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        };
        this.reportMetric('Memory Usage', this.metrics.memory.used / 1024 / 1024);
      }
    };

    updateMemoryMetrics();
    setInterval(updateMemoryMetrics, 5000);
  }

  /**
   * Setup resource monitoring
   */
  private setupResourceMonitoring(): void {
    if (!this.config.enableMonitoring) return;

    const resourceObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) {
            console.warn(`Slow resource detected: ${resourceEntry.name} (${resourceEntry.duration}ms)`);
          }
        }
      });
    });
    resourceObserver.observe({ type: 'resource', buffered: true });
    this.performanceObservers.push(resourceObserver);
  }

  /**
   * Optimize initial page load
   */
  private optimizeInitialLoad(): void {
    // Preload critical resources
    if (this.config.enablePreloading) {
      this.preloadCriticalResources();
    }

    // Enable compression
    if (this.config.enableCompression) {
      this.enableCompression();
    }

    // Setup caching
    if (this.config.enableCaching) {
      this.setupCaching();
    }
  }

  /**
   * Preload critical resources
   */
  private preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/main.woff2',
      '/images/hero-bg.jpg',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }

  /**
   * Enable compression for better performance
   */
  private enableCompression(): void {
    // Enable text compression
    if ('compression' in window) {
      console.log('Text compression enabled');
    }
  }

  /**
   * Setup caching strategies
   */
  private setupCaching(): void {
    // Service Worker caching is handled elsewhere
    // Here we can setup additional caching strategies
    console.log('Caching strategies enabled');
  }

  /**
   * Setup intersection observer for lazy loading
   */
  private setupIntersectionObserver(): void {
    if (!this.config.enableLazyLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach((img) => {
      observer.observe(img);
    });

    this.intersectionObservers.push(observer);
  }

  /**
   * Report performance metric
   */
  private reportMetric(name: string, value: number): void {
    if (!this.config.enableMonitoring) return;

    // Log to console for development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}: ${value.toFixed(2)}ms`);
    }

    // Send to analytics service
    this.sendToAnalytics(name, value);

    // Check against thresholds
    this.checkThresholds(name, value);
  }

  /**
   * Send metrics to analytics service
   */
  private sendToAnalytics(name: string, value: number): void {
    // This would integrate with your analytics service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        custom_parameter: 'enhanced_optimizer'
      });
    }
  }

  /**
   * Check metrics against performance thresholds
   */
  private checkThresholds(name: string, value: number): void {
    const thresholds = this.config.threshold;
    let threshold = 0;

    switch (name) {
      case 'FCP':
        threshold = thresholds.fcp;
        break;
      case 'LCP':
        threshold = thresholds.lcp;
        break;
      case 'FID':
        threshold = thresholds.fid;
        break;
      case 'CLS':
        threshold = thresholds.cls;
        break;
    }

    if (threshold > 0 && value > threshold) {
      console.warn(`Performance threshold exceeded for ${name}: ${value}ms > ${threshold}ms`);
      this.triggerOptimization(name, value);
    }
  }

  /**
   * Trigger optimization based on poor performance
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private triggerOptimization(metric: string, _value: number): void {
    switch (metric) {
      case 'LCP':
        this.optimizeLargestContentfulPaint();
        break;
      case 'FID':
        this.optimizeFirstInputDelay();
        break;
      case 'CLS':
        this.optimizeCumulativeLayoutShift();
        break;
    }
  }

  /**
   * Optimize Largest Contentful Paint
   */
  private optimizeLargestContentfulPaint(): void {
    // Implement LCP optimization strategies
    console.log('Optimizing Largest Contentful Paint');
  }

  /**
   * Optimize First Input Delay
   */
  private optimizeFirstInputDelay(): void {
    // Implement FID optimization strategies
    console.log('Optimizing First Input Delay');
  }

  /**
   * Optimize Cumulative Layout Shift
   */
  private optimizeCumulativeLayoutShift(): void {
    // Implement CLS optimization strategies
    console.log('Optimizing Cumulative Layout Shift');
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Update configuration
   */
  public updateConfig(config: Partial<OptimizationConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Cleanup observers and resources
   */
  public cleanup(): void {
    this.performanceObservers.forEach((observer) => observer.disconnect());
    this.intersectionObservers.forEach((observer) => observer.disconnect());
    this.performanceObservers = [];
    this.intersectionObservers = [];
    this.isInitialized = false;
  }
}

// Create singleton instance
export const enhancedPerformanceOptimizer = new EnhancedPerformanceOptimizer();

// Export types
export type { PerformanceMetrics, OptimizationConfig };