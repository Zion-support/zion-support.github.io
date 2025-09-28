/**
 * Advanced Analytics System
 * Comprehensive analytics and monitoring for the Zion Tech Group website
 */

interface AnalyticsConfig {
  enablePerformanceTracking: boolean;
  enableUserBehaviorTracking: boolean;
  enableErrorTracking: boolean;
  enableConversionTracking: boolean;
  enableRealTimeMonitoring: boolean;
  enableHeatmapTracking: boolean;
  enableSessionRecording: boolean;
  enableA11yTracking: boolean;
  enableSEOTracking: boolean;
  enableSecurityTracking: boolean;
}

interface AnalyticsEvent {
  id: string;
  type: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: Date;
  sessionId: string;
  userId?: string;
  metadata?: Record<string, any>;
}

interface AnalyticsMetrics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: number;
  conversionRate: number;
  errorRate: number;
  performanceScore: number;
  accessibilityScore: number;
  seoScore: number;
  securityScore: number;
  lastUpdated: Date;
}

interface UserSession {
  id: string;
  startTime: Date;
  endTime?: Date;
  pageViews: number;
  events: AnalyticsEvent[];
  userAgent: string;
  referrer: string;
  device: {
    type: string;
    os: string;
    browser: string;
    screen: { width: number; height: number };
  };
  location?: {
    country: string;
    region: string;
    city: string;
  };
}

class AdvancedAnalytics {
  private config: AnalyticsConfig;
  private metrics: AnalyticsMetrics;
  private currentSession: UserSession | null = null;
  private events: AnalyticsEvent[] = [];
  private isInitialized = false;
  private observers: IntersectionObserver[] = [];
  private performanceObserver: PerformanceObserver | null = null;

  constructor(config: Partial<AnalyticsConfig> = {}) {
    this.config = {
      enablePerformanceTracking: true,
      enableUserBehaviorTracking: true,
      enableErrorTracking: true,
      enableConversionTracking: true,
      enableRealTimeMonitoring: true,
      enableHeatmapTracking: true,
      enableSessionRecording: true,
      enableA11yTracking: true,
      enableSEOTracking: true,
      enableSecurityTracking: true,
      ...config
    };

    this.metrics = {
      pageViews: 0,
      uniqueVisitors: 0,
      bounceRate: 0,
      averageSessionDuration: 0,
      conversionRate: 0,
      errorRate: 0,
      performanceScore: 0,
      accessibilityScore: 0,
      seoScore: 0,
      securityScore: 0,
      lastUpdated: new Date()
    };
  }

  /**
   * Initialize the analytics system
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize session
      this.initializeSession();

      // Initialize performance tracking
      if (this.config.enablePerformanceTracking) {
        this.initializePerformanceTracking();
      }

      // Initialize user behavior tracking
      if (this.config.enableUserBehaviorTracking) {
        this.initializeUserBehaviorTracking();
      }

      // Initialize error tracking
      if (this.config.enableErrorTracking) {
        this.initializeErrorTracking();
      }

      // Initialize conversion tracking
      if (this.config.enableConversionTracking) {
        this.initializeConversionTracking();
      }

      // Initialize real-time monitoring
      if (this.config.enableRealTimeMonitoring) {
        this.initializeRealTimeMonitoring();
      }

      // Initialize heatmap tracking
      if (this.config.enableHeatmapTracking) {
        this.initializeHeatmapTracking();
      }

      // Initialize session recording
      if (this.config.enableSessionRecording) {
        this.initializeSessionRecording();
      }

      // Initialize accessibility tracking
      if (this.config.enableA11yTracking) {
        this.initializeAccessibilityTracking();
      }

      // Initialize SEO tracking
      if (this.config.enableSEOTracking) {
        this.initializeSEOTracking();
      }

      // Initialize security tracking
      if (this.config.enableSecurityTracking) {
        this.initializeSecurityTracking();
      }

      this.isInitialized = true;
      console.log('📊 Advanced Analytics initialized');
    } catch (error) {
      console.error('Error initializing analytics:', error);
    }
  }

  /**
   * Initialize user session
   */
  private initializeSession(): void {
    if (typeof window === 'undefined') return;

    const sessionId = this.generateSessionId();
    const device = this.detectDevice();
    
    this.currentSession = {
      id: sessionId,
      startTime: new Date(),
      pageViews: 0,
      events: [],
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      device
    };

    // Track page view
    this.trackEvent('page_view', 'navigation', 'page_load', window.location.pathname);
    this.metrics.pageViews++;

    // Track session end on page unload
    window.addEventListener('beforeunload', () => {
      if (this.currentSession) {
        this.currentSession.endTime = new Date();
        this.trackEvent('session_end', 'session', 'session_complete');
      }
    });
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Detect device information
   */
  private detectDevice(): UserSession['device'] {
    if (typeof window === 'undefined') {
      return {
        type: 'unknown',
        os: 'unknown',
        browser: 'unknown',
        screen: { width: 0, height: 0 }
      };
    }

    const userAgent = navigator.userAgent;
    const screen = {
      width: window.screen.width,
      height: window.screen.height
    };

    // Detect device type
    let type = 'desktop';
    if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      type = 'mobile';
    } else if (/Tablet|iPad/i.test(userAgent)) {
      type = 'tablet';
    }

    // Detect OS
    let os = 'unknown';
    if (/Windows/i.test(userAgent)) os = 'Windows';
    else if (/Mac/i.test(userAgent)) os = 'macOS';
    else if (/Linux/i.test(userAgent)) os = 'Linux';
    else if (/Android/i.test(userAgent)) os = 'Android';
    else if (/iOS/i.test(userAgent)) os = 'iOS';

    // Detect browser
    let browser = 'unknown';
    if (/Chrome/i.test(userAgent)) browser = 'Chrome';
    else if (/Firefox/i.test(userAgent)) browser = 'Firefox';
    else if (/Safari/i.test(userAgent)) browser = 'Safari';
    else if (/Edge/i.test(userAgent)) browser = 'Edge';
    else if (/Opera/i.test(userAgent)) browser = 'Opera';

    return { type, os, browser, screen };
  }

