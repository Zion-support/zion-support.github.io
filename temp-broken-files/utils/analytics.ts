/**
 * Analytics and Monitoring Utilities
 * Comprehensive analytics, monitoring, and performance tracking
 */

interface AnalyticsEvent {
  name: string;
  properties: Record<string, any>;
  timestamp: string;
  userId?: string;
  sessionId: string;
}

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: string;
  context?: Record<string, any>;
}

interface UserSession {
  sessionId: string;
  startTime: string;
  lastActivity: string;
  pageViews: number;
  events: number;
  userId?: string;
}

class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private performanceMetrics: PerformanceMetric[] = [];
  private currentSession: UserSession;
  private isInitialized = false;

  constructor() {
    this.currentSession = this.createSession();
    this.initialize();
  }

  private createSession(): UserSession {
    return {
      sessionId: this.generateSessionId(),
      startTime: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      pageViews: 0,
      events: 0,
    };
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initialize() {
    if (typeof window === 'undefined') return;

    // Track page views
    this.trackPageView();

    // Track performance metrics
    this.trackPerformanceMetrics();

    // Track user interactions
    this.trackUserInteractions();

    // Track errors
    this.trackErrors();

    this.isInitialized = true;
  }

  trackEvent(name: string, properties: Record<string, any> = {}) {
    const event: AnalyticsEvent = {
      name,
      properties: {
        ...properties,
        page: window.location.pathname,
        referrer: document.referrer,
      },
      timestamp: new Date().toISOString(),
      sessionId: this.currentSession.sessionId,
    };

    this.events.push(event);
    this.currentSession.events++;
    this.currentSession.lastActivity = new Date().toISOString();

    // Send to analytics service
    this.sendEventToService(event);

    console.log('📊 Event tracked:', event);
  }

  trackPageView(page?: string) {
    const pagePath = page || window.location.pathname;
    
    this.trackEvent('page_view', {
      page: pagePath,
      title: document.title,
    });

    this.currentSession.pageViews++;
  }

  trackPerformanceMetric(name: string, value: number, unit: string, context?: Record<string, any>) {
    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: new Date().toISOString(),
      context,
    };

    this.performanceMetrics.push(metric);

    // Keep only last 1000 metrics
    if (this.performanceMetrics.length > 1000) {
      this.performanceMetrics = this.performanceMetrics.slice(-1000);
    }

    console.log('📈 Performance metric tracked:', metric);
  }

  private trackPerformanceMetrics() {
    // Track Core Web Vitals
    this.trackCoreWebVitals();

    // Track custom performance metrics
    this.trackCustomMetrics();
  }

  private trackCoreWebVitals() {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.trackPerformanceMetric('FCP', entry.startTime, 'ms');
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.trackPerformanceMetric('LCP', entry.startTime, 'ms');
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.trackPerformanceMetric('FID', entry.processingStart - entry.startTime, 'ms');
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }

    // Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.trackPerformanceMetric('CLS', clsValue, 'score');
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  private trackCustomMetrics() {
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.trackPerformanceMetric('page_load_time', loadTime, 'ms');
    });

    // Track memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.trackPerformanceMetric('memory_used', memory.usedJSHeapSize, 'bytes');
      this.trackPerformanceMetric('memory_total', memory.totalJSHeapSize, 'bytes');
    }

    // Track connection information
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      this.trackPerformanceMetric('connection_effective_type', connection.effectiveType, 'string');
      this.trackPerformanceMetric('connection_downlink', connection.downlink, 'Mbps');
    }
  }

  private trackUserInteractions() {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      this.trackEvent('click', {
        element: target.tagName,
        id: target.id,
        className: target.className,
        text: target.textContent?.substring(0, 100),
      });
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent('form_submit', {
        formId: form.id,
        formAction: form.action,
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackPerformanceMetric('scroll_depth', maxScrollDepth, 'percent');
      }
    });
  }

  private trackErrors() {
    window.addEventListener('error', (event) => {
      this.trackEvent('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack,
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackEvent('unhandled_promise_rejection', {
        reason: event.reason?.toString(),
        stack: event.reason?.stack,
      });
    });
  }

  private sendEventToService(event: AnalyticsEvent) {
    // In a real application, you would send this to your analytics service
    // like Google Analytics, Mixpanel, Amplitude, etc.
    console.log('📤 Event sent to analytics service:', event);
  }

  getSessionData(): UserSession {
    return { ...this.currentSession };
  }

  getEventHistory(): AnalyticsEvent[] {
    return [...this.events];
  }

  getPerformanceMetrics(): PerformanceMetric[] {
    return [...this.performanceMetrics];
  }

  getAnalyticsSummary() {
    const totalEvents = this.events.length;
    const totalPageViews = this.currentSession.pageViews;
    const sessionDuration = Date.now() - new Date(this.currentSession.startTime).getTime();

    const eventsByType = this.events.reduce((acc, event) => {
      acc[event.name] = (acc[event.name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const performanceByType = this.performanceMetrics.reduce((acc, metric) => {
      if (!acc[metric.name]) {
        acc[metric.name] = [];
      }
      acc[metric.name].push(metric.value);
      return acc;
    }, {} as Record<string, number[]>);

    // Calculate averages
    const performanceAverages = Object.entries(performanceByType).reduce((acc, [name, values]) => {
      acc[name] = values.reduce((sum, val) => sum + val, 0) / values.length;
      return acc;
    }, {} as Record<string, number>);

    return {
      session: this.currentSession,
      totalEvents,
      totalPageViews,
      sessionDuration: Math.round(sessionDuration / 1000), // in seconds
      eventsByType,
      performanceAverages,
    };
  }

  exportData() {
    return {
      session: this.currentSession,
      events: this.events,
      performanceMetrics: this.performanceMetrics,
      summary: this.getAnalyticsSummary(),
    };
  }
}

// Global analytics manager instance
export const analytics = new AnalyticsManager();

// React hook for analytics
export function useAnalytics() {
  const trackEvent = (name: string, properties?: Record<string, any>) => {
    analytics.trackEvent(name, properties);
  };

  const trackPageView = (page?: string) => {
    analytics.trackPageView(page);
  };

  const trackPerformance = (name: string, value: number, unit: string, context?: Record<string, any>) => {
    analytics.trackPerformanceMetric(name, value, unit, context);
  };

  return {
    trackEvent,
    trackPageView,
    trackPerformance,
    getSessionData: () => analytics.getSessionData(),
    getSummary: () => analytics.getAnalyticsSummary(),
  };
}

// Performance monitoring hook
export function usePerformanceMonitoring(componentName: string) {
  const startTime = Date.now();

  const trackRenderTime = () => {
    const renderTime = Date.now() - startTime;
    analytics.trackPerformanceMetric(`${componentName}_render_time`, renderTime, 'ms');
  };

  const trackUserInteraction = (action: string, properties?: Record<string, any>) => {
    analytics.trackEvent(`${componentName}_${action}`, properties);
  };

  return {
    trackRenderTime,
    trackUserInteraction,
  };
}

export default AnalyticsManager;