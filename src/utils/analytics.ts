/**
 * Analytics and Tracking Utility
 * Provides comprehensive tracking for the application
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
  sessionId?: string;
  userAgent?: string;
  language?: string;
  timezone?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

export interface AnalyticsConfig {
  trackingId?: string;
  debug?: boolean;
  autoPageView?: boolean;
  enhancedEcommerce?: boolean;
  customDimensions?: Record<string, string>;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private userProperties: UserProperties = {};
  private config: AnalyticsConfig = {};

  constructor(config: AnalyticsConfig = {}) {
    this.config = {
      debug: false,
      autoPageView: true,
      enhancedEcommerce: false,
      ...config,
    };

    this.initializeUserProperties();
    
    if (this.config.autoPageView) {
      this.trackPageView();
    }
  }

  /**
   * Initialize user properties from browser
   */
  private initializeUserProperties(): void {
    if (typeof window === 'undefined') return;

    this.userProperties = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer,
    };

    // Extract UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    this.userProperties.utmSource = urlParams.get('utm_source') || undefined;
    this.userProperties.utmMedium = urlParams.get('utm_medium') || undefined;
    this.userProperties.utmCampaign = urlParams.get('utm_campaign') || undefined;
    this.userProperties.utmTerm = urlParams.get('utm_term') || undefined;
    this.userProperties.utmContent = urlParams.get('utm_content') || undefined;
  }

  /**
   * Track a custom event
   */
  trackEvent(event: Omit<AnalyticsEvent, 'timestamp'>): void {
    const analyticsEvent: AnalyticsEvent = {
      ...event,
      timestamp: Date.now(),
    };

    this.events.push(analyticsEvent);

    if (this.config.debug) {
      console.log('[Analytics] Event tracked:', analyticsEvent);
    }

    // Send to analytics service if configured
    if (this.config.trackingId) {
      this.sendToAnalytics(analyticsEvent);
    }
  }

  /**
   * Track page view
   */
  trackPageView(page?: string): void {
    this.trackEvent({
      name: 'page_view',
      category: 'navigation',
      action: 'view',
      label: page || window.location.pathname,
      properties: {
        url: window.location.href,
        title: document.title,
        ...this.userProperties,
      },
    });
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, label?: string, value?: number): void {
    this.trackEvent({
      name: 'interaction',
      category: 'user_action',
      action,
      label: label || element,
      value,
      properties: {
        element,
        ...this.userProperties,
      },
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionId: string, value?: number, currency?: string): void {
    this.trackEvent({
      name: 'conversion',
      category: 'conversion',
      action: 'convert',
      label: conversionId,
      value,
      properties: {
        conversionId,
        currency: currency || 'USD',
        ...this.userProperties,
      },
    });
  }

  /**
   * Send event to analytics service
   */
  private sendToAnalytics(event: AnalyticsEvent): void {
    // This would typically send to Google Analytics, Mixpanel, etc.
    // For now, we'll just log it
    if (this.config.debug) {
      console.log('[Analytics] Sending to service:', event);
    }
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