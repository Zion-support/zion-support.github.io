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
  properties?: Record<string, any>;
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

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Initialize user properties
   */
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

  /**
   * Track an event
   */
  track(
    name: string,
    category: string,
    action?: string,
    label?: string,
    value?: number,
    properties?: Record<string, any>
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

    // Send to analytics service
    this.sendToAnalytics(event);

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
      console.log('Analytics event:', event);
    }
  }

  /**
   * Track page view
   */
  trackPageView(page: string, title?: string): void {
    this.track('page_view', 'navigation', 'view', page, undefined, {
      page_title: title || document.title,
      page_url: typeof window !== 'undefined' ? window.location.href : page,
    });
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
  trackPerformance(
    metric: string,
    value: number,
    unit: string = 'ms'
  ): void {
    this.track('performance', 'metrics', metric, unit, value);
  }

  /**
   * Track business events
   */
  trackBusinessEvent(
    event: string,
    value?: number,
    properties?: Record<string, any>
  ): void {
    this.track(event, 'business', 'event', undefined, value, properties);
  }

  /**
   * Send event to analytics service
   */
  private async sendToAnalytics(event: AnalyticsEvent): Promise<void> {
    try {
      // In a real application, you would send to services like Google Analytics, Mixpanel, etc.
      // For now, we'll just log to console
      console.log('Analytics event sent:', event);
    } catch (err) {
      console.error('Failed to send analytics event:', err);
    }
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
  getUserProperties(): UserProperties {
    return { ...this.userProperties };
  }

  /**
   * Update user properties
   */
  updateUserProperties(properties: Partial<UserProperties>): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }
}

// Create singleton instance
export const analytics = new Analytics();

export default analytics;