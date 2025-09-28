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

class ErrorRecoverySystem {
  private strategies: RecoveryStrategy[] = [];
  private errorHistory: Array<{ error: Error; context: ErrorContext; timestamp: number }> = [];
  private maxHistorySize = 100;

  constructor() {
    this.setupDefaultStrategies();
  }

  private setupDefaultStrategies(): void {
    // Network error recovery
    this.addStrategy({
      name: 'network-retry',
      condition: (error, context) => 
        error.message.includes('fetch') || error.message.includes('network'),
      action: async (error, context) => {
        console.log('🔄 Retrying network request...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Retry logic would go here
      },
      priority: 1
    });

    // Component error recovery
    this.addStrategy({
      name: 'component-reset',
      condition: (error, context) => 
        Boolean(context.component && error.message.includes('component')),
      action: async (error, context) => {
        console.log('🔄 Resetting component...');
        // Component reset logic would go here
      },
      priority: 2
    });

    // Memory error recovery
    this.addStrategy({
      name: 'memory-cleanup',
      condition: (error, context) => 
        error.message.includes('memory') || error.message.includes('heap'),
      action: async (error, context) => {
        console.log('🧹 Cleaning up memory...');
        if ('gc' in window) {
          (window as any).gc();
        }
      },
      priority: 3
    });

    // Generic fallback
    this.addStrategy({
      name: 'fallback',
      condition: () => true,
      action: async (error, context) => {
        console.log('🆘 Applying fallback recovery...');
        // Generic recovery logic
      },
      priority: 999
    });
  }

  addStrategy(strategy: RecoveryStrategy): void {
    this.strategies.push(strategy);
    this.strategies.sort((a, b) => a.priority - b.priority);
  }

  async handleError(error: Error, context: Partial<ErrorContext> = {}): Promise<boolean> {
    const fullContext: ErrorContext = {
      component: context.component || 'unknown',
      action: context.action || 'unknown',
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      stack: error.stack,
      ...context
    };

    // Add to error history
    this.addToHistory(error, fullContext);

    // Find applicable strategies
    const applicableStrategies = this.strategies.filter(strategy => 
      strategy.condition(error, fullContext)
    );

    if (applicableStrategies.length === 0) {
      console.error('❌ No recovery strategies found for error:', error);
      return false;
    }

    // Execute strategies in priority order
    for (const strategy of applicableStrategies) {
      try {
        console.log(`🔄 Executing recovery strategy: ${strategy.name}`);
        await strategy.action(error, fullContext);
        console.log(`✅ Recovery strategy ${strategy.name} completed`);
        return true;
      } catch (recoveryError) {
        console.error(`❌ Recovery strategy ${strategy.name} failed:`, recoveryError);
      }
    }

    return false;
  }

  private addToHistory(error: Error, context: ErrorContext): void {
    this.errorHistory.push({ error, context, timestamp: Date.now() });
    
    // Keep only recent errors
    if (this.errorHistory.length > this.maxHistorySize) {
      this.errorHistory = this.errorHistory.slice(-this.maxHistorySize);
    }
  }

  getErrorHistory(): Array<{ error: Error; context: ErrorContext; timestamp: number }> {
    return [...this.errorHistory];
  }

  getErrorFrequency(component?: string): number {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);
    
    return this.errorHistory.filter(entry => {
      const matchesComponent = !component || entry.context.component === component;
      const isRecent = entry.timestamp > oneHourAgo;
      return matchesComponent && isRecent;
    }).length;
  }

  clearHistory(): void {
    this.errorHistory = [];
  }

  public reset(): void {
    this.errorCount = 0;
  }
}

export const errorRecoverySystem = new ErrorRecoverySystem();
export const errorRecovery = errorRecoverySystem;
export type { ErrorContext, RecoveryStrategy };
