<<<<<<< HEAD
<<<<<<< HEAD
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
=======
<<<<<<< HEAD
// Service Worker Registration Utility
export function registerServiceWorker(...args: anyanyanyanyanyanyanyanyanyanyanyanyany[]): any {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()             => {
      // Use development service worker in development mode
      const isDev = import.meta.env.DEV;
      const swUrl = isDev ? '/sw-dev.js' : '/sw.js';

<<<<<<< HEAD
      // // // console.log(`Registering service worker: ${swUrl} (${isDev ? 'dev' : 'prod'})`);
=======
      // // // // // // // console.log(`Registering service worker: anyanyanyanyanyanyanyanyanyanyanyanyany${swUrl} (${isDev ? 'dev' : 'prod'})`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

      navigator.serviceWorker
        .register(swUrl)
        .then((registration)              => {
<<<<<<< HEAD
          // // // console.log('SW registered: ', registration);
=======
          // // // // // // // console.log('SW registered: anyanyanyanyanyanyanyanyanyanyanyanyany', registration);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

          // Handle updates
          registration.addEventListener('updatefound', ()              => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
<<<<<<< HEAD
          console.error('SW registration failed: ', registrationError);
=======
<<<<<<< HEAD
          // // // console.error('SW registration failed: ', registrationError);
=======
          // // // // // // // console.error('SW registration failed: anyanyanyanyanyanyanyanyanyanyanyanyany', registrationError);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
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
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
        });
      })
      .catch((registrationError) => {
        console.error('SW registration failed: ', registrationError);
      });
  }
}

export function unregisterServiceWorker(...args: any[]): any {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration)              => {
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
self.addEventListener('install', (event: anyanyanyanyanyanyanyanyanyanyanyanyanyExtendableEvent)              => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
<<<<<<< HEAD
      .then(() => {
        console.log('Service Worker installed successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker installation failed: anyanyanyanyanyanyanyanyanyanyanyanyany', error);
      })
=======
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event: ExtendableEvent)              => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache: anyanyanyanyanyanyanyanyanyanyanyanyany', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
<<<<<<< HEAD
    }).then(()              => {
      console.log('Service Worker activated successfully');
      return self.clients.claim();
=======
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    })
  );
});

// Fetch event - handle different caching strategies
self.addEventListener('fetch', (event: anyanyanyanyanyanyanyanyanyanyanyanyanyFetchEvent)              => {
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

<<<<<<< HEAD
// Helper functions
=======
// Cache First Strategy
async function cacheFirst(request: Request, cacheName: string): Promise<any> {
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
async function networkFirst(request: Request, cacheName: string): Promise<any> {
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
function isStaticAsset(request: Request): boolean {
  const url = new URL(request.url);
  return STATIC_ASSETS.some(asset => url.pathname === asset);
}

function isImage(request: Request): boolean {
  return request.destination === 'image';
}

function isFont(request: Request): boolean {
  return request.destination === 'font';
}

<<<<<<< HEAD
function isAPIRequest(request: Request): boolean {
  const url = new URL(request.url);
  return API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint));
}

function isDynamicRoute(request: Request): boolean {
  const url = new URL(request.url);
  return DYNAMIC_ROUTES.some(route => url.pathname.startsWith(route));
}

// Cache strategies
async function cacheFirst(request: Request, cacheName: string): Promise<Response> {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
=======
// Background sync for offline actions
self.addEventListener('sync', (event: anyanyanyanyanyanyanyanyanyanyanyanyanySyncEvent)              => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a fallback response if both cache and network fail
    return new Response('Offline content not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
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
    
<<<<<<< HEAD
<<<<<<< HEAD
    // Return offline page if available
    const offlineResponse = await cache.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }
    throw error;
  }
}
=======
    console.log('Background sync completed successfully');
  } catch (error) {
    console.error('Background sync failed: anyanyanyanyanyanyanyanyanyanyanyanyany', error);
  }
}

// Handle push notifications
self.addEventListener('push', (event: PushEvent)              => {
  console.log('Push notification received:', event);
  
  const options = {
    body: anyanyanyanyanyanyanyanyanyanyanyanyanyevent.data?.text() || 'New notification from Zion Tech Group',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
=======
    // Return a fallback response if both network and cache fail
    return new Response('Content not available offline', {
      status: 503,
      statusText: 'Service Unavailable'
    });
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
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});
async function doBackgroundSync() {
  try {
    // Perform background sync operations
    console.log('Performing background sync...');
    // Example: Sync offline data
    const offlineData = await getOfflineData();
    if (offlineData.length > 0) {
      await syncOfflineData(offlineData);
    }
    console.log('Background sync completed successfully');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}
// Handle push notifications
self.addEventListener('push', (event: PushEvent) => {
  console.log('Push notification received:', event);
  const options = {
    body: event.data ? event.data.text() : 'New notification from Zion Tech Group',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
<<<<<<< HEAD
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-192x192.png'
      }
    ]
  };
  
=======
    }
  };
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});
<<<<<<< HEAD

// Handle notification clicks
self.addEventListener('notificationclick', (event: NotificationEvent)              => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
=======
// Handle notification clicks
self.addEventListener('notificationclick', (event: NotificationEvent) => {
  console.log('Notification clicked:', event);
  event.notification.close();
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
<<<<<<< HEAD

// Handle message events from main thread
self.addEventListener('message', (event: anyanyanyanyanyanyanyanyanyanyanyanyanyExtendableMessageEvent)              => {
  console.log('Message received in service worker:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
=======
// Handle message events from main thread
self.addEventListener('message', (event: ExtendableMessageEvent) => {
  console.log('Message received in service worker:', event.data);
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});
<<<<<<< HEAD

// Utility functions for offline data management
async function getOfflineData(): Promise<any> {
  // Implementation for retrieving offline data
  return [];
}

async function syncOfflineData(data: any[]): Promise<any> {
  // Implementation for syncing offline data
  console.log('Syncing offline data:', data);
}

// Export for testing purposes
export {};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
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
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
