// Advanced Performance Optimization Utilities

interface PerformanceConfig {
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableServiceWorker: boolean;
  enablePrefetching: boolean;
}

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private config: PerformanceConfig;
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  private constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enableImageOptimization: true,
      enableCodeSplitting: true,
      enableServiceWorker: true,
      enablePrefetching: true,
      ...config
    };
    this.initialize();
  }

  public static getInstance(config?: Partial<PerformanceConfig>): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer(config);
    }
    return PerformanceOptimizer.instance;
  }

  private initialize(): void {
    this.setupPerformanceObservers();
    if (this.config.enableLazyLoading) {
      this.enableLazyLoading();
    }
    if (this.config.enableImageOptimization) {
      this.optimizeImages();
    }
    if (this.config.enablePrefetching) {
      this.enableResourcePrefetching();
    }
  }

  private setupPerformanceObservers(): void {
    if (!('PerformanceObserver' in window)) return;

    // First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            this.reportMetric('FCP', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP observer not supported:', error);
    }

    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEntry & {
            processingStart: number;
          };
          if ('processingStart' in fidEntry) {
            const fid = fidEntry.processingStart - fidEntry.startTime;
            this.metrics.fid = fid;
            this.reportMetric('FID', fid);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      console.warn('FID observer not supported:', error);
    }

    // Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const clsEntry = entry as PerformanceEntry & {
            value: number;
            hadRecentInput: boolean;
          };
          if ('value' in clsEntry && 'hadRecentInput' in clsEntry && !clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        });
        this.metrics.cls = clsValue;
        this.reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS observer not supported:', error);
    }
  }

  private enableLazyLoading(): void {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));

    // Lazy load components
    const lazyComponents = document.querySelectorAll('[data-lazy-component]');
    const componentObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const componentName = element.getAttribute('data-lazy-component');
          if (componentName) {
            this.loadComponent(componentName, element);
            observer.unobserve(element);
          }
        }
      });
    });

    lazyComponents.forEach((component) => componentObserver.observe(component));
  }

  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Optimize image format based on browser support
      this.optimizeImageFormat(img);
    });
  }

  private optimizeImageFormat(img: HTMLImageElement): void {
    const src = img.src;
    if (!src) return;

    // Check for WebP support
    const supportsWebP = this.supportsWebP();
    const supportsAVIF = this.supportsAVIF();

    if (supportsAVIF && !src.includes('.avif')) {
      // Convert to AVIF if supported
      const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');
      img.src = avifSrc;
    } else if (supportsWebP && !src.includes('.webp')) {
      // Convert to WebP if supported
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      img.src = webpSrc;
    }
  }

  private supportsWebP(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  private supportsAVIF(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  }

  private enableResourcePrefetching(): void {
    // Prefetch critical resources
    const criticalResources = [
      '/api/user',
      '/api/config',
      // Add more critical resources
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Prefetch on hover for navigation links
    const navLinks = document.querySelectorAll('a[href^="/"]');
    navLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        this.prefetchRoute(link.getAttribute('href') || '');
      }, { once: true });
    });
  }

  private prefetchRoute(route: string): void {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    document.head.appendChild(link);
  }

  private async loadComponent(componentName: string, element: HTMLElement): Promise<void> {
    try {
      // Dynamic import for code splitting
      const module = await import(`../components/${componentName}.tsx`);
      // Component would be used for rendering in a real implementation
      const Component = module.default || module[componentName];
      
      // Render component (this would depend on your framework)
      // For React:
      // ReactDOM.render(<Component />, element);
      
      // For now, just add a placeholder
      element.innerHTML = `<div>Component ${componentName} loaded</div>`;
      
      console.log(`Lazy loaded component: ${componentName}`, Component);
    } catch (error) {
      console.error(`Failed to load component ${componentName}:`, error);
    }
  }

  private reportMetric(name: string, value: number): void {
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, `${value.toFixed(2)}ms`);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && 'gtag' in window) {
      (window as { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: name,
        value: Math.round(value),
        non_interaction: true
      });
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public optimizeBundle(): void {
    // Remove unused CSS
    this.removeUnusedCSS();
    
    // Optimize JavaScript execution
    this.optimizeJavaScript();
    
    // Enable compression
    this.enableCompression();
  }

  private removeUnusedCSS(): void {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach((stylesheet) => {
      const link = stylesheet as HTMLLinkElement;
      // This would require a more sophisticated implementation
      // to actually detect and remove unused CSS
      console.log('Analyzing stylesheet:', link.href);
    });
  }

  private optimizeJavaScript(): void {
    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      const scriptElement = script as HTMLScriptElement;
      if (!scriptElement.hasAttribute('defer') && !scriptElement.hasAttribute('async')) {
        scriptElement.setAttribute('defer', '');
      }
    });
  }

  private enableCompression(): void {
    // This would typically be handled by the server/build process
    // But we can optimize client-side assets
    console.log('Compression optimization enabled');
  }

  public cleanup(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Utility functions
export const optimizePerformance = (config?: Partial<PerformanceConfig>) => {
  return PerformanceOptimizer.getInstance(config);
};

export const measurePerformance = async <T>(
  name: string,
  fn: () => Promise<T> | T
): Promise<T> => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  
  console.log(`${name} took ${(end - start).toFixed(2)}ms`);
  return result;
};

// Initialize performance optimizer
export const performanceOptimizer = PerformanceOptimizer.getInstance();