/**
 * Advanced Performance Monitoring Utility
 * Provides comprehensive performance tracking and optimization features
 */

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage: number;
  networkLatency: number;
  renderTime: number;
  bundleSize: number;
  cacheHitRate: number;
}

export interface PerformanceConfig {
  enableRealTimeMonitoring: boolean;
  enableMemoryTracking: boolean;
  enableNetworkTracking: boolean;
  enableRenderTracking: boolean;
  reportInterval: number;
  maxMetricsHistory: number;
}

class AdvancedPerformanceMonitor {
  private static instance: AdvancedPerformanceMonitor;
  private metrics: PerformanceMetrics[] = [];
  private config: PerformanceConfig;
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;

  constructor() {
    this.config = {
      enableRealTimeMonitoring: true,
      enableMemoryTracking: true,
      enableNetworkTracking: true,
      enableRenderTracking: true,
      reportInterval: 5000,
      maxMetricsHistory: 100
    };
  }

  public static getInstance(): AdvancedPerformanceMonitor {
    if (!AdvancedPerformanceMonitor.instance) {
      AdvancedPerformanceMonitor.instance = new AdvancedPerformanceMonitor();
    }
    return AdvancedPerformanceMonitor.instance;
  }

  public configure(config: Partial<PerformanceConfig>): void {
    this.config = { ...this.config, ...config };
  }

  public startMonitoring(): void {
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    this.initializeObservers();
    this.startPeriodicReporting();
    
    console.log('Advanced Performance Monitor started');
  }

  public stopMonitoring(): void {
    this.isMonitoring = false;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    console.log('Advanced Performance Monitor stopped');
  }

  private initializeObservers(): void {
    if (!this.config.enableRealTimeMonitoring) return;

    // Web Vitals Observer
    if ('PerformanceObserver' in window) {
      try {
        const vitalsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.processWebVital(entry);
          }
        });

        vitalsObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        this.observers.push(vitalsObserver);
      } catch (error) {
        console.warn('Web Vitals observer not supported:', error);
      }
    }

    // Memory Observer
    if (this.config.enableMemoryTracking && 'memory' in performance) {
      this.observeMemoryUsage();
    }

    // Network Observer
    if (this.config.enableNetworkTracking && 'PerformanceObserver' in window) {
      try {
        const networkObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.processNetworkEntry(entry);
          }
        });

        networkObserver.observe({ entryTypes: ['navigation', 'resource'] });
        this.observers.push(networkObserver);
      } catch (error) {
        console.warn('Network observer not supported:', error);
      }
    }

    // Render Observer
    if (this.config.enableRenderTracking && 'PerformanceObserver' in window) {
      try {
        const renderObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.processRenderEntry(entry);
          }
        });

        renderObserver.observe({ entryTypes: ['measure', 'mark'] });
        this.observers.push(renderObserver);
      } catch (error) {
        console.warn('Render observer not supported:', error);
      }
    }
  }

  private processWebVital(entry: PerformanceEntry): void {
    const metrics = this.getCurrentMetrics();
    
    switch (entry.entryType) {
      case 'largest-contentful-paint':
        metrics.largestContentfulPaint = entry.startTime;
        break;
      case 'first-input':
        metrics.firstInputDelay = entry.startTime;
        break;
      case 'layout-shift':
        metrics.cumulativeLayoutShift += (entry as any).value;
        break;
    }
  }

  private processNetworkEntry(entry: PerformanceEntry): void {
    if (entry.entryType === 'navigation') {
      const navEntry = entry as PerformanceNavigationTiming;
      const metrics = this.getCurrentMetrics();
      metrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
      metrics.networkLatency = navEntry.responseStart - navEntry.requestStart;
    }
  }

  private processRenderEntry(entry: PerformanceEntry): void {
    if (entry.entryType === 'measure' && entry.name.includes('render')) {
      const metrics = this.getCurrentMetrics();
      metrics.renderTime = entry.duration;
    }
  }

  private observeMemoryUsage(): void {
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const metrics = this.getCurrentMetrics();
        metrics.memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
      }
    };

    checkMemory();
    setInterval(checkMemory, 1000);
  }

  private getCurrentMetrics(): PerformanceMetrics {
    if (this.metrics.length === 0) {
      this.metrics.push({
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
        memoryUsage: 0,
        networkLatency: 0,
        renderTime: 0,
        bundleSize: 0,
        cacheHitRate: 0
      });
    }
    return this.metrics[this.metrics.length - 1];
  }

  private startPeriodicReporting(): void {
    setInterval(() => {
      if (this.isMonitoring) {
        this.reportMetrics();
      }
    }, this.config.reportInterval);
  }

  private reportMetrics(): void {
    const currentMetrics = this.getCurrentMetrics();
    
    // Send metrics to analytics
    this.sendMetricsToAnalytics(currentMetrics);
    
    // Store in history
    this.metrics.push({ ...currentMetrics });
    
    // Limit history size
    if (this.metrics.length > this.config.maxMetricsHistory) {
      this.metrics.shift();
    }
  }

  private sendMetricsToAnalytics(metrics: PerformanceMetrics): void {
    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        load_time: metrics.loadTime,
        fcp: metrics.firstContentfulPaint,
        lcp: metrics.largestContentfulPaint,
        fid: metrics.firstInputDelay,
        cls: metrics.cumulativeLayoutShift,
        memory_usage: metrics.memoryUsage,
        network_latency: metrics.networkLatency,
        render_time: metrics.renderTime
      });
    }
  }

  public getMetricsHistory(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  public getLatestMetrics(): PerformanceMetrics | null {
    return this.metrics.length > 0 ? this.metrics[this.metrics.length - 1] : null;
  }

  public generatePerformanceReport(): string {
    const latest = this.getLatestMetrics();
    if (!latest) return 'No metrics available';

    return `
Performance Report:
- Load Time: ${latest.loadTime.toFixed(2)}ms
- Largest Contentful Paint: ${latest.largestContentfulPaint.toFixed(2)}ms
- First Input Delay: ${latest.firstInputDelay.toFixed(2)}ms
- Cumulative Layout Shift: ${latest.cumulativeLayoutShift.toFixed(4)}
- Memory Usage: ${(latest.memoryUsage * 100).toFixed(2)}%
- Network Latency: ${latest.networkLatency.toFixed(2)}ms
- Render Time: ${latest.renderTime.toFixed(2)}ms
    `.trim();
  }

  public optimizePerformance(): void {
    // Implement performance optimization strategies
    this.optimizeImages();
    this.optimizeFonts();
    this.optimizeBundleSize();
    this.optimizeCaching();
  }

  private optimizeImages(): void {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  private optimizeFonts(): void {
    // Preload critical fonts
    const criticalFonts = [
      '/fonts/inter-var.woff2',
      '/fonts/inter-var.woff'
    ];

    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  private optimizeBundleSize(): void {
    // Implement bundle size optimization
    console.log('Bundle size optimization not implemented yet');
  }

  private optimizeCaching(): void {
    // Implement caching optimization
    console.log('Caching optimization not implemented yet');
  }
}

export default AdvancedPerformanceMonitor;