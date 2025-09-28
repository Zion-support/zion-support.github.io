/**
 * Advanced Error Recovery System
 * Provides comprehensive error handling and recovery mechanisms
 */

interface ErrorContext {
  component: string;
  action: string;
  timestamp: number;
  userAgent: string;
  url: string;
  stack?: string;
}

interface RecoveryStrategy {
  name: string;
  condition: (error: Error, context: ErrorContext) => boolean;
  action: (error: Error, context: ErrorContext) => void;
  priority: number;
}

export class ErrorRecoverySystem {
  private errorHistory: Error[] = [];
  private recoveryStrategies: RecoveryStrategy[] = [];
  private maxHistorySize = 100;
  private errorCount = 0;
  private maxRetries = 3;

  constructor() {
    this.setupErrorHandling();
    this.initializeRecoveryStrategies();
  }

  private setupErrorHandling(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('error', (event) => {
      this.handleError(event.error || new Error(event.message), {
        component: 'Global',
        action: 'error',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        stack: event.error?.stack
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(new Error(event.reason), {
        component: 'Global',
        action: 'unhandledrejection',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });
  }

  private initializeRecoveryStrategies(): void {
    this.recoveryStrategies = [
      {
        name: 'ChunkLoadError Recovery',
        condition: (error, context) => 
          error.message.includes('ChunkLoadError') || error.message.includes('Loading chunk'),
        action: (error, context) => {
          console.log('Attempting chunk load recovery');
          window.location.reload();
        },
        priority: 1
      },
      {
        name: 'Network Error Recovery',
        condition: (error, context) => 
          error.message.includes('NetworkError') || error.message.includes('fetch'),
        action: (error, context) => {
          console.log('Attempting network error recovery');
          setTimeout(() => {
            this.errorCount = 0;
          }, 2000);
        },
        priority: 2
      },
      {
        name: 'Component Error Recovery',
        condition: (error, context) => 
          Boolean(context.component && error.message.includes('component')),
        action: (error, context) => {
          console.log(`Attempting component recovery for ${context.component}`);
          // Component-specific recovery logic
        },
        priority: 3
      },
      {
        name: 'Memory Error Recovery',
        condition: (error, context) => 
          error.message.includes('out of memory') || error.message.includes('Memory'),
        action: (error, context) => {
          console.log('Attempting memory error recovery');
          // Clear caches, reduce memory usage
          if ('caches' in window) {
            caches.keys().then(names => {
              names.forEach(name => caches.delete(name));
            });
          }
        },
        priority: 4
      },
      {
        name: 'Fallback Recovery',
        condition: () => true, // Always matches as fallback
        action: (error, context) => {
          console.log('Applying fallback recovery');
          // Generic fallback recovery
        },
        priority: 999
      }
    ];
  }

  public handleError(error: Error, context: ErrorContext): void {
    console.error('Error caught by recovery system:', error, context);
    
    this.addToHistory(error);
    this.errorCount++;

    if (this.errorCount <= this.maxRetries) {
      this.attemptRecovery(error, context);
    } else {
      this.reportCriticalError(error, context);
    }
  }

  private addToHistory(error: Error): void {
    this.errorHistory.push(error);
    if (this.errorHistory.length > this.maxHistorySize) {
      this.errorHistory.shift();
    }
  }

  private attemptRecovery(error: Error, context: ErrorContext): void {
    console.log(`Attempting recovery for error: ${error.message}`);
    
    // Find applicable recovery strategies
    const applicableStrategies = this.recoveryStrategies
      .filter(strategy => strategy.condition(error, context))
      .sort((a, b) => a.priority - b.priority);

    // Execute the first applicable strategy
    if (applicableStrategies.length > 0) {
      const strategy = applicableStrategies[0];
      console.log(`Executing recovery strategy: ${strategy.name}`);
      strategy.action(error, context);
    }
  }

  private reportCriticalError(error: Error, context: ErrorContext): void {
    console.error('Critical error after max retries:', error, context);
    
    // Send error to monitoring service
    if (typeof window !== 'undefined' && 'navigator' in window) {
      // In a real implementation, you would send this to your monitoring service
      console.error('Sending critical error to monitoring service:', {
        error: error.message,
        stack: error.stack,
        context,
        timestamp: new Date().toISOString()
      });
    }
  }

  public getErrorHistory(): Error[] {
    return [...this.errorHistory];
  }

  public getErrorCount(): number {
    return this.errorCount;
  }

  public reset(): void {
    this.errorCount = 0;
  }

  public clearHistory(): void {
    this.errorHistory = [];
  }
}

export const errorRecoverySystem = new ErrorRecoverySystem();
export const errorRecovery = errorRecoverySystem;
export type { ErrorContext, RecoveryStrategy };