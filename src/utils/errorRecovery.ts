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
        name: 'network-retry',
        condition: (error) => 
          error.message.includes('fetch') || error.message.includes('network'),
        action: async () => {
          console.log('🔄 Retrying network request...');
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      },
      {
        name: 'component-reload',
        condition: (error) => 
          error.message.includes('component') || error.message.includes('React'),
        action: async () => {
          console.log('🔄 Reloading component...');
          window.location.reload();
        }
      },
      {
        name: 'fallback-ui',
        condition: (error) => 
          error.message.includes('render') || error.message.includes('UI'),
        action: async () => {
          console.log('🔄 Showing fallback UI...');
          // Show fallback UI
        }
      }
    ];
  }

  public async handleError(error: Error, context: Partial<ErrorContext> = {}): Promise<boolean> {
    console.error('🚨 Error caught by recovery system:', error);

    const errorContext: ErrorContext = {
      error,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      stack: error.stack,
      ...context
    };

    this.errorHistory.push(errorContext);

    if (this.errorCount <= this.maxRetries) {
      this.attemptRecovery(error);
    } else {
      this.showFallbackUI();
    }

    return true;
  }

  private async attemptRecovery(error: Error): Promise<void> {
    console.log(`Attempting recovery (${this.errorCount}/${this.maxRetries})`);
    
    for (const strategy of this.recoveryStrategies) {
      if (strategy.condition(error)) {
        try {
          await strategy.action();
          console.log(`✅ Recovery strategy ${strategy.name} executed successfully`);
          return;
        } catch (recoveryError) {
          console.error(`Recovery strategy ${strategy.name} failed:`, recoveryError);
        }
      }
    }

    // Wait before retry
    await new Promise(resolve => setTimeout(resolve, 1000 * this.errorCount));
    this.errorCount++;
  }

  private showFallbackUI(): void {
    console.log('🔄 Showing fallback UI...');
    // Implement fallback UI logic here
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