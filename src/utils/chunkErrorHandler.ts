<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  private errorStats: Map<string, ChunkErrorStats> = new Map()
  private readonly MAX_RETRIES = 3
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  private readonly RETRY_DELAY = 1000; // 1 second
=======
private readonly RETRY_DELAY = 1000; // 1 second
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  private readonly CACHE_CLEAR_THRESHOLD = 2
  constructor() {

    this && this.initializeGlobalHandlers();

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
/**
 * Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery
 * Handles automatic retry, cache clearing, and graceful degradation
 */

import { logErrorToProduction } from './productionLogger'

interface ChunkErrorStats {
  errorCount: number;
  lastErrorTime: number;
  userAgent: string;
  url: string
class ChunkErrorHandler {

  private errorStats: Map<string, ChunkErrorStats> = new Map()
  private readonly MAX_RETRIES = 3
  private errorStats: Map<string, ChunkErrorStats> = new Map();
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY = 1000; // 1 second
  private readonly CACHE_CLEAR_THRESHOLD = 2
  constructor() {
    this.initializeGlobalHandlers()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  private initializeGlobalHandlers(): void {
    if (typeof window === 'undefined') return;
    // Handle webpack chunk loading errors
<<<<<<< HEAD

    window && window.addEventListener('error', event => {
      this && this.handleScriptError(event);
    });

    // Handle unhandled promise rejections (async chunk loading)
    window && window.addEventListener('unhandledrejection', event => {
      this && this.handlePromiseRejection(event);
    });  }


      this.handlePromiseRejection(event)
    }) }
<<<<<<< HEAD
>>>>>>>   private handleScriptError(event: ErrorEvent): void {
=======
  private handleScriptError(event: ErrorEvent): void {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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
/**;
* Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery;
* Handles automatic retry, cache clearing, and graceful degradation;
*/;
import { logErrorToProduction } from './production_logger';
interface ChunkErrorStats {
  error_count: number;
  lastErrorTime: number;
  user_agent: string;
  url: string;
class ChunkErrorHandler {
  private error_stats: Map < string, ChunkErrorStats> = new Map ();
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY = 1000; // 1 second;
  private readonly CACHE_CLEAR_THRESHOLD = 2;
  constructor () {
    this.initializeGlobalHandlers ();
  }
  private initializeGlobalHandlers (): void {
    // Check condition
if (return) {
  $2
}
    // Handle webpack chunk loading errors;
    window.addEventListener ('error', event => {
      this.handleScriptError (event);
    });
    // Handle unhandled promise rejections (async chunk loading);
    window.addEventListener ('unhandledrejection', event => {
      this.handlePromiseRejection (event);
    }) }
  private handleScriptError (event: ErrorEvent): void {
    const { error, filename } = event;
    if () {) {
  $2
}
      event.prevent_default (); // Prevent the error from bubbling up;
      this.handleChunkError (error, { filename, source: 'script' });
    }
  }
  private handlePromiseRejection (event: PromiseRejectionEvent): void {
    const error = event.reason;
    if () {) {
  $2
}
      event.prevent_default (); // Prevent unhandled rejection;
      this.handleChunkError (error, { source: 'promise' });
    }
  }
  private isChunkError (error: any, filename?: string): boolean {
    // Check condition
if (return false) {
  $2
}
    const error_message = error.message || String (error);
    const error_name = error.name || '';
    const chunkErrorPatterns = [;

      'ChunkLoadError',
      'Loading chunk',
      'Failed to fetch dynamically imported module',
      'Failed to import',
      'chunk-',
      'vendors-',
    ];

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

=======
    window.addEventListener('error', event => {
      this.handleScriptError(event)
    })
    // Handle unhandled promise rejections (async chunk loading)
    window.addEventListener('unhandledrejection', event => {
      this.handlePromiseRejection(event)
    }) }
  private handleScriptError(event: ErrorEvent): void {
    const { error, filename } = event
    if (this.isChunkError(error, filename)) {
      event.preventDefault(); // Prevent the error from bubbling up
      this.handleChunkError(error, { filename, source: 'script' })
    }
  }
  private handlePromiseRejection(event: PromiseRejectionEvent): void {
    const error = event.reason
    if (this.isChunkError(error)) {
      event.preventDefault(); // Prevent unhandled rejection
      this.handleChunkError(error, { source: 'promise' })
    }
  }
  private isChunkError(error: any, filename?: string): boolean {
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
        (filename && filename.includes(pattern))
    )
  }
  private async handleChunkError(
    error: Error
    context: { filename?: string; source: string }
  ): Promise<void> {
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  private async attemptRecovery(
    attemptNumber: number
    context: { filename?: string; source: string }
  ): Promise<void> {
    logErrorToProduction(
      `Attempting ChunkLoadError recovery #${attemptNumber}`
      undefined
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    return chunkErrorPatterns.some (
      pattern =>;
        error_message.includes (pattern) ||;
        error_name.includes (pattern) ||;
        (filename && filename.includes (pattern)));
  }
  private async handleChunkError (
    error: Error,
    context: { filename?: string; source: string }
  ): Promise < void> {
    const session_key = this.getSessionKey ();
    const stats = this.getOrCreateErrorStats (session_key);
    stats.error_count++;
    stats.lastErrorTime = Date.now ();
    logErrorToProduction ('ChunkLoadError detected', error, {
      context: 'chunkErrorHandler',
      error_count: stats.error_count,
      retry_attempt: stats.error_count,
      source: context.source,
      filename: context.filename,
      user_agent: navigator.user_agent,
      url: window.location.href,
    });
    // Attempt recovery based on error count;
    // Check condition
if ( {) {
  $2
}
      await this.attempt_recovery (stats.error_count, context);
    } else {
      this.showFatalErrorMessage ();
    }
  }
  private async attempt_recovery (
    attempt_number: number,
    context: { filename?: string; source: string }
  ): Promise < void> {
    logErrorToProduction (
      `Attempting ChunkLoadError recovery #${attempt_number}`,
      undefined,
      {

        context: 'chunkErrorRecovery',

=======
      {
        context: 'chunkErrorRecovery'
        attemptNumber
        recoveryMethod: this.getRecoveryMethod(attemptNumber)
      }
    )
    switch (attemptNumber) {
      case 1:
        // First attempt: Simple retry after short delay
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
        const cacheNames = await caches.keys()
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        )
      }
      // Clear localStorage items that might be stale
      const keysToRemove = ['__NEXT_ROUTER_STATE__', '__NEXT_ROUTE_INFO__']
      keysToRemove.forEach(key => {
        try {
          localStorage.removeItem(key)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        } catch (e) {
          // Ignore localStorage errors
        }
<<<<<<< HEAD

    window && window.location.replace(window && window.location.href);

=======
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
    window.location.replace(window.location.href)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  private hardRefresh(): void {
    // Force a hard refresh bypassing all caches
    window.location.href = window.location.href + '?_t=' + Date.now()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
  private showFatalErrorMessage(): void {
    // Create a user-friendly error message

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  private showFatalErrorMessage(): void {
    // Create a user-friendly error message
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          background: #0070f3
          color: white
          border: none
          padding: 0.75rem 1.5rem
          border-radius: 0.5rem
          font-size: 1rem
          cursor: pointer
          margin-right: 1rem;        ">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Try Again
        </button>
        <button onclick="window.location.href='/'" style="
          background: #666
          color: white
          border: none
          padding: 0.75rem 1.5rem
          border-radius: 0.5rem
<<<<<<< HEAD
          font-size: 1rem
          cursor: pointer
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
/**;
 * Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery;
 * Handles automatic retry, cache clearing, and graceful degradation;
 */;
import { logErrorToProduction } from './productionLogger',;
interface ChunkErrorStats {;
  errorCount: number,;
  lastErrorTime: number,;
  userAgent: string,;
  url: string;
}
;
class ChunkErrorHandler {;
  private errorStats: Map<string ChunkErrorStats> = new Map(),;
  private readonly MAX_RETRIES = 3,;
  private readonly RETRY_DELAY = 1000, // 1 second;
  private readonly CACHE_CLEAR_THRESHOLD = 2,;
  constructor() {;
    this.initializeGlobalHandlers();
  }
;
  private initializeGlobalHandlers(): void {;
    if (typeof window === 'undefined') return,;
    // Handle webpack chunk loading errors;
    window.addEventListener('error', (event) => {;
      this.handleScriptError(event);
    }),;
    // Handle unhandled promise rejections (async chunk loading);
    window.addEventListener('unhandledrejection', (event) => {;
      this.handlePromiseRejection(event);
    });
  }
;
  private handleScriptError(event: ErrorEvent): void {;
    const { error, filename } = event,;
    if (this.isChunkError(error, filename)) {;
      event.preventDefault(), // Prevent the error from bubbling up;
      this.handleChunkError(error, { filename, source: 'script' });
    }
  }
;
  private handlePromiseRejection(event: PromiseRejectionEvent): void {;
    const error = event.reason,;
    if (this.isChunkError(error)) {;
      event.preventDefault(), // Prevent unhandled rejection;
      this.handleChunkError(error, { source: 'promise' });
    }
  }
;
  private isChunkError(error: any, filename?: string): boolean {;
    if (!error) return false,;
    const errorMessage = error.message || String(error),;
    const errorName = error.name || '',;
    const chunkErrorPatterns = [;
      'ChunkLoadErrorLoading chunkFailed to fetch dynamically imported moduleFailed to importchunk-vendors-';
    ],;
    return chunkErrorPatterns.some(pattern =>;
      errorMessage.includes(pattern) ||;
      errorName.includes(pattern) ||;
      (filename && filename.includes(pattern));
    );
  }
;
  private async handleChunkError(error: Error, context: { filename?: string, source: string }): Promise<void> {;
    const sessionKey = this.getSessionKey(),;
    const stats = this.getOrCreateErrorStats(sessionKey),;
    stats.errorCount++,;
    stats.lastErrorTime = Date.now(),;
    logErrorToProduction('ChunkLoadError detected', error, {;
      context: 'chunkErrorHandler',;
      errorCount: stats.errorCount,;
      retryAttempt: stats.errorCount,;
      source: context.source,;
      filename: context.filename,;
      userAgent: navigator.userAgent,;
      url: window.location.href;
    }),;
    // Attempt recovery based on error count;
    if (stats.errorCount <= this.MAX_RETRIES) {;
      await this.attemptRecovery(stats.errorCount, context);
    } else {;
      this.showFatalErrorMessage();
    }
  }
;
  private async attemptRecovery(attemptNumber: number, context: { filename?: string, source: string }): Promise<void> {;
    logErrorToProduction(`Attempting ChunkLoadError recovery #${attemptNumber}`, undefined, {;
      context: 'chunkErrorRecovery',;
      attemptNumber,;
      recoveryMethod: this.getRecoveryMethod(attemptNumber);
    }),;
    switch (attemptNumber) {;
      case 1: // First attempt: Simple retry after short delay;
        await this.delay(this.RETRY_DELAY),;
        this.reloadPage(),;
        break,;
      case 2:;
        // Second attempt: Clear caches and retry;
        await this.clearCaches(),;
        await this.delay(this.RETRY_DELAY * 2),;
        this.reloadPage(),;
        break,;
      case 3:;
        // Third attempt: Hard refresh with cache bypass;
        this.hardRefresh(),;
        break,;
      default:;
        this.showFatalErrorMessage();
    }
  }
;
  private getRecoveryMethod(attemptNumber: number): string {;
    switch (attemptNumber) {;
      case 1: return 'simple-retry',;
      case 2: return 'cache-clear-retry',;
      case 3: return 'hard-refresh',;
      default: return 'fatal-error';
    }
  }
;
  private async clearCaches(): Promise<void> {;
    try {;
      // Clear service worker caches;
      if ('caches' in window) {;
        const cacheNames = await caches.keys(),;
        await Promise.all(;
          cacheNames.map(cacheName => caches.delete(cacheName));
        );
      }
;
      // Clear localStorage items that might be stale;
      const keysToRemove = ['__NEXT_ROUTER_STATE____NEXT_ROUTE_INFO__'],;
      keysToRemove.forEach(key => {;
        try {;
          localStorage.removeItem(key);
        } catch (e) {;
          // Ignore localStorage errors;
        }
      }),;
      logErrorToProduction('Caches cleared successfully', undefined, {;
        context: 'chunkErrorRecovery',;
        action: 'cache-clear';
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>       });
=======
    const errorDiv = document && document.createElement('div');
    errorDiv && errorDiv.style.cssText = `
    window.location.href = window.location.href + '?_t=' + Date.now()


      });
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      logErrorToProduction ('Caches cleared successfully', undefined, {
        context: 'chunkErrorRecovery',
        action: 'cache - clear',
      });
    } catch (error) {
      logErrorToProduction ('Failed to clear caches', error as Error, {
        context: 'chunkErrorRecovery',
        action: 'cache - clear - failed',
=======
      });
    } catch (error) {;
      logErrorToProduction('Failed to clear caches', error as Error, {;
        context: 'chunkErrorRecovery',;
        action: 'cache-clear-failed';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      });
    }
  }
;
  private reloadPage(): void {;
    // Use replace to avoid adding to history;
    window.location.replace(window.location.href);
  }
;
  private hardRefresh(): void {;
    // Force a hard refresh bypassing all caches;
<<<<<<< HEAD

    window.location.href = window.location.href + '?_t=' + Date.now();
<<<<<<< HEAD

  }

  private showFatalErrorMessage(): void {
    // Create a user-friendly error message

<<<<<<< HEAD
=======
>>>>>>>   }

  private showFatalErrorMessage(): void {
    // Create a user-friendly error message
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======
>>>>>>>     errorDiv.innerHTML = `
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  }
  private showFatalErrorMessage (): void {
    // Create a user - friendly error message;
    const error_div = document.create_element ('div');
    error_div.style.css_text = `;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

  private showFatalErrorMessage(): void {
    // Create a user-friendly error message


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    errorDiv.innerHTML = `
>>>>>>>       <div style="text-align: center, padding: 2rem, max-width: 500px,">
=======
    window.location.href = window.location.href + '?_t=' + Date.now();
  }

  private showFatalErrorMessage(): void {
    // Create a user-friendly error message
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

    errorDiv.innerHTML = `
      <div style="text-align: center, padding: 2rem, max-width: 500px,">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <h2 style="margin-bottom: 1rem,">Connection Issue</h2>
        <p style="margin-bottom: 1.5rem, line-height: 1.5,">
          We're having trouble loading some parts of the application. 
          This might be due to a poor network connection or a temporary server issue.
        </p>
        <button onclick="window.location.reload()" style="
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          background: #0070f3
          color: white
          border: none
          padding: 0.75rem 1.5rem
          border-radius: 0.5rem
          font-size: 1rem
          cursor: pointer
          margin-right: 1rem;        ">
          Try Again
        </button>
        <button onclick="window.location.href='/'" style="
          background: #666
          color: white
          border: none
          padding: 0.75rem 1.5rem
          border-radius: 0.5rem
          font-size: 1rem
          cursor: pointer
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        ">
          Go Home
        </button>
      </div>
<<<<<<< HEAD

=======
>>>>>>>         ">
          Go Home
        </button>
      </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    `
    document.body.appendChild(errorDiv)
  }
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  private getSessionKey(): string {
<<<<<<< HEAD

    return `${navigator && navigator.userAgent}_${window && window.location.origin}`;

=======
    return `${navigator.userAgent}_${window.location.origin}`
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {
    if (!this.errorStats.has(sessionKey)) {
      this.errorStats.set(sessionKey, {
        errorCount: 0
        lastErrorTime: 0
        userAgent: navigator.userAgent
        url: window.location.href
      })
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>     }
    return this.errorStats.get(sessionKey)!
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
    return this.errorStats.get(sessionKey)!
  }

<<<<<<< HEAD
  // Public method to manually trigger recovery
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   // Public method to manually trigger recovery
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  public triggerRecovery(): void {

    this && this.clearCaches().then(() => {
      this && this.reloadPage();
    });  }


      this.reloadPage()
    }) }
>>>>>>>   // Public method to check if we're in a chunk error state
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
export const chunkErrorHandler = new ChunkErrorHandler()
// Export for manual usage

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    `,

    document.body.appendChild(errorDiv)
;
  private showFatalErrorMessage(): void {;
    // Create a user-friendly error message;
    const errorDiv = document.createElement('div'),;
    errorDiv.style.cssText = `;
      position: fixed,;
      top: 0,;
      left: 0,;
      width: 100%,;
      height: 100%,;
      background: rgba(0, 0, 0, 0.8),;
      color: white,;
      display: flex,;
      align-items: center,;
      justify-content: center,;
      z-index: 999999,;
      font-family: system-ui, -apple-system, sans-serif,;
    `,;
    errorDiv.innerHTML = `;
      <div style="text-align: center, padding: 2rem, max-width: 500px,">;
        <h2 style="margin-bottom: 1rem,">Connection Issue</h2>;
        <p style="margin-bottom: 1.5rem, line-height: 1.5,">;
          We're having trouble loading some parts of the application.;
          This might be due to a poor network connection or a temporary server issue.;
        </p>;
        <button onclick="window.location.reload()" style=";
          background: #0070f3,;
          color: white,;
          border: none,;
          padding: 0.75rem 1.5rem,;
          border-radius: 0.5rem,;
          font-size: 1rem,;
          cursor: pointer,;
          margin-right: 1rem,;
        ">;
          Try Again;
        </button>;
        <button onclick="window.location.href='/'" style=";
          background: #666,;
          color: white,;
          border: none,;
          padding: 0.75rem 1.5rem,;
          border-radius: 0.5rem,;
          font-size: 1rem,;
          cursor: pointer,;
        ">;
          Go Home;
        </button>;
      </div>;
    `,;
    document.body.appendChild(errorDiv);
  }
;
  private delay(ms: number): Promise<void> {;
    return new Promise(resolve => setTimeout(resolve, ms));
  }
;
  private getSessionKey(): string {;
    return `${navigator.userAgent}_${window.location.origin}`;
  }
;
  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {;
    if (!this.errorStats.has(sessionKey)) {;
      this.errorStats.set(sessionKey, {;
        errorCount: 0,;
        lastErrorTime: 0,;
        userAgent: navigator.userAgent,;
        url: window.location.href;
      });
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    }
    return this.errorStats.get(sessionKey)!
  }

<<<<<<< HEAD
  // Public method to manually trigger recovery
  public triggerRecovery(): void {
    this.clearCaches().then(() => {
=======


  // Public method to manually trigger recovery
  public triggerRecovery(): void {

    this && this.clearCaches().then(() => {
      this && this.reloadPage();
    });  }


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      this.reloadPage()
    }) }
  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {
    const sessionKey = this.getSessionKey()
    const stats = this.errorStats.get(sessionKey)
    return stats ? stats.errorCount > 0 : false
  }
  // Public method to reset error state
  public resetErrorState(): void {
    const sessionKey = this.getSessionKey()
    this.errorStats.delete(sessionKey)
  }
// Create and export singleton instance
export const chunkErrorHandler = new ChunkErrorHandler()
// Export for manual usage
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default chunkErrorHandler
export default chunkErrorHandler
        ">
          Try Again
        </button>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      background: rgba (0, 0, 0, 0.8);
      color: white;
      display: flex;
      align - items: center;
      justify - content: center;
      z - index: 999999;
      font - family: system - ui, -apple - system, sans - serif;
    `;
    error_div.innerHTML = `;
      <div style="text - align: center; padding: 2rem; max - width: 500px;">;
        <h2 style="margin - bottom: 1rem;">Connection Issue</h2>;
        <p style="margin - bottom: 1.5rem; line - height: 1.5;">;
          We're having trouble loading some parts of the application.;
          This might be due to a poor network connection or a temporary server issue.;
        </p>;
        <button onclick="window.location.reload ()" style=";
          background: #0070f3;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border - radius: 0.5rem;
          font - size: 1rem;
          cursor: pointer;
          margin - right: 1rem;        ">;
          Try Again;
        </button>;
        <button onclick="window.location.href='/'" style=";
          background: #666;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border - radius: 0.5rem;
          font - size: 1rem;
          cursor: pointer;
        ">;
          Go Home;
        </button>;
      </div>;
    `;
    document.body.append_child (error_div);
  }
  private delay (ms: number): Promise < void> {
    return new Promise (resolve => set_timeout (resolve, ms));
  }
  private getSessionKey (): string {
    return `${navigator.user_agent}_${window.location.origin}`;
  }
  private getOrCreateErrorStats (session_key: string): ChunkErrorStats {
    if () {) {
  $2
}
      this.error_stats.set (session_key, {
        error_count: 0,
        lastErrorTime: 0,
        user_agent: navigator.user_agent,
        url: window.location.href,
      });
    }
    return this.error_stats.get (session_key)!;
  }
  // Public method to manually trigger recovery;
  public trigger_recovery (): void {
    this.clear_caches ().then (() => {
      this.reload_page ();
    }) }
  // Public method to check if we're in a chunk error state;
  public isInErrorState (): boolean {
    const session_key = this.getSessionKey ();
    const stats = this.error_stats.get (session_key);
    return stats ? stats.error_count > 0 : false;
  }
  // Public method to reset error state;
  public resetErrorState (): void {
    const session_key = this.getSessionKey ();
    this.error_stats.delete (session_key);
  }
// Create and export singleton instance;
export const chunkErrorHandler = new ChunkErrorHandler ();
// Export for manual usage;
export default chunkErrorHandler;
export default chunkErrorHandler;
        ">;
          Try Again;
        </button>;
        <button onclick="window.location.href='/'" style=";
export default chunkErrorHandler;
        <button onclick="window.location.href='/'" style=";
export default chunkErrorHandler;
}
}

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
;
=======
        <button onclick="window.location.href='/'" style="
export default chunkErrorHandler

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        <button onclick="window.location.href='/'" style="
export default chunkErrorHandler

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <button onclick="window.location.href='/'" style=";
export default chunkErrorHandler;
}
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Public method to manually trigger recovery;
  public triggerRecovery(): void {;
    this.clearCaches().then(() => {;
      this.reloadPage();
    });
  }
;
  // Public method to check if we're in a chunk error state;
  public isInErrorState(): boolean {;
    const sessionKey = this.getSessionKey(),;
    const stats = this.errorStats.get(sessionKey),;
    return stats ? stats.errorCount > 0 : false;
  }
;
  // Public method to reset error state;
  public resetErrorState(): void {;
    const sessionKey = this.getSessionKey(),;
    this.errorStats.delete(sessionKey);
  }
}
;
// Create and export singleton instance;
export const chunkErrorHandler = new ChunkErrorHandler();
// Export for manual usage;
<<<<<<< HEAD
export default chunkErrorHandler;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
export default chunkErrorHandler;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
