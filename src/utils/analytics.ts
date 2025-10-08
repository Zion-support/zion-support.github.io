/**
 * Analytics utility for tracking events and performance
 */
export interface AnalyticsEvent {
  name: string;
  category: string;
  action?: string | undefined;
  label?: string | undefined;
  value?: number | undefined;
  properties?: Record<string, unknown> | undefined;
  timestamp: number;
}
export interface UserProperties {
  userId?: string | undefined;
  sessionId: string;
  userAgent: string;
  language: string;
  timezone: string;
  referrer?: string | undefined;
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
      referrer: document.referrer || '',
<<<<<<< HEAD
      referrer: document.referrer || '',
      referrer: document.referrer || undefined,
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 6c45f99dc7ca17bbf478e03055adf8e9c75097bc
    };
  }
  /**
   * Track an event
   */
  public track(
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
      action: action || '',
      label: label || undefined,
<<<<<<< HEAD
      value,
      properties,
      value: value || 0,
      properties: properties || {},
      action: action || undefined,
      label: label || undefined,
      value: value || undefined,
      properties: properties || undefined,
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
=======
      value: value || 0,
      properties: properties || {},
>>>>>>> 6c45f99dc7ca17bbf478e03055adf8e9c75097bc
      timestamp: Date.now(),
    };
    this.events.push(event);
    //Send to analytics service
    this.sendToAnalytics(event);
    //Log in development
    if (process.env.NODE_ENV === 'development') {
      //Analytics event logged
    }
  }
  /**
   * Track page view
   */public trackPageView(page: string, title?: string): void {
    this.track('page_view', 'navigation', 'view', page, undefined, {
      page_title: title || document.title,
      page_url: typeof window !== 'undefined' ? window.location.href : page,
    });
  }
  /**
   * Track user interaction
   */public trackInteraction(
    element: string,
  action: string,
    category: string = 'user_interaction'
  ): void {
    this.track('interaction', category, action, element);
  }
  /**
   * Track performance metrics
   */public trackPerformance(metric: string,
  value: number, unit: string = 'ms'): void {
    this.track('performance', 'metrics', metric, unit, value);
  }
  /**
   * Track business events
   */public trackBusinessEvent(
    event: string,
    value?: number,
    properties?: Record<string, unknown>
  ): void {
    this.track(event, 'business', 'event', undefined, value, properties);
  }
  /**
   * Send event to analytics service
   */private async sendToAnalytics(event: AnalyticsEvent): Promise<void> {
    try {
      //In a real application, you would send to services like Google Analytics, Mixpanel, etc.
      //For now, we'll just log to console
      //Analytics event sent
    } catch (err) {
      //Failed to send analytics event
    }
  }
  /**
   * Get all events
   */public getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }
  /**
   * Get events by category
   */public getEventsByCategory(category: string): AnalyticsEvent[] {
    return this.events.filter(event => event.category === category);
  }
  /**
   * Clear all events
   */public clearEvents(): void {
    this.events = [];
  }
  /**
   * Get user properties
   */public getUserProperties(): UserProperties {
    return { ...this.userProperties };
  }
  /**
   * Update user properties
   */public updateUserProperties(properties: Partial<UserProperties>): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }
}
//Create singleton instance
export const analytics = new Analytics();
export default analytics;

