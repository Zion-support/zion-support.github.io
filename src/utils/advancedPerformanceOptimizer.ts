/**
 * Advanced Performance Optimizer
 * Provides comprehensive performance monitoring and optimization utilities
 */

interface PerformanceConfig {
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enablePrefetching: boolean;
  enableServiceWorker: boolean;
  enableResourceHints: boolean;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  networkLatency: number;
  domSize: number;
  resourceCount: number;
  cacheHitRate: number;
  compressionRatio: number;
}

class AdvancedPerformanceOptimizer {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics;
  private observers: PerformanceObserver[];
  private isInitialized: boolean = false;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enableImageOptimization: true,
      enableCodeSplitting: true,
      enableCaching: true,
      enableCompression: true,
      enablePrefetching: true,
      enableServiceWorker: true,
      enableResourceHints: true,
      ...config
    };

    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0,
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
      networkLatency: 0,
      domSize: 0,
      resourceCount: 0,
      cacheHitRate: 0,
      compressionRatio: 0
    };

    this.observers = [];
  }

  /**
   * Initialize the performance optimizer
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize performance observers
      this.initializePerformanceObservers();
      
      // Setup lazy loading
      if (this.config.enableLazyLoading) {
        this.setupLazyLoading();
      }

      // Setup image optimization
      if (this.config.enableImageOptimization) {
        this.setupImageOptimization();
      }

      // Setup caching
      if (this.config.enableCaching) {
        await this.setupCaching();
      }

      // Setup service worker
      if (this.config.enableServiceWorker) {
        await this.setupServiceWorker();
      }

      // Setup resource hints
      if (this.config.enableResourceHints) {
        this.setupResourceHints();
      }

      // Setup prefetching
      if (this.config.enablePrefetching) {
        this.setupPrefetching();
      }

      this.isInitialized = true;
      console.log('Advanced Performance Optimizer initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Advanced Performance Optimizer:', error);
    }
  }

  /**
   * Initialize performance observers for Core Web Vitals
   */
  private initializePerformanceObservers(): void {
    // LCP Observer
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { value: number };
        this.metrics.lcp = lastEntry.value;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // FID Observer
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // CLS Observer
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    }
  }

  /**
   * Setup lazy loading for images and components
   */
  private setupLazyLoading(): void {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
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

      // Observe all images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * Setup image optimization
   */
  private setupImageOptimization(): void {
    // Add WebP support detection and fallback
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // Optimize images based on viewport size
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => {
        const image = img as HTMLImageElement;
        const viewportWidth = window.innerWidth;
        let optimizedSrc = image.dataset.src;

        if (supportsWebP() && optimizedSrc) {
          optimizedSrc = optimizedSrc.replace(/\.(jpg|jpeg|png)$/, '.webp');
        }

        // Add responsive image attributes
        image.setAttribute('loading', 'lazy');
        image.setAttribute('decoding', 'async');
        
        if (optimizedSrc) {
          image.dataset.src = optimizedSrc;
        }
      });
    };

    optimizeImages();
  }

  /**
   * Setup caching strategies
   */
  private async setupCaching(): Promise<void> {
    if ('caches' in window) {
      const cacheName = 'zion-app-cache-v1';
      const cache = await caches.open(cacheName);
      
      // Cache static assets
      const staticAssets = [
        '/',
        '/static/css/main.css',
        '/static/js/main.js',
        '/static/js/vendor.js'
      ];

      await cache.addAll(staticAssets);
    }
  }

  /**
   * Setup service worker for advanced caching
   */
  private async setupServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }

  /**
   * Setup resource hints for better performance
   */
  private setupResourceHints(): void {
    // Add DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdnjs.cloudflare.com'
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Add preconnect for critical resources
    const criticalResources = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = resource;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  /**
   * Setup intelligent prefetching
   */
  private setupPrefetching(): void {
    // Prefetch next likely pages based on user behavior
    const prefetchLinks = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !document.querySelector(`link[href="${href}"]`)) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        });
      });
    };

    // Run prefetching after page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', prefetchLinks);
    } else {
      prefetchLinks();
    }
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Update specific metric
   */
  public updateMetric<K extends keyof PerformanceMetrics>(
    key: K,
    value: PerformanceMetrics[K]
  ): void {
    this.metrics[key] = value;
  }

  /**
   * Get performance score (0-100)
   */
  public getPerformanceScore(): number {
    const lcpScore = this.metrics.lcp < 2500 ? 100 : Math.max(0, 100 - (this.metrics.lcp - 2500) / 25);
    const fidScore = this.metrics.fid < 100 ? 100 : Math.max(0, 100 - (this.metrics.fid - 100) / 10);
    const clsScore = this.metrics.cls < 0.1 ? 100 : Math.max(0, 100 - this.metrics.cls * 1000);
    
    return Math.round((lcpScore + fidScore + clsScore) / 3);
  }

  /**
   * Generate performance report
   */
  public generateReport(): string {
    const score = this.getPerformanceScore();
    const metrics = this.getMetrics();
    
    return `
Performance Report:
==================
Overall Score: ${score}/100
LCP: ${metrics.lcp.toFixed(2)}ms
FID: ${metrics.fid.toFixed(2)}ms
CLS: ${metrics.cls.toFixed(4)}
Memory Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
FPS: ${metrics.fps}
Cache Hit Rate: ${(metrics.cacheHitRate * 100).toFixed(2)}%
    `.trim();
  }

  /**
   * Cleanup resources
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

// Export singleton instance
export const performanceOptimizer = new AdvancedPerformanceOptimizer();

// Export class for custom instances
export { AdvancedPerformanceOptimizer };
export type { PerformanceConfig, PerformanceMetrics };