/**
 * Advanced Performance Optimization System
 * Comprehensive performance monitoring and optimization utilities
 */

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  memoryUsage: number;
  bundleSize: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enablePrefetching: boolean;
  enableServiceWorker: boolean;
  enableResourceHints: boolean;
}

class AdvancedPerformanceOptimizer {
  private metrics: PerformanceMetrics | null = null;
  private config: OptimizationConfig;
  private observers: PerformanceObserver[] = [];

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enableImageOptimization: true,
      enableCodeSplitting: true,
      enableCaching: true,
      enableCompression: true,
      enablePrefetching: true,
      enableServiceWorker: true,
      enableResourceHints: true,
      ...config,
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupPerformanceObservers();
    this.optimizeImages();
    this.setupLazyLoading();
    this.enableResourceHints();
    this.setupCaching();
    this.optimizeBundleLoading();
  }

  private setupPerformanceObservers(): void {
    // Core Web Vitals monitoring
    if ('PerformanceObserver' in window) {
      // LCP Observer
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        this.metrics = {
          ...this.metrics,
          largestContentfulPaint: lastEntry.startTime,
        } as PerformanceMetrics;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // FID Observer
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics = {
            ...this.metrics,
            firstInputDelay: entry.processingStart - entry.startTime,
          } as PerformanceMetrics;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // CLS Observer
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics = {
          ...this.metrics,
          cumulativeLayoutShift: clsValue,
        } as PerformanceMetrics;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    }

    // Memory usage monitoring
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      this.metrics = {
        ...this.metrics,
        memoryUsage: memoryInfo.usedJSHeapSize / memoryInfo.totalJSHeapSize,
      } as PerformanceMetrics;
    }
  }

  private optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Optimize image formats
      this.optimizeImageFormat(img);
    });
  }

  private optimizeImageFormat(img: HTMLImageElement): void {
    const src = img.src;
    if (src.includes('.jpg') || src.includes('.jpeg')) {
      // Convert to WebP if supported
      if (this.supportsWebP()) {
        const webpSrc = src.replace(/\.(jpg|jpeg)$/i, '.webp');
        img.src = webpSrc;
      }
    }
  }

  private supportsWebP(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  private setupLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    // Intersection Observer for lazy loading
    const lazyElements = document.querySelectorAll('[data-lazy]');
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const src = element.getAttribute('data-lazy');
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

  private enableResourceHints(): void {
    if (!this.config.enableResourceHints) return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Prefetch likely next pages
    const prefetchPages = ['/services', '/contact', '/about'];
    prefetchPages.forEach((page) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  }

  private setupCaching(): void {
    if (!this.config.enableCaching) return;

    // Service Worker registration
    if ('serviceWorker' in navigator && this.config.enableServiceWorker) {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('Service Worker registered:', registration);
      }).catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
    }

    // Cache API for dynamic content
    if ('caches' in window) {
      this.setupCacheStrategies();
    }
  }

  private setupCacheStrategies(): void {
    const cacheStrategies = {
      'cache-first': ['/css/', '/js/', '/images/'],
      'network-first': ['/api/'],
      'stale-while-revalidate': ['/'],
    };

    Object.entries(cacheStrategies).forEach(([strategy, patterns]) => {
      patterns.forEach((pattern) => {
        // Implement cache strategy logic here
        console.log(`Setting up ${strategy} cache for ${pattern}`);
      });
    });
  }

  private optimizeBundleLoading(): void {
    if (!this.config.enableCodeSplitting) return;

    // Dynamic imports for non-critical components
    const lazyComponents = [
      'components/Chart',
      'components/DataTable',
      'components/Modal',
    ];

    lazyComponents.forEach((component) => {
      // Preload components that are likely to be used
      import(/* webpackChunkName: "lazy-[request]" */ `../${component}`)
        .then((module) => {
          console.log(`Preloaded component: ${component}`);
        })
        .catch((error) => {
          console.error(`Failed to preload component ${component}:`, error);
        });
    });
  }

  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  public generateReport(): string {
    if (!this.metrics) {
      return 'No performance metrics available';
    }

    const report = `
Performance Report:
==================
Load Time: ${this.metrics.loadTime}ms
First Contentful Paint: ${this.metrics.firstContentfulPaint}ms
Largest Contentful Paint: ${this.metrics.largestContentfulPaint}ms
First Input Delay: ${this.metrics.firstInputDelay}ms
Cumulative Layout Shift: ${this.metrics.cumulativeLayoutShift}
Time to Interactive: ${this.metrics.timeToInteractive}ms
Memory Usage: ${(this.metrics.memoryUsage * 100).toFixed(2)}%
Bundle Size: ${this.metrics.bundleSize}KB
    `;

    return report;
  }

  public optimize(): void {
    // Run additional optimizations
    this.compressAssets();
    this.minifyCSS();
    this.optimizeJavaScript();
  }

  private compressAssets(): void {
    // Implement asset compression
    console.log('Compressing assets...');
  }

  private minifyCSS(): void {
    // Implement CSS minification
    console.log('Minifying CSS...');
  }

  private optimizeJavaScript(): void {
    // Implement JavaScript optimization
    console.log('Optimizing JavaScript...');
  }

  public cleanup(): void {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers = [];
  }
}

// Export the optimizer
export const performanceOptimizer = new AdvancedPerformanceOptimizer();

// Export types and utilities
export type { PerformanceMetrics, OptimizationConfig };
export { AdvancedPerformanceOptimizer };