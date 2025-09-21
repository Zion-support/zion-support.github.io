/**
 * Comprehensive monitoring and analytics utilities
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
  userId?: string;
  sessionId?: string;
}

export interface ErrorReport {
  message: string;
  stack?: string;
  url: string;
  line?: number;
  column?: number;
  timestamp: number;
  userAgent: string;
  userId?: string;
  sessionId?: string;
  metadata?: Record<string, any>;
}

export interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
  customMetrics?: Record<string, number>;
}

/**
 * Analytics manager for tracking user interactions and performance
 */
export class AnalyticsManager {
  private static instance: AnalyticsManager;
  private sessionId: string;
  private userId?: string;
  private queue: AnalyticsEvent[] = [];
  private isOnline = true;
  private batchSize = 10;
  private flushInterval = 30000; // 30 seconds
  private endpoint = '/api/analytics';

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.setupEventListeners();
    this.startBatchFlush();
  }

  static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  /**
   * Set user ID for tracking
   */
  setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Track an event
   */
  track(name: string, properties?: Record<string, any>): void {
    const event: AnalyticsEvent = {
      name,
      properties,
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId,
    };

    this.queue.push(event);

    // Flush immediately for critical events
    const criticalEvents = ['error', 'purchase', 'signup', 'login'];
    if (criticalEvents.includes(name)) {
      this.flush();
    }
  }

  /**
   * Track page view
   */
  trackPageView(url: string, title?: string): void {
    this.track('page_view', {
      url,
      title: title || document.title,
      referrer: document.referrer,
      timestamp: Date.now(),
    });
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, properties?: Record<string, any>): void {
    this.track('interaction', {
      element,
      action,
      ...properties,
    });
  }

  /**
   * Track conversion event
   */
  trackConversion(event: string, value?: number, currency?: string): void {
    this.track('conversion', {
      event,
      value,
      currency,
    });
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metrics: PerformanceMetrics): void {
    this.track('performance', metrics);
  }

  /**
   * Flush events to server
   */
  private async flush(): Promise<void> {
    if (this.queue.length === 0 || !this.isOnline) return;

    const events = this.queue.splice(0);

    try {
      await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ events }),
      });
    } catch (error) {
      console.error('Failed to send analytics events:', error);
      // Re-add events to queue for retry
      this.queue.unshift(...events);
    }
  }

  /**
   * Start batch flushing
   */
  private startBatchFlush(): void {
    setInterval(() => {
      if (this.queue.length >= this.batchSize) {
        this.flush();
      }
    }, this.flushInterval);
  }

  /**
   * Setup event listeners
   */
  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;

    // Online/offline status
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.flush(); // Flush queued events when back online
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });

    // Page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.flush(); // Flush events before page becomes hidden
      }
    });

    // Before page unload
    window.addEventListener('beforeunload', () => {
      this.flush();
    });
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }
}

/**
 * Error monitoring and reporting
 */
export class ErrorMonitor {
  private static instance: ErrorMonitor;
  private endpoint = '/api/errors';
  private maxErrors = 50; // Maximum errors to store locally
  private errors: ErrorReport[] = [];

  private constructor() {
    this.setupErrorHandlers();
  }

  static getInstance(): ErrorMonitor {
    if (!ErrorMonitor.instance) {
      ErrorMonitor.instance = new ErrorMonitor();
    }
    return ErrorMonitor.instance;
  }

  /**
   * Report an error manually
   */
  reportError(error: Error, metadata?: Record<string, any>): void {
    const errorReport: ErrorReport = {
      message: error.message,
      stack: error.stack,
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      metadata,
    };

    this.addError(errorReport);
  }

  /**
   * Report custom error
   */
  reportCustomError(message: string, metadata?: Record<string, any>): void {
    const errorReport: ErrorReport = {
      message,
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      metadata,
    };

    this.addError(errorReport);
  }

  /**
   * Add error to queue and send to server
   */
  private addError(errorReport: ErrorReport): void {
    // Add to local storage
    this.errors.push(errorReport);

    // Keep only recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors.shift();
    }

    // Send to server
    this.sendError(errorReport);

    // Track in analytics
    AnalyticsManager.getInstance().track('error', {
      message: errorReport.message,
      url: errorReport.url,
    });
  }

  /**
   * Send error to server
   */
  private async sendError(errorReport: ErrorReport): Promise<void> {
    try {
      await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    } catch (error) {
      console.error('Failed to send error report:', error);
    }
  }

  /**
   * Setup global error handlers
   */
  private setupErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // JavaScript errors
    window.addEventListener('error', (event) => {
      const errorReport: ErrorReport = {
        message: event.message,
        url: event.filename || window.location.href,
        line: event.lineno,
        column: event.colno,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        stack: event.error?.stack,
      };

      this.addError(errorReport);
    });

    // Promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const errorReport: ErrorReport = {
        message: `Unhandled Promise Rejection: ${event.reason}`,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      };

      this.addError(errorReport);
    });
  }

  /**
   * Get stored errors
   */
  getErrors(): ErrorReport[] {
    return [...this.errors];
  }

  /**
   * Clear stored errors
   */
  clearErrors(): void {
    this.errors = [];
  }
}

/**
 * Performance monitoring
 */
