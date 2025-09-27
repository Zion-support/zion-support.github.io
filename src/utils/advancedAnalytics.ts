// Advanced Analytics System with Privacy-First Approach
interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customDimensions?: Record<string, string | number>;
  timestamp: number;
  sessionId: string;
  userId?: string;
  pageUrl: string;
  userAgent: string;
  referrer: string;
  screenResolution: string;
  language: string;
  timezone: string;
}

interface UserSession {
  id: string;
  startTime: number;
  endTime?: number;
  pageViews: number;
  events: AnalyticsEvent[];
  duration: number;
  bounceRate: boolean;
  conversionEvents: string[];
  deviceInfo: {
    type: 'desktop' | 'mobile' | 'tablet';
    os: string;
    browser: string;
    screenSize: string;
  };
}

interface PerformanceMetrics {
  pageLoadTime: number;
  domContentLoadedTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  resourceLoadTimes: Record<string, number>;
}

interface ConversionFunnel {
  step: string;
  users: number;
  conversionRate: number;
  dropOffRate: number;
  averageTime: number;
}

export class AdvancedAnalytics {
  private static instance: AdvancedAnalytics;
  private events: AnalyticsEvent[] = [];
  private currentSession: UserSession;
  private performanceMetrics: PerformanceMetrics = {} as PerformanceMetrics;
  private conversionFunnels: Map<string, ConversionFunnel[]> = new Map();
  private heatmapData: Array<{ x: number; y: number; intensity: number }> = [];
  private scrollDepth: number[] = [];
  private abTests: Map<string, { variant: string; conversionRate: number }> = new Map();
  private userSegments: Map<string, string[]> = new Map();
  private privacyConsent: boolean = false;
  private offlineQueue: AnalyticsEvent[] = [];

  private constructor() {
    this.currentSession = this.initializeSession();
    this.setupEventListeners();
    this.loadPerformanceMetrics();
    this.checkPrivacyConsent();
  }

  public static getInstance(): AdvancedAnalytics {
    if (!AdvancedAnalytics.instance) {
      AdvancedAnalytics.instance = new AdvancedAnalytics();
    }
    return AdvancedAnalytics.instance;
  }

