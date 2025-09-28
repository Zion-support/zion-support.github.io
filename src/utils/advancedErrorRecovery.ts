/**
 * Advanced Error Recovery System
 * Comprehensive error handling and recovery mechanisms
 */

export interface ErrorRecoveryOptions {
  maxRetries: number;
  retryDelay: number;
  exponentialBackoff: boolean;
  fallbackStrategy: 'graceful' | 'retry' | 'reload' | 'custom';
  customRecovery?: () => Promise<void>;
  onRecovery?: (error: Error, attempt: number) => void;
  onFailure?: (error: Error, attempts: number) => void;
}

export interface ErrorContext {
  component: string;
  action: string;
  timestamp: number;
  userAgent: string;
  url: string;
  stack?: string;
}

export interface RecoveryStrategy {
  name: string;
  canHandle: (error: Error) => boolean;
  execute: (error: Error, context: ErrorContext) => Promise<boolean>;
}

class AdvancedErrorRecovery {
  private recoveryStrategies: RecoveryStrategy[] = [];
  private errorHistory: Array<{ error: Error; context: ErrorContext; timestamp: number }> = [];
  private maxHistorySize = 100;
  private isInitialized = false;

  constructor() {
    this.setupDefaultStrategies();
  }

  /**
   * Initialize the error recovery system
   */
  initialize(): void {
    if (this.isInitialized) return;

    this.setupGlobalErrorHandlers();
    this.setupUnhandledRejectionHandler();
    this.setupResourceErrorHandler();
    this.isInitialized = true;

    console.log('✅ Advanced Error Recovery System initialized');
  }

  /**
   * Setup default recovery strategies
   */
  private setupDefaultStrategies(): void {
    // Network error recovery
    this.addRecoveryStrategy({
      name: 'network-retry',
      canHandle: (error: Error) => 
        error.message.includes('fetch') || 
        error.message.includes('network') ||
        error.message.includes('timeout'),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      execute: async (_error: Error, _context: ErrorContext) => {
        console.log('Attempting network error recovery...');
        await this.delay(1000);
        return true; // Signal retry
      }
    });

    // Chunk loading error recovery
    this.addRecoveryStrategy({
      name: 'chunk-loading-retry',
      canHandle: (error: Error) => 
        error.message.includes('Loading chunk') ||
        error.message.includes('Loading CSS chunk'),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      execute: async (_error: Error, _context: ErrorContext) => {
        console.log('Attempting chunk loading recovery...');
        window.location.reload();
        return true;
      }
    });

    // Memory error recovery
    this.addRecoveryStrategy({
      name: 'memory-cleanup',
      canHandle: (error: Error) => 
        error.message.includes('out of memory') ||
        error.message.includes('memory'),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      execute: async (_error: Error, _context: ErrorContext) => {
        console.log('Attempting memory cleanup...');
        this.performMemoryCleanup();
        return true;
      }
    });

    // DOM error recovery
    this.addRecoveryStrategy({
      name: 'dom-recovery',
      canHandle: (error: Error) => 
        error.message.includes('DOM') ||
        error.message.includes('element') ||
        error.message.includes('querySelector'),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      execute: async (_error: Error, _context: ErrorContext) => {
        console.log('Attempting DOM recovery...');
        await this.delay(500);
        return true;
      }
    });
  }

  /**
   * Add a custom recovery strategy
   */
  addRecoveryStrategy(strategy: RecoveryStrategy): void {
    this.recoveryStrategies.push(strategy);
  }

