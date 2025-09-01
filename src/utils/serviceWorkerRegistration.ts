// Service Worker Registration Utility
export class ServiceWorkerRegistration {

  private static instance: ServiceWorkerRegistration;
  private static isSupported = 'serviceWorker' in navigator;

  /**
   * Register the service worker
   */
  static async register(): Promise<ServiceWorkerRegistration | null> {

    if (!this.isSupported) {

      // // // console.warn('Service Worker is not supported in this browser');
      return null;
    }

    try {

      // Register service worker
      const registration = await navigator.serviceWorker.register('/sw.js', {

        scope: '/'
      });

      this.instance = registration;
      // // // console.log('Service Worker registered successfully:', registration);

      // Handle updates
      this.handleUpdates(registration);

      // Handle installation
      this.handleInstallation(registration);

      return registration;
    } catch (error) {

      // // // console.error('Service Worker registration failed:', error);
      return null;
    }
  }

  /**
   * Unregister the service worker
   */
  static async unregister(): Promise<boolean> {

    if (!this.instance) {

      return false;
    }

    try {

      const unregistered = await this.instance.unregister();
      if (unregistered) {

        // // // console.log('Service Worker unregistered successfully');
        this.instance = null as any;
      }
      return unregistered;
    } catch (error) {

      // // // console.error('Service Worker unregistration failed:', error);
      return false;
    }
  }

  /**
   * Check for updates
   */
  static async checkForUpdates(): Promise<void> {

    if (!this.instance) {

      return;
    }

    try {

      await this.instance.update();
      // // // console.log('Service Worker update check completed');
    } catch (error) {

      // // // console.error('Service Worker update check failed:', error);
    }
  }

  /**
   * Send message to service worker
   */
  static async sendMessage(message: any): Promise<any> {

    if (!this.instance || !this.instance.active) {

      throw new Error('Service Worker not available');
    }

    return new Promise((resolve, reject) => {

      const messageChannel = new MessageChannel();
      
      messageChannel.port1.onmessage = (event) => {

        resolve(event.data);
      };

      messageChannel.port1.onmessageerror = () => {

        reject(new Error('Message port error'));
      };

      this.instance.active!.postMessage(message, [messageChannel.port2]);
    });
  }

  /**
   * Get service worker status
   */
  static getStatus(): 'supported' | 'unsupported' | 'registered' | 'error' {

    if (!this.isSupported) {

      return 'unsupported';
    }

    if (!this.instance) {

      return 'error';
    }

    return 'registered';
  }

  /**
   * Handle service worker updates
   */
  private static handleUpdates(registration: ServiceWorkerRegistration): void {

    registration.addEventListener('updatefound', () => {

      const newWorker = registration.installing;
      
      if (newWorker) {

        newWorker.addEventListener('statechange', () => {

          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {

            // New content is available, show update notification
            this.showUpdateNotification();
          }
        });
      }
    });

    // Handle controller change
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {

      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  }

  /**
   * Handle service worker installation
   */
  private static handleInstallation(registration: ServiceWorkerRegistration): void {

    registration.addEventListener('install', (event) => {

      // // // console.log('Service Worker installing...');
    });

    registration.addEventListener('activate', (event) => {

      // // // console.log('Service Worker activated');
      // Claim all clients
      event.waitUntil(registration.active?.postMessage({ type: 'SKIP_WAITING' }));
    });
  }

  /**
   * Show update notification
   */
  private static showUpdateNotification(): void {

    // Create update notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `
      <div class="flex items-center space-x-3">
        <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        <span>New version available!</span>
        <button id="update-btn" class="bg-white text-cyan-600 px-3 py-1 rounded text-sm hover:bg-gray-100">
          Update
        </button>
        <button id="dismiss-btn" class="text-cyan-100 hover:text-white">
          ×
        </button>
      </div>
    `;

    document.body.appendChild(notification);

    // Handle update button click
    const updateBtn = notification.querySelector('#update-btn');
    if (updateBtn) {

      updateBtn.addEventListener('click', () => {

        window.location.reload();
      });
    }

    // Handle dismiss button click
    const dismissBtn = notification.querySelector('#dismiss-btn');
    if (dismissBtn) {

      dismissBtn.addEventListener('click', () => {

        document.body.removeChild(notification);
      });
    }

    // Auto-dismiss after 10 seconds
    setTimeout(() => {

      if (document.body.contains(notification)) {

        document.body.removeChild(notification);
      }
    }, 10000);
  }

  /**
   * Request notification permission
   */
  static async requestNotificationPermission(): Promise<NotificationPermission> {

    if (!('Notification' in window)) {

      // // // console.warn('Notifications not supported');
      return 'denied';
    }

    if (Notification.permission === 'default') {

      const permission = await Notification.requestPermission();
      return permission;
    }

    return Notification.permission;
  }

  /**
   * Show notification
   */
  static async showNotification(title: string, options?: NotificationOptions): Promise<Notification | null> {

    const permission = await this.requestNotificationPermission();
    
    if (permission !== 'granted') {

      // // // console.warn('Notification permission not granted');
      return null;
    }

    try {

      const notification = new Notification(title, {

        icon: '/images/icon-192x192.png',
        badge: '/images/badge.png',
        ...options
      });

      return notification;
    } catch (error) {

      // // // console.error('Failed to show notification:', error);
      return null;
    }
  }

  /**
   * Get cache information
   */
  static async getCacheInfo(): Promise<{ name: string; size: number }[]> {

    if (!this.instance) {

      return [];
    }

    try {

      const cacheNames = await caches.keys();
      const cacheInfo = await Promise.all(
        cacheNames.map(async (name) => {

          const cache = await caches.open(name);
          const keys = await cache.keys();
          let size = 0;
          
          for (const request of keys) {

            const response = await cache.match(request);
            if (response) {

              const blob = await response.blob();
              size += blob.size;
            }
          }
          
          return { name, size };
        })
      );

      return cacheInfo;
    } catch (error) {

      // // // console.error('Failed to get cache info:', error);
      return [];
    }
  }

  /**
   * Clear all caches
   */
  static async clearAllCaches(): Promise<void> {

    try {

      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(name => caches.delete(name))
      );
      // // // console.log('All caches cleared');
    } catch (error) {

      // // // console.error('Failed to clear caches:', error);
    }
  }
}

// Auto-register service worker when module is imported
if (typeof window !== 'undefined') {

  ServiceWorkerRegistration.register().catch(console.error);
}