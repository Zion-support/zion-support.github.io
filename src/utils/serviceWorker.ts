// Service Worker Registration Utility
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Use development service worker in development mode
      const isDev = import.meta.env.DEV;
      const swUrl = isDev ? '/sw-dev.js' : '/sw.js';

      // // // console.log(`Registering service worker: ${swUrl} (${isDev ? 'dev' : 'prod'})`);

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          // // // console.log('SW registered: ', registration);

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available
                  // // // console.log('New content is available; please refresh.');
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          // // // console.error('SW registration failed: ', registrationError);
        });
    });
  }

  private showUpdateNotification() {
    try {
      // Create update notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `
      <div class="flex items-center space-x-3">
        <span>🔄 New version available</span>
        <button id="sw-update-btn" class="bg-white text-blue-500 px-3 py-1 rounded text-sm hover:bg-gray-100">
          Update
        </button>
        <button id="sw-dismiss-btn" class="text-white/80 hover:text-white">
          ✕
        </button>
      </div>
    `;

    document.body.appendChild(notification);

    // Handle update button
    const updateBtn = notification.querySelector('#sw-update-btn');
    if (updateBtn) {
      updateBtn.addEventListener('click', () => {
        this.updateServiceWorker();
        notification.remove();
      });
    }

    // Handle dismiss button
    const dismissBtn = notification.querySelector('#sw-dismiss-btn');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => {
        notification.remove();
      });
    }

    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 10000);
    } catch (error) {
      console.error('Error showing update notification:', error);
    }
  }

  async updateServiceWorker() {
    if (!this.swRegistration) return;

    try {
      await this.swRegistration.update();
      console.log('Service Worker update initiated');
    } catch (error) {
      console.error('Service Worker update failed:', error);
    }
  }

  async unregister(): Promise<boolean> {
    if (!this.swRegistration) return false;

    try {
      const unregistered = await this.swRegistration.unregister();
      if (unregistered) {
        console.log('Service Worker unregistered');
        this.swRegistration = null;
      }
      return unregistered;
    } catch (error) {
      console.error('Service Worker unregistration failed:', error);
      return false;
    }
  }

  async getRegistration(): Promise<ServiceWorkerRegistration | null> {
    if (!this.isSupported) return null;
    const registration = await navigator.serviceWorker.getRegistration();
    return registration || null;
  }

  async getController(): Promise<ServiceWorker | null> {
    if (!this.isSupported) return null;
    return navigator.serviceWorker.controller;
  }

  isReady(): boolean {
    return this.swRegistration !== null && this.swRegistration.active !== null;
  }

  // Cache management
  async clearCaches(): Promise<void> {
    if (!this.isSupported) return;

    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      console.log('All caches cleared');
    } catch (error) {
      console.error('Failed to clear caches:', error);
    }
  }

  async getCacheSize(): Promise<number> {
    if (!this.isSupported) return 0;

    try {
      const cacheNames = await caches.keys();
      let totalSize = 0;

      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        
        for (const request of keys) {
          const response = await cache.match(request);
          if (response) {
            const blob = await response.blob();
            totalSize += blob.size;
          }
        }
      }

      return totalSize;
    } catch (error) {
      console.error('Failed to calculate cache size:', error);
      return 0;
    }
  }

  // Background sync
  async requestBackgroundSync(tag: string): Promise<boolean> {
    if (!this.isSupported || !('sync' in navigator.serviceWorker)) {
      return false;
    }

    try {
      const registration = await this.getRegistration();
      if (registration) {
        await (registration as any).sync.register(tag);
        console.log('Background sync requested:', tag);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Background sync request failed:', error);
      return false;
    }
  }

  // Push notifications
  async requestNotificationPermission(): Promise<NotificationPermission> {
    if (!this.isSupported || !('Notification' in window)) {
      return 'denied';
    }

    try {
      const permission = await Notification.requestPermission();
      console.log('Notification permission:', permission);
      return permission;
    } catch (error) {
      console.error('Failed to request notification permission:', error);
      return 'denied';
    }
  }

  async subscribeToPushNotifications(): Promise<PushSubscription | null> {
    if (!this.isSupported || !('PushManager' in window)) {
      return null;
    }

    try {
      const permission = await this.requestNotificationPermission();
      if (permission !== 'granted') {
        console.log('Notification permission denied');
        return null;
      }

      const registration = await this.getRegistration();
      if (!registration) {
        console.log('No service worker registration');
        return null;
      }

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(process.env['REACT_APP_VAPID_PUBLIC_KEY'] || '') as Uint8Array as Uint8Array
      });

      console.log('Push subscription created:', subscription);
      return subscription;
    } catch (error) {
      console.error('Push subscription failed:', error);
      return null;
    }
  }

  private urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}

export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        // // // console.error(error.message);
      });
  }
}