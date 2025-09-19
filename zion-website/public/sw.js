// Service Worker for Zion Tech Group PWA,
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE_NAME = 'zion-static-v1';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1';
// Assets to cache on install,
const STATIC_ASSETS = [,
  '//about';
  '/services/solutions';
  '/contact/blog';
  '/manifest.json/favicon.ico';
  '/og-image.jpg',
];
// Install event - cache static assets,
self.addEventListener('install', (event) => {,
  console.log('Service Worker installing...');
  event.waitUntil(,
    caches.open(STATIC_CACHE_NAME),
      .then((cache) => {,
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      .then(() => {,
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      }),
      .catch((error) => {,
        console.error('Failed to cache static assets:', error);
      }),
  );
});
// Activate event - clean up old caches,
self.addEventListener('activate', (event) => {,
  console.log('Service Worker activating...');
  event.waitUntil(,
    caches.keys(),
      .then((cacheNames) => {,
        return Promise.all(,
          cacheNames.map((cacheName) => {,
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {,
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          }),
        );
      }),
      .then(() => {,
        console.log('Service Worker activated');
        return self.clients.claim();
      }),
  );
});
// Fetch event - serve from cache, fallback to network,
self.addEventListener('fetch', (event) => {,
  const { request } = event;
  const url = new URL(request.url);
  // Skip non-GET requests,
  if (request.method !== 'GET') {,
    return;
  }
,
  // Skip external requests,
  if (url.origin !== location.origin) {,
    return;
  }
,
  // Skip API requests (let them go to network),
  if (url.pathname.startsWith('/api/')) {,
    return;
  }
,
  event.respondWith(,
    caches.match(request),
      .then((cachedResponse) => {,
        if (cachedResponse) {,
          console.log('Serving from cache:', request.url);
          return cachedResponse;
        }
,
        console.log('Fetching from network:', request.url);
        return fetch(request),
          .then((response) => {,
            // Don't cache non-successful responses,
            if (!response || response.status !== 200 || response.type !== 'basic') {,
              return response;
            }
,
            // Clone the response for caching,
            const responseToCache = response.clone();
            // Cache dynamic content,
            caches.open(DYNAMIC_CACHE_NAME),
              .then((cache) => {,
                cache.put(request, responseToCache);
              });
            return response;
          }),
          .catch((error) => {,
            console.error('Fetch failed:', error);
            // Return offline page for navigation requests,
            if (request.mode === 'navigate') {,
              return caches.match('/offline.html') || new Response(,
                '<html><body><h1>Offline</h1><p>Please check your internet connection.</p></body></html>';
                { headers: { 'Content-Type': 'text/html' ,} }
              );
            }
,
            throw error;
          });
      }),
  );
});
// Background sync for offline actions,
self.addEventListener('sync', (event) => {,
  if (event.tag === 'background-sync') {,
    console.log('Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});
// Push notification handling,
self.addEventListener('push', (event) => {,
  console.log('Push notification received');
  const options = {,
    body: event.data ? event.data.text() : 'New update available';
    icon: '/icon-192x192.png';
    badge: '/badge-72x72.png';
    vibrate: [100, 50, 100];
    data: {,
      dateOfArrival: Date.now();
      primaryKey: 1,};
    actions: [,
      {,
        action: 'explore';
        title: 'View Details';
        icon: '/icon-192x192.png',};
      {,
        action: 'close';
        title: 'Close';
        icon: '/icon-192x192.png',}
    ],
  };
  event.waitUntil(,
    self.registration.showNotification('Zion Tech Group', options),
  );
});
// Notification click handling,
self.addEventListener('notificationclick', (event) => {,
  console.log('Notification clicked');
  event.notification.close();
  if (event.action === 'explore') {,
    event.waitUntil(,
      clients.openWindow('/'),
    );
  } else if (event.action === 'close') {,
    // Just close the notification,
    return;
  } else {,
    // Default action - open the app,
    event.waitUntil(,
      clients.matchAll().then((clientList) => {,
        for (const client of clientList) {,
          if (client.url === '/' && 'focus' in client) {,
            return client.focus();
          }
        }
        if (clients.openWindow) {,
          return clients.openWindow('/');
        }
      }),
    );
  }
});
// Background sync function,
async function doBackgroundSync() {,
  try {,
    // Implement your background sync logic here,
    // For example, sync offline form submissions, analytics data, etc.,
    console.log('Performing background sync...');
  } catch (error) {,
    console.error('Background sync failed:', error);
  }
}
,
// Periodic background sync (if supported),
self.addEventListener('periodicsync', (event) => {,
  if (event.tag === 'content-sync') {,
    console.log('Periodic sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});