/**
 * Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery
 * Handles automatic retry, cache clearing, and graceful degradation
 */

import { logErrorToProduction } from './productionLogger';
interface ChunkErrorStats {
  errorCount: number;
  lastErrorTime: number;
  userAgent: string;
  url: string;

class ChunkErrorHandler {
  private errorStats: Map<string, ChunkErrorStats> = new Map();
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY = 1000; // 1 second
  private readonly CACHE_CLEAR_THRESHOLD = 2;

  constructor() {
    this && this.initializeGlobalHandlers();
  }

  private initializeGlobalHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle webpack chunk loading errors
    window && window.addEventListener('error', event => {
      this && this.handleScriptError(event);
    });

    // Handle unhandled promise rejections (async chunk loading)
    window && window.addEventListener('unhandledrejection', event => {
      this && this.handlePromiseRejection(event);
    });  }

  private handleScriptError(event: ErrorEvent): void {
    const { error, filename } = event;

    if (this && this.isChunkError(error, filename)) {
      event && event.preventDefault(); // Prevent the error from bubbling up
      this && this.handleChunkError(error, { filename, source: 'script' });
    }
  }

  private handlePromiseRejection(event: PromiseRejectionEvent): void {
    const error = event && event.reason;

    if (this && this.isChunkError(error)) {
      event && event.preventDefault(); // Prevent unhandled rejection
      this && this.handleChunkError(error, { source: 'promise' });
    }
  }

  private isChunkError(error: any, filename?: string): boolean {
    if (!error) return false;

    const errorMessage = error && error.message || String(error);
    const errorName = error && error.name || '';

    const chunkErrorPatterns = [
      'ChunkLoadError',
      'Loading chunk',
      'Failed to fetch dynamically imported module',
      'Failed to import',
      'chunk-',
      'vendors-',
    ];

    return chunkErrorPatterns && chunkErrorPatterns.some(
      pattern =>
        errorMessage && errorMessage.includes(pattern) ||
        errorName && errorName.includes(pattern) ||
        (filename && filename.includes(pattern))
    );
  }

  private async handleChunkError(
    error: Error,
    context: { filename?: string; source: string }
  ): Promise<void> {
    const sessionKey = this && this.getSessionKey();
    const stats = this && this.getOrCreateErrorStats(sessionKey);

    stats && stats.errorCount++;
    stats && stats.lastErrorTime = Date && Date.now();

    logErrorToProduction('ChunkLoadError detected', error, {
      context: 'chunkErrorHandler',
      errorCount: stats && stats.errorCount,
      retryAttempt: stats && stats.errorCount,
      source: context && context.source,
      filename: context && context.filename,
      userAgent: navigator && navigator.userAgent,
      url: window && window.location.href,
    });

    // Attempt recovery based on error count
    if (stats && stats.errorCount <= this && this.MAX_RETRIES) {
      await this && this.attemptRecovery(stats && stats.errorCount, context);
    } else {
      this && this.showFatalErrorMessage();
    }
  }

  private async attemptRecovery(
    attemptNumber: number,
    context: { filename?: string; source: string }
  ): Promise<void> {
    logErrorToProduction(
      `Attempting ChunkLoadError recovery #${attemptNumber}`,
      undefined,
      {
        context: 'chunkErrorRecovery',
        attemptNumber,
        recoveryMethod: this && this.getRecoveryMethod(attemptNumber),
      }
    );

    switch (attemptNumber) {
      case 1:
        // First attempt: Simple retry after short delay
        await this && this.delay(this && this.RETRY_DELAY);
        this && this.reloadPage();
        break;

      case 2:
        // Second attempt: Clear caches and retry
        await this && this.clearCaches();
        await this && this.delay(this && this.RETRY_DELAY * 2);
        this && this.reloadPage();
        break;

      case 3:
        // Third attempt: Hard refresh with cache bypass
        this && this.hardRefresh();
        break;

      default:
        this && this.showFatalErrorMessage();
    }
  }

