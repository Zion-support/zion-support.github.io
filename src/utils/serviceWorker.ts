<<<<<<< HEAD
// Service Worker Registration Utility
export function registerServiceWorker(...args: anyanyanyanyanyanyanyanyany[]): any {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()         => {
      // Use development service worker in development mode
      const isDev = import.meta.env.DEV;
      const swUrl = isDev ? '/sw-dev.js' : '/sw.js';

<<<<<<< HEAD
      // // // console.log(`Registering service worker: ${swUrl} (${isDev ? 'dev' : 'prod'})`);
=======
      // // // // // // // console.log(`Registering service worker: anyanyanyanyanyanyanyanyany${swUrl} (${isDev ? 'dev' : 'prod'})`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

      navigator.serviceWorker
        .register(swUrl)
        .then((registration)          => {
<<<<<<< HEAD
          // // // console.log('SW registered: ', registration);
=======
          // // // // // // // console.log('SW registered: anyanyanyanyanyanyanyanyany', registration);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

          // Handle updates
          registration.addEventListener('updatefound', ()          => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available
<<<<<<< HEAD
                  // // // console.log('New content is available; please refresh.');

=======
                  // // // // // // // console.log('New content is available; please refresh.');
                }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
              });

          });
        })
        .catch((registrationError) => {
<<<<<<< HEAD
          // // // console.error('SW registration failed: ', registrationError);
=======
          // // // // // // // console.error('SW registration failed: anyanyanyanyanyanyanyanyany', registrationError);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        });
    });


export function unregisterServiceWorker(...args: any[]): any {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration)          => {
        registration.unregister();
      })
      .catch((error) => {
<<<<<<< HEAD
        // // // console.error(error.message);
=======
        // // // // // // // console.error(error.message);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      });
}}}}}}
=======
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
self.addEventListener('install', (event: anyanyanyanyanyanyanyanyanyExtendableEvent)          => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker installed successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker installation failed: anyanyanyanyanyanyanyanyany', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event: ExtendableEvent)          => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache: anyanyanyanyanyanyanyanyany', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(()          => {
      console.log('Service Worker activated successfully');
      return self.clients.claim();
    })
  );
});

// Fetch event - handle different caching strategies
self.addEventListener('fetch', (event: anyanyanyanyanyanyanyanyanyFetchEvent)          => {
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
});

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
self.addEventListener('sync', (event: anyanyanyanyanyanyanyanyanySyncEvent)          => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync(...args: any[]): any {
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
    console.error('Background sync failed: anyanyanyanyanyanyanyanyany', error);
  }
}

// Handle push notifications
self.addEventListener('push', (event: PushEvent)          => {
  console.log('Push notification received:', event);
  
  const options = {
    body: anyanyanyanyanyanyanyanyanyevent.data?.text() || 'New notification from Zion Tech Group',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
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
  
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event: NotificationEvent)          => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Handle message events from main thread
self.addEventListener('message', (event: anyanyanyanyanyanyanyanyanyExtendableMessageEvent)          => {
  console.log('Message received in service worker:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

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
