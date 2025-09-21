// Performance monitoring and optimization utilities

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  category: 'navigation' | 'paint' | 'resource' | 'custom';
}

interface PerformanceObserver {
  metrics: PerformanceMetric[];
  startTime: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private startTime: number = performance.now();

  constructor() {
    this.initializePerformanceMonitoring();
  }

  private initializePerformanceMonitoring() {
    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor resource loading
    this.observeResourceTiming();
    
    // Monitor navigation timing
    this.observeNavigationTiming();
    
    // Monitor custom metrics
    this.observeCustomMetrics();
  }

  private observeWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.addMetric({
          name: 'LCP',
          value: lastEntry.startTime,
          timestamp: Date.now(),
          category: 'paint'
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.addMetric({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            timestamp: Date.now(),
            category: 'custom'
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.addMetric({
          name: 'CLS',
          value: clsValue,
          timestamp: Date.now(),
          category: 'paint'
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }

  private observeResourceTiming() {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.addMetric({
            name: `Resource-${entry.name.split('/').pop()}`,
            value: entry.duration,
            timestamp: Date.now(),
            category: 'resource'
          });
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    }
  }

  private observeNavigationTiming() {
    if ('PerformanceObserver' in window) {
      const navObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.addMetric({
            name: 'Navigation',
            value: entry.duration,
            timestamp: Date.now(),
            category: 'navigation'
          });
        });
      });
      navObserver.observe({ entryTypes: ['navigation'] });
    }
  }

  private observeCustomMetrics() {
    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        this.addMetric({
          name: 'Memory-Used',
          value: memory.usedJSHeapSize / 1024 / 1024, // MB
          timestamp: Date.now(),
          category: 'custom'
        });
      }, 5000);
    }

    // Monitor frame rate
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        this.addMetric({
          name: 'FPS',
          value: fps,
          timestamp: Date.now(),
          category: 'custom'
        });
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);
  }

  private addMetric(metric: PerformanceMetric) {
    this.metrics.push(metric);
    
    // Keep only last 100 metrics to prevent memory leaks
    if (this.metrics.length > 100) {
      this.metrics = this.metrics.slice(-100);
    }
    
    // Notify observers
    this.observers.forEach(observer => {
      observer.metrics.push(metric);
    });
  }

  // Public methods
  public getMetrics(category?: string): PerformanceMetric[] {
    if (category) {
      return this.metrics.filter(metric => metric.category === category);
    }
    return [...this.metrics];
  }

  public getAverageMetric(name: string, timeWindow: number = 60000): number {
    const cutoff = Date.now() - timeWindow;
    const relevantMetrics = this.metrics.filter(
      metric => metric.name === name && metric.timestamp > cutoff
    );
    
    if (relevantMetrics.length === 0) return 0;
    
    const sum = relevantMetrics.reduce((acc, metric) => acc + metric.value, 0);
    return sum / relevantMetrics.length;
  }

  public getMetricTrend(name: string, timeWindow: number = 60000): 'improving' | 'degrading' | 'stable' {
    const cutoff = Date.now() - timeWindow;
    const relevantMetrics = this.metrics
      .filter(metric => metric.name === name && metric.timestamp > cutoff)
      .sort((a, b) => a.timestamp - b.timestamp);
    
    if (relevantMetrics.length < 2) return 'stable';
    
    const firstHalf = relevantMetrics.slice(0, Math.floor(relevantMetrics.length / 2));
    const secondHalf = relevantMetrics.slice(Math.floor(relevantMetrics.length / 2));
    
    const firstAvg = firstHalf.reduce((acc, metric) => acc + metric.value, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((acc, metric) => acc + metric.value, 0) / secondHalf.length;
    
    const change = (secondAvg - firstAvg) / firstAvg;
    
    if (change > 0.1) return 'degrading';
    if (change < -0.1) return 'improving';
    return 'stable';
  }

  public startCustomMeasurement(name: string): () => void {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      this.addMetric({
        name: `Custom-${name}`,
        value: endTime - startTime,
        timestamp: Date.now(),
        category: 'custom'
      });
    };
  }

  public subscribe(callback: (metrics: PerformanceMetric[]) => void): () => void {
    const observer: PerformanceObserver = {
      metrics: [],
      startTime: Date.now()
    };
    
    this.observers.push(observer);
    
    return () => {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    };
  }

  public generateReport(): string {
    const report = {
      timestamp: new Date().toISOString(),
      totalMetrics: this.metrics.length,
      categories: this.getMetricsByCategory(),
      averages: this.getAverages(),
      trends: this.getTrends(),
      recommendations: this.getRecommendations()
    };
    
    return JSON.stringify(report, null, 2);
  }

  private getMetricsByCategory() {
    const categories: { [key: string]: number } = {};
    this.metrics.forEach(metric => {
      categories[metric.category] = (categories[metric.category] || 0) + 1;
    });
    return categories;
  }

  private getAverages() {
    const averages: { [key: string]: number } = {};
    const uniqueNames = Array.from(new Set(this.metrics.map(m => m.name)));
    
    uniqueNames.forEach(name => {
      averages[name] = this.getAverageMetric(name);
    });
    
    return averages;
  }

  private getTrends() {
    const trends: { [key: string]: string } = {};
    const uniqueNames = Array.from(new Set(this.metrics.map(m => m.name)));
    
    uniqueNames.forEach(name => {
      trends[name] = this.getMetricTrend(name);
    });
    
    return trends;
  }

  private getRecommendations(): string[] {
    const recommendations: string[] = [];
    
    // Check LCP
    const lcp = this.getAverageMetric('LCP');
    if (lcp > 2500) {
      recommendations.push('LCP is above 2.5s. Consider optimizing images and reducing render-blocking resources.');
    }
    
    // Check FID
    const fid = this.getAverageMetric('FID');
    if (fid > 100) {
      recommendations.push('FID is above 100ms. Consider reducing JavaScript execution time.');
    }
    
    // Check CLS
    const cls = this.getAverageMetric('CLS');
    if (cls > 0.1) {
      recommendations.push('CLS is above 0.1. Ensure images and ads have size attributes.');
    }
    
    // Check FPS
    const fps = this.getAverageMetric('FPS');
    if (fps < 30) {
      recommendations.push('FPS is below 30. Consider optimizing animations and reducing DOM complexity.');
    }
    
    return recommendations;
  }
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Utility functions
export function measureFunction<T extends (...args: any[]) => any>(
  fn: T,
  name?: string
): T {
  return ((...args: any[]) => {
    const endMeasurement = performanceMonitor.startCustomMeasurement(
      name || fn.name || 'anonymous'
    );
    const result = fn(...args);
    
    // Handle async functions
    if (result && typeof result.then === 'function') {
      return result.finally(endMeasurement);
    }
    
    endMeasurement();
    return result;
  }) as T;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

export function lazyLoad(selector: string, options?: IntersectionObserverInit) {
  const images = document.querySelectorAll(selector);
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  }, options);
  
  images.forEach(img => imageObserver.observe(img));
  
  return imageObserver;
}

export default performanceMonitor;