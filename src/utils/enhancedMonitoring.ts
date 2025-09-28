// Global types are available through tsconfig.json
/**
 * Enhanced Monitoring and Analytics System
 * Provides comprehensive monitoring, error tracking, and performance analytics
 */

// Layout Shift interface for CLS monitoring
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: Array<{
    node: Node;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  }>;
}

interface MonitoringConfig {
  enableErrorTracking: boolean;
  enablePerformanceMonitoring: boolean;
  enableUserAnalytics: boolean;
  enableRealUserMonitoring: boolean;
  enableCrashReporting: boolean;
  enableCustomMetrics: boolean;
  samplingRate: number;
  batchSize: number;
  flushInterval: number;
  maxRetries: number;
  endpoint: string;
}

interface ErrorData {
  message: string;
  stack?: string;
  url: string;
  line?: number;
  column?: number;
  timestamp: number;
  userAgent: string;
  userId?: string;
  sessionId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'resource' | 'promise' | 'custom';
  context?: Record<string, unknown>;
}

interface PerformanceData {
  name: string;
  value: number;
  timestamp: number;
  type: 'navigation' | 'resource' | 'measure' | 'mark' | 'custom';
  url: string;
  sessionId: string;
  userId?: string;
  metadata?: Record<string, unknown>;
}

interface UserEvent {
  event: string;
  properties: Record<string, unknown>;
  timestamp: number;
  sessionId: string;
  userId?: string;
  url: string;
}

class EnhancedMonitoring {
  private static instance: EnhancedMonitoring;
  private config: MonitoringConfig;
  private errorQueue: ErrorData[] = [];
  private performanceQueue: PerformanceData[] = [];
  private eventQueue: UserEvent[] = [];
  private sessionId: string;
  private userId?: string;
  private isOnline: boolean = navigator.onLine;
  private retryCount: number = 0;

  private constructor() {
    this.config = {
      enableErrorTracking: true,
      enablePerformanceMonitoring: true,
      enableUserAnalytics: true,
      enableRealUserMonitoring: true,
      enableCrashReporting: true,
      enableCustomMetrics: true,
      samplingRate: 1.0,
      batchSize: 10,
      flushInterval: 30000, // 30 seconds
      maxRetries: 3,
      endpoint: '/api/monitoring'
    };

    this.sessionId = this.generateSessionId();
    this.initializeMonitoring();
  }

  public static getInstance(): EnhancedMonitoring {
    if (!EnhancedMonitoring.instance) {
      EnhancedMonitoring.instance = new EnhancedMonitoring();
    }
    return EnhancedMonitoring.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeMonitoring(): void {
    // Set up error tracking
    if (this.config.enableErrorTracking) {
      this.setupErrorTracking();
    }

    // Set up performance monitoring
    if (this.config.enablePerformanceMonitoring) {
      this.setupPerformanceMonitoring();
    }

    // Set up user analytics
    if (this.config.enableUserAnalytics) {
      this.setupUserAnalytics();
    }

    // Set up real user monitoring
    if (this.config.enableRealUserMonitoring) {
      this.setupRealUserMonitoring();
    }

    // Set up network status monitoring
    this.setupNetworkMonitoring();

    // Set up periodic flushing
    this.setupPeriodicFlush();

    // Set up beforeunload handler
    this.setupBeforeUnloadHandler();
  }

  private setupErrorTracking(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.trackError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename || window.location.href,
        line: event.lineno,
        column: event.colno,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        sessionId: this.sessionId,
        userId: this.userId,
        severity: 'high',
        category: 'javascript'
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError({
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        sessionId: this.sessionId,
        userId: this.userId,
        severity: 'high',
        category: 'promise',
        context: { reason: event.reason }
      });
    });

