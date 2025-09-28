/**
 * Advanced Performance Optimizer
 * Provides comprehensive performance monitoring and optimization utilities
 */

interface PerformanceConfig {
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  networkRequests: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

class PerformanceOptimizer {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics;
  private observers: PerformanceObserver[] = [];

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enablePreloading: true,
      enableCaching: true,
      enableCompression: true,
      enableImageOptimization: true,
      enableCodeSplitting: true,
      ...config
    };

    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      networkRequests: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupPerformanceObservers();
    this.optimizeImages();
    this.setupLazyLoading();
    this.preloadCriticalResources();
    this.setupCaching();
  }

  private setupPerformanceObservers(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Observe FCP (First Contentful Paint)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.metrics.firstContentfulPaint = fcpEntry.startTime;
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP observer setup failed:', error);
    }

    // Observe LCP (Largest Contentful Paint)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP observer setup failed:', error);
    }

    // Observe CLS (Cumulative Layout Shift)
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        }
        this.metrics.cumulativeLayoutShift = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS observer setup failed:', error);
    }

    // Observe FID (First Input Delay)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        for (const entry of entries) {
          const inputEntry = entry as PerformanceEntry & { processingStart?: number };
          this.metrics.firstInputDelay = (inputEntry.processingStart || 0) - entry.startTime;
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      console.warn('FID observer setup failed:', error);
    }
  }

  private optimizeImages(): void {
    if (!this.config.enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async');

      // Add fetchpriority="high" for above-the-fold images
      if (img.getBoundingClientRect().top <= window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }

  private setupLazyLoading(): void {
    if (!this.config.enableLazyLoading || typeof window === 'undefined') return;

    const lazyElements = document.querySelectorAll('[data-lazy]');
    
    if ('IntersectionObserver' in window) {
      const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const src = element.getAttribute('data-src');
            if (src) {
              if (element.tagName === 'IMG') {
                (element as HTMLImageElement).src = src;
              } else {
                element.style.backgroundImage = `url(${src})`;
              }
              element.removeAttribute('data-src');
              element.removeAttribute('data-lazy');
            }
            lazyObserver.unobserve(element);
          }
        });
      });

      lazyElements.forEach((element) => {
        lazyObserver.observe(element);
      });
    }
  }

  private preloadCriticalResources(): void {
    if (!this.config.enablePreloading || typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter.woff2',
      '/og-image.png',
      '/favicon.ico'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      if (resource.endsWith('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (resource.endsWith('.png') || resource.endsWith('.jpg') || resource.endsWith('.jpeg')) {
        link.as = 'image';
      }
      
      document.head.appendChild(link);
    });
  }

  private setupCaching(): void {
    if (!this.config.enableCaching || typeof window === 'undefined') return;

    // Set up service worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.warn('Service Worker registration failed:', error);
        });
    }
  }

  public getMetrics(): PerformanceMetrics {
    // Update runtime metrics
    this.updateRuntimeMetrics();
    return { ...this.metrics };
  }

  private updateRuntimeMetrics(): void {
    if (typeof window === 'undefined') return;

    // Update load time
    if (performance.timing) {
      this.metrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    }

    // Update memory usage
    const memory = (performance as Performance & { memory?: { usedJSHeapSize?: number } }).memory;
    if (memory) {
      this.metrics.memoryUsage = memory.usedJSHeapSize || 0;
    }

    // Update network requests count
    this.metrics.networkRequests = performance.getEntriesByType('resource').length;

    // Update bundle size
    this.metrics.bundleSize = (performance.getEntriesByType('resource') as PerformanceResourceTiming[])
      .filter((entry: PerformanceResourceTiming) => entry.name.includes('.js'))
      .reduce((total: number, entry: PerformanceResourceTiming) => total + (entry.transferSize || 0), 0);
  }

  public optimizeBundle(): void {
    if (!this.config.enableCodeSplitting || typeof window === 'undefined') return;

    // Dynamic imports for code splitting
    const lazyComponents = {
      'AIPerformanceDashboard': () => import('../components/AIPerformanceDashboard'),
      'PerformanceDashboard': () => import('../components/PerformanceDashboard'),
      'EnhancedSystemDashboard': () => import('../components/EnhancedSystemDashboard')
    };

    // Store lazy components for later use
    (window as Window & { lazyComponents?: Record<string, () => Promise<unknown>> }).lazyComponents = lazyComponents;
  }

  public compressAssets(): void {
    if (!this.config.enableCompression || typeof window === 'undefined') return;

    // Enable gzip compression headers
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Encoding';
    meta.content = 'gzip';
    document.head.appendChild(meta);
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }

  public generateReport(): string {
    const metrics = this.getMetrics();
    return `
Performance Report:
- Load Time: ${metrics.loadTime}ms
- First Contentful Paint: ${metrics.firstContentfulPaint}ms
- Largest Contentful Paint: ${metrics.largestContentfulPaint}ms
- Cumulative Layout Shift: ${metrics.cumulativeLayoutShift}
- First Input Delay: ${metrics.firstInputDelay}ms
- Memory Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
- Bundle Size: ${(metrics.bundleSize / 1024).toFixed(2)}KB
- Network Requests: ${metrics.networkRequests}
    `.trim();
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export class for custom instances
export { PerformanceOptimizer };
export type { PerformanceConfig, PerformanceMetrics };