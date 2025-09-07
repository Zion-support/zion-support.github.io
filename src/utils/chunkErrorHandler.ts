<<<<<<< HEAD
=======
<<<<<<< HEAD
  private errorStats: Map<string, ChunkErrorStats> = new Map()
  private readonly MAX_RETRIES = 3
  private readonly RETRY_DELAY = 1000; // 1 second
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
private readonly RETRY_DELAY = 1000; // 1 second
  private readonly CACHE_CLEAR_THRESHOLD = 2
  constructor() {

    this && this.initializeGlobalHandlers();

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
/**
 * Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery
 * Handles automatic retry, cache clearing, and graceful degradation
 */

<<<<<<< HEAD
import { logErrorToProduction } from './productionLogger';
=======
import { logErrorToProduction } from './productionLogger'

>>>>>>> merged-prs-20250907-203621
interface ChunkErrorStats {
  errorCount: number;
  lastErrorTime: number;
  userAgent: string;
  url: string
<<<<<<< HEAD
}

class ChunkErrorHandler {
  private errorStats: Map<string, ChunkErrorStats> = new Map();
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY = 1000, // 1 second
  private readonly CACHE_CLEAR_THRESHOLD = 2;

  constructor() {
    this.initializeGlobalHandlers()
  }

  private initializeGlobalHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle webpack chunk loading errors
    window.addEventListener('error', (event) => {
      this.handleScriptError(event)
    });

    // Handle unhandled promise rejections (async chunk loading)
    window.addEventListener('unhandledrejection', (event) => {
      this.handlePromiseRejection(event)
    })
  }

  private handleScriptError(event: ErrorEvent): void {
    const { error, filename } = event;
    
    if (this.isChunkError(error, filename)) {
      event.preventDefault(), // Prevent the error from bubbling up
      this.handleChunkError(error, { filename, source: 'script' })
    }
  }

  private handlePromiseRejection(event: PromiseRejectionEvent): void {
    const error = event.reason;
    
    if (this.isChunkError(error)) {
      event.preventDefault(), // Prevent unhandled rejection
      this.handleChunkError(error, { source: 'promise' })
    }
  }

  private isChunkError(error: any, filename?: string): boolean {
    if (!error) return false;

    const errorMessage = error.message || String(error);
    const errorName = error.name || '';
    
    const chunkErrorPatterns = [
      'ChunkLoadErrorLoading chunkFailed to fetch dynamically imported moduleFailed to importchunk-vendors-'
    ];

    return chunkErrorPatterns.some(pattern => 
      errorMessage.includes(pattern) || 
      errorName.includes(pattern) ||
      (filename && filename.includes(pattern))
    )
  }

  private async handleChunkError(error: Error, context: { filename?: string, source: string }): Promise<void> {
    const sessionKey = this.getSessionKey();
    const stats = this.getOrCreateErrorStats(sessionKey);
    
    stats.errorCount++;
    stats.lastErrorTime = Date.now();

    logErrorToProduction('ChunkLoadError detected', error, {
      context: 'chunkErrorHandler';
      errorCount: stats.errorCount;
      retryAttempt: stats.errorCount;
      source: context.source;
      filename: context.filename;
      userAgent: navigator.userAgent;
      url: window.location.href
    });

=======
class ChunkErrorHandler {

  private errorStats: Map<string, ChunkErrorStats> = new Map()
  private readonly MAX_RETRIES = 3
  private errorStats: Map<string, ChunkErrorStats> = new Map();
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY = 1000; // 1 second
  private readonly CACHE_CLEAR_THRESHOLD = 2
  constructor() {
    this.initializeGlobalHandlers()
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  private initializeGlobalHandlers(): void {
    if (typeof window === 'undefined') return;
    // Handle webpack chunk loading errors
<<<<<<< HEAD
=======

    window && window.addEventListener('error', event => {
      this && this.handleScriptError(event);
    });

    // Handle unhandled promise rejections (async chunk loading)
    window && window.addEventListener('unhandledrejection', event => {
      this && this.handlePromiseRejection(event);
    });  }


      this.handlePromiseRejection(event)
    }) }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
    // Attempt recovery based on error count
    if (stats.errorCount <= this.MAX_RETRIES) {
      await this.attemptRecovery(stats.errorCount, context)
    } else {
      this.showFatalErrorMessage()
<<<<<<< HEAD
    }
  }

  private async attemptRecovery(attemptNumber: number, context: { filename?: string, source: string }): Promise<void> {
    logErrorToProduction(`Attempting ChunkLoadError recovery #${attemptNumber}`, undefined, {
      context: 'chunkErrorRecovery';
      attemptNumber;
      recoveryMethod: this.getRecoveryMethod(attemptNumber)
    });

    switch (attemptNumber) {
      case 1: // First attempt: Simple retry after short delay
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
        
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }
  private async attemptRecovery(
    attemptNumber: number
    context: { filename?: string; source: string }
  ): Promise<void> {
    logErrorToProduction(
      `Attempting ChunkLoadError recovery #${attemptNumber}`
      undefined
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

<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
      default:
        this.showFatalErrorMessage()
    }
  }
<<<<<<< HEAD

  private getRecoveryMethod(attemptNumber: number): string {
    switch (attemptNumber) {
      case 1: return 'simple-retry';
      case 2: return 'cache-clear-retry';
      case 3: return 'hard-refresh';
      default: return 'fatal-error'
    }
  }

=======
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
>>>>>>> merged-prs-20250907-203621
  private async clearCaches(): Promise<void> {
    try {
      // Clear service worker caches
      if ('caches' in window) {
<<<<<<< HEAD
        const cacheNames = await caches.keys();
=======
        const cacheNames = await caches.keys()
>>>>>>> merged-prs-20250907-203621
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        )
      }
<<<<<<< HEAD

      // Clear localStorage items that might be stale
      const keysToRemove = ['__NEXT_ROUTER_STATE____NEXT_ROUTE_INFO__'];
=======
      // Clear localStorage items that might be stale
      const keysToRemove = ['__NEXT_ROUTER_STATE__', '__NEXT_ROUTE_INFO__']
>>>>>>> merged-prs-20250907-203621
      keysToRemove.forEach(key => {
        try {
          localStorage.removeItem(key)
        } catch (e) {
          // Ignore localStorage errors
        }
<<<<<<< HEAD
      });

      logErrorToProduction('Caches cleared successfully', undefined, {
        context: 'chunkErrorRecovery';
=======
      })
      logErrorToProduction('Caches cleared successfully', undefined, {
        context: 'chunkErrorRecovery'
>>>>>>> merged-prs-20250907-203621
        action: 'cache-clear'
      })
    } catch (error) {
      logErrorToProduction('Failed to clear caches', error as Error, {
<<<<<<< HEAD
        context: 'chunkErrorRecovery';
=======
        context: 'chunkErrorRecovery'
>>>>>>> merged-prs-20250907-203621
        action: 'cache-clear-failed'
      })
    }
  }
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
  private reloadPage(): void {
    // Use replace to avoid adding to history
    window.location.replace(window.location.href)
  }
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
  private hardRefresh(): void {
    // Force a hard refresh bypassing all caches
    window.location.href = window.location.href + '?_t=' + Date.now()
  }
