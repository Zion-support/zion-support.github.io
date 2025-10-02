/**
 * Improved Analytics Utility
 * Enhanced analytics tracking with better performance and privacy
 */

interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
  timestamp?: number;
}

interface UserProperties {
  userId?: string;
  sessionId: string;
  userAgent: string;
  language: string;
  timezone: string;
  referrer?: string;
  page: string;
}

class ImprovedAnalytics {
  private sessionId: string;
  private userId?: string;
  private events: AnalyticsEvent[] = [];
  private isEnabled: boolean;
  private batchSize: number = 10;
  private flushInterval: number = 30000; // 30 seconds
  private flushTimer?: NodeJS.Timeout;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.isEnabled = this.shouldEnableAnalytics();
    this.initialize();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private shouldEnableAnalytics(): boolean {
    // Check for Do Not Track
    if (navigator.doNotTrack === '1') {
      return false;
    }

    // Check for privacy mode
    if (navigator.cookieEnabled === false) {
      return false;
    }

    // Check for consent (GDPR compliance)
    const consent = localStorage.getItem('analytics-consent');
    return consent === 'true';
  }

  private initialize(): void {
    if (!this.isEnabled) {
      return;
    }

    // Set up automatic flushing
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.flushInterval);

    // Flush on page unload
    window.addEventListener('beforeunload', () => {
      this.flush();
    });

    // Track page view
    this.trackPageView();
  }

  private getUserProperties(): UserProperties {
    return {
      userId: this.userId,
      sessionId: this.sessionId,
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer,
      page: window.location.pathname
    };
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public trackPageView(page?: string): void {
    if (!this.isEnabled) return;

    const pageName = page || window.location.pathname;
    
    this.track({
      name: 'page_view',
      category: 'navigation',
      action: 'view',
      label: pageName,
      properties: {
        url: window.location.href,
        title: document.title,
        referrer: document.referrer
      }
    });
  }

  public trackEvent(
    name: string,
    category: string,
    action: string,
    label?: string,
    value?: number,
    properties?: Record<string, any>
  ): void {
    if (!this.isEnabled) return;

    this.track({
      name,
      category,
      action,
      label,
      value,
      properties
    });
  }

  public trackConversion(
    conversionId: string,
    value?: number,
    currency?: string,
    properties?: Record<string, any>
  ): void {
    if (!this.isEnabled) return;

    this.track({
      name: 'conversion',
      category: 'conversion',
      action: 'complete',
      label: conversionId,
      value,
      properties: {
        ...properties,
        currency: currency || 'USD'
      }
    });
  }

  public trackError(
    error: Error,
    context?: string,
    properties?: Record<string, any>
  ): void {
    if (!this.isEnabled) return;

    this.track({
      name: 'error',
      category: 'error',
      action: 'occurred',
      label: error.message,
      properties: {
        ...properties,
        context,
        stack: error.stack,
        url: window.location.href
      }
    });
  }

  public trackPerformance(
    metric: string,
    value: number,
    properties?: Record<string, any>
  ): void {
    if (!this.isEnabled) return;

    this.track({
      name: 'performance',
      category: 'performance',
      action: 'measure',
      label: metric,
      value,
      properties
    });
  }

  private track(event: AnalyticsEvent): void {
    const enrichedEvent: AnalyticsEvent = {
      ...event,
      timestamp: Date.now(),
      properties: {
        ...event.properties,
        ...this.getUserProperties()
      }
    };

    this.events.push(enrichedEvent);

    // Flush if batch size reached
    if (this.events.length >= this.batchSize) {
      this.flush();
    }
  }

  public flush(): void {
    if (!this.isEnabled || this.events.length === 0) {
      return;
    }

    const eventsToSend = [...this.events];
    this.events = [];

    // Send events to analytics service
    this.sendEvents(eventsToSend);
  }

  private async sendEvents(events: AnalyticsEvent[]): Promise<void> {
    try {
      const payload = {
        events,
        sessionId: this.sessionId,
        userId: this.userId,
        timestamp: Date.now()
      };

      // Send to analytics endpoint
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log(`Analytics: Sent ${events.length} events`);
    } catch (error) {
      console.error('Analytics: Failed to send events', error);
      // Re-add events to queue for retry
      this.events.unshift(...events);
    }
  }

  public enable(): void {
    this.isEnabled = true;
    localStorage.setItem('analytics-consent', 'true');
    this.initialize();
  }

  public disable(): void {
    this.isEnabled = false;
    localStorage.setItem('analytics-consent', 'false');
    
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public getEventCount(): number {
    return this.events.length;
  }
}

// Create singleton instance
const analytics = new ImprovedAnalytics();

// Export convenience functions
export const trackPageView = (page?: string) => analytics.trackPageView(page);
export const trackEvent = (
  name: string,
  category: string,
  action: string,
  label?: string,
  value?: number,
  properties?: Record<string, any>
) => analytics.trackEvent(name, category, action, label, value, properties);

export const trackConversion = (
  conversionId: string,
  value?: number,
  currency?: string,
  properties?: Record<string, any>
) => analytics.trackConversion(conversionId, value, currency, properties);

export const trackError = (
  error: Error,
  context?: string,
  properties?: Record<string, any>
) => analytics.trackError(error, context, properties);

export const trackPerformance = (
  metric: string,
  value: number,
  properties?: Record<string, any>
) => analytics.trackPerformance(metric, value, properties);

export const setUserId = (userId: string) => analytics.setUserId(userId);
export const enableAnalytics = () => analytics.enable();
export const disableAnalytics = () => analytics.disable();
export const flushAnalytics = () => analytics.flush();

export default analytics;