// Service Worker Registration and Management
export function registerServiceWorker(swUrl: string, isDev: boolean = false) {
  if ('serviceWorker' in navigator) {
    console.log(`Registering service worker: ${swUrl} (${isDev ? 'dev' : 'prod'})`);
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('SW registered: ', registration);
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available
                console.log('New content is available; please refresh.');
              }
            });
          }
        });
      })
      .catch((registrationError) => {
        console.error('SW registration failed: ', registrationError);
      });
  }
}

// Service Worker Update Management
export function checkForUpdates() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then((registration) => {
      if (registration) {
        registration.update();
      }
    });
  }
}

// Service Worker Unregistration
export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });
  }
}

// Service Worker Message Handling
export function setupServiceWorkerMessaging() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      const { type, payload } = event.data;
      
      switch (type) {
        case 'CACHE_UPDATED':
          console.log('Cache updated:', payload);
          break;
        case 'OFFLINE_READY':
          console.log('App is ready for offline use');
          break;
        case 'UPDATE_AVAILABLE':
          console.log('Update available, refreshing...');
          window.location.reload();
          break;
        default:
          console.log('Unknown message from service worker:', event.data);
      }
    });
  }
}

// Service Worker Installation Prompt
export function showUpdatePrompt() {
  if ('serviceWorker' in navigator) {
    const registration = navigator.serviceWorker.getRegistration();
    if (registration) {
      // Show update notification to user
      const updateNotification = document.createElement('div');
      updateNotification.innerHTML = `
        <div style="position: fixed; top: 20px; right: 20px; background: #4CAF50; color: white; padding: 15px; border-radius: 5px; z-index: 1000;">
          <p>New version available!</p>
          <button onclick="window.location.reload()" style="background: white; color: #4CAF50; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
            Update Now
          </button>
        </div>
      `;
      document.body.appendChild(updateNotification);
    }
  }
}

// Service Worker Cache Management
export function clearServiceWorkerCache() {
  if ('serviceWorker' in navigator) {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName);
      });
    });
  }
}

// Service Worker Network Status
export function isOnline(): boolean {
  return navigator.onLine;
}

// Service Worker Offline Handling
export function handleOfflineStatus() {
  window.addEventListener('online', () => {
    console.log('Connection restored');
    // Sync any pending data
  });

  window.addEventListener('offline', () => {
    console.log('Connection lost');
    // Show offline indicator
  });
}

// Service Worker Background Sync
export function registerBackgroundSync(tag: string) {
  if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
    navigator.serviceWorker.ready.then((registration) => {
      return registration.sync.register(tag);
    });
  }
}

// Service Worker Push Notifications
export function requestNotificationPermission(): Promise<NotificationPermission> {
  if ('Notification' in window) {
    return Notification.requestPermission();
  }
  return Promise.resolve('denied');
}

// Service Worker Push Subscription
export function subscribeToPushNotifications(): Promise<PushSubscription | null> {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    return navigator.serviceWorker.ready.then((registration) => {
      return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.REACT_APP_VAPID_PUBLIC_KEY
      });
    });
  }
  return Promise.resolve(null);
}

// Service Worker Performance Monitoring
export function monitorServiceWorkerPerformance() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data.type === 'PERFORMANCE_METRICS') {
        const metrics = event.data.payload;
        console.log('Service Worker Performance:', metrics);
        // Send metrics to analytics
      }
    });
  }
}

// Service Worker Error Handling
export function handleServiceWorkerErrors() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('error', (event) => {
      console.error('Service Worker Error:', event);
      // Report error to monitoring service
    });

    navigator.serviceWorker.addEventListener('unhandledrejection', (event) => {
      console.error('Service Worker Unhandled Rejection:', event);
      // Report error to monitoring service
    });
  }
}

// Initialize Service Worker
export function initializeServiceWorker() {
  if (process.env.NODE_ENV === 'production') {
    registerServiceWorker('/sw.js', false);
    setupServiceWorkerMessaging();
    handleOfflineStatus();
    handleServiceWorkerErrors();
    monitorServiceWorkerPerformance();
  }
}