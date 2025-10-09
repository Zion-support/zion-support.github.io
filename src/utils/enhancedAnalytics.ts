
/**
 * Enhanced Analytics Utility
 * Provides comprehensive analytics tracking with event batching and offline support
 */
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}
export interface UserProperties {
  userId?: string;
  sessionId?: string;
  userType?: string;
  [key: string]: unknown;
}
class EnhancedAnalytics {
  private queue: AnalyticsEvent[] = [];
  private userProperties: UserProperties = {};
  private sessionId: string;
  private isInitialized = false;
  private batchSize = 10;
  private flushInterval = 30000; // 30 seconds
  private offlineQueue: AnalyticsEvent[] = [];
  constructor() {
    this.sessionId = this.generateSessionId();
    this.setupOfflineHandling();
    this.setupPeriodicFlush();
  }
  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substring(7)}`;
  }
  private setupOfflineHandling(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.flushOfflineQueue();
      });
      window.addEventListener('beforeunload', () => {
        this.flush();
      });
    }
  }
  private setupPeriodicFlush(): void {
    if (typeof window !== 'undefined') {
      setInterval(() => {
        this.flush();
      }, this.flushInterval);
    }
  }
  public initialize(config?: { userId?: string; userType?: string }): void {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.userProperties = {
      ...this.userProperties,
      sessionId: this.sessionId,
      ...config
    };
    // Track initialization
    this.trackEvent({
      category: 'System',
      action: 'Analytics Initialized',
      metadata: {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      }
    });
  }
  public setUserProperties(properties: UserProperties): void {
    this.userProperties = {
      ...this.userProperties,
      ...properties
    };
  }
  public trackEvent(event: AnalyticsEvent): void {
    const enrichedEvent: AnalyticsEvent = {
      ...event,
      metadata: {
        ...event.metadata,
        sessionId: this.sessionId,
        timestamp: new Date().toISOString(),
        url: typeof window !== 'undefined' ? window.location.href : ''
      }
    };
    // Add to queue
    this.queue.push(enrichedEvent);
    // Send to gtag if available
    this.sendToGtag(enrichedEvent);
    // Check if we should flush
    if (this.queue.length >= this.batchSize) {
      this.flush();
    }
  }
  private sendToGtag(event: AnalyticsEvent): void {
    if (
      typeof window !== 'undefined' &&
      (
        window as {
          gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.metadata
      });
    }
  }
  public trackPageView(pagePath: string, pageTitle?: string): void {
    this.trackEvent({
      category: 'Navigation',
      action: 'Page View',
      label: pagePath,
      metadata: {
        pageTitle: pageTitle || document.title,
        referrer: document.referrer
      }
    });
  }
  public trackUserInteraction(action: string, label?: string, value?: number): void {
    this.trackEvent({
      category: 'User Interaction',
      action,
      label,
      value
    });
  }
  public trackError(error: Error, context?: Record<string, unknown>): void {
    this.trackEvent({
      category: 'Error',
      action: 'Error Occurred',
      label: error.message,
      metadata: {
        stack: error.stack,
        ...context
      }
    });
  }
  public trackPerformance(metric: string, value: number, rating?: string): void {
    this.trackEvent({
      category: 'Performance',
      action: metric,
      value: Math.round(value),
      metadata: {
        rating
      }
    });
  }
  public trackConversion(conversionType: string, value?: number): void {
    this.trackEvent({
      category: 'Conversion',
      action: conversionType,
      value,
      metadata: {
        conversionId: `conv-${Date.now()}`
      }
    });
  }
  public trackCustomEvent(
    category: string,
    action: string,
    label?: string,
    value?: number,
    metadata?: Record<string, unknown>
  ): void {
    this.trackEvent({
      category,
      action,
      label,
      value,
      metadata
    });
  }
  private flush(): void {
    if (this.queue.length === 0) return;
    // Check if online
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      this.offlineQueue.push(...this.queue);
      this.queue = [];
      return;
    }
    // In a real implementation, send to analytics backend
    if (process.env['NODE_ENV'] === 'development') {
      }
    // Clear queue
    this.queue = [];
  }
  private flushOfflineQueue(): void {
    if (this.offlineQueue.length === 0) return;
    // Merge offline queue into main queue
    this.queue.push(...this.offlineQueue);
    this.offlineQueue = [];
    // Flush
    this.flush();
  }
  public getQueueSize(): number {
    return this.queue.length;
  }
  public getSessionId(): string {
    return this.sessionId;
  }
  public getUserProperties(): UserProperties {
    return { ...this.userProperties };
  }
  public getAnalyticsSummary(): {
    queueSize: number;
    offlineQueueSize: number;
    sessionId: string;
    userProperties: UserProperties;
  } {
    return {
      queueSize: this.queue.length,
      offlineQueueSize: this.offlineQueue.length,
      sessionId: this.sessionId,
      userProperties: this.getUserProperties()
    };
  }
}
// Export singleton instance
export const analytics = new EnhancedAnalytics();
export default analytics;
