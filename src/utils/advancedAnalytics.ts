interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp?: number;
}

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

class AdvancedAnalytics {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private userId?: string;
  private isEnabled: boolean;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.isEnabled = this.shouldEnableAnalytics();
    this.initializePerformanceTracking();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private shouldEnableAnalytics(): boolean {
    // Check for analytics consent
    const consent = localStorage.getItem('analytics-consent');
    if (consent === 'false') return false;

    // Check for development mode
    if (process.env.NODE_ENV === 'development') return false;

    // Check for privacy mode
    if (navigator.doNotTrack === '1') return false;

    return true;
  }

  private initializePerformanceTracking(): void {
    if (!this.isEnabled || typeof window === 'undefined') return;

    // Track page load performance
    window.addEventListener('load', () => {
      this.trackPerformanceMetrics();
    });

    // Track Web Vitals
    this.trackWebVitals();

    // Track user interactions
    this.trackUserInteractions();
  }

  private async trackPerformanceMetrics(): Promise<void> {
    if (!this.isEnabled) return;

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
        timeToInteractive: 0
      };

      // Get FCP
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        metrics.firstContentfulPaint = fcpEntry.startTime;
      }

      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        metrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
      }

      this.trackEvent('performance_metrics', {
        ...metrics,
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
    } catch (error) {
      console.warn('Failed to track performance metrics:', error);
    }
  }

  private trackWebVitals(): void {
    if (!this.isEnabled) return;

    // Track Core Web Vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }: any) => {
      onCLS((metric: any) => {
        this.trackEvent('web_vital', {
          name: 'CLS',
          value: metric.value,
          delta: metric.delta,
          id: metric.id
        });
      });

      onINP((metric: any) => {
        this.trackEvent('web_vital', {
          name: 'INP',
          value: metric.value,
          delta: metric.delta,
          id: metric.id
        });
      });

      onFCP((metric: any) => {
        this.trackEvent('web_vital', {
          name: 'FCP',
          value: metric.value,
          delta: metric.delta,
          id: metric.id
        });
      });

      onLCP((metric: any) => {
        this.trackEvent('web_vital', {
          name: 'LCP',
          value: metric.value,
          delta: metric.delta,
          id: metric.id
        });
      });

      onTTFB((metric: any) => {
        this.trackEvent('web_vital', {
          name: 'TTFB',
          value: metric.value,
          delta: metric.delta,
          id: metric.id
        });
      });
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });
  }

  private trackUserInteractions(): void {
    if (!this.isEnabled) return;

    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      this.trackEvent('click', {
        element: target.tagName,
        id: target.id,
        className: target.className,
        text: target.textContent?.slice(0, 100),
        x: event.clientX,
        y: event.clientY
      });
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent('form_submit', {
        formId: form.id,
        formClass: form.className,
        action: form.action,
        method: form.method
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent('scroll_depth', {
          depth: maxScrollDepth,
          url: window.location.href
        });
      }
    });
  }

  public trackEvent(name: string, properties?: Record<string, unknown>): void {
    if (!this.isEnabled) return;

    const event: AnalyticsEvent = {
      name,
      properties: {
        ...properties,
        sessionId: this.sessionId,
        userId: this.userId,
        timestamp: Date.now(),
        url: window.location.href
      },
      timestamp: Date.now()
    };

    this.events.push(event);
    this.sendEvent(event);
  }

  private async sendEvent(event: AnalyticsEvent): Promise<void> {
    try {
      // Send to analytics service
      await fetch('/api/analytics', {
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

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public enable(): void {
    this.isEnabled = true;
    localStorage.setItem('analytics-consent', 'true');
  }

  public disable(): void {
    this.isEnabled = false;
    localStorage.setItem('analytics-consent', 'false');
  }

  public getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  public clearEvents(): void {
    this.events = [];
  }
}

// Export singleton instance
export const analytics = new AdvancedAnalytics();
export default analytics;