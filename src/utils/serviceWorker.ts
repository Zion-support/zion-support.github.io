// Service Worker Registration for Zion Tech Group
// Handles service worker registration and updates

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const isDev = process.env.NODE_ENV === 'development';
    const swUrl = isDev ? '/sw.js' : '/sw.js';

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
      .then(() => {
        console.log('Service Worker installed successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker installation failed:', error);
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
    }).then(() => {
      console.log('Service Worker activated successfully');
      return self.clients.claim();
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
  if (STATIC_ASSETS.includes(url.pathname)) {
    // Cache-first strategy for static assets
    event.respondWith(
      caches.match(request)
        .then(response => {
          return response || fetch(request);
        })
    );
  } else if (DYNAMIC_ROUTES.some(route => url.pathname.startsWith(route))) {
    // Network-first strategy for dynamic routes
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  } else if (API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint))) {
    // Network-only strategy for API calls
    event.respondWith(fetch(request));
  } else {
    // Default: try network first, fallback to cache
    event.respondWith(
      fetch(request)
        .catch(() => {
          return caches.match(request);
        })
    );
  }
});

// Background sync for offline actions
self.addEventListener('sync', (event: SyncEvent) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      console.log('Background sync triggered')
    );
  }
});

// Push notifications
self.addEventListener('push', (event: PushEvent) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification from Zion Tech Group',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/favicon.ico'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon.ico'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event: NotificationEvent) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
