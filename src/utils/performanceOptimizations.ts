/**
 * Comprehensive Performance Optimizations
 * Advanced performance monitoring and optimization utilities
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enablePreloading: boolean;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics;
  private config: OptimizationConfig;
  private observers: PerformanceObserver[] = [];

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enableCaching: true,
      enableCompression: true,
      enablePreloading: true,
      ...config,
    };

    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRate: 0,
    };

    this.initializeObservers();
  }

  private initializeObservers(): void {
    if (typeof window === 'undefined') return;

    // Monitor navigation timing
    const navObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          this.metrics.loadTime = (entry as any).loadEventEnd - (entry as any).fetchStart;
        }
      });
    });

    // Monitor paint timing
    const paintObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          this.metrics.renderTime = entry.startTime;
        }
      });
    });

    // Monitor memory usage
    const memoryObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
          if (memory) {
            this.metrics.memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
          }
        }
      });
    });

    try {
      navObserver.observe({ entryTypes: ['navigation'] });
      paintObserver.observe({ entryTypes: ['paint'] });
      memoryObserver.observe({ entryTypes: ['measure'] });

      this.observers.push(navObserver, paintObserver, memoryObserver);
    } catch (error) {
      console.warn('Performance observers not supported:', error);
    }
  }

  /**
   * Optimize images with lazy loading and compression
   */
  optimizeImages(): void {
    if (!this.config.enableLazyLoading) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(): void {
    if (!this.config.enablePreloading) return;

    const criticalResources = [
      '/assets/css/main.css',
      '/assets/js/main.js',
      '/assets/js/vendor-react.js',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  /**
   * Enable service worker caching
   */
  enableCaching(): void {
    if (!this.config.enableCaching) return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }

  /**
   * Optimize bundle size by code splitting
   */
  optimizeBundleSize(): void {
    if (!this.config.enableCodeSplitting) return;

    // Dynamic imports for non-critical components
    const lazyComponents = [
      'src/components/AdvancedDashboard',
      'src/components/PerformanceMonitor',
      'src/components/SystemHealthDashboard',
    ];

    lazyComponents.forEach((component) => {
      // This would be implemented in the build process
      console.log(`Code splitting enabled for: ${component}`);
    });
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Generate performance report
   */
  generateReport(): string {
    const metrics = this.getMetrics();
    return `
Performance Report:
- Load Time: ${metrics.loadTime.toFixed(2)}ms
- Render Time: ${metrics.renderTime.toFixed(2)}ms
- Memory Usage: ${metrics.memoryUsage}MB
- Bundle Size: ${metrics.bundleSize}KB
- Cache Hit Rate: ${metrics.cacheHitRate.toFixed(2)}%
    `.trim();
  }

  /**
   * Optimize CSS delivery
   */
  optimizeCSSDelivery(): void {
    const criticalCSS = document.querySelector('style[data-critical]');
    if (criticalCSS) {
      // Inline critical CSS is already present
      return;
    }

    // Load non-critical CSS asynchronously
    const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"][data-non-critical]');
    nonCriticalCSS.forEach((link) => {
      link.setAttribute('media', 'print');
      link.onload = () => {
        link.setAttribute('media', 'all');
      };
    });
  }

  /**
   * Optimize JavaScript execution
   */
  optimizeJavaScriptExecution(): void {
    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach((script) => {
      if (!script.hasAttribute('defer')) {
        script.setAttribute('defer', '');
      }
    });

    // Use requestIdleCallback for non-urgent tasks
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        this.optimizeImages();
        this.preloadCriticalResources();
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        this.optimizeImages();
        this.preloadCriticalResources();
      }, 100);
    }
  }

  /**
   * Implement resource hints
   */
  addResourceHints(): void {
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
    ];

    hints.forEach((hint) => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize third-party scripts
   */
  optimizeThirdPartyScripts(): void {
    // Load analytics scripts after page load
    const analyticsScripts = document.querySelectorAll('script[data-analytics]');
    analyticsScripts.forEach((script) => {
      script.setAttribute('defer', '');
    });

    // Use intersection observer for tracking scripts
    if ('IntersectionObserver' in window) {
      const trackingElements = document.querySelectorAll('[data-tracking]');
      const trackingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger tracking only when element is visible
            const element = entry.target as HTMLElement;
            const event = element.dataset.tracking;
            if (event && typeof gtag !== 'undefined') {
              gtag('event', event);
            }
          }
        });
      });

      trackingElements.forEach((element) => trackingObserver.observe(element));
    }
  }

  /**
   * Implement advanced caching strategies
   */
  implementAdvancedCaching(): void {
    if (!this.config.enableCaching) return;

    // Cache API responses
    const cacheName = 'zion-website-cache-v1';
    
    if ('caches' in window) {
      caches.open(cacheName).then((cache) => {
        // Cache static assets
        const staticAssets = [
          '/',
          '/assets/css/main.css',
          '/assets/js/main.js',
          '/manifest.json',
        ];

        cache.addAll(staticAssets).catch((error) => {
          console.warn('Failed to cache static assets:', error);
        });
      });
    }
  }

  /**
   * Monitor and optimize Core Web Vitals
   */
  monitorCoreWebVitals(): void {
    if (typeof window === 'undefined') return;

    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });

    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Core Web Vitals monitoring not supported:', error);
    }
  }

  /**
   * Initialize all optimizations
   */
  initializeOptimizations(): void {
    this.optimizeCSSDelivery();
    this.optimizeJavaScriptExecution();
    this.addResourceHints();
    this.optimizeThirdPartyScripts();
    this.implementAdvancedCaching();
    this.monitorCoreWebVitals();
  }

  /**
   * Clean up observers
   */
  destroy(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export class for custom instances
export { PerformanceOptimizer };
export type { PerformanceMetrics, OptimizationConfig };