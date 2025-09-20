/**
 * Performance Optimization Utilities
 * Advanced performance monitoring and optimization tools
 */

import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0
  };

  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers(): void {
    // Observe navigation timing
    if ('PerformanceObserver' in window) {
      const navObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            this.metrics.loadTime = entry.loadEventEnd - entry.loadEventStart;
          }
        });
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);

      // Observe paint timing
      const paintObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.renderTime = entry.startTime;
          }
        });
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    }
  }

  // Debounce utility function
  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Throttle utility function
  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Lazy loading utility
  lazyLoad(selector: string, callback: () => void): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(entry.target);
          }
        });
      });

      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => observer.observe(element));
    }
  }

  // Memory usage monitoring
  getMemoryUsage(): number {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return memory.usedJSHeapSize / memory.jsHeapSizeLimit;
    }
    return 0;
  }

  // Bundle size estimation
  getBundleSize(): number {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach((script) => {
      const src = (script as HTMLScriptElement).src;
      if (src.includes('.js')) {
        // Rough estimation based on script count
        totalSize += 50; // KB per script estimate
      }
    });
    return totalSize;
  }

  // Performance report
  getPerformanceReport() {
    const memoryUsage = this.getMemoryUsage();
    const bundleSize = this.getBundleSize();
    
    return {
      ...this.metrics,
      memoryUsage,
      bundleSize,
      timestamp: Date.now()
    };
  }

  disconnect(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// React hook for performance monitoring
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0
  });

  useEffect(() => {
    const optimizer = new PerformanceOptimizer();
    
    const updateMetrics = () => {
      const report = optimizer.getPerformanceReport();
      setMetrics(report);
    };

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);
    
    // Initial update
    updateMetrics();

    return () => {
      clearInterval(interval);
      optimizer.disconnect();
    };
  }, []);

  return metrics;
};

export default PerformanceOptimizer;