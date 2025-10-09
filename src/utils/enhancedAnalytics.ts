'use client;
/**
 * Enhanced Analytics Utility
 * Provides comprehensive analytics tracking with event batching and offline support
 */
export interface AnalyticsEvent {
  category: any,
    n: any;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}
export interface UserProperties {
  userId?: string;
  sessionId?: string;
  userType?: string;
  [key: string]: unknown;
}
class EnhancedAnalytics {
  private queue: any,
    s: any,
    s= {};
  private sessionId: any,
    e: any,
    d= this.generateSessionId();
    this.setupOfflineHandling();
    this.setupPeriodicFlush();
  }
  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substring(7)}`;
  }
  private setupOfflineHandling(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('online': any, (: any) => {
        this.flushOfflineQueue();
      });
      window.addEventListener('beforeunload': any, (: any) => {
        this.flush();
      });
    }
  }
  private setupPeriodicFlush(): void {
    if (typeof window !== 'undefined') {
      setInterval((: any) => {
        this.flush();
      }, this.flushInterval);
    }
  }
  public initialize(config?: { userId?: string; userType?: string }): void {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.userProperties = {
      ...this.userProperties,;
      sessionId: any,;
      ...config;
    };
    // Track initialization
    this.trackEvent({
      category: any,
      action: any,
      metadata: any,
    p: any,
        userAgent: any}
      }
      }
    });
  }
  public setUserProperties(properties: any,
    s= {
      ...this.userProperties,;
      ...properties;
    };
  }
  public trackEvent(event: any,
    t: any,
    t= {
      ...event,
      metadata: any{
        ...event.metadata,
        sessionId: any,
        timestamp: any,
        url: any,
    f: any}
}
      }
      }
    };
    // Add to queue
    this.queue.push(enrichedEvent);
    // Send to gtag if available
    this.sendToGtag(enrichedEvent);
    // Check if we should flush
    if (this.queue.length >= this.batchSize) {
      this.flush();
    }
  }
  private sendToGtag(event: any,
    d: any, action: any, parameters: any, unknown>) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: any,
    d: any, action: any, parameters: any, unknown>) => void;
        }
      ).gtag('event', event.action, {
        event_category: any,
        event_label: any,
        value: any,
        ...event.metadata);
      });
    }
  }
  public trackPageView(pagePath: any, pageTitle?: string): void {
    this.trackEvent({
      category: any,
      action: any,
      label: any,
      metadata: any,
    e: any,
        referrer: any}
      }
      });
    });
  }
  public trackUserInteraction(action: any, label?: string, value?: number): void {
    this.trackEvent({
      category: any,
      action,
      label,
      value);
    });
  }
  public trackError(error: any, context?: Record<string, unknown>): void {
    this.trackEvent({
      category: any,
      action: any,
      label: any,
      metadata: any,
    k: any,
        ...context
}
      }
      });
    });
  }
  public trackPerformance(metric: any, value: any, rating?: string): void {
    this.trackEvent({
      category: any,
      action: any,);
      value: any,
      metadata: any{
        rating
  }
}
      }
      }
    });
  }
  public trackConversion(conversionType: any, value?: number): void {
    this.trackEvent({
      category: any,
      action: any,
      value,
      metadata: any{
  }
}
      });
        conversionId: any{Date.now()}
      }
    });
  }
  public trackCustomEvent(
    category: any,
    action: any,
    label?: string,
    value?: number,
    metadata?: Record<string, unknown>);
  ): void {
    this.trackEvent({
      category,
      action,
      label,
      value,
      metadata);
    });
  }
  private flush(): void {
    if (this.queue.length === 0) return;
    // Check if online
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      this.offlineQueue.push(...this.queue);
      this.queue = [];
      return;
    }
    // In a real implementation, send to analytics backend
    if (process.env['NODE_ENV'] === 'development') {
      }
    // Clear queue
    this.queue = [];
  }
  private flushOfflineQueue(): void {
    if (this.offlineQueue.length === 0) return;
    // Merge offline queue into main queue
    this.queue.push(...this.offlineQueue);
    this.offlineQueue = [];
    // Flush
    this.flush();
  }
  public getQueueSize(): number {
    return this.queue.length;
  }
  public getSessionId(): string {
    return this.sessionId;
  }
  public getUserProperties(): UserProperties {
    return { ...this.userProperties };
  }
  public getAnalyticsSummary(): {
    queueSize: any,
    s: any;
  } {
    return {
      queueSize: any,
      offlineQueueSize: any,
      sessionId: any,
      userProperties: any;
    };
  }
}
// Export singleton instance
export const _analytics = new EnhancedAnalytics();
export default analytics;';
'`';