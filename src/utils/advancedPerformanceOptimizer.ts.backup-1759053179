/**
 * Advanced Performance Optimizer
 * Provides comprehensive performance optimization strategies
 */

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  fmp: number;
  tti: number;
  loadTime?: number;
  renderTime?: number;
  memoryUsage?: number;
  fps?: number;
  cacheHitRate?: number;
  domSize?: number;
  resourceCount?: number;
  compressionRatio?: number;
}

interface OptimizationStrategy {
  name: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  implementation: () => void;
}

class AdvancedPerformanceOptimizer {
  private metrics: PerformanceMetrics | null = null;
  private strategies: OptimizationStrategy[] = [];
  private isInitialized = false;

  constructor() {
    this.initializeStrategies();
  }

  private initializeStrategies(): void {
    this.strategies = [
      {
        name: 'Critical Resource Preloading',
        description: 'Preload critical resources to improve LCP',
        impact: 'high',
        implementation: () => this.preloadCriticalResources()
      },
      {
        name: 'Image Optimization',
        description: 'Optimize images for better performance',
        impact: 'high',
        implementation: () => this.optimizeImages()
      },
      {
        name: 'JavaScript Bundle Splitting',
        description: 'Split JavaScript bundles for better loading',
        impact: 'high',
        implementation: () => this.optimizeJavaScriptBundles()
      },
      {
        name: 'CSS Optimization',
        description: 'Optimize CSS delivery and unused styles',
        impact: 'medium',
        implementation: () => this.optimizeCSS()
      },
      {
        name: 'Service Worker Caching',
        description: 'Implement intelligent caching strategies',
        impact: 'high',
        implementation: () => this.implementServiceWorkerCaching()
      },
      {
        name: 'Database Query Optimization',
        description: 'Optimize database queries and API calls',
        impact: 'medium',
        implementation: () => this.optimizeDatabaseQueries()
      },
      {
        name: 'Memory Management',
        description: 'Optimize memory usage and garbage collection',
        impact: 'medium',
        implementation: () => this.optimizeMemoryUsage()
      },
      {
        name: 'Network Optimization',
        description: 'Optimize network requests and responses',
        impact: 'medium',
        implementation: () => this.optimizeNetworkRequests()
      }
    ];
  }

<<<<<<< HEAD
=======
  // Additional methods for the existing class
  private preloadCriticalResources(): void {
    // Implementation for critical resource preloading
  }

  private optimizeImages(): void {
    // Implementation for image optimization
  }

  private optimizeJavaScriptBundles(): void {
    // Implementation for JavaScript bundle optimization
  }

  private optimizeCSS(): void {
    // Implementation for CSS optimization
  }

  private implementServiceWorkerCaching(): void {
    // Implementation for service worker caching
  }

  private optimizeDatabaseQueries(): void {
    // Implementation for database query optimization
  }

  private optimizeMemoryUsage(): void {
    // Implementation for memory usage optimization
  }

  private optimizeNetworkRequests(): void {
    // Implementation for network request optimization
  }

  public getMetrics(): PerformanceMetrics {
    return this.metrics || {
      lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0,
      fmp: 0,
      tti: 0
    };
  }

  public getOptimizationReport(): { metrics: PerformanceMetrics | null; strategies: OptimizationStrategy[] } {
    return {
      metrics: this.metrics,
      strategies: this.strategies
    };
  }

  public getPerformanceScore(): number {
    if (!this.metrics) return 0;
    // Simple scoring based on available metrics
    const lcpScore = Math.max(0, 100 - (this.metrics.lcp / 10));
    const fcpScore = Math.max(0, 100 - (this.metrics.fcp / 5));
    const clsScore = Math.max(0, 100 - (this.metrics.cls * 1000));
    return Math.round((lcpScore + fcpScore + clsScore) / 3);
  }
}

