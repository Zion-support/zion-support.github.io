/**
 * Error Recovery System
 * Provides comprehensive error handling and recovery mechanisms
 */

export interface ErrorContext {
  error: Error;
  timestamp: number;
  userAgent: string;
  url: string;
  stack?: string;
}

export interface RecoveryStrategy {
  name: string;
  condition: (error: Error) => boolean;
  action: () => Promise<void>;
}

export class ErrorRecoverySystem {
  private errorCount = 0;
  private maxRetries = 3;
  private errorHistory: ErrorContext[] = [];
  private recoveryStrategies: RecoveryStrategy[] = [];

  constructor() {
    this.setupErrorHandling();
    this.setupRecoveryStrategies();
  }

  private setupErrorHandling(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('error', (event) => {
      this.handleError(event.error || new Error(event.message));
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(event.reason instanceof Error ? event.reason : new Error(String(event.reason)));
    });
  }

  private setupRecoveryStrategies(): void {
    this.recoveryStrategies = [
      {
        name: 'cache-clear',
        condition: (error) => error.message.includes('cache') || error.message.includes('storage'),
        action: async () => {
          if ('caches' in window) {
            const cacheNames = await caches.keys();
            await Promise.all(cacheNames.map(name => caches.delete(name)));
          }
          if ('localStorage' in window) {
            localStorage.clear();
          }
        }
      },
      {
        name: 'memory-clear',
        condition: (error) => error.message.includes('memory') || error.message.includes('heap'),
        action: async () => {
          // Force garbage collection if available
          if ('gc' in window) {
            (window as any).gc();
          }
        }
      },
      {
        name: 'network-retry',
        condition: (error) => error.message.includes('network') || error.message.includes('fetch'),
        action: async () => {
          // Wait before retry
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    ];
  }

  private handleError(error: Error): void {
    console.error('Error Recovery - Error caught:', error);
    this.errorCount++;

    const errorContext: ErrorContext = {
      error,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      stack: error.stack
    };

    this.errorHistory.push(errorContext);

    if (this.errorCount <= this.maxRetries) {
      this.attemptRecovery(error);
    } else {
      this.showFallbackUI();
    }
  }

  private async attemptRecovery(error: Error): Promise<void> {
    console.log(`Attempting recovery (${this.errorCount}/${this.maxRetries})`);
    
    // Try recovery strategies
    for (const strategy of this.recoveryStrategies) {
      if (strategy.condition(error)) {
        try {
          await strategy.action();
          console.log(`Applied recovery strategy: ${strategy.name}`);
        } catch (recoveryError) {
          console.error(`Recovery strategy ${strategy.name} failed:`, recoveryError);
        }
      }
    }

    // Wait before retry
    await new Promise(resolve => setTimeout(resolve, 1000 * this.errorCount));
  }

  private showFallbackUI(): void {
    const fallback = document.createElement('div');
    fallback.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                  background: #f8f9fa; display: flex; align-items: center; 
                  justify-content: center; z-index: 9999;">
        <div style="text-align: center; padding: 2rem; background: white; 
                    border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #dc3545;">Something went wrong</h2>
          <p>Please refresh the page to continue.</p>
          <button onclick="window.location.reload()" 
                  style="background: #007bff; color: white; border: none; 
                         padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(fallback);
  }

  public getErrorCount(): number {
    return this.errorCount;
  }

  public getErrorHistory(): ErrorContext[] {
    return [...this.errorHistory];
  }

  public reset(): void {
    this.errorCount = 0;
    this.errorHistory = [];
  }

  public addRecoveryStrategy(strategy: RecoveryStrategy): void {
    this.recoveryStrategies.push(strategy);
  }
}

export const errorRecoverySystem = new ErrorRecoverySystem();
export const errorRecovery = errorRecoverySystem;
