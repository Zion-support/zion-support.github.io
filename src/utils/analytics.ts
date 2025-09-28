/**
 * Analytics and Monitoring System
 * Comprehensive analytics tracking for the Zion Tech Group website
 */

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, unknown>;
  timestamp: number;
  userId?: string;
  sessionId: string;
  page: string;
  userAgent: string;
}

interface UserSession {
  id: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  events: number;
  referrer?: string;
  deviceInfo: {
    userAgent: string;
    screenResolution: string;
    viewportSize: string;
    language: string;
    timezone: string;
  };
}

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  totalBlockingTime: number;
  speedIndex: number;
}

export class AnalyticsManager {
  private static instance: AnalyticsManager;
  private session: UserSession;
  private eventQueue: AnalyticsEvent[] = [];
  private isInitialized = false;
  private batchSize = 10;
  private flushInterval = 30000; // 30 seconds
  private flushTimer?: NodeJS.Timeout;

  private constructor() {
    this.session = this.createSession();
    this.initializeEventListeners();
  }

  public static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  public initialize(): void {
    if (this.isInitialized) return;

    this.trackPageView();
    this.startPerformanceMonitoring();
    this.setupAutoFlush();
    this.isInitialized = true;
  }

  private createSession(): UserSession {
    const now = Date.now();
    return {
      id: this.generateSessionId(),
      startTime: now,
      lastActivity: now,
      pageViews: 0,
      events: 0,
      referrer: document.referrer || undefined,
      deviceInfo: {
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeEventListeners(): void {
    // Track page visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.session.lastActivity = Date.now();
      }
    });

    // Track user interactions
    ["click", "scroll", "keydown", "mousemove"].forEach((eventType) => {
      document.addEventListener(
        eventType,
        () => {
          this.session.lastActivity = Date.now();
        },
        { passive: true },
      );
    });

    // Track page unload
    window.addEventListener("beforeunload", () => {
      this.flush();
    });
  }

  public trackEvent(
    eventName: string,
    properties?: Record<string, unknown>,
  ): void {
    const event: AnalyticsEvent = {
      event: eventName,
      properties: {
        ...properties,
        page: window.location.pathname,
        url: window.location.href,
      },
      timestamp: Date.now(),
      sessionId: this.session.id,
      page: window.location.pathname,
      userAgent: navigator.userAgent,
    };

    this.eventQueue.push(event);
    this.session.events++;
    this.session.lastActivity = Date.now();

    // Auto-flush if queue is full
    if (this.eventQueue.length >= this.batchSize) {
      this.flush();
    }
  }

  public trackPageView(page?: string): void {
    const currentPage = page || window.location.pathname;

    this.trackEvent("page_view", {
      page: currentPage,
      referrer: this.session.referrer,
      sessionStart: this.session.startTime,
    });

    this.session.pageViews++;
    this.session.lastActivity = Date.now();
  }

  public trackConversion(
    conversionType: string,
    value?: number,
    currency?: string,
  ): void {
    this.trackEvent("conversion", {
      type: conversionType,
      value,
      currency: currency || "USD",
      sessionId: this.session.id,
      sessionDuration: Date.now() - this.session.startTime,
    });
  }

  public trackError(error: Error, context?: Record<string, unknown>): void {
    this.trackEvent("error", {
      errorMessage: error.message,
      errorStack: error.stack,
      errorName: error.name,
      page: window.location.pathname,
      ...context,
    });
  }

  private startPerformanceMonitoring(): void {
    // Wait for page load
    if (document.readyState === "loading") {
      window.addEventListener("load", () => {
        setTimeout(() => this.capturePerformanceMetrics(), 1000);
      });
    } else {
      setTimeout(() => this.capturePerformanceMetrics(), 1000);
    }
  }

  private capturePerformanceMetrics(): void {
    if (!("performance" in window)) return;

    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType("paint");
    const lcpEntries = performance.getEntriesByType("largest-contentful-paint");
    const fidEntries = performance.getEntriesByType("first-input");
    const clsEntries = performance.getEntriesByType("layout-shift");

    const metrics: Partial<PerformanceMetrics> = {};

    // Page load time
    if (navigation) {
      metrics.pageLoadTime = navigation.loadEventEnd - navigation.fetchStart;
    }

    // First Contentful Paint
    const fcp = paintEntries.find(
      (entry) => entry.name === "first-contentful-paint",
    );
    if (fcp) {
      metrics.firstContentfulPaint = fcp.startTime;
    }

    // Largest Contentful Paint
    if (lcpEntries.length > 0) {
      metrics.largestContentfulPaint =
        lcpEntries[lcpEntries.length - 1].startTime;
    }

    // First Input Delay
    if (fidEntries.length > 0) {
      const fid = fidEntries[0] as PerformanceEntry & {
        processingStart: number;
      };
      metrics.firstInputDelay = fid.processingStart - fid.startTime;
    }

    // Cumulative Layout Shift
    let cls = 0;
    clsEntries.forEach((entry) => {
      const layoutShiftEntry = entry as PerformanceEntry & {
        hadRecentInput?: boolean;
        value: number;
      };
      if (!layoutShiftEntry.hadRecentInput) {
        cls += layoutShiftEntry.value;
      }
    });
    metrics.cumulativeLayoutShift = cls;

    // Track performance metrics
    this.trackEvent("performance_metrics", {
      ...metrics,
      userAgent: navigator.userAgent,
      connection:
        (navigator as Navigator & { connection?: { effectiveType?: string } })
          .connection?.effectiveType || "unknown",
    });
  }

  private setupAutoFlush(): void {
    this.flushTimer = setInterval(() => {
      if (this.eventQueue.length > 0) {
        this.flush();
      }
    }, this.flushInterval);
  }

  public flush(): void {
    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    // Send to analytics endpoint
    this.sendToAnalytics(events);
  }

  private async sendToAnalytics(events: AnalyticsEvent[]): Promise<void> {
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events,
          session: this.session,
          timestamp: Date.now(),
        }),
      });
    } catch (error) {
      console.warn("Failed to send analytics data:", error);
      // Re-queue events if sending failed
      this.eventQueue.unshift(...events);
    }
  }

  public getSessionInfo(): UserSession {
    return { ...this.session };
  }

  public track(eventName: string, properties?: Record<string, unknown>): void {
    this.trackEvent(eventName, properties);
  }

  public getMetrics(): any {
    return {
      session: this.session,
      eventCount: this.eventQueue.length,
      isInitialized: this.isInitialized,
    };
  }

  public getEventCount(): number {
    return this.eventQueue.length;
  }

  public destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flush();
  }
}

// Export singleton instance
export const analytics = AnalyticsManager.getInstance();

// Auto-initialize when module is loaded
if (typeof window !== "undefined") {
  analytics.initialize();
}
