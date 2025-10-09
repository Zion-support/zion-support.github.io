'use client';
/**
 * Performance Reporter;
 * Comprehensive performance monitoring and reporting;
 */
import React from 'react'
export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}
export interface PerformanceReport {
  metrics: PerformanceMetric[];
  navigation?: PerformanceNavigationTiming;
  resources?: PerformanceResourceTiming[];
  timestamp: number;
  userAgent: string;
  url: string;
}
class PerformanceReporter {
  private metrics: PerformanceMetric[] = []
  private reportingInterval?: NodeJS.Timeout;
  private isEnabled: boolean = false;
  /**
   * Initialize performance monitoring;
   */
  init(config?: { enabled?: boolean; reportInterval?: number }): void {
    if (typeof window === 'undefined') {
      return;
    }
    this.isEnabled = config?.enabled ?? process.env['NODE_ENV'] === 'production'
    if (!this.isEnabled) {
      return;
    }
    // Monitor Core Web Vitals;
    this.monitorWebVitals()
    // Monitor navigation timing;
    this.monitorNavigationTiming()
    // Monitor resource timing;
    this.monitorResourceTiming()
    // Setup periodic reporting;
    if (config?.reportInterval) {
      this.reportingInterval = setInterval(() => {
        this.report()
      }, config.reportInterval)
    }
    // Report on page unload;
    window.addEventListener('beforeunload', () => {
      this.report()
    })
  }
  /**
   * Monitor Core Web Vitals using PerformanceObserver;
   */
  private monitorWebVitals(): void {
    if (typeof PerformanceObserver === 'undefined') {
      return;
    }
    try {
      // Largest Contentful Paint (LCP)
      const _lcpObserver = new PerformanceObserver((entryList) => {
        const _entries = entryList.getEntries()
        const _lastEntry = entries[entries.length - 1]
        if (lastEntry && 'renderTime' in lastEntry) {
          const _value = (lastEntry as PerformanceEntry & { renderTime?: number; loadTime?: number }).renderTime || 
                       (lastEntry as PerformanceEntry & { renderTime?: number; loadTime?: number }).loadTime || 0;
          this.addMetric('LCP', value, this.getRating('lcp', value));
        }
      })
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
      // First Input Delay (FID)
                  this.addMetric('FID', value, this.getRating('fid', value));
          }
        })
      })
      fidObserver.observe({ type: 'first-input', buffered: true })
      // Cumulative Layout Shift (CLS)
          this.metrics.push(metric)
    // Log poor performing metrics;
    if (rating === 'poor') {
      logger.warn(`Poor ${name} performance`, { value, rating })
    }
    // Send to analytics;
    this.sendToAnalytics(metric)
  }
  /**
   * Get performance rating based on thresholds;
   */
  private getRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: Record<string, { good: number; poor: number }> = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      fcp: { good: 1800, poor: 3000 },
      ttfb: { good: 800, poor: 1800 },
      dcl: { good: 1000, poor: 3000 },
      load: { good: 2000, poor: 4000 }
    }
    const _threshold = thresholds[metric.toLowerCase()]
    if (!threshold) {
      return 'good'
    }
    if (value <= threshold.good) {
      return 'good'
    }
    if (value <= threshold.poor) {
      return 'needs-improvement'
    }
    return 'poor'
  }
  /**
   * Send metric to analytics;
   */
  private sendToAnalytics(metric: PerformanceMetric): void {
    if (typeof window === 'undefined') {
      return;
    }
    // Google Analytics;
    if (typeof gtag === 'function') {
      gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.value),
        event_label: metric.rating,
        non_interaction: true;
      })
    }
  }
  /**
   * Generate performance report;
   */
  private generateReport(): PerformanceReport | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    const _navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const _resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
    return {
      metrics: this.metrics,
      navigation,
      resources: resources.slice(0, 50), // Limit to 50 resources;
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href;
    }
  }
  /**
   * Report performance data;
   */
  report(): void {
    if (!this.isEnabled) {
      return;
    }
    const _report = this.generateReport()
    if (!report) {
      return;
    }
    logger.info('Performance Report', {
      metrics: report.metrics,
      navigation: {
        ttfb: report.navigation?.responseStart ? 
          report.navigation.responseStart - report.navigation.requestStart : null,
        domContentLoaded: report.navigation?.domContentLoadedEventEnd ?
          report.navigation.domContentLoadedEventEnd - report.navigation.domContentLoadedEventStart : null;
      }
    })
    // Send to remote endpoint if configured;
    // this.sendToEndpoint(report)
  }
  /**
   * Cleanup and stop reporting;
   */
  destroy(): void {
    if (this.reportingInterval) {
      clearInterval(this.reportingInterval)
    }
    this.metrics = []
  }
}
// Export singleton instance;
export const _performanceReporter = new PerformanceReporter()
// Auto-initialize in browser;
if (typeof window !== 'undefined') {
  performanceReporter.init({
    enabled: process.env['NODE_ENV'] === 'production',
    reportInterval: 60000, // Report every minute;
  })
}
export default performanceReporter;