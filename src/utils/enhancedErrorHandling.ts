/**
 * Enhanced Error Handling Utility
 * Provides comprehensive error tracking and reporting
 */

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  url: string;
  userAgent: string;
  timestamp: string;
  component?: string;
  action?: string;
  metadata?: Record<string, unknown>;
}

export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'performance' | 'user' | 'system';
  resolved: boolean;
  createdAt: string;
  lastOccurrence: string;
  occurrenceCount: number;
  aiPredictedImpact?: number;
  resolutionSuggestions?: string[];
}

export interface PerformanceMetrics {
  errorRate: number;
  avgResolutionTime: number;
  criticalErrorsToday: number;
  userImpactScore: number;
}

class AIErrorPredictionEngine {
  private errorPatterns: Map<string, number> = new Map();
  private userBehaviorData: Array<{ action: string; timestamp: number; errorOccurred: boolean }> = [];

  predictErrorLikelihood(context: ErrorContext): number {
    // Simple AI prediction based on historical patterns
    const patternKey = `${context.component}_${context.action}`;
    const historicalFailureRate = this.errorPatterns.get(patternKey) || 0;
    
    // Factor in user behavior patterns
    const recentBehavior = this.userBehaviorData.slice(-10);
    const recentErrorRate = recentBehavior.filter(b => b.errorOccurred).length / recentBehavior.length;
    
    return Math.min(historicalFailureRate * 0.7 + recentErrorRate * 0.3, 1);
  }

  updatePatterns(context: ErrorContext, errorOccurred: boolean): void {
    const patternKey = `${context.component}_${context.action}`;
    const currentRate = this.errorPatterns.get(patternKey) || 0;
    const newRate = errorOccurred ? Math.min(currentRate + 0.1, 1) : Math.max(currentRate - 0.05, 0);
    this.errorPatterns.set(patternKey, newRate);

    this.userBehaviorData.push({
      action: `${context.component}_${context.action}`,
      timestamp: Date.now(),
      errorOccurred
    });

    // Keep only recent data
    if (this.userBehaviorData.length > 100) {
      this.userBehaviorData = this.userBehaviorData.slice(-50);
    }
  }

  generateResolutionSuggestions(error: ErrorReport): string[] {
    const suggestions: string[] = [];
    
    if (error.category === 'network') {
      suggestions.push('Check network connectivity');
      suggestions.push('Implement retry mechanism with exponential backoff');
      suggestions.push('Add offline fallback functionality');
    } else if (error.category === 'javascript') {
      suggestions.push('Review error stack trace for null/undefined values');
      suggestions.push('Add input validation');
      suggestions.push('Implement graceful error boundaries');
    } else if (error.category === 'performance') {
      suggestions.push('Optimize resource loading');
      suggestions.push('Implement lazy loading');
      suggestions.push('Add performance monitoring');
    }

    return suggestions;
  }
}

class EnhancedErrorHandler {
  private errorReports: Map<string, ErrorReport> = new Map();
  private maxReports = 100;
  private sessionId: string;
  private userId?: string;
  private aiPredictionEngine: AIErrorPredictionEngine;
  private performanceMetrics: PerformanceMetrics = {
    errorRate: 0,
    avgResolutionTime: 0,
    criticalErrorsToday: 0,
    userImpactScore: 0
  };

  constructor() {
    this.sessionId = this.generateSessionId();
    this.aiPredictionEngine = new AIErrorPredictionEngine();
    this.initializeErrorTracking();
    this.initializeAIAnalytics();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeErrorTracking(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.handleError(event.error, {
        component: 'global',
        action: 'unhandled_error',
        metadata: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(event.reason, {
        component: 'promise',
        action: 'unhandled_rejection',
        metadata: {
          reason: event.reason?.toString()
        }
      });
    });
  }

  private initializeAIAnalytics(): void {
    // Periodically update performance metrics
    setInterval(() => {
      this.updatePerformanceMetrics();
    }, 60000); // Update every minute

    // Monitor user behavior patterns
    this.trackUserBehavior();
  }

  private updatePerformanceMetrics(): void {
    const errors = Array.from(this.errorReports.values());
    const now = Date.now();
    const dayMs = 24 * 60 * 60 * 1000;
    
    // Calculate error rate (errors per hour)
    const recentErrors = errors.filter(e => now - new Date(e.lastOccurrence).getTime() < 60 * 60 * 1000);
    this.performanceMetrics.errorRate = recentErrors.length;

    // Calculate critical errors today
    this.performanceMetrics.criticalErrorsToday = errors.filter(e => 
      e.severity === 'critical' && now - new Date(e.createdAt).getTime() < dayMs
    ).length;

    // Calculate user impact score (0-100)
    const criticalWeight = 4;
    const highWeight = 3;
    const mediumWeight = 2;
    const lowWeight = 1;

    const impact = errors.reduce((score, error) => {
      const weight = error.severity === 'critical' ? criticalWeight :
                    error.severity === 'high' ? highWeight :
                    error.severity === 'medium' ? mediumWeight : lowWeight;
      return score + (weight * error.occurrenceCount);
    }, 0);

    this.performanceMetrics.userImpactScore = Math.min(impact, 100);
  }

  private trackUserBehavior(): void {
    // Track clicks with error prediction
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const context: ErrorContext = {
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        component: target.tagName.toLowerCase(),
        action: 'click',
        metadata: {
          targetId: target.id,
          targetClass: target.className
        }
      };

      const errorLikelihood = this.aiPredictionEngine.predictErrorLikelihood(context);
      if (errorLikelihood > 0.7) {
        console.warn(`High error likelihood detected for action: ${context.component}_${context.action}`);
        // Could implement preventive measures here
      }

      this.aiPredictionEngine.updatePatterns(context, false);
    });

