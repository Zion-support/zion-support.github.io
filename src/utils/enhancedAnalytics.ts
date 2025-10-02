/**
 * Enhanced Analytics System
 * Tracks user behavior, performance, and business metrics
 */

// import { getPerformanceOptimizer } from './performanceOptimizer';

interface PageView {
  path: string;
  title: string;
  timestamp: number;
  referrer: string;
  userAgent: string;
}

interface UserEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
}

interface ConversionEvent {
  type: 'lead' | 'signup' | 'purchase' | 'download' | 'contact';
  value: number;
  metadata?: Record<string, any>;
  timestamp: number;
}

interface SessionData {
  sessionId: string;
  startTime: number;
  pageViews: PageView[];
  events: UserEvent[];
  conversions: ConversionEvent[];
  performanceMetrics: any;
}

class EnhancedAnalytics {
  private session: SessionData;
  private isInitialized = false;
  private performanceOptimizer: any;

  constructor() {
    this.session = this.createNewSession();
    
    if (typeof window !== 'undefined') {
      this.performanceOptimizer = getPerformanceOptimizer();
      this.initialize();
    }
  }

  /**
   * Initialize analytics system
   */
  private initialize(): void {
    if (this.isInitialized) return;

    // Track page views
    this.trackPageView();

    // Setup event listeners
    this.setupEventListeners();

    // Track session end
    this.setupSessionTracking();

    // Periodic data sync
    this.setupPeriodicSync();

    this.isInitialized = true;
  }

