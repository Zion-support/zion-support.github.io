/**
 * Analytics tracking utility
 * Provides methods for tracking user interactions and events
 */

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

class Analytics {
  private enabled: boolean = typeof window !== 'undefined';
  private events: AnalyticsEvent[] = [];

  /**
   * Track a page view
   */
  trackPageView(path: string): void {
    if (!this.enabled) return;

    try {
      // In production, integrate with your analytics service (GA, Mixpanel, etc.)
      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics] Page view:', path);
      }

      this.events.push({
        category: 'pageview',
        action: 'view',
        label: path,
      });
    } catch (error) {
      console.error('[Analytics] Failed to track page view:', error);
    }
  }

  /**
   * Track a custom event
   */
  track(
    eventName: string,
    category: string,
    action: string,
    label?: string,
    value?: number
  ): void {
    if (!this.enabled) return;

    try {
      const event: AnalyticsEvent = {
        category,
        action,
        label: label || eventName,
        value,
      };

      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics] Event:', event);
      }

      this.events.push(event);

      // Send to analytics service in production
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    } catch (error) {
      console.error('[Analytics] Failed to track event:', error);
    }
  }

  /**
   * Track an error
   */
  trackError(error: Error, context?: Record<string, any>): void {
    this.track('error', 'error', error.message, JSON.stringify(context));
  }

  /**
   * Get all tracked events (for debugging)
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Clear all tracked events
   */
  clearEvents(): void {
    this.events = [];
  }
}

export const analytics = new Analytics();
export default analytics;