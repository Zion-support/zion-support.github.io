/**
 * Enhanced Analytics System
 * Advanced analytics with user behavior tracking, conversion funnels, and real-time insights
 */

export interface AnalyticsEvent {
  id: string;
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  properties?: Record<string, unknown>;
  page?: string;
  referrer?: string;
}

export interface UserSession {
  id: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  pageViews: number;
  events: AnalyticsEvent[];
  userAgent: string;
  referrer?: string;
  device: {
    type: 'desktop' | 'mobile' | 'tablet';
    os: string;
    browser: string;
    screen: {
      width: number;
      height: number;
    };
  };
  location?: {
    country: string;
    region: string;
    city: string;
  };
}

export interface ConversionFunnel {
  name: string;
  steps: string[];
  conversions: Map<string, number>;
  dropOffRates: Map<string, number>;
}

export interface AnalyticsReport {
  timestamp: number;
  sessionId: string;
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: number;
  topPages: Array<{ page: string; views: number; uniqueViews: number }>;
  topEvents: Array<{ event: string; count: number }>;
  deviceBreakdown: Record<string, number>;
  trafficSources: Record<string, number>;
  conversions: Record<string, number>;
  userJourney: AnalyticsEvent[];
}

export class EnhancedAnalytics {
  private static instance: EnhancedAnalytics;
  private currentSession: UserSession | null = null;
  private events: AnalyticsEvent[] = [];
  private funnels: Map<string, ConversionFunnel> = new Map();
  private isInitialized = false;
  private eventQueue: AnalyticsEvent[] = [];
  private readonly MAX_QUEUE_SIZE = 100;
  private readonly BATCH_SIZE = 10;
  private batchTimeout: number | null = null;

  public static getInstance(): EnhancedAnalytics {
    if (!EnhancedAnalytics.instance) {
      EnhancedAnalytics.instance = new EnhancedAnalytics();
    }
    return EnhancedAnalytics.instance;
  }

  public initialize(): void {
    if (this.isInitialized) return;

    this.startNewSession();
    this.setupEventTracking();
    this.setupPageTracking();
    this.setupUserInteractionTracking();
    this.setupPerformanceTracking();
    this.setupConversionTracking();
    this.startBatchProcessing();

    this.isInitialized = true;
    console.log('Enhanced Analytics initialized');
  }

  private startNewSession(): void {
    const sessionId = this.generateSessionId();
    const now = Date.now();

    this.currentSession = {
      id: sessionId,
      startTime: now,
      pageViews: 0,
      events: [],
      userAgent: navigator.userAgent,
      referrer: document.referrer || undefined,
      device: this.getDeviceInfo(),
      location: undefined // Would be populated by IP geolocation service
    };

    // Track session start
    this.track('session', 'start', 'session_start', undefined, undefined, {
      sessionId,
      timestamp: now,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    });
  }

