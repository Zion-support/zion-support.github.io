// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1'
const STATIC_CACHE = 'zion-static-v1'
const DYNAMIC_CACHE = 'zion-dynamic-v1'

// Static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/services',
  '/solutions',
  '/manifest.json',
  '/favicon.ico',
  '/icon.svg',
  '/apple-touch-icon.png'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('Static assets cached successfully')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE
            })
            .map((cacheName) => {
              console.log('Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            })
        )
      })
      .then(() => {
        console.log('Service Worker activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }
  
  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return
  }
  
  // Handle different types of requests
  if (request.destination === 'document') {
    // HTML pages - cache first, then network
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // Update cache in background
            fetch(request)
              .then((networkResponse) => {
                if (networkResponse.status === 200) {
                  const responseClone = networkResponse.clone()
                  caches.open(DYNAMIC_CACHE)
                    .then((cache) => cache.put(request, responseClone))
                }
              })
              .catch(() => {
                // Network failed, use cached version
              })
            
            return cachedResponse
          }
          
          // Not in cache, fetch from network
          return fetch(request)
            .then((networkResponse) => {
              if (networkResponse.status === 200) {
                const responseClone = networkResponse.clone()
                caches.open(DYNAMIC_CACHE)
                  .then((cache) => cache.put(request, responseClone))
              }
              return networkResponse
            })
            .catch(() => {
              // Network failed, return offline page if available
              return caches.match('/offline.html')
            })
        })
    )
  } else if (request.destination === 'image' || request.destination === 'style' || request.destination === 'script') {
    // Static assets - cache first
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse
          }
          
          return fetch(request)
            .then((networkResponse) => {
              if (networkResponse.status === 200) {
                const responseClone = networkResponse.clone()
                const cacheName = request.destination === 'image' ? STATIC_CACHE : DYNAMIC_CACHE
                caches.open(cacheName)
                  .then((cache) => cache.put(request, responseClone))
              }
              return networkResponse
            })
        })
    )
  } else if (url.pathname.startsWith('/api/')) {
    // API requests - network first
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone()
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone))
          }
          return networkResponse
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request)
        })
    )
  }
})

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag)
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle offline actions when connection is restored
      handleBackgroundSync()
    )
  }
})

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Push notification received:', event)
  
  const options = {
    body: event.data ? event.data.text() : 'New update available',
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
        title: 'View Details',
        icon: '/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-192x192.png'
      }
    ]
  }
  
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event)
  
  event.notification.close()
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Helper function for background sync
async function handleBackgroundSync() {
  try {
    // Handle any pending offline actions
    console.log('Processing background sync...')
    
    // Example: sync form submissions, analytics data, etc.
    const pendingActions = await getPendingActions()
    
    for (const action of pendingActions) {
      try {
        await processAction(action)
        await removePendingAction(action.id)
      } catch (error) {
        console.error('Failed to process action:', error)
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}

// Helper functions (implement based on your needs)
async function getPendingActions() {
  // Return pending actions from IndexedDB or other storage
  return []
}

async function processAction(action) {
  // Process the action (e.g., send to server)
  console.log('Processing action:', action)
}

async function removePendingAction(actionId) {
  // Remove processed action from storage
  console.log('Removing action:', actionId)
}

// Message handling from main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker received message:', event.data)
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME })
  }
})

console.log('Service Worker loaded successfully')