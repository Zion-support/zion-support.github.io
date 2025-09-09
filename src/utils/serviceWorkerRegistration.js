// Service Worker Registration
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = '/sw.js';
      
      registerValidSW(swUrl);
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New content is available and the old content is still cached
              console.log('New content is available; please refresh.');
              showUpdateNotification();
            } else {
              // Everything is precached
              console.log('Content is cached for offline use.');
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

function showUpdateNotification() {
  // Create a notification to inform users about the update
  if ('Notification' in window && Notification.permission === 'granted') {
    const notification = new Notification('Zion Tech Group Update', {
      body: 'New content is available. Click to refresh.',
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      tag: 'update-notification',
      requireInteraction: true
    });

    notification.onclick = () => {
      window.location.reload();
      notification.close();
    };
  }
}

// Unregister service worker
export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

// Check for updates
export function checkForUpdates() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.update();
    });
  }
}

// Background sync for offline form submissions
export function registerBackgroundSync(tag = 'background-sync') {
  if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
    navigator.serviceWorker.ready.then((registration) => {
      return registration.sync.register(tag);
    }).catch((error) => {
      console.error('Background sync registration failed:', error);
    });
  }
}

// Store form data for offline submission
export function storeFormDataForOffline(formData) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.active.postMessage({
        type: 'STORE_FORM_DATA',
        formData: formData
      });
    });
  }
}

// Request notification permission
export function requestNotificationPermission() {
  if ('Notification' in window) {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted');
        }
      });
    }
  }
}

// Check if app is installed
export function isAppInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true;
}

// Install prompt handling
export function handleInstallPrompt() {
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button or prompt
    showInstallPrompt();
  });
  
  return deferredPrompt;
}

function showInstallPrompt() {
  // Create and show install prompt UI
  const installButton = document.createElement('button');
  installButton.textContent = 'Install App';
  installButton.className = 'fixed top-4 right-4 z-50 px-4 py-2 bg-zion-cyan text-white rounded-lg shadow-lg hover:bg-zion-cyan/80 transition-colors';
  installButton.onclick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
        installButton.remove();
      });
    }
  };
  
  document.body.appendChild(installButton);
}

// Network status monitoring
export function monitorNetworkStatus() {
  const updateOnlineStatus = () => {
    if (navigator.onLine) {
      document.body.classList.remove('offline');
      document.body.classList.add('online');
      console.log('Network connection restored');
    } else {
      document.body.classList.remove('online');
      document.body.classList.add('offline');
      console.log('Network connection lost');
    }
  };

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  
  // Initial check
  updateOnlineStatus();
}

// Cache management
export async function clearOldCaches() {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    const oldCaches = cacheNames.filter(cacheName => 
      cacheName !== 'zion-static-v1' && cacheName !== 'zion-dynamic-v1'
    );
    
    await Promise.all(
      oldCaches.map(cacheName => caches.delete(cacheName))
    );
    
    console.log('Old caches cleared');
  }
}

// Performance monitoring
export function monitorPerformance() {
  if ('PerformanceObserver' in window) {
    // Monitor navigation timing
    const navigationObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
          console.log('DOM content loaded:', entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart);
        }
      });
    });
    
    navigationObserver.observe({ entryTypes: ['navigation'] });
    
    // Monitor resource timing
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.initiatorType === 'img' && entry.duration > 1000) {
          console.warn('Slow image load:', entry.name, entry.duration);
        }
      });
    });
    
    resourceObserver.observe({ entryTypes: ['resource'] });
  }
}