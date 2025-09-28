/**
 * Performance Enhancement Utilities
 * Advanced performance monitoring and optimization tools
 */

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
}

export interface PerformanceConfig {
  enableMonitoring: boolean;
  enableOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableServiceWorker: boolean;
  enableImageOptimization: boolean;
  enableFontOptimization: boolean;
  enableCodeSplitting: boolean;
}

class PerformanceEnhancer {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics | null = null;
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableMonitoring: true,
      enableOptimization: true,
      enableCaching: true,
      enableCompression: true,
      enableLazyLoading: true,
      enablePreloading: true,
      enableServiceWorker: true,
      enableImageOptimization: true,
      enableFontOptimization: true,
      enableCodeSplitting: true,
      ...config
    };
  }

  /**
   * Initialize performance enhancements
   */
  public initialize(): void {
    if (this.isInitialized) return;

    if (this.config.enableMonitoring) {
      this.setupPerformanceMonitoring();
    }

    if (this.config.enableOptimization) {
      this.setupOptimizations();
    }

    if (this.config.enableCaching) {
      this.setupCaching();
    }

    if (this.config.enableLazyLoading) {
      this.setupLazyLoading();
    }

    if (this.config.enablePreloading) {
      this.setupPreloading();
    }

    if (this.config.enableServiceWorker) {
      this.setupServiceWorker();
    }

    if (this.config.enableImageOptimization) {
      this.setupImageOptimization();
    }

    if (this.config.enableFontOptimization) {
      this.setupFontOptimization();
    }

    this.isInitialized = true;
    console.log('Performance enhancements initialized');
  }

  /**
   * Setup performance monitoring
   */
  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor resource loading
    this.observeResourceLoading();
    
    // Monitor memory usage
    this.observeMemoryUsage();
    
    // Monitor navigation timing
    this.observeNavigationTiming();
  }

  /**
   * Observe Core Web Vitals
   */
  private observeWebVitals(): void {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.updateMetric('fcp', fcpEntry.startTime);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    }

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this.updateMetric('lcp', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = (entry as any).processingStart - entry.startTime;
          this.updateMetric('fid', fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    }

    // Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            this.updateMetric('cls', clsValue);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    }
  }

  /**
   * Observe resource loading performance
   */
  private observeResourceLoading(): void {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 1000) {
            console.warn('Slow resource detected:', entry.name, entry.duration);
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    }
  }

  /**
   * Observe memory usage
   */
  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.updateMetric('memoryUsage', memory.usedJSHeapSize / 1024 / 1024);
    }
  }

  /**
   * Observe navigation timing
   */
  private observeNavigationTiming(): void {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.updateMetric('ttfb', navigation.responseStart - navigation.requestStart);
    }
  }

  /**
   * Update performance metric
   */
  private updateMetric(key: keyof PerformanceMetrics, value: number): void {
    if (!this.metrics) {
      this.metrics = {
        fcp: 0,
        lcp: 0,
        fid: 0,
        cls: 0,
        ttfb: 0,
        memoryUsage: 0,
        renderTime: 0,
        networkLatency: 0
      };
    }
    this.metrics[key] = value;
  }

  /**
   * Setup performance optimizations
   */
  private setupOptimizations(): void {
    // Enable requestIdleCallback for non-critical tasks
    if ('requestIdleCallback' in window) {
      this.scheduleIdleTasks();
    }

    // Optimize scroll performance
    this.optimizeScrollPerformance();

    // Optimize resize performance
    this.optimizeResizePerformance();
  }

  /**
   * Schedule tasks to run during idle time
   */
  private scheduleIdleTasks(): void {
    const idleCallback = (deadline: IdleDeadline) => {
      if (deadline.timeRemaining() > 0) {
        // Run non-critical optimizations here
        this.optimizeImages();
        this.optimizeFonts();
      }
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(idleCallback);
    }
  }

  /**
   * Optimize scroll performance
   */
  private optimizeScrollPerformance(): void {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Update scroll position optimizations
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  /**
   * Optimize resize performance
   */
  private optimizeResizePerformance(): void {
    let resizeTimeout: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize optimizations
        this.optimizeLayout();
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });
  }

  /**
   * Setup caching strategies
   */
  private setupCaching(): void {
    // Implement browser caching strategies
    if ('caches' in window) {
      this.setupCacheStrategies();
    }
  }

  /**
   * Setup cache strategies
   */
  private setupCacheStrategies(): void {
    const cacheName = 'zion-website-v1';
    
    // Cache static assets
    const staticAssets = [
      '/',
      '/assets/css/main.css',
      '/assets/js/main.js',
      '/assets/js/vendor-react.js'
    ];

    caches.open(cacheName).then((cache) => {
      cache.addAll(staticAssets);
    });
  }

  /**
   * Setup lazy loading
   */
  private setupLazyLoading(): void {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            this.loadLazyImage(img);
            imageObserver.unobserve(img);
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  /**
   * Load lazy image
   */
  private loadLazyImage(img: HTMLImageElement): void {
    const src = img.getAttribute('data-src');
    if (src) {
      img.src = src;
      img.removeAttribute('data-src');
      img.classList.add('loaded');
    }
  }

  /**
   * Setup preloading
   */
  private setupPreloading(): void {
    // Preload critical resources
    const criticalResources = [
      '/assets/css/main.css',
      '/assets/js/main.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  /**
   * Setup service worker
   */
  private setupServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }

  /**
   * Setup image optimization
   */
  private setupImageOptimization(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Add loading="lazy" if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async"
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }

  /**
   * Setup font optimization
   */
  private setupFontOptimization(): void {
    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font;
      link.as = 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize layout
   */
  private optimizeLayout(): void {
    // Trigger layout optimizations
    document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
  }

  /**
   * Optimize images
   */
  private optimizeImages(): void {
    // Image optimization logic
    console.log('Optimizing images...');
  }

  /**
   * Optimize fonts
   */
  private optimizeFonts(): void {
    // Font optimization logic
    console.log('Optimizing fonts...');
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  /**
   * Generate performance report
   */
  public generateReport(): string {
    if (!this.metrics) {
      return 'No performance metrics available';
    }

    const { fcp, lcp, fid, cls, ttfb, memoryUsage } = this.metrics;
    
    return `
Performance Report
First Contentful Paint: ${fcp.toFixed(2)}ms
Largest Contentful Paint: ${lcp.toFixed(2)}ms
First Input Delay: ${fid.toFixed(2)}ms
Cumulative Layout Shift: ${cls.toFixed(3)}
Time to First Byte: ${ttfb.toFixed(2)}ms
Memory Usage: ${memoryUsage.toFixed(2)}MB

Performance Score: ${this.calculatePerformanceScore()}/100
    `.trim();
  }

  /**
   * Calculate overall performance score
   */
  private calculatePerformanceScore(): number {
    if (!this.metrics) return 0;

    const { fcp, lcp, fid, cls } = this.metrics;
    
    let score = 100;
    
    // FCP scoring (good: <1.8s, needs improvement: 1.8-3.0s, poor: >3.0s)
    if (fcp > 3000) score -= 30;
    else if (fcp > 1800) score -= 15;
    
    // LCP scoring (good: <2.5s, needs improvement: 2.5-4.0s, poor: >4.0s)
    if (lcp > 4000) score -= 30;
    else if (lcp > 2500) score -= 15;
    
    // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
    if (fid > 300) score -= 20;
    else if (fid > 100) score -= 10;
    
    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (cls > 0.25) score -= 20;
    else if (cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  }

  /**
   * Cleanup observers
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceEnhancer = new PerformanceEnhancer();

// Export class for custom instances
export { PerformanceEnhancer };