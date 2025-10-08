/**
 * Analytics utility for tracking user interactions and events
 */

interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private userProperties: Record<string, any> = {};

  /**
   * Track an event
   */
  track(
    name: string,
    category: string,
    action: string,
    label?: string,
    value?: number
  ): void {
    const event: AnalyticsEvent = {
      name,
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
    };

    this.events.push(event);

    // Send to analytics service (placeholder)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }

  /**
   * Track page view
   */
  pageView(path: string, title?: string): void {
    this.track('page_view', 'navigation', 'view', path);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
        page_title: title,
      });
    }
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: Record<string, any>): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }

  /**
   * Get all tracked events
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Get events by category
   */
  getEventsByCategory(category: string): AnalyticsEvent[] {
    return this.events.filter(event => event.category === category);
  }

  /**
   * Clear all events
   */
  clearEvents(): void {
    this.events = [];
  }

  /**
   * Get user properties
   */
  getUserProperties(): Record<string, any> {
    return { ...this.userProperties };
  }

  /**
   * Update user properties
   */
  updateUserProperties(properties: Record<string, any>): void {
    this.setUserProperties(properties);
  }
}

const analytics = new Analytics();

export default analytics;
export { Analytics, type AnalyticsEvent };
