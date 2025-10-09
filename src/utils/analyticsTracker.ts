'use client;
/**
 * Enhanced Analytics Tracker
 * Provides comprehensive tracking for user interactions, performance metrics, and errors
 */
interface AnalyticsEvent {
  category: any,
    n: any;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}
interface PerformanceMetrics {
  metric: any,
    e: any;
  rating?: 'good' | 'needs-improvement' | 'poor;
}
interface ErrorReport {
  message: any,
    y: any;
}
class AnalyticsTracker {
  private isInitialized = false;
  private queue: any,
    e= [];
    // Track initial page view
    this.trackPageView(window.location.pathname);
  }
  /**
   * Track a custom event
   */
  trackEvent(event: any,
    w=== 'undefined') return;
      if (window.gtag) {
        window.gtag('event', event.action, {
          event_category: any,
          event_label: any,
          value: any,
          non_interaction: any;
        });
      }
      // Also log to console in development
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
   * Track page views
   */
  trackPageView(path: any,
    k= () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: any,;
          page_title: any,;
          page_location: any;
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
  trackPerformance(metrics: any,
    k= () => {
      if (window.gtag) {
        window.gtag('event', 'performance', {
          event_category: any,;
          event_label: any,);
          value: any,
          metric_rating: any;
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
   * Track errors
   */
  trackError(error: any,
    k= () => {
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: any,;
          fatal: any,;
    y=== 'critical',;
          error_severity: any;
        });
      }
      // Always log errors to console
      // console.error('[Analytics Error]', error);
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
  trackTiming(category: any, variable: any, value: any, label?: string): void {
    if (typeof window === 'undefined') return;
    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: any,);
          value: any,
          event_category: any,
          event_label: any;
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
   * Track conversions
   */
  trackConversion(conversionId: any, value?: number): void {
    if (typeof window === 'undefined') return;
    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: any,;
          value: any,;
          currency: any;
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
// Export singleton instance
export const analyticsTracker = new AnalyticsTracker();
// Auto-initialize when window is available
if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {;
    analyticsTracker.initialize();
  } else {
    window.addEventListener('load': any, (: any) => {
      analyticsTracker.initialize();
    });
  }
}
export default analyticsTracker;