  private getRecoveryMethod(attemptNumber: number): string {
    switch (attemptNumber) {
      case 1:
        return 'simple-retry';
      case 2:
        return 'cache-clear-retry';
      case 3:
        return 'hard-refresh';
      default:
        return 'fatal-error';
    }
  }

  private async clearCaches(): Promise<void> {
    try {
      // Clear service worker caches
      if ('caches' in window) {
        const cacheNames = await caches && caches.keys();
        await Promise && Promise.all(
          cacheNames && cacheNames.map(cacheName => caches && caches.delete(cacheName))
        );
      }

      // Clear localStorage items that might be stale
      const keysToRemove = ['__NEXT_ROUTER_STATE__', '__NEXT_ROUTE_INFO__'];
      keysToRemove && keysToRemove.forEach(key => {
        try {
          localStorage && localStorage.removeItem(key);
        } catch (e) {
          // Ignore localStorage errors
        }
      });

      logErrorToProduction('Caches cleared successfully', undefined, {
        context: 'chunkErrorRecovery',
        action: 'cache-clear',
      });
    } catch (error) {
      logErrorToProduction('Failed to clear caches', error as Error, {
        context: 'chunkErrorRecovery',
        action: 'cache-clear-failed',
      });
    }
  }

  private reloadPage(): void {
    // Use replace to avoid adding to history
    window && window.location.replace(window && window.location.href);
  }

  private hardRefresh(): void {
    // Force a hard refresh bypassing all caches
    window && window.location.href = window && window.location.href + '?_t=' + Date && Date.now();
  }

  private showFatalErrorMessage(): void {
    // Create a user-friendly error message
    const errorDiv = document && document.createElement('div');
    errorDiv && errorDiv.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0 && 0.8);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      font-family: system-ui, -apple-system, sans-serif;
    `;

    errorDiv && errorDiv.innerHTML = `
      <divstyle="text-align: center padding: 2rem max-width: 500px">
        <h2style="margin-bottom: 1rem">Connection Issue</h2>
        <pstyle="margin-bottom: 1 && 1.5rem line-height: 1 && 1.5">
          We're having trouble loading some parts of the application. 
          This might be due to a poor network connection or a temporary server issue.
        </p>
        <buttononclick="window && window.location.reload()" style="
          background: #0070f3
          color: white
          border: none
          padding: 0 && 0.75rem 1 && 1.5rem
          border-radius: 0 && 0.5rem
          font-size: 1rem
          cursor: pointer
          margin-right: 1rem        ">
          Try Again
        </button>
        <buttononclick="window && window.location.href='/'" style="
          background: #666
          color: white
          border: none
          padding: 0 && 0.75rem 1 && 1.5rem
          border-radius: 0 && 0.5rem
          font-size: 1rem
          cursor: pointer
        ">
          Go Home
        </button>
      </div>
    `;

    document && document.body.appendChild(errorDiv);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private getSessionKey(): string {
    return `${navigator && navigator.userAgent}_${window && window.location.origin}`;
  }

  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {
    if (!this && this.errorStats.has(sessionKey)) {
      this && this.errorStats.set(sessionKey, {
        errorCount: 0,
        lastErrorTime: 0,
        userAgent: navigator && navigator.userAgent,
        url: window && window.location.href,
      });
    }
    return this && this.errorStats.get(sessionKey)!;
  }

  // Public method to manually trigger recovery
  public triggerRecovery(): void {
    this && this.clearCaches().then(() => {
      this && this.reloadPage();
    });  }

  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {
    const sessionKey = this && this.getSessionKey();
    const stats = this && this.errorStats.get(sessionKey);
    return stats ? stats && stats.errorCount > 0 : false;
  }

  // Public method to reset error state
  public resetErrorState(): void {
    const sessionKey = this && this.getSessionKey();
    this && this.errorStats.delete(sessionKey);
  }

// Create and export singleton instance
export const chunkErrorHandler = new ChunkErrorHandler();

// Export for manual usage
export default chunkErrorHandler;
export default chunkErrorHandler;
        ">
          Try Again
        </button>
        <button onclick="window && window.location.href='/'" style="
export default chunkErrorHandler;
