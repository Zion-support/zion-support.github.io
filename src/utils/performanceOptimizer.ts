/**
 * Advanced Performance Optimizer
 * Provides comprehensive performance monitoring and optimization features
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface LayoutShiftEntry {
  hadRecentInput: boolean;
  value: number;
}

interface PerformanceConfig {
  enableWebVitals: boolean;
  enableResourceMonitoring: boolean;
  enableMemoryTracking: boolean;
  enableRenderTracking: boolean;
  reportInterval: number;
  maxMetricsHistory: number;
}

interface PerformanceMetrics {
  webVitals: {
    FCP?: number;
    LCP?: number;
    FID?: number;
    CLS?: number;
    TTFB?: number;
  };
  resources: {
    totalResources: number;
    totalSize: number;
    loadTime: number;
    failedResources: number;
  };
  memory: {
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
    jsHeapSizeLimit?: number;
  };
  render: {
    renderTime: number;
    paintTime: number;
    layoutTime: number;
  };
}

class AdvancedPerformanceOptimizer {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics;
  private metricsHistory: PerformanceMetrics[] = [];
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableWebVitals: true,
      enableResourceMonitoring: true,
      enableMemoryTracking: true,
      enableRenderTracking: true,
      reportInterval: 5000,
      maxMetricsHistory: 100,
      ...config
    };

    this.metrics = {
      webVitals: {},
      resources: {
        totalResources: 0,
        totalSize: 0,
        loadTime: 0,
        failedResources: 0
      },
      memory: {},
      render: {
        renderTime: 0,
        paintTime: 0,
        layoutTime: 0
      }
    };
  }

  /**
   * Start comprehensive performance monitoring
   */
  startMonitoring(): void {
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    console.log('🚀 Advanced Performance Optimizer started');

    if (this.config.enableWebVitals) {
      this.setupWebVitalsMonitoring();
    }

    if (this.config.enableResourceMonitoring) {
      this.setupResourceMonitoring();
    }

    if (this.config.enableMemoryTracking) {
      this.setupMemoryMonitoring();
    }

    if (this.config.enableRenderTracking) {
      this.setupRenderMonitoring();
    }

    // Start periodic reporting
    setInterval(() => {
      this.reportMetrics();
    }, this.config.reportInterval);
  }

  /**
   * Stop performance monitoring
   */
  stopMonitoring(): void {
    if (!this.isMonitoring) return;

    this.isMonitoring = false;
    console.log('🛑 Advanced Performance Optimizer stopped');

    // Disconnect all observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }

  /**
   * Setup Web Vitals monitoring
   */
  public setupWebVitalsMonitoring(): void {
    if (!('PerformanceObserver' in window)) return;

    // First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.webVitals.FCP = entry.startTime;
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP monitoring not supported:', error);
    }

    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.webVitals.LCP = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP monitoring not supported:', error);
    }

    // Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        }
        this.metrics.webVitals.CLS = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS monitoring not supported:', error);
    }
  }

  /**
   * Setup resource monitoring
   */
  private setupResourceMonitoring(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const resourceEntry = entry as PerformanceResourceTiming;
          this.metrics.resources.totalResources++;
          this.metrics.resources.totalSize += resourceEntry.transferSize || 0;
          
          if (resourceEntry.responseEnd > 0) {
            this.metrics.resources.loadTime += resourceEntry.responseEnd - resourceEntry.startTime;
          } else {
            this.metrics.resources.failedResources++;
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch (error) {
      console.warn('Resource monitoring not supported:', error);
    }
  }

  /**
   * Setup memory monitoring
   */
  private setupMemoryMonitoring(): void {
    if (!('memory' in performance)) return;

    const updateMemoryMetrics = () => {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      this.metrics.memory = {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit
      };
    };

    // Initial measurement
    updateMemoryMetrics();

    // Update every 5 seconds
    setInterval(updateMemoryMetrics, 5000);
  }

  /**
   * Setup render monitoring
   */
  private setupRenderMonitoring(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const renderObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'measure') {
            switch (entry.name) {
              case 'render-time':
                this.metrics.render.renderTime = entry.duration;
                break;
              case 'paint-time':
                this.metrics.render.paintTime = entry.duration;
                break;
              case 'layout-time':
                this.metrics.render.layoutTime = entry.duration;
                break;
            }
          }
        });
      });
      renderObserver.observe({ entryTypes: ['measure'] });
      this.observers.push(renderObserver);
    } catch (error) {
      console.warn('Render monitoring not supported:', error);
    }
  }

  /**
   * Report current metrics
   */
  private reportMetrics(): void {
    // Add to history
    this.metricsHistory.push({ ...this.metrics });
    
    // Limit history size
    if (this.metricsHistory.length > this.config.maxMetricsHistory) {
      this.metricsHistory.shift();
    }

    // Log metrics (in production, this would be sent to analytics)
    console.log('📊 Performance Metrics:', this.metrics);
  }

  /**
   * Get current metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Get metrics history
   */
  getMetricsHistory(): PerformanceMetrics[] {
    return [...this.metricsHistory];
  }

  /**
   * Add custom performance mark
   */
  mark(name: string): void {
    if ('mark' in performance) {
      performance.mark(name);
    }
  }

  /**
   * Add custom performance measure
   */
  measure(name: string, startMark: string, endMark?: string): void {
    if ('measure' in performance) {
      try {
        performance.measure(name, startMark, endMark);
      } catch (error) {
        console.warn(`Failed to measure ${name}:`, error);
      }
    }
  }

  /**
   * Get performance score based on metrics
   */
  getPerformanceScore(): number {
    let score = 100;

    // Web Vitals scoring
    if (this.metrics.webVitals.FCP && this.metrics.webVitals.FCP > 2500) score -= 20;
    if (this.metrics.webVitals.LCP && this.metrics.webVitals.LCP > 4000) score -= 25;
    if (this.metrics.webVitals.CLS && this.metrics.webVitals.CLS > 0.25) score -= 20;
    if (this.metrics.webVitals.FID && this.metrics.webVitals.FID > 300) score -= 15;

    // Resource scoring
    if (this.metrics.resources.totalSize > 1000000) score -= 10; // 1MB
    if (this.metrics.resources.failedResources > 0) score -= 10;

    // Memory scoring
    if (this.metrics.memory.usedJSHeapSize && this.metrics.memory.usedJSHeapSize > 50000000) score -= 10; // 50MB

    return Math.max(0, score);
  }

  /**
   * Add resource hints for performance optimization
   */
  addResourceHints(): void {
    console.log('🔗 Adding resource hints for performance optimization');
    
    // Add DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdnjs.cloudflare.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Add preconnect for critical resources
    const criticalDomains = [
      'fonts.googleapis.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = `https://${domain}`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize critical CSS
   */
  optimizeCriticalCSS(): void {
    console.log('🎨 Optimizing critical CSS');
    
    // In a real implementation, this would inline critical CSS
    // and defer non-critical CSS loading
  }

}

// Create singleton instance
export const advancedPerformanceOptimizer = new AdvancedPerformanceOptimizer();

// Export class for custom instances
export { AdvancedPerformanceOptimizer };
export type { PerformanceConfig, PerformanceMetrics };

// Export the class as PerformanceOptimizer for backward compatibility
export { AdvancedPerformanceOptimizer as PerformanceOptimizer };