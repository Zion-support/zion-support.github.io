interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

interface UserProperties {
  userId?: string;
  sessionId: string;
  userAgent: string;
  language: string;
  timezone: string;
  screenResolution: string;
  viewportSize: string;
}

class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private userProperties: UserProperties;
  private isEnabled: boolean = true;

  constructor() {
    this.userProperties = this.initializeUserProperties();
    this.setupEventListeners();
  }

  private initializeUserProperties(): UserProperties {
    return {
      sessionId: this.generateSessionId(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screenResolution: `${screen.width}x${screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`
    };
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private setupEventListeners(): void {
    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      this.track('page_visibility_change', {
        visible: !document.hidden,
        timestamp: Date.now()
      });
    });

    // Track page unload
    window.addEventListener('beforeunload', () => {
      this.track('page_unload', {
        timeOnPage: Date.now() - this.getPageLoadTime(),
        timestamp: Date.now()
      });
    });

    // Track errors
    window.addEventListener('error', (event) => {
      this.track('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.toString(),
        timestamp: Date.now()
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.track('unhandled_promise_rejection', {
        reason: event.reason?.toString(),
        timestamp: Date.now()
      });
    });
  }

  private getPageLoadTime(): number {
    return performance.timing?.loadEventEnd || Date.now();
  }

  track(eventName: string, properties?: Record<string, any>): void {
    if (!this.isEnabled) return;

    const event: AnalyticsEvent = {
      name: eventName,
      properties: {
        ...properties,
        ...this.userProperties
      },
      timestamp: Date.now()
    };

    this.events.push(event);
    this.sendEvent(event);
  }

  private sendEvent(event: AnalyticsEvent): void {
    // In a real application, you would send this to your analytics service
    console.log('Analytics Event:', event);
    
    // Example: Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', event.name, event.properties);
    }

    // Example: Send to custom analytics endpoint
    this.sendToEndpoint(event);
  }

  private async sendToEndpoint(event: AnalyticsEvent): Promise<void> {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.warn('Failed to send analytics event:', error);
    }
  }

  setUserId(userId: string): void {
    this.userProperties.userId = userId;
  }

  setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  clearEvents(): void {
    this.events = [];
  }

  // Performance tracking methods
  trackPageLoad(): void {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    this.track('page_load', {
      loadTime: navigation.loadEventEnd - navigation.fetchStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
      firstByte: navigation.responseStart - navigation.fetchStart,
      dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcpConnection: navigation.connectEnd - navigation.connectStart,
      sslNegotiation: navigation.secureConnectionStart ? 
        navigation.connectEnd - navigation.secureConnectionStart : 0
    });
  }

  trackUserInteraction(element: string, action: string, properties?: Record<string, any>): void {
    this.track('user_interaction', {
      element,
      action,
      ...properties
    });
  }

  trackPerformanceMetric(metricName: string, value: number, properties?: Record<string, any>): void {
    this.track('performance_metric', {
      metric: metricName,
      value,
      ...properties
    });
  }
}

export const analytics = new AnalyticsManager();