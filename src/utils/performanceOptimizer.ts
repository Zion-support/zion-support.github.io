/**
 * Performance Optimizer
 * Provides advanced performance optimization utilities
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
  enableResourcePreloading: boolean;
  enableServiceWorker: boolean;
  enableCompression: boolean;
  maxBundleSize: number;
  cacheStrategy: 'aggressive' | 'conservative' | 'balanced';
}

class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private config: OptimizationConfig;
  private metrics: PerformanceMetrics;
  private observers: PerformanceObserver[] = [];

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enableImageOptimization: true,
      enableResourcePreloading: true,
      enableServiceWorker: true,
      enableCompression: true,
      maxBundleSize: 500 * 1024, // 500KB
      cacheStrategy: 'balanced',
      ...config
    };

    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRate: 0
    };

    this.initialize();
  }

  public static getInstance(config?: Partial<OptimizationConfig>): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer(config);
    }
    return PerformanceOptimizer.instance;
  }

  private initialize(): void {
    this.setupPerformanceMonitoring();
    this.optimizeImages();
    this.setupLazyLoading();
    this.setupResourcePreloading();
    this.optimizeBundleSize();
  }

  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    const vitalsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          this.metrics.loadTime = entry.startTime;
        } else if (entry.entryType === 'first-input') {
          const inputEntry = entry as any;
          this.metrics.renderTime = (inputEntry.processingStart || 0) - entry.startTime;
        }
      }
    });

    vitalsObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    this.observers.push(vitalsObserver);

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
    }

    // Monitor bundle size
    this.estimateBundleSize();
  }

  private optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy');
      }

      // Add WebP support detection
      if (this.supportsWebP()) {
        const src = img.src;
        if (src && !src.includes('.webp')) {
          img.src = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        }
      }
    });
  }

  private setupLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    // Intersection Observer for lazy loading
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Load images
          if (element.tagName === 'IMG') {
            const img = element as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
          }

          // Load components
          if (element.dataset.component) {
            this.loadComponent(element.dataset.component);
          }

          lazyObserver.unobserve(element);
        }
      });
    });

    // Observe all lazy elements
    document.querySelectorAll('[data-lazy]').forEach((el) => {
      lazyObserver.observe(el);
    });
  }

  private setupResourcePreloading(): void {
    if (!this.config.enableResourcePreloading) return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css',
      '/js/main.js'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = this.getResourceType(resource);
      document.head.appendChild(link);
    });

    // Prefetch next page resources on hover
    document.querySelectorAll('a[href]').forEach((link) => {
      link.addEventListener('mouseenter', () => {
        this.prefetchResource((link as HTMLAnchorElement).href);
      });
    });
  }

  private optimizeBundleSize(): void {
    if (!this.config.enableCodeSplitting) return;

    // Dynamic imports for non-critical components
    const lazyComponents = [
      'AdvancedAnalyticsDashboard',
      'PerformanceInsights',
      'SecurityDashboard',
      'UserExperienceMonitor'
    ];

    // Create dynamic import map
    const componentMap = new Map();
    lazyComponents.forEach((component) => {
      componentMap.set(component, () => import(`../components/${component}.tsx`));
    });

    // Store in global scope for lazy loading
    (window as any).lazyComponents = componentMap;
  }

  private loadComponent(componentName: string): void {
    const componentMap = (window as any).lazyComponents;
    if (componentMap && componentMap.has(componentName)) {
      componentMap.get(componentName)().then((module: any) => {
        // Component loaded successfully
        console.log(`Component ${componentName} loaded`);
      }).catch((error: Error) => {
        console.error(`Failed to load component ${componentName}:`, error);
      });
    }
  }

  private prefetchResource(url: string): void {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  }

  private getResourceType(url: string): string {
    const extension = url.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'css': return 'style';
      case 'js': return 'script';
      case 'woff2':
      case 'woff':
      case 'ttf': return 'font';
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'webp': return 'image';
      default: return 'fetch';
    }
  }

  private supportsWebP(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  private estimateBundleSize(): void {
    // Estimate bundle size based on loaded scripts
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;

    scripts.forEach((script) => {
      const src = (script as HTMLScriptElement).src;
      // This is a rough estimation - in production, you'd use actual bundle analysis
      if (src.includes('main') || src.includes('vendor')) {
        totalSize += 100 * 1024; // Estimate 100KB per main script
      }
    });

    this.metrics.bundleSize = totalSize;
  }

  // Public methods
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public updateConfig(newConfig: Partial<OptimizationConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.initialize(); // Re-initialize with new config
  }

  public optimizeRoute(route: string): void {
    // Route-specific optimizations
    switch (route) {
      case '/dashboard':
        this.preloadDashboardResources();
        break;
      case '/analytics':
        this.preloadAnalyticsResources();
        break;
      default:
        this.preloadCommonResources();
    }
  }

  private preloadDashboardResources(): void {
    const resources = [
      '/js/dashboard.js',
      '/css/dashboard.css',
      '/data/dashboard-config.json'
    ];
    resources.forEach((resource) => this.prefetchResource(resource));
  }

  private preloadAnalyticsResources(): void {
    const resources = [
      '/js/analytics.js',
      '/css/analytics.css',
      '/data/analytics-config.json'
    ];
    resources.forEach((resource) => this.prefetchResource(resource));
  }

  private preloadCommonResources(): void {
    const resources = [
      '/css/common.css',
      '/js/common.js'
    ];
    resources.forEach((resource) => this.prefetchResource(resource));
  }

  public cleanup(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }

  public generateReport(): string {
    const metrics = this.getMetrics();
    return `
Performance Optimization Report:
- Load Time: ${metrics.loadTime.toFixed(2)}ms
- Render Time: ${metrics.renderTime.toFixed(2)}ms
- Memory Usage: ${metrics.memoryUsage.toFixed(2)}MB
- Bundle Size: ${(metrics.bundleSize / 1024).toFixed(2)}KB
- Cache Hit Rate: ${(metrics.cacheHitRate * 100).toFixed(1)}%

Configuration:
- Lazy Loading: ${this.config.enableLazyLoading ? 'Enabled' : 'Disabled'}
- Code Splitting: ${this.config.enableCodeSplitting ? 'Enabled' : 'Disabled'}
- Image Optimization: ${this.config.enableImageOptimization ? 'Enabled' : 'Disabled'}
- Resource Preloading: ${this.config.enableResourcePreloading ? 'Enabled' : 'Disabled'}
- Cache Strategy: ${this.config.cacheStrategy}
    `.trim();
  }
}

export const performanceOptimizer = PerformanceOptimizer.getInstance();
export type { PerformanceMetrics, OptimizationConfig };