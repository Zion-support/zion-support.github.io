// Service Worker Registration Utility;
export class ServiceWorkerManager {
  private swRegistration: ServiceWorkerRegistration | null = null;
  private updateAvailable = false;

  async register(): Promise<ServiceWorkerRegistration | null> {
    try {
      // Check if service worker is supported
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

      // Show notification
      document.body.appendChild(notification);

      // Auto-hide after 10 seconds
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
        console.log('Service Worker unregistered');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error unregistering Service Worker:', error);
      return false;
    }
  }

  isRegistered(): boolean {
    return this.swRegistration !== null;
  }

  hasUpdate(): boolean {
    return this.updateAvailable;
  }
}

// Create and export singleton instance
export const serviceWorkerManager = new ServiceWorkerManager();

// Export registration function for easy use
export const registerServiceWorker = () => serviceWorkerManager.register();

// Export unregistration function
export const unregisterServiceWorker = () => serviceWorkerManager.unregister();