  private setupEventTracking(): void {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target) {
        const element = this.getElementInfo(target);
        this.track('interaction', 'click', element.tagName, element.text, undefined, {
          element: element.tagName,
          className: element.className,
          id: element.id,
          href: element.href,
          position: { x: event.clientX, y: event.clientY }
        });
      }
    }, true);

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      if (form) {
        this.track('form', 'submit', form.action || 'unknown', form.method, undefined, {
          formId: form.id,
          formName: form.name,
          action: form.action,
          method: form.method,
          fieldCount: form.elements.length
        });
      }
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    let scrollTimeout: number | null = null;

    window.addEventListener('scroll', () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      scrollTimeout = window.setTimeout(() => {
        const scrollDepth = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          // Track milestone scroll depths
          if ([25, 50, 75, 90, 100].includes(scrollDepth)) {
            this.track('engagement', 'scroll', `scroll_${scrollDepth}%`, undefined, scrollDepth);
          }
        }
      }, 150);
    }, { passive: true });

    // Track time on page
    let startTime = Date.now();
    let timeTracked = false;

    const trackTimeOnPage = () => {
      if (!timeTracked) {
        timeTracked = true;
        const timeOnPage = Date.now() - startTime;
        
        // Track milestone time intervals
        const milestones = [30, 60, 120, 300, 600]; // seconds
        milestones.forEach(milestone => {
          if (timeOnPage >= milestone * 1000 && timeOnPage < (milestone + 30) * 1000) {
            this.track('engagement', 'time_on_page', `${milestone}s`, undefined, milestone);
          }
        });
      }
    };

    // Track time on page before leaving
    window.addEventListener('beforeunload', trackTimeOnPage);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) trackTimeOnPage();
    });
  }

  private setupPageTracking(): void {
    // Track page views
    this.trackPageView();

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.track('page', 'hidden', 'page_hidden');
      } else {
        this.track('page', 'visible', 'page_visible');
      }
    });

    // Track page load performance
    window.addEventListener('load', () => {
      if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          this.track('performance', 'page_load', 'load_complete', undefined, perfData.loadEventEnd - perfData.navigationStart, {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart,
            loadComplete: perfData.loadEventEnd - perfData.navigationStart,
            firstByte: perfData.responseStart - perfData.navigationStart
          });
        }
      }
    });
  }

  private setupUserInteractionTracking(): void {
    // Track mouse movements (heatmap data)
    let mouseMovements: Array<{ x: number; y: number; timestamp: number }> = [];
    let movementTimeout: number | null = null;

    document.addEventListener('mousemove', (event) => {
      mouseMovements.push({
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now()
      });

      if (movementTimeout) clearTimeout(movementTimeout);
      
      movementTimeout = window.setTimeout(() => {
        if (mouseMovements.length > 10) {
          this.track('interaction', 'mouse_movement', 'mouse_tracking', undefined, mouseMovements.length, {
            movements: mouseMovements.slice(-10), // Last 10 movements
            duration: mouseMovements[mouseMovements.length - 1].timestamp - mouseMovements[0].timestamp
          });
        }
        mouseMovements = [];
      }, 1000);
    }, { passive: true });

    // Track keyboard usage
    document.addEventListener('keydown', (event) => {
      this.track('interaction', 'keydown', event.key, undefined, undefined, {
        key: event.key,
        code: event.code,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey
      });
    });
  }

  private setupPerformanceTracking(): void {
    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach(entry => {
            if (entry.name === 'first-contentful-paint') {
              this.track('performance', 'web_vital', 'FCP', undefined, entry.startTime);
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP observer not supported:', e);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach(entry => {
            this.track('performance', 'web_vital', 'LCP', undefined, entry.startTime, {
              element: entry.element?.tagName,
              url: entry.url
            });
          });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer not supported:', e);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach(entry => {
            this.track('performance', 'web_vital', 'FID', undefined, (entry as { processingStart: number }).processingStart - entry.startTime, {
              eventType: entry.name,
              target: (entry as { target?: { tagName: string } }).target?.tagName
            });
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer not supported:', e);
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach(entry => {
            this.track('performance', 'web_vital', 'CLS', undefined, (entry as { value: number }).value, {
              sources: (entry as { sources?: Array<{ node?: { tagName: string } }> }).sources?.map((s) => s.node?.tagName)
            });
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer not supported:', e);
      }
    }
  }

  private setupConversionTracking(): void {
    // Define conversion funnels
    this.defineFunnel('contact', ['page_view', 'contact_form_view', 'form_submit', 'thank_you']);
    this.defineFunnel('newsletter', ['page_view', 'newsletter_signup_view', 'email_entered', 'subscription_confirmed']);
    this.defineFunnel('service_inquiry', ['page_view', 'service_page_view', 'contact_form_view', 'inquiry_submitted']);
  }

  private defineFunnel(name: string, steps: string[]): void {
    this.funnels.set(name, {
      name,
      steps,
      conversions: new Map(),
      dropOffRates: new Map()
    });
  }

  private trackPageView(): void {
    if (this.currentSession) {
      this.currentSession.pageViews++;
    }

    this.track('page', 'view', 'page_view', window.location.pathname, undefined, {
      title: document.title,
      url: window.location.href,
      referrer: document.referrer,
      timestamp: Date.now()
    });
  }

  public track(
    category: string,
    action: string,
    label?: string,
    value?: number,
    properties?: Record<string, unknown>
  ): void {
    const event: AnalyticsEvent = {
      id: this.generateEventId(),
      name: `${category}_${action}`,
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: this.currentSession?.id || 'unknown',
      userId: this.getUserId(),
      properties,
      page: window.location.pathname,
      referrer: document.referrer
    };

    this.events.push(event);
    if (this.currentSession) {
      this.currentSession.events.push(event);
    }

    this.eventQueue.push(event);

    // Process conversion funnels
    this.updateFunnels(event);

    // Send event if queue is full
    if (this.eventQueue.length >= this.MAX_QUEUE_SIZE) {
      this.flushEventQueue();
    }
  }

  private updateFunnels(event: AnalyticsEvent): void {
    this.funnels.forEach(funnel => {
      const stepIndex = funnel.steps.findIndex(step => step === event.action);
      if (stepIndex >= 0) {
        const currentConversions = funnel.conversions.get(event.action) || 0;
        funnel.conversions.set(event.action, currentConversions + 1);

        // Calculate drop-off rate
        if (stepIndex > 0) {
          const prevStep = funnel.steps[stepIndex - 1];
          const prevConversions = funnel.conversions.get(prevStep) || 0;
          const currentConversions = funnel.conversions.get(event.action) || 0;
          const dropOffRate = prevConversions > 0 ? (1 - currentConversions / prevConversions) * 100 : 0;
          funnel.dropOffRates.set(event.action, dropOffRate);
        }
      }
    });
  }

  private startBatchProcessing(): void {
    this.batchTimeout = window.setInterval(() => {
      if (this.eventQueue.length > 0) {
        this.flushEventQueue();
      }
    }, 5000); // Process every 5 seconds
  }

  private async flushEventQueue(): Promise<void> {
    if (this.eventQueue.length === 0) return;

    const batch = this.eventQueue.splice(0, this.BATCH_SIZE);
    
    try {
      await fetch('/api/analytics/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          events: batch,
          session: this.currentSession,
          timestamp: Date.now()
        })
      });
    } catch (error) {
      console.warn('Failed to send analytics batch:', error);
      // Re-queue events if sending failed
      this.eventQueue.unshift(...batch);
    }
  }

  public getSession(): UserSession | null {
    return this.currentSession;
  }

  public getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  public getFunnels(): Map<string, ConversionFunnel> {
    return new Map(this.funnels);
  }

  public generateReport(): AnalyticsReport {
    const now = Date.now();
    const session = this.currentSession;
    
    if (!session) {
      throw new Error('No active session');
    }

    // Calculate metrics
    const uniqueVisitors = new Set(this.events.map(e => e.userId)).size;
    const pageViews = session.pageViews;
    const bounceRate = this.calculateBounceRate();
    const averageSessionDuration = this.calculateAverageSessionDuration();

    // Top pages
    const pageViewsMap = new Map<string, { views: number; uniqueViews: Set<string> }>();
    this.events.forEach(event => {
      if (event.action === 'page_view' && event.page) {
        const current = pageViewsMap.get(event.page) || { views: 0, uniqueViews: new Set() };
        current.views++;
        if (event.userId) current.uniqueViews.add(event.userId);
        pageViewsMap.set(event.page, current);
      }
    });

    const topPages = Array.from(pageViewsMap.entries())
      .map(([page, data]) => ({
        page,
        views: data.views,
        uniqueViews: data.uniqueViews.size
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    // Top events
    const eventCounts = new Map<string, number>();
    this.events.forEach(event => {
      const key = `${event.category}_${event.action}`;
      eventCounts.set(key, (eventCounts.get(key) || 0) + 1);
    });

    const topEvents = Array.from(eventCounts.entries())
      .map(([event, count]) => ({ event, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Device breakdown
    const deviceBreakdown = {
      desktop: 0,
      mobile: 0,
      tablet: 0
    };

    if (session.device) {
      deviceBreakdown[session.device.type]++;
    }

    // Traffic sources
    const trafficSources: Record<string, number> = {};
    this.events.forEach(event => {
      if (event.referrer) {
        const domain = new URL(event.referrer).hostname;
        trafficSources[domain] = (trafficSources[domain] || 0) + 1;
      }
    });

    // Conversions
    const conversions: Record<string, number> = {};
    this.funnels.forEach(funnel => {
      const lastStep = funnel.steps[funnel.steps.length - 1];
      conversions[funnel.name] = funnel.conversions.get(lastStep) || 0;
    });

    return {
      timestamp: now,
      sessionId: session.id,
      pageViews,
      uniqueVisitors,
      bounceRate,
      averageSessionDuration,
      topPages,
      topEvents,
      deviceBreakdown,
      trafficSources,
      conversions,
      userJourney: session.events
    };
  }

  private calculateBounceRate(): number {
    // Simple bounce rate calculation - sessions with only one page view
    const sessions = new Map<string, number>();
    this.events.forEach(event => {
      if (event.action === 'page_view') {
        sessions.set(event.sessionId, (sessions.get(event.sessionId) || 0) + 1);
      }
    });

    const singlePageSessions = Array.from(sessions.values()).filter(count => count === 1).length;
    const totalSessions = sessions.size;
    
    return totalSessions > 0 ? (singlePageSessions / totalSessions) * 100 : 0;
  }

  private calculateAverageSessionDuration(): number {
    if (!this.currentSession) return 0;
    
    const now = Date.now();
    const duration = now - this.currentSession.startTime;
    return Math.round(duration / 1000); // seconds
  }

  private getElementInfo(element: HTMLElement): { tagName: string; className: string; id: string; text: string; href?: string } {
    return {
      tagName: element.tagName.toLowerCase(),
      className: element.className,
      id: element.id,
      text: element.textContent?.slice(0, 50) || '',
      href: (element as HTMLAnchorElement).href
    };
  }

  private getDeviceInfo(): UserSession['device'] {
    const userAgent = navigator.userAgent;
    const screen = {
      width: window.screen.width,
      height: window.screen.height
    };

    let type: 'desktop' | 'mobile' | 'tablet' = 'desktop';
    if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
      type = 'mobile';
    } else if (/iPad|Tablet/.test(userAgent)) {
      type = 'tablet';
    }

    let os = 'Unknown';
    if (userAgent.includes('Windows')) os = 'Windows';
    else if (userAgent.includes('Mac')) os = 'macOS';
    else if (userAgent.includes('Linux')) os = 'Linux';
    else if (userAgent.includes('Android')) os = 'Android';
    else if (userAgent.includes('iOS')) os = 'iOS';

    let browser = 'Unknown';
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';

    return { type, os, browser, screen };
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateEventId(): string {
    return `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getUserId(): string | undefined {
    // This would typically come from authentication system
    return localStorage.getItem('userId') || undefined;
  }

  public endSession(): void {
    if (this.currentSession) {
      this.currentSession.endTime = Date.now();
      this.currentSession.duration = this.currentSession.endTime - this.currentSession.startTime;
      
      this.track('session', 'end', 'session_end', this.currentSession.duration);
      
      // Send final session data
      this.flushEventQueue();
      
      this.currentSession = null;
    }
  }
}

// Export singleton instance
export const enhancedAnalytics = EnhancedAnalytics.getInstance();