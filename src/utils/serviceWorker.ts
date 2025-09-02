// Browser-compatible EventEmitter implementation
class EventEmitter {
  private events: { [key: string]: Function[] } = {};

  on(event: string, listener: Function): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event: string, ...args: any[]): void {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }

  off(event: string, listener: Function): void {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
  }
}

interface ServiceWorkerMessage {
  type: string;
  payload?: any;
}

class ServiceWorkerManager extends EventEmitter {
  private swRegistration: ServiceWorkerRegistration | null = null;
  private isOnline = navigator.onLine;

  constructor() {
    super();
    this.setupEventListeners();
  }

  private setupEventListeners() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.emit('online');
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.emit('offline');
    });
  }

  async register(): Promise<ServiceWorkerRegistration | null> {
    try {
      if (!('serviceWorker' in navigator)) {
        console.log('Service Worker not supported');
        return null;
      }

      // Check if already registered
      const existingRegistration = await navigator.serviceWorker.getRegistration();
      if (existingRegistration) {
        console.log('Service Worker already registered');
        this.swRegistration = existingRegistration;
        return existingRegistration;
      }

      // Register new service worker with better error handling
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none'
      });

      console.log('Service Worker registered successfully:', registration);
      this.swRegistration = registration;

      // Wait for service worker to be ready before setting up handlers
      await navigator.serviceWorker.ready;

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
    try {
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            try {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New version available
                this.showUpdateNotification();
              }
            } catch (error) {
              console.error('Error handling worker state change:', error);
            }
          });
        }
      });

      // Handle controller change
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        try {
          if (!refreshing) {
            refreshing = true;
            window.location.reload();
          }
        } catch (error) {
          console.error('Error handling controller change:', error);
        }
      });
    } catch (error) {
      console.error('Error setting up update handlers:', error);
    }
  }

  private handleMessages() {
    navigator.serviceWorker.addEventListener('message', (event) => {
      try {
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
          default:
            console.log('Unknown message type:', event.data.type);
        }
      } catch (error) {
        console.error('Error handling service worker message:', error);
      }
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

      // Add event listeners
      const updateBtn = notification.querySelector('#sw-update-btn');
      const dismissBtn = notification.querySelector('#sw-dismiss-btn');

      if (updateBtn) {
        updateBtn.addEventListener('click', () => {
          window.location.reload();
        });
      }

      if (dismissBtn) {
        dismissBtn.addEventListener('click', () => {
          document.body.removeChild(notification);
        });
      }

      // Add to DOM
      document.body.appendChild(notification);

      // Auto-remove after 10 seconds
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 10000);
    } catch (error) {
      console.error('Error showing update notification:', error);
    }
  }

  async unregister(): Promise<boolean> {
    try {
      if (this.swRegistration) {
        await this.swRegistration.unregister();
        this.swRegistration = null;
        console.log('Service Worker unregistered successfully');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error unregistering Service Worker:', error);
      return false;
    }
  }

  async update(): Promise<void> {
    try {
      if (this.swRegistration) {
        await this.swRegistration.update();
        console.log('Service Worker update check initiated');
      }
    } catch (error) {
      console.error('Error updating Service Worker:', error);
    }
  }

  isRegistered(): boolean {
    return this.swRegistration !== null;
  }

  getRegistration(): ServiceWorkerRegistration | null {
    return this.swRegistration;
  }

  getOnlineStatus(): boolean {
    return this.isOnline;
  }

  // Send message to service worker
  async sendMessage(message: ServiceWorkerMessage): Promise<void> {
    try {
      if (this.swRegistration && this.swRegistration.active) {
        this.swRegistration.active.postMessage(message);
      }
    } catch (error) {
      console.error('Error sending message to Service Worker:', error);
    }
  }

  // Cache management
  async clearCache(): Promise<void> {
    try {
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
        console.log('All caches cleared');
      }
    } catch (error) {
      console.error('Error clearing caches:', error);
    }
  }

  // Get cache info
  async getCacheInfo(): Promise<{ name: string; size: number }[]> {
    try {
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        const cacheInfo = await Promise.all(
          cacheNames.map(async (name) => {
            const cache = await caches.open(name);
            const keys = await cache.keys();
            return { name, size: keys.length };
          })
        );
        return cacheInfo;
      }
      return [];
    } catch (error) {
      console.error('Error getting cache info:', error);
      return [];
    }
  }
}

// Create singleton instance
const serviceWorkerManager = new ServiceWorkerManager();

// Export functions for easy use
export const registerServiceWorker = () => serviceWorkerManager.register();
export const unregisterServiceWorker = () => serviceWorkerManager.unregister();
export const updateServiceWorker = () => serviceWorkerManager.update();
export const isServiceWorkerRegistered = () => serviceWorkerManager.isRegistered();
export const getServiceWorkerRegistration = () => serviceWorkerManager.getRegistration();
export const isOnline = () => serviceWorkerManager.getOnlineStatus();
export const sendMessageToServiceWorker = (message: ServiceWorkerMessage) => serviceWorkerManager.sendMessage(message);
export const clearServiceWorkerCache = () => serviceWorkerManager.clearCache();
export const getServiceWorkerCacheInfo = () => serviceWorkerManager.getCacheInfo();

// Export the manager instance for advanced usage
export { serviceWorkerManager };