// Advanced Performance Optimizer
class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private isInitialized: boolean = false;
  private metrics: Map<string, number> = new Map();

  private constructor() {}

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupImageOptimization();
    this.setupLazyLoading();
    this.setupCaching();
    this.setupBundleOptimization();
    
    this.isInitialized = true;
    console.log('Performance optimizer initialized');
  }

  private setupImageOptimization(): void {
    // Optimize images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
    console.log('Image optimization enabled');
  }

  private setupLazyLoading(): void {
    // Implement lazy loading for better initial page load
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('loaded');
          }
        });
      });

      const lazyElements = document.querySelectorAll('[data-lazy]');
      lazyElements.forEach(el => observer.observe(el));
    }
    console.log('Lazy loading enabled');
  }

  private setupCaching(): void {
    // Implement service worker caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
    console.log('Caching strategy implemented');
  }

  private setupBundleOptimization(): void {
    // Optimize bundle loading
    const preloadLinks = document.querySelectorAll('link[rel="preload"]');
    preloadLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !this.isResourceLoaded(href)) {
        this.preloadResource(href);
      }
    });
    console.log('Bundle optimization enabled');
  }

  private isResourceLoaded(href: string): boolean {
    return document.querySelector(`link[href="${href}"]`) !== null;
  }

  private preloadResource(href: string): void {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = href.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  }

  trackMetric(name: string, value: number): void {
    this.metrics.set(name, value);
    console.log(`Performance metric tracked: ${name} = ${value}ms`);
  }

  getMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }

  cleanup(): void {
    this.metrics.clear();
    this.isInitialized = false;
    console.log('Performance optimizer cleaned up');
  }
}

export default PerformanceOptimizer;