  private initializeSession(): UserSession {
    const sessionId = this.generateSessionId();
    const deviceInfo = this.getDeviceInfo();
    
    return {
      id: sessionId,
      startTime: Date.now(),
      pageViews: 0,
      events: [],
      duration: 0,
      bounceRate: false,
      conversionEvents: [],
      deviceInfo
    };
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private getDeviceInfo() {
    const userAgent = navigator.userAgent;
    const screenWidth = window.screen.width;
    
    let deviceType: 'desktop' | 'mobile' | 'tablet' = 'desktop';
    if (screenWidth < 768) deviceType = 'mobile';
    else if (screenWidth < 1024) deviceType = 'tablet';
    
    const os = this.getOperatingSystem(userAgent);
    const browser = this.getBrowser(userAgent);
    
    return {
      type: deviceType,
      os,
      browser,
      screenSize: `${window.screen.width}x${window.screen.height}`
    };
  }

  private getOperatingSystem(userAgent: string): string {
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Unknown';
  }

  private getBrowser(userAgent: string): string {
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Unknown';
  }

  private setupEventListeners(): void {
    // Page view tracking
    window.addEventListener('load', () => {
      this.trackPageView();
    });

    // Scroll depth tracking
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        this.scrollDepth.push(scrollPercent);
        
        // Track scroll milestones
        if ([25, 50, 75, 90, 100].includes(scrollPercent)) {
          this.trackEvent({
            name: 'scroll_depth',
            category: 'engagement',
            action: 'scroll',
            label: `${scrollPercent}%`,
            value: scrollPercent
          });
        }
      }
    });

    // Click tracking for heatmap
    document.addEventListener('click', (event) => {
      const x = event.clientX;
      const y = event.clientY;
      
      this.heatmapData.push({
        x: x / window.innerWidth,
        y: y / window.innerHeight,
        intensity: 1
      });
      
      // Track specific element clicks
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        this.trackEvent({
          name: 'element_click',
          category: 'interaction',
          action: 'click',
          label: target.textContent?.trim() || target.tagName,
          customDimensions: {
            elementType: target.tagName,
            elementId: target.id,
            elementClass: target.className
          }
        });
      }
    });

    // Form interaction tracking
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent({
        name: 'form_submit',
        category: 'conversion',
        action: 'submit',
        label: form.id || form.className || 'unknown_form',
        customDimensions: {
          formId: form.id,
          formAction: form.action,
          formMethod: form.method
        }
      });
    });

    // Error tracking
    window.addEventListener('error', (event) => {
      this.trackEvent({
        name: 'javascript_error',
        category: 'error',
        action: 'error',
        label: event.message,
        customDimensions: {
          filename: event.filename,
          lineNumber: event.lineno.toString(),
          columnNumber: event.colno.toString(),
          stack: event.error?.stack
        }
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.trackEvent({
        name: 'promise_rejection',
        category: 'error',
        action: 'unhandled_rejection',
        label: event.reason?.toString() || 'Unknown promise rejection',
        customDimensions: {
          reason: event.reason?.toString()
        }
      });
    });

    // Session end tracking
    window.addEventListener('beforeunload', () => {
      this.endSession();
    });

    // Visibility change tracking
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackEvent({
          name: 'page_hidden',
          category: 'engagement',
          action: 'visibility_change',
          label: 'hidden'
        });
      } else {
        this.trackEvent({
          name: 'page_visible',
          category: 'engagement',
          action: 'visibility_change',
          label: 'visible'
        });
      }
    });

    // Online/offline tracking
    window.addEventListener('online', () => {
      this.trackEvent({
        name: 'connection_restored',
        category: 'system',
        action: 'network',
        label: 'online'
      });
      this.processOfflineQueue();
    });

    window.addEventListener('offline', () => {
      this.trackEvent({
        name: 'connection_lost',
        category: 'system',
        action: 'network',
        label: 'offline'
      });
    });
  }

  private loadPerformanceMetrics(): void {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paint = performance.getEntriesByType('paint');
          
          this.performanceMetrics = {
            pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoadedTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
            largestContentfulPaint: 0, // Will be updated by observer
            firstInputDelay: 0, // Will be updated by observer
            cumulativeLayoutShift: 0, // Will be updated by observer
            timeToInteractive: navigation.domInteractive - navigation.navigationStart,
            resourceLoadTimes: this.getResourceLoadTimes()
          };

          this.trackEvent({
            name: 'page_performance',
            category: 'performance',
            action: 'load_metrics',
            label: 'page_load_complete',
            value: this.performanceMetrics.pageLoadTime,
            customDimensions: {
              domContentLoaded: this.performanceMetrics.domContentLoadedTime.toString(),
              firstContentfulPaint: this.performanceMetrics.firstContentfulPaint.toString(),
              timeToInteractive: this.performanceMetrics.timeToInteractive.toString()
            }
          });
        }, 0);
      });
    }
  }

  private getResourceLoadTimes(): Record<string, number> {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const loadTimes: Record<string, number> = {};
    
    resources.forEach(resource => {
      const url = new URL(resource.name);
      const fileName = url.pathname.split('/').pop() || resource.name;
      loadTimes[fileName] = resource.responseEnd - resource.startTime;
    });
    
    return loadTimes;
  }

  private checkPrivacyConsent(): void {
    // Check for privacy consent (GDPR compliance)
    const consent = localStorage.getItem('analytics_consent');
    this.privacyConsent = consent === 'true';
    
    if (!this.privacyConsent) {
      console.log('Analytics: Waiting for user consent');
    }
  }

  public setPrivacyConsent(consent: boolean): void {
    this.privacyConsent = consent;
    localStorage.setItem('analytics_consent', consent.toString());
    
    if (consent && this.offlineQueue.length > 0) {
      this.processOfflineQueue();
    }
  }

  public trackEvent(eventData: Partial<AnalyticsEvent>): void {
    if (!this.privacyConsent) {
      return;
    }

    const event: AnalyticsEvent = {
      name: eventData.name || 'unknown_event',
      category: eventData.category || 'general',
      action: eventData.action || 'unknown_action',
      label: eventData.label,
      value: eventData.value,
      customDimensions: eventData.customDimensions || {},
      timestamp: Date.now(),
      sessionId: this.currentSession.id,
      userId: this.getCurrentUserId(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    this.events.push(event);
    this.currentSession.events.push(event);

    // Send to analytics service if online
    if (navigator.onLine) {
      this.sendEvent(event);
    } else {
      this.offlineQueue.push(event);
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  public trackPageView(page?: string): void {
    this.currentSession.pageViews++;
    
    this.trackEvent({
      name: 'page_view',
      category: 'navigation',
      action: 'view',
      label: page || window.location.pathname,
      customDimensions: {
        pageTitle: document.title,
        pageUrl: window.location.href,
        referrer: document.referrer
      }
    });
  }

  public trackConversion(conversionType: string, value?: number): void {
    this.currentSession.conversionEvents.push(conversionType);
    
    this.trackEvent({
      name: 'conversion',
      category: 'conversion',
      action: conversionType,
      label: conversionType,
      value: value,
      customDimensions: {
        conversionType,
        sessionDuration: (Date.now() - this.currentSession.startTime).toString()
      }
    });
  }

  public trackUserSegment(segment: string, properties: string[]): void {
    this.userSegments.set(segment, properties);
    
    this.trackEvent({
      name: 'user_segment',
      category: 'user',
      action: 'segment_assignment',
      label: segment,
      customDimensions: {
        segment,
        properties: properties.join(',')
      }
    });
  }

  public trackABTest(testName: string, variant: string): void {
    this.abTests.set(testName, { variant, conversionRate: 0 });
    
    this.trackEvent({
      name: 'ab_test',
      category: 'experiment',
      action: 'variant_assignment',
      label: testName,
      customDimensions: {
        testName,
        variant
      }
    });
  }

  public trackCustomMetric(metricName: string, value: number, unit?: string): void {
    this.trackEvent({
      name: 'custom_metric',
      category: 'metrics',
      action: 'measurement',
      label: metricName,
      value: value,
      customDimensions: {
        metricName,
        unit: unit || 'count'
      }
    });
  }

  private async sendEvent(event: AnalyticsEvent): Promise<void> {
    try {
      // Send to your analytics endpoint
      await fetch('/api/analytics/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Failed to send analytics event:', error);
      // Add back to offline queue for retry
      this.offlineQueue.push(event);
    }
  }

  private processOfflineQueue(): void {
    const queue = [...this.offlineQueue];
    this.offlineQueue = [];
    
    queue.forEach(event => {
      this.sendEvent(event);
    });
  }

  private getCurrentUserId(): string | undefined {
    // Get user ID from authentication system or generate anonymous ID
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }

  private endSession(): void {
    this.currentSession.endTime = Date.now();
    this.currentSession.duration = this.currentSession.endTime - this.currentSession.startTime;
    this.currentSession.bounceRate = this.currentSession.pageViews <= 1;

    this.trackEvent({
      name: 'session_end',
      category: 'session',
      action: 'end',
      label: 'session_complete',
      value: this.currentSession.duration,
      customDimensions: {
        sessionDuration: this.currentSession.duration.toString(),
        pageViews: this.currentSession.pageViews.toString(),
        bounceRate: this.currentSession.bounceRate.toString(),
        conversionEvents: this.currentSession.conversionEvents.join(',')
      }
    });
  }

  public getAnalyticsData(): {
    events: AnalyticsEvent[];
    session: UserSession;
    performanceMetrics: PerformanceMetrics;
    heatmapData: Array<{ x: number; y: number; intensity: number }>;
    scrollDepth: number[];
    userSegments: Map<string, string[]>;
    abTests: Map<string, { variant: string; conversionRate: number }>;
  } {
    return {
      events: this.events,
      session: this.currentSession,
      performanceMetrics: this.performanceMetrics,
      heatmapData: this.heatmapData,
      scrollDepth: this.scrollDepth,
      userSegments: this.userSegments,
      abTests: this.abTests
    };
  }

  public generateReport(): {
    totalEvents: number;
    uniqueUsers: number;
    averageSessionDuration: number;
    bounceRate: number;
    topPages: Array<{ page: string; views: number }>;
    topEvents: Array<{ event: string; count: number }>;
    performanceSummary: {
      averageLoadTime: number;
      averageFCP: number;
      averageLCP: number;
    };
  } {
    const uniqueUsers = new Set(this.events.map(e => e.userId)).size;
    const sessions = this.events.filter(e => e.name === 'session_end');
    const averageSessionDuration = sessions.reduce((acc, s) => acc + (s.value || 0), 0) / sessions.length;
    const bounceRate = sessions.filter(s => s.customDimensions?.bounceRate === 'true').length / sessions.length;

    // Top pages
    const pageViews = this.events.filter(e => e.name === 'page_view');
    const pageViewCounts = pageViews.reduce((acc, e) => {
      const page = e.label || 'unknown';
      acc[page] = (acc[page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const topPages = Object.entries(pageViewCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([page, views]) => ({ page, views }));

    // Top events
    const eventCounts = this.events.reduce((acc, e) => {
      acc[e.name] = (acc[e.name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const topEvents = Object.entries(eventCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([event, count]) => ({ event, count }));

    // Performance summary
    const performanceEvents = this.events.filter(e => e.name === 'page_performance');
    const averageLoadTime = performanceEvents.reduce((acc, e) => acc + (e.value || 0), 0) / performanceEvents.length;
    const averageFCP = performanceEvents.reduce((acc, e) => acc + parseFloat(e.customDimensions?.firstContentfulPaint || '0'), 0) / performanceEvents.length;
    const averageLCP = performanceEvents.reduce((acc, e) => acc + parseFloat(e.customDimensions?.largestContentfulPaint || '0'), 0) / performanceEvents.length;

    return {
      totalEvents: this.events.length,
      uniqueUsers,
      averageSessionDuration,
      bounceRate,
      topPages,
      topEvents,
      performanceSummary: {
        averageLoadTime,
        averageFCP,
        averageLCP
      }
    };
  }

  public cleanup(): void {
    this.endSession();
  }
}

// Export singleton instance
export const advancedAnalytics = AdvancedAnalytics.getInstance();