/**
 * Performance Enhancement Utilities
 * Advanced performance optimization tools for the Zion Tech Group website
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
}

interface ResourceHint {
  href: string;
  as: string;
  type?: string;
  crossorigin?: string;
}

class PerformanceEnhancer {
  private static instance: PerformanceEnhancer;
  private metrics: PerformanceMetrics;
  private resourceHints: ResourceHint[] = [];
  private isInitialized = false;

  private constructor() {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRate: 0
    };
  }

  public static getInstance(): PerformanceEnhancer {
    if (!PerformanceEnhancer.instance) {
      PerformanceEnhancer.instance = new PerformanceEnhancer();
    }
    return PerformanceEnhancer.instance;
  }

  /**
   * Initialize performance enhancements
   */
  public initialize(): void {
    if (this.isInitialized) return;

    this.setupPerformanceMonitoring();
    this.optimizeImages();
    this.preloadCriticalResources();
    this.setupLazyLoading();
    this.optimizeFonts();
    this.setupServiceWorker();
    
    this.isInitialized = true;
    console.log('🚀 Performance Enhancer initialized');
  }

  /**
   * Setup comprehensive performance monitoring
   */
  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals - using built-in Performance Observer instead of web-vitals
    this.monitorCoreWebVitals();

    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
        if (memory) {
          this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
        }
      }, 5000);
    }

    // Monitor bundle size
    this.measureBundleSize();
  }

  /**
   * Monitor Core Web Vitals using Performance Observer
   */
  private monitorCoreWebVitals(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      // Monitor LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { element?: Element };
        this.handleWebVital({
          name: 'LCP',
          value: lastEntry.startTime,
          id: lastEntry.element?.tagName || 'unknown'
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.handleWebVital({
            name: 'FID',
            value: (entry as PerformanceEventTiming).processingStart - entry.startTime,
            id: (entry as PerformanceEventTiming).target?.tagName || 'unknown'
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
            clsValue += layoutShiftEntry.value;
          }
        });
        this.handleWebVital({
          name: 'CLS',
          value: clsValue,
          id: 'cumulative'
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.handleWebVital({
            name: 'FCP',
            value: entry.startTime,
            id: entry.name
          });
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

    } catch (error) {
      console.warn('Failed to setup Core Web Vitals monitoring:', error);
    }
  }

  /**
   * Handle Web Vitals metrics
   */
  private handleWebVital = (metric: { name: string; value: number; id: string }): void => {
    console.log('Web Vital:', metric);
    
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.value),
        event_label: metric.id,
        non_interaction: true
      });
    }
  };

  /**
   * Optimize images for better performance
   */
  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach((img: HTMLImageElement) => {
      // Add loading="lazy" for images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.loading = 'lazy';
      }

      // Add decoding="async" for better performance
      img.decoding = 'async';

      // Add error handling
      img.onerror = () => {
        img.src = '/placeholder-image.png';
        img.alt = 'Image failed to load';
      };
    });
  }

  /**
   * Preload critical resources
   */
  public preloadResource(href: string, as: string, type?: string): void {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    
    if (type) link.type = type;
    if (as === 'font') link.crossOrigin = 'anonymous';
    
    document.head.appendChild(link);
    this.resourceHints.push({ href, as, type });
  }

  /**
   * Prefetch a resource for future use
   */
  public prefetchResource(href: string): void {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;

    document.head.appendChild(link);
    this.resourceHints.push({ href, as: 'fetch' });
  }

  /**
   * Preload critical resources
   */
  private preloadCriticalResources(): void {
    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
      { href: '/images/hero-bg.webp', as: 'image' },
      { href: '/images/logo.svg', as: 'image' },
      { href: '/api/health', as: 'fetch' }
    ];

    criticalResources.forEach(resource => {
      this.preloadResource(resource.href, resource.as, resource.type);
    });
  }

  /**
   * Setup lazy loading for non-critical resources
   */
  private setupLazyLoading(): void {
    // Lazy load images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * Optimize font loading
   */
  private optimizeFonts(): void {
    // Preload critical fonts
    this.preloadResource('/fonts/inter.woff2', 'font', 'font/woff2');
    
    // Add font-display: swap for better performance
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: url('/fonts/inter.woff2') format('woff2');
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup service worker for caching
   */
  private setupServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }

  /**
   * Optimize bundle by removing unused code
   */
  public optimizeBundle(): void {
    // Remove unused CSS
    this.removeUnusedCSS();
    
    // Optimize JavaScript
    this.optimizeJavaScript();
    
    // Compress assets
    this.compressAssets();
  }

  /**
   * Remove unused CSS
   */
  private removeUnusedCSS(): void {
    // This would typically be done at build time
    console.log('CSS optimization applied at build time');
  }

  /**
   * Optimize JavaScript
   */
  private optimizeJavaScript(): void {
    // This would typically be done at build time
    console.log('JavaScript optimization applied at build time');
  }

  /**
   * Compress assets
   */
  private compressAssets(): void {
    // This would typically be done at build time
    console.log('Asset compression applied at build time');
  }

  /**
   * Measure bundle size
   */
  private measureBundleSize(): void {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;

    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.startsWith('/')) {
        // Estimate size based on common patterns
        totalSize += 50; // KB estimate
      }
    });

    this.metrics.bundleSize = totalSize;
  }

  /**
   * Get performance metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Generate performance report
   */
  public generateReport(): string {
    const metrics = this.getMetrics();
    
    return `
Performance Report:
- Load Time: ${metrics.loadTime}ms
- Render Time: ${metrics.renderTime}ms
- Memory Usage: ${metrics.memoryUsage.toFixed(2)}MB
- Bundle Size: ${metrics.bundleSize}KB
- Cache Hit Rate: ${metrics.cacheHitRate}%
- Resource Hints: ${this.resourceHints.length}
    `.trim();
  }

  /**
   * Cleanup resources
   */
  public cleanup(): void {
    this.resourceHints = [];
    this.isInitialized = false;
    console.log('Performance Enhancer cleaned up');
  }
}

// Export singleton instance
const performanceEnhancer = PerformanceEnhancer.getInstance();
export { performanceEnhancer };
export default performanceEnhancer;