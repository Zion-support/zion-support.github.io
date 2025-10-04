/**
 * Performance Monitoring Utility
 * Tracks Core Web Vitals and custom performance metrics
 */

import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

export interface PerformanceMetrics {
  cls?: number;
  inp?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private listeners: ((metrics: PerformanceMetrics) => void)[] = [];

  constructor() {
    this.initWebVitals();
  }

  private initWebVitals() {
    // Cumulative Layout Shift
    onCLS((metric: Metric) => {
      this.updateMetric('cls', metric.value);
    });

    // Interaction to Next Paint
    onINP((metric: Metric) => {
      this.updateMetric('inp', metric.value);
    });

    // First Contentful Paint
    onFCP((metric: Metric) => {
      this.updateMetric('fcp', metric.value);
    });

    // Largest Contentful Paint
    onLCP((metric: Metric) => {
      this.updateMetric('lcp', metric.value);
    });

    // Time to First Byte
    onTTFB((metric: Metric) => {
      this.updateMetric('ttfb', metric.value);
    });
  }

  private updateMetric(key: keyof PerformanceMetrics, value: number) {
    this.metrics[key] = value;
    this.notifyListeners();
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.metrics));
  }

  /**
   * Subscribe to performance metric updates
   */
  subscribe(callback: (metrics: PerformanceMetrics) => void): () => void {
    this.listeners.push(callback);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  /**
   * Get current metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Log metrics to console (development only)
   */
  logMetrics() {
    if (process.env.NODE_ENV === 'development') {
      console.table(this.metrics);
    }
  }

  /**
   * Send metrics to analytics (implement your analytics service)
   */
  sendToAnalytics() {
    // Placeholder for analytics integration
    // Example: Google Analytics, Mixpanel, etc.
    if (process.env.NODE_ENV === 'production') {
      // Send metrics to your analytics service
      console.log('Performance metrics:', this.metrics);
    }
  }

  /**
   * Measure custom performance timing
   */
  measureCustom(name: string, startMark: string, endMark: string): number | null {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      return measure ? measure.duration : null;
    } catch (error) {
      console.error('Error measuring performance:', error);
      return null;
    }
  }

  /**
   * Mark a custom performance point
   */
  mark(name: string) {
    try {
      performance.mark(name);
    } catch (error) {
      console.error('Error marking performance:', error);
    }
  }

  /**
   * Get performance score (0-100)
   */
  getPerformanceScore(): number {
    const { cls, inp, lcp, fcp, ttfb } = this.metrics;
    
    let score = 100;
    
    // Deduct points for poor metrics
    if (cls && cls > 0.1) score -= 20; // Poor CLS
    if (inp && inp > 200) score -= 20; // Poor INP
    if (lcp && lcp > 2500) score -= 20; // Poor LCP
    if (fcp && fcp > 1800) score -= 20; // Poor FCP
    if (ttfb && ttfb > 600) score -= 20; // Poor TTFB
    
    return Math.max(0, score);
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Initialize monitoring in production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  // Send metrics after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.sendToAnalytics();
    }, 3000);
  });
}

export default performanceMonitor;
