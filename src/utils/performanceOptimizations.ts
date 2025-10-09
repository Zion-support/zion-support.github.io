// Comprehensive Performance Optimizations for Zion Tech Group

export interface PerformanceConfig {
  enableImageOptimization: boolean;
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableCodeSplitting: boolean;
  enableResourceHints: boolean;
  enableServiceWorker: boolean;
  enableCriticalCSS: boolean;
  enableBundleAnalysis: boolean;
  enableMemoryOptimization: boolean;
  enableNetworkOptimization: boolean;
}

export const defaultPerformanceConfig: PerformanceConfig = {
  enableImageOptimization: true,
  enableLazyLoading: true,
  enablePreloading: true,
  enableCodeSplitting: true,
  enableResourceHints: true,
  enableServiceWorker: true,
  enableCriticalCSS: true,
  enableBundleAnalysis: true,
  enableMemoryOptimization: true,
  enableNetworkOptimization: true
};

export class PerformanceOptimizer {
  private config: PerformanceConfig;
  private observer: PerformanceObserver | null = null;

  constructor(config: PerformanceConfig = defaultPerformanceConfig) {
    this.config = config;
  }

  // Initialize all performance optimizations
  public initialize(): void {
    if (typeof window === 'undefined') return;

    this.optimizeImages();
    this.setupLazyLoading();
    this.preloadCriticalResources();
    this.addResourceHints();
    this.setupCodeSplitting();
    this.optimizeMemoryUsage();
    this.optimizeNetworkRequests();
    this.setupPerformanceMonitoring();
  }

