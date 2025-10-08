/**
 * Analytics utilities for tracking user interactions and events
 */

interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

class Analytics {
  private enabled: boolean;
  private userProperties: Record<string, unknown> = {};

  constructor() {
    this.enabled = typeof window !== 'undefined' && process.env['NODE_ENV'] === 'production';
  }

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
    if (!this.enabled) {
      console.log('Analytics (dev):', { name, category, action, label, value });
      return;
    }

    const event: AnalyticsEvent = {
      name,
      category,
      action,
      label,
      value,
    };

    // Send to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', name, {
        event_category: category,
        event_action: action,
        event_label: label,
        value: value,
      });
    }
  }

  /**
   * Track page view
   */
  pageView(path: string): void {
    if (!this.enabled) {
      console.log('Analytics (dev): Page view:', path);
      return;
    }

    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', 'page_view', {
        page_path: path,
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
   * Get user properties
   */
  getUserProperties(): Record<string, unknown> {
    return { ...this.userProperties };
  }

  /**
   * Update user properties
   */
  updateUserProperties(properties: Record<string, unknown>): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }
}

export const analytics = new Analytics();
export default analytics;