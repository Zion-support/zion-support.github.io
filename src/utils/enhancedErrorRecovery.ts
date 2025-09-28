/**
 * Enhanced Error Recovery System
 * Provides comprehensive error handling, recovery, and user experience improvements
 */

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  timestamp: number;
  url: string;
  userAgent: string;
  stack?: string;
  severity?: 'low' | 'medium' | 'high' | 'critical';
}

export interface ErrorReport {
  id: string;
  type: 'javascript' | 'network' | 'resource' | 'promise' | 'custom';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  context: ErrorContext;
  recoveryAttempts: number;
  resolved: boolean;
  resolution?: string;
}

export interface RecoveryStrategy {
  type: 'retry' | 'fallback' | 'redirect' | 'reload' | 'notification';
  action: () => void;
  condition: (error: Error, context: ErrorContext) => boolean;
  priority: number;
}

export class EnhancedErrorRecovery {
  private static instance: EnhancedErrorRecovery;
  private errorReports: Map<string, ErrorReport> = new Map();
  private recoveryStrategies: RecoveryStrategy[] = [];
  private isInitialized = false;
  private retryAttempts = new Map<string, number>();
  private readonly MAX_RETRY_ATTEMPTS = 3;

  public static getInstance(): EnhancedErrorRecovery {
    if (!EnhancedErrorRecovery.instance) {
      EnhancedErrorRecovery.instance = new EnhancedErrorRecovery();
    }
    return EnhancedErrorRecovery.instance;
  }

  public initialize(): void {
    if (this.isInitialized) return;

    this.setupGlobalErrorHandlers();
    this.setupRecoveryStrategies();
    this.isInitialized = true;

    console.log('🛡️ Enhanced Error Recovery System initialized');
  }

