/**
 * Performance Enhancement Utilities
 * Advanced performance monitoring and optimization tools
 */

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  memoryUsage: number;
  bundleSize: number;
  renderTime: number;
  domContentLoaded: number;
  loadComplete: number;
}

export interface PerformanceConfig {
  enableMonitoring: boolean;
  enableReporting: boolean;
  enableOptimizations: boolean;
  reportInterval: number;
  thresholds: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

class PerformanceEnhancer {
  private config: PerformanceConfig;
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];
  private reportTimer?: NodeJS.Timeout;

  constructor(config?: Partial<PerformanceConfig>) {
    this.config = {
      enableMonitoring: true,
      enableReporting: true,
      enableOptimizations: true,
      reportInterval: 30000, // 30 seconds
      thresholds: {
        fcp: 1800, // 1.8s
        lcp: 2500, // 2.5s
        fid: 100,  // 100ms
        cls: 0.1,  // 0.1
        ttfb: 800  // 800ms
      },
      ...config
    };

    if (this.config.enableMonitoring) {
      this.initializeMonitoring();
    }

    if (this.config.enableOptimizations) {
      this.initializeOptimizations();
    }

    if (this.config.enableReporting) {
      this.startReporting();
    }
  }

  private initializeMonitoring(): void {
    // Monitor paint metrics
    this.observePaintMetrics();
    
    // Monitor navigation timing
    this.observeNavigationTiming();
    
    // Monitor user interactions
    this.observeUserInteractions();
    
    // Monitor layout shifts
    this.observeLayoutShifts();
    
    // Monitor memory usage
    this.observeMemoryUsage();
  }

