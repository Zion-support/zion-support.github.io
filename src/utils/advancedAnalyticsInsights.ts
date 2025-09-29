/**
 * Advanced Analytics & Insights System
 * Comprehensive analytics with real-time insights and predictive capabilities
 */

interface UserBehavior {
  sessionId: string;
  userId?: string;
  timestamp: number;
  page: string;
  action: string;
  duration?: number;
  metadata: Record<string, any>;
}

interface ConversionEvent {
  eventType: string;
  userId?: string;
  sessionId: string;
  timestamp: number;
  value?: number;
  metadata: Record<string, any>;
}

interface UserJourney {
  sessionId: string;
  userId?: string;
  startTime: number;
  endTime?: number;
  pages: string[];
  actions: string[];
  duration: number;
  conversionEvents: ConversionEvent[];
  exitPage?: string;
  bounceRate: boolean;
}

interface PerformanceInsight {
  metric: string;
  value: number;
  threshold: number;
  status: 'good' | 'warning' | 'critical';
  recommendation: string;
  impact: 'low' | 'medium' | 'high';
}

interface PredictiveInsight {
  type: 'conversion' | 'churn' | 'engagement' | 'performance';
  probability: number;
  confidence: number;
  factors: string[];
  recommendation: string;
  timeframe: string;
}

interface AnalyticsReport {
  period: string;
  totalSessions: number;
  uniqueUsers: number;
  averageSessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number; uniqueViews: number }>;
  topActions: Array<{ action: string; count: number }>;
  userJourneys: UserJourney[];
  performanceInsights: PerformanceInsight[];
  predictiveInsights: PredictiveInsight[];
  recommendations: string[];
}

class AdvancedAnalyticsInsights {
  private behaviors: UserBehavior[] = [];
  private conversions: ConversionEvent[] = [];
  private journeys: Map<string, UserJourney> = new Map();
  private sessionStartTime: number = Date.now();
  private currentSessionId: string;
  private isInitialized: boolean = false;
  private maxBehaviors: number = 10000;
  private maxConversions: number = 1000;

  constructor() {
    this.currentSessionId = this.generateSessionId();
  }

  /**
   * Initialize the analytics system
   */
  public initialize(): void {
    if (this.isInitialized) {
      console.warn('Advanced Analytics & Insights is already initialized');
      return;
    }

    this.isInitialized = true;
    console.log('📊 Advanced Analytics & Insights initialized');

    // Setup event listeners
    this.setupEventListeners();
    
    // Setup page visibility tracking
    this.setupPageVisibilityTracking();
    
    // Setup performance monitoring
    this.setupPerformanceMonitoring();
    
    // Start real-time analysis
    this.startRealTimeAnalysis();
  }

  /**
   * Track user behavior
   */
  public trackBehavior(
    action: string,
    page: string = window.location.pathname,
    metadata: Record<string, any> = {}
  ): void {
    const behavior: UserBehavior = {
      sessionId: this.currentSessionId,
      userId: this.getUserId(),
      timestamp: Date.now(),
      page,
      action,
      metadata
    };

    this.behaviors.push(behavior);
    
    // Keep only recent behaviors
    if (this.behaviors.length > this.maxBehaviors) {
      this.behaviors = this.behaviors.slice(-this.maxBehaviors);
    }

    // Update current journey
    this.updateCurrentJourney(action, page);

    // Check for conversion events
    this.checkConversionEvents(behavior);
  }

  /**
   * Track conversion event
   */
  public trackConversion(
    eventType: string,
    value?: number,
    metadata: Record<string, any> = {}
  ): void {
    const conversion: ConversionEvent = {
      eventType,
      userId: this.getUserId(),
      sessionId: this.currentSessionId,
      timestamp: Date.now(),
      value,
      metadata
    };

    this.conversions.push(conversion);
    
    // Keep only recent conversions
    if (this.conversions.length > this.maxConversions) {
      this.conversions = this.conversions.slice(-this.maxConversions);
    }

    // Update current journey
    const journey = this.journeys.get(this.currentSessionId);
    if (journey) {
      journey.conversionEvents.push(conversion);
    }

    console.log(`🎯 Conversion tracked: ${eventType}`, conversion);
  }

  /**
   * Get current session ID
   */
  public getCurrentSessionId(): string {
    return this.currentSessionId;
  }

  /**
   * Set user ID
   */
  public setUserId(userId: string): void {
    localStorage.setItem('analytics_user_id', userId);
    
    // Update current journey
    const journey = this.journeys.get(this.currentSessionId);
    if (journey) {
      journey.userId = userId;
    }
  }

