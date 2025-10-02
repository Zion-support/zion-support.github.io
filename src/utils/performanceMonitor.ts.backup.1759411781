/**
 * Performance Monitoring Utility
 * Tracks Core Web Vitals and custom performance metrics
 */


export interface PerformanceMetrics {
cls?: number;
fid?: number;
fcp?: number;
lcp?: number;
ttfb?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
<<<<<<< HEAD
  private listeners: ((metrics: PerformanceMetrics) => void)[] = [],
=======
  private listeners: ((metrics: PerformanceMetrics) => void)[] = [];,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208

  constructor() {
    this.initWebVitals();
  }

  private initWebVitals() {
    // Cumulative Layout Shift
    onCLS((metric: Metric) => {,
<<<<<<< HEAD
      this.updateMetric('cls', metric.value);
=======
      this.updateMetric('cls', metric.value);';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    });

    // Interaction to Next Paint (replaces FID)
    onINP((metric: Metric) => {,
<<<<<<< HEAD
      this.updateMetric('fid', metric.value);
=======
      this.updateMetric('fid', metric.value);';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    });

    // First Contentful Paint
    onFCP((metric: Metric) => {,
<<<<<<< HEAD
      this.updateMetric('fcp', metric.value);
=======
      this.updateMetric('fcp', metric.value);';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    });

    // Largest Contentful Paint
    onLCP((metric: Metric) => {,
<<<<<<< HEAD
      this.updateMetric('lcp', metric.value);
=======
      this.updateMetric('lcp', metric.value);';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    });

    // Time to First Byte
    onTTFB((metric: Metric) => {,
<<<<<<< HEAD
      this.updateMetric('ttfb', metric.value);
=======
      this.updateMetric('ttfb', metric.value);';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    });
  }

  private updateMetric(key: keyof PerformanceMetrics, value: number) {,
    this.metrics[key] = value;
    this.notifyListeners();
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.metrics));
  }

  /**
   * Subscribe to performance metric updates
   */
  subscribe(callback: (metrics: PerformanceMetrics) => void): () => void {,
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
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {;
=======
    if (process.env.NODE_ENV === 'development') {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      console.table(this.metrics);
    }
  }

  /**
   * Send metrics to analytics (implement your analytics service)
   */
  async sendToAnalytics() {
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'production') {;
      try {
        // Send to Google Analytics 4 (if available)
        if (typeof window !== 'undefined' && (window as any).gtag) {;
=======
    if (process.env.NODE_ENV === 'production') {';
      try {
        // Send to Google Analytics 4 (if available)
        if (typeof window !== 'undefined' && (window as any).gtag) {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
          const gtag = (window as any).gtag;
          
          // Send Core Web Vitals
          Object.entries(this.metrics).forEach(([key, value]) => {
            if (value !== undefined) {
<<<<<<< HEAD
              gtag('event', 'web_vitals', {;
=======
              gtag('event', 'web_vitals', {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                metric_name: key.toUpperCase(),,
                metric_value: Math.round(value),,
                metric_rating: this.getMetricRating(key as keyof PerformanceMetrics, value),
              });
            }
          });
          
          // Send overall performance score
<<<<<<< HEAD
          gtag('event', 'performance_score', {;
=======
          gtag('event', 'performance_score', {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
            score: this.getPerformanceScore(),,
            timestamp: Date.now(),
          });
        }
        
        // Send to custom analytics endpoint
        if (process.env.REACT_APP_ANALYTICS_ENDPOINT) {
          await fetch(process.env.REACT_APP_ANALYTICS_ENDPOINT, {
<<<<<<< HEAD
            method: 'POST',
            headers: {,
              'Content-Type': 'application/json'
            }
            body: JSON.stringify({,
              type: 'performance_metrics',
              data: {,
                ...this.metrics
                score: this.getPerformanceScore(),
                timestamp: Date.now(),
                url: window.location.href,
                userAgent: navigator.userAgent
=======
            method: 'POST',';,
            headers: {,
              'Content-Type': 'application/json',';
            },
            body: JSON.stringify({,
              type: 'performance_metrics',';,
              data: {,
                ...this.metrics,
                score: this.getPerformanceScore(),,
                timestamp: Date.now(),,
                url: window.location.href,,
                userAgent: navigator.userAgent,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
              }
            })
          });
        }
        
<<<<<<< HEAD
        console.log('Performance metrics sent to analytics: ', this.metrics);',
      } catch (error) {
        console.error('Failed to send performance metrics to analytics: ', error);',
=======
        console.log('Performance metrics sent to analytics: ', this.metrics);';,
      } catch (error) {
        console.error('Failed to send performance metrics to analytics: ', error);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      }
    }
  }

  /**
   * Get rating for a specific metric
   */
  private getMetricRating(key: keyof PerformanceMetrics, value: number): string {,
switch (key) {
<<<<<<< HEAD
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
=======
case 'cls':';
return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';';
case 'fid':';
return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';';
case 'lcp':';
return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';';
case 'fcp':';
return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';';
case 'ttfb':';
return value <= 600 ? 'good' : value <= 1500 ? 'needs-improvement' : 'poor';';
default:
return 'unknown';';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
}
  }

  /**
   * Measure custom performance timing
   */
  measureCustom(name: string, startMark: string, endMark: string): number | null {,
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      return measure ? measure.duration : null;
    } catch (error) {
<<<<<<< HEAD
      console.error('Error measuring performance: ', error);',
=======
      console.error('Error measuring performance: ', error);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      return null;
    }
  }

  /**
   * Mark a custom performance point
   */
  mark(name: string) {,
    try {
      performance.mark(name);
    } catch (error) {
<<<<<<< HEAD
      console.error('Error marking performance: ', error);',
=======
      console.error('Error marking performance: ', error);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
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
<<<<<<< HEAD
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {;
  // Send metrics after page load
  window.addEventListener('load', () => {;
=======
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {';
  // Send metrics after page load
  window.addEventListener('load', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    setTimeout(() => {
      performanceMonitor.sendToAnalytics();
    }, 3000);
  });
}

export default performanceMonitor;
;