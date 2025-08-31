export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates
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

// Fetch event - handle different caching strategies
self.addEventListener('fetch', (event: FetchEvent) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
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

// Helper functions
function isStaticAsset(request: Request): boolean {
  return STATIC_ASSETS.some(asset => request.url.includes(asset));
}

function isImage(request: Request): boolean {
  return request.destination === 'image';
}

function isFont(request: Request): boolean {
  return request.destination === 'font';
}

function isAPIRequest(request: Request): boolean {
  return API_ENDPOINTS.some(endpoint => request.url.includes(endpoint));
}

function isDynamicRoute(request: Request): boolean {
  return DYNAMIC_ROUTES.some(route => request.url.includes(route));
}

// Caching strategies
async function cacheFirst(request: Request, cacheName: string): Promise<Response> {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return offline page if available
    const offlineResponse = await cache.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }
    throw error;
  }
}

async function networkFirst(request: Request, cacheName: string): Promise<Response> {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page if available
    const offlineResponse = await cache.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }
    throw error;
  }
}
// Handle push notifications
self.addEventListener('push', (event: PushEvent) => {
  console.log('Push notification received:', event);
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
