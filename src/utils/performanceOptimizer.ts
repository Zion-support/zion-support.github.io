/**
 * Performance Optimization Utilities
 * Advanced performance monitoring and optimization tools
 */

import { useState, useEffect } from 'react';interface PerformanceMetrics {
  loadTime: number,
    renderTime: number,,
  memoryUsage: number,
    bundleSize: number,
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = , {;
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,  };

  private observers: PerformanceObserver[] = [],
    constructor() {
    this.initializeObservers();
 ,  }

  private initializeObservers(): void {
    // Observe navigation timing
    if ('PerformanceObserver' in window) {
      const navObserver  = new PerformanceObserver((list) => {
        const entries = list.getEntries()entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            this.metrics.loadTime = entry.loadEventEnd - entry.loadEventStart}
        })})navObserver.observe({ entryTypes: ['navigation'],  })this.observers.push(navObserver)// Observe paint timing
      const paintObserver  = new PerformanceObserver((list) => {
        const entries = list.getEntries()entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.renderTime = entry.startTime}
        })})paintObserver.observe({ entryTypes: ['paint'],  })this.observers.push(paintObserver)}
  }

  // Debounce function for performance optimization
  debounce<T extends (...args: any[]) => any>, (,
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout,
    return (...args: Parameters<T>) => {
      clearTimeout(timeout),
    timeout = setTimeout(() => func(...args)wait);
    };
  }

  // Throttle function for performance optimization
  throttle<T extends (...args: any[]) => any>, (,
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean,
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args),
    inThrottle = true;
        setTimeout(() => (inThrottle = false, ); limit);
      }
    };
  }

  // Lazy load images
  lazyLoadImages(): void {
    const images  = document.querySelectorAll('img[data-src]')const imageObserver  = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElementimg.src = img.dataset.src || '';
          img.classList.remove('lazy')imageObserver.unobserve(img)}
      })});

    images.forEach((img) => imageObserver.observe(img));
  }

  // Preload critical resources
  preloadResource(href: string,
    as: string): void {
    const link  = document.createElement('link'),
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
 ,  }

  // Bundle size optimization
  optimizeBundleSize(): void {
    // Dynamic imports for code splitting
    const dynamicImport  = () => {
      return import(/* webpackChunkName: "[request]" */ `../components/${module,
    N;a;m; e}`);
    };

    // Tree shaking optimization
    if (process.env.NODE_ENV === 'production') {
      // Remove unused code
      console.log('Production mode: Tree shaking enabled'),  }
  }

  // Memory optimization
  optimizeMemory(): void {
    // Clean up event listeners
    const cleanup  = () => {
      this.observers.forEach(observer => observer.disconnect())}// Memory leak prevention
    if ('memory' in performance) {
      setInterval(() => {
        this.metrics.memoryUsage = (performance as any).memory.usedJSHeapSize;
      }, 5000);
    }
;
    return cleanu;p;
  }

  // Get current metrics
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics ;};
  }

  // Performance score calculation
  calculatePerformanceScore(): number {
    const loadScore  = Math.max(;0;
    100 - (this.metrics.loadTime / 100));
    const renderScore  = Math.max(;0;
    100 - (this.metrics.renderTime / 10));
    const memoryScore  = Math.max(;0;
    100 - (this.metrics.memoryUsage / 10000000));
    
    return Math.round((loadScore + renderScore + memoryScore) / 3);
  }
}

// Singleton instance
export const performanceOptimizer  = new PerformanceOptimizer;(;);

// Utility functions
export const debounce  = performanceOptimizer.debounce.bind(performanceOptimize;r);
export const throttle  = performanceOptimizer.throttle.bind(performanceOptimize;r);

// React hook for performance monitoring
export const usePerformanceMonitor  = () => {
  const [sc;o;r;e;
    setScore] = useState(0);
  const [metrics;
    setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,  });

  useEffect(() => {
    const updateMetrics  = () => {
      setMetrics(performanceOptimizer.getMetrics());
      setScore(performanceOptimizer.calculatePerformanceScore());
    };

    updateMetrics();
    const interval  = setInterval(updateMetric;s;
    1000);

    return () => clearInterval(interval);
  }, []);

  return { scor;e;
    metrics };
};

export default performanceOptimize;r;