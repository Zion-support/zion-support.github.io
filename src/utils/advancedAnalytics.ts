/**
 * Advanced Analytics Manager
 * Provides comprehensive analytics tracking and reporting
 */

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp: number;
  userId?: string;
  sessionId: string;
}

interface UserSession {
  id: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  events: AnalyticsEvent[];
  deviceInfo: {
    userAgent: string;
    screenResolution: string;
    language: string;
    timezone: string;
  };
}

class AdvancedAnalyticsManager {
  private static instance: AdvancedAnalyticsManager;
  private session: UserSession | null = null;
  private eventQueue: AnalyticsEvent[] = [];
  private isOnline = navigator.onLine;
  private maxQueueSize = 100;

  private constructor() {
    this.initializeSession();
    this.setupEventListeners();
    this.startHeartbeat();
  }

  public static getInstance(): AdvancedAnalyticsManager {
    if (!AdvancedAnalyticsManager.instance) {
      AdvancedAnalyticsManager.instance = new AdvancedAnalyticsManager();
    }
    return AdvancedAnalyticsManager.instance;
  }

  private initializeSession(): void {
    const sessionId = this.generateSessionId();
    const now = Date.now();

    this.session = {
      id: sessionId,
      startTime: now,
      lastActivity: now,
      pageViews: 0,
      events: [],
      deviceInfo: {
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };

    // Track page view
    this.trackEvent('page_view', {
      url: window.location.href,
      referrer: document.referrer,
      title: document.title,
    });

    console.log('📊 Advanced Analytics Manager initialized');
  }

  private setupEventListeners(): void {
    // Online/offline status
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.flushEventQueue();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });

    // Page visibility
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.trackEvent('page_visible', {
          duration: Date.now() - (this.session?.lastActivity || 0),
        });
      } else {
        this.trackEvent('page_hidden', {
          duration: Date.now() - (this.session?.lastActivity || 0),
        });
      }
    });

    // Before unload
    window.addEventListener('beforeunload', () => {
      this.trackEvent('session_end', {
        duration: Date.now() - (this.session?.startTime || 0),
        pageViews: this.session?.pageViews || 0,
        eventCount: this.session?.events.length || 0,
      });
      this.flushEventQueue();
    });
  }

  private startHeartbeat(): void {
    setInterval(() => {
      if (this.session) {
        this.session.lastActivity = Date.now();
        this.trackEvent('heartbeat', {
          sessionDuration: Date.now() - this.session.startTime,
          pageViews: this.session.pageViews,
        });
      }
    }, 30000); // 30 seconds
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  public trackEvent(event: string, properties?: Record<string, any>): void {
    if (!this.session) return;

    const analyticsEvent: AnalyticsEvent = {
      event,
      properties: {
        ...properties,
        timestamp: Date.now(),
        url: window.location.href,
      },
      timestamp: Date.now(),
      sessionId: this.session.id,
    };

    this.session.events.push(analyticsEvent);
    this.eventQueue.push(analyticsEvent);

    // Update activity
    this.session.lastActivity = Date.now();

    // Track page views
    if (event === 'page_view') {
      this.session.pageViews++;
    }

    console.log('📊 Analytics Event:', event, properties);

    // Send immediately if online, otherwise queue
    if (this.isOnline) {
      this.sendEvent(analyticsEvent);
    } else if (this.eventQueue.length >= this.maxQueueSize) {
      // Remove oldest events if queue is full
      this.eventQueue.shift();
    }
  }

  private async sendEvent(event: AnalyticsEvent): Promise<void> {
    try {
      // In a real implementation, you would send to your analytics service
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Failed to send analytics event:', error);
      // Re-queue the event for later
      this.eventQueue.push(event);
    }
  }

  private async flushEventQueue(): Promise<void> {
    if (!this.isOnline || this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    try {
      await fetch('/api/analytics/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ events }),
      });
      console.log(`📊 Sent ${events.length} queued analytics events`);
    } catch (error) {
      console.error('Failed to flush analytics queue:', error);
      // Re-queue events for later
      this.eventQueue.unshift(...events);
    }
  }

  public trackUserAction(action: string, element?: string, properties?: Record<string, any>): void {
    this.trackEvent('user_action', {
      action,
      element,
      ...properties,
    });
  }

  public trackPerformance(metric: string, value: number, properties?: Record<string, any>): void {
    this.trackEvent('performance_metric', {
      metric,
      value,
      ...properties,
    });
  }

  public trackError(error: Error, context?: string): void {
    this.trackEvent('error', {
      message: error.message,
      stack: error.stack,
      context,
      url: window.location.href,
    });
  }

  public getSessionData(): UserSession | null {
    return this.session;
  }

  public identifyUser(userId: string, traits?: Record<string, any>): void {
    if (this.session) {
      (this.session as any).userId = userId;
    }

    this.trackEvent('user_identified', {
      userId,
      traits,
    });
  }

  public setUserProperties(properties: Record<string, any>): void {
    this.trackEvent('user_properties_updated', {
      properties,
    });
  }

  public trackConversion(conversionType: string, value?: number, properties?: Record<string, any>): void {
    this.trackEvent('conversion', {
      conversionType,
      value,
      ...properties,
    });
  }
}

export default AdvancedAnalyticsManager;