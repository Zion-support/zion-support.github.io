/**
 * Enhanced Analytics System
 * Comprehensive analytics with privacy-first approach
 */

export interface AnalyticsEvent {
  id: string;
  type: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  properties?: Record<string, unknown>;
  metadata?: {
    userAgent: string;
    url: string;
    referrer: string;
    screenResolution: string;
    viewportSize: string;
    timezone: string;
    language: string;
    platform: string;
  };
}

export interface AnalyticsConfig {
  enableTracking: boolean;
  enablePrivacyMode: boolean;
  enablePerformanceTracking: boolean;
  enableUserJourney: boolean;
  enableErrorTracking: boolean;
  enableConversionTracking: boolean;
  batchSize: number;
  flushInterval: number;
  maxRetries: number;
  endpoint: string;
  apiKey?: string;
}

export interface AnalyticsMetrics {
  totalEvents: number;
  eventsByType: Record<string, number>;
  eventsByCategory: Record<string, number>;
  uniqueUsers: number;
  sessions: number;
  averageSessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number }>;
  topEvents: Array<{ event: string; count: number }>;
  userJourney: Array<{ step: number; event: string; timestamp: number }>;
}

export interface PerformanceMetrics {
  pageLoadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  memoryUsage: number;
  networkLatency: number;
}

class EnhancedAnalyticsSystem {
  private events: AnalyticsEvent[] = [];
  private config: AnalyticsConfig;
  private sessionId: string;
  private userId?: string;
  private isInitialized = false;
  private flushTimer: number | null = null;
  private performanceObserver: PerformanceObserver | null = null;
  private userJourney: Array<{ step: number; event: string; timestamp: number }> = [];
  private currentStep = 0;

  constructor(config?: Partial<AnalyticsConfig>) {
    this.config = {
      enableTracking: true,
      enablePrivacyMode: true,
      enablePerformanceTracking: true,
      enableUserJourney: true,
      enableErrorTracking: true,
      enableConversionTracking: true,
      batchSize: 50,
      flushInterval: 30000, // 30 seconds
      maxRetries: 3,
      endpoint: '/api/analytics',
      ...config
    };

    this.sessionId = this.generateSessionId();
  }

  /**
   * Initialize the analytics system
   */
  initialize(): void {
    if (this.isInitialized) return;

    this.setupPerformanceTracking();
    this.setupErrorTracking();
    this.setupUserJourneyTracking();
    this.setupConversionTracking();
    this.setupAutomaticEvents();
    this.startFlushTimer();
    this.isInitialized = true;

    console.log('✅ Enhanced Analytics System initialized');
  }

  /**
   * Track custom event
   */
  track(eventType: string, category: string, action: string, label?: string, value?: number, properties?: Record<string, unknown>): void {
    if (!this.config.enableTracking) return;

    const event: AnalyticsEvent = {
      id: this.generateEventId(),
      type: eventType,
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      properties,
      metadata: this.collectMetadata()
    };

    this.events.push(event);
    this.updateUserJourney(event);

    // Auto-flush if batch size reached
    if (this.events.length >= this.config.batchSize) {
      this.flush();
    }
  }

