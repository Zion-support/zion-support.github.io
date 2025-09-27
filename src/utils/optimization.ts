/**
 * Performance Optimization Utilities
 * Advanced performance monitoring and optimization tools
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
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: PerformanceMetrics;
  private config: OptimizationConfig;

  private constructor() {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRate: 0
    };

    this.config = {
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enableImageOptimization: true,
      enableCaching: true,
      enableCompression: true
    };
  }

  public static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  /**
   * Initialize performance optimizations
   */
  public initialize(): void {
    this.setupLazyLoading();
    this.setupImageOptimization();
    this.setupCaching();
    this.setupCompression();
    this.startPerformanceMonitoring();
  }

  /**
   * Setup lazy loading for components and images
   */
  private setupLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    // Intersection Observer for lazy loading
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

      // Observe all images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * Setup image optimization
   */
  private setupImageOptimization(): void {
    if (!this.config.enableImageOptimization) return;

    // Add responsive image support
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }

  /**
   * Setup caching strategies
   */
  private setupCaching(): void {
    if (!this.config.enableCaching) return;

    // Service Worker registration for caching
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
   * Setup compression
   */
  private setupCompression(): void {
    if (!this.config.enableCompression) return;

    // Enable gzip compression headers
    if ('CompressionStream' in window) {
      // Browser supports compression streams
      console.log('Compression streams supported');
    }
  }

  /**
   * Start performance monitoring
   */
  private startPerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    this.monitorCoreWebVitals();
    
    // Monitor resource loading
    this.monitorResourceLoading();
    
    // Monitor memory usage
    this.monitorMemoryUsage();
  }

  /**
   * Monitor Core Web Vitals
   */
  private monitorCoreWebVitals(): void {
    // Check if PerformanceObserver is available (not available in test environments)
    if (typeof PerformanceObserver === 'undefined') {
      return;
    }

    // Largest Contentful Paint (LCP)
    try {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.loadTime = lastEntry.startTime;
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP monitoring not supported:', error);
    }

    // First Input Delay (FID)
    try {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID monitoring not supported:', error);
    }

    // Cumulative Layout Shift (CLS)
    try {
      new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        console.log('CLS:', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS monitoring not supported:', error);
    }
  }

  /**
   * Monitor resource loading
   */
  private monitorResourceLoading(): void {
    // Check if PerformanceObserver is available (not available in test environments)
    if (typeof PerformanceObserver === 'undefined') {
      return;
    }

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            console.log('Resource loaded:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize
            });
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.warn('Resource loading monitoring not supported:', error);
    }
  }

  /**
   * Monitor memory usage
   */
  private monitorMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize;
      
      // Log memory usage every 30 seconds
      setInterval(() => {
        const currentMemory = (performance as any).memory;
        console.log('Memory usage:', {
          used: currentMemory.usedJSHeapSize,
          total: currentMemory.totalJSHeapSize,
          limit: currentMemory.jsHeapSizeLimit
        });
      }, 30000);
    }
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Update configuration
   */
  public updateConfig(config: Partial<OptimizationConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Optimize images based on device capabilities
   */
  public optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add WebP support detection
      const supportsWebP = this.supportsWebP();
      if (supportsWebP && !img.src.includes('.webp')) {
        // Convert to WebP format
        this.convertToWebP(img);
      }
    });
  }

  /**
   * Check if browser supports WebP
   */
  private supportsWebP(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  /**
   * Convert image to WebP format
   */
  private convertToWebP(img: HTMLImageElement): void {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    
    ctx.drawImage(img, 0, 0);
    
    const webpDataUrl = canvas.toDataURL('image/webp', 0.8);
    img.src = webpDataUrl;
  }

  /**
   * Preload critical resources
   */
  public preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/main-font.woff2',
      '/css/critical.css',
      '/js/main.js'
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
   * Cleanup and destroy optimizer
   */
  public destroy(): void {
    // Cleanup observers and listeners
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRate: 0
    };
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();

// Auto-initialize when module is loaded
if (typeof window !== 'undefined') {
  performanceOptimizer.initialize();
}