'use client';
/**
 * Enhanced Analytics Tracker
 * Provides comprehensive tracking for user interactions, performance metrics, and errors
 */
interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

interface PerformanceMetrics {
  metric: string;
  value: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
}

interface ErrorReport {
  message: string;
  stack?: string;
  componentStack?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class AnalyticsTracker {
  private isInitialized = false;
  private queue: Array<() => void> = [];

  /**
   * Initialize the analytics tracker
   */
  initialize(): void {
    if (typeof window === 'undefined') return;
    this.isInitialized = true;
    // Process queued events
    this.queue.forEach(fn => fn());
    this.queue = [];
    // Track initial page view
    this.trackPageView(window.location.pathname);
  }

  /**
   * Track a custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    if (typeof window === 'undefined') return;
    const track = () => {
      if (window.gtag) {
        window.gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          non_interaction: event.nonInteraction
        });
      }
      if (process.env.NODE_ENV === 'development') {
        }
    };
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track page view
   */
  trackPageView(pagePath: string, pageTitle?: string): void {
    if (typeof window === 'undefined') return;
    const track = () => {
      if (window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: pagePath,
          page_title: pageTitle || document.title
        });
      }
      if (process.env.NODE_ENV === 'development') {
        }
    };
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metrics: PerformanceMetrics): void {
    if (typeof window === 'undefined') return;
    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'performance_metric', {
          event_category: 'Performance',
          event_label: metrics.metric,
          value: Math.round(metrics.value),
          custom_map: {
            metric_rating: metrics.rating || 'unknown'
          }
        });
      }
      if (process.env.NODE_ENV === 'development') {
        }
    };
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track user timing
   */
  trackTiming(category: string, variable: string, value: number, label?: string): void {
    if (typeof window === 'undefined') return;
    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: variable,
          value: Math.round(value),
          event_category: category,
          event_label: label
        });
      }
      if (process.env.NODE_ENV === 'development') {
        }
    };
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track error
   */
  trackError(error: ErrorReport): void {
    if (typeof window === 'undefined') return;
    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: error.severity === 'critical',
          custom_map: {
            error_severity: error.severity,
            error_stack: error.stack || '',
            component_stack: error.componentStack || ''
          }
        });
      }
      if (process.env.NODE_ENV === 'development') {
        }
    };
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track user engagement
   */
  trackEngagement(action: string, value?: number): void {
    this.trackEvent({
      category: 'Engagement',
      action,
      value,
      nonInteraction: false
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionId: string, value?: number, currency?: string): void {
    if (typeof window === 'undefined') return;
    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: conversionId,
          value,
          currency
        });
      }
      if (process.env.NODE_ENV === 'development') {
        }
    };
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }
}

// Singleton instance
const analyticsTracker = new AnalyticsTracker();

// Export functions
export const initializeAnalytics = () => analyticsTracker.initialize();
export const trackEvent = (event: AnalyticsEvent) => analyticsTracker.trackEvent(event);
export const trackPageView = (pagePath: string, pageTitle?: string) => analyticsTracker.trackPageView(pagePath, pageTitle);
export const trackPerformance = (metrics: PerformanceMetrics) => analyticsTracker.trackPerformance(metrics);
export const trackTiming = (category: string, variable: string, value: number, label?: string) => analyticsTracker.trackTiming(category, variable, value, label);
export const trackError = (error: ErrorReport) => analyticsTracker.trackError(error);
export const trackEngagement = (action: string, value?: number) => analyticsTracker.trackEngagement(action, value);
export const trackConversion = (conversionId: string, value?: number, currency?: string) => analyticsTracker.trackConversion(conversionId, value, currency);

export default analyticsTracker;