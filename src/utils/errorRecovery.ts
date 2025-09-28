/**
 * Error Recovery System
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

  private strategies: RecoveryStrategy[] = [];

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
    this.strategies = [
      {
        name: 'cache_clear',
        condition: () => true,
        action: async () => {
          if ('caches' in window) {
            const cacheNames = await caches.keys();
            await Promise.all(cacheNames.map(name => caches.delete(name)));
          }
        }
      },
      {
        name: 'page_reload',
        condition: (error) => error.message.includes('chunk') || error.message.includes('loading'),
        action: async () => {
          window.location.reload();
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
    
    // Find appropriate recovery strategy
    const strategy = this.strategies.find(s => s.condition(error));
    if (strategy) {
      try {
        await strategy.action();
      } catch (recoveryError) {
        console.error('Recovery failed:', recoveryError);
      }
    }

    // Wait before retry
    await new Promise(resolve => setTimeout(resolve, 1000 * this.errorCount));
  }

  private showFallbackUI(): void {
    console.error('Max retries reached, showing fallback UI');
    
    // Create a simple fallback UI
    const fallbackDiv = document.createElement('div');
    fallbackDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        z-index: 9999;
      ">
        <div style="text-align: center; padding: 20px;">
          <h1>Something went wrong</h1>
          <p>We're having trouble loading the application.</p>
          <button onclick="window.location.reload()" style="
            padding: 10px 20px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          ">Try Again</button>
        </div>
      </div>
    `;
    document.body.appendChild(fallbackDiv);
  }

  public getErrorCount(): number {
    return this.errorCount;
  }
  public reset(): void {
    this.errorCount = 0;
    this.errorHistory = [];
  }

  public addRecoveryStrategy(strategy: RecoveryStrategy): void {
    this.strategies.push(strategy);
  }
}

export const errorRecoverySystem = new ErrorRecoverySystem();
export const errorRecovery = errorRecoverySystem;