<<<<<<< HEAD

  private showFatalErrorMessage(): void {
    // Create a user-friendly error message
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
=======
  private showFatalErrorMessage(): void {
    // Create a user-friendly error message
=======
        } catch (e) {
          // Ignore localStorage errors
        }

    window && window.location.replace(window && window.location.href);

  }
  private hardRefresh(): void {
    // Force a hard refresh bypassing all caches

    window && window.location.href = window && window.location.href + '?_t=' + Date && Date.now();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          Try Again
        </button>
        <button onclick="window.location.href='/'" style="
          background: #666
          color: white
          border: none
          padding: 0.75rem 1.5rem
          border-radius: 0.5rem
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const errorDiv = document && document.createElement('div');
    errorDiv && errorDiv.style.cssText = `
    window.location.href = window.location.href + '?_t=' + Date.now()


<<<<<<< HEAD
      });
      logErrorToProduction ('Caches cleared successfully', undefined, {
        context: 'chunkErrorRecovery',
        action: 'cache - clear',
      });
    } catch (error) {
      logErrorToProduction ('Failed to clear caches', error as Error, {
        context: 'chunkErrorRecovery',
        action: 'cache - clear - failed',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      });
    } catch (error) {;
      logErrorToProduction('Failed to clear caches', error as Error, {;
        context: 'chunkErrorRecovery',;
        action: 'cache-clear-failed';
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

ursor/fix-website-loading-errors-and-merge-6662
=======
    window.location.href = window.location.href + '?_t=' + Date.now();



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  private showFatalErrorMessage (): void {
    // Create a user - friendly error message;
    const error_div = document.create_element ('div');
    error_div.style.css_text = `;
>>>>>>> merged-prs-20250907-203621
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
<<<<<<< HEAD
      background: rgba(0, 0, 0, 0.8);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      font-family: system-ui, -apple-system, sans-serif;
    `;

=======

  private showFatalErrorMessage(): void {
    // Create a user-friendly error message


<<<<<<< HEAD
    errorDiv.innerHTML = `
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
    errorDiv.innerHTML = `
      <div style="text-align: center, padding: 2rem, max-width: 500px,">
        <h2 style="margin-bottom: 1rem,">Connection Issue</h2>
        <p style="margin-bottom: 1.5rem, line-height: 1.5,">
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
=======
<<<<<<< HEAD
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
          background: #0070f3,
          color: white,
          border: none,
          padding: 0.75rem 1.5rem,
          border-radius: 0.5rem,
          font-size: 1rem,
          cursor: pointer,
          margin-right: 1rem,
>>>>>>> merged-prs-20250907-203621
        ">
          Try Again
        </button>
        <button onclick="window.location.href='/'" style="
<<<<<<< HEAD
          background: #666;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
=======
          background: #666,
          color: white,
          border: none,
          padding: 0.75rem 1.5rem,
          border-radius: 0.5rem,
          font-size: 1rem,
          cursor: pointer,
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
        ">
          Go Home
        </button>
      </div>
<<<<<<< HEAD
    `;

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
        errorCount: 0;
        lastErrorTime: 0;
        userAgent: navigator.userAgent;
        url: window.location.href
      })
