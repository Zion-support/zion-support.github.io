'use client';
/**
 * Performance optimization utilities for the Zion Tech Group website;
 * Provides tools for monitoring and optimizing application performance;
 */
// Simple logger for performance optimizer;
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
  lazyLoading: boolean;
  firstContentfulPaint?: number;
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  fmp?: number;
  ttfb?: number;
  memory?: number;
}
interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}
interface PerformanceConfig extends OptimizationConfig {}
class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    cacheHitRate: 0,
    lazyLoading: false;
  }
  private config: OptimizationConfig = {
    enableLazyLoading: true,
    enableCodeSplitting: true,
    enableImageOptimization: true,
    enableCaching: true,
    enableCompression: true;
  }
  private observers: PerformanceObserver[] = [];
  private isMonitoring: boolean = false;
  constructor(config?: Partial<OptimizationConfig>) {
    this.config = { ...this.config, ...config }
    this.initializePerformanceMonitoring();
  }
  /**
   * Initialize performance monitoring;
   */
  private initializePerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;
    // Monitor page load performance;
    window.addEventListener('load', () => {
      this.measureLoadTime();
      this.measureMemoryUsage();
    });
    // Monitor render performance;
    this.measureRenderTime();
  }
  /**
   * Public init method for external initialization;
   */
  public init(): void {
    this.initializePerformanceMonitoring();
  }
  /**
   * Measure page load time;
   */
  private measureLoadTime(): void {
    if (typeof window === 'undefined' || !window.performance) return;
    if (typeof window.performance.getEntriesByType !== 'function') return;
    try {
            if (navigation) {
        this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }
    } catch (error) {
      }
  }
  /**
   * Measure render time using PerformanceObserver;
   */
  private measureRenderTime(): void {
    // Check if PerformanceObserver exists (may not be available in test environments)
    if (typeof PerformanceObserver === 'undefined') return;
    try {
              entries.forEach((entry) => {
          if (entry.entryType === 'measure') {
            this.metrics.renderTime = entry.duration;
          }
        });
      });
      observer.observe({ entryTypes: ['measure'] });
      this.observers.push(observer);
    } catch (error) {
      // PerformanceObserver may not support 'measure' entryType in some environments;
      }
  }
  private observeLCP() {
    try {
      const _observer = new PerformanceObserver((list) => {
        const _entries = list.getEntries()
        const _lastEntry = entries[entries.length - 1]
        this.metrics.lcp = lastEntry.startTime;
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(observer)
    } catch {
      // Ignore if not supported;
    }
  }
  private observeFID() {
    try {
      const _observer = new PerformanceObserver((list) => {
        const _entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          const _fidEntry = entry as PerformanceEntry & { processingStart: number }
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
        })
      })
      observer.observe({ entryTypes: ['first-input'] })
      this.observers.push(observer)
    } catch {
      // Ignore if not supported;
    }
  }
  private observeCLS() {
    try {
      let _clsValue = 0;
      const _observer = new PerformanceObserver((list) => {
        const _entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          const _clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number }
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        })
        this.metrics.cls = clsValue;
      })
      observer.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(observer)
    } catch {
      // Ignore if not supported;
    }
  }
  private observeFCP() {
    try {
      const _observer = new PerformanceObserver((list) => {
        const _entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
          }
        })
      })
      observer.observe({ entryTypes: ['paint'] })
      this.observers.push(observer)
    } catch {
      // Ignore if not supported;
    }
  }
  private observeTTFB() {
    try {
      const _observer = new PerformanceObserver((list) => {
        const _entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          const _navEntry = entry as PerformanceEntry & { responseStart: number; requestStart: number }
          if (navEntry.responseStart > 0) {
            this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart;
          }
        })
      })
      observer.observe({ entryTypes: ['navigation'] })
      this.observers.push(observer)
    } catch {
      // Ignore if not supported;
    }
  }
  private observeMemory() {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const _memory = (performance as Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (memory) {
        this.metrics.memoryUsage = memory.usedJSHeapSize;
      }
    }
  }
  /**
   * Measure memory usage;
   */
  private measureMemoryUsage(): void {
    if (typeof window === 'undefined' || !('memory' in window.performance)) return;
            totalJSHeapSize: number;
        jsHeapSizeLimit: number;
      }
    }).memory;
    if (memory) {
      this.metrics.memoryUsage = memory.usedJSHeapSize;
    }
  }
  /**
   * Optimize images for better performance;
   */
  public optimizeImages(): void {
    if (typeof window === 'undefined') return;
    if (!this.config.enableImageOptimization) return;
        images.forEach((img) => {
      // Add loading="lazy" for better performance;
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      // Add proper alt text if missing;
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group content');
      }
      // Optimize image format;
      if (img.src.includes('.jpg') || img.src.includes('.jpeg')) {
        // Convert to WebP if supported;
        if (this.supportsWebP()) {
          img.src = img.src.replace(/\.(jpg|jpeg)$/i, '.webp');
        }
      }
    });
  }
  /**
   * Check if browser supports WebP;
   */
  private supportsWebP(): boolean {
    if (typeof window === 'undefined') return false;
        canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  /**
   * Setup lazy loading for better performance;
   */
  public setupLazyLoading(): void {
    if (typeof window === 'undefined') return;
    if (!this.config.enableLazyLoading) return;
    // Intersection Observer for lazy loading;
    if ('IntersectionObserver' in window) {
                                    if (src) {
              if (element.tagName === 'IMG') {
                (element as HTMLImageElement).src = src;
              } else {
                element.style.backgroundImage = `url(${src})`;
              }
              element.removeAttribute('data-lazy');
              lazyObserver.unobserve(element);
            }
          }
        });
      });
      lazyElements.forEach((element) => {
        lazyObserver.observe(element);
      });
    }
    this.metrics.lazyLoading = true;
  }
  /**
   * Enable code splitting for better performance;
   */
  enableCodeSplitting(): void {
    if (!this.config.enableCodeSplitting) return;
    // This would typically be handled by the bundler (Vite/Webpack)
    // Here we can add runtime optimizations;
    if (process.env.NODE_ENV === 'development') { }
  }
  /**
   * Enable caching strategies;
   */
  enableCaching(): void {
    if (!this.config.enableCaching) return;
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
    // Register service worker for caching;
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        if (process.env.NODE_ENV === 'development') { }
      })
      .catch((error) => {
        if (process.env.NODE_ENV === 'development') { }
      });
  }
  /**
   * Get current performance metrics;
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }
  /**
   * Get performance score (0-100)
   */
  getPerformanceScore(): number {
        // Deduct points for slow load times;
    if (this.metrics.loadTime > 3000) score -= 20;
    else if (this.metrics.loadTime > 2000) score -= 10;
    // Deduct points for slow render times;
    if (this.metrics.renderTime > 100) score -= 15;
    else if (this.metrics.renderTime > 50) score -= 5;
    // Deduct points for high memory usage;
    if (this.metrics.memoryUsage > 50 * 1024 * 1024) score -= 15; // 50MB;
    else if (this.metrics.memoryUsage > 30 * 1024 * 1024) score -= 5; // 30MB;
    return Math.max(0, score);
  }
  /**
   * Generate performance report;
   */
  generateReport(): string {
        return `Performance Score: ${score}`;
  }
  /**
   * Lazy load images for better performance;
   */
  lazyLoadImages(): void {
    if (typeof window === 'undefined') return;
                  img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
    logger.info('Lazy loading initialized for images', 'PerformanceOptimizer');
  }
  /**
   * Add critical resource hints;
   */
  addCriticalResourceHints(): void {
    if (typeof window === 'undefined') return;
        criticalResources.forEach(resource => {
            link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });
    logger.info('Critical resource hints added', 'PerformanceOptimizer');
  }
  /**
   * Measure page load metrics;
   */
  measurePageLoad(): PerformanceMetrics | null {
    if (typeof window === 'undefined' || !('performance' in window)) return null;
        if (!navigation) return null;
    return {
      loadTime: this.metrics.loadTime,
      renderTime: this.metrics.renderTime,
      memoryUsage: this.metrics.memoryUsage,
      bundleSize: this.metrics.bundleSize,
      cacheHitRate: this.metrics.cacheHitRate,
      lazyLoading: this.metrics.lazyLoading,
      ttfb: navigation.responseStart - navigation.requestStart,
      fcp: this.metrics.fcp || 0,
      lcp: this.metrics.lcp || 0,
      fid: this.metrics.fid || 0,
      cls: this.metrics.cls || 0,
      fmp: this.metrics.fmp || 0;
    }
  }
  /**
   * Report web vitals;
   */
  reportWebVitals(metrics: PerformanceMetrics): void {
    logger.performance('Web Vitals reported', metrics as unknown as Record<string, unknown>, 'PerformanceOptimizer');
    // Send to analytics if available;
    if (typeof window !== 'undefined' && (window as { gtag?: Function }).gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (typeof value === 'number') {
          (window as unknown as { gtag: Function }).gtag('event', 'web_vitals', {
            metric_name: key,
            metric_value: value,
            metric_rating: value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor'
          });
        }
      });
    }
  }
  /**
   * Cleanup observers and resources;
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;
  }
  /**
   * Generate comprehensive performance report;
   */
  generateComprehensiveReport(): string {
            return `
Performance Report - Zion Tech Group Website;
Performance Score: ${score}/100;
Load Time: ${metrics.loadTime.toFixed(2)}ms;
Render Time: ${metrics.renderTime.toFixed(2)}ms;
Memory Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB;
Bundle Size: ${metrics.bundleSize}KB;
Cache Hit Rate: ${metrics.cacheHitRate}%
Recommendations:
${score < 80 ? '- Consider optimizing images and enabling compression' : ''}
${metrics.loadTime > 2000 ? '- Implement lazy loading for better initial load time' : ''}
${metrics.memoryUsage > 30 * 1024 * 1024 ? '- Review memory usage and optimize components' : ''}
    `.trim();
  }
  /**
   * Optimize the entire application;
   */
  optimize(): void {
    this.optimizeImages();
    this.enableCodeSplitting();
    this.enableCaching();
    if (process.env.NODE_ENV === 'development') { 
      logger.info('Performance optimization completed');
    }
  }
}
// Export singleton instance;
export export default PerformanceOptimizer;
export { PerformanceOptimizer, type PerformanceMetrics, type PerformanceConfig }