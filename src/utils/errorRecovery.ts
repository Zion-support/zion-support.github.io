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

    // Reload page
    window.location.reload();
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

  public reset(): void {
    this.errorCount = 0;
  }
}

export const errorRecoverySystem = new ErrorRecovery();
export const errorRecovery = errorRecoverySystem;
