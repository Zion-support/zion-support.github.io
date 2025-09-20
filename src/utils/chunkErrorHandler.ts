/**
 * Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery
 * Handles automatic retry, cache clearing, and graceful degradation
 */

interface ChunkErrorStats {
  errorCount: number;
  lastErrorTime: number;
  userAgent: string;
  url: string;
}

class ChunkErrorHandler {
  private static instance: ChunkErrorHandler;
  private stats: ChunkErrorStats;
  private maxRetries = 3;
  private retryDelay = 1000;

  constructor() {
    this.stats = {
      errorCount: 0,
      lastErrorTime: 0,
      userAgent: navigator.userAgent,
      url: window.location.href
    };
  }

  static getInstance(): ChunkErrorHandler {
    if (!ChunkErrorHandler.instance) {
      ChunkErrorHandler.instance = new ChunkErrorHandler();
    }
    return ChunkErrorHandler.instance;
  }

  handleChunkError(error: Error, retryCount = 0): Promise<void> {
    this.stats.errorCount++;
    this.stats.lastErrorTime = Date.now();

    console.warn(`ChunkLoadError occurred (attempt ${retryCount + 1}):`, error);

    if (retryCount >= this.maxRetries) {
      console.error("Max retries reached for chunk error, reloading page");
      window.location.reload();
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        this.clearCache();
        window.location.reload();
        resolve();
      }, this.retryDelay * Math.pow(2, retryCount));
    });
  }

  private clearCache(): void {
    // Clear service worker cache
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.unregister();
        });
      });
    }

    // Clear browser cache
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          caches.delete(cacheName);
        });
      });
    }
  }

  getStats(): ChunkErrorStats {
    return { ...this.stats };
  }
}

export default ChunkErrorHandler;