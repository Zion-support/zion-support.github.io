<<<<<<< HEAD
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

=======
      // // // // // // // console.log(`Registering service worker: ${swUrl} (${isDev ? 'dev' : 'prod'})`);
      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          // // // // // // // console.log('SW registered: ', registration);
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available
<<<<<<< HEAD
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

=======
                  // // // // // // // console.log('New content is available; please refresh.');
                }
              });
          });
        })
        .catch((registrationError) => {
          // // // // // // // console.error('SW registration failed: ', registrationError);
        });
    });
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
<<<<<<< HEAD
        console.error(error.message);
      });
  }
}

=======
        // // // // // // // console.error(error.message);
      });
  }
}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
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
<<<<<<< HEAD

// Fetch event - serve from cache when possible
=======
// Fetch event - handle different caching strategies
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
self.addEventListener('fetch', (event: FetchEvent) => {
  const { request } = event;
  const url = new URL(request.url);
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
<<<<<<< HEAD

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
=======
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request, CACHE_NAME));
  } else if (isImage(request) || isFont(request)) {
    event.respondWith(cacheFirst(request, CACHE_NAME));
  } else if (isAPIRequest(request)) {
    event.respondWith(networkFirst(request, CACHE_NAME));
  } else if (isDynamicRoute(request)) {
    event.respondWith(networkFirst(request, CACHE_NAME));
  } else {
    event.respondWith(networkFirst(request, CACHE_NAME));
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
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
<<<<<<< HEAD

// Background sync for offline actions
self.addEventListener('sync', (event: SyncEvent) => {
=======
// Cache First Strategy
async function cacheFirst(request: Request, cacheName: string): Promise<Response> {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    // Update cache in background
    fetch(request).then(response => {
      if (response.ok) {
        cache.put(request, response);
      }
    }).catch(() => {
      // Silently fail background update
    });
    return cachedResponse;
  }
  // Fetch from network if no cache
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return new Response('Offline', { status: 503 });
  }
}
// Network First Strategy
async function networkFirst(request: Request, cacheName: string): Promise<Response> {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Fall back to cache
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}
// Helper functions to determine request type
function isStaticAsset(request: Request): boolean {
  const url = new URL(request.url);
  return STATIC_ASSETS.some(asset => url.pathname === asset);
}
function isDynamicRoute(request: Request): boolean {
  const url = new URL(request.url);
  return DYNAMIC_ROUTES.some(route => url.pathname === route);
}
function isAPIRequest(request: Request): boolean {
  const url = new URL(request.url);
  return API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint));
}
function isImage(request: Request): boolean {
  return request.destination === 'image';
}
function isFont(request: Request): boolean {
  return request.destination === 'font';
}
// Background sync for offline actions
self.addEventListener('sync', (event: SyncEvent) => {
  console.log('Background sync triggered:', event.tag);
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});
async function doBackgroundSync() {
  try {
<<<<<<< HEAD
    // Implement background sync logic here
    console.log('Performing background sync');
=======
    // Perform background sync operations
    console.log('Performing background sync...');
    // Example: Sync offline data
    const offlineData = await getOfflineData();
    if (offlineData.length > 0) {
      await syncOfflineData(offlineData);
    }
    console.log('Background sync completed successfully');
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}
<<<<<<< HEAD

// Push notification handling
self.addEventListener('push', (event: PushEvent) => {
=======
// Handle push notifications
self.addEventListener('push', (event: PushEvent) => {
  console.log('Push notification received:', event);
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
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
<<<<<<< HEAD

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});
<<<<<<< HEAD

// Notification click handling
self.addEventListener('notificationclick', (event: NotificationEvent) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow('/')
  );
});
=======
// Handle notification clicks
self.addEventListener('notificationclick', (event: NotificationEvent) => {
  console.log('Notification clicked:', event);
  event.notification.close();
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
// Handle message events from main thread
self.addEventListener('message', (event: ExtendableMessageEvent) => {
  console.log('Message received in service worker:', event.data);
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});
// Utility functions for offline data management
async function getOfflineData(): Promise<any[]> {
  // Implementation for retrieving offline data
  return [];
}
async function syncOfflineData(data: any[]): Promise<void> {
  // Implementation for syncing offline data
  console.log('Syncing offline data:', data);
}
// Export for testing purposes
export {};
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
