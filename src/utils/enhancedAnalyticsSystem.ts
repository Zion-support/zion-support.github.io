/**
 * Enhanced Analytics System
 * Provides comprehensive analytics and user behavior tracking
 */

export interface AnalyticsConfig {
  enableUserTracking: boolean;
  enablePerformanceTracking: boolean;
  enableErrorTracking: boolean;
  enableConversionTracking: boolean;
  enableCustomEvents: boolean;
}

export interface AnalyticsMetrics {
  pageViews: number;
  uniqueVisitors: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  errorRate: number;
  performanceScore: number;
  userEngagement: number;
  scrollDepth: number;
  customEvents: number;
}

export interface UserEvent {
  id: string;
  type: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  pageUrl: string;
}

export class EnhancedAnalyticsSystem {
  private config: AnalyticsConfig;
  private metrics: AnalyticsMetrics;
  private currentSession: any = null;
  private eventQueue: UserEvent[] = [];
  private isInitialized = false;

  constructor(config: Partial<AnalyticsConfig> = {}) {
    this.config = {
      enableUserTracking: true,
      enablePerformanceTracking: true,
      enableErrorTracking: true,
      enableConversionTracking: true,
      enableCustomEvents: true,
      ...config
    };

    this.metrics = this.getDefaultMetrics();
  }

  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      console.log('📊 Initializing Enhanced Analytics System...');
      this.initializeSession();
      this.setupEventListeners();
      this.isInitialized = true;
      console.log('✅ Enhanced Analytics System initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize Enhanced Analytics System:', error);
      throw error;
    }
  }

  private initializeSession(): void {
    const sessionId = this.generateSessionId();
    this.currentSession = {
      id: sessionId,
      startTime: Date.now(),
      pageViews: 0,
      events: []
    };
  }

  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;

    document.addEventListener('visibilitychange', () => {
      this.trackEvent('page', 'visibility_change', document.hidden ? 'hidden' : 'visible');
    });

    window.addEventListener('beforeunload', () => {
      this.trackEvent('page', 'unload');
    });

    let scrollTimeout: NodeJS.Timeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.trackScrollDepth();
      }, 100);
    });

    document.addEventListener('click', (event) => {
      this.trackClick(event);
    });
  }

  public trackEvent(
    category: string,
    action: string,
    label?: string,
    value?: number
  ): void {
    if (!this.currentSession) return;

    const event: UserEvent = {
      id: this.generateEventId(),
      type: 'custom',
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: this.currentSession.id,
      pageUrl: window.location.href
    };

    this.currentSession.events.push(event);
    this.eventQueue.push(event);
    this.updateMetrics(event);
    this.sendEvent(event);
  }

  private trackScrollDepth(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollDepth = Math.round((scrollTop / documentHeight) * 100);
    
    this.metrics.scrollDepth = Math.max(this.metrics.scrollDepth, scrollDepth);
    this.trackEvent('engagement', 'scroll_depth', undefined, scrollDepth);
  }

  private trackClick(event: Event): void {
    const target = event.target as HTMLElement;
    const tagName = target.tagName.toLowerCase();
    const id = target.id;
    
    this.trackEvent('engagement', 'click', `${tagName}${id ? `#${id}` : ''}`);
  }

  private updateMetrics(event: UserEvent): void {
    switch (event.category) {
      case 'page':
        this.metrics.pageViews++;
        break;
      case 'conversion':
        this.metrics.conversionRate = (this.metrics.conversionRate * this.metrics.pageViews + 1) / (this.metrics.pageViews + 1);
        break;
      case 'error':
        this.metrics.errorRate = (this.metrics.errorRate * this.metrics.pageViews + 1) / (this.metrics.pageViews + 1);
        break;
      case 'engagement':
        this.metrics.userEngagement++;
        break;
      case 'custom':
        this.metrics.customEvents++;
        break;
    }
  }

  private sendEvent(event: UserEvent): void {
    console.log('📊 Sending event:', event);
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateEventId(): string {
    return `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getDefaultMetrics(): AnalyticsMetrics {
    return {
      pageViews: 0,
      uniqueVisitors: 0,
      sessionDuration: 0,
      bounceRate: 0,
      conversionRate: 0,
      errorRate: 0,
      performanceScore: 0,
      userEngagement: 0,
      scrollDepth: 0,
      customEvents: 0
    };
  }

  public getMetrics(): AnalyticsMetrics {
    return this.metrics;
  }

  public generateReport(): string {
    return `
Analytics Report:
Page Views: ${this.metrics.pageViews}
Unique Visitors: ${this.metrics.uniqueVisitors}
Session Duration: ${this.metrics.sessionDuration.toFixed(2)}s
Bounce Rate: ${(this.metrics.bounceRate * 100).toFixed(1)}%
Conversion Rate: ${(this.metrics.conversionRate * 100).toFixed(1)}%
Error Rate: ${(this.metrics.errorRate * 100).toFixed(1)}%
Performance Score: ${this.metrics.performanceScore}/100
User Engagement: ${this.metrics.userEngagement}
Scroll Depth: ${this.metrics.scrollDepth}%
Custom Events: ${this.metrics.customEvents}
    `.trim();
  }
}

export const analyticsSystem = new EnhancedAnalyticsSystem();