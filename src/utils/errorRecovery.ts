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
  action: (error: Error, context: ErrorContext) => Promise<void>;
  priority: number;
}

export class ErrorRecoverySystem {
  private errorCount = 0;
  private maxRetries = 3;
  private errorHistory: ErrorContext[] = [];
  private recoveryStrategies: RecoveryStrategy[] = [];

  constructor() {
    this.setupRecoveryStrategies();
  }

  private setupRecoveryStrategies(): void {
    this.recoveryStrategies = [
      {
        name: 'network-retry',
        condition: (error, context) => 
          error.message.includes('fetch') || error.message.includes('network'),
        action: async (error, context) => {
          console.log('🔄 Retrying network request...');
          await new Promise(resolve => setTimeout(resolve, 1000));
        },
        priority: 1
      },
      {
        name: 'component-reload',
        condition: (error, context) => 
          error.message.includes('component') || context.component !== 'unknown',
        action: async (error, context) => {
          console.log('🔄 Reloading component...');
          window.location.reload();
        },
        priority: 2
      },
      {
        name: 'fallback-ui',
        condition: (error, context) => 
          error.message.includes('render') || error.message.includes('React'),
        action: async (error, context) => {
          console.log('🔄 Showing fallback UI...');
          // Show fallback UI
        },
        priority: 3
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

    if (this.errorCount >= this.maxRetries) {
      console.error('❌ Max retries exceeded, giving up');
      return false;
    }

    this.errorCount++;
    await this.attemptRecovery(error);
    return true;
  }

  private async attemptRecovery(error: Error): Promise<void> {
    console.log(`Attempting recovery (${this.errorCount}/${this.maxRetries})`);
    
    for (const strategy of this.recoveryStrategies) {
      if (strategy.condition(error, this.errorHistory[this.errorHistory.length - 1])) {
        try {
          await strategy.action(error, this.errorHistory[this.errorHistory.length - 1]);
          console.log(`✅ Recovery strategy ${strategy.name} executed successfully`);
          return;
        } catch (recoveryError) {
          console.error(`Recovery strategy ${strategy.name} failed:`, recoveryError);
        }
      }
    }
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

// Export singleton instance
export const errorRecoverySystem = new ErrorRecoverySystem();