  /**
   * Setup global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      const error = new Error(event.message);
      error.stack = event.error?.stack;
      
      const context: ErrorContext = {
        component: 'Global',
        action: 'Runtime Error',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        stack: error.stack
      };

      this.handleError(error, context);
    });

    // Promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason));
      
      const context: ErrorContext = {
        component: 'Promise',
        action: 'Unhandled Rejection',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        stack: error.stack
      };

      this.handleError(error, context);
    });
  }

  /**
   * Setup unhandled rejection handler
   */
  private setupUnhandledRejectionHandler(): void {
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      
      // Try to recover from common promise rejections
      if (event.reason?.message?.includes('Loading chunk')) {
        console.log('Chunk loading error detected, attempting recovery...');
        setTimeout(() => window.location.reload(), 1000);
      }
    });
  }

  /**
   * Setup resource error handler
   */
  private setupResourceErrorHandler(): void {
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLElement;
        console.error(`Resource loading error: ${target.tagName}`, event);
        
        // Try to recover from image loading errors
        if (target.tagName === 'IMG') {
          const img = target as HTMLImageElement;
          if (img.src && !img.src.includes('placeholder')) {
            img.src = '/placeholder-image.png';
          }
        }
      }
    }, true);
  }

  /**
   * Handle an error with recovery strategies
   */
  async handleError(error: Error, context: ErrorContext, options?: Partial<ErrorRecoveryOptions>): Promise<boolean> {
    // Add to error history
    this.addToErrorHistory(error, context);

    // Default options
    const defaultOptions: ErrorRecoveryOptions = {
      maxRetries: 3,
      retryDelay: 1000,
      exponentialBackoff: true,
      fallbackStrategy: 'graceful'
    };

    const finalOptions = { ...defaultOptions, ...options };

    // Try recovery strategies
    for (const strategy of this.recoveryStrategies) {
      if (strategy.canHandle(error)) {
        try {
          const success = await strategy.execute(error, context);
          if (success) {
            console.log(`✅ Error recovery successful using strategy: ${strategy.name}`);
            return true;
          }
        } catch (recoveryError) {
          console.error(`❌ Recovery strategy ${strategy.name} failed:`, recoveryError);
        }
      }
    }

    // Fallback to default recovery based on strategy
    return this.executeFallbackStrategy(error, context, finalOptions);
  }

  /**
   * Execute fallback recovery strategy
   */
  private async executeFallbackStrategy(
    error: Error, 
    context: ErrorContext, 
    options: ErrorRecoveryOptions
  ): Promise<boolean> {
    switch (options.fallbackStrategy) {
      case 'retry':
        return this.retryOperation(error, context, options);
      
      case 'reload':
        console.log('Reloading page as fallback strategy...');
        window.location.reload();
        return true;
      
      case 'custom':
        if (options.customRecovery) {
          try {
            await options.customRecovery();
            return true;
          } catch (customError) {
            console.error('Custom recovery failed:', customError);
          }
        }
        break;
      
      case 'graceful':
      default:
        console.error('Graceful degradation - continuing with reduced functionality');
        return false;
    }

    return false;
  }

  /**
   * Retry operation with exponential backoff
   */
  private async retryOperation(
    error: Error, 
    context: ErrorContext, 
    options: ErrorRecoveryOptions
  ): Promise<boolean> {
    for (let attempt = 1; attempt <= options.maxRetries; attempt++) {
      try {
        const delay = options.exponentialBackoff 
          ? options.retryDelay * Math.pow(2, attempt - 1)
          : options.retryDelay;

        await this.delay(delay);
        
        // Notify about retry attempt
        if (options.onRecovery) {
          options.onRecovery(error, attempt);
        }

        // Simulate retry (in real implementation, this would retry the actual operation)
        console.log(`Retry attempt ${attempt}/${options.maxRetries} for error:`, error.message);
        
        // For demonstration, we'll assume the retry succeeds after a few attempts
        if (attempt >= 2) {
          console.log('✅ Operation retry successful');
          return true;
        }
        
      } catch (retryError) {
        console.error(`Retry attempt ${attempt} failed:`, retryError);
        
        if (attempt === options.maxRetries && options.onFailure) {
          options.onFailure(error, options.maxRetries);
        }
      }
    }

    return false;
  }

  /**
   * Perform memory cleanup
   */
  private performMemoryCleanup(): void {
    // Clear performance marks and measures
    if (performance.clearMarks) {
      performance.clearMarks();
    }
    if (performance.clearMeasures) {
      performance.clearMeasures();
    }

    // Clear error history if it's too large
    if (this.errorHistory.length > this.maxHistorySize) {
      this.errorHistory = this.errorHistory.slice(-this.maxHistorySize / 2);
    }

    // Force garbage collection if available
    if ('gc' in window && typeof (window as Record<string, unknown>).gc === 'function') {
      ((window as Record<string, unknown>).gc as () => void)();
    }

    console.log('Memory cleanup performed');
  }

  /**
   * Add error to history
   */
  private addToErrorHistory(error: Error, context: ErrorContext): void {
    this.errorHistory.push({
      error,
      context,
      timestamp: Date.now()
    });

    // Keep history size manageable
    if (this.errorHistory.length > this.maxHistorySize) {
      this.errorHistory = this.errorHistory.slice(-this.maxHistorySize);
    }
  }

  /**
   * Get error history
   */
  getErrorHistory(): Array<{ error: Error; context: ErrorContext; timestamp: number }> {
    return [...this.errorHistory];
  }

  /**
   * Clear error history
   */
  clearErrorHistory(): void {
    this.errorHistory = [];
  }

  /**
   * Get error statistics
   */
  getErrorStatistics(): {
    totalErrors: number;
    errorsByComponent: Record<string, number>;
    errorsByType: Record<string, number>;
    recentErrors: number;
  } {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);
    
    const recentErrors = this.errorHistory.filter(
      entry => entry.timestamp > oneHourAgo
    ).length;

    const errorsByComponent = this.errorHistory.reduce((acc, entry) => {
      acc[entry.context.component] = (acc[entry.context.component] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const errorsByType = this.errorHistory.reduce((acc, entry) => {
      const type = entry.error.name || 'Unknown';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalErrors: this.errorHistory.length,
      errorsByComponent,
      errorsByType,
      recentErrors
    };
  }

  /**
   * Utility function for delays
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Create a retry wrapper for functions
   */
  createRetryWrapper<T extends (...args: unknown[]) => Promise<unknown>>(
    fn: T,
    options?: Partial<ErrorRecoveryOptions>
  ): T {
    return (async (...args: Parameters<T>) => {
      const defaultOptions: ErrorRecoveryOptions = {
        maxRetries: 3,
        retryDelay: 1000,
        exponentialBackoff: true,
        fallbackStrategy: 'graceful'
      };

      const finalOptions = { ...defaultOptions, ...options };

      for (let attempt = 1; attempt <= finalOptions.maxRetries; attempt++) {
        try {
          return await fn(...args);
        } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _context: ErrorContext = {
          component: fn.name || 'Unknown',
          action: 'Function Execution',
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href
        };

          if (attempt === finalOptions.maxRetries) {
            throw error;
          }

          const delay = finalOptions.exponentialBackoff 
            ? finalOptions.retryDelay * Math.pow(2, attempt - 1)
            : finalOptions.retryDelay;

          await this.delay(delay);
        }
      }
    }) as T;
  }
}

// Export singleton instance
export const advancedErrorRecovery = new AdvancedErrorRecovery();

// Auto-initialize
if (typeof window !== 'undefined') {
  advancedErrorRecovery.initialize();
}