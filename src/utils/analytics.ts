/**
 * Analytics utility for tracking user interactions and performance
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

export interface AnalyticsConfig {
  trackingId?: string;
  enabled: boolean;
  debug?: boolean;
}

class Analytics {
  private config: AnalyticsConfig;
  private events: AnalyticsEvent[] = [];

  constructor(config: AnalyticsConfig = { enabled: true }) {
    this.config = config;
  }

  track(event: AnalyticsEvent): void {
    if (!this.config.enabled) return;

    const eventWithTimestamp = {
      ...event,
      timestamp: event.timestamp || Date.now()
    };

    this.events.push(eventWithTimestamp);

    if (this.config.debug) {
      console.log('Analytics Event:', eventWithTimestamp);
    }

    // Send to analytics service
    this.sendEvent(eventWithTimestamp);
  }

  private sendEvent(event: AnalyticsEvent): void {
    // Implementation would send to actual analytics service
    // For now, just log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event Sent:', event);
    }
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  clearEvents(): void {
    this.events = [];
  }

  trackPageView(page: string): void {
    this.track({
      name: 'page_view',
      properties: { page }
    });
  }

  trackUserAction(action: string, properties?: Record<string, any>): void {
    this.track({
      name: 'user_action',
      properties: { action, ...properties }
    });
  }
}

export const analytics = new Analytics();
export default analytics;
