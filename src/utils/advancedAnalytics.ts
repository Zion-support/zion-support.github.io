/**
 * Advanced Analytics System
 */

export interface AnalyticsEvent {
  name: string;
  properties: Record<string, string | number | boolean>;
  timestamp: number;
  userId?: string;
  sessionId: string;
}

export interface UserBehavior {
  pageViews: number;
  clicks: number;
  scrollDepth: number;
  timeOnPage: number;
  interactions: number;
}

export class AdvancedAnalytics {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private userId?: string;
  private behavior: UserBehavior = {
    pageViews: 0,
    clicks: 0,
    scrollDepth: 0,
    timeOnPage: 0,
    interactions: 0
  };

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeTracking();
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private initializeTracking(): void {
    if (typeof window === 'undefined') return;

    // Track page views
    this.trackPageView();

    // Track clicks
    document.addEventListener('click', (event) => {
      this.behavior.clicks++;
      this.trackEvent('click', {
        element: (event.target as HTMLElement)?.tagName,
        text: (event.target as HTMLElement)?.textContent?.slice(0, 100)
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
      this.behavior.scrollDepth = maxScrollDepth;
    });

    // Track time on page
    const startTime = Date.now();
    setInterval(() => {
      this.behavior.timeOnPage = Date.now() - startTime;
    }, 1000);

    // Track interactions
    ['keydown', 'mousedown', 'touchstart'].forEach(eventType => {
      document.addEventListener(eventType, () => {
        this.behavior.interactions++;
      });
    });
  }

  public trackEvent(name: string, properties: Record<string, string | number | boolean> = {}): void {
    const event: AnalyticsEvent = {
      name,
      properties,
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId
    };

    this.events.push(event);
    console.log('Analytics Event:', event);
  }

  public trackPageView(page?: string): void {
    this.behavior.pageViews++;
    this.trackEvent('page_view', {
      page: page || window.location.pathname,
      url: window.location.href,
      referrer: document.referrer
    });
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public getUserBehavior(): UserBehavior {
    return { ...this.behavior };
  }

  public getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public exportData(): string {
    return JSON.stringify({
      sessionId: this.sessionId,
      userId: this.userId,
      behavior: this.behavior,
      events: this.events,
      timestamp: Date.now()
    }, null, 2);
  }

  public clearData(): void {
    this.events = [];
    this.behavior = {
      pageViews: 0,
      clicks: 0,
      scrollDepth: 0,
      timeOnPage: 0,
      interactions: 0
    };
  }
}

export const advancedAnalytics = new AdvancedAnalytics();