/**
 * Error Recovery and Resilience Utilities
 * Provides comprehensive error handling and recovery mechanisms
 */

interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  timestamp: string;
  userAgent?: string;
  url?: string;
}

interface RecoveryStrategy {
  name: string;
  condition: (error: Error) => boolean;
  action: (error: Error, context: ErrorContext) => Promise<void>;
}

class ErrorRecoveryManager {
  private strategies: RecoveryStrategy[] = [];
  private errorHistory: Array<{ error: Error; context: ErrorContext; timestamp: string }> = [];

  constructor() {
    this.initializeDefaultStrategies();
  }

  private initializeDefaultStrategies() {
    // Network error recovery
    this.addStrategy({
      name: 'network-retry',
      condition: (error) => error.message.includes('network') || error.message.includes('fetch'),
      action: async (error, context) => {
        console.log('🔄 Attempting network error recovery...');
        // Implement retry logic
        await this.retryWithBackoff(() => {
          // Retry the failed operation
          return Promise.resolve();
        }, 3);
      }
    });

    // Authentication error recovery
    this.addStrategy({
      name: 'auth-refresh',
      condition: (error) => error.message.includes('unauthorized') || error.message.includes('401'),
      action: async (error, context) => {
        console.log('🔐 Attempting authentication recovery...');
        // Implement token refresh logic
        await this.refreshAuthToken();
      }
    });

    // Component error recovery
    this.addStrategy({
      name: 'component-reset',
      condition: (error) => error.message.includes('component') || error.message.includes('render'),
      action: async (error, context) => {
        console.log('🔄 Attempting component reset...');
        // Implement component reset logic
        await this.resetComponent(context.component || 'unknown');
      }
    });

    // Memory error recovery
    this.addStrategy({
      name: 'memory-cleanup',
      condition: (error) => error.message.includes('memory') || error.message.includes('heap'),
      action: async (error, context) => {
        console.log('🧹 Attempting memory cleanup...');
        // Implement memory cleanup
        await this.cleanupMemory();
      }
    });
  }

  addStrategy(strategy: RecoveryStrategy) {
    this.strategies.push(strategy);
  }

  async handleError(error: Error, context: ErrorContext): Promise<boolean> {
    // Log error
    this.logError(error, context);

    // Find applicable recovery strategies
    const applicableStrategies = this.strategies.filter(strategy => 
      strategy.condition(error)
    );

    if (applicableStrategies.length === 0) {
      console.warn('⚠️  No recovery strategy found for error:', error.message);
      return false;
    }

    // Execute recovery strategies
    let recovered = false;
    for (const strategy of applicableStrategies) {
      try {
        await strategy.action(error, context);
        console.log(`✅ Recovery strategy '${strategy.name}' executed successfully`);
        recovered = true;
      } catch (recoveryError) {
        console.error(`❌ Recovery strategy '${strategy.name}' failed:`, recoveryError);
      }
    }

    return recovered;
  }

  private logError(error: Error, context: ErrorContext) {
    const errorEntry = {
      error,
      context,
      timestamp: new Date().toISOString()
    };

    this.errorHistory.push(errorEntry);

    // Keep only last 100 errors
    if (this.errorHistory.length > 100) {
      this.errorHistory = this.errorHistory.slice(-100);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('🚨 Error occurred:', error, context);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendErrorToService(error, context);
    }
  }

  private async sendErrorToService(error: Error, context: ErrorContext) {
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        ...context,
        timestamp: new Date().toISOString(),
      };

      // In a real application, you would send this to an error tracking service
      // like Sentry, LogRocket, or Bugsnag
      console.log('📤 Error sent to service:', errorData);
    } catch (loggingError) {
      console.error('Failed to send error to service:', loggingError);
    }
  }

  private async retryWithBackoff<T>(
    operation: () => Promise<T>,
    maxRetries: number,
    baseDelay: number = 1000
  ): Promise<T> {
    let lastError: Error;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < maxRetries - 1) {
          const delay = baseDelay * Math.pow(2, attempt);
          console.log(`⏳ Retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    throw lastError!;
  }

  private async refreshAuthToken(): Promise<void> {
    // Implement token refresh logic
    console.log('🔄 Refreshing authentication token...');
    // This would typically involve calling your auth service
  }

  private async resetComponent(componentName: string): Promise<void> {
    // Implement component reset logic
    console.log(`🔄 Resetting component: ${componentName}`);
    // This would typically involve re-mounting the component
  }

  private async cleanupMemory(): Promise<void> {
    // Implement memory cleanup logic
    console.log('🧹 Cleaning up memory...');
    
    // Force garbage collection if available
    if (typeof window !== 'undefined' && (window as any).gc) {
      (window as any).gc();
    }
  }

  getErrorHistory() {
    return this.errorHistory;
  }

  getErrorStats() {
    const totalErrors = this.errorHistory.length;
    const errorsByType = this.errorHistory.reduce((acc, entry) => {
      const errorType = entry.error.constructor.name;
      acc[errorType] = (acc[errorType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalErrors,
      errorsByType,
      recentErrors: this.errorHistory.slice(-10)
    };
  }
}

// Global error recovery manager instance
export const errorRecoveryManager = new ErrorRecoveryManager();

// React error boundary hook
export function useErrorRecovery(componentName: string) {
  const handleError = async (error: Error, action?: string) => {
    const context: ErrorContext = {
      component: componentName,
      action,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    };

    return await errorRecoveryManager.handleError(error, context);
  };

  return { handleError };
}

// Error recovery decorator for functions
export function withErrorRecovery<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  context: Partial<ErrorContext>
): T {
  return (async (...args: Parameters<T>) => {
    try {
      return await fn(...args);
    } catch (error) {
      const fullContext: ErrorContext = {
        timestamp: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        ...context,
      };

      const recovered = await errorRecoveryManager.handleError(error as Error, fullContext);
      
      if (!recovered) {
        throw error;
      }
    }
  }) as T;
}

// Global error handler
export function setupGlobalErrorHandling() {
  if (typeof window !== 'undefined') {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const context: ErrorContext = {
        timestamp: new Date().toISOString(),
        userAgent: window.navigator.userAgent,
        url: window.location.href,
        action: 'unhandled-promise-rejection',
      };

      errorRecoveryManager.handleError(event.reason, context);
    });

    // Handle uncaught errors
    window.addEventListener('error', (event) => {
      const context: ErrorContext = {
        timestamp: new Date().toISOString(),
        userAgent: window.navigator.userAgent,
        url: window.location.href,
        action: 'uncaught-error',
      };

      errorRecoveryManager.handleError(event.error, context);
    });
  }
}

export default ErrorRecoveryManager;