  /**
   * Track page view
   */
  trackPageView(page: string, title?: string): void {
    this.track('page_view', 'navigation', 'view', page, undefined, {
      page,
      title: title || document.title,
      referrer: document.referrer
    });
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, value?: string): void {
    this.track('interaction', 'user', action, element, undefined, {
      element,
      value,
      position: this.getElementPosition(element)
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionType: string, value?: number, properties?: Record<string, unknown>): void {
    if (!this.config.enableConversionTracking) return;

    this.track('conversion', 'business', 'complete', conversionType, value, {
      conversionType,
      ...properties
    });
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: string, severity: 'low' | 'medium' | 'high' = 'medium'): void {
    if (!this.config.enableErrorTracking) return;

    this.track('error', 'technical', 'occurred', context, undefined, {
      message: error.message,
      stack: error.stack,
      severity,
      context,
      url: window.location.href,
      userAgent: navigator.userAgent
    });
  }

  /**
   * Track performance metric
   */
  trackPerformance(metric: string, value: number, unit: string = 'ms'): void {
    if (!this.config.enablePerformanceTracking) return;

    this.track('performance', 'technical', 'measured', metric, value, {
      metric,
      unit,
      url: window.location.href
    });
  }

  /**
   * Set user ID
   */
  setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Get analytics metrics
   */
  getMetrics(): AnalyticsMetrics {
    const eventsByType = this.events.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const eventsByCategory = this.events.reduce((acc, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const uniqueUsers = new Set(this.events.map(e => e.userId).filter(Boolean)).size;
    const sessions = new Set(this.events.map(e => e.sessionId)).size;

    const pageViews = this.events.filter(e => e.type === 'page_view');
    const topPages = pageViews.reduce((acc, event) => {
      const page = event.label || 'unknown';
      acc[page] = (acc[page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topEvents = Object.entries(eventsByType)
      .map(([event, count]) => ({ event, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const topPagesList = Object.entries(topPages)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    return {
      totalEvents: this.events.length,
      eventsByType,
      eventsByCategory,
      uniqueUsers,
      sessions,
      averageSessionDuration: this.calculateAverageSessionDuration(),
      bounceRate: this.calculateBounceRate(),
      conversionRate: this.calculateConversionRate(),
      topPages: topPagesList,
      topEvents,
      userJourney: this.userJourney
    };
  }

  /**
   * Get performance metrics
   */
  getPerformanceMetrics(): PerformanceMetrics {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry & { value?: number };
    const fid = performance.getEntriesByType('first-input')[0] as PerformanceEntry & { processingStart?: number };
    const cls = performance.getEntriesByType('layout-shift')[0] as PerformanceEntry & { value?: number };

    return {
      pageLoadTime: navigation ? navigation.loadEventEnd - navigation.fetchStart : 0,
      domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.fetchStart : 0,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.value || 0 : 0,
      firstInputDelay: fid ? fid.processingStart || 0 : 0,
      cumulativeLayoutShift: cls ? cls.value || 0 : 0,
      timeToInteractive: this.calculateTimeToInteractive(),
      memoryUsage: this.getMemoryUsage(),
      networkLatency: this.calculateNetworkLatency()
    };
  }

  /**
   * Flush events to server
   */
  async flush(): Promise<void> {
    if (this.events.length === 0) return;

    const eventsToFlush = [...this.events];
    this.events = [];

    try {
      await this.sendToServer(eventsToFlush);
      console.log(`Flushed ${eventsToFlush.length} analytics events`);
    } catch (error) {
      console.error('Failed to flush analytics events:', error);
      // Re-add events to queue for retry
      this.events.unshift(...eventsToFlush);
    }
  }

  /**
   * Setup performance tracking
   */
  private setupPerformanceTracking(): void {
    if (!this.config.enablePerformanceTracking) return;

    // Track Core Web Vitals
    this.trackWebVitals();

    // Track custom performance metrics
    this.trackCustomMetrics();

    // Setup performance observer
    if ('PerformanceObserver' in window) {
      this.performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.trackPerformance(entry.name, entry.duration, 'ms');
        }
      });

      this.performanceObserver.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    }
  }

  /**
   * Track Web Vitals
   */
  private trackWebVitals(): void {
    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        this.trackPerformance('first-contentful-paint', entry.startTime);
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.trackPerformance('largest-contentful-paint', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const fid = entry as PerformanceEventTiming;
        this.trackPerformance('first-input-delay', fid.processingStart - fid.startTime);
      }
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
        }
      }
      this.trackPerformance('cumulative-layout-shift', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }

  /**
   * Track custom metrics
   */
  private trackCustomMetrics(): void {
    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as Record<string, unknown>).memory as { usedJSHeapSize: number; totalJSHeapSize: number };
      this.trackPerformance('memory-used', memory.usedJSHeapSize, 'bytes');
      this.trackPerformance('memory-total', memory.totalJSHeapSize, 'bytes');
    }

    // Network information
    if ('connection' in navigator) {
      const connection = (navigator as any).connection as { effectiveType?: string; rtt?: number };
      this.trackPerformance('connection-type', 0, 'string');
      this.trackPerformance('connection-rtt', connection.rtt || 0, 'ms');
    }
  }

  /**
   * Setup error tracking
   */
  private setupErrorTracking(): void {
    if (!this.config.enableErrorTracking) return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.trackError(event.error, 'global', 'high');
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError(new Error(event.reason), 'promise', 'high');
    });

    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.trackError(new Error(`Resource loading error: ${(event.target as HTMLElement).tagName}`), 'resource', 'medium');
      }
    }, true);
  }

  /**
   * Setup user journey tracking
   */
  private setupUserJourneyTracking(): void {
    if (!this.config.enableUserJourney) return;

    // Track page views
    this.trackPageView(window.location.pathname);

    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        this.trackInteraction(target.tagName.toLowerCase(), 'click', target.textContent || '');
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackInteraction('form', 'submit', form.action);
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        this.track('scroll', 'engagement', 'depth', `${scrollPercent}%`);
      }
    });
  }

  /**
   * Setup conversion tracking
   */
  private setupConversionTracking(): void {
    if (!this.config.enableConversionTracking) return;

    // Track successful form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      if (form.classList.contains('conversion-form')) {
        this.trackConversion('form-submission');
      }
    });

    // Track button clicks that indicate conversion
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('conversion-button')) {
        this.trackConversion('button-click');
      }
    });
  }

  /**
   * Setup automatic events
   */
  private setupAutomaticEvents(): void {
    // Track page load
    window.addEventListener('load', () => {
      this.track('page_load', 'technical', 'completed');
    });

    // Track page unload
    window.addEventListener('beforeunload', () => {
      this.track('page_unload', 'technical', 'completed');
    });

    // Track focus/blur
    window.addEventListener('focus', () => {
      this.track('window_focus', 'user', 'gained');
    });

    window.addEventListener('blur', () => {
      this.track('window_blur', 'user', 'lost');
    });

    // Track visibility changes
    document.addEventListener('visibilitychange', () => {
      this.track('visibility_change', 'user', document.hidden ? 'hidden' : 'visible');
    });
  }

  /**
   * Start flush timer
   */
  private startFlushTimer(): void {
    this.flushTimer = window.setInterval(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substring(2)}`;
  }

  /**
   * Generate event ID
   */
  private generateEventId(): string {
    return `event_${Date.now()}_${Math.random().toString(36).substring(2)}`;
  }

  /**
   * Collect metadata
   */
  private collectMetadata(): AnalyticsEvent['metadata'] {
    return {
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer,
      screenResolution: `${screen.width}x${screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      platform: navigator.platform
    };
  }

  /**
   * Update user journey
   */
  private updateUserJourney(event: AnalyticsEvent): void {
    if (!this.config.enableUserJourney) return;

    this.currentStep++;
    this.userJourney.push({
      step: this.currentStep,
      event: `${event.category}:${event.action}`,
      timestamp: event.timestamp
    });

    // Keep only last 50 steps
    if (this.userJourney.length > 50) {
      this.userJourney = this.userJourney.slice(-50);
    }
  }

  /**
   * Get element position
   */
  private getElementPosition(selector: string): string {
    try {
      const element = document.querySelector(selector);
      if (element) {
        const rect = element.getBoundingClientRect();
        return `${rect.x},${rect.y}`;
      }
    } catch {
      // Ignore errors
    }
    return 'unknown';
  }

  /**
   * Calculate average session duration
   */
  private calculateAverageSessionDuration(): number {
    const sessions = new Map<string, { start: number; end: number }>();
    
    for (const event of this.events) {
      if (!sessions.has(event.sessionId)) {
        sessions.set(event.sessionId, { start: event.timestamp, end: event.timestamp });
      } else {
        const session = sessions.get(event.sessionId)!;
        session.end = Math.max(session.end, event.timestamp);
      }
    }

    const durations = Array.from(sessions.values()).map(s => s.end - s.start);
    return durations.length > 0 ? durations.reduce((a, b) => a + b, 0) / durations.length : 0;
  }

  /**
   * Calculate bounce rate
   */
  private calculateBounceRate(): number {
    const sessions = new Map<string, number>();
    
    for (const event of this.events) {
      const count = sessions.get(event.sessionId) || 0;
      sessions.set(event.sessionId, count + 1);
    }

    const singleEventSessions = Array.from(sessions.values()).filter(count => count === 1).length;
    return sessions.size > 0 ? singleEventSessions / sessions.size : 0;
  }

  /**
   * Calculate conversion rate
   */
  private calculateConversionRate(): number {
    const conversions = this.events.filter(e => e.type === 'conversion').length;
    const totalSessions = new Set(this.events.map(e => e.sessionId)).size;
    return totalSessions > 0 ? conversions / totalSessions : 0;
  }

  /**
   * Calculate time to interactive
   */
  private calculateTimeToInteractive(): number {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation ? navigation.domInteractive - navigation.fetchStart : 0;
  }

  /**
   * Get memory usage
   */
  private getMemoryUsage(): number {
    if ('memory' in performance) {
      const memory = (performance as Record<string, unknown>).memory as { usedJSHeapSize: number };
      return memory.usedJSHeapSize;
    }
    return 0;
  }

  /**
   * Calculate network latency
   */
  private calculateNetworkLatency(): number {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection as { rtt?: number };
      return connection.rtt || 0;
    }
    return 0;
  }

  /**
   * Send events to server
   */
  private async sendToServer(events: AnalyticsEvent[]): Promise<void> {
    const payload = {
      events,
      sessionId: this.sessionId,
      userId: this.userId,
      timestamp: Date.now()
    };

    const response = await fetch(this.config.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.config.apiKey && { 'Authorization': `Bearer ${this.config.apiKey}` })
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Analytics request failed: ${response.status}`);
    }
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<AnalyticsConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Cleanup
   */
  cleanup(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
      this.flushTimer = null;
    }

    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
      this.performanceObserver = null;
    }

    this.flush();
    this.isInitialized = false;
  }
}

// Export singleton instance
export const enhancedAnalyticsSystem = new EnhancedAnalyticsSystem();

// Auto-initialize
if (typeof window !== 'undefined') {
  enhancedAnalyticsSystem.initialize();
}