/**
 * Error Recovery System
 */

export class ErrorRecovery {
  private errorCount = 0;
  private maxRetries = 3;

  constructor() {
    this.setupErrorHandling();
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

  private handleError(error: Error): void {
    console.error('Error Recovery - Error caught:', error);
    this.errorCount++;

    if (this.errorCount <= this.maxRetries) {
      this.attemptRecovery();
    } else {
      this.showFallbackUI();
    }
  }

  private async attemptRecovery(): Promise<void> {
    console.log(`Attempting recovery (${this.errorCount}/${this.maxRetries})`);
    
    // Clear caches
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
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

  public reset(): void {
    this.errorCount = 0;
  }
}

export const errorRecoverySystem = new ErrorRecovery();
export const errorRecovery = errorRecoverySystem;