  // Image optimization
  private optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img: HTMLImageElement) => {
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

      // Add proper alt text if missing
      if (!img.getAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group - AI and IT Solutions');
      }

      // Add width and height attributes to prevent layout shift
      if (!img.getAttribute('width') && !img.getAttribute('height')) {
        img.addEventListener('load', () => {
          img.setAttribute('width', img.naturalWidth.toString());
          img.setAttribute('height', img.naturalHeight.toString());
        });
      }
    });
  }

  // Lazy loading setup
  private setupLazyLoading(): void {
    if (!this.config.enableLazyLoading || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Handle lazy images
          if (element.tagName === 'IMG' && element.dataset.src) {
            const img = element as HTMLImageElement;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }

          // Handle lazy components
          if (element.dataset.lazyComponent) {
            this.loadLazyComponent(element);
            observer.unobserve(element);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    // Observe lazy elements
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyComponents = document.querySelectorAll('[data-lazy-component]');
    
    [...lazyImages, ...lazyComponents].forEach((element) => {
      observer.observe(element);
    });
  }

  // Preload critical resources
  private preloadCriticalResources(): void {
    if (!this.config.enablePreloading) return;

    const criticalResources = [
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        as: 'style',
        type: 'text/css'
      },
      {
        href: '/src/globals.css',
        as: 'style',
        type: 'text/css'
      },
      {
        href: '/src/main.tsx',
        as: 'script',
        type: 'text/javascript'
      }
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) {
        link.type = resource.type;
      }
      document.head.appendChild(link);
    });
  }

  // Add resource hints
  private addResourceHints(): void {
    if (!this.config.enableResourceHints) return;

    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
    ];

    hints.forEach((hint) => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) {
        link.crossOrigin = hint.crossorigin;
      }
      document.head.appendChild(link);
    });
  }

  // Setup code splitting
  private setupCodeSplitting(): void {
    if (!this.config.enableCodeSplitting) return;

    // This would be handled by the bundler (Vite/Webpack)
    // Here we can add runtime optimizations
    this.optimizeBundleLoading();
  }

  // Optimize bundle loading
  private optimizeBundleLoading(): void {
    // Preload next likely routes
    const likelyRoutes = ['/ai-services', '/it-services', '/contact', '/about'];
    
    likelyRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }

  // Memory optimization
  private optimizeMemoryUsage(): void {
    if (!this.config.enableMemoryOptimization) return;

    // Clean up unused event listeners
    this.setupMemoryCleanup();

    // Optimize image memory usage
    this.optimizeImageMemory();

    // Setup memory monitoring
    this.setupMemoryMonitoring();
  }

  // Setup memory cleanup
  private setupMemoryCleanup(): void {
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
      // Remove event listeners
      document.removeEventListener('scroll', this.throttleScroll);
      document.removeEventListener('resize', this.throttleResize);
    });
  }

  // Optimize image memory
  private optimizeImageMemory(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img: HTMLImageElement) => {
      // Add memory optimization attributes
      img.setAttribute('decoding', 'async');
      img.setAttribute('loading', 'lazy');
    });
  }

  // Setup memory monitoring
  private setupMemoryMonitoring(): void {
    if (!('memory' in performance)) return;

    setInterval(() => {
      const memory = (performance as any).memory;
      const usedMB = memory.usedJSHeapSize / 1024 / 1024;
      const totalMB = memory.totalJSHeapSize / 1024 / 1024;
      
      // Log warning if memory usage is high
      if (usedMB / totalMB > 0.8) {
        console.warn('High memory usage detected:', { usedMB, totalMB });
      }
    }, 30000); // Check every 30 seconds
  }

  // Network optimization
  private optimizeNetworkRequests(): void {
    if (!this.config.enableNetworkOptimization) return;

    // Setup request batching
    this.setupRequestBatching();

    // Setup request caching
    this.setupRequestCaching();

    // Setup connection optimization
    this.setupConnectionOptimization();
  }

  // Setup request batching
  private setupRequestBatching(): void {
    // This would be implemented with a request batching service
    console.log('Request batching setup');
  }

  // Setup request caching
  private setupRequestCaching(): void {
    // This would be implemented with service worker caching
    console.log('Request caching setup');
  }

  // Setup connection optimization
  private setupConnectionOptimization(): void {
    // Monitor connection quality
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      console.log('Connection info:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      });
    }
  }

  // Setup performance monitoring
  private setupPerformanceMonitoring(): void {
    if (!('PerformanceObserver' in window)) return;

    this.observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.handlePerformanceEntry(entry);
      }
    });

    this.observer.observe({ entryTypes: ['navigation', 'resource', 'paint', 'largest-contentful-paint'] });
  }

  // Handle performance entries
  private handlePerformanceEntry(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'navigation':
        this.handleNavigationTiming(entry as PerformanceNavigationTiming);
        break;
      case 'resource':
        this.handleResourceTiming(entry as PerformanceResourceTiming);
        break;
      case 'paint':
        this.handlePaintTiming(entry as PerformancePaintTiming);
        break;
      case 'largest-contentful-paint':
        this.handleLCP(entry as PerformanceEntry);
        break;
    }
  }

  // Handle navigation timing
  private handleNavigationTiming(entry: PerformanceNavigationTiming): void {
    const metrics = {
      ttfb: entry.responseStart - entry.requestStart,
      domContentLoaded: entry.domContentLoadedEventEnd - entry.fetchStart,
      loadComplete: entry.loadEventEnd - entry.fetchStart
    };

    console.log('Navigation timing:', metrics);
  }

  // Handle resource timing
  private handleResourceTiming(entry: PerformanceResourceTiming): void {
    if (entry.duration > 1000) {
      console.warn('Slow resource detected:', {
        name: entry.name,
        duration: entry.duration,
        size: entry.transferSize
      });
    }
  }

  // Handle paint timing
  private handlePaintTiming(entry: PerformancePaintTiming): void {
    console.log('Paint timing:', {
      name: entry.name,
      startTime: entry.startTime
    });
  }

  // Handle LCP
  private handleLCP(entry: PerformanceEntry): void {
    console.log('LCP:', entry.startTime);
  }

  // Throttled scroll handler
  private throttleScroll = this.throttle(() => {
    // Handle scroll events
  }, 100);

  // Throttled resize handler
  private throttleResize = this.throttle(() => {
    // Handle resize events
  }, 100);

  // Throttle utility
  private throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Load lazy component
  private loadLazyComponent(element: HTMLElement): void {
    const componentName = element.dataset.lazyComponent;
    if (componentName) {
      // Dynamic import would be handled here
      console.log('Loading lazy component:', componentName);
    }
  }

  // Cleanup
  public cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Initialize performance optimizations
export const initializePerformanceOptimizations = (config?: PerformanceConfig): void => {
  const optimizer = new PerformanceOptimizer(config);
  optimizer.initialize();
};

// Export default config
export { defaultPerformanceConfig as performanceConfig };