/**
 * Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery
 * Handles automatic retry, cache clearing, and graceful degradation
 */

<<<<<<< HEAD
import { logErrorToProduction } from './productionLogger',
interface ChunkErrorStats {
  errorCount: number,
  lastErrorTime: number,
  userAgent: string,
  url: string
}

class ChunkErrorHandler {
  private errorStats: Map<string ChunkErrorStats> = new Map(),
  private readonly MAX_RETRIES = 3,
  private readonly RETRY_DELAY = 1000, // 1 second
  private readonly CACHE_CLEAR_THRESHOLD = 2,

  constructor() {
    this.initializeGlobalHandlers()
  }

  private initializeGlobalHandlers(): void {
    if (typeof window === 'undefined') return,

    // Handle webpack chunk loading errors
    window.addEventListener('error', (event) => {
      this.handleScriptError(event)
    }),

    // Handle unhandled promise rejections (async chunk loading)
    window.addEventListener('unhandledrejection', (event) => {
      this.handlePromiseRejection(event)
    })
  }

  private handleScriptError(event: ErrorEvent): void {
    const { error, filename } = event,
    
    if (this.isChunkError(error, filename)) {
      event.preventDefault(), // Prevent the error from bubbling up
      this.handleChunkError(error, { filename, source: 'script' })
    }
  }

  private handlePromiseRejection(event: PromiseRejectionEvent): void {
    const error = event.reason,
    
    if (this.isChunkError(error)) {
      event.preventDefault(), // Prevent unhandled rejection
      this.handleChunkError(error, { source: 'promise' })
    }
  }