    // Performance observer for errors
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              const resourceEntry = entry as PerformanceResourceTiming;
              if (resourceEntry.transferSize === 0 && resourceEntry.decodedBodySize === 0) {
                this.handleError(new Error(`Failed to load resource: ${resourceEntry.name}`), {
                  component: 'resource',
                  action: 'load_failure',
                  metadata: {
                    url: resourceEntry.name,
                    duration: resourceEntry.duration,
                    startTime: resourceEntry.startTime
                  }
                });
              }
            }
          });
        });
        observer.observe({ entryTypes: ['resource'] });
      } catch (error) {
        console.warn('Failed to initialize performance observer for errors:', error);
      }
    }
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public handleError(error: Error, context: Partial<ErrorContext> = {}): void {
    const errorId = this.generateErrorId(error);
    const fullContext: ErrorContext = {
      userId: this.userId,
      sessionId: this.sessionId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      ...context
    };

    const severity = this.determineSeverity(error, fullContext);
    const category = this.categorizeError(error, fullContext);

    // Check if this error already exists
    const existingReport = this.errorReports.get(errorId);
    if (existingReport) {
      // Update existing report
      existingReport.lastOccurrence = fullContext.timestamp;
      existingReport.occurrenceCount += 1;
      
      // Increase severity if it occurs frequently
      if (existingReport.occurrenceCount > 10 && existingReport.severity !== 'critical') {
        existingReport.severity = 'critical';
      }
    } else {
      // Create new report with AI predictions
      const aiPredictedImpact = this.aiPredictionEngine.predictErrorLikelihood(fullContext);
      const resolutionSuggestions = this.aiPredictionEngine.generateResolutionSuggestions({
        id: errorId,
        message: error.message,
        stack: error.stack,
        context: fullContext,
        severity,
        category,
        resolved: false,
        createdAt: fullContext.timestamp,
        lastOccurrence: fullContext.timestamp,
        occurrenceCount: 1
      } as ErrorReport);

      const report: ErrorReport = {
        id: errorId,
        message: error.message,
        stack: error.stack,
        context: fullContext,
        severity,
        category,
        resolved: false,
        createdAt: fullContext.timestamp,
        lastOccurrence: fullContext.timestamp,
        occurrenceCount: 1,
        aiPredictedImpact,
        resolutionSuggestions
      };

      this.errorReports.set(errorId, report);
      this.cleanupOldReports();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Enhanced Error Handler:', {
        error,
        context: fullContext,
        severity,
        category
      });
    }

    // Report to external service
    this.reportToExternalService(error, fullContext, severity, category);
  }

  private generateErrorId(error: Error): string {
    const message = error.message.replace(/\d+/g, 'X'); // Replace numbers with X
    const stack = error.stack?.split('\n')[0] || '';
    return `error_${this.hashCode(message + stack)}`;
  }

  private hashCode(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private determineSeverity(error: Error, _context: ErrorContext): ErrorReport['severity'] {
    // Critical errors
    if (error.message.includes('ChunkLoadError') || 
        error.message.includes('Loading chunk') ||
        error.message.includes('Network Error')) {
      return 'critical';
    }

    // High severity errors
    if (error.message.includes('TypeError') ||
        error.message.includes('ReferenceError') ||
        error.message.includes('SyntaxError')) {
      return 'high';
    }

    // Medium severity errors
    if (error.message.includes('Warning') ||
        error.message.includes('Deprecated')) {
      return 'medium';
    }

    // Default to low severity
    return 'low';
  }

  private categorizeError(error: Error, context: ErrorContext): ErrorReport['category'] {
    if (context.component === 'network' || error.message.includes('fetch') || error.message.includes('HTTP')) {
      return 'network';
    }

    if (context.component === 'performance' || error.message.includes('timeout') || error.message.includes('slow')) {
      return 'performance';
    }

    if (context.component === 'user' || error.message.includes('validation') || error.message.includes('input')) {
      return 'user';
    }

    if (context.component === 'system' || error.message.includes('memory') || error.message.includes('storage')) {
      return 'system';
    }

    return 'javascript';
  }

  private cleanupOldReports(): void {
    if (this.errorReports.size > this.maxReports) {
      const reports = Array.from(this.errorReports.values());
      reports.sort((a, b) => new Date(b.lastOccurrence).getTime() - new Date(a.lastOccurrence).getTime());
      
      const reportsToKeep = reports.slice(0, this.maxReports);
      this.errorReports.clear();
      
      reportsToKeep.forEach(report => {
        this.errorReports.set(report.id, report);
      });
    }
  }

  private reportToExternalService(
    error: Error, 
    context: ErrorContext, 
    severity: ErrorReport['severity'], 
    category: ErrorReport['category']
  ): void {
    // In a real application, you would send this to your error reporting service
    // Examples: Sentry, Bugsnag, LogRocket, etc.
    
    const errorData = {
      message: error.message,
      stack: error.stack,
      context,
      severity,
      category,
      timestamp: new Date().toISOString()
    };

    // Example: Send to analytics
    if (typeof window !== 'undefined' && (window as Window & { gtag?: (event: string, data: Record<string, unknown>) => void }).gtag) {
      (window as Window & { gtag: (event: string, data: Record<string, unknown>) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: severity === 'critical',
        custom_map: {
          severity,
          category,
          component: context.component
        }
      });
    }

    // Example: Send to custom endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData)
      }).catch(err => {
        console.warn('Failed to report error to external service:', err);
      });
    }
  }

  public getErrorReports(): ErrorReport[] {
    return Array.from(this.errorReports.values());
  }

  public getCriticalErrors(): ErrorReport[] {
    return this.getErrorReports().filter(report => report.severity === 'critical');
  }

  public markErrorAsResolved(errorId: string): void {
    const report = this.errorReports.get(errorId);
    if (report) {
      report.resolved = true;
    }
  }

  public getPerformanceMetrics(): PerformanceMetrics {
    this.updatePerformanceMetrics();
    return { ...this.performanceMetrics };
  }

  public getAIInsights(): {
    predictedHighRiskActions: string[];
    recommendedImprovements: string[];
    errorTrends: { category: string; trend: 'increasing' | 'decreasing' | 'stable' }[];
  } {
    const errors = this.getErrorReports();
    const now = Date.now();
    const dayMs = 24 * 60 * 60 * 1000;
    
    // Analyze error trends
    const categoryTrends = new Map<string, number[]>();
    errors.forEach(error => {
      const daysSinceError = Math.floor((now - new Date(error.createdAt).getTime()) / dayMs);
      if (daysSinceError <= 7) { // Last 7 days
        if (!categoryTrends.has(error.category)) {
          categoryTrends.set(error.category, new Array(7).fill(0));
        }
        categoryTrends.get(error.category)![6 - daysSinceError] += error.occurrenceCount;
      }
    });

    const errorTrends = Array.from(categoryTrends.entries()).map(([category, counts]) => {
      const recentAvg = counts.slice(-3).reduce((a, b) => a + b, 0) / 3;
      const olderAvg = counts.slice(0, 4).reduce((a, b) => a + b, 0) / 4;
      const trend = recentAvg > olderAvg * 1.2 ? 'increasing' : 
                   recentAvg < olderAvg * 0.8 ? 'decreasing' : 'stable';
      return { category, trend };
    });

    return {
      predictedHighRiskActions: Array.from(this.aiPredictionEngine['errorPatterns'].entries())
        .filter(([, rate]) => rate > 0.5)
        .map(([action]) => action)
        .slice(0, 5),
      recommendedImprovements: [
        'Implement circuit breakers for network calls',
        'Add comprehensive input validation',
        'Enhance error boundaries in React components',
        'Implement retry mechanisms with exponential backoff',
        'Add performance monitoring for critical paths'
      ],
      errorTrends
    };
  }

  public clearResolvedErrors(): void {
    for (const [id, report] of this.errorReports) {
      if (report.resolved) {
        this.errorReports.delete(id);
      }
    }
  }

  public getErrorStats(): {
    total: number;
    bySeverity: Record<string, number>;
    byCategory: Record<string, number>;
    unresolved: number;
  } {
    const reports = this.getErrorReports();
    
    return {
      total: reports.length,
      bySeverity: reports.reduce((acc, report) => {
        acc[report.severity] = (acc[report.severity] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byCategory: reports.reduce((acc, report) => {
        acc[report.category] = (acc[report.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      unresolved: reports.filter(report => !report.resolved).length
    };
  }
}

// Create singleton instance
export const enhancedErrorHandler = new EnhancedErrorHandler();

// Export convenience functions
export const handleError = (error: Error, context?: Partial<ErrorContext>) => {
  enhancedErrorHandler.handleError(error, context);
};

export const setUserId = (userId: string) => {
  enhancedErrorHandler.setUserId(userId);
};

export const getErrorReports = () => {
  return enhancedErrorHandler.getErrorReports();
};

export const getErrorStats = () => {
  return enhancedErrorHandler.getErrorStats();
};