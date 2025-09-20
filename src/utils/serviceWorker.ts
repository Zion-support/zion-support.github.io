const CACHE_NAMES = {
  STATIC: "static-cache-v1",
  DYNAMIC: "dynamic-cache-v1",
  API: "api-cache-v1"
};

const CACHE_STRATEGIES = {
  STATIC: "cache-first",
  DYNAMIC: "stale-while-revalidate",
  API: "network-first",
  IMAGES: "cache-first",
  FONTS: "cache-first"
};

// Static assets to cache
const STATIC_ASSETS = [
  "/index.html",
  "/static/js/bundle.js",
  "/static/css/main.css",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/logo512.png"
];

// Dynamic routes to cache
const DYNAMIC_ROUTES = [
  "/about",
  "/services",
  "/contact",
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/blog",
  "/careers"
];

// API endpoints to cache
const API_ENDPOINTS = [
  "/api/services",
  "/api/contact",
  "/api/blog",
  "/api/careers"
];

// Install event - cache static assets
self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAMES.STATIC).then(cache => {
        return cache.addAll(STATIC_ASSETS);
      }),
      caches.open(CACHE_NAMES.DYNAMIC).then(cache => {
        return cache.addAll(DYNAMIC_ROUTES.map(route => `${route}.html`));
      })
    ]).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!Object.values(CACHE_NAMES).includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener("fetch", (event: FetchEvent) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request, CACHE_NAMES.STATIC));
  } else if (isAPIRequest(request)) {
    event.respondWith(networkFirst(request, CACHE_NAMES.API));
  } else if (isImageRequest(request)) {
    event.respondWith(cacheFirst(request, CACHE_NAMES.STATIC));
  } else {
    event.respondWith(staleWhileRevalidate(request, CACHE_NAMES.DYNAMIC));
  }
});

// Helper functions to determine request types
function isStaticAsset(request: Request): boolean {
  return request.destination === "script" ||
         request.destination === "style" ||
         request.destination === "manifest" ||
         STATIC_ASSETS.some(asset => request.url.includes(asset));
}

function isAPIRequest(request: Request): boolean {
  return request.url.includes("/api/") ||
         API_ENDPOINTS.some(endpoint => request.url.includes(endpoint));
}

function isImageRequest(request: Request): boolean {
  return request.destination === "image" ||
         /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(request.url);
}

// Cache strategies
async function cacheFirst(request: Request, cacheName: string): Promise<Response> {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
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
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

async function staleWhileRevalidate(request: Request, cacheName: string): Promise<Response> {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      const cache = caches.open(cacheName);
      cache.then(c => c.put(request, networkResponse.clone()));
    }
    return networkResponse;
  });

  return cachedResponse || fetchPromise;
}

// Background sync for offline actions
self.addEventListener("sync", (event: SyncEvent) => {
  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync(): Promise<void> {
  // Handle offline actions when connection is restored
  try {
    const pendingActions = await getPendingActions();
    for (const action of pendingActions) {
      await processPendingAction(action);
    }
  } catch (error) {
    console.error("Background sync failed:", error);
  }
}

async function getPendingActions(): Promise<any[]> {
  // Retrieve pending actions from IndexedDB or localStorage
  return [];
}

async function processPendingAction(action: any): Promise<void> {
  // Process individual pending action
  console.log("Processing pending action:", action);
}

// Push notifications
self.addEventListener("push", (event: PushEvent) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: "/logo192.png",
      badge: "/logo192.png",
      vibrate: [100, 50, 100],
      data: data.data || {},
      actions: [
        {
          action: "explore",
          title: "View Details",
          icon: "/logo192.png"
        },
        {
          action: "close",
          title: "Close",
          icon: "/logo192.png"
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener("notificationclick", (event: NotificationEvent) => {
  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(
      clients.openWindow("/")
    );
  }
});

// Message handler for communication with main thread
self.addEventListener("message", (event: MessageEvent) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Utility functions for cache management
export const cacheUtils = {
  clearAllCaches: async () => {
    const cacheNames = await caches.keys();
    return Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
  },

  getCacheSize: async (cacheName: string) => {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    return keys.length;
  },

  addToCache: async (cacheName: string, request: Request, response: Response) => {
    const cache = await caches.open(cacheName);
    return cache.put(request, response);
  }
};

export default {
  CACHE_NAMES,
  CACHE_STRATEGIES,
  cacheUtils
};