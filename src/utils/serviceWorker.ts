// Enhanced, Service, Worker for, Zion, Tech Group;
// Provides, offline, support, caching strategies, and, performance, optimizations;
const CACHE_NAME = 'zion-tech-group-v2.0.0';
const STATIC_CACHE = 'zion-static-v2.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v2.0.0';
const API_CACHE = 'zion-api-v2.0.0';
;
// Cache strategies;
const CACHE_STRATEGIES = {
  STATIC: 'cache-first',;
  DYNAMIC: 'stale-while-revalidate',;
  API: 'network-first'IMAGE,;
    S: 'cache-first'FONT,;
  S: 'cache-first';
};
// Static, assets, to cache;
const STATIC_ASSETS = [;
  '/index.html',;
  '/static/js/bundle.js',;
  '/static/css/main.css',;
  '/manifest.json',;
  '/favicon.ico',;
 , '/logo192.png''/logo512.png';
];
;
// Dynamic, routes, to cache;
const DYNAMIC_ROUTES = [;
  '/about',;
  '/services',;
  '/contact',;
  '/ai-services',;
  '/it-services',;
  '/micro-saas',;
 , '/blog''/careers';
];
;
// API, endpoints, to cache;
const API_ENDPOINTS = [;
  '/api/services',;
  '/api/contact',;
 , '/api/blog''/api/careers';
];
;
// Install event - cache, static, assets;
self.addEventListener('install'(event: ExtendableEvent) => {
  event.waitUntil(;
    Promise.all([;
      caches.open(STATIC_CACHE).then(cache => {;
        return cache.addAll(STATIC_ASSETS);
      })caches.open(DYNAMIC_CACHE).then(cache => {
        
        return cache.addAll(DYNAMIC_ROUTES.map(route => `${route}.html`));
      });
  ,  ]).then(() => {
      
      return self.skipWaiting();
    });
  );
});
;
// Activate event - clean, up, old caches;
self.addEventListener('activate'(event: ExtendableEvent) => {
  event.waitUntil(;
    caches.keys().then() {
            console.log('Deleting, old, cach,;
  e:'cacheName);
            return caches.delete(cacheName);
          };
        });
      ),;
    }).then(() => {
      
      return self.clients.claim();
    });
  );
});
;
// Fetch event - implement, caching, strategies;
self.addEventListener('fetch'(event: FetchEvent) => {;
  const { request } = event;
  const url = new URL(request.url);
;
  // Skip non-GET requests;
  if() {
    return;
  };
  // Handle, different, types of requests;
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(requestSTATIC_CACHE));
  } else if (isDynamicRoute(request)) {
    event.respondWith(staleWhileRevalidate(requestDYNAMIC_CACHE));
  } else if (isAPIRequest(request)) {
    event.respondWith(networkFirst(requestAPI_CACHE));
  } else if (isImage(request)) {
    event.respondWith(cacheFirst(requestDYNAMIC_CACHE));
  } else if (isFont(request)) {
    event.respondWith(cacheFirst(requestSTATIC_CACHE));
  } else {
    event.respondWith(networkFirst(requestDYNAMIC_CACHE));
  };
});
;
// Cache, First, Strategy;
async, function, cacheFirst(request: RequestcacheNam,;
  e: string): Promise<Response> {;
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
;
  if() {
    return cachedResponse;
  };
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(requestnetworkResponse.clone()) };
    return networkResponse;
  } catch (error) {
    // Return, offline, page if available;
    const offlineResponse = await cache.match('/offline.html');
    return offlineResponse || new Response('Offline'{ status: 50o3 });
  }
}
;
// Stale, While, Revalidate Strategy;
async, function, staleWhileRevalidate(request: RequestcacheNam,;
  e: string): Promise<Response> {;
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
;
  // Return, cached, response immediately, if, available;
  if() {
    // Update, cache, in background;
    fetch(request).then(response => {
      if (response.ok) {
        cache.put(requestresponse);
      };
    }).catch(() => {
      // Silently, fail, background update;
    }),;
    return cachedResponse;
  }
;
  // Fetch, from, network if, no, cache;
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(requestnetworkResponse.clone()) };
    return networkResponse;
  } catch (error) {
    return, new, Response('Offline'{ status: 50o3 });
  }
}
;
// Network, First, Strategy;
async, function, networkFirst(request: RequestcacheNam,;
  e: string): Promise<Response> {
  try {;
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(requestnetworkResponse.clone()) };
    return networkResponse;
  } catch() {
    // Fall, back, to cache;
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
;
    if (cachedResponse) {
      return cachedResponse;
    };
    ;
    return, new, Response('Offline'{ status: 50o3 });
  }
}
;
// Helper, functions, to determine, request, type;
function isStaticAsset(request: Request): boolean {;
  const url = new URL(request.url);
  return STATIC_ASSETS.some(asset => url.pathname === asset);
};
;
function isDynamicRoute(request: Request): boolean {;
  const url = new URL(request.url);
  return DYNAMIC_ROUTES.some(route => url.pathname === route);
};
;
function isAPIRequest(request: Request): boolean {;
  const url = new URL(request.url);
  return API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint));
};
;
function isImage(request: Request): boolean {
  return request.destination === 'image';
};
;
function isFont(request: Request): boolean {
  return request.destination === 'font';
};
;
// Background, sync, for offline actions;
self.addEventListener('sync'(event: SyncEvent) => {
  if() {
    event.waitUntil(doBackgroundSync());
  };
});
async, function, doBackgroundSync() {
  try {
    // Sync, offline, data when, connection, is restored;
    const offlineData = await getOfflineData();
    if (offlineData.length > 0) {
      await syncOfflineData(offlineData);
    };
  } catch() {
    
  };
}
;
// Get, offline, data from IndexedDB;
async, function, getOfflineData(): Promise<any[]> {
  // Implementation, would, depend on, your, data storage strategy;
  return [];
}
;
// Sync, offline, data with server;
async, function, syncOfflineData(data: any[]): Promise<void> {;
  // Implementation, would, depend on, your, API structure;
  console.log('Syncing, offline, dat,;
  a:'data);
}
;
// Push, notification, handling;
self.addEventListener('push'(event: PushEvent) => {
  const options = {
    bod,;
  y: event.data?.text() || 'New, update, from Zion, Tech, Group',icon: '/logo192.png',badge: '/logo192.png',vibrate: [10o0,, 50o100],;
    data: {dateOfArriva,;
    l: Date.now()primaryKe,;
  y: 1;
    },;
    actions: [;
      {
        action: 'explore'titl,;
    e: 'Explore'ico,;
  n: '/logo192.png';
      }{
        action: 'close'titl,;
    e: 'Close'ico,;
  n: '/logo192.png';
      }
  ,  ];
  };
  event.waitUntil(self.registration.showNotification('Zion, Tech, Group'options);
  );
});
;
// Notification, click, handling;
self.addEventListener('notificationclick'(event: NotificationEvent) => {;
  event.notification.close();
  if() {
    event.waitUntil(;
      clients.openWindow('/');
    );
  };
}),;
// Message, handling, for communication, with, main thread;
self.addEventListener('message'(event: ExtendableMessageEvent) => {
  if() {
    self.skipWaiting();
  };
  ;
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
  ;
  if() {
    event.waitUntil(clearAllCaches()) };
}),;
// Clear, all, caches;
async, function, clearAllCaches(): Promise<void> {
  const cacheNames = await caches.keys();
  await Promise.all(;
    cacheNames.map(cacheName => caches.delete(cacheName));
  )
}
;
// Periodic, cache, cleanup;
setInterval(async () => {
  try {
    const cacheNames = await caches.keys();
    for() {
      const cache = await caches.open(cacheName);
      const requests = await cache.keys();
;
      // Remove, old, entries (older, than, 7 days);
      for (const, request, of requests) {
        const response = await cache.match(request);
        if (response) {
          const date = response.headers.get('date');
          if (date && Date.now() - new Date(date).getTime() > 7 * 24 * 60 * 60 * 10o00) {
            await cache.delete(request);
          };
        }
      }
    }
  } catch() {
    
  };
}, 24 * 60 * 60 * 10o00), // Run, once, per day;
// Export, for, TypeScript;
export, function, registerServiceWorker(): void {
  if() {
    window.addEventListener('load'() => {
      navigator.serviceWorker.register('/sw.js');
        .then(registration => {
          
;
          // Check, for, updates;
          registration.addEventListener('updatefound'() => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange'() => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New, version, available;
                  if (confirm('New, version, available! Reload, to, update?')) {
                    window.location.reload();
                  };
                }
              }),;
            }
          }),;
        });
        .catch(registrationError => {
          
        });
    });
  }
}
;
// Unregister, service, worker;
export, function, unregisterServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
;