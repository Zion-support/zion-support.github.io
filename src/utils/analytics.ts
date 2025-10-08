/**
 * Analytics and Tracking Utility
 * Provides comprehensive analytics tracking for the application
 */
export interface AnalyticsEvent {
  name: string;
  category: string;
  action?: string;
  label?: string;
  value?: number;
  properties?: Record<string, unknown>;
  timestamp: number;
}

export interface UserProperties {
  userId?: string;
  sessionId: string;
  userAgent: string;
  language: string;
  timezone: string;
  referrer?: string;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private userProperties: UserProperties;
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.userProperties = this.initializeUserProperties();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeUserProperties(): UserProperties {
    if (typeof window === 'undefined') {
      return {
        sessionId: this.sessionId,
        userAgent: 'server',
        language: 'en',
        timezone: 'UTC',
      };
    }

    return {
      sessionId: this.sessionId,
      userAgent: window.navigator.userAgent,
      language: window.navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer || undefined,
    };
  }

  track(
    name: string,
    category: string,
    action?: string,
    label?: string,
    value?: number,
    properties?: Record<string, unknown>
  ): void {
    const event: AnalyticsEvent = {
      name,
      category,
      action,
      label,
      value,
      properties,
      timestamp: Date.now(),
    };

    this.events.push(event);
  }

  /**
   * Track user interaction
   */
  trackInteraction(
    element: string,
    action: string,
    category: string = 'user_interaction'
  ): void {
    this.track('interaction', category, action, element);
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metric: string, value: number, unit: string = 'ms'): void {
    this.track('performance', 'metrics', metric, unit, value);
  }

  /**
   * Track business events
   */
  trackBusiness(
    event: string,
    value?: number,
    properties?: Record<string, unknown>
  ): void {
    this.track(event, 'business', 'event', undefined, value, properties);
  }

  /**
   * Send event to analytics service
   */
  private async sendToAnalytics(event: AnalyticsEvent): Promise<void> {
    // Implementation for sending to analytics service
    // console.log('Analytics event:', event);
  }

  /**
   * Get all events
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Clear all events
   */
  clearEvents(): void {
    this.events = [];
  }

  /**
   * Update user properties
   */
  updateUserProperties(properties: Partial<UserProperties>): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }
}

const analytics = new Analytics();
export { analytics };
export default analytics;
