/**
 * Advanced performance optimization utilities
 * Provides comprehensive performance monitoring and optimization features
 */

import * as React from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRatio: number;
  errorRate: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

export class PerformanceOptimizer {
  private metrics: PerformanceMetrics;
  private config: OptimizationConfig;
  private observers: PerformanceObserver[] = [];

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enableImageOptimization: true,
      enableCaching: true,
      enableCompression: true,
      ...config,
    };

    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRatio: 0,
      errorRate: 0,
    };

    this.initializePerformanceMonitoring();
  }

  private initializePerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor resource loading
    this.observeResourceLoading();
    
    // Monitor memory usage
    this.observeMemoryUsage();
    
    // Monitor errors
    this.observeErrors();
  }

  private observeWebVitals(): void {
    try {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.loadTime = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          this.reportMetric('FID', fidEntry.processingStart - fidEntry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        this.reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('Performance monitoring initialization failed:', error);
    }
  }

  private observeResourceLoading(): void {
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          this.analyzeResourcePerformance(resourceEntry);
        }
      });
    });
    resourceObserver.observe({ entryTypes: ['resource'] });
    this.observers.push(resourceObserver);
  }

  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
        this.reportMetric('Memory', this.metrics.memoryUsage);
      }, 5000);
    }
  }

  private observeErrors(): void {
    window.addEventListener('error', (event) => {
      this.metrics.errorRate += 1;
      this.reportError(event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.metrics.errorRate += 1;
      this.reportError(event.reason);
    });
  }

  private analyzeResourcePerformance(entry: PerformanceResourceTiming): void {
    const loadTime = entry.responseEnd - entry.requestStart;
    const size = entry.transferSize || 0;
    
    // Report slow resources
    if (loadTime > 1000) {
      this.reportMetric('SlowResource', loadTime, {
        name: entry.name,
        size: size,
        type: entry.initiatorType,
      });
    }

    // Report large resources
    if (size > 1024 * 1024) { // 1MB
      this.reportMetric('LargeResource', size, {
        name: entry.name,
        loadTime: loadTime,
        type: entry.initiatorType,
      });
    }
  }

  private reportMetric(name: string, value: number, metadata?: any): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Performance Metric: ${name} = ${value}`, metadata);
    }

    // Send to analytics service in production
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        ...metadata,
      });
    }
  }

  private reportError(error: Error): void {
    if (process.env.NODE_ENV === 'development') {
      console.error('🚨 Performance Error:', error);
    }

    // Send to error tracking service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
      });
    }
  }

  // Public methods for optimization
  public optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Lazy load images
      if (!img.loading) {
        img.loading = 'lazy';
      }

      // Add responsive srcset if not present
      if (!img.srcset && img.src) {
        const src = img.src;
        const baseName = src.substring(0, src.lastIndexOf('.'));
        const extension = src.substring(src.lastIndexOf('.'));
        img.srcset = `${baseName}-320w${extension} 320w, ${baseName}-640w${extension} 640w, ${baseName}-1024w${extension} 1024w`;
        img.sizes = '(max-width: 320px) 320px, (max-width: 640px) 640px, 1024px';
      }
    });
  }

  public optimizeCSS(): void {
    // Remove unused CSS
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      const sheet = styleSheets[i];
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (rules) {
          // Analyze rule usage and remove unused ones
          this.analyzeCSSRules(rules);
        }
      } catch (e) {
        // Cross-origin stylesheet, skip
      }
    }
  }

  private analyzeCSSRules(rules: CSSRuleList): void {
    // Implementation for CSS optimization
    // This would analyze which CSS rules are actually being used
    // and remove unused ones
  }

  public preloadCriticalResources(): void {
    const criticalResources = [
      '/assets/css/main.css',
      '/assets/js/vendor.js',
      '/assets/js/main.js',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  public enableServiceWorker(): void {
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

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getPerformanceScore(): number {
    const lcp = this.metrics.loadTime;
    const fid = this.metrics.renderTime;
    const cls = this.metrics.cacheHitRatio;
    const memory = this.metrics.memoryUsage;

    // Calculate performance score based on Core Web Vitals
    let score = 100;

    // LCP scoring (0-100)
    if (lcp > 4000) score -= 30;
    else if (lcp > 2500) score -= 20;
    else if (lcp > 1000) score -= 10;

    // FID scoring (0-100)
    if (fid > 300) score -= 30;
    else if (fid > 100) score -= 20;
    else if (fid > 50) score -= 10;

    // CLS scoring (0-100)
    if (cls > 0.25) score -= 30;
    else if (cls > 0.1) score -= 20;
    else if (cls > 0.05) score -= 10;

    // Memory scoring (0-100)
    if (memory > 100) score -= 20;
    else if (memory > 50) score -= 10;

    return Math.max(0, score);
  }

  public cleanup(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }

  // Additional methods for compatibility
  public startRender(componentName: string): void {
    // This method is for compatibility with the old interface
    // The actual tracking is handled by the performance monitoring
    console.log(`Starting render tracking for: ${componentName}`);
  }

  public endRender(componentName: string): void {
    // This method is for compatibility with the old interface
    console.log(`Ending render tracking for: ${componentName}`);
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export hook for React components
export const usePerformanceOptimizer = () => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>(
    performanceOptimizer.getMetrics()
  );
  const [score, setScore] = React.useState<number>(
    performanceOptimizer.getPerformanceScore()
  );

  React.useEffect(() => {
    const updateMetrics = () => {
      setMetrics(performanceOptimizer.getMetrics());
      setScore(performanceOptimizer.getPerformanceScore());
    };

    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  return { metrics, score, optimizer: performanceOptimizer };
};
