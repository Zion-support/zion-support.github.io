/**
 * Advanced Analytics and Performance Tracking for Zion Tech Group
 */

interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
  timestamp: number;
  session_id: string;
  user_id?: string;
}

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
  url: string;
  user_agent: string;
}

class AnalyticsManager {
  private sessionId: string;
  private userId?: string;
  private events: AnalyticsEvent[] = [];
  private metrics: PerformanceMetric[] = [];
  private isEnabled: boolean;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.isEnabled = this.shouldEnableAnalytics();
    this.initializeTracking();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private shouldEnableAnalytics(): boolean {
    // Check for consent, do not track, etc.
    if (typeof window === 'undefined') return false;
    
    // Check for Do Not Track
    if (navigator.doNotTrack === '1') return false;
    
    // Check for consent cookie
    const consent = localStorage.getItem('analytics_consent');
    if (consent === 'false') return false;
    
    return true;
  }

  private initializeTracking(): void {
    if (!this.isEnabled) return;

    // Track page views
    this.trackPageView();
    
    // Track performance metrics
    this.trackPerformanceMetrics();
    
    // Track user interactions
    this.trackUserInteractions();
    
    // Track errors
    this.trackErrors();
  }

  trackEvent(event: Omit<AnalyticsEvent, 'timestamp' | 'session_id' | 'user_id'>): void {
    if (!this.isEnabled) return;

    const analyticsEvent: AnalyticsEvent = {
      ...event,
      timestamp: Date.now(),
      session_id: this.sessionId,
      user_id: this.userId
    };

    this.events.push(analyticsEvent);
    this.sendEvent(analyticsEvent);
  }

  trackPageView(page?: string): void {
    const currentPage = page || window.location.pathname;
    
    this.trackEvent({
      name: 'page_view',
      category: 'navigation',
      action: 'view',
      label: currentPage,
      custom_parameters: {
        referrer: document.referrer,
        title: document.title,
        url: window.location.href
      }
    });
  }

  trackPerformanceMetric(metric: Omit<PerformanceMetric, 'timestamp' | 'url' | 'user_agent'>): void {
    if (!this.isEnabled) return;

    const performanceMetric: PerformanceMetric = {
      ...metric,
      timestamp: Date.now(),
      url: window.location.href,
      user_agent: navigator.userAgent
    };

    this.metrics.push(performanceMetric);
    this.sendMetric(performanceMetric);
  }

  private trackPerformanceMetrics(): void {
    // Track Core Web Vitals
    this.trackCoreWebVitals();
    
    // Track custom performance metrics
    this.trackCustomMetrics();
  }

  private trackCoreWebVitals(): void {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.trackPerformanceMetric({
              name: 'first_contentful_paint',
              value: entry.startTime,
              unit: 'ms'
            });
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.trackPerformanceMetric({
          name: 'largest_contentful_paint',
          value: lastEntry.startTime,
          unit: 'ms'
        });
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const firstInputEntry = entry as PerformanceEntry & { processingStart?: number };
          const fid = (firstInputEntry.processingStart || 0) - entry.startTime;
          this.trackPerformanceMetric({
            name: 'first_input_delay',
            value: fid,
            unit: 'ms'
          });
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }

    // Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
            clsValue += layoutShiftEntry.value;
          }
        }
        this.trackPerformanceMetric({
          name: 'cumulative_layout_shift',
          value: clsValue,
          unit: 'score'
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  private trackCustomMetrics(): void {
    // Page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.trackPerformanceMetric({
        name: 'page_load_time',
        value: loadTime,
        unit: 'ms'
      });
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
          this.trackPerformanceMetric({
            name: 'time_to_interactive',
            value: tti,
            unit: 'ms'
          });
        }
      }
    });
    observer.observe({ entryTypes: ['navigation'] });
  }

  private trackUserInteractions(): void {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      this.trackEvent({
        name: 'click',
        category: 'interaction',
        action: 'click',
        label: target.tagName,
        custom_parameters: {
          element_id: target.id,
          element_class: target.className,
          element_text: target.textContent?.substring(0, 100)
        }
      });
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent({
        name: 'form_submit',
        category: 'interaction',
        action: 'submit',
        label: form.id || form.className,
        custom_parameters: {
          form_action: form.action,
          form_method: form.method
        }
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent({
          name: 'scroll_depth',
          category: 'engagement',
          action: 'scroll',
          value: maxScrollDepth,
          custom_parameters: {
            scroll_percentage: maxScrollDepth
          }
        });
      }
    });
  }

  private trackErrors(): void {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      this.trackEvent({
        name: 'javascript_error',
        category: 'error',
        action: 'error',
        label: event.message,
        custom_parameters: {
          error_message: event.message,
          error_filename: event.filename,
          error_lineno: event.lineno,
          error_colno: event.colno
        }
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.trackEvent({
        name: 'unhandled_promise_rejection',
        category: 'error',
        action: 'rejection',
        label: event.reason?.toString(),
        custom_parameters: {
          reason: event.reason?.toString()
        }
      });
    });
  }

  private async sendEvent(event: AnalyticsEvent): Promise<void> {
    try {
      // Send to analytics service
      await fetch('/api/analytics/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.warn('Failed to send analytics event:', error);
    }
  }

  private async sendMetric(metric: PerformanceMetric): Promise<void> {
    try {
      // Send to analytics service
      await fetch('/api/analytics/metric', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(metric)
      });
    } catch (error) {
      console.warn('Failed to send performance metric:', error);
    }
  }

  setUserId(userId: string): void {
    this.userId = userId;
  }

  getSessionId(): string {
    return this.sessionId;
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  enable(): void {
    this.isEnabled = true;
    localStorage.setItem('analytics_consent', 'true');
  }

  disable(): void {
    this.isEnabled = false;
    localStorage.setItem('analytics_consent', 'false');
  }
}

// Export singleton instance
export const analytics = new AnalyticsManager();

// Export types
export type { AnalyticsEvent, PerformanceMetric };