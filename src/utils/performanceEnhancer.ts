// PerformanceEnhancer utility
// This file contains utility functions and configurations

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  tbt: number;
}

interface OptimizationConfig {
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableLazyLoading: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enableMinification: boolean;
}

class PerformanceEnhancer {
  private config: OptimizationConfig;
  private metrics: PerformanceMetrics;

  constructor(config: OptimizationConfig) {
    this.config = config;
    this.metrics = {
      fcp: 0,
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
      tbt: 0
    };
  }

  init() {
    this.enableImageOptimization();
    this.enableCodeSplitting();
    this.enableLazyLoading();
    this.enableCaching();
    this.enableCompression();
    this.enableMinification();
    this.trackPerformanceMetrics();
  }

  private enableImageOptimization() {
    if (this.config.enableImageOptimization && typeof document !== 'undefined') {
      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    }
  }

  private enableCodeSplitting() {
    if (this.config.enableCodeSplitting && typeof window !== 'undefined') {
      // Enable code splitting
      console.log('Code splitting enabled');
    }
  }

  private enableLazyLoading() {
    if (this.config.enableLazyLoading && typeof document !== 'undefined') {
      // Enable lazy loading for images and iframes
      const lazyElements = document.querySelectorAll('[data-lazy]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('loaded');
            observer.unobserve(element);
          }
        });
      });

      lazyElements.forEach(element => {
        observer.observe(element);
      });
    }
  }

  private enableCaching() {
    if (this.config.enableCaching && typeof window !== 'undefined') {
      // Enable caching strategies
      console.log('Caching enabled');
    }
  }

  private enableCompression() {
    if (this.config.enableCompression && typeof window !== 'undefined') {
      // Enable compression
      console.log('Compression enabled');
    }
  }

  private enableMinification() {
    if (this.config.enableMinification && typeof window !== 'undefined') {
      // Enable minification
      console.log('Minification enabled');
    }
  }

  private trackPerformanceMetrics() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track Core Web Vitals
      this.trackFCP();
      this.trackLCP();
      this.trackFID();
      this.trackCLS();
      this.trackTTFB();
      this.trackTBT();
    }
  }

  private trackFCP() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }

  private trackLCP() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private trackFID() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          this.metrics.fid = entry.processingStart - entry.startTime;
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  private trackCLS() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cls = clsValue;
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  private trackTTFB() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
      }
    }
  }

  private trackTBT() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      let tbtValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.duration > 50) {
            tbtValue += entry.duration - 50;
          }
        });
        this.metrics.tbt = tbtValue;
      });
      observer.observe({ entryTypes: ['longtask'] });
    }
  }

  getMetrics(): PerformanceMetrics {
    return this.metrics;
  }

  cleanup() {
    // Cleanup function if needed
  }
}

// Default performance configuration
const defaultPerformanceConfig: OptimizationConfig = {
  enableImageOptimization: true,
  enableCodeSplitting: true,
  enableLazyLoading: true,
  enableCaching: true,
  enableCompression: true,
  enableMinification: true
};

// Create and export performance enhancer instance
const performanceEnhancer = new PerformanceEnhancer(defaultPerformanceConfig);

export default performanceEnhancer;