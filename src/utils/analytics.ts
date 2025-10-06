/**
 * Enhanced Analytics Utility
 * Comprehensive analytics tracking and reporting
 */

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string | undefined;
  value?: number | undefined;
  custom_parameters?: Record<string, any> | undefined;
}

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
}

class Analytics {
  private static instance: Analytics;
  private eventQueue: AnalyticsEvent[] = [];
  private performanceMetrics: PerformanceMetric[] = [];
  private maxQueueSize = 100;

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  /**
   * Track a custom event
   */
  track(event: string, category: string, action: string, label?: string, value?: number, customParams?: Record<string, any>): void {
    const analyticsEvent: AnalyticsEvent = {
      action,
      category,
      label,
      value,
      custom_parameters: {
        event_name: event,
        timestamp: Date.now(),
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
        ...customParams
      }
    };

    this.addToQueue(analyticsEvent);
    this.logEvent(analyticsEvent);
  }

  /**
   * Track page view
   */
  trackPageView(page: string): void {
    this.track('page_view', 'navigation', 'view', page);
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page
      });
    }
  }

  /**
   * Track performance metrics
   */
  trackPerformance(name: string, value: number, unit: string = 'ms'): void {
    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: Date.now()
    };

    this.performanceMetrics.push(metric);
    
    // Keep only recent metrics
    if (this.performanceMetrics.length > this.maxQueueSize) {
      this.performanceMetrics.shift();
    }

    // Send to analytics
    this.track('performance_metric', 'performance', 'measure', name, value);
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, value?: number): void {
    this.track('user_interaction', 'engagement', action, element, value);
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: string): void {
    this.track('error', 'error', 'occurred', context, undefined, {
      error_message: error.message,
      error_stack: error.stack,
      error_name: error.name
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionType: string, value?: number): void {
    this.track('conversion', 'conversion', 'completed', conversionType, value);
  }

  /**
   * Add event to queue
   */
  private addToQueue(event: AnalyticsEvent): void {
    this.eventQueue.push(event);
    
    // Keep queue size manageable
    if (this.eventQueue.length > this.maxQueueSize) {
      this.eventQueue.shift();
    }
  }

  /**
   * Log event to console and external service
   */
  private logEvent(event: AnalyticsEvent): void {
    // Console logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }

    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_map: event.custom_parameters
      });
    }
  }

  /**
   * Get analytics statistics
   */
  getStats(): {
    totalEvents: number;
    eventsByCategory: Record<string, number>;
    performanceMetrics: PerformanceMetric[];
    recentEvents: AnalyticsEvent[];
  } {
    const eventsByCategory = this.eventQueue.reduce((acc, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalEvents: this.eventQueue.length,
      eventsByCategory,
      performanceMetrics: this.performanceMetrics.slice(-20), // Last 20 metrics
      recentEvents: this.eventQueue.slice(-10) // Last 10 events
    };
  }

  /**
   * Clear analytics data
   */
  clearData(): void {
    this.eventQueue = [];
    this.performanceMetrics = [];
  }
}

// Export singleton instance
export const analytics = Analytics.getInstance();

export default analytics;