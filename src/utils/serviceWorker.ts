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
  '/',
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
        console.log('Caching static assets');
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
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && 
                cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== API_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      self.clients.claim()
    ]).then(() => {
      console.log('Service Worker activated');
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event: FetchEvent) => {
  const request = event.request;
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isDynamicRoute(request)) {
    event.respondWith(handleDynamicRoute(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else if (isImage(request)) {
    event.respondWith(handleImage(request));
  } else if (isFont(request)) {
    event.respondWith(handleFont(request));
  } else {
    event.respondWith(handleGenericRequest(request));
  }
});

// Helper functions to determine request type
function isStaticAsset(request: Request): boolean {
  const url = new URL(request.url);
  return STATIC_ASSETS.some(asset => url.pathname === asset);
}

function isDynamicRoute(request: Request): boolean {
  const url = new URL(request.url);
  return DYNAMIC_ROUTES.some(route => url.pathname.startsWith(route));
}

function isAPIRequest(request: Request): boolean {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/');
}

function isImage(request: Request): boolean {
  return request.destination === 'image';
}

function isFont(request: Request): boolean {
  return request.destination === 'font';
}

// Caching strategy implementations
async function handleStaticAsset(request: Request): Promise<Response> {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Error handling static asset:', error);
    return new Response('Offline - Static asset not available', { status: 503 });
  }
}

async function handleDynamicRoute(request: Request): Promise<Response> {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    // Try network first, fallback to cache
    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
        return networkResponse;
      }
    } catch (networkError) {
      console.log('Network failed, trying cache');
    }
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('Offline - Page not available', { status: 503 });
  } catch (error) {
    console.error('Error handling dynamic route:', error);
    return new Response('Offline - Dynamic route not available', { status: 503 });
  }
}

async function handleAPIRequest(request: Request): Promise<Response> {
  try {
    const cache = await caches.open(API_CACHE);
    
    // Network first strategy for API calls
    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
        return networkResponse;
      }
    } catch (networkError) {
      console.log('API network failed, trying cache');
    }
    
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('Offline - API not available', { status: 503 });
  } catch (error) {
    console.error('Error handling API request:', error);
    return new Response('Offline - API not available', { status: 503 });
  }
}

async function handleImage(request: Request): Promise<Response> {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Error handling image:', error);
    return new Response('Image not available', { status: 404 });
  }
}

async function handleFont(request: Request): Promise<Response> {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Error handling font:', error);
    return new Response('Font not available', { status: 404 });
  }
}

async function handleGenericRequest(request: Request): Promise<Response> {
  try {
    const networkResponse = await fetch(request);
    return networkResponse;
  } catch (error) {
    console.error('Error handling generic request:', error);
    return new Response('Request failed', { status: 503 });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event: SyncEvent) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync(): Promise<void> {
  try {
    console.log('Performing background sync');
    // Implement background sync logic here
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event: PushEvent) => {
  if (!event.data) {
    return;
  }

  const data = event.data.json();
  const options: NotificationOptions = {
    body: data.body,
    icon: '/logo192.png',
    badge: '/logo192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: data.primaryKey
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/logo192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/logo192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event: NotificationEvent) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Register service worker
export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, refresh the page
                  if (confirm('New content is available. Refresh the page?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

// Unregister service worker
export function unregisterServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => {
        registration.unregister();
      });
    });
  }
}