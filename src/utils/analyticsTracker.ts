'use client';
/**
 * Enhanced Analytics Tracker;
 * Provides comprehensive tracking for user interactions, performance metrics, and errors;
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
   * Initialize the analytics tracker;
   */
  initialize(): void {
    if (typeof window === 'undefined') return;
    this.isInitialized = true;
    // Process queued events;
    this.queue.forEach(fn => fn());
    this.queue = [];
    // Track initial page view;
    this.trackPageView(window.location.pathname);
  }
  /**
   * Track a custom event;
   */
  trackEvent(event: AnalyticsEvent): void {
    if (typeof window === 'undefined') return;
          }
      // Also log to console in development;
      if (process.env.NODE_ENV === 'development') {
        }
    }
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }
  /**
   * Track page views;
   */
  trackPageView(path: string): void {
    if (typeof window === 'undefined') return;
          }
      if (process.env.NODE_ENV === 'development') {
        }
    }
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }
  /**
   * Track performance metrics;
   */
  trackPerformance(metrics: PerformanceMetrics): void {
    if (typeof window === 'undefined') return;
          }
      if (process.env.NODE_ENV === 'development') {
        }
    }
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }
  /**
   * Track errors;
   */
  trackError(error: ErrorReport): void {
    if (typeof window === 'undefined') return;
          }
      // Always log errors to console;
      // console.error('[Analytics Error]', error);
    }
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }
  /**
   * Track user timing;
   */
  trackTiming(category: string, variable: string, value: number, label?: string): void {
    if (typeof window === 'undefined') return;
          }
      if (process.env.NODE_ENV === 'development') {
        }
    }
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }
  /**
   * Track conversions;
   */
  trackConversion(conversionId: string, value?: number): void {
    if (typeof window === 'undefined') return;
          }
      if (process.env.NODE_ENV === 'development') {
        }
    }
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }
}
// Export singleton instance;
export // Auto-initialize when window is available;
if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    analyticsTracker.initialize();
  } else {
    window.addEventListener('load', () => {
      analyticsTracker.initialize();
    });
  }
}
export default analyticsTracker;
