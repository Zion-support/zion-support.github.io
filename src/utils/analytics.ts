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
      timestamp: Date.now(),
    };

    if (action) event.action = action;
    if (label) event.label = label;
    if (value !== undefined) event.value = value;
    if (properties) event.properties = properties;

    this.events.push(event);
  }

  trackPageView(page: string, title?: string): void {
    this.track('page_view', 'navigation', 'view', page, undefined, {
      page_title: title || (typeof document !== 'undefined' ? document.title : ''),
      page_url: typeof window !== 'undefined' ? window.location.href : page,
    });
  }

  trackInteraction(
    element: string,
    action: string,
    category: string = 'user_interaction'
  ): void {
    this.track('interaction', category, action, element);
  }

  trackPerformance(metric: string, value: number, unit?: string): void {
    this.track('performance', 'metrics', metric, unit, value);
  }

  trackBusinessEvent(
    event: string,
    value?: number,
    properties?: Record<string, unknown>
  ): void {
    this.track(event, 'business', 'event', undefined, value, properties);
  }

  sendEvent(event: AnalyticsEvent): void {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', event.name, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.properties,
      });
    }
  }

  getAllEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  getEventsByCategory(category: string): AnalyticsEvent[] {
    return this.events.filter(event => event.category === category);
  }

  clearEvents(): void {
    this.events = [];
  }

  getUserProperties(): UserProperties {
    return { ...this.userProperties };
  }

  updateUserProperties(properties: Partial<UserProperties>): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }
}

const analytics = new Analytics();

export default analytics;