  private isChunkError(error: any, filename?: string): boolean {
    if (!error) return false,

    const errorMessage = error.message || String(error),
    const errorName = error.name || '',
    
    const chunkErrorPatterns = [
      'ChunkLoadErrorLoading chunkFailed to fetch dynamically imported moduleFailed to importchunk-vendors-'
    ],
=======

interface ChunkErrorStats {_errorCount: number;
  lastErrorTime: number;
  userAgent: string;
  url: string;}

class ChunkErrorHandler {_private errorStats: Map<string, _ChunkErrorStats> = new Map();
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY = 1000; // 1 second
  private readonly CACHE_CLEAR_THRESHOLD = 2;

  constructor() {
    this.initializeGlobalHandlers();}

  private initializeGlobalHandlers(): void {_if (typeof window === 'undefined') return;

    // Handle webpack chunk loading errors
    window.addEventListener(_'error', _(event) => {
      this.handleScriptError(event);});

    // Handle unhandled promise rejections (async chunk loading)
    window.addEventListener(_'unhandledrejection', _(event) => {_this.handlePromiseRejection(event);});
  }

  private handleScriptError(event: ErrorEvent): void {_const { error, _filename} = event;
    
    if (this.isChunkError(error, filename)) {_event.preventDefault(); // Prevent the error from bubbling up
      this.handleChunkError(error, _{ filename, _source: 'script'});
    }
  }

  private handlePromiseRejection(event: PromiseRejectionEvent): void {_const _error = event.reason;
    
    if (this.isChunkError(error)) {
      event.preventDefault(); // Prevent unhandled rejection
      this.handleChunkError(error, _{ source: 'promise'});
    }
  }

  private isChunkError(error: unknown, filename?: string): boolean {_if (!error) return false;

    const _errorMessage = error.message || String(error);
    const _errorName = error.name || '';
    
    const _chunkErrorPatterns = [
      'ChunkLoadError', _'Loading chunk', _'Failed to fetch dynamically imported module', _'Failed to import', _'chunk-', _'vendors-'
    ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return chunkErrorPatterns.some(pattern => 
      errorMessage.includes(pattern) || 
      errorName.includes(pattern) ||
      (filename && filename.includes(pattern))
<<<<<<< HEAD
    )
  }

  private async handleChunkError(error: Error, context: { filename?: string, source: string }): Promise<void> {
    const sessionKey = this.getSessionKey(),
    const stats = this.getOrCreateErrorStats(sessionKey),
=======
    );}

  private async handleChunkError(error: Error, context: {_filename?: string; source: string}): Promise<void> {_const _sessionKey = this.getSessionKey();
    const _stats = this.getOrCreateErrorStats(sessionKey);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    stats.errorCount++,
    stats.lastErrorTime = Date.now(),

<<<<<<< HEAD
    logErrorToProduction('ChunkLoadError detected', error, {
      context: 'chunkErrorHandler',
      errorCount: stats.errorCount,
      retryAttempt: stats.errorCount,
      source: context.source,
      filename: context.filename,
      userAgent: navigator.userAgent,
      url: window.location.href
    }),

    // Attempt recovery based on error count
    if (stats.errorCount <= this.MAX_RETRIES) {
      await this.attemptRecovery(stats.errorCount, context)
    } else {
      this.showFatalErrorMessage()
    }
  }

  private async attemptRecovery(attemptNumber: number, context: { filename?: string, source: string }): Promise<void> {
    logErrorToProduction(`Attempting ChunkLoadError recovery #${attemptNumber}`, undefined, {
      context: 'chunkErrorRecovery',
      attemptNumber,
      recoveryMethod: this.getRecoveryMethod(attemptNumber)
    }),

    switch (attemptNumber) {
      case 1: // First attempt: Simple retry after short delay
        await this.delay(this.RETRY_DELAY),
        this.reloadPage(),
        break,
=======
    logErrorToProduction('ChunkLoadError detected', _error, _{
      context: 'chunkErrorHandler', _errorCount: stats.errorCount, _retryAttempt: stats.errorCount, _source: context.source, _filename: context.filename, _userAgent: navigator.userAgent, _url: window.location.href});

    // Attempt recovery based on error count
    if (stats.errorCount <= this.MAX_RETRIES) {_await this.attemptRecovery(stats.errorCount, _context);} else {_this.showFatalErrorMessage();}
  }

  private async attemptRecovery(attemptNumber: number, context: {_filename?: string; source: string}): Promise<void> {_logErrorToProduction(`Attempting ChunkLoadError recovery #${attemptNumber}`, undefined, {_context: 'chunkErrorRecovery', _attemptNumber, _recoveryMethod: this.getRecoveryMethod(attemptNumber)});

    switch (attemptNumber) {_case 1:
        // First attempt: Simple retry after short delay
        await this.delay(this.RETRY_DELAY);
        this.reloadPage();
        break;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      case 2:
        // Second attempt: Clear caches and retry
        await this.clearCaches(),
        await this.delay(this.RETRY_DELAY * 2),
        this.reloadPage(),
        break,
        
      case 3:
        // Third attempt: Hard refresh with cache bypass
        this.hardRefresh(),
        break,
        
      default:
<<<<<<< HEAD
        this.showFatalErrorMessage()
    }
  }

  private getRecoveryMethod(attemptNumber: number): string {
    switch (attemptNumber) {
      case 1: return 'simple-retry',
      case 2: return 'cache-clear-retry',
      case 3: return 'hard-refresh',
      default: return 'fatal-error'
    }
=======
        this.showFatalErrorMessage();}
  }

  private getRecoveryMethod(attemptNumber: number): string {_switch (attemptNumber) {
      case 1: return 'simple-retry';
      case 2: return 'cache-clear-retry';
      case 3: return 'hard-refresh';
      default: return 'fatal-error';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  private async clearCaches(): Promise<void> {_try {
      // Clear service worker caches
      if ('caches' in window) {
<<<<<<< HEAD
        const cacheNames = await caches.keys(),
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        )
      }

      // Clear localStorage items that might be stale
      const keysToRemove = ['__NEXT_ROUTER_STATE____NEXT_ROUTE_INFO__'],
      keysToRemove.forEach(key => {
        try {
          localStorage.removeItem(key)
        } catch (e) {
          // Ignore localStorage errors
        }
      }),

      logErrorToProduction('Caches cleared successfully', undefined, {
        context: 'chunkErrorRecovery',
        action: 'cache-clear'
      })
    } catch (error) {
      logErrorToProduction('Failed to clear caches', error as Error, {
        context: 'chunkErrorRecovery',
        action: 'cache-clear-failed'
      })
    }
  }

  private reloadPage(): void {
    // Use replace to avoid adding to history
    window.location.replace(window.location.href)
  }

  private hardRefresh(): void {
    // Force a hard refresh bypassing all caches
    window.location.href = window.location.href + '?_t=' + Date.now()
  }

  private showFatalErrorMessage(): void {
    // Create a user-friendly error message
    const errorDiv = document.createElement('div'),
    errorDiv.style.cssText = `
      position: fixed,
      top: 0,
      left: 0,
      width: 100%,
      height: 100%,
      background: rgba(0, 0, 0, 0.8),
      color: white,
      display: flex,
      align-items: center,
      justify-content: center,
      z-index: 999999,
      font-family: system-ui, -apple-system, sans-serif,
    `,
=======
        const _cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );}

      // Clear localStorage items that might be stale
      const _keysToRemove = ['__NEXT_ROUTER_STATE__', '__NEXT_ROUTE_INFO__'];
      keysToRemove.forEach(key => {_try {
          localStorage.removeItem(key);} catch (e) {_// Ignore localStorage errors}
      });

      logErrorToProduction('Caches cleared successfully', undefined, {_context: 'chunkErrorRecovery', _action: 'cache-clear'});
    } catch (error) {_logErrorToProduction('Failed to clear caches', _error as Error, _{
        context: 'chunkErrorRecovery', _action: 'cache-clear-failed'});
    }
  }

  private reloadPage(): void {_// Use replace to avoid adding to history
    window.location.replace(window.location.href);}

  private hardRefresh(): void {_// Force a hard refresh bypassing all caches
    window.location.href = window.location.href + '?_t=' + Date.now();}

  private showFatalErrorMessage(): void {_// Create a user-friendly error message
    const _errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, _0, _0, _0.8);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      font-family: system-ui, _-apple-system, _sans-serif;
    `;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    errorDiv.innerHTML = `
<<<<<<< HEAD
      <div style="text-align: center, padding: 2rem, max-width: 500px,">
        <h2 style="margin-bottom: 1rem,">Connection Issue</h2>
        <p style="margin-bottom: 1.5rem, line-height: 1.5,">
          We're having trouble loading some parts of the application. 
          This might be due to a poor network connection or a temporary server issue.
        </p>
        <button onclick="window.location.reload()" style="
          background: #0070f3,
          color: white,
          border: none,
          padding: 0.75rem 1.5rem,
          border-radius: 0.5rem,
          font-size: 1rem,
          cursor: pointer,
          margin-right: 1rem,
        ">
          Try Again
        </button>
        <button onclick="window.location.href='/'" style="
          background: #666,
          color: white,
          border: none,
          padding: 0.75rem 1.5rem,
          border-radius: 0.5rem,
          font-size: 1rem,
          cursor: pointer,
        ">
=======
      <div style=&quot;text-align: center; padding: 2rem; max-width: 500px;&quot;>
        <h2 style=&quot;margin-bottom: 1rem;&quot;>Connection Issue</h2>
        <p style=&quot;margin-bottom: 1.5rem; line-height: 1.5;&quot;>
          We're having trouble loading some parts of the application. 
          This might be due to a poor network connection or a temporary server issue.
        </p>
        <button onclick=&quot;window.location.reload()&quot; style=&quot;
          background: #0070f3;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          margin-right: 1rem;
        &quot;>
          Try Again
        </button>
        <button onclick="window.location.href='/'" style=&quot;
          background: #666;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
        &quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          Go Home
        </button>
      </div>
    `,

<<<<<<< HEAD
    document.body.appendChild(errorDiv)
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  private getSessionKey(): string {
    return `${navigator.userAgent}_${window.location.origin}`
  }

  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {
    if (!this.errorStats.has(sessionKey)) {
      this.errorStats.set(sessionKey, {
        errorCount: 0,
        lastErrorTime: 0,
        userAgent: navigator.userAgent,
        url: window.location.href
      })
=======
    document.body.appendChild(errorDiv);}

  private delay(ms: number): Promise<void> {_return new Promise(resolve => setTimeout(resolve, _ms));}

  private getSessionKey(): string {_return `${navigator.userAgent}_${_window.location.origin}`;
  }

  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {_if (!this.errorStats.has(sessionKey)) {
      this.errorStats.set(sessionKey, _{
        errorCount: 0, _lastErrorTime: 0, _userAgent: navigator.userAgent, _url: window.location.href});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return this.errorStats.get(sessionKey)!
  }

  // Public method to manually trigger recovery
<<<<<<< HEAD
  public triggerRecovery(): void {
    this.clearCaches().then(() => {
      this.reloadPage()
    })
  }

  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {
    const sessionKey = this.getSessionKey(),
    const stats = this.errorStats.get(sessionKey),
    return stats ? stats.errorCount > 0 : false
  }

  // Public method to reset error state
  public resetErrorState(): void {
    const sessionKey = this.getSessionKey(),
    this.errorStats.delete(sessionKey)
  }
}

// Create and export singleton instance
export const chunkErrorHandler = new ChunkErrorHandler(),
=======
  public triggerRecovery(): void {_this.clearCaches().then__(() => {
      this.reloadPage();});
  }

  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {_const _sessionKey = this.getSessionKey();
    const _stats = this.errorStats.get(sessionKey);
    return stats ? stats.errorCount > 0 : false;}

  // Public method to reset error state
  public resetErrorState(): void {_const _sessionKey = this.getSessionKey();
    this.errorStats.delete(sessionKey);}
}

// Create and export singleton instance
export const _chunkErrorHandler = new ChunkErrorHandler();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Export for manual usage
export default chunkErrorHandler,