/**
 * Performance Monitoring Utility
 * Tracks Core Web Vitals and custom performance metrics
 */

import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

export interface PerformanceMetrics {
  cls?: number;
  fid?: number;
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

    // Interaction to Next Paint (replaces FID)
    onINP((metric: Metric) => {
      this.updateMetric('fid', metric.value);
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
  async sendToAnalytics() {
    if (process.env.NODE_ENV === 'production') {
      try {
        // Send to Google Analytics 4 (if available)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          const gtag = (window as any).gtag;
          
          // Send Core Web Vitals
          Object.entries(this.metrics).forEach(([key, value]) => {
            if (value !== undefined) {
              gtag('event', 'web_vitals', {
                metric_name: key.toUpperCase(),
                metric_value: Math.round(value),
                metric_rating: this.getMetricRating(key as keyof PerformanceMetrics, value)
              });
            }
          });
          
          // Send overall performance score
          gtag('event', 'performance_score', {
            score: this.getPerformanceScore(),
            timestamp: Date.now()
          });
        }
        
        // Send to custom analytics endpoint
        if (process.env.REACT_APP_ANALYTICS_ENDPOINT) {
          await fetch(process.env.REACT_APP_ANALYTICS_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'performance_metrics',
              data: {
                ...this.metrics,
                score: this.getPerformanceScore(),
                timestamp: Date.now(),
                url: window.location.href,
                userAgent: navigator.userAgent
              }
            })
          });
        }
        
        console.log('Performance metrics sent to analytics:', this.metrics);
      } catch (error) {
        console.error('Failed to send performance metrics to analytics:', error);
      }
    }
  }

  /**
   * Get rating for a specific metric
   */
  private getMetricRating(key: keyof PerformanceMetrics, value: number): string {
    switch (key) {
      case 'cls':
        return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
      case 'fid':
        return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      case 'lcp':
        return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      case 'fcp':
        return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
      case 'ttfb':
        return value <= 600 ? 'good' : value <= 1500 ? 'needs-improvement' : 'poor';
      default:
        return 'unknown';
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
    const { cls, fid, lcp, fcp, ttfb } = this.metrics;
    
    let score = 100;
    
    // Deduct points for poor metrics
    if (cls && cls > 0.1) score -= 20; // Poor CLS
    if (fid && fid > 100) score -= 20; // Poor FID
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