  /**
   * Create new session
   */
  private createNewSession(): SessionData {
    return {
      sessionId: this.generateSessionId(),
      startTime: Date.now(),
      pageViews: [],
      events: [],
      conversions: [],
      performanceMetrics: {},
    };
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Track page view
   */
  trackPageView(path?: string, title?: string): void {
    if (typeof window === 'undefined') return;

    const pageView: PageView = {
      path: path || window.location.pathname,
      title: title || document.title,
      timestamp: Date.now(),
      referrer: document.referrer,
      userAgent: navigator.userAgent,
    };

    this.session.pageViews.push(pageView);
    this.sendToAnalytics('pageview', pageView);
  }

  /**
   * Track custom event
   */
  trackEvent(
    category: string,
    action: string,
    label?: string,
    value?: number
  ): void {
    const event: UserEvent = {
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
    };

    this.session.events.push(event);
    this.sendToAnalytics('event', event);
  }

  /**
   * Track conversion
   */
  trackConversion(
    type: ConversionEvent['type'],
    value: number = 0,
    metadata?: Record<string, any>
  ): void {
    const conversion: ConversionEvent = {
      type,
      value,
      metadata,
      timestamp: Date.now(),
    };

    this.session.conversions.push(conversion);
    this.sendToAnalytics('conversion', conversion);
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string): void {
    this.trackEvent('User Interaction', action, element);
  }

  /**
   * Track form submission
   */
  trackFormSubmission(formName: string, success: boolean): void {
    this.trackEvent(
      'Form',
      success ? 'Submit Success' : 'Submit Error',
      formName
    );

    if (success) {
      this.trackConversion('lead', 1, { form: formName });
    }
  }

  /**
   * Track content engagement
   */
  trackContentEngagement(contentType: string, contentId: string, duration: number): void {
    this.trackEvent('Content Engagement', contentType, contentId, duration);
  }

  /**
   * Track scroll depth
   */
  trackScrollDepth(depth: number): void {
    this.trackEvent('Scroll Depth', `${depth}%`, undefined, depth);
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: string): void {
    this.trackEvent('Error', error.name, `${context || ''}: ${error.message}`);
  }

  /**
   * Track performance metrics
   */
  trackPerformance(): void {
    if (!this.performanceOptimizer) return;

    const metrics = this.performanceOptimizer.getMetrics();
    const score = this.performanceOptimizer.getPerformanceScore();

    this.session.performanceMetrics = {
      metrics,
      score,
      timestamp: Date.now(),
    };

    this.sendToAnalytics('performance', {
      metrics,
      score,
    });
  }

  /**
   * Get session data
   */
  getSessionData(): SessionData {
    return { ...this.session };
  }

  /**
   * Get session duration
   */
  getSessionDuration(): number {
    return Date.now() - this.session.startTime;
  }

  /**
   * Get page views count
   */
  getPageViewsCount(): number {
    return this.session.pageViews.length;
  }

  /**
   * Get events count
   */
  getEventsCount(): number {
    return this.session.events.length;
  }

  /**
   * Get conversions count
   */
  getConversionsCount(): number {
    return this.session.conversions.length;
  }

  /**
   * Setup event listeners
   */
  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;

    // Track clicks on important elements
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      
      // Track CTA clicks
      if (target.closest('button[class*="btn"], a[class*="btn"]')) {
        const text = target.textContent?.trim() || 'Unknown';
        this.trackInteraction('CTA Button', `Click: ${text}`);
      }

      // Track link clicks
      if (target.closest('a[href]')) {
        const href = (target.closest('a') as HTMLAnchorElement).href;
        this.trackInteraction('Link', `Click: ${href}`);
      }
    });

    // Track scroll depth
    let maxScroll = 0;
    const scrollThresholds = [25, 50, 75, 90, 100];
    let trackedThresholds = new Set<number>();

    window.addEventListener('scroll', () => {
      const scrollPercentage = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );

      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;

        // Track milestone scroll depths
        scrollThresholds.forEach((threshold) => {
          if (scrollPercentage >= threshold && !trackedThresholds.has(threshold)) {
            trackedThresholds.add(threshold);
            this.trackScrollDepth(threshold);
          }
        });
      }
    });

    // Track time on page
    let pageStartTime = Date.now();
    
    // Track before page unload
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - pageStartTime;
      this.trackContentEngagement('Page', window.location.pathname, timeOnPage);
    });

    // Track visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        const timeOnPage = Date.now() - pageStartTime;
        this.trackContentEngagement('Page', window.location.pathname, timeOnPage);
      } else {
        pageStartTime = Date.now();
      }
    });

    // Track errors
    window.addEventListener('error', (e) => {
      this.trackError(new Error(e.message), e.filename);
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (e) => {
      this.trackError(new Error(e.reason), 'Unhandled Promise');
    });
  }

  /**
   * Setup session tracking
   */
  private setupSessionTracking(): void {
    if (typeof window === 'undefined') return;

    // Save session data before unload
    window.addEventListener('beforeunload', () => {
      this.saveSession();
    });

    // Restore session on load
    this.restoreSession();
  }

  /**
   * Save session to storage
   */
  private saveSession(): void {
    try {
      localStorage.setItem('analytics_session', JSON.stringify(this.session));
    } catch (error) {
      console.warn('Failed to save analytics session:', error);
    }
  }

  /**
   * Restore session from storage
   */
  private restoreSession(): void {
    try {
      const stored = localStorage.getItem('analytics_session');
      if (stored) {
        const data = JSON.parse(stored);
        
        // Check if session is recent (within 30 minutes)
        if (Date.now() - data.startTime < 30 * 60 * 1000) {
          this.session = data;
        }
      }
    } catch (error) {
      console.warn('Failed to restore analytics session:', error);
    }
  }

  /**
   * Setup periodic sync
   */
  private setupPeriodicSync(): void {
    // Send analytics data every 30 seconds
    setInterval(() => {
      this.syncData();
    }, 30 * 1000);
  }

  /**
   * Sync data to analytics service
   */
  private syncData(): void {
    // Track performance periodically
    this.trackPerformance();

    // Save session
    this.saveSession();

    // Send batch data
    this.sendBatchData();
  }

  /**
   * Send data to analytics service
   */
  private sendToAnalytics(type: string, data: any): void {
    // In production, send to your analytics service
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] ${type}:`, data);
    }

    // Example: Send to Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', type, data);
    }
  }

  /**
   * Send batch data
   */
  private sendBatchData(): void {
    const batchData = {
      sessionId: this.session.sessionId,
      duration: this.getSessionDuration(),
      pageViews: this.session.pageViews.length,
      events: this.session.events.length,
      conversions: this.session.conversions.length,
      performanceScore: this.session.performanceMetrics?.score,
    };

    this.sendToAnalytics('batch', batchData);
  }

  /**
   * Get analytics report
   */
  getReport(): {
    summary: any;
    engagement: any;
    performance: any;
    conversions: any;
  } {
    return {
      summary: {
        sessionId: this.session.sessionId,
        duration: this.getSessionDuration(),
        startTime: new Date(this.session.startTime).toISOString(),
      },
      engagement: {
        pageViews: this.getPageViewsCount(),
        events: this.getEventsCount(),
        averageTimePerPage: this.calculateAverageTimePerPage(),
      },
      performance: {
        score: this.session.performanceMetrics?.score,
        metrics: this.session.performanceMetrics?.metrics,
      },
      conversions: {
        total: this.getConversionsCount(),
        breakdown: this.getConversionsBreakdown(),
      },
    };
  }

  /**
   * Calculate average time per page
   */
  private calculateAverageTimePerPage(): number {
    if (this.session.pageViews.length === 0) return 0;

    const duration = this.getSessionDuration();
    return Math.round(duration / this.session.pageViews.length);
  }

  /**
   * Get conversions breakdown
   */
  private getConversionsBreakdown(): Record<string, number> {
    const breakdown: Record<string, number> = {};

    this.session.conversions.forEach((conversion) => {
      breakdown[conversion.type] = (breakdown[conversion.type] || 0) + 1;
    });

    return breakdown;
  }

  /**
   * Export session data
   */
  exportData(): string {
    return JSON.stringify(this.session, null, 2);
  }

  /**
   * Reset session
   */
  reset(): void {
    this.session = this.createNewSession();
    this.saveSession();
  }
}

// Singleton instance
let analyticsInstance: EnhancedAnalytics | null = null;

export const getAnalytics = (): EnhancedAnalytics => {
  if (!analyticsInstance) {
    analyticsInstance = new EnhancedAnalytics();
  }
  return analyticsInstance;
};

export default EnhancedAnalytics;