  private setupGlobalErrorHandlers(): void {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError(new Error(event.message), {
        component: 'global',
        action: 'javascript_error',
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        stack: event.error?.stack
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(new Error(event.reason), {
        component: 'global',
        action: 'unhandled_promise_rejection',
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent
      });
    });

    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLImageElement | HTMLLinkElement | HTMLScriptElement;
        const src = 'src' in target ? target.src : 'href' in target ? target.href : 'unknown';
        this.handleError(new Error(`Resource loading failed: ${src}`), {
          component: 'resource',
          action: 'resource_load_error',
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        });
      }
    }, true);
  }

  private setupRecoveryStrategies(): void {
    this.recoveryStrategies = [
      // Network error retry strategy
      {
        type: 'retry',
        action: () => {
          console.log('🔄 Retrying failed operation...');
          // Implement retry logic
        },
        condition: (error, context) => {
          return context.action === 'network_error' && 
                 (this.retryAttempts.get(context.url || '') || 0) < this.MAX_RETRY_ATTEMPTS;
        },
        priority: 1
      },
      // Fallback for critical components
      {
        type: 'fallback',
        action: () => {
          console.log('🔄 Loading fallback component...');
          // Implement fallback logic
        },
        condition: (error, context) => {
          return context.component === 'critical' && context.severity === 'critical';
        },
        priority: 2
      },
      // Page reload for critical errors
      {
        type: 'reload',
        action: () => {
          console.log('🔄 Reloading page to recover from critical error...');
          window.location.reload();
        },
        condition: (error, context) => {
          return context.severity === 'critical' && 
                 (this.retryAttempts.get(context.url || '') || 0) >= this.MAX_RETRY_ATTEMPTS;
        },
        priority: 3
      },
      // User notification for recoverable errors
      {
        type: 'notification',
        action: () => {
          this.showErrorNotification('An error occurred, but we\'re working to fix it.');
        },
        condition: (error, context) => {
          return context.severity === 'medium' || context.severity === 'low';
        },
        priority: 4
      }
    ];
  }

  public handleError(error: Error, context: ErrorContext): void {
    const errorId = this.generateErrorId();
    const severity = this.determineSeverity(error, context);
    
    const errorReport: ErrorReport = {
      id: errorId,
      type: this.determineErrorType(error, context),
      severity,
      message: error.message,
      context: {
        ...context,
        stack: error.stack
      },
      recoveryAttempts: 0,
      resolved: false
    };

    this.errorReports.set(errorId, errorReport);
    this.attemptRecovery(error, context, errorReport);
    this.logError(errorReport);
  }

  private determineSeverity(error: Error, context: ErrorContext): 'low' | 'medium' | 'high' | 'critical' {
    // Critical: JavaScript errors in critical components
    if (context.component === 'critical' || context.action === 'unhandled_promise_rejection') {
      return 'critical';
    }

    // High: Network errors or resource loading failures
    if (context.action === 'network_error' || context.action === 'resource_load_error') {
      return 'high';
    }

    // Medium: Component-specific errors
    if (context.component && context.component !== 'global') {
      return 'medium';
    }

    // Low: Everything else
    return 'low';
  }

  private determineErrorType(error: Error, context: ErrorContext): 'javascript' | 'network' | 'resource' | 'promise' | 'custom' {
    if (context.action === 'unhandled_promise_rejection') return 'promise';
    if (context.action === 'network_error') return 'network';
    if (context.action === 'resource_load_error') return 'resource';
    if (context.component === 'global') return 'javascript';
    return 'custom';
  }

  private attemptRecovery(error: Error, context: ErrorContext, errorReport: ErrorReport): void {
    const applicableStrategies = this.recoveryStrategies
      .filter(strategy => strategy.condition(error, context))
      .sort((a, b) => a.priority - b.priority);

    for (const strategy of applicableStrategies) {
      try {
        strategy.action();
        errorReport.recoveryAttempts++;
        errorReport.resolved = true;
        errorReport.resolution = strategy.type;
        
        // Track retry attempts
        const currentAttempts = this.retryAttempts.get(context.url || '') || 0;
        this.retryAttempts.set(context.url || '', currentAttempts + 1);
        
        console.log(`✅ Recovery strategy '${strategy.type}' applied successfully`);
        break;
      } catch (recoveryError) {
        console.warn(`❌ Recovery strategy '${strategy.type}' failed:`, recoveryError);
      }
    }

    if (!errorReport.resolved) {
      console.error('❌ No recovery strategy could be applied');
    }
  }

  private showErrorNotification(message: string): void {
    // Create a non-intrusive notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      max-width: 300px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      color: #495057;
    `;
    
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="color: #dc3545;">⚠️</span>
        <span>${message}</span>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: none;
          border: none;
          color: #6c757d;
          cursor: pointer;
          font-size: 18px;
          margin-left: auto;
        ">×</button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 5000);
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private logError(errorReport: ErrorReport): void {
    console.group(`🚨 Error Report: ${errorReport.id}`);
    console.error('Type:', errorReport.type);
    console.error('Severity:', errorReport.severity);
    console.error('Message:', errorReport.message);
    console.error('Context:', errorReport.context);
    console.error('Recovery Attempts:', errorReport.recoveryAttempts);
    console.error('Resolved:', errorReport.resolved);
    console.groupEnd();

    // Send to error reporting service (if configured)
    this.sendToErrorService(errorReport);
  }

  private sendToErrorService(errorReport: ErrorReport): void {
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    if (typeof window !== 'undefined' && window.navigator.sendBeacon) {
      const data = JSON.stringify({
        ...errorReport,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
      
      window.navigator.sendBeacon('/api/error-reporting', data);
    }
  }

  public getErrorReports(): ErrorReport[] {
    return Array.from(this.errorReports.values());
  }

  public getErrorReport(id: string): ErrorReport | undefined {
    return this.errorReports.get(id);
  }

  public clearErrorReports(): void {
    this.errorReports.clear();
    this.retryAttempts.clear();
  }

  public getErrorStats(): {
    total: number;
    bySeverity: Record<string, number>;
    byType: Record<string, number>;
    resolved: number;
    unresolved: number;
  } {
    const reports = this.getErrorReports();
    
    return {
      total: reports.length,
      bySeverity: reports.reduce((acc, report) => {
        acc[report.severity] = (acc[report.severity] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byType: reports.reduce((acc, report) => {
        acc[report.type] = (acc[report.type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      resolved: reports.filter(r => r.resolved).length,
      unresolved: reports.filter(r => !r.resolved).length
    };
  }

  public addRecoveryStrategy(strategy: RecoveryStrategy): void {
    this.recoveryStrategies.push(strategy);
    this.recoveryStrategies.sort((a, b) => a.priority - b.priority);
  }

  public removeRecoveryStrategy(type: string): void {
    this.recoveryStrategies = this.recoveryStrategies.filter(s => s.type !== type);
  }
}

// Export singleton instance
export const enhancedErrorRecovery = EnhancedErrorRecovery.getInstance();