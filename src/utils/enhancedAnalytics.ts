/**
 * Enhanced Analytics System for Content Performance Tracking
 * Tracks user engagement, content views, and conversion metrics
 */

export interface ContentMetrics {
  id: string;
  views: number;
  uniqueVisitors: number;
  averageTimeOnPage: number;
  bounceRate: number;
  conversionRate: number;
  socialShares: number;
  comments: number;
}

export interface UserEngagement {
  userId?: string;
  sessionId: string;
  timestamp: number;
  event: 'view' | 'click' | 'share' | 'conversion' | 'scroll' | 'exit';
  contentId: string;
  metadata?: Record<string, any>;
}

class EnhancedAnalytics {
  private static instance: EnhancedAnalytics;
  private events: UserEngagement[] = [];
  private sessionId: string;

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeTracking();
  }

  public static getInstance(): EnhancedAnalytics {
    if (!EnhancedAnalytics.instance) {
      EnhancedAnalytics.instance = new EnhancedAnalytics();
    }
    return EnhancedAnalytics.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeTracking(): void {
    if (typeof window !== 'undefined') {
      // Track page visibility
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.trackEvent('exit', window.location.pathname);
        }
      });

      // Track scroll depth
      let maxScroll = 0;
      window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          if (maxScroll > 25 && maxScroll <= 50) {
            this.trackEvent('scroll', window.location.pathname, { depth: '25%' });
          } else if (maxScroll > 50 && maxScroll <= 75) {
            this.trackEvent('scroll', window.location.pathname, { depth: '50%' });
          } else if (maxScroll > 75) {
            this.trackEvent('scroll', window.location.pathname, { depth: '75%' });
          }
        }
      }, { passive: true });
    }
  }

  public trackEvent(
    event: UserEngagement['event'],
    contentId: string,
    metadata?: Record<string, any>
  ): void {
    const engagement: UserEngagement = {
      sessionId: this.sessionId,
      timestamp: Date.now(),
      event,
      contentId,
      metadata,
    };

    this.events.push(engagement);

    // Send to analytics service (placeholder)
    this.sendToAnalytics(engagement);
  }

  public trackPageView(contentId: string): void {
    this.trackEvent('view', contentId);
  }

  public trackClick(contentId: string, element: string): void {
    this.trackEvent('click', contentId, { element });
  }

  public trackShare(contentId: string, platform: string): void {
    this.trackEvent('share', contentId, { platform });
  }

  public trackConversion(contentId: string, type: string): void {
    this.trackEvent('conversion', contentId, { type });
  }

  private sendToAnalytics(engagement: UserEngagement): void {
    // In production, send to your analytics service
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics, Plausible, or custom endpoint
      console.debug('Analytics Event:', engagement);
      
      // Batch events and send periodically
      if (this.events.length >= 10) {
        this.flushEvents();
      }
    }
  }

  private async flushEvents(): Promise<void> {
    if (this.events.length === 0) return;

    const eventsToSend = [...this.events];
    this.events = [];

    try {
      // Send to analytics endpoint
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events: eventsToSend }),
      });
    } catch (error) {
      console.error('Failed to send analytics:', error);
      // Re-add events to queue
      this.events.push(...eventsToSend);
    }
  }

  public getMetrics(contentId: string): ContentMetrics | null {
    const contentEvents = this.events.filter(e => e.contentId === contentId);
    
    if (contentEvents.length === 0) return null;

    const views = contentEvents.filter(e => e.event === 'view').length;
    const uniqueVisitors = new Set(contentEvents.map(e => e.sessionId)).size;
    const shares = contentEvents.filter(e => e.event === 'share').length;
    const conversions = contentEvents.filter(e => e.event === 'conversion').length;

    return {
      id: contentId,
      views,
      uniqueVisitors,
      averageTimeOnPage: 0, // Calculate from view/exit events
      bounceRate: 0, // Calculate from single-page sessions
      conversionRate: views > 0 ? (conversions / views) * 100 : 0,
      socialShares: shares,
      comments: 0, // Would come from comment system
    };
  }

  public getMostEngaging(limit: number = 10): string[] {
    const contentMap = new Map<string, number>();
    
    this.events.forEach(event => {
      const current = contentMap.get(event.contentId) || 0;
      contentMap.set(event.contentId, current + 1);
    });

    return Array.from(contentMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([id]) => id);
  }
}

export const analytics = EnhancedAnalytics.getInstance();
export default analytics;