/**
 * Service Worker Performance Monitoring
 * Integrates with the service worker to track performance metrics
 */

interface ServiceWorkerMetrics {
  cacheHitRate: number;
  networkRequests: number;
  cacheSize: number;
  offlineTime: number;
  loadTime: number;
}

class ServiceWorkerPerformanceMonitor {
  private static instance: ServiceWorkerPerformanceMonitor;
  private metrics: ServiceWorkerMetrics;
  private observers: ((metrics: ServiceWorkerMetrics) => void)[] = [];

  private constructor() {
    this.metrics = {
      cacheHitRate: 0,
      networkRequests: 0,
      cacheSize: 0,
      offlineTime: 0,
      loadTime: 0
    };

    this.initializeMonitoring();
  }

  public static getInstance(): ServiceWorkerPerformanceMonitor {
    if (!ServiceWorkerPerformanceMonitor.instance) {
      ServiceWorkerPerformanceMonitor.instance = new ServiceWorkerPerformanceMonitor();
    }
    return ServiceWorkerPerformanceMonitor.instance;
  }

  private initializeMonitoring(): void {
    // Listen for service worker messages
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
          this.updateMetrics(event.data.metrics);
        }
      });

      // Request initial metrics from service worker
      this.requestMetrics();
    }

    // Monitor network status
    this.monitorNetworkStatus();
    
    // Monitor cache size
    this.monitorCacheSize();
  }

  private async requestMetrics(): Promise<void> {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      try {
        navigator.serviceWorker.controller.postMessage({
          type: 'REQUEST_METRICS'
        });
      } catch (error) {
        console.warn('Failed to request metrics from service worker:', error);
      }
    }
  }

  private updateMetrics(newMetrics: Partial<ServiceWorkerMetrics>): void {
    this.metrics = { ...this.metrics, ...newMetrics };
    this.notifyObservers();
  }

  private monitorNetworkStatus(): void {
    let offlineStartTime: number | null = null;

    const handleOnline = () => {
      if (offlineStartTime) {
        this.metrics.offlineTime = Date.now() - offlineStartTime;
        offlineStartTime = null;
        this.notifyObservers();
      }
    };

    const handleOffline = () => {
      offlineStartTime = Date.now();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
  }

  private async monitorCacheSize(): Promise<void> {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        let totalSize = 0;

        for (const cacheName of cacheNames) {
          const cache = await caches.open(cacheName);
          const keys = await cache.keys();
          totalSize += keys.length;
        }

        this.metrics.cacheSize = totalSize;
        this.notifyObservers();
      } catch (error) {
        console.warn('Failed to monitor cache size:', error);
      }
    }
  }

  private notifyObservers(): void {
    this.observers.forEach(observer => {
      try {
        observer(this.metrics);
      } catch (error) {
        console.error('Error notifying performance observer:', error);
      }
    });
  }

  public subscribe(observer: (metrics: ServiceWorkerMetrics) => void): () => void {
    this.observers.push(observer);
    
    // Return unsubscribe function
    return () => {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    };
  }

  public getMetrics(): ServiceWorkerMetrics {
    return { ...this.metrics };
  }

  public async clearCache(): Promise<void> {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
        await this.monitorCacheSize();
        console.log('Cache cleared successfully');
      } catch (error) {
        console.error('Failed to clear cache:', error);
        throw error;
      }
    }
  }

  public async preloadResources(urls: string[]): Promise<void> {
    if ('caches' in window && 'serviceWorker' in navigator && navigator.serviceWorker.controller) {
      try {
        navigator.serviceWorker.controller.postMessage({
          type: 'PRELOAD_RESOURCES',
          urls
        });
      } catch (error) {
        console.warn('Failed to preload resources:', error);
      }
    }
  }

  public async getCacheStats(): Promise<{ name: string; size: number }[]> {
    if (!('caches' in window)) {
      return [];
    }

    try {
      const cacheNames = await caches.keys();
      const stats = await Promise.all(
        cacheNames.map(async (cacheName) => {
          const cache = await caches.open(cacheName);
          const keys = await cache.keys();
          return {
            name: cacheName,
            size: keys.length
          };
        })
      );

      return stats;
    } catch (error) {
      console.error('Failed to get cache stats:', error);
      return [];
    }
  }
}

export const serviceWorkerPerformanceMonitor = ServiceWorkerPerformanceMonitor.getInstance();
export type { ServiceWorkerMetrics };