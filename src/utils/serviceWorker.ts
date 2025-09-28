/**
 * Service Worker Registration and Management
 * Provides optimized service worker functionality with better error handling
 */

interface ServiceWorkerConfig {
  scope: string;
  updateViaCache: RequestCache;
  updateInterval: number;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onError?: (error: Error) => void;
}

class ServiceWorkerManager {
  private registration: ServiceWorkerRegistration | null = null;
  private config: ServiceWorkerConfig;
  private updateTimer: NodeJS.Timeout | null = null;

  constructor(config: Partial<ServiceWorkerConfig> = {}) {
    this.config = {
      scope: '/',
      updateViaCache: 'none',
      updateInterval: 60000, // 1 minute
      ...config
    };
  }

  /**
   * Register service worker with optimized configuration
   */
  async register(): Promise<ServiceWorkerRegistration | null> {
    if (!('serviceWorker' in navigator) || process.env.NODE_ENV !== 'production') {
      console.log('Service Worker not supported or not in production mode');
      return null;
    }

    try {
      this.registration = await navigator.serviceWorker.register('/sw.js', {
        scope: this.config.scope,
        updateViaCache: this.config.updateViaCache
      });

      console.log('Service Worker registered successfully:', this.registration);
      
      this.setupUpdateHandling();
      this.startUpdateChecking();
      
      return this.registration;
    } catch (error) {
      const errorObj = error as Error;
      console.error('Service Worker registration failed:', errorObj);
      this.config.onError?.(errorObj);
      return null;
    }
  }

  /**
   * Setup update handling with user-friendly notifications
   */
  private setupUpdateHandling(): void {
    if (!this.registration) return;

    this.registration.addEventListener('updatefound', () => {
      const newWorker = this.registration?.installing;
      if (!newWorker) return;

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          // New content is available
          this.config.onUpdate?.(this.registration!);
        }
      });
    });
  }

  /**
   * Start checking for updates at regular intervals
   */
  private startUpdateChecking(): void {
    if (!this.registration || this.updateTimer) return;

    this.updateTimer = setInterval(() => {
      this.registration?.update();
    }, this.config.updateInterval);
  }

  /**
   * Stop update checking
   */
  stopUpdateChecking(): void {
    if (this.updateTimer) {
      clearInterval(this.updateTimer);
      this.updateTimer = null;
    }
  }

  /**
   * Unregister service worker
   */
  async unregister(): Promise<boolean> {
    this.stopUpdateChecking();
    
    if (!this.registration) return false;

    try {
      const result = await this.registration.unregister();
      console.log('Service Worker unregistered:', result);
      return result;
    } catch (error) {
      console.error('Service Worker unregistration failed:', error);
      return false;
    }
  }

  /**
   * Check if service worker is supported
   */
  static isSupported(): boolean {
    return 'serviceWorker' in navigator;
  }

  /**
   * Get current registration
   */
  getRegistration(): ServiceWorkerRegistration | null {
    return this.registration;
  }
}

// Create singleton instance
export const serviceWorkerManager = new ServiceWorkerManager();

// Export class for custom instances
export { ServiceWorkerManager };
export type { ServiceWorkerConfig };