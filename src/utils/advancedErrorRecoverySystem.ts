/**
 * Advanced Error Recovery System
 * Comprehensive error handling and recovery mechanisms
 */

export interface ErrorContext {
  timestamp: number;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId?: string;
  componentStack?: string;
  errorBoundary?: string;
}

export interface ErrorRecoveryAction {
  id: string;
  type: 'retry' | 'fallback' | 'redirect' | 'reload' | 'notify';
  description: string;
  automatic: boolean;
  successRate: number;
}

export interface ErrorReport {
  id: string;
  error: Error;
  context: ErrorContext;
  recoveryActions: ErrorRecoveryAction[];
  resolved: boolean;
  timestamp: number;
}

class AdvancedErrorRecoverySystem {
  private errorReports: ErrorReport[] = [];
  private recoveryStrategies: Map<string, ErrorRecoveryAction[]> = new Map();
  private isMonitoring: boolean = false;
  private retryAttempts: Map<string, number> = new Map();

  constructor() {
    this.initializeErrorRecovery();
    this.setupRecoveryStrategies();
  }

  private initializeErrorRecovery(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMonitoring = true;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.handleError(event.error, {
        componentStack: event.filename,
        errorBoundary: 'global'
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(event.reason, {
        errorBoundary: 'promise'
      });
    });

    // Network error handler
    this.setupNetworkErrorHandling();
  }

  private setupNetworkErrorHandling(): void {
    const originalFetch = window.fetch;
    const self = this;

    window.fetch = function(...args) {
      return originalFetch.apply(this, args)
        .catch(error => {
          self.handleNetworkError(error, args[0] as string);
          throw error;
        });
    };
  }

  private setupRecoveryStrategies(): void {
    // Network error recovery strategies
    this.recoveryStrategies.set('network', [
      {
        id: 'retry-network',
        type: 'retry',
        description: 'Retry network request with exponential backoff',
        automatic: true,
        successRate: 0.7
      },
      {
        id: 'offline-fallback',
        type: 'fallback',
        description: 'Use cached data or offline mode',
        automatic: true,
        successRate: 0.9
      }
    ]);

    // JavaScript error recovery strategies
    this.recoveryStrategies.set('javascript', [
      {
        id: 'component-reload',
        type: 'reload',
        description: 'Reload the affected component',
        automatic: false,
        successRate: 0.8
      },
      {
        id: 'fallback-ui',
        type: 'fallback',
        description: 'Show fallback UI for the component',
        automatic: true,
        successRate: 0.95
      }
    ]);

    // Memory error recovery strategies
    this.recoveryStrategies.set('memory', [
      {
        id: 'clear-cache',
        type: 'fallback',
        description: 'Clear application cache to free memory',
        automatic: true,
        successRate: 0.6
      },
      {
        id: 'reload-page',
        type: 'reload',
        description: 'Reload the entire page',
        automatic: false,
        successRate: 0.9
      }
    ]);
  }

  private handleError(error: Error, context: Partial<ErrorContext>): void {
    const errorContext: ErrorContext = {
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...context
    };

    const errorType = this.categorizeError(error);
    const recoveryActions = this.recoveryStrategies.get(errorType) || [];
    
    const errorReport: ErrorReport = {
      id: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      error,
      context: errorContext,
      recoveryActions,
      resolved: false,
      timestamp: Date.now()
    };

    this.errorReports.push(errorReport);
    
    // Keep only last 100 error reports
    if (this.errorReports.length > 100) {
      this.errorReports = this.errorReports.slice(-100);
    }

    // Attempt automatic recovery
    this.attemptAutomaticRecovery(errorReport);
  }

  private handleNetworkError(error: Error, url: string): void {
    const context: Partial<ErrorContext> = {
      url,
      errorBoundary: 'network'
    };
    
    this.handleError(error, context);
  }

  private categorizeError(error: Error): string {
    const message = error.message.toLowerCase();
    
    if (message.includes('network') || message.includes('fetch') || message.includes('timeout')) {
      return 'network';
    }
    
    if (message.includes('memory') || message.includes('out of memory')) {
      return 'memory';
    }
    
    if (message.includes('chunk') || message.includes('loading')) {
      return 'chunk';
    }
    
    return 'javascript';
  }

  private attemptAutomaticRecovery(errorReport: ErrorReport): void {
    const automaticActions = errorReport.recoveryActions.filter(action => action.automatic);
    
    automaticActions.forEach(action => {
      this.executeRecoveryAction(errorReport, action);
    });
  }

  private executeRecoveryAction(errorReport: ErrorReport, action: ErrorRecoveryAction): void {
    const retryKey = `${errorReport.id}_${action.id}`;
    const retryCount = this.retryAttempts.get(retryKey) || 0;
    
    if (retryCount >= 3) {
      return; // Max retry attempts reached
    }

    try {
      switch (action.type) {
        case 'retry':
          this.handleRetryAction(errorReport, action);
          break;
        case 'fallback':
          this.handleFallbackAction(errorReport, action);
          break;
        case 'reload':
          this.handleReloadAction(errorReport, action);
          break;
        case 'redirect':
          this.handleRedirectAction(errorReport, action);
          break;
        case 'notify':
          this.handleNotifyAction(errorReport, action);
          break;
      }
      
      this.retryAttempts.set(retryKey, retryCount + 1);
    } catch (recoveryError) {
      console.warn('Recovery action failed:', recoveryError);
    }
  }

