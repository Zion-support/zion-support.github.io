/**
 * Advanced Error Recovery System
 * Enhanced error handling and recovery mechanisms
 */

interface ErrorContext {
  error: Error;
  timestamp: number;
  url: string;
  userAgent: string;
  componentStack?: string;
}

interface RecoveryResult {
  success: boolean;
  strategy: string;
  message: string;
  timestamp: number;
}

class AdvancedErrorRecovery {
  private errorHistory: ErrorContext[] = [];
  private recoveryHistory: RecoveryResult[] = [];
  private isInitialized: boolean = false;
  private maxHistorySize: number = 50;

  constructor() {
    this.setupGlobalErrorHandlers();
  }

  /**
   * Initialize the error recovery system
   */
  public initialize(): void {
    if (this.isInitialized) return;
    this.isInitialized = true;
    console.log('Advanced Error Recovery System initialized');
  }

  /**
   * Setup global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      const context: ErrorContext = {
        error: event.error || new Error(event.message),
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        componentStack: event.filename
      };
      
      this.handleError(context);
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      const context: ErrorContext = {
        error: event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };
      
      this.handleError(context);
    });
  }

  /**
   * Handle error with recovery strategies
   */
  private async handleError(context: ErrorContext): Promise<void> {
    this.addToErrorHistory(context);
    
    // Try different recovery strategies
    const strategies = [
      this.retryStrategy,
      this.fallbackStrategy,
      this.gracefulDegradationStrategy
    ];
    
    for (const strategy of strategies) {
      try {
        const success = await strategy(context);
        if (success) {
          this.addToRecoveryHistory({
            success: true,
            strategy: strategy.name,
            message: 'Recovery successful',
            timestamp: Date.now()
          });
          return;
        }
      } catch (strategyError) {
        console.error(`Strategy ${strategy.name} failed:`, strategyError);
      }
    }
    
    // If no strategy succeeded, log the error
    console.error('No recovery strategy succeeded for error:', context.error);
  }

  /**
   * Retry strategy
   */
  private async retryStrategy(context: ErrorContext): Promise<boolean> {
    if (context.error.name === 'NetworkError' || context.error.message.includes('fetch')) {
      try {
        // Simple retry logic
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await fetch(context.url, { method: 'HEAD' });
        return response.ok;
      } catch (error) {
        return false;
      }
    }
    return false;
  }

  /**
   * Fallback strategy
   */
  private async fallbackStrategy(context: ErrorContext): Promise<boolean> {
    try {
      // Show user-friendly error message
      this.showUserFriendlyError(context.error);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Graceful degradation strategy
   */
  private async gracefulDegradationStrategy(context: ErrorContext): Promise<boolean> {
    try {
      // Enable graceful degradation
      document.body.classList.add('graceful-degradation');
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Add error to history
   */
  private addToErrorHistory(context: ErrorContext): void {
    this.errorHistory.push(context);
    if (this.errorHistory.length > this.maxHistorySize) {
      this.errorHistory = this.errorHistory.slice(-this.maxHistorySize);
    }
  }

  /**
   * Add recovery result to history
   */
  private addToRecoveryHistory(result: RecoveryResult): void {
    this.recoveryHistory.push(result);
    if (this.recoveryHistory.length > this.maxHistorySize) {
      this.recoveryHistory = this.recoveryHistory.slice(-this.maxHistorySize);
    }
  }

  /**
   * Show user-friendly error message
   */
  private showUserFriendlyError(error: Error): void {
    const errorMessage = this.getUserFriendlyMessage(error);
    
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.innerHTML = `
      <div class="error-content">
        <h3>Something went wrong</h3>
        <p>${errorMessage}</p>
        <button onclick="this.parentElement.parentElement.remove()">Dismiss</button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 10000);
  }

  /**
   * Get user-friendly error message
   */
  private getUserFriendlyMessage(error: Error): string {
    const messages: Record<string, string> = {
      'NetworkError': 'Unable to connect to the server. Please check your internet connection.',
      'TypeError': 'Something unexpected happened. Please try refreshing the page.',
      'ReferenceError': 'A technical issue occurred. Please try again.',
      'SyntaxError': 'There was a problem loading the page. Please refresh.',
      'RangeError': 'The application encountered an issue. Please try again.',
      'URIError': 'There was a problem with the URL. Please check the address.',
      'EvalError': 'A security issue was detected. Please refresh the page.'
    };
    
    return messages[error.name] || 'An unexpected error occurred. Please try refreshing the page.';
  }

  /**
   * Get error statistics
   */
  public getErrorStatistics(): any {
    const totalErrors = this.errorHistory.length;
    const successfulRecoveries = this.recoveryHistory.filter(r => r.success).length;
    
    return {
      totalErrors,
      successfulRecoveries,
      recoveryRate: totalErrors > 0 ? (successfulRecoveries / totalErrors) * 100 : 0,
      recentErrors: this.errorHistory.slice(-10),
      recentRecoveries: this.recoveryHistory.slice(-10)
    };
  }

  /**
   * Clear error history
   */
  public clearHistory(): void {
    this.errorHistory = [];
    this.recoveryHistory = [];
  }
}

// Export singleton instance
export const advancedErrorRecovery = new AdvancedErrorRecovery();
export default AdvancedErrorRecovery;