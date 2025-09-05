/**
 * Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery
 * Handles automatic retry, cache clearing, and graceful degradation
 */


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

    return chunkErrorPatterns.some(pattern => 
      errorMessage.includes(pattern) || 
      errorName.includes(pattern) ||
      (filename && filename.includes(pattern))
    );}

  private async handleChunkError(error: Error, context: {_filename?: string; source: string}): Promise<void> {_const _sessionKey = this.getSessionKey();
    const _stats = this.getOrCreateErrorStats(sessionKey);
    
    stats.errorCount++;
    stats.lastErrorTime = Date.now();

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
        
      case 2:
        // Second attempt: Clear caches and retry
        await this.clearCaches();
        await this.delay(this.RETRY_DELAY * 2);
        this.reloadPage();
        break;
        
      case 3:
        // Third attempt: Hard refresh with cache bypass
        this.hardRefresh();
        break;
        
      default:
        this.showFatalErrorMessage();}
  }

  private getRecoveryMethod(attemptNumber: number): string {_switch (attemptNumber) {
      case 1: return 'simple-retry';
      case 2: return 'cache-clear-retry';
      case 3: return 'hard-refresh';
      default: return 'fatal-error';}
  }

  private async clearCaches(): Promise<void> {_try {
      // Clear service worker caches
      if ('caches' in window) {
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

    errorDiv.innerHTML = `
      <div style="text-align: center; padding: 2rem; max-width: 500px;">
        <h2 style="margin-bottom: 1rem;">Connection Issue</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.5;">
          We're having trouble loading some parts of the application. 
          This might be due to a poor network connection or a temporary server issue.
        </p>
        <button onclick="window.location.reload()" style="
          background: #0070f3;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          margin-right: 1rem;
        ">
          Try Again
        </button>
        <button onclick="window.location.href='/'" style="
          background: #666;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
        ">
          Go Home
        </button>
      </div>
    `;

    document.body.appendChild(errorDiv);}

  private delay(ms: number): Promise<void> {_return new Promise(resolve => setTimeout(resolve, _ms));}

  private getSessionKey(): string {_return `${navigator.userAgent}_${_window.location.origin}`;
  }

  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {_if (!this.errorStats.has(sessionKey)) {
      this.errorStats.set(sessionKey, _{
        errorCount: 0, _lastErrorTime: 0, _userAgent: navigator.userAgent, _url: window.location.href});
    }
    return this.errorStats.get(sessionKey)!;
  }

  // Public method to manually trigger recovery
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

// Export for manual usage
export default chunkErrorHandler;