  private handleRetryAction(errorReport: ErrorReport, action: ErrorRecoveryAction): void {
    // Implement retry logic based on error type
    const errorType = this.categorizeError(errorReport.error);
    
    if (errorType === 'network') {
      // Retry network requests with exponential backoff
      setTimeout(() => {
        this.retryNetworkRequest(errorReport);
      }, Math.pow(2, this.retryAttempts.get(`${errorReport.id}_${action.id}`) || 0) * 1000);
    }
  }

  private handleFallbackAction(errorReport: ErrorReport, action: ErrorRecoveryAction): void {
    // Implement fallback UI or cached data
    const errorType = this.categorizeError(errorReport.error);
    
    if (errorType === 'network') {
      this.showOfflineMode();
    } else if (errorType === 'javascript') {
      this.showErrorFallbackUI(errorReport);
    }
  }

  private handleReloadAction(errorReport: ErrorReport, action: ErrorRecoveryAction): void {
    // Reload component or page
    const errorType = this.categorizeError(errorReport.error);
    
    if (errorType === 'memory') {
      // Reload entire page for memory issues
      window.location.reload();
    } else {
      // Reload specific component (would need component context)
      this.reloadComponent(errorReport);
    }
  }

  private handleRedirectAction(errorReport: ErrorReport, action: ErrorRecoveryAction): void {
    // Redirect to error page or safe location
    window.location.href = '/error?type=' + this.categorizeError(errorReport.error);
  }

  private handleNotifyAction(errorReport: ErrorReport, action: ErrorRecoveryAction): void {
    // Show user notification about the error
    this.showErrorNotification(errorReport);
  }

  private retryNetworkRequest(errorReport: ErrorReport): void {
    // This would need to be implemented based on the specific request
    console.log('Retrying network request for error:', errorReport.id);
  }

  private showOfflineMode(): void {
    // Show offline mode indicator
    const offlineIndicator = document.createElement('div');
    offlineIndicator.className = 'offline-indicator';
    offlineIndicator.textContent = 'You are offline. Some features may be limited.';
    offlineIndicator.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #ff6b6b;
      color: white;
      padding: 10px;
      text-align: center;
      z-index: 1000;
    `;
    document.body.appendChild(offlineIndicator);
    
    setTimeout(() => {
      offlineIndicator.remove();
    }, 5000);
  }

  private showErrorFallbackUI(errorReport: ErrorReport): void {
    // Show fallback UI for failed components
    const fallbackUI = document.createElement('div');
    fallbackUI.className = 'error-fallback-ui';
    fallbackUI.innerHTML = `
      <div style="padding: 20px; text-align: center; border: 1px solid #ddd; margin: 10px;">
        <h3>Something went wrong</h3>
        <p>We're working to fix this issue. Please try refreshing the page.</p>
        <button onclick="window.location.reload()">Refresh Page</button>
      </div>
    `;
    
    // This would need to be integrated with the specific component that failed
    console.log('Showing fallback UI for error:', errorReport.id);
  }

  private reloadComponent(errorReport: ErrorReport): void {
    // This would need component-specific implementation
    console.log('Reloading component for error:', errorReport.id);
  }

  private showErrorNotification(errorReport: ErrorReport): void {
    // Show user-friendly error notification
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.textContent = 'An error occurred. We\'re working to fix it.';
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #ff6b6b;
      color: white;
      padding: 15px;
      border-radius: 5px;
      z-index: 1000;
      max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }

  // Public API
  public getErrorReports(): ErrorReport[] {
    return [...this.errorReports];
  }

  public getUnresolvedErrors(): ErrorReport[] {
    return this.errorReports.filter(report => !report.resolved);
  }

  public getErrorsByType(type: string): ErrorReport[] {
    return this.errorReports.filter(report => 
      this.categorizeError(report.error) === type
    );
  }

  public resolveError(errorId: string): boolean {
    const errorReport = this.errorReports.find(report => report.id === errorId);
    if (errorReport) {
      errorReport.resolved = true;
      return true;
    }
    return false;
  }

  public getErrorStatistics(): {
    total: number;
    resolved: number;
    unresolved: number;
    byType: Record<string, number>;
  } {
    const total = this.errorReports.length;
    const resolved = this.errorReports.filter(report => report.resolved).length;
    const unresolved = total - resolved;
    
    const byType: Record<string, number> = {};
    this.errorReports.forEach(report => {
      const type = this.categorizeError(report.error);
      byType[type] = (byType[type] || 0) + 1;
    });

    return { total, resolved, unresolved, byType };
  }

  public addCustomRecoveryStrategy(errorType: string, actions: ErrorRecoveryAction[]): void {
    this.recoveryStrategies.set(errorType, actions);
  }

  public cleanup(): void {
    this.isMonitoring = false;
    this.errorReports = [];
    this.retryAttempts.clear();
  }
}

export const advancedErrorRecoverySystem = new AdvancedErrorRecoverySystem();