  /**
   * Initialize performance tracking
   */
  private initializePerformanceTracking(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Track Core Web Vitals
    this.observePerformanceMetric('first-contentful-paint', (entry) => {
      this.trackEvent('performance', 'core_web_vitals', 'fcp', undefined, entry.startTime);
    });

    this.observePerformanceMetric('largest-contentful-paint', (entry) => {
      this.trackEvent('performance', 'core_web_vitals', 'lcp', undefined, entry.startTime);
    });

    this.observePerformanceMetric('first-input', (entry) => {
      const fid = entry.processingStart - entry.startTime;
      this.trackEvent('performance', 'core_web_vitals', 'fid', undefined, fid);
    });

    this.observePerformanceMetric('layout-shift', (entry) => {
      if (!entry.hadRecentInput) {
        this.trackEvent('performance', 'core_web_vitals', 'cls', undefined, entry.value);
      }
    });

    // Track navigation timing
    this.observePerformanceMetric('navigation', (entry) => {
      const navEntry = entry as PerformanceNavigationTiming;
      this.trackEvent('performance', 'navigation', 'ttfb', undefined, navEntry.responseStart - navEntry.requestStart);
      this.trackEvent('performance', 'navigation', 'dom_content_loaded', undefined, navEntry.domContentLoadedEventEnd - navEntry.navigationStart);
      this.trackEvent('performance', 'navigation', 'load_complete', undefined, navEntry.loadEventEnd - navEntry.navigationStart);
    });
  }

