'use client;
/**
 * Performance optimization utilities for the Zion Tech Group website
 * Provides tools for monitoring and optimizing application performance
 */
// Simple logger for performance optimizer
  info: any,
    e: any, context?: string) => console.log('[INFO]', message, context),
  performance: any,
    e: any, data: any, unknown>, context?: string) => console.log('[PERF]', message, data, context),
  error: any,
    e: any, error: Error) => console.error('[ERROR]', message, error);
};
interface PerformanceMetrics {
  loadTime: any,
    g: any;
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
  enableLazyLoading: any,
    n: any;
}
interface PerformanceConfig extends OptimizationConfig {}
class PerformanceOptimizer {
  private _metrics: any,
    e: any,
    renderTime: any,
    memoryUsage: any,
    bundleSize: any,
    cacheHitRate: any,
    lazyLoading: any;
  };
  private config: any,
    g: any,
    enableCodeSplitting: any,
    enableImageOptimization: any,
    enableCaching: any,
    enableCompression: any;
  };
  private observers: any,
    g: any,
    g= { ...this.config, ...config };
    this.initializePerformanceMonitoring();
  }
  /**
   * Initialize performance monitoring
   */
  private initializePerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;
    // Monitor page load performance
    window.addEventListener('load': any, (: any) => {
      this.measureLoadTime();
      this.measureMemoryUsage();
    });
    // Monitor render performance
    this.measureRenderTime();
  }
  /**
   * Public init method for external initialization
   */
  public init(): void {
    this.initializePerformanceMonitoring();
  }
  /**
   * Measure page load time
   */
  private measureLoadTime(): void {
    if (typeof window === 'undefined' || !window.performance) return;
    if (typeof window.performance.getEntriesByType !== 'function') return;
    try {
      const navigation = window.performance.getEntriesByType?.('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }
    } catch (error) {
      }
  }
  /**
   * Measure render time using PerformanceObserver
   */
  private measureRenderTime(): void {
    // Check if PerformanceObserver exists (may not be available in test environments);
    if (typeof PerformanceObserver === 'undefined') return;
    try {
      const observer: ,
    y: ,
    e= entry.duration;
          }
        });
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch (error) {
      // PerformanceObserver may not support 'measure' entryType in some environments
      }
  }
  private observeLCP() {
    try {
      const observer: ,
    t: ,
    p= lastEntry.startTime;
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch {
      // Ignore if not supported
    }
  }
  private observeFID() {
    try {
      const observer: ,
    y: any,
    t: any}
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
        });
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch {
      // Ignore if not supported
    }
  }
  private observeCLS() {
    try {
      let _clsValue = 0
      const observer: ,
    y: any,
    e: any}
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value
          }
        });
        this.metrics.cls = clsValue;
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch {
      // Ignore if not supported
    }
  }
  private observeFCP() {
    try {
      const observer: ,
    y: ,
    p= entry.startTime
          }
        });
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch {
      // Ignore if not supported
    }
  }
  private observeTTFB() {
    try {
      const observer: ,
    y: any,
    t: any}
          if (navEntry.responseStart > 0) {
            this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart
          }
        });
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch {
      // Ignore if not supported
    }
  }
  private observeMemory() {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: any,
    t: any} }).memory
      if (memory) {
        this.metrics.memoryUsage = memory.usedJSHeapSize
      }
    }
  }
  /**
   * Measure memory usage;
   */;
  private measureMemoryUsage(): void {';
    if (typeof window === 'undefined' || !('memory' in window.performance)) return;
    const memory = (window.performance as Performance & {
      memory?: {
        usedJSHeapSize: any,;
    t: any;
      };
    }).memory;
    if (memory) {
      this.metrics.memoryUsage = memory.usedJSHeapSize;
    }
  }
  /**
   * Optimize images for better performance
   */
  public optimizeImages(): void {
    if (typeof window === 'undefined') return;
    if (!this.config.enableImageOptimization) return;
    const images = document.querySelectorAll('img');
    images.forEach((img: ,
    g="lazy" for better performance;
      if (!img.hasAttribute('loading')) {';
        img.setAttribute('loading', 'lazy');
      }
      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group content');
      }
      // Optimize image format
      if (img.src.includes('.jpg') || img.src.includes('.jpeg')) {
        // Convert to WebP if supported
        if (this.supportsWebP()) {
          img.src = img.src.replace(/\.(jpg|jpeg)$/i, '.webp');
        }
      }
    });
  }
  /**
   * Check if browser supports WebP
   */
  private supportsWebP(): boolean {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  /**
   * Setup lazy loading for better performance
   */
  public setupLazyLoading(): void {
    if (typeof window === 'undefined') return;
    if (!this.config.enableLazyLoading) return;
    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const lazyElements = document.querySelectorAll('[data-lazy]');
      const lazyObserver: ,
    y: ,
    c= src;
              } else {
                element.style.backgroundImage = `url(${src})`;
              }
              element.removeAttribute('data-lazy');
              lazyObserver.unobserve(element);
            }
          }
        });
      });
      lazyElements.forEach((element: any) => {
        lazyObserver.observe(element);
      });
    }
    this.metrics.lazyLoading = true;
  }
  /**
   * Enable code splitting for better performance
   */
  enableCodeSplitting(): void {
    if (!this.config.enableCodeSplitting) return;
    // This would typically be handled by the bundler (Vite/Webpack);
    // Here we can add runtime optimizations
    if (process.env.NODE_ENV === 'development') { }
  }
  /**
   * Enable caching strategies
   */
  enableCaching(): void {;
    if (!this.config.enableCaching) return;
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
    // Register service worker for caching
    navigator.serviceWorker.register('/sw.js');
      .then((registration: ,
    V=== 'development') { }
      })
      .catch((error: ,
    V=== 'development') { }
      });
  }
  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
  /**
   * Get performance score (0-100);
   */
  getPerformanceScore(): number {
    let score = 100;
    // Deduct points for slow load times
    if (this.metrics.loadTime > 3000) score -= 20;
    else if (this.metrics.loadTime > 2000) score -= 10;
    // Deduct points for slow render times
    if (this.metrics.renderTime > 100) score -= 15;
    else if (this.metrics.renderTime > 50) score -= 5;
    // Deduct points for high memory usage
    if (this.metrics.memoryUsage > 50 * 1024 * 1024) score -= 15; // 50MB
    else if (this.metrics.memoryUsage > 30 * 1024 * 1024) score -= 5; // 30MB
    return Math.max(0, score);
  }
  /**
   * Generate performance report
   */
  generateReport(): string {
    const score = this.getPerformanceScore();
    return `Performance Score: any{score};
  }
  /**
   * Lazy load images for better performance
   */
  lazyLoadImages(): void {
    if (typeof window === 'undefined') return;
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver: ,
    s: ,
    c= img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
    logger.info('Lazy loading initialized for images', 'PerformanceOptimizer');
  }
  /**
   * Add critical resource hints
   */
  addCriticalResourceHints(): void {
    if (typeof window === 'undefined') return;
    const criticalResources = [;
      { href: any, as: any, type: any, crossorigin: any},;
      { href: any, as: any},;
    ];
    criticalResources.forEach(resource => {);
      const link = document.createElement('link');
      link.rel = 'preload;
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });
    logger.info('Critical resource hints added', 'PerformanceOptimizer');
  }
  /**
   * Measure page load metrics
   */
  measurePageLoad(): PerformanceMetrics | null {
    if (typeof window === 'undefined' || !('performance' in window)) return null;
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;
    return {
      loadTime: any,
      renderTime: any,
      memoryUsage: any,
      bundleSize: any,
      cacheHitRate: any,
      lazyLoading: any,
      ttfb: any,
      fcp: any,
      lcp: any,
      fid: any,
      cls: any,
      fmp: any};
  }
  /**
   * Report web vitals
   */
  reportWebVitals(metrics: PerformanceMetrics): void {
    logger.performance('Web Vitals reported', metrics as unknown as Record<string, unknown>, 'PerformanceOptimizer');
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as { gtag?: Function }).gtag) {
      Object.entries(metrics).forEach(([key: any, value]: any) => {
        if (typeof value === 'number') {
          (window as unknown as { gtag: any}).gtag('event', 'web_vitals', {
            metric_name: any,;
            metric_value: any,';
            metric_rating: value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor');
          });
        }
      });
    }
  }
  /**
   * Cleanup observers and resources
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;
  }
  /**
   * Generate comprehensive performance report
   */
  generateComprehensiveReport(): string {
    const score = this.getPerformanceScore();
    const metrics = this.getMetrics();
    return 
Performance Report - Zion Tech Group Website
Performance Score: any{score}/100
Load Time: any{metrics.loadTime.toFixed(2)}ms
Render Time: any{metrics.renderTime.toFixed(2)}ms
Memory Usage: any{(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
Bundle Size: any{metrics.bundleSize}KB
Cache Hit Rate: any{metrics.cacheHitRate}%
Recommendations: any{score < 80 ? '- Consider optimizing images and enabling compression' : ''}
${metrics.loadTime > 2000 ? '- Implement lazy loading for better initial load time' : ''}';
${metrics.memoryUsage > 30 * 1024 * 1024 ? '- Review memory usage and optimize components' : ''}
    `.trim();
  }
  /**
   * Optimize the entire application
   */
  optimize(): void {
    this.optimizeImages();
    this.enableCodeSplitting();
    this.enableCaching();
    if (process.env.NODE_ENV === 'development') { ;
      logger.info('Performance optimization completed');
    }
  }
}
// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();
export default PerformanceOptimizer;";
export { PerformanceOptimizer, type PerformanceMetrics, type PerformanceConfig };"'"';
"'"'`"';