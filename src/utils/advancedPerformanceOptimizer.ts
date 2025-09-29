/**
 * Advanced Performance Optimizer
 * Comprehensive performance optimization utilities and monitoring
 */

interface PerformanceConfig {
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enableMinification: boolean;
  enableBundleSplitting: boolean;
  enableServiceWorker: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableTreeShaking: boolean;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
  compressionRatio: number;
  imageOptimizationRatio: number;
  codeSplittingRatio: number;
}

interface OptimizationResult {
  metric: string;
  before: number;
  after: number;
  improvement: number;
  status: 'success' | 'warning' | 'error';
}

class AdvancedPerformanceOptimizer {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics;
  private observers: PerformanceObserver[];
  private isInitialized: boolean = false;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enablePreloading: true,
      enableCaching: true,
      enableCompression: true,
      enableMinification: true,
      enableBundleSplitting: true,
      enableServiceWorker: true,
      enableImageOptimization: true,
      enableCodeSplitting: true,
      enableTreeShaking: true,
      ...config
    };

    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRate: 0,
      compressionRatio: 0,
      imageOptimizationRatio: 0,
      codeSplittingRatio: 0
    };

    this.observers = [];
  }

  /**
   * Initialize the performance optimizer
   */
  public initialize(): void {
    if (this.isInitialized) return;

    this.setupPerformanceObservers();
    this.optimizeImages();
    this.setupLazyLoading();
    this.setupPreloading();
    this.setupCaching();
    this.setupServiceWorker();
    this.optimizeBundle();
    this.setupCodeSplitting();

    this.isInitialized = true;
    console.log('Advanced Performance Optimizer initialized');
  }

  /**
   * Setup performance observers for monitoring
   */
  private setupPerformanceObservers(): void {
    // Navigation timing observer
    if ('PerformanceObserver' in window) {
      const navObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.metrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            this.metrics.renderTime = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
          }
        });
      });

      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);

      // Memory usage observer
      const memoryObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'memory') {
            const memoryEntry = entry as any;
            this.metrics.memoryUsage = memoryEntry.usedJSHeapSize / 1024 / 1024; // MB
          }
        });
      });

      try {
        memoryObserver.observe({ entryTypes: ['memory'] });
        this.observers.push(memoryObserver);
      } catch (e) {
        console.warn('Memory observer not supported');
      }

      // Resource timing observer
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            this.analyzeResourcePerformance(entry as PerformanceResourceTiming);
          }
        });
      });

      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    }
  }

  /**
   * Analyze resource performance
   */
  private analyzeResourcePerformance(entry: PerformanceResourceTiming): void {
    const duration = entry.responseEnd - entry.startTime;
    const size = entry.transferSize || 0;
    
    // Calculate compression ratio
    if (size > 0) {
      const compressionRatio = (1 - (entry.transferSize || 0) / (entry.decodedBodySize || 0)) * 100;
      this.metrics.compressionRatio = Math.max(this.metrics.compressionRatio, compressionRatio);
    }

    // Check for slow resources
    if (duration > 1000) {
      console.warn(`Slow resource detected: ${entry.name} (${duration.toFixed(2)}ms)`);
    }
  }

  /**
   * Optimize images
   */
  private optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    let optimizedCount = 0;

    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
        optimizedCount++;
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
        optimizedCount++;
      }

      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }

      // Convert to WebP if supported
      this.convertToWebP(img);
    });

    this.metrics.imageOptimizationRatio = (optimizedCount / images.length) * 100;
    console.log(`Optimized ${optimizedCount} images`);
  }

  /**
   * Convert image to WebP format
   */
  private convertToWebP(img: HTMLImageElement): void {
    if (!this.supportsWebP()) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          const webpUrl = URL.createObjectURL(blob);
          img.src = webpUrl;
        }
      }, 'image/webp', 0.8);
    };
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
   * Setup lazy loading
   */
  private setupLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    // Use Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
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

      lazyImages.forEach((img) => imageObserver.observe(img));
    }
  }

  /**
   * Setup preloading
   */
  private setupPreloading(): void {
    if (!this.config.enablePreloading) return;

    // Preload critical resources
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js',
      '/fonts/main.woff2'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : resource.endsWith('.js') ? 'script' : 'font';
      document.head.appendChild(link);
    });
  }

  /**
   * Setup caching
   */
  private setupCaching(): void {
    if (!this.config.enableCaching) return;

    // Set cache headers for static resources
    const staticResources = document.querySelectorAll('link[rel="stylesheet"], script[src], img[src]');
    staticResources.forEach((resource) => {
      if (resource instanceof HTMLLinkElement || resource instanceof HTMLScriptElement || resource instanceof HTMLImageElement) {
        resource.setAttribute('cache-control', 'max-age=31536000');
      }
    });
  }

  /**
   * Setup service worker
   */
  private setupServiceWorker(): void {
    if (!this.config.enableServiceWorker) return;

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
   * Optimize bundle
   */
  private optimizeBundle(): void {
    if (!this.config.enableBundleSplitting) return;

    // Calculate bundle size
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;

    scripts.forEach((script) => {
      if (script instanceof HTMLScriptElement && script.src) {
        // Estimate size based on URL (this is a simplified approach)
        totalSize += 100; // Placeholder
      }
    });

    this.metrics.bundleSize = totalSize;
  }

  /**
   * Setup code splitting
   */
  private setupCodeSplitting(): void {
    if (!this.config.enableCodeSplitting) return;

    // Dynamic imports for non-critical components
    const lazyComponents = document.querySelectorAll('[data-lazy-component]');
    lazyComponents.forEach((component) => {
      const componentName = component.getAttribute('data-lazy-component');
      if (componentName) {
        this.loadComponent(componentName);
      }
    });
  }

  /**
   * Load component dynamically
   */
  private async loadComponent(componentName: string): Promise<void> {
    try {
      // Use Vite's import.meta.glob for safe dynamic imports with explicit extensions
      const modules: Record<string, () => Promise<unknown>> = (import.meta as any).glob('../components/**/*.{tsx,ts,jsx,js}') as any;
      const possiblePaths = [
        `../components/${componentName}.tsx`,
        `../components/${componentName}.ts`,
        `../components/${componentName}.jsx`,
        `../components/${componentName}.js`,
        `../components/${componentName}/index.tsx`,
        `../components/${componentName}/index.ts`,
        `../components/${componentName}/index.jsx`,
        `../components/${componentName}/index.js`,
      ];
      const loader = possiblePaths.map((p) => modules[p] as (() => Promise<unknown>) | undefined).find(Boolean);
      if (!loader) {
        throw new Error(`Component path not found for ${componentName}`);
      }
      const module = await loader();
      // Component loaded successfully
      console.log(`Component ${componentName} loaded`);
    } catch (error) {
      console.error(`Failed to load component ${componentName}:`, error);
    }
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Get optimization recommendations
   */
  public getRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics.loadTime > 3000) {
      recommendations.push('Consider optimizing initial page load time');
    }

    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimizing memory usage');
    }

    if (this.metrics.compressionRatio < 50) {
      recommendations.push('Enable compression for better performance');
    }

    if (this.metrics.imageOptimizationRatio < 80) {
      recommendations.push('Optimize images for better performance');
    }

    return recommendations;
  }

  /**
   * Run performance optimization
   */
  public async optimize(): Promise<OptimizationResult[]> {
    const results: OptimizationResult[] = [];

    // Optimize images
    if (this.config.enableImageOptimization) {
      const beforeImages = document.querySelectorAll('img').length;
      this.optimizeImages();
      const afterImages = document.querySelectorAll('img[loading="lazy"]').length;
      
      results.push({
        metric: 'Image Optimization',
        before: beforeImages,
        after: afterImages,
        improvement: ((afterImages - beforeImages) / beforeImages) * 100,
        status: 'success'
      });
    }

    // Optimize bundle
    if (this.config.enableBundleSplitting) {
      const beforeBundle = this.metrics.bundleSize;
      this.optimizeBundle();
      const afterBundle = this.metrics.bundleSize;
      
      results.push({
        metric: 'Bundle Optimization',
        before: beforeBundle,
        after: afterBundle,
        improvement: ((beforeBundle - afterBundle) / beforeBundle) * 100,
        status: 'success'
      });
    }

    return results;
  }

  /**
   * Cleanup observers
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

// Export singleton instance
export const advancedPerformanceOptimizer = new AdvancedPerformanceOptimizer();
export default AdvancedPerformanceOptimizer;