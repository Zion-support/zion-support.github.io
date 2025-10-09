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

  constructor(config?: Partial<OptimizationConfig>) {
    this.config = {
      enableImageOptimization: true,
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enablePrefetching: true,
      enableServiceWorker: true,
      enableResourceHints: true,
      enableCompression: true,
      enableCaching: true,
      ...config,
    };
  }

  async initialize(): Promise<void> {
    try {
      if (this.config.enableServiceWorker) {
        await this.registerServiceWorker();
      }
      
      if (this.config.enableResourceHints) {
        this.addResourceHints();
      }
      
      if (this.config.enableLazyLoading) {
        this.enableLazyLoading();
      }
    } catch (error) {
      console.error('Performance enhancer initialization failed:', error);
    }
  }

  private async registerServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js');
      } catch (error) {
        console.error('Service worker registration failed:', error);
      }
    }
  }

  private addResourceHints(): void {
    // Add preload hints for critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      document.head.appendChild(link);
    });
  }

  private enableLazyLoading(): void {
    // Enable lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  async measurePerformance(): Promise<PerformanceMetrics> {
    if (this.metrics) {
      return this.metrics;
    }

    const metrics: PerformanceMetrics = {
      lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0,
      tbt: 0,
    };

    try {
      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              metrics.lcp = entry.startTime;
            } else if (entry.entryType === 'first-input') {
              metrics.fid = (entry as any).processingStart - entry.startTime;
            } else if (entry.entryType === 'layout-shift') {
              if (!(entry as any).hadRecentInput) {
                metrics.cls += (entry as any).value;
              }
            } else if (entry.entryType === 'paint') {
              if (entry.name === 'first-contentful-paint') {
                metrics.fcp = entry.startTime;
              }
            }
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
      }

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }

      // Measure TBT
      const longTasks = performance.getEntriesByType('longtask');
      metrics.tbt = longTasks.reduce((total, task) => total + task.duration, 0);

      this.metrics = metrics;
    } catch (error) {
      console.error('Performance measurement failed:', error);
    }

    return metrics;
  }

  getOptimizationRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics) {
      if (this.metrics.lcp > 2500) {
        recommendations.push('Optimize Largest Contentful Paint (LCP)');
      }
      if (this.metrics.fid > 100) {
        recommendations.push('Reduce First Input Delay (FID)');
      }
      if (this.metrics.cls > 0.1) {
        recommendations.push('Improve Cumulative Layout Shift (CLS)');
      }
      if (this.metrics.fcp > 1800) {
        recommendations.push('Optimize First Contentful Paint (FCP)');
      }
      if (this.metrics.ttfb > 600) {
        recommendations.push('Improve Time to First Byte (TTFB)');
      }
      if (this.metrics.tbt > 200) {
        recommendations.push('Reduce Total Blocking Time (TBT)');
      }
    }

    return recommendations;
  }
}

export default PerformanceEnhancer;