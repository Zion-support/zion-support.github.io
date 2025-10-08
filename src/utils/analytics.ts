/**
 * Analytics utilities
 */

export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private userProperties: Record<string, unknown> = {};

  /**
   * Track an event
   */
  track(
    action: string,
    category: string,
    label?: string,
    metadata?: Record<string, unknown>,
    value?: number
  ): void {
    const event: AnalyticsEvent = {
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
    };

    this.events.push(event);

    // Send to analytics service if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: (command: string, action: string, params: Record<string, unknown>) => void }).gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
        ...metadata,
      });
    }
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: Record<string, unknown>): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }

  /**
   * Get all events
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
  getUserProperties(): Record<string, unknown> {
    return { ...this.userProperties };
  }
}

// Export singleton instance
export const analytics = new Analytics();
export default analytics;