    // Resource loading error handler
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLElement;
        this.trackError({
          message: `Failed to load resource: ${target.tagName}`,
          url: (target as HTMLImageElement).src || (target as HTMLLinkElement).href || window.location.href,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          sessionId: this.sessionId,
          userId: this.userId,
          severity: 'medium',
          category: 'resource',
          context: {
            tagName: target.tagName,
            src: (target as HTMLImageElement).src,
            href: (target as HTMLLinkElement).href
          }
        });
      }
    }, true);
  }

  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.trackPerformance({
          name: 'LCP',
          value: lastEntry.startTime,
          type: 'measure',
          url: window.location.href,
          sessionId: this.sessionId,
          userId: this.userId,
          timestamp: Date.now(),
          metadata: { entry: lastEntry }
        });
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.trackPerformance({
            name: 'FID',
            value: (entry as PerformanceEventTiming).processingStart - entry.startTime,
            type: 'measure',
            url: window.location.href,
            sessionId: this.sessionId,
            userId: this.userId,
            timestamp: Date.now(),
            metadata: { entry }
          });
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            this.trackPerformance({
              name: 'CLS',
              value: (entry as any).value,
              type: 'measure',
              url: window.location.href,
              sessionId: this.sessionId,
              userId: this.userId,
              timestamp: Date.now(),
              metadata: { entry }
            });
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.trackPerformance({
            name: 'FCP',
            value: fcpEntry.startTime,
            type: 'measure',
            url: window.location.href,
            sessionId: this.sessionId,
            userId: this.userId,
            timestamp: Date.now(),
            metadata: { entry: fcpEntry }
          });
        }
      }).observe({ entryTypes: ['paint'] });
    }

    // Monitor navigation timing
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.trackPerformance({
          name: 'DOMContentLoaded',
          value: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          type: 'navigation',
          url: window.location.href,
          sessionId: this.sessionId,
          userId: this.userId,
          timestamp: Date.now()
        });

        this.trackPerformance({
          name: 'LoadComplete',
          value: navigation.loadEventEnd - navigation.loadEventStart,
          type: 'navigation',
          url: window.location.href,
          sessionId: this.sessionId,
          userId: this.userId,
          timestamp: Date.now()
        });
      }
    });
  }

  private setupUserAnalytics(): void {
    // Track page views
    this.trackEvent('page_view', {
      url: window.location.href,
      title: document.title,
      referrer: document.referrer
    });

    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      this.trackEvent('click', {
        element: target.tagName,
        id: target.id,
        className: target.className,
        text: target.textContent?.substring(0, 100),
        url: window.location.href
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent('scroll_depth', {
          depth: maxScrollDepth,
          url: window.location.href
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent('form_submit', {
        formId: form.id,
        formClass: form.className,
        action: form.action,
        method: form.method,
        url: window.location.href
      });
    });
  }

  private setupRealUserMonitoring(): void {
    // Monitor network requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const startTime = performance.now();
      try {
        const response = await originalFetch(...args);
        const endTime = performance.now();
        
        this.trackPerformance({
          name: 'fetch_request',
          value: endTime - startTime,
          type: 'custom',
          url: args[0] as string,
          sessionId: this.sessionId,
          userId: this.userId,
          timestamp: Date.now(),
          metadata: {
            method: args[1]?.method || 'GET',
            status: response.status,
            statusText: response.statusText
          }
        });

        return response;
      } catch (error) {
        this.trackError({
          message: `Fetch request failed: ${error}`,
          url: args[0] as string,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          sessionId: this.sessionId,
          userId: this.userId,
          severity: 'medium',
          category: 'network',
          context: { method: args[1]?.method || 'GET' }
        });
        throw error;
      }
    };
  }

  private setupNetworkMonitoring(): void {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.flushQueues();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  private setupPeriodicFlush(): void {
    setInterval(() => {
      this.flushQueues();
    }, this.config.flushInterval);
  }

  private setupBeforeUnloadHandler(): void {
    window.addEventListener('beforeunload', () => {
      this.flushQueues(true);
    });
  }

  public trackError(errorData: ErrorData): void {
    if (!this.config.enableErrorTracking) return;
    if (Math.random() > this.config.samplingRate) return;

    this.errorQueue.push(errorData);

    if (this.errorQueue.length >= this.config.batchSize) {
      this.flushErrorQueue();
    }
  }

  public trackPerformance(performanceData: PerformanceData): void {
    if (!this.config.enablePerformanceMonitoring) return;
    if (Math.random() > this.config.samplingRate) return;

    this.performanceQueue.push(performanceData);

    if (this.performanceQueue.length >= this.config.batchSize) {
      this.flushPerformanceQueue();
    }
  }

  public trackEvent(event: string, properties: Record<string, unknown> = {}): void {
    if (!this.config.enableUserAnalytics) return;
    if (Math.random() > this.config.samplingRate) return;

    this.eventQueue.push({
      event,
      properties,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      url: window.location.href
    });

    if (this.eventQueue.length >= this.config.batchSize) {
      this.flushEventQueue();
    }
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public trackCustomMetric(name: string, value: number, metadata?: Record<string, unknown>): void {
    if (!this.config.enableCustomMetrics) return;

    this.trackPerformance({
      name,
      value,
      type: 'custom',
      url: window.location.href,
      sessionId: this.sessionId,
      userId: this.userId,
      timestamp: Date.now(),
      metadata
    });
  }

  private async flushQueues(sync = false): Promise<void> {
    if (!this.isOnline) return;

    const promises = [
      this.flushErrorQueue(),
      this.flushPerformanceQueue(),
      this.flushEventQueue()
    ];

    if (sync) {
      await Promise.allSettled(promises);
    } else {
      Promise.allSettled(promises);
    }
  }

  private async flushErrorQueue(): Promise<void> {
    if (this.errorQueue.length === 0) return;

    const errors = [...this.errorQueue];
    this.errorQueue = [];

    try {
      await this.sendData('/api/monitoring/errors', { errors });
    } catch (error) {
      console.error('Failed to send error data:', error);
      this.errorQueue.unshift(...errors);
    }
  }

  private async flushPerformanceQueue(): Promise<void> {
    if (this.performanceQueue.length === 0) return;

    const performance = [...this.performanceQueue];
    this.performanceQueue = [];

    try {
      await this.sendData('/api/monitoring/performance', { performance });
    } catch (error) {
      console.error('Failed to send performance data:', error);
      this.performanceQueue.unshift(...performance);
    }
  }

  private async flushEventQueue(): Promise<void> {
    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    try {
      await this.sendData('/api/monitoring/events', { events });
    } catch (error) {
      console.error('Failed to send event data:', error);
      this.eventQueue.unshift(...events);
    }
  }

  private async sendData(endpoint: string, data: Record<string, unknown>): Promise<void> {
    if (this.retryCount >= this.config.maxRetries) {
      console.warn('Max retries reached, dropping data');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      this.retryCount = 0;
    } catch (error) {
      this.retryCount++;
      console.error(`Failed to send data to ${endpoint}:`, error);
      throw error;
    }
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public getUserId(): string | undefined {
    return this.userId;
  }

  public getQueueSizes(): { errors: number; performance: number; events: number } {
    return {
      errors: this.errorQueue.length,
      performance: this.performanceQueue.length,
      events: this.eventQueue.length
    };
  }
}

export const enhancedMonitoring = EnhancedMonitoring.getInstance();
export default enhancedMonitoring;