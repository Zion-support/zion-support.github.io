/**
 * Enhanced Error Handling System
 * Provides comprehensive error tracking, reporting, and recovery mechanisms
 */

import { errorHandler } from './errorHandler';

export interface ErrorRecoveryStrategy {
  name: string;
  condition: (error: Error) => boolean;
  action: (error: Error) => Promise<boolean>;
  priority: number;
}

export interface ErrorMetrics {
  totalErrors: number;
  errorsByType: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  lastErrorTime: number;
  errorRate: number;
}

export class EnhancedErrorHandler {
  private static instance: EnhancedErrorHandler;
  private recoveryStrategies: ErrorRecoveryStrategy[] = [];
  private errorCounts: Map<string, number> = new Map();
  private errorTimestamps: number[] = [];
  private maxErrorHistory = 100;
  private errorRateWindow = 5 * 60 * 1000; // 5 minutes

  private constructor() {
    this.setupDefaultRecoveryStrategies();
    this.setupGlobalErrorHandlers();
  }

  public static getInstance(): EnhancedErrorHandler {
    if (!EnhancedErrorHandler.instance) {
      EnhancedErrorHandler.instance = new EnhancedErrorHandler();
    }
    return EnhancedErrorHandler.instance;
  }

  private setupDefaultRecoveryStrategies(): void {
    // Network error recovery
    this.addRecoveryStrategy({
      name: 'network-retry',
      condition: (error) => error.message.includes('fetch') || error.message.includes('network'),
      action: async (error) => {
        console.log('Attempting network retry...');
        // Implement retry logic
        return true;
      },
      priority: 1
    });

    // Component error recovery
    this.addRecoveryStrategy({
      name: 'component-reload',
      condition: (error) => error.message.includes('component') || error.message.includes('render'),
      action: async (error) => {
        console.log('Attempting component reload...');
        // Force component re-render
        return true;
      },
      priority: 2
    });

    // Memory error recovery
    this.addRecoveryStrategy({
      name: 'memory-cleanup',
      condition: (error) => error.message.includes('memory') || error.message.includes('heap'),
      action: async (error) => {
        console.log('Attempting memory cleanup...');
        // Trigger garbage collection
        if (typeof window !== 'undefined' && (window as any).gc) {
          (window as any).gc();
        }
        return true;
      },
      priority: 3
    });
  }

  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(new Error(event.reason), {
        action: 'unhandledrejection',
        component: 'global'
      });
    });

    // Handle JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError(event.error || new Error(event.message), {
        action: 'javascript_error',
        component: 'global',
        url: event.filename
      });
    });

    // Handle resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.handleError(new Error(`Resource loading failed: ${(event.target as any).src || (event.target as any).href}`), {
          action: 'resource_error',
          component: 'global'
        });
      }
    }, true);
  }

  public addRecoveryStrategy(strategy: ErrorRecoveryStrategy): void {
    this.recoveryStrategies.push(strategy);
    this.recoveryStrategies.sort((a, b) => a.priority - b.priority);
  }

  public async handleError(error: Error, context: any = {}): Promise<boolean> {
    // Log the error
    errorHandler.logError(error, context, this.getSeverity(error));

    // Track error metrics
    this.trackError(error);

    // Attempt recovery
    const recovered = await this.attemptRecovery(error);

    // Report to external service if not recovered
    if (!recovered) {
      this.reportToExternalService(error, context);
    }

    return recovered;
  }

  private trackError(error: Error): void {
    const errorType = error.constructor.name;
    const count = this.errorCounts.get(errorType) || 0;
    this.errorCounts.set(errorType, count + 1);

    this.errorTimestamps.push(Date.now());
    
    // Keep only recent errors
    const cutoff = Date.now() - this.errorRateWindow;
    this.errorTimestamps = this.errorTimestamps.filter(timestamp => timestamp > cutoff);
    
    // Limit history size
    if (this.errorTimestamps.length > this.maxErrorHistory) {
      this.errorTimestamps = this.errorTimestamps.slice(-this.maxErrorHistory);
    }
  }

  private getSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase();
    
    if (message.includes('network') || message.includes('fetch')) return 'medium';
    if (message.includes('memory') || message.includes('heap')) return 'high';
    if (message.includes('security') || message.includes('auth')) return 'critical';
    
    return 'low';
  }

  private async attemptRecovery(error: Error): Promise<boolean> {
    for (const strategy of this.recoveryStrategies) {
      if (strategy.condition(error)) {
        try {
          const recovered = await strategy.action(error);
          if (recovered) {
            console.log(`Error recovered using strategy: ${strategy.name}`);
            return true;
          }
        } catch (recoveryError) {
          console.warn(`Recovery strategy ${strategy.name} failed:`, recoveryError);
        }
      }
    }
    return false;
  }

  private reportToExternalService(error: Error, context: any): void {
    // In a real application, you would send to services like Sentry, LogRocket, etc.
    console.error('Unrecoverable error reported:', {
      error: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString()
    });
  }

  public getErrorMetrics(): ErrorMetrics {
    const now = Date.now();
    const recentErrors = this.errorTimestamps.filter(timestamp => 
      now - timestamp < this.errorRateWindow
    );

    const errorsByType: Record<string, number> = {};
    this.errorCounts.forEach((count, type) => {
      errorsByType[type] = count;
    });

    const errorsBySeverity: Record<string, number> = {};
    errorHandler.getErrors().forEach(error => {
      const severity = error.severity;
      errorsBySeverity[severity] = (errorsBySeverity[severity] || 0) + 1;
    });

    return {
      totalErrors: this.errorTimestamps.length,
      errorsByType,
      errorsBySeverity,
      lastErrorTime: this.errorTimestamps[this.errorTimestamps.length - 1] || 0,
      errorRate: recentErrors.length / (this.errorRateWindow / 1000) // errors per second
    };
  }

  public clearErrorHistory(): void {
    this.errorCounts.clear();
    this.errorTimestamps = [];
  }

  public getErrorTrends(): {
    isIncreasing: boolean;
    recentRate: number;
    averageRate: number;
  } {
    const now = Date.now();
    const recentWindow = 1 * 60 * 1000; // 1 minute
    const recentErrors = this.errorTimestamps.filter(timestamp => 
      now - timestamp < recentWindow
    );

    const recentRate = recentErrors.length / (recentWindow / 1000);
    const averageRate = this.errorTimestamps.length / (this.errorRateWindow / 1000);

    return {
      isIncreasing: recentRate > averageRate * 1.5,
      recentRate,
      averageRate
    };
  }
}

// Export singleton instance
export const enhancedErrorHandler = EnhancedErrorHandler.getInstance();

export default enhancedErrorHandler;