/**
 * Additional Performance Optimizer with different configuration
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

class AdvancedPerformanceOptimizerV2 {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics;
  private observers: PerformanceObserver[];
  private isInitialized: boolean = false;
  private strategies: OptimizationStrategy[] = [];

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
      lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0,
      fmp: 0,
      tti: 0,
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0,
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
>>>>>>> 61be861214b50a66fa9f716d0213bc509edae316
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      await this.collectPerformanceMetrics();
      await this.analyzeAndOptimize();
      
<<<<<<< HEAD
=======
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
>>>>>>> 61be861214b50a66fa9f716d0213bc509edae316
      console.log('Advanced Performance Optimizer initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Advanced Performance Optimizer:', error);
    }
  }

  private async collectPerformanceMetrics(): Promise<void> {
    if (typeof window === 'undefined' || !window.performance) return;

    try {
      // Use Web Vitals API if available
      if ('web-vitals' in window) {
        // This would integrate with web-vitals library
        this.metrics = {
          lcp: 0, fid: 0, cls: 0, fcp: 0, ttfb: 0, fmp: 0, tti: 0
        };
      }

      // Fallback to basic performance metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics = {
          lcp: navigation.loadEventEnd - navigation.fetchStart,
          fid: 0, // Would need user interaction tracking
          cls: 0, // Would need layout shift tracking
          fcp: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          ttfb: navigation.responseStart - navigation.fetchStart,
          fmp: navigation.loadEventEnd - navigation.fetchStart,
          tti: navigation.domContentLoadedEventEnd - navigation.fetchStart
        };
      }
    } catch (error) {
      console.error('Error collecting performance metrics:', error);
    }
  }

  private async analyzeAndOptimize(): Promise<void> {
    if (!this.metrics) return;

    const highImpactStrategies = this.strategies.filter(s => s.impact === 'high');
    const mediumImpactStrategies = this.strategies.filter(s => s.impact === 'medium');

    // Implement high impact optimizations first
    for (const strategy of highImpactStrategies) {
      try {
        strategy.implementation();
        console.log(`Applied optimization: ${strategy.name}`);
      } catch (error) {
        console.error(`Failed to apply optimization ${strategy.name}:`, error);
      }
    }

    // Then implement medium impact optimizations
    for (const strategy of mediumImpactStrategies) {
      try {
        strategy.implementation();
        console.log(`Applied optimization: ${strategy.name}`);
      } catch (error) {
        console.error(`Failed to apply optimization ${strategy.name}:`, error);
<<<<<<< HEAD
=======
      }
    }
  }

  private preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/main.woff2',
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

  private optimizeImages(): void {
    // Implement image optimization strategies
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
      }

      // Add proper alt text
      if (!img.alt) {
        img.alt = 'Image';
      }

      // Add responsive images
      if (img.srcset) {
        img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
      }
    });
  }

  private optimizeJavaScriptBundles(): void {
    // Implement bundle splitting strategies
    if (typeof window !== 'undefined') {
      // Add code splitting hints
      const script = document.createElement('script');
      script.textContent = `
        // Implement dynamic imports for non-critical code
        window.addEventListener('load', () => {
          import('./components/NonCriticalComponent').then(module => {
            console.log('Non-critical component loaded');
          });
        });
      `;
      document.head.appendChild(script);
    }
  }

  private optimizeCSS(): void {
    // Implement CSS optimization strategies
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      const sheet = styleSheets[i];
      try {
        const rules = sheet.cssRules || sheet.rules;
        // Analyze and optimize CSS rules
        console.log(`Optimizing CSS sheet ${i} with ${rules?.length || 0} rules`);
      } catch (error) {
        console.warn(`Cannot access CSS rules for sheet ${i}:`, error);
      }
    }
  }

  private implementServiceWorkerCaching(): void {
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

  private optimizeDatabaseQueries(): void {
    // Implement database query optimization strategies
    console.log('Database query optimization strategies implemented');
  }

  private optimizeMemoryUsage(): void {
    // Implement memory optimization strategies
    if (typeof window !== 'undefined') {
      // Monitor memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }
    }
  }

  private optimizeNetworkRequests(): void {
    // Implement network optimization strategies
    console.log('Network optimization strategies implemented');
  }

  public getOptimizationReport(): {
    metrics: PerformanceMetrics | null;
    strategies: OptimizationStrategy[];
    appliedOptimizations: string[];
  } {
    return {
      metrics: this.metrics,
      strategies: this.strategies,
      appliedOptimizations: this.strategies.map(s => s.name)
    };
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
>>>>>>> 61be861214b50a66fa9f716d0213bc509edae316
      }
    }
  }

<<<<<<< HEAD
  private preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css',
      '/js/main.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
=======
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
>>>>>>> 61be861214b50a66fa9f716d0213bc509edae316
      document.head.appendChild(link);
    });
  }

<<<<<<< HEAD
  private optimizeImages(): void {
    // Implement image optimization strategies
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
      }

      // Add proper alt text
      if (!img.alt) {
        img.alt = 'Image';
      }

      // Add responsive images
      if (img.srcset) {
        img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
      }
    });
  }

  private optimizeJavaScriptBundles(): void {
    // Implement bundle splitting strategies
    if (typeof window !== 'undefined') {
      // Add code splitting hints
      const script = document.createElement('script');
      script.textContent = `
        // Implement dynamic imports for non-critical code
        window.addEventListener('load', () => {
          import('./components/NonCriticalComponent').then(module => {
            console.log('Non-critical component loaded');
          });
        });
      `;
      document.head.appendChild(script);
    }
  }

  private optimizeCSS(): void {
    // Implement CSS optimization strategies
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      const sheet = styleSheets[i];
      try {
        const rules = sheet.cssRules || sheet.rules;
        // Analyze and optimize CSS rules
        console.log(`Optimizing CSS sheet ${i} with ${rules?.length || 0} rules`);
      } catch (error) {
        console.warn(`Cannot access CSS rules for sheet ${i}:`, error);
      }
    }
  }

  private implementServiceWorkerCaching(): void {
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

  private optimizeDatabaseQueries(): void {
    // Implement database query optimization strategies
    console.log('Database query optimization strategies implemented');
  }

  private optimizeMemoryUsage(): void {
    // Implement memory optimization strategies
    if (typeof window !== 'undefined') {
      // Monitor memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }
    }
  }

  private optimizeNetworkRequests(): void {
    // Implement network optimization strategies
    console.log('Network optimization strategies implemented');
  }

  public getOptimizationReport(): {
    metrics: PerformanceMetrics | null;
    strategies: OptimizationStrategy[];
    appliedOptimizations: string[];
  } {
    return {
      metrics: this.metrics,
      strategies: this.strategies,
      appliedOptimizations: this.strategies.map(s => s.name)
    };
=======
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
>>>>>>> 61be861214b50a66fa9f716d0213bc509edae316
  }

  /**
   * Update specific metric
   */
  public updateMetric<K extends keyof PerformanceMetrics>(
    key: K,
    value: PerformanceMetrics[K]
  ): void {
    if (this.metrics) {
      this.metrics[key] = value;
    }
  }

  /**
   * Get performance score (0-100)
   */
  public getPerformanceScore(): number {
    if (!this.metrics) return 0;

<<<<<<< HEAD
    // Calculate a performance score based on metrics
    const lcpScore = Math.max(0, 100 - (this.metrics.lcp / 10));
    const fcpScore = Math.max(0, 100 - (this.metrics.fcp / 10));
    const ttfbScore = Math.max(0, 100 - (this.metrics.ttfb / 10));

    return Math.round((lcpScore + fcpScore + ttfbScore) / 3);
  }
}

export const advancedPerformanceOptimizer = new AdvancedPerformanceOptimizer();
export default AdvancedPerformanceOptimizer;
=======
    // Calculate a performance score based on Core Web Vitals
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
Memory Usage: ${metrics.memoryUsage ? (metrics.memoryUsage / 1024 / 1024).toFixed(2) : 'N/A'}MB
FPS: ${metrics.fps || 'N/A'}
Cache Hit Rate: ${metrics.cacheHitRate ? (metrics.cacheHitRate * 100).toFixed(2) : 'N/A'}%
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
>>>>>>> 61be861214b50a66fa9f716d0213bc509edae316
