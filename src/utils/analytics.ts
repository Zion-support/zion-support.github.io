/**
 * Analytics utilities for tracking user interactions and performance
 */

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

class Analytics {
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = typeof window !== 'undefined' && process.env.NODE_ENV === 'production';
  }

  /**
   * Track a custom event
   */
  track(event: AnalyticsEvent): void {
    if (!this.isEnabled) {
      console.log('Analytics event:', event);
      return;
    }

    try {
      // Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          ...event.custom_parameters,
        });
      }

      // Custom analytics endpoint
      this.sendToAnalytics(event);
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  /**
   * Track page view
   */
  pageView(page: string, title?: string): void {
    this.track({
      action: 'page_view',
      category: 'navigation',
      label: page,
      custom_parameters: {
        page_title: title || document.title,
        page_location: window.location.href,
      },
    });
  }

  /**
   * Track user interaction
   */
  interaction(action: string, element: string, value?: number): void {
    this.track({
      action,
      category: 'interaction',
      label: element,
      value,
    });
  }

  /**
   * Track performance metrics
   */
  performance(metric: string, value: number, unit: string = 'ms'): void {
    this.track({
      action: 'performance',
      category: 'metrics',
      label: metric,
      value,
      custom_parameters: {
        unit,
      },
    });
  }

  /**
   * Track error events
   */
  error(error: string, fatal: boolean = false): void {
    this.track({
      action: 'error',
      category: 'exception',
      label: error,
      value: fatal ? 1 : 0,
    });
  }

  /**
   * Send data to analytics endpoint
   */
  private async sendToAnalytics(event: AnalyticsEvent): Promise<void> {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          url: window.location.href,
        }),
      });
    } catch (error) {
      console.error('Failed to send analytics data:', error);
    }
  }
}

// Export singleton instance
export const analytics = new Analytics();
export default analytics;