  /**
   * Get analytics report
   */
  public generateReport(timeframe: 'hour' | 'day' | 'week' = 'day'): AnalyticsReport {
    const now = Date.now();
    const timeframeMs = this.getTimeframeMs(timeframe);
    const startTime = now - timeframeMs;

    // Filter data by timeframe
    const recentBehaviors = this.behaviors.filter(b => b.timestamp >= startTime);
    const recentConversions = this.conversions.filter(c => c.timestamp >= startTime);
    const recentJourneys = Array.from(this.journeys.values()).filter(j => j.startTime >= startTime);

    // Calculate metrics
    const uniqueUsers = new Set(recentBehaviors.map(b => b.userId).filter(Boolean)).size;
    const totalSessions = new Set(recentBehaviors.map(b => b.sessionId)).size;
    const averageSessionDuration = this.calculateAverageSessionDuration(recentJourneys);
    const bounceRate = this.calculateBounceRate(recentJourneys);
    const conversionRate = this.calculateConversionRate(recentJourneys);

    // Get top pages and actions
    const topPages = this.getTopPages(recentBehaviors);
    const topActions = this.getTopActions(recentBehaviors);

    // Generate insights
    const performanceInsights = this.generatePerformanceInsights();
    const predictiveInsights = this.generatePredictiveInsights(recentJourneys);
    const recommendations = this.generateRecommendations(performanceInsights, predictiveInsights);

    return {
      period: timeframe,
      totalSessions,
      uniqueUsers,
      averageSessionDuration,
      bounceRate,
      conversionRate,
      topPages,
      topActions,
      userJourneys: recentJourneys,
      performanceInsights,
      predictiveInsights,
      recommendations
    };
  }

  /**
   * Get real-time insights
   */
  public getRealTimeInsights(): {
    activeUsers: number;
    currentPageViews: number;
    conversionEvents: number;
    averagePageTime: number;
    topActions: Array<{ action: string; count: number }>;
  } {
    const now = Date.now();
    const last5Minutes = now - (5 * 60 * 1000);
    
    const recentBehaviors = this.behaviors.filter(b => b.timestamp >= last5Minutes);
    const recentConversions = this.conversions.filter(c => c.timestamp >= last5Minutes);
    
    const activeUsers = new Set(recentBehaviors.map(b => b.sessionId)).size;
    const currentPageViews = recentBehaviors.filter(b => b.action === 'page_view').length;
    const conversionEvents = recentConversions.length;
    
    const pageViews = recentBehaviors.filter(b => b.action === 'page_view');
    const averagePageTime = pageViews.length > 0 
      ? pageViews.reduce((sum, b) => sum + (b.duration || 0), 0) / pageViews.length 
      : 0;
    
    const topActions = this.getTopActions(recentBehaviors);

    return {
      activeUsers,
      currentPageViews,
      conversionEvents,
      averagePageTime,
      topActions
    };
  }

