/**
 * Chunk Error Handler - Handles dynamic import failures gracefully
 * Provides retry mechanisms and fallback strategies
 */

interface ChunkErrorHandlerConfig {
  retryDelay?: number;
  maxRetries?: number;
  cacheClearThreshold?: number;
}

class ChunkErrorHandler {
  private readonly RETRY_DELAY = 1000; // 1 second
  private readonly MAX_RETRIES = 3;
  private readonly CACHE_CLEAR_THRESHOLD = 2;
  private retryCount = 0;
  private errorCount = 0;

  constructor(config?: ChunkErrorHandlerConfig) {
    this.RETRY_DELAY = config?.retryDelay || 1000;
    this.MAX_RETRIES = config?.maxRetries || 3;
    this.CACHE_CLEAR_THRESHOLD = config?.cacheClearThreshold || 2;
    this.initializeGlobalHandlers();
  }

  private initializeGlobalHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle chunk load errors
    window.addEventListener('error', (event) => {
      if (this.isChunkLoadError(event)) {
        this.handleChunkError(event);
      }
    });

    // Handle unhandled promise rejections (dynamic imports)
    window.addEventListener('unhandledrejection', (event) => {
      if (this.isChunkLoadError(event)) {
        this.handleChunkError(event);
      }
    });
  }

  private isChunkLoadError(event: ErrorEvent | PromiseRejectionEvent): boolean {
    const error = event instanceof ErrorEvent ? event.error : event.reason;
    return (
      error?.message?.includes('Loading chunk') ||
      error?.message?.includes('Loading CSS chunk') ||
      error?.message?.includes('ChunkLoadError') ||
      error?.name === 'ChunkLoadError'
    );
  }

  private async handleChunkError(event: ErrorEvent | PromiseRejectionEvent): Promise<void> {
    this.errorCount++;
    
    if (this.retryCount >= this.MAX_RETRIES) {
      console.error('Max retries exceeded for chunk loading. Clearing cache and reloading.');
      this.clearCacheAndReload();
      return;
    }

    if (this.errorCount >= this.CACHE_CLEAR_THRESHOLD) {
      console.warn('Multiple chunk errors detected. Clearing cache.');
      this.clearCache();
    }

    this.retryCount++;
    console.warn(`Chunk load error detected. Retrying in ${this.RETRY_DELAY}ms... (Attempt ${this.retryCount}/${this.MAX_RETRIES})`);

    setTimeout(() => {
      this.retryLoad();
    }, this.RETRY_DELAY);
  }

  private retryLoad(): void {
    // Force reload the page to retry chunk loading
    window.location.reload();
  }

  private clearCache(): void {
    if ('caches' in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          caches.delete(cacheName);
        });
      });
    }
  }

  private clearCacheAndReload(): void {
    this.clearCache();
    // Clear any stored data that might be causing issues
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.clear();
    }
    window.location.reload();
  }

  public reset(): void {
    this.retryCount = 0;
    this.errorCount = 0;
  }
}

// Export singleton instance
export const chunkErrorHandler = new ChunkErrorHandler();

// Export class for custom instances
export default ChunkErrorHandler;