<<<<<<< HEAD
/**
 * Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery
 * Handles automatic retry, cache clearing, and graceful degradation
 */

<<<<<<< HEAD
import { logErrorToProduction } from './productionLogger';
=======
import { logErrorToProduction } from './productionLogger'
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a

interface ChunkErrorStats {
  errorCount: number;
  lastErrorTime: number;
  userAgent: string;
<<<<<<< HEAD
  url: string;
}

=======
  url: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
class ChunkErrorHandler {

  private errorStats: Map<string, ChunkErrorStats> = new Map()
  private readonly MAX_RETRIES = 3
  private readonly RETRY_DELAY = 1000; // 1 second
  private readonly CACHE_CLEAR_THRESHOLD = 2
  constructor() {
<<<<<<< HEAD
    this.initializeGlobalHandlers()
=======
    this && this.initializeGlobalHandlers();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  private initializeGlobalHandlers(): void {
    if (typeof window === 'undefined') return
    // Handle webpack chunk loading errors
<<<<<<< HEAD
    window.addEventListener('error', event => {
      this.handleScriptError(event)
    })
    // Handle unhandled promise rejections (async chunk loading)
    window.addEventListener('unhandledrejection', event => {
<<<<<<< HEAD
      this.handlePromiseRejection(event);
    });
  }
=======
    window && window.addEventListener('error', event => {
      this && this.handleScriptError(event);
    });

    // Handle unhandled promise rejections (async chunk loading)
    window && window.addEventListener('unhandledrejection', event => {
      this && this.handlePromiseRejection(event);
    });  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
      this.handlePromiseRejection(event)
    }) }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  private handleScriptError(event: ErrorEvent): void {
<<<<<<< HEAD
    const { error, filename } = event
    if (this.isChunkError(error, filename)) {
      event.preventDefault(); // Prevent the error from bubbling up
      this.handleChunkError(error, { filename, source: 'script' })
=======
    const { error, filename } = event;

    if (this && this.isChunkError(error, filename)) {
      event && event.preventDefault(); // Prevent the error from bubbling up
      this && this.handleChunkError(error, { filename, source: 'script' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  private handlePromiseRejection(event: PromiseRejectionEvent): void {
<<<<<<< HEAD
    const error = event.reason
    if (this.isChunkError(error)) {
      event.preventDefault(); // Prevent unhandled rejection
      this.handleChunkError(error, { source: 'promise' })
=======
    const error = event && event.reason;

    if (this && this.isChunkError(error)) {
      event && event.preventDefault(); // Prevent unhandled rejection
      this && this.handleChunkError(error, { source: 'promise' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  private isChunkError(error: any, filename?: string): boolean {
<<<<<<< HEAD
    if (!error) return false
    const errorMessage = error.message |String(error)
    const errorName = error.name |''
    const chunkErrorPatterns = [
      'ChunkLoadError'
      'Loading chunk'
      'Failed to fetch dynamically imported module'
      'Failed to import'
      'chunk-'
      'vendors-'
    ]
    return chunkErrorPatterns.some(
      pattern =>
        errorMessage.includes(pattern) |
        errorName.includes(pattern) |
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        (filename && filename.includes(pattern))
    )
  }
  private async handleChunkError(
    error: Error
    context: { filename?: string; source: string }
  ): Promise<void> {
<<<<<<< HEAD
    const sessionKey = this.getSessionKey()
    const stats = this.getOrCreateErrorStats(sessionKey)
    stats.errorCount++
    stats.lastErrorTime = Date.now()
    logErrorToProduction('ChunkLoadError detected', error, {
      context: 'chunkErrorHandler'
      errorCount: stats.errorCount
      retryAttempt: stats.errorCount
      source: context.source
      filename: context.filename
      userAgent: navigator.userAgent
      url: window.location.href
    })
    // Attempt recovery based on error count
    if (stats.errorCount <= this.MAX_RETRIES) {
      await this.attemptRecovery(stats.errorCount, context)
    } else {
      this.showFatalErrorMessage()
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  private async attemptRecovery(
    attemptNumber: number
    context: { filename?: string; source: string }
  ): Promise<void> {
    logErrorToProduction(
      `Attempting ChunkLoadError recovery #${attemptNumber}`
      undefined
      {
<<<<<<< HEAD
        context: 'chunkErrorRecovery'
        attemptNumber
        recoveryMethod: this.getRecoveryMethod(attemptNumber)
=======
        context: 'chunkErrorRecovery',
        attemptNumber,
        recoveryMethod: this && this.getRecoveryMethod(attemptNumber),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    )
    switch (attemptNumber) {
      case 1:
        // First attempt: Simple retry after short delay
<<<<<<< HEAD
        await this.delay(this.RETRY_DELAY)
        this.reloadPage()
        break
      case 2:
        // Second attempt: Clear caches and retry
        await this.clearCaches()
        await this.delay(this.RETRY_DELAY * 2)
        this.reloadPage()
        break
      case 3:
        // Third attempt: Hard refresh with cache bypass
        this.hardRefresh()
        break
      default:
        this.showFatalErrorMessage()
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  private getRecoveryMethod(attemptNumber: number): string {
    switch (attemptNumber) {
      case 1:
        return 'simple-retry'
      case 2:
        return 'cache-clear-retry'
      case 3:
        return 'hard-refresh'
      default:
        return 'fatal-error'
    }
  }
  private async clearCaches(): Promise<void> {
    try {
      // Clear service worker caches
      if ('caches' in window) {
<<<<<<< HEAD
        const cacheNames = await caches.keys()
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        )
=======
        const cacheNames = await caches && caches.keys();
        await Promise && Promise.all(
          cacheNames && cacheNames.map(cacheName => caches && caches.delete(cacheName))
        );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      // Clear localStorage items that might be stale
<<<<<<< HEAD
      const keysToRemove = ['__NEXT_ROUTER_STATE__', '__NEXT_ROUTE_INFO__']
      keysToRemove.forEach(key => {
        try {
          localStorage.removeItem(key)
=======
      const keysToRemove = ['__NEXT_ROUTER_STATE__', '__NEXT_ROUTE_INFO__'];
      keysToRemove && keysToRemove.forEach(key => {
        try {
          localStorage && localStorage.removeItem(key);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        } catch (e) {
          // Ignore localStorage errors
        }
      })
      logErrorToProduction('Caches cleared successfully', undefined, {
        context: 'chunkErrorRecovery'
        action: 'cache-clear'
      })
    } catch (error) {
      logErrorToProduction('Failed to clear caches', error as Error, {
        context: 'chunkErrorRecovery'
        action: 'cache-clear-failed'
      })
    }
  }
  private reloadPage(): void {
    // Use replace to avoid adding to history
<<<<<<< HEAD
    window.location.replace(window.location.href)
=======
    window && window.location.replace(window && window.location.href);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  private hardRefresh(): void {
    // Force a hard refresh bypassing all caches
<<<<<<< HEAD
    window.location.href = window.location.href + '?_t=' + Date.now()
=======
    window && window.location.href = window && window.location.href + '?_t=' + Date && Date.now();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  private showFatalErrorMessage(): void {
    // Create a user-friendly error message
<<<<<<< HEAD
    const errorDiv = document.createElement('div')
    errorDiv.style.cssText = `
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(0, 0, 0, 0.8)
      color: white
      display: flex
      align-items: center
      justify-content: center
      z-index: 999999
      font-family: system-ui, -apple-system, sans-serif
    `
    errorDiv.innerHTML = `
      <div style="text-align: center; padding: 2rem; max-width: 500px;">
        <h2 style="margin-bottom: 1rem;">Connection Issue</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.5;">
          We're having trouble loading some parts of the application.
          This might be due to a poor network connection or a temporary server issue.
        </p>
        <button onclick="window.location.reload()" style="
<<<<<<< HEAD
          background: #0070f3;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          margin-right: 1rem;
        ">
=======
          background: #0070f3
          color: white
          border: none
          padding: 0.75rem 1.5rem
          border-radius: 0.5rem
          font-size: 1rem
          cursor: pointer
          margin-right: 1rem;        ">
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
          Try Again
        </button>
        <button onclick="window.location.href='/'" style="
          background: #666
          color: white
          border: none
          padding: 0.75rem 1.5rem
          border-radius: 0.5rem
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          font-size: 1rem
          cursor: pointer
        ">
          Go Home
        </button>
      </div>
<<<<<<< HEAD
    `
    document.body.appendChild(errorDiv)
=======
    `;

    document && document.body.appendChild(errorDiv);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  private getSessionKey(): string {
<<<<<<< HEAD
    return `${navigator.userAgent}_${window.location.origin}`
=======
    return `${navigator && navigator.userAgent}_${window && window.location.origin}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {
<<<<<<< HEAD
    if (!this.errorStats.has(sessionKey)) {
      this.errorStats.set(sessionKey, {
        errorCount: 0
        lastErrorTime: 0
        userAgent: navigator.userAgent
        url: window.location.href
      })
    }
    return this.errorStats.get(sessionKey)!
=======
    if (!this && this.errorStats.has(sessionKey)) {
      this && this.errorStats.set(sessionKey, {
        errorCount: 0,
        lastErrorTime: 0,
        userAgent: navigator && navigator.userAgent,
        url: window && window.location.href,
      });
    }
    return this && this.errorStats.get(sessionKey)!;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  // Public method to manually trigger recovery
  public triggerRecovery(): void {
<<<<<<< HEAD
    this.clearCaches().then(() => {
<<<<<<< HEAD
      this.reloadPage();
    });
  }
=======
    this && this.clearCaches().then(() => {
      this && this.reloadPage();
    });  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
      this.reloadPage()
    }) }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {
<<<<<<< HEAD
    const sessionKey = this.getSessionKey()
    const stats = this.errorStats.get(sessionKey)
    return stats ? stats.errorCount > 0 : false
=======
    const sessionKey = this && this.getSessionKey();
    const stats = this && this.errorStats.get(sessionKey);
    return stats ? stats && stats.errorCount > 0 : false;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  // Public method to reset error state
  public resetErrorState(): void {
<<<<<<< HEAD
    const sessionKey = this.getSessionKey()
    this.errorStats.delete(sessionKey)
=======
    const sessionKey = this && this.getSessionKey();
    this && this.errorStats.delete(sessionKey);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
<<<<<<< HEAD
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
// Create and export singleton instance
export const chunkErrorHandler = new ChunkErrorHandler()
// Export for manual usage
<<<<<<< HEAD
export default chunkErrorHandler;
=======
export default chunkErrorHandler
export default chunkErrorHandler
        ">
          Try Again
        </button>
<<<<<<< HEAD
        <button onclick="window.location.href='/'" style="
export default chunkErrorHandler

>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
        <button onclick="window && window.location.href='/'" style="
export default chunkErrorHandler;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

          background: #666, color: white,
          border: none, padding: 0.75rem 1.5rem,
          border-radius: 0.5rem, font-size: 1rem,
          cursor: pointer,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
