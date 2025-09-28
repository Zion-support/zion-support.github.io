/**
 * Performance Optimizer
 * Comprehensive performance optimization utilities
 */

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  bundleSize: number;
  memoryUsage: number;
  renderTime: number;
  networkRequests: number;
}

export interface OptimizationSuggestion {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  category: 'performance' | 'accessibility' | 'seo' | 'security';
}

export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: PerformanceMetrics | null = null;
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  /**
   * Start performance monitoring
   */
  startMonitoring(): void {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    this.setupPerformanceObservers();
    this.measureInitialMetrics();
  }

  /**
   * Stop performance monitoring
   */
  stopMonitoring(): void {
    this.isMonitoring = false;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  /**
   * Get optimization suggestions based on current metrics
   */
  getOptimizationSuggestions(): OptimizationSuggestion[] {
    if (!this.metrics) return [];

    const suggestions: OptimizationSuggestion[] = [];

    // LCP optimization
    if (this.metrics.largestContentfulPaint > 2500) {
      suggestions.push({
        id: 'lcp-optimization',
        type: 'critical',
        title: 'Optimize Largest Contentful Paint',
        description: 'LCP is above 2.5s. Consider optimizing images, removing render-blocking resources, or improving server response times.',
        impact: 'high',
        effort: 'medium',
        category: 'performance'
      });
    }

    // FID optimization
    if (this.metrics.firstInputDelay > 100) {
      suggestions.push({
        id: 'fid-optimization',
        type: 'critical',
        title: 'Improve First Input Delay',
        description: 'FID is above 100ms. Consider reducing JavaScript execution time, using web workers, or code splitting.',
        impact: 'high',
        effort: 'high',
        category: 'performance'
      });
    }

    // CLS optimization
    if (this.metrics.cumulativeLayoutShift > 0.1) {
      suggestions.push({
        id: 'cls-optimization',
        type: 'warning',
        title: 'Reduce Cumulative Layout Shift',
        description: 'CLS is above 0.1. Ensure images and ads have size attributes, avoid inserting content above existing content.',
        impact: 'medium',
        effort: 'low',
        category: 'performance'
      });
    }

    // Memory optimization
    if (this.metrics.memoryUsage > 50 * 1024 * 1024) { // 50MB
      suggestions.push({
        id: 'memory-optimization',
        type: 'warning',
        title: 'Optimize Memory Usage',
        description: 'Memory usage is high. Consider implementing lazy loading, cleaning up event listeners, or reducing bundle size.',
        impact: 'medium',
        effort: 'medium',
        category: 'performance'
      });
    }

    // Bundle size optimization
    if (this.metrics.bundleSize > 500 * 1024) { // 500KB
      suggestions.push({
        id: 'bundle-optimization',
        type: 'info',
        title: 'Reduce Bundle Size',
        description: 'Bundle size is large. Consider code splitting, tree shaking, or removing unused dependencies.',
        impact: 'medium',
        effort: 'high',
        category: 'performance'
      });
    }

    return suggestions;
  }

  /**
   * Setup performance observers
   */
  private setupPerformanceObservers(): void {
    // LCP observer
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
          if (this.metrics) {
            this.metrics.largestContentfulPaint = lastEntry.startTime;
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (error) {
        console.warn('LCP observer not supported:', error);
      }

      // FID observer
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntry & { processingStart: number; processingEnd: number };
            if (this.metrics) {
              this.metrics.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (error) {
        console.warn('FID observer not supported:', error);
      }

      // CLS observer
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const clsEntry = entry as PerformanceEntry & { value: number };
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          });
          if (this.metrics) {
            this.metrics.cumulativeLayoutShift = clsValue;
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (error) {
        console.warn('CLS observer not supported:', error);
      }
    }
  }

  /**
   * Measure initial performance metrics
   */
  private measureInitialMetrics(): void {
    if (typeof window === 'undefined' || !window.performance) return;

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      const resources = performance.getEntriesByType('resource');

      this.metrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp,
        largestContentfulPaint: 0, // Will be updated by observer
        cumulativeLayoutShift: 0, // Will be updated by observer
        firstInputDelay: 0, // Will be updated by observer
        timeToInteractive: navigation.domInteractive - navigation.fetchStart || 0,
        bundleSize: this.estimateBundleSize(),
        memoryUsage: memory?.usedJSHeapSize || 0,
        renderTime: 0, // Will be calculated separately
        networkRequests: resources.length
      };

      // Calculate render time
      this.measureRenderTime();
    } catch (error) {
      console.error('Error measuring performance metrics:', error);
    }
  }

  /**
   * Measure render time
   */
  private measureRenderTime(): void {
    const startTime = performance.now();
    requestAnimationFrame(() => {
      const renderTime = performance.now() - startTime;
      if (this.metrics) {
        this.metrics.renderTime = renderTime;
      }
    });
  }

  /**
   * Estimate bundle size
   */
  private estimateBundleSize(): number {
    if (typeof window === 'undefined') return 0;
    
    try {
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && !src.startsWith('data:')) {
          // This is a rough estimate - in a real implementation,
          // you'd fetch the actual file size
          totalSize += 50 * 1024; // 50KB estimate per script
        }
      });
      
      return totalSize;
    } catch (error) {
      console.warn('Error estimating bundle size:', error);
      return 0;
    }
  }

  /**
   * Generate performance report
   */
  generateReport(): {
    metrics: PerformanceMetrics | null;
    suggestions: OptimizationSuggestion[];
    score: number;
  } {
    const suggestions = this.getOptimizationSuggestions();
    const score = this.calculatePerformanceScore();
    
    return {
      metrics: this.metrics,
      suggestions,
      score
    };
  }

  /**
   * Calculate performance score (0-100)
   */
  private calculatePerformanceScore(): number {
    if (!this.metrics) return 0;

    let score = 100;

    // LCP scoring
    if (this.metrics.largestContentfulPaint > 4000) score -= 30;
    else if (this.metrics.largestContentfulPaint > 2500) score -= 20;
    else if (this.metrics.largestContentfulPaint > 1500) score -= 10;

    // FID scoring
    if (this.metrics.firstInputDelay > 300) score -= 25;
    else if (this.metrics.firstInputDelay > 100) score -= 15;
    else if (this.metrics.firstInputDelay > 50) score -= 5;

    // CLS scoring
    if (this.metrics.cumulativeLayoutShift > 0.25) score -= 20;
    else if (this.metrics.cumulativeLayoutShift > 0.1) score -= 10;
    else if (this.metrics.cumulativeLayoutShift > 0.05) score -= 5;

    return Math.max(0, score);
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();