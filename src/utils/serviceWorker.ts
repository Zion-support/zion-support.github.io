// Service Worker Registration Utility
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Use development service worker in development mode
      const isDev = import.meta.env.DEV;
      const swUrl = isDev ? '/sw-dev.js' : '/sw.js';

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
    });
  }
}

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

// Service Worker for Zion Tech Group
// Handles caching, offline functionality, and performance optimization

const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/og-image.jpg'
];

const DYNAMIC_ROUTES = [
  '/about',
  '/services',
  '/contact',
  '/careers',
  '/blog',
  '/case-studies'
];

const API_ENDPOINTS = [
  '/api/',
  '/graphql'
];

// Install event - cache static assets
self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event: FetchEvent) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle static assets
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request);
      })
    );
    return;
  }

  // Handle dynamic routes
  if (DYNAMIC_ROUTES.some(route => url.pathname.startsWith(route))) {
    event.respondWith(
      caches.match(request).then(response => {
        if (response) {
          // Return cached response and update cache in background
          fetch(request).then(freshResponse => {
            if (freshResponse.ok) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(request, freshResponse);
              });
            }
          });
          return response;
        }
        return fetch(request);
      })
    );
    return;
  }

  // Handle API requests
  if (API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint))) {
    event.respondWith(
      fetch(request).then(response => {
        // Cache successful API responses
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
        }
        return response;
      }).catch(() => {
        // Return cached response if available
        return caches.match(request);
      })
    );
    return;
  }

  // Default behavior for other requests
  event.respondWith(fetch(request));
});

// Background sync for offline actions
self.addEventListener('sync', (event: SyncEvent) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Implement background sync logic here
    console.log('Performing background sync');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event: PushEvent) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification from Zion Tech Group',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event: NotificationEvent) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow('/')
  );
});
