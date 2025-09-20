// Enhanced Service Worker for Zion Tech Group
// Provides offline support, caching strategies, and performance optimizations

const CACHE_NAME = 'zion-tech-group-v2.0.0';
const STATIC_CACHE = 'zion-static-v2.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v2.0.0';
const API_CACHE = 'zion-api-v2.0.0';

// Cache strategies
const CACHE_STRATEGIES = {
  STATIC: 'cache-first',
  DYNAMIC: 'stale-while-revalidate',
  API: 'network-first',
  IMAGES: 'cache-first',
  FONTS: 'cache-first'
};

// Static assets to cache
const STATIC_ASSETS = [
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png'
];

// Dynamic routes to cache
const DYNAMIC_ROUTES = [
  '/about',
  '/services',
  '/contact',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/blog',
  '/careers'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/services',
  '/api/contact',
  '/api/blog',
  '/api/careers'
];

// Install event - cache static assets
self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => {
        return cache.addAll(STATIC_ASSETS);
      }),
      caches.open(DYNAMIC_CACHE).then(cache => {
        console.log('Caching dynamic routes');
        return cache.addAll(DYNAMIC_ROUTES.map(route => `${route}.html`));
      })
    ]).then(() => {
      console.log('Service Worker installed successfully');
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== API_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event: FetchEvent) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(request));
  } else if (isAPIRequest(url.pathname)) {
    event.respondWith(networkFirst(request));
  } else if (isDynamicRoute(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

// Cache-first strategy for static assets
async function cacheFirst(request: Request): Promise<Response> {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache-first strategy failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network-first strategy for API requests
async function networkFirst(request: Request): Promise<Response> {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(API_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Stale-while-revalidate strategy for dynamic content
async function staleWhileRevalidate(request: Request): Promise<Response> {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      const cache = caches.open(DYNAMIC_CACHE);
      cache.then(c => c.put(request, networkResponse.clone()));
    }
    return networkResponse;
  }).catch(() => {
    return cachedResponse || new Response('Offline', { status: 503 });
  });

  return cachedResponse || fetchPromise;
}

// Helper functions
function isStaticAsset(pathname: string): boolean {
  return pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
}

function isAPIRequest(pathname: string): boolean {
  return pathname.startsWith('/api/');
}

function isDynamicRoute(pathname: string): boolean {
  return DYNAMIC_ROUTES.some(route => pathname.startsWith(route));
}

// Background sync for offline actions
self.addEventListener('sync', (event: SyncEvent) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync(): Promise<void> {
  try {
    // Handle offline form submissions, etc.
    console.log('Performing background sync');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notifications
self.addEventListener('push', (event: PushEvent) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/logo192.png',
      badge: '/logo192.png',
      vibrate: [100, 50, 100],
      data: data
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event: NotificationEvent) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

// Register service worker
export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

export default {
  registerServiceWorker
};