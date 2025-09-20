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
  if (request.method === "GET") {
    if (STATIC_ASSETS.some(asset => url.pathname === asset)) {
      event.respondWith(handleStaticRequest(request));
    } else if (DYNAMIC_ROUTES.some(route => url.pathname.startsWith(route))) {
      event.respondWith(handleDynamicRequest(request));
    } else if (API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint))) {
      event.respondWith(handleApiRequest(request));
    } else if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
      event.respondWith(handleImageRequest(request));
    } else if (url.pathname.match(/\.(woff|woff2|ttf|eot)$/)) {
      event.respondWith(handleFontRequest(request));
    }
  }
});

// Handle static assets
async function handleStaticRequest(request: Request): Promise<Response> {
  const cache = await caches.open(CACHE_NAMES.STATIC);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  if (networkResponse.ok) {
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Handle dynamic routes
async function handleDynamicRequest(request: Request): Promise<Response> {
  const cache = await caches.open(CACHE_NAMES.DYNAMIC);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Return cached version immediately, then update in background
    fetch(request).then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
    });
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  if (networkResponse.ok) {
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Handle API requests
async function handleApiRequest(request: Request): Promise<Response> {
  const cache = await caches.open(CACHE_NAMES.API);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Handle image requests
async function handleImageRequest(request: Request): Promise<Response> {
  const cache = await caches.open(CACHE_NAMES.STATIC);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  if (networkResponse.ok) {
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Handle font requests
async function handleFontRequest(request: Request): Promise<Response> {
  const cache = await caches.open(CACHE_NAMES.STATIC);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  if (networkResponse.ok) {
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Background sync for offline actions
self.addEventListener("sync", (event: SyncEvent) => {
  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync(): Promise<void> {
  // Implement background sync logic here
  console.log("Background sync triggered");
}

// Push notifications
self.addEventListener("push", (event: PushEvent) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: "/icon-192x192.png",
      badge: "/badge-72x72.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: "explore",
          title: "View",
          icon: "/icon-192x192.png"
        },
        {
          action: "close",
          title: "Close",
          icon: "/icon-192x192.png"
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

// Register service worker
export function registerServiceWorker(): void {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  }
}

// Unregister service worker
export function unregisterServiceWorker(): void {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}