  /**
   * Setup event listeners
   */
  private setupEventListeners(): void {
    // Track page views
    this.trackBehavior('page_view', window.location.pathname);
    
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target) {
        this.trackBehavior('click', window.location.pathname, {
          element: target.tagName.toLowerCase(),
          id: target.id,
          className: target.className,
          text: target.textContent?.substring(0, 100)
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      if (form) {
        this.trackBehavior('form_submit', window.location.pathname, {
          formId: form.id,
          formAction: form.action,
          formMethod: form.method
        });
      }
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackBehavior('scroll_depth', window.location.pathname, {
          depth: scrollDepth
        });
      }
    });
  }

  /**
   * Setup page visibility tracking
   */
  private setupPageVisibilityTracking(): void {
    let pageStartTime = Date.now();
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Page hidden, track time on page
        const timeOnPage = Date.now() - pageStartTime;
        this.trackBehavior('page_hidden', window.location.pathname, {
          timeOnPage
        });
      } else {
        // Page visible, reset timer
        pageStartTime = Date.now();
        this.trackBehavior('page_visible', window.location.pathname);
      }
    });

    // Track page unload
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - pageStartTime;
      this.trackBehavior('page_unload', window.location.pathname, {
        timeOnPage
      });
      
      // Complete current journey
      this.completeCurrentJourney();
    });
  }

  /**
   * Setup performance monitoring
   */
  private setupPerformanceMonitoring(): void {
    // Track page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      this.trackBehavior('page_load_performance', window.location.pathname, {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: this.getFirstPaint(),
        firstContentfulPaint: this.getFirstContentfulPaint()
      });
    });
  }

  /**
   * Start real-time analysis
   */
  private startRealTimeAnalysis(): void {
    setInterval(() => {
      this.analyzeUserJourneys();
      this.detectAnomalies();
    }, 30000); // Analyze every 30 seconds
  }

  /**
   * Update current journey
   */
  private updateCurrentJourney(action: string, page: string): void {
    let journey = this.journeys.get(this.currentSessionId);
    
    if (!journey) {
      journey = {
        sessionId: this.currentSessionId,
        userId: this.getUserId(),
        startTime: Date.now(),
        pages: [],
        actions: [],
        duration: 0,
        conversionEvents: [],
        bounceRate: false
      };
      this.journeys.set(this.currentSessionId, journey);
    }

    // Add page if new
    if (!journey.pages.includes(page)) {
      journey.pages.push(page);
    }

    // Add action
    journey.actions.push(action);
    
    // Update duration
    journey.duration = Date.now() - journey.startTime;
  }

  /**
   * Complete current journey
   */
  private completeCurrentJourney(): void {
    const journey = this.journeys.get(this.currentSessionId);
    if (journey) {
      journey.endTime = Date.now();
      journey.exitPage = window.location.pathname;
      journey.bounceRate = journey.pages.length <= 1;
    }
  }

  /**
   * Check for conversion events
   */
  private checkConversionEvents(behavior: UserBehavior): void {
    // Define conversion triggers
    const conversionTriggers = {
      'form_submit': 'lead_generation',
      'scroll_depth': (metadata: any) => metadata.depth >= 75 ? 'engagement' : null,
      'click': (metadata: any) => {
        if (metadata.element === 'a' && metadata.text?.includes('buy')) return 'purchase_intent';
        if (metadata.element === 'button' && metadata.text?.includes('sign up')) return 'signup_intent';
        return null;
      }
    };

    const trigger = conversionTriggers[behavior.action as keyof typeof conversionTriggers];
    
    if (typeof trigger === 'string') {
      this.trackConversion(trigger);
    } else if (typeof trigger === 'function') {
      const conversionType = trigger(behavior.metadata);
      if (conversionType) {
        this.trackConversion(conversionType);
      }
    }
  }

  /**
   * Analyze user journeys
   */
  private analyzeUserJourneys(): void {
    const journeys = Array.from(this.journeys.values());
    
    // Detect patterns
    const commonPaths = this.findCommonPaths(journeys);
    const dropOffPoints = this.findDropOffPoints(journeys);
    
    console.log('📈 Journey Analysis:', {
      commonPaths: commonPaths.slice(0, 5),
      dropOffPoints: dropOffPoints.slice(0, 5)
    });
  }

  /**
   * Detect anomalies
   */
  private detectAnomalies(): void {
    const recentBehaviors = this.behaviors.slice(-100);
    
    // Detect unusual traffic patterns
    const pageViews = recentBehaviors.filter(b => b.action === 'page_view');
    const uniquePages = new Set(pageViews.map(b => b.page)).size;
    
    if (uniquePages > 20) {
      console.warn('🚨 Anomaly detected: Unusually high page diversity');
    }
  }

  /**
   * Helper methods
   */
  private generateSessionId(): string {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  private getUserId(): string | undefined {
    return localStorage.getItem('analytics_user_id') || undefined;
  }

  private getTimeframeMs(timeframe: string): number {
    switch (timeframe) {
      case 'hour': return 60 * 60 * 1000;
      case 'day': return 24 * 60 * 60 * 1000;
      case 'week': return 7 * 24 * 60 * 60 * 1000;
      default: return 24 * 60 * 60 * 1000;
    }
  }

  private calculateAverageSessionDuration(journeys: UserJourney[]): number {
    if (journeys.length === 0) return 0;
    return journeys.reduce((sum, j) => sum + j.duration, 0) / journeys.length;
  }

  private calculateBounceRate(journeys: UserJourney[]): number {
    if (journeys.length === 0) return 0;
    const bouncedSessions = journeys.filter(j => j.bounceRate).length;
    return (bouncedSessions / journeys.length) * 100;
  }

  private calculateConversionRate(journeys: UserJourney[]): number {
    if (journeys.length === 0) return 0;
    const convertedSessions = journeys.filter(j => j.conversionEvents.length > 0).length;
    return (convertedSessions / journeys.length) * 100;
  }

  private getTopPages(behaviors: UserBehavior[]): Array<{ page: string; views: number; uniqueViews: number }> {
    const pageViews = behaviors.filter(b => b.action === 'page_view');
    const pageStats = new Map<string, { views: number; uniqueViews: Set<string> }>();
    
    pageViews.forEach(b => {
      const stats = pageStats.get(b.page) || { views: 0, uniqueViews: new Set() };
      stats.views++;
      if (b.sessionId) stats.uniqueViews.add(b.sessionId);
      pageStats.set(b.page, stats);
    });
    
    return Array.from(pageStats.entries())
      .map(([page, stats]) => ({
        page,
        views: stats.views,
        uniqueViews: stats.uniqueViews.size
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);
  }

  private getTopActions(behaviors: UserBehavior[]): Array<{ action: string; count: number }> {
    const actionCounts = new Map<string, number>();
    
    behaviors.forEach(b => {
      actionCounts.set(b.action, (actionCounts.get(b.action) || 0) + 1);
    });
    
    return Array.from(actionCounts.entries())
      .map(([action, count]) => ({ action, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }

  private generatePerformanceInsights(): PerformanceInsight[] {
    const insights: PerformanceInsight[] = [];
    
    // Analyze recent behaviors for performance issues
    const recentBehaviors = this.behaviors.slice(-100);
    const pageViews = recentBehaviors.filter(b => b.action === 'page_view' && b.duration);
    
    if (pageViews.length > 0) {
      const avgPageTime = pageViews.reduce((sum, b) => sum + (b.duration || 0), 0) / pageViews.length;
      
      if (avgPageTime > 30000) {
        insights.push({
          metric: 'Average Page Time',
          value: avgPageTime / 1000,
          threshold: 30,
          status: 'warning',
          recommendation: 'Consider optimizing page loading and content delivery',
          impact: 'high'
        });
      }
    }
    
    return insights;
  }

  private generatePredictiveInsights(journeys: UserJourney[]): PredictiveInsight[] {
    const insights: PredictiveInsight[] = [];
    
    // Simple predictive logic based on user behavior patterns
    const recentJourneys = journeys.slice(-50);
    
    if (recentJourneys.length > 10) {
      const conversionRate = this.calculateConversionRate(recentJourneys);
      
      if (conversionRate < 5) {
        insights.push({
          type: 'conversion',
          probability: 0.7,
          confidence: 0.8,
          factors: ['Low conversion rate', 'High bounce rate'],
          recommendation: 'Optimize landing pages and improve user experience',
          timeframe: '1-2 weeks'
        });
      }
    }
    
    return insights;
  }

  private generateRecommendations(performanceInsights: PerformanceInsight[], predictiveInsights: PredictiveInsight[]): string[] {
    const recommendations: string[] = [];
    
    performanceInsights.forEach(insight => {
      if (insight.status === 'warning' || insight.status === 'critical') {
        recommendations.push(insight.recommendation);
      }
    });
    
    predictiveInsights.forEach(insight => {
      recommendations.push(insight.recommendation);
    });
    
    return [...new Set(recommendations)]; // Remove duplicates
  }

  private findCommonPaths(journeys: UserJourney[]): string[][] {
    const pathCounts = new Map<string, number>();
    
    journeys.forEach(journey => {
      const path = journey.pages.join(' -> ');
      pathCounts.set(path, (pathCounts.get(path) || 0) + 1);
    });
    
    return Array.from(pathCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([path]) => path.split(' -> '));
  }

  private findDropOffPoints(journeys: UserJourney[]): string[] {
    const pageExitCounts = new Map<string, number>();
    
    journeys.forEach(journey => {
      if (journey.exitPage) {
        pageExitCounts.set(journey.exitPage, (pageExitCounts.get(journey.exitPage) || 0) + 1);
      }
    });
    
    return Array.from(pageExitCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([page]) => page);
  }

  private getFirstPaint(): number {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? firstPaint.startTime : 0;
  }

  private getFirstContentfulPaint(): number {
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcp ? fcp.startTime : 0;
  }

  /**
   * Cleanup
   */
  public cleanup(): void {
    this.behaviors = [];
    this.conversions = [];
    this.journeys.clear();
    this.isInitialized = false;
  }
}

// Export singleton instance
export const advancedAnalyticsInsights = new AdvancedAnalyticsInsights();
export type { UserBehavior, ConversionEvent, UserJourney, AnalyticsReport };
export { AdvancedAnalyticsInsights };
export default AdvancedAnalyticsInsights;