=======
<<<<<<< HEAD
          Go Home
        </button>
      </div>
    `
    document.body.appendChild(errorDiv)
=======

    `;

    document && document.body.appendChild(errorDiv);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  private getSessionKey(): string {
<<<<<<< HEAD
    return `${navigator.userAgent}_${window.location.origin}`
  }
  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {
    if (!this.errorStats.has(sessionKey)) {
      this.errorStats.set(sessionKey, {
        errorCount: 0
        lastErrorTime: 0
        userAgent: navigator.userAgent
        url: window.location.href
      })


  public triggerRecovery(): void {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    this && this.clearCaches().then(() => {
      this && this.reloadPage();
    });  }


      this.reloadPage()
    }) }
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

>>>>>>> merged-prs-20250907-203621
    }
    return this.errorStats.get(sessionKey)!
  }

<<<<<<< HEAD
  // Public method to manually trigger recovery
  public triggerRecovery(): void {
    this.clearCaches().then(() => {
      this.reloadPage()
    })
  }

  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {
    const sessionKey = this.getSessionKey();
    const stats = this.errorStats.get(sessionKey);
    return stats ? stats.errorCount > 0 : false
  }

  // Public method to reset error state
  public resetErrorState(): void {
    const sessionKey = this.getSessionKey();
    this.errorStats.delete(sessionKey)
  }
}

// Create and export singleton instance
export const chunkErrorHandler = new ChunkErrorHandler();

// Export for manual usage
export default chunkErrorHandler;
=======


  // Public method to manually trigger recovery
  public triggerRecovery(): void {

    this && this.clearCaches().then(() => {
      this && this.reloadPage();
    });  }


      this.reloadPage()
    }) }
  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {
<<<<<<< HEAD
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
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default chunkErrorHandler
export default chunkErrorHandler
        ">
          Try Again
        </button>

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      this.error_stats.set (session_key, {
        error_count: 0,
        lastErrorTime: 0,
        user_agent: navigator.user_agent,
        url: window.location.href,
      });
    }
    return this.error_stats.get (session_key)!;
  }
=======
}
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

;
        <button onclick="window.location.href='/'" style="
export default chunkErrorHandler

        <button onclick="window.location.href='/'" style="
export default chunkErrorHandler

        <button onclick="window.location.href='/'" style=";
export default chunkErrorHandler;
}
}
;
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
=======
export default chunkErrorHandler;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