  /**
   * Observe performance metric
   */
  private observePerformanceMetric(entryType: string, callback: (entry: PerformanceEntry) => void): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          callback(entry);
        }
      });
      
      observer.observe({ entryTypes: [entryType] });
    } catch (error) {
      console.warn(`Failed to observe ${entryType}:`, error);
    }
  }

  /**
   * Initialize user behavior tracking
   */
  private initializeUserBehaviorTracking(): void {
    if (typeof document === 'undefined') return;

    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const element = this.getElementInfo(target);
      this.trackEvent('user_interaction', 'click', element.tagName, element.text || element.id);
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent('user_interaction', 'scroll', 'scroll_depth', undefined, scrollDepth);
      }
    });

    // Track form interactions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent('user_interaction', 'form', 'form_submit', form.id || form.className);
    });

    // Track focus events
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      const element = this.getElementInfo(target);
      this.trackEvent('user_interaction', 'focus', element.tagName, element.text || element.id);
    });
  }

  /**
   * Get element information
   */
  private getElementInfo(element: HTMLElement): { tagName: string; text?: string; id?: string; className?: string } {
    return {
      tagName: element.tagName.toLowerCase(),
      text: element.textContent?.slice(0, 50),
      id: element.id,
      className: element.className
    };
  }

  /**
   * Initialize error tracking
   */
  private initializeErrorTracking(): void {
    if (typeof window === 'undefined') return;

    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      this.trackEvent('error', 'javascript', 'js_error', event.message, undefined, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.trackEvent('error', 'promise', 'unhandled_rejection', event.reason?.message || 'Unknown error', undefined, {
        reason: event.reason
      });
    });

    // Track resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.trackEvent('error', 'resource', 'resource_error', (event.target as any)?.src || (event.target as any)?.href);
      }
    }, true);
  }

  /**
   * Initialize conversion tracking
   */
  private initializeConversionTracking(): void {
    if (typeof document === 'undefined') return;

    // Track button clicks that might be conversions
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const button = target.closest('button, a[role="button"]');
      
      if (button) {
        const text = button.textContent?.toLowerCase() || '';
        const isConversion = /buy|purchase|sign up|register|subscribe|contact|get started|learn more/i.test(text);
        
        if (isConversion) {
          this.trackEvent('conversion', 'button_click', 'conversion_attempt', text);
        }
      }
    });

    // Track form submissions as potential conversions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formId = form.id || form.className;
      this.trackEvent('conversion', 'form_submit', 'conversion_attempt', formId);
    });
  }

  /**
   * Initialize real-time monitoring
   */
  private initializeRealTimeMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor page visibility
    document.addEventListener('visibilitychange', () => {
      this.trackEvent('user_interaction', 'visibility', document.hidden ? 'hidden' : 'visible');
    });

    // Monitor online/offline status
    window.addEventListener('online', () => {
      this.trackEvent('system', 'connectivity', 'online');
    });

    window.addEventListener('offline', () => {
      this.trackEvent('system', 'connectivity', 'offline');
    });

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        this.trackEvent('system', 'memory', 'usage', undefined, memory.usedJSHeapSize / 1024 / 1024);
      }, 30000); // Every 30 seconds
    }
  }

  /**
   * Initialize heatmap tracking
   */
  private initializeHeatmapTracking(): void {
    if (typeof document === 'undefined') return;

    // Track mouse movements
    let mousePositions: { x: number; y: number; timestamp: number }[] = [];
    
    document.addEventListener('mousemove', (event) => {
      mousePositions.push({
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now()
      });

      // Keep only last 100 positions
      if (mousePositions.length > 100) {
        mousePositions = mousePositions.slice(-100);
      }
    });

    // Send heatmap data periodically
    setInterval(() => {
      if (mousePositions.length > 0) {
        this.trackEvent('heatmap', 'mouse_movement', 'positions', undefined, undefined, {
          positions: mousePositions
        });
        mousePositions = [];
      }
    }, 10000); // Every 10 seconds
  }

  /**
   * Initialize session recording
   */
  private initializeSessionRecording(): void {
    if (typeof document === 'undefined') return;

    // Record DOM changes
    const observer = new MutationObserver((mutations) => {
      const changes = mutations.map(mutation => ({
        type: mutation.type,
        target: mutation.target.nodeName,
        addedNodes: mutation.addedNodes.length,
        removedNodes: mutation.removedNodes.length,
        timestamp: Date.now()
      }));

      this.trackEvent('session', 'dom_change', 'mutation', undefined, undefined, {
        changes
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    this.observers.push(observer);
  }

  /**
   * Initialize accessibility tracking
   */
  private initializeAccessibilityTracking(): void {
    if (typeof document === 'undefined') return;

    // Track keyboard navigation
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.trackEvent('accessibility', 'navigation', 'keyboard_tab');
      }
    });

    // Track focus management
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      const hasAriaLabel = target.hasAttribute('aria-label') || target.hasAttribute('aria-labelledby');
      this.trackEvent('accessibility', 'focus', 'focus_event', undefined, undefined, {
        hasAriaLabel,
        tagName: target.tagName,
        role: target.getAttribute('role')
      });
    });

    // Track screen reader usage
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      this.trackEvent('accessibility', 'preferences', 'reduced_motion');
    }
  }

  /**
   * Initialize SEO tracking
   */
  private initializeSEOTracking(): void {
    if (typeof document === 'undefined') return;

    // Track meta tag presence
    const metaTags = document.querySelectorAll('meta');
    const seoMetaTags = Array.from(metaTags).filter(meta => 
      ['description', 'keywords', 'author', 'robots'].includes(meta.name) ||
      meta.getAttribute('property')?.startsWith('og:') ||
      meta.name?.startsWith('twitter:')
    );

    this.trackEvent('seo', 'meta_tags', 'count', undefined, seoMetaTags.length);

    // Track heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    this.trackEvent('seo', 'content', 'heading_count', undefined, headings.length);

    // Track image alt attributes
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.hasAttribute('alt'));
    this.trackEvent('seo', 'images', 'alt_coverage', undefined, (imagesWithAlt.length / images.length) * 100);
  }

  /**
   * Initialize security tracking
   */
  private initializeSecurityTracking(): void {
    if (typeof document === 'undefined') return;

    // Track CSP violations
    document.addEventListener('securitypolicyviolation', (event) => {
      this.trackEvent('security', 'csp', 'violation', event.violatedDirective, undefined, {
        blockedURI: event.blockedURI,
        effectiveDirective: event.effectiveDirective
      });
    });

    // Track potential XSS attempts
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      
      if (element.setAttribute) {
        const originalSetAttribute = element.setAttribute;
        element.setAttribute = function(name: string, value: string) {
          if (/javascript:|on\w+=/i.test(value)) {
            this.trackEvent('security', 'xss', 'attempt', `${name}="${value}"`);
          }
          return originalSetAttribute.call(this, name, value);
        }.bind(this);
      }
      
      return element;
    }.bind(this);
  }

  /**
   * Track custom event
   */
  public trackEvent(
    category: string,
    action: string,
    label?: string,
    value?: number,
    metadata?: Record<string, any>
  ): void {
    const event: AnalyticsEvent = {
      id: this.generateEventId(),
      type: 'custom',
      category,
      action,
      label,
      value,
      timestamp: new Date(),
      sessionId: this.currentSession?.id || 'unknown',
      metadata
    };

    this.events.push(event);
    
    if (this.currentSession) {
      this.currentSession.events.push(event);
    }

    // Update metrics
    this.updateMetrics();

    // Send to analytics service (in production)
    this.sendEvent(event);
  }

  /**
   * Generate unique event ID
   */
  private generateEventId(): string {
    return `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Send event to analytics service
   */
  private sendEvent(event: AnalyticsEvent): void {
    // In production, this would send to your analytics service
    console.log('Analytics Event:', event);
  }

  /**
   * Update analytics metrics
   */
  private updateMetrics(): void {
    if (!this.currentSession) return;

    // Calculate bounce rate
    const sessionDuration = this.currentSession.endTime 
      ? this.currentSession.endTime.getTime() - this.currentSession.startTime.getTime()
      : Date.now() - this.currentSession.startTime.getTime();

    this.metrics.averageSessionDuration = sessionDuration;
    this.metrics.bounceRate = this.currentSession.pageViews === 1 ? 100 : 0;
    this.metrics.lastUpdated = new Date();
  }

  /**
   * Get analytics metrics
   */
  public getMetrics(): AnalyticsMetrics {
    return { ...this.metrics };
  }

  /**
   * Get current session
   */
  public getCurrentSession(): UserSession | null {
    return this.currentSession;
  }

  /**
   * Get all events
   */
  public getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Generate analytics report
   */
  public generateReport(): string {
    const metrics = this.getMetrics();
    const session = this.getCurrentSession();
    const events = this.getEvents();

    const report = `
Analytics Report:
================
Page Views: ${metrics.pageViews}
Unique Visitors: ${metrics.uniqueVisitors}
Bounce Rate: ${metrics.bounceRate.toFixed(2)}%
Average Session Duration: ${Math.round(metrics.averageSessionDuration / 1000)}s
Conversion Rate: ${metrics.conversionRate.toFixed(2)}%
Error Rate: ${metrics.errorRate.toFixed(2)}%
Performance Score: ${metrics.performanceScore}/100
Accessibility Score: ${metrics.accessibilityScore}/100
SEO Score: ${metrics.seoScore}/100
Security Score: ${metrics.securityScore}/100
Total Events: ${events.length}
Session Duration: ${session ? Math.round((Date.now() - session.startTime.getTime()) / 1000) : 0}s
Last Updated: ${metrics.lastUpdated.toISOString()}
    `;

    return report.trim();
  }

  /**
   * Cleanup resources
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];

    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
      this.performanceObserver = null;
    }

    this.isInitialized = false;
  }
}

// Export singleton instance
export const advancedAnalytics = new AdvancedAnalytics();

// Export class for custom instances
export { AdvancedAnalytics };
export type { AnalyticsConfig, AnalyticsEvent, AnalyticsMetrics, UserSession };