export class PerformanceTracker {
  private static instance: PerformanceTracker;
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.setupObservers();
  }

  static getInstance(): PerformanceTracker {
    if (!PerformanceTracker.instance) {
      PerformanceTracker.instance = new PerformanceTracker();
    }
    return PerformanceTracker.instance;
  }

  /**
   * Setup performance observers
   */
  private setupObservers(): void {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return;

    // Largest Contentful Paint
    this.observeMetric('largest-contentful-paint', (entries) => {
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
      this.reportMetrics();
    });

    // First Input Delay
    this.observeMetric('first-input', (entries) => {
      const firstEntry = entries[0];
      this.metrics.fid = firstEntry.processingStart - firstEntry.startTime;
      this.reportMetrics();
    });

    // Cumulative Layout Shift
    this.observeMetric('layout-shift', (entries) => {
      let clsValue = this.metrics.cls || 0;
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.cls = clsValue;
      this.reportMetrics();
    });

    // Navigation timing
    this.trackNavigationTiming();
  }

  /**
   * Observe specific performance metric
   */
  private observeMetric(type: string, callback: (entries: PerformanceEntry[]) => void): void {
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });

      observer.observe({ type, buffered: true });
      this.observers.push(observer);
    } catch (error) {
      console.warn(`Failed to observe ${type}:`, error);
    }
  }

  /**
   * Track navigation timing metrics
   */
  private trackNavigationTiming(): void {
    if (typeof window === 'undefined' || !window.performance) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
          this.metrics.fcp = this.getFirstContentfulPaint();
          this.reportMetrics();
        }
      }, 0);
    });
  }

  /**
   * Get First Contentful Paint
   */
  private getFirstContentfulPaint(): number | undefined {
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcpEntry?.startTime;
  }

  /**
   * Add custom metric
   */
  addCustomMetric(name: string, value: number): void {
    if (!this.metrics.customMetrics) {
      this.metrics.customMetrics = {};
    }
    this.metrics.customMetrics[name] = value;
    this.reportMetrics();
  }

  /**
   * Measure function execution time
   */
  measureFunction<T extends (...args: any[]) => any>(name: string, fn: T): T {
    return ((...args: Parameters<T>) => {
      const start = performance.now();
      const result = fn(...args);
      const end = performance.now();
      
      this.addCustomMetric(`function_${name}`, end - start);
      
      return result;
    }) as T;
  }

  /**
   * Report metrics to analytics
   */
  private reportMetrics(): void {
    AnalyticsManager.getInstance().trackPerformance(this.metrics);
  }

  /**
   * Get current metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Cleanup observers
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

/**
 * User behavior tracking
 */
export class BehaviorTracker {
  private static instance: BehaviorTracker;
  private analytics: AnalyticsManager;
  private scrollDepth = 0;
  private timeOnPage = 0;
  private interactions = 0;
  private startTime: number;

  private constructor() {
    this.analytics = AnalyticsManager.getInstance();
    this.startTime = Date.now();
    this.setupTracking();
  }

  static getInstance(): BehaviorTracker {
    if (!BehaviorTracker.instance) {
      BehaviorTracker.instance = new BehaviorTracker();
    }
    return BehaviorTracker.instance;
  }

  /**
   * Setup behavior tracking
   */
  private setupTracking(): void {
    if (typeof window === 'undefined') return;

    // Scroll depth tracking
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        this.scrollDepth = scrollPercent;
        
        // Track milestone scroll depths
        const milestones = [25, 50, 75, 100];
        if (milestones.includes(scrollPercent)) {
          this.analytics.track('scroll_depth', { depth: scrollPercent });
        }
      }
    });

    // Click tracking
    document.addEventListener('click', (event) => {
      this.interactions++;
      
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const className = target.className;
      const id = target.id;
      const text = target.textContent?.substring(0, 100);

      this.analytics.trackInteraction('click', tagName, {
        className,
        id,
        text,
        x: event.clientX,
        y: event.clientY,
      });
    });

    // Form interactions
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'input' || 
          target.tagName.toLowerCase() === 'textarea' ||
          target.tagName.toLowerCase() === 'select') {
        
        this.analytics.trackInteraction('form_focus', target.tagName.toLowerCase(), {
          name: (target as HTMLInputElement).name,
          type: (target as HTMLInputElement).type,
        });
      }
    });

    // Time on page tracking
    setInterval(() => {
      this.timeOnPage = Date.now() - this.startTime;
    }, 1000);

    // Page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.trackEngagement();
      } else {
        this.startTime = Date.now(); // Reset timer when page becomes visible
      }
    });

    // Before page unload
    window.addEventListener('beforeunload', () => {
      this.trackEngagement();
    });
  }

  /**
   * Track user engagement metrics
   */
  private trackEngagement(): void {
    this.analytics.track('engagement', {
      timeOnPage: this.timeOnPage,
      scrollDepth: this.scrollDepth,
      interactions: this.interactions,
    });
  }

  /**
   * Track custom user action
   */
  trackAction(action: string, properties?: Record<string, any>): void {
    this.analytics.track('user_action', {
      action,
      ...properties,
    });
  }

  /**
   * Get current engagement metrics
   */
  getEngagementMetrics() {
    return {
      timeOnPage: Date.now() - this.startTime,
      scrollDepth: this.scrollDepth,
      interactions: this.interactions,
    };
  }
}

/**
 * Initialize all monitoring systems
 */
export const initializeMonitoring = (userId?: string) => {
  const analytics = AnalyticsManager.getInstance();
  const errorMonitor = ErrorMonitor.getInstance();
  const performanceTracker = PerformanceTracker.getInstance();
  const behaviorTracker = BehaviorTracker.getInstance();

  if (userId) {
    analytics.setUserId(userId);
  }

  // Track initial page load
  analytics.trackPageView(window.location.href);

  return {
    analytics,
    errorMonitor,
    performanceTracker,
    behaviorTracker,
  };
};