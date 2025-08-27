// Service Worker Registration Utility
export class ServiceWorkerManager {
  private static instance: ServiceWorkerManager;
  private swRegistration: ServiceWorkerRegistration | null = null;
  private isSupported: boolean;

  private constructor() {
    this.isSupported = 'serviceWorker' in navigator;
  }

  static getInstance(): ServiceWorkerManager {
    if (!ServiceWorkerManager.instance) {
      ServiceWorkerManager.instance = new ServiceWorkerManager();
    }
    return ServiceWorkerManager.instance;
  }

  async register(): Promise<ServiceWorkerRegistration | null> {
    if (!this.isSupported) {
      console.log('Service Worker not supported');
      return null;
    }

    try {
      // Check if service worker is already registered
      const existingRegistration = await navigator.serviceWorker.getRegistration();
      if (existingRegistration) {
        console.log('Service Worker already registered');
        this.swRegistration = existingRegistration;
        return existingRegistration;
      }

      // Register new service worker
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none'
      });

      console.log('Service Worker registered successfully:', registration);
      this.swRegistration = registration;

      // Handle updates
      this.handleUpdates(registration);

      // Handle messages
      this.handleMessages();

      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      return null;
    }
  }

  private handleUpdates(registration: ServiceWorkerRegistration) {
    // Check for updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New version available
            this.showUpdateNotification();
          }
        });
      }
    });

    // Handle controller change
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }

  private handleMessages() {
    navigator.serviceWorker.addEventListener('message', (event) => {
      console.log('Message from Service Worker:', event.data);
      
      switch (event.data.type) {
        case 'CACHE_UPDATED':
          console.log('Cache updated:', event.data.payload);
          break;
        case 'OFFLINE_READY':
          console.log('App is ready for offline use');
          break;
        case 'ERROR':
          console.error('Service Worker error:', event.data.payload);
          break;
      }
    });
  }

  private showUpdateNotification() {
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
    return navigator.serviceWorker.getRegistration();
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
        applicationServerKey: this.urlBase64ToUint8Array(process.env.REACT_APP_VAPID_PUBLIC_KEY || '')
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

// Export singleton instance
export const serviceWorkerManager = ServiceWorkerManager.getInstance();

// Convenience functions
export const registerServiceWorker = () => serviceWorkerManager.register();
export const unregisterServiceWorker = () => serviceWorkerManager.unregister();
export const clearCaches = () => serviceWorkerManager.clearCaches();
export const getCacheSize = () => serviceWorkerManager.getCacheSize();
export const requestBackgroundSync = (tag: string) => serviceWorkerManager.requestBackgroundSync(tag);
export const requestNotificationPermission = () => serviceWorkerManager.requestNotificationPermission();
export const subscribeToPushNotifications = () => serviceWorkerManager.subscribeToPushNotifications();