  private observePaintMetrics(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.name) {
            case 'first-contentful-paint':
              this.metrics.fcp = entry.startTime;
              break;
            case 'largest-contentful-paint':
              this.metrics.lcp = entry.startTime;
              break;
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe paint metrics:', error);
    }
  }

  private observeNavigationTiming(): void {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
      this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - (navigation.fetchStart || navigation.requestStart) || 0;
      this.metrics.loadComplete = navigation.loadEventEnd - (navigation.fetchStart || navigation.requestStart) || 0;
      this.metrics.renderTime = navigation.loadEventEnd - (navigation.fetchStart || navigation.requestStart) || 0;
    }
  }

  private observeUserInteractions(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEntry & { processingStart: number };
            this.metrics.fid = fidEntry.processingStart - entry.startTime;
          }
        }
      });

      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe user interactions:', error);
    }
  }

  private observeLayoutShifts(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as PerformanceEntry & { 
              hadRecentInput?: boolean; 
              value?: number 
            };
            if (!layoutShiftEntry.hadRecentInput) {
              this.metrics.cls = (this.metrics.cls || 0) + (layoutShiftEntry.value || 0);
            }
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe layout shifts:', error);
    }
  }

  private observeMemoryUsage(): void {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
    if (memory) {
      this.metrics.memoryUsage = memory.usedJSHeapSize;
    }
  }

  private initializeOptimizations(): void {
    // Preload critical resources
    this.preloadCriticalResources();
    
    // Optimize images
    this.optimizeImages();
    
    // Enable resource hints
    this.enableResourceHints();
    
    // Optimize fonts
    this.optimizeFonts();
  }

  private preloadCriticalResources(): void {
    const criticalResources = [
      '/favicon.ico',
      '/og-image.png',
      '/manifest.json'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.json') ? 'json' : 'image';
      document.head.appendChild(link);
    });
  }

  private optimizeImages(): void {
    // Lazy load images
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

  private enableResourceHints(): void {
    // DNS prefetch for external domains
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

  private optimizeFonts(): void {
    // Preconnect to Google Fonts
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnectLink);

    const preconnectLink2 = document.createElement('link');
    preconnectLink2.rel = 'preconnect';
    preconnectLink2.href = 'https://fonts.gstatic.com';
    preconnectLink2.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectLink2);
  }

  private startReporting(): void {
    this.reportTimer = setInterval(() => {
      this.reportMetrics();
    }, this.config.reportInterval);
  }

  private reportMetrics(): void {
    // Send metrics to analytics or monitoring service
    if (typeof window !== 'undefined' && (window as Window & { gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag) {
      const metrics = this.getMetrics();
      
      // Report Core Web Vitals
      if (metrics.fcp) {
        (window as Window & { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'web_vitals', {
          name: 'FCP',
          value: Math.round(metrics.fcp),
          event_category: 'Performance'
        });
      }

      if (metrics.lcp) {
        (window as Window & { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(metrics.lcp),
          event_category: 'Performance'
        });
      }

      if (metrics.fid) {
        (window as Window & { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'web_vitals', {
          name: 'FID',
          value: Math.round(metrics.fid),
          event_category: 'Performance'
        });
      }

      if (metrics.cls) {
        (window as Window & { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(metrics.cls * 1000) / 1000,
          event_category: 'Performance'
        });
      }
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public getPerformanceScore(): number {
    const metrics = this.getMetrics();
    let score = 100;

    // Deduct points based on thresholds
    if (metrics.fcp && metrics.fcp > this.config.thresholds.fcp) {
      score -= Math.min(20, (metrics.fcp - this.config.thresholds.fcp) / 100);
    }

    if (metrics.lcp && metrics.lcp > this.config.thresholds.lcp) {
      score -= Math.min(25, (metrics.lcp - this.config.thresholds.lcp) / 100);
    }

    if (metrics.fid && metrics.fid > this.config.thresholds.fid) {
      score -= Math.min(20, (metrics.fid - this.config.thresholds.fid) / 10);
    }

    if (metrics.cls && metrics.cls > this.config.thresholds.cls) {
      score -= Math.min(15, (metrics.cls - this.config.thresholds.cls) * 100);
    }

    if (metrics.ttfb && metrics.ttfb > this.config.thresholds.ttfb) {
      score -= Math.min(20, (metrics.ttfb - this.config.thresholds.ttfb) / 50);
    }

    return Math.max(0, Math.round(score));
  }

  public isPerformanceGood(): boolean {
    return this.getPerformanceScore() >= 75;
  }

  public getPerformanceRecommendations(): string[] {
    const metrics = this.getMetrics();
    const recommendations: string[] = [];

    if (metrics.fcp && metrics.fcp > this.config.thresholds.fcp) {
      recommendations.push('Optimize First Contentful Paint - consider reducing render-blocking resources');
    }

    if (metrics.lcp && metrics.lcp > this.config.thresholds.lcp) {
      recommendations.push('Improve Largest Contentful Paint - optimize images and critical resources');
    }

    if (metrics.fid && metrics.fid > this.config.thresholds.fid) {
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time');
    }

    if (metrics.cls && metrics.cls > this.config.thresholds.cls) {
      recommendations.push('Fix Cumulative Layout Shift - ensure images have dimensions and avoid dynamic content insertion');
    }

    if (metrics.ttfb && metrics.ttfb > this.config.thresholds.ttfb) {
      recommendations.push('Optimize Time to First Byte - improve server response time');
    }

    return recommendations;
  }

  public destroy(): void {
    // Clean up observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];

    // Clear reporting timer
    if (this.reportTimer) {
      clearInterval(this.reportTimer);
      this.reportTimer = undefined;
    }
  }
}

// Export singleton instance
export const performanceEnhancer = new PerformanceEnhancer();

// Export utility functions
export const getPerformanceMetrics = (): Partial<PerformanceMetrics> => {
  return performanceEnhancer.getMetrics();
};

export const getPerformanceScore = (): number => {
  return performanceEnhancer.getPerformanceScore();
};

export const isPerformanceGood = (): boolean => {
  return performanceEnhancer.isPerformanceGood();
};

export const getPerformanceRecommendations = (): string[] => {
  return performanceEnhancer.getPerformanceRecommendations();
};

export default PerformanceEnhancer;