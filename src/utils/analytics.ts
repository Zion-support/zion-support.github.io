/**
 * Analytics utilities for tracking user behavior and performance
 */

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, unknown>;
  timestamp: string;
  userId?: string;
  sessionId: string;
}

export class AnalyticsManager {
  private static instance: AnalyticsManager;
  private sessionId: string;
  private events: AnalyticsEvent[] = [];
  private maxEventsInMemory = 1000;

  public static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeTracking();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeTracking(): void {
    // Track page views
    this.trackPageView();
    
    // Track performance metrics
    this.trackPerformanceMetrics();
    
    // Track user interactions
    this.trackUserInteractions();
  }

  public trackEvent(
    name: string,
    category: string,
    action: string,
    label?: string,
    value?: number,
    customParameters?: Record<string, unknown>
  ): void {
    const event: AnalyticsEvent = {
      name,
      category,
      action,
      label,
      value,
      customParameters,
      timestamp: new Date().toISOString(),
      userId: this.getUserId(),
      sessionId: this.sessionId
    };

    this.events.push(event);
    
    // Keep only recent events in memory
    if (this.events.length > this.maxEventsInMemory) {
      this.events = this.events.slice(-this.maxEventsInMemory);
    }

    // Send to analytics service
    this.sendEventToService(event);
  }

  public trackPageView(pageName?: string): void {
    const page = pageName || document.title;
    this.trackEvent(
      'page_view',
      'navigation',
      'view',
      page,
      undefined,
      {
        url: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent
      }
    );
  }

  public trackUserInteraction(element: string, action: string, details?: string): void {
    this.trackEvent(
      'user_interaction',
      'engagement',
      action,
      `${element}: ${details || ''}`,
      undefined,
      {
        element,
        details
      }
    );
  }

  public trackPerformanceMetric(metricName: string, value: number, unit: string = 'ms'): void {
    this.trackEvent(
      'performance_metric',
      'performance',
      'measure',
      metricName,
      value,
      {
        unit,
        metricName
      }
    );
  }

  private trackPerformanceMetrics(): void {
    // Track Core Web Vitals
    if ('web-vital' in window) {
      // This would integrate with web-vitals library
      // getCLS, getFID, getLCP, etc.
    }

    // Track custom performance metrics
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      this.trackPerformanceMetric('page_load_time', navigation.loadEventEnd - navigation.fetchStart);
      this.trackPerformanceMetric('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.fetchStart);
      this.trackPerformanceMetric('first_byte', navigation.responseStart - navigation.fetchStart);
    });

    // Time to interactive
    this.trackTimeToInteractive();
  }

  private trackTimeToInteractive(): void {
    let tti = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          tti = navEntry.domContentLoadedEventEnd - (navEntry as PerformanceNavigationTiming & { navigationStart: number }).navigationStart;
          this.trackPerformanceMetric('time_to_interactive', tti, 'ms');
        }
      }
    });
    observer.observe({ entryTypes: ['navigation'] });
  }

  private trackUserInteractions(): void {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        this.trackUserInteraction(
          target.tagName.toLowerCase(),
          'click',
          target.textContent?.trim() || target.getAttribute('href') || 'unknown'
        );
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackUserInteraction('form', 'submit', form.id || form.className || 'unknown');
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent(
          'scroll_depth',
          'engagement',
          'scroll',
          `${scrollDepth}%`,
          scrollDepth
        );
      }
    });
  }

  private getUserId(): string | undefined {
    try {
      return localStorage.getItem('userId') || undefined;
    } catch {
      return undefined;
    }
  }

  private async sendEventToService(event: AnalyticsEvent): Promise<void> {
    try {
      // Send to your analytics service
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Failed to send analytics event:', error);
    }
  }

  public getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  public getSessionId(): string {
    return this.sessionId;
  }
}

export const analyticsManager = AnalyticsManager.getInstance();
export const analytics = analyticsManager;