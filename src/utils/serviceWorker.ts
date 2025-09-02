<<<<<<< HEAD
=======
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

>>>>>>> origin/main
interface ServiceWorkerMessage {
  type: string;
  payload?: any;
}

<<<<<<< HEAD
interface ServiceWorkerUpdateEvent {
  type: 'UPDATE_AVAILABLE';
  payload: {
    version: string;
    timestamp: number;
  };
}

type EventListener = (event: ServiceWorkerUpdateEvent) => void;

export class ServiceWorkerManager {
  private swRegistration: ServiceWorkerRegistration | null = null;
  private _isUpdateAvailable = false;
  private listeners: EventListener[] = [];

  constructor() {
    this.init();
  }

  addEventListener(listener: EventListener) {
    this.listeners.push(listener);
  }

  removeEventListener(listener: EventListener) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  private emit(event: ServiceWorkerUpdateEvent) {
    this.listeners.forEach(listener => listener(event));
  }

  async init(): Promise<ServiceWorkerRegistration | null> {
=======
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
>>>>>>> origin/main
    try {
      if (!('serviceWorker' in navigator)) {
        console.log('Service Worker not supported');
        return null;
      }

<<<<<<< HEAD
      // Check for existing registration
=======
      // Check if already registered
>>>>>>> origin/main
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
<<<<<<< HEAD
    try {
      navigator.serviceWorker.addEventListener('message', (event) => {
        try {
          const message: ServiceWorkerMessage = event.data;
          console.log('Service Worker message received:', message);

          switch (message.type) {
            case 'UPDATE_AVAILABLE':
              this._isUpdateAvailable = true;
              this.emit({
                type: 'UPDATE_AVAILABLE',
                payload: message.payload
              });
              break;
            case 'CACHE_UPDATED':
              console.log('Cache updated:', message.payload);
              break;
            case 'OFFLINE_MODE':
              console.log('Offline mode activated');
              break;
            default:
              console.log('Unknown message type:', message.type);
          }
        } catch (error) {
          console.error('Error handling service worker message:', error);
        }
      });
    } catch (error) {
      console.error('Error setting up message handlers:', error);
    }
=======
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
>>>>>>> origin/main
  }

  private showUpdateNotification() {
    try {
<<<<<<< HEAD
      this._isUpdateAvailable = true;
      
=======
>>>>>>> origin/main
      // Create update notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      notification.innerHTML = `
        <div class="flex items-center space-x-3">
<<<<<<< HEAD
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div>
            <p class="font-medium">Update Available</p>
            <p class="text-sm opacity-90">A new version is available. Refresh to update.</p>
          </div>
          <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="mt-3 flex space-x-2">
          <button 
            onclick="window.location.reload()" 
            class="bg-white text-blue-500 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Update Now
          </button>
          <button 
            onclick="this.parentElement.parentElement.remove()" 
            class="text-white opacity-75 hover:opacity-100 px-3 py-1 rounded text-sm transition-opacity"
          >
            Later
=======
          <span>🔄 New version available</span>
          <button id="sw-update-btn" class="bg-white text-blue-500 px-3 py-1 rounded text-sm hover:bg-gray-100">
            Update
          </button>
          <button id="sw-dismiss-btn" class="text-white/80 hover:text-white">
            ✕
>>>>>>> origin/main
          </button>
        </div>
      `;

<<<<<<< HEAD
      // Add to page
      document.body.appendChild(notification);

      // Auto-remove after 30 seconds
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 30000);

=======
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
>>>>>>> origin/main
    } catch (error) {
      console.error('Error showing update notification:', error);
    }
  }

<<<<<<< HEAD
  async checkForUpdates(): Promise<boolean> {
    try {
      if (!this.swRegistration) {
        return false;
      }

      await this.swRegistration.update();
      return this._isUpdateAvailable;
    } catch (error) {
      console.error('Error checking for updates:', error);
      return false;
    }
  }

  async skipWaiting(): Promise<void> {
    try {
      if (!this.swRegistration || !this.swRegistration.waiting) {
        return;
      }

      // Send skip waiting message
      this.swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
      
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error('Error skipping waiting:', error);
    }
  }

  async unregister(): Promise<boolean> {
    try {
      if (!this.swRegistration) {
        return false;
      }

      const result = await this.swRegistration.unregister();
      this.swRegistration = null;
      this._isUpdateAvailable = false;
      
      console.log('Service Worker unregistered:', result);
      return result;
    } catch (error) {
      console.error('Error unregistering service worker:', error);
=======
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
>>>>>>> origin/main
      return false;
    }
  }

<<<<<<< HEAD
=======
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

>>>>>>> origin/main
  getRegistration(): ServiceWorkerRegistration | null {
    return this.swRegistration;
  }

<<<<<<< HEAD
  isUpdateAvailable(): boolean {
    return this._isUpdateAvailable;
  }
}

// Create and export a singleton instance
export const serviceWorkerManager = new ServiceWorkerManager();

// Export the registerServiceWorker function for backward compatibility
export const registerServiceWorker = () => {
  // The service worker is automatically registered when the ServiceWorkerManager is instantiated
  console.log('Service Worker registration initiated');
  return serviceWorkerManager;
};

// Export the class for testing or custom instances
export default ServiceWorkerManager;
=======
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
>>>>>>> origin/main
