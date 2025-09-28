/**
 * Advanced Performance Optimizer for Zion Tech Group Website
 * Provides comprehensive performance monitoring and optimization utilities
 */

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
  tti: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableCompression: boolean;
  enableCaching: boolean;
  enableServiceWorker: boolean;
  enableCriticalCSS: boolean;
  enableResourceHints: boolean;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics | null = null;
  private config: OptimizationConfig;

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enablePreloading: true,
      enableCompression: true,
      enableCaching: true,
      enableServiceWorker: true,
      enableCriticalCSS: true,
      enableResourceHints: true,
      ...config
    };

    this.initializeOptimizations();
  }

  /**
   * Initialize all performance optimizations
   */
  private initializeOptimizations(): void {
    if (typeof window === 'undefined') return;

    // Initialize performance monitoring
    this.initializePerformanceMonitoring();

    // Apply optimizations based on configuration
    if (this.config.enableLazyLoading) {
      this.enableLazyLoading();
    }

    if (this.config.enablePreloading) {
      this.enablePreloading();
    }

    if (this.config.enableResourceHints) {
      this.enableResourceHints();
    }

    if (this.config.enableCriticalCSS) {
      this.optimizeCriticalCSS();
    }

    // Initialize service worker if enabled
    if (this.config.enableServiceWorker && 'serviceWorker' in navigator) {
      this.initializeServiceWorker();
    }
  }

  /**
   * Initialize performance monitoring using Web Vitals
   */
  private initializePerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    this.observePerformanceEntries();
    
    // Monitor long tasks
    this.observeLongTasks();
    
    // Monitor memory usage
    this.observeMemoryUsage();
  }

  /**
   * Observe performance entries for Core Web Vitals
   */
  private observePerformanceEntries(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.handlePerformanceEntry(entry);
        }
      });

      // Observe different types of performance entries
      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
      } catch (error) {
        console.warn('Performance Observer not fully supported:', error);
      }
    }
  }

  /**
   * Handle individual performance entries
   */
  private handlePerformanceEntry(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'paint':
        if (entry.name === 'first-contentful-paint') {
          this.metrics = { ...this.metrics, fcp: entry.startTime } as PerformanceMetrics;
        }
        break;
      case 'largest-contentful-paint':
        this.metrics = { ...this.metrics, lcp: entry.startTime } as PerformanceMetrics;
        break;
      case 'first-input':
        this.metrics = { ...this.metrics, fid: (entry as PerformanceEventTiming).processingStart - entry.startTime } as PerformanceMetrics;
        break;
      case 'layout-shift':
        if (!(entry as any).hadRecentInput) {
          this.metrics = { ...this.metrics, cls: ((this.metrics?.cls || 0) + (entry as any).value) } as PerformanceMetrics;
        }
        break;
      case 'navigation': {
        const navEntry = entry as PerformanceNavigationTiming;
        this.metrics = { ...this.metrics, ttfb: navEntry.responseStart - navEntry.requestStart } as PerformanceMetrics;
        break;
      }
    }
  }

  /**
   * Observe long tasks that might block the main thread
   */
  private observeLongTasks(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn(`Long task detected: ${entry.duration}ms`);
              // Report to analytics or monitoring service
              this.reportLongTask(entry);
            }
          }
        });

        observer.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        console.warn('Long task observer not supported:', error);
      }
    }
  }

  /**
   * Observe memory usage
   */
  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setInterval(() => {
        if (memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.8) {
          console.warn('High memory usage detected');
          this.triggerGarbageCollection();
        }
      }, 5000);
    }
  }

  /**
   * Enable lazy loading for images and components
   */
  private enableLazyLoading(): void {
    // Lazy load images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      // Observe all lazy images
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }

    // Lazy load components using React.lazy
    this.enableLazyComponents();
  }

  /**
   * Enable lazy loading for React components
   */
  private enableLazyComponents(): void {
    // This would typically be handled at the component level
    // with React.lazy and Suspense
    console.log('Lazy component loading enabled');
  }

  /**
   * Enable preloading for critical resources
   */
  private enablePreloading(): void {
    // Preload critical CSS
    this.preloadCriticalCSS();
    
    // Preload critical fonts
    this.preloadCriticalFonts();
    
    // Preload critical JavaScript
    this.preloadCriticalJS();
  }

  /**
   * Preload critical CSS
   */
  private preloadCriticalCSS(): void {
    const criticalCSS = document.querySelector('link[rel="preload"][as="style"]');
    if (criticalCSS) {
      criticalCSS.addEventListener('load', () => {
        criticalCSS.setAttribute('rel', 'stylesheet');
      });
    }
  }

  /**
   * Preload critical fonts
   */
  private preloadCriticalFonts(): void {
    const fontPreloads = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontPreloads.forEach(font => {
      font.addEventListener('load', () => {
        console.log('Font preloaded:', font.getAttribute('href'));
      });
    });
  }

  /**
   * Preload critical JavaScript
   */
  private preloadCriticalJS(): void {
    const jsPreloads = document.querySelectorAll('link[rel="preload"][as="script"]');
    jsPreloads.forEach(script => {
      script.addEventListener('load', () => {
        console.log('Script preloaded:', script.getAttribute('href'));
      });
    });
  }

  /**
   * Enable resource hints for better performance
   */
  private enableResourceHints(): void {
    // Add DNS prefetch for external domains
    this.addDNSPrefetch();
    
    // Add preconnect for critical external resources
    this.addPreconnect();
    
    // Add prefetch for likely next pages
    this.addPrefetch();
  }

  /**
   * Add DNS prefetch hints
   */
  private addDNSPrefetch(): void {
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdn.jsdelivr.net'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  }

  /**
   * Add preconnect hints for critical resources
   */
  private addPreconnect(): void {
    const criticalResources = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = resource;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  /**
   * Add prefetch hints for likely next pages
   */
  private addPrefetch(): void {
    // This would be dynamic based on user behavior
    // For now, we'll prefetch common pages
    const commonPages = ['/about', '/services', '/contact'];
    
    commonPages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize critical CSS
   */
  private optimizeCriticalCSS(): void {
    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      body { font-family: system-ui, sans-serif; }
      .hero { min-height: 100vh; }
      .navigation { position: fixed; top: 0; }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.insertBefore(style, document.head.firstChild);
  }

  /**
   * Initialize service worker for caching and offline support
   */
  private initializeServiceWorker(): void {
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
   * Report long task to monitoring service
   */
  private reportLongTask(entry: PerformanceEntry): void {
    // Send to analytics or monitoring service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'long_task', {
        event_category: 'Performance',
        event_label: entry.name,
        value: Math.round(entry.duration)
      });
    }
  }

  /**
   * Trigger garbage collection if available
   */
  private triggerGarbageCollection(): void {
    if ('gc' in window) {
      (window as any).gc();
    }
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  /**
   * Get performance score based on metrics
   */
  getPerformanceScore(): number {
    if (!this.metrics) return 0;

    let score = 100;

    // FCP scoring (good: <1.8s, needs improvement: <3s)
    if (this.metrics.fcp > 1800) score -= 20;
    else if (this.metrics.fcp > 3000) score -= 40;

    // LCP scoring (good: <2.5s, needs improvement: <4s)
    if (this.metrics.lcp > 2500) score -= 20;
    else if (this.metrics.lcp > 4000) score -= 40;

    // FID scoring (good: <100ms, needs improvement: <300ms)
    if (this.metrics.fid > 100) score -= 15;
    else if (this.metrics.fid > 300) score -= 30;

    // CLS scoring (good: <0.1, needs improvement: <0.25)
    if (this.metrics.cls > 0.1) score -= 15;
    else if (this.metrics.cls > 0.25) score -= 30;

    return Math.max(0, score);
  }

  /**
   * Generate performance report
   */
  generateReport(): object {
    return {
      metrics: this.metrics,
      score: this.getPerformanceScore(),
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      connection: (navigator as any).connection ? {
        effectiveType: (navigator as any).connection.effectiveType,
        downlink: (navigator as any).connection.downlink,
        rtt: (navigator as any).connection.rtt
      } : null
    };
  }
}

// Create and export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export class for custom configurations
export { PerformanceOptimizer };

// Export types
export type { PerformanceMetrics, OptimizationConfig };