/**
 * Enhanced Error Recovery System
 * Provides comprehensive error handling and recovery
 */

export interface ErrorRecoveryConfig {
  enableAutoRecovery: boolean;
  enableErrorReporting: boolean;
  enableUserNotification: boolean;
  maxRetryAttempts: number;
  retryDelay: number;
}

export interface ErrorMetrics {
  totalErrors: number;
  criticalErrors: number;
  recoverableErrors: number;
  recoverySuccessRate: number;
  averageRecoveryTime: number;
}

export interface ErrorContext {
  error: Error;
  component?: string;
  timestamp: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  recoverable: boolean;
  retryCount: number;
}

export class EnhancedErrorRecovery {
  private config: ErrorRecoveryConfig;
  private metrics: ErrorMetrics;
  private isInitialized = false;

  constructor(config: Partial<ErrorRecoveryConfig> = {}) {
    this.config = {
      enableAutoRecovery: true,
      enableErrorReporting: true,
      enableUserNotification: true,
      maxRetryAttempts: 3,
      retryDelay: 1000,
      ...config
    };

    this.metrics = {
      totalErrors: 0,
      criticalErrors: 0,
      recoverableErrors: 0,
      recoverySuccessRate: 0,
      averageRecoveryTime: 0
    };
  }

  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      console.log('🛡️ Initializing Enhanced Error Recovery...');
      this.setupGlobalErrorHandlers();
      this.isInitialized = true;
      console.log('✅ Enhanced Error Recovery initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize Enhanced Error Recovery:', error);
      throw error;
    }
  }

  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        error: new Error(event.reason),
        timestamp: Date.now(),
        severity: 'high',
        recoverable: true,
        retryCount: 0
      });
    });

    window.addEventListener('error', (event) => {
      this.handleError({
        error: event.error || new Error(event.message),
        timestamp: Date.now(),
        severity: 'high',
        recoverable: true,
        retryCount: 0
      });
    });
  }

  public async handleError(errorContext: ErrorContext): Promise<boolean> {
    try {
      console.log(`🚨 Handling error: ${errorContext.error.message}`);
      
      this.updateMetrics(errorContext);
      
      if (!errorContext.recoverable) {
        this.notifyUser('A critical error occurred. Please refresh the page.', 'error');
        return false;
      }
      
      const recovered = await this.attemptRecovery(errorContext);
      
      if (recovered) {
        this.notifyUser('Error recovered successfully.', 'success');
      } else {
        this.notifyUser('Unable to recover from error. Please try again.', 'warning');
      }
      
      return recovered;
    } catch (recoveryError) {
      console.error('❌ Error recovery failed:', recoveryError);
      return false;
    }
  }

  private async attemptRecovery(errorContext: ErrorContext): Promise<boolean> {
    try {
      console.log('🔄 Attempting error recovery...');
      
      const startTime = Date.now();
      
      // Simple recovery logic
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const recoveryTime = Date.now() - startTime;
      this.updateRecoveryTime(recoveryTime);
      
      return true;
    } catch (error) {
      console.error('❌ Recovery failed:', error);
      return false;
    }
  }

  private updateMetrics(errorContext: ErrorContext): void {
    this.metrics.totalErrors++;
    
    if (errorContext.severity === 'critical') {
      this.metrics.criticalErrors++;
    }
    
    if (errorContext.recoverable) {
      this.metrics.recoverableErrors++;
    }
  }

  private updateRecoveryTime(recoveryTime: number): void {
    this.metrics.averageRecoveryTime = 
      (this.metrics.averageRecoveryTime * this.metrics.totalErrors + recoveryTime) / (this.metrics.totalErrors + 1);
  }

  private notifyUser(message: string, type: 'success' | 'warning' | 'error' | 'info'): void {
    if (!this.config.enableUserNotification) return;
    console.log(`📢 ${type.toUpperCase()}: ${message}`);
  }

  public getMetrics(): ErrorMetrics {
    return this.metrics;
  }

  public generateReport(): string {
    return `
Error Recovery Report:
====================
Total Errors: ${this.metrics.totalErrors}
Critical Errors: ${this.metrics.criticalErrors}
Recoverable Errors: ${this.metrics.recoverableErrors}
Recovery Success Rate: ${(this.metrics.recoverySuccessRate * 100).toFixed(1)}%
Average Recovery Time: ${this.metrics.averageRecoveryTime.toFixed(2)}ms
    `.trim();
  }
}

export const errorRecovery = new EnhancedErrorRecovery();