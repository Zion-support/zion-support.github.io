/**
 * Advanced Performance Enhancer
 * Optimizes website performance through various techniques
 */

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  tbt: number;
}

interface OptimizationConfig {
  enableImageOptimization: boolean;
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enablePrefetching: boolean;
  enableServiceWorker: boolean;
  enableResourceHints: boolean;
  enableCompression: boolean;
  enableCaching: boolean;
}

class PerformanceEnhancer {
  private config: OptimizationConfig;
  private metrics: PerformanceMetrics | null = null;
  private observer: PerformanceObserver | null = null;

  constructor(config: OptimizationConfig) {
    this.config = config;
    this.init();
  }

  private init(): void {
    if (typeof window === 'undefined') return;

    this.setupPerformanceMonitoring();
    this.optimizeImages();
    this.setupLazyLoading();
    this.setupResourceHints();
    this.setupServiceWorker();
    this.optimizeFonts();
    this.setupCriticalCSS();
  }

  private setupPerformanceMonitoring(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.analyzePerformanceEntry(entry);
        }
      });

      // Monitor Core Web Vitals
      this.observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
    } catch (error) {
      // console.warn('Performance monitoring setup failed:', error);
    }
  }

  private analyzePerformanceEntry(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'largest-contentful-paint':
        this.metrics = { ...this.metrics, lcp: entry.startTime } as PerformanceMetrics;
        break;
      case 'first-input':
        this.metrics = { ...this.metrics, fid: (entry as any).processingStart - entry.startTime } as PerformanceMetrics;
        break;
      case 'layout-shift':
        if (!(entry as any).hadRecentInput) {
          this.metrics = { ...this.metrics, cls: (this.metrics?.cls || 0) + (entry as any).value } as PerformanceMetrics;
        }
        break;
      case 'paint':
        if (entry.name === 'first-contentful-paint') {
          this.metrics = { ...this.metrics, fcp: entry.startTime } as PerformanceMetrics;
        }
        break;
      case 'navigation':
        const navEntry = entry as PerformanceNavigationTiming;
        this.metrics = { ...this.metrics, ttfb: navEntry.responseStart - navEntry.requestStart } as PerformanceMetrics;
        break;
    }
  }

  private optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.dataset.src) {
        imageElement.src = imageElement.dataset.src;
        imageElement.removeAttribute('data-src');
      }
    });

    // Add WebP support detection
    this.detectWebPSupport();
  }

  private detectWebPSupport(): void {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      if (webP.height === 2) {
        document.documentElement.classList.add('webp');
      } else {
        document.documentElement.classList.add('no-webp');
      }
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  private setupLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

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

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  private setupResourceHints(): void {
    if (!this.config.enableResourceHints) return;

    // Preconnect to external domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Prefetch critical resources
    this.prefetchCriticalResources();
  }

  private prefetchCriticalResources(): void {
    if (!this.config.enablePrefetching) return;

    const criticalResources = [
      '/assets/index.css',
      '/assets/vendor.js',
      '/assets/index.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });
  }

  private setupServiceWorker(): void {
    if (!this.config.enableServiceWorker) return;

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            // console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            // console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }

  private optimizeFonts(): void {
    // Add font-display: swap to all font faces
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Orbitron';
        font-display: swap;
      }
      @font-face {
        font-family: 'Rajdhani';
        font-display: swap;
      }
      @font-face {
        font-family: 'Exo 2';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }

  private setupCriticalCSS(): void {
    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      .hero-section { contain: layout style paint; }
      .cyber-card { contain: layout style; }
      .neon-text { will-change: transform; }
      .cyber-text-3d { will-change: transform; }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);
  }

  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  public optimizeBundle(): void {
    // Dynamic imports for non-critical components
    const lazyComponents = [
      'ContentPromotionBanner',
      'ContentCarousel',
      'DynamicContentShowcase',
      'ContentStatistics',
      'ContentNewsletterSignup'
    ];

    lazyComponents.forEach(component => {
      const element = document.querySelector(`[data-component="${component}"]`);
      if (element && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.loadComponent(component);
              observer.unobserve(entry.target);
            }
          });
        });
        observer.observe(element);
      }
    });
  }

  private async loadComponent(componentName: string): Promise<void> {
    try {
      const module = await import(`../components/${componentName}.tsx`);
      // Component loaded successfully
      // console.log(`${componentName} loaded dynamically`);
    } catch (error) {
      // console.warn(`Failed to load ${componentName}:`, error);
    }
  }

  public cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

export default PerformanceEnhancer;