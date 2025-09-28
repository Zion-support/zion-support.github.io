/**
 * Comprehensive Performance Monitoring System
 * Advanced performance tracking and optimization utilities
 */

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
  tti: number; // Time to Interactive
  memoryUsage: number;
  bundleSize: number;
  renderTime: number;
  domContentLoaded: number;
  loadComplete: number;
}

export interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

export class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;
  private thresholds: PerformanceThresholds = {
    fcp: { good: 1800, needsImprovement: 3000 },
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    ttfb: { good: 800, needsImprovement: 1800 }
  };

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    try {
      this.observeWebVitals();
      this.observeResourceTiming();
      this.observeNavigationTiming();
      this.observeMemoryUsage();
      
      this.isInitialized = true;
      console.log('🚀 Performance Monitor initialized');
    } catch (error) {
      console.error('Error initializing performance monitor:', error);
    }
  }

  private observeWebVitals(): void {
    // First Contentful Paint
    this.observeMetric('paint', (entry) => {
      if (entry.name === 'first-contentful-paint') {
        this.metrics.fcp = entry.startTime;
        this.reportMetric('fcp', entry.startTime);
      }
    });

    // Largest Contentful Paint
    this.observeMetric('largest-contentful-paint', (entry) => {
      this.metrics.lcp = entry.startTime;
      this.reportMetric('lcp', entry.startTime);
    });

    // First Input Delay
    this.observeMetric('first-input', (entry) => {
      this.metrics.fid = entry.processingStart - entry.startTime;
      this.reportMetric('fid', this.metrics.fid);
    });

    // Cumulative Layout Shift
    this.observeMetric('layout-shift', (entry) => {
      if (!entry.hadRecentInput) {
        this.metrics.cls = (this.metrics.cls || 0) + entry.value;
        this.reportMetric('cls', this.metrics.cls);
      }
    });
  }

  private observeResourceTiming(): void {
    this.observeMetric('resource', (entry) => {
      if (entry.name.includes('main') || entry.name.includes('bundle')) {
        this.metrics.bundleSize = entry.transferSize || 0;
        this.reportMetric('bundleSize', this.metrics.bundleSize);
      }
    });
  }

  private observeNavigationTiming(): void {
    this.observeMetric('navigation', (entry) => {
      this.metrics.ttfb = entry.responseStart - entry.requestStart;
      this.metrics.domContentLoaded = entry.domContentLoadedEventEnd - entry.navigationStart;
      this.metrics.loadComplete = entry.loadEventEnd - entry.navigationStart;
      
      this.reportMetric('ttfb', this.metrics.ttfb);
      this.reportMetric('domContentLoaded', this.metrics.domContentLoaded);
      this.reportMetric('loadComplete', this.metrics.loadComplete);
    });
  }

  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      this.reportMetric('memoryUsage', this.metrics.memoryUsage);
    }
  }

  private observeMetric(entryType: string, callback: (entry: PerformanceEntry) => void): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(callback);
      });
      
      observer.observe({ entryTypes: [entryType] });
      this.observers.push(observer);
    } catch (error) {
      console.warn(`Failed to observe ${entryType}:`, error);
    }
  }

  private reportMetric(name: keyof PerformanceMetrics, value: number): void {
    const threshold = this.thresholds[name as keyof PerformanceThresholds];
    if (!threshold) return;

    let status: 'good' | 'needsImprovement' | 'poor' = 'good';
    if (value > threshold.needsImprovement) {
      status = 'poor';
    } else if (value > threshold.good) {
      status = 'needsImprovement';
    }

    console.log(`📊 ${name.toUpperCase()}: ${value.toFixed(2)}ms (${status})`);
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        metric_status: status
      });
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public getPerformanceScore(): number {
    const scores = Object.entries(this.metrics).map(([key, value]) => {
      if (typeof value !== 'number') return 100;
      
      const threshold = this.thresholds[key as keyof PerformanceThresholds];
      if (!threshold) return 100;

      if (value <= threshold.good) return 100;
      if (value <= threshold.needsImprovement) return 50;
      return 0;
    });

    return scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 100;
  }

  public getRecommendations(): string[] {
    const recommendations: string[] = [];
    const metrics = this.getMetrics();

    if (metrics.fcp && metrics.fcp > this.thresholds.fcp.good) {
      recommendations.push('Optimize First Contentful Paint by reducing render-blocking resources');
    }

    if (metrics.lcp && metrics.lcp > this.thresholds.lcp.good) {
      recommendations.push('Improve Largest Contentful Paint by optimizing images and critical resources');
    }

    if (metrics.fid && metrics.fid > this.thresholds.fid.good) {
      recommendations.push('Reduce First Input Delay by minimizing JavaScript execution time');
    }

    if (metrics.cls && metrics.cls > this.thresholds.cls.good) {
      recommendations.push('Fix Cumulative Layout Shift by setting explicit dimensions for images and ads');
    }

    if (metrics.ttfb && metrics.ttfb > this.thresholds.ttfb.good) {
      recommendations.push('Improve Time to First Byte by optimizing server response time');
    }

    if (metrics.bundleSize && metrics.bundleSize > 500000) { // 500KB
      recommendations.push('Reduce bundle size by code splitting and tree shaking');
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 50) { // 50MB
      recommendations.push('Optimize memory usage by fixing memory leaks and reducing object creation');
    }

    return recommendations;
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export utility functions
export const getPerformanceMetrics = (): Partial<PerformanceMetrics> => {
  return performanceMonitor.getMetrics();
};

export const getPerformanceScore = (): number => {
  return performanceMonitor.getPerformanceScore();
};

export const getPerformanceRecommendations = (): string[] => {
  return performanceMonitor.getRecommendations();
};

export const isPerformanceGood = (): boolean => {
  return performanceMonitor.getPerformanceScore() >= 80;
};

export default PerformanceMonitor;