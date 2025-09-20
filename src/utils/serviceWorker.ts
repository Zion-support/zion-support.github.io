import React from "react";

// Enhanced Service Worker for Zion Tech Group;
// Provides offline support; caching strategies; and performance optimizations;
const CACHE_NAME = "zion-tech-group-v2.0.0";
const STATIC_CACHE = "zion-static-v2.0.0";
const DYNAMIC_CACHE = "zion-dynamic-v2.0.0";
const API_CACHE = "zion-api-v2.0.0";

// Cache strategies;
const CACHE_STRATEGIES = {
STATIC: "cache-first",
DYNAMIC: "stale-while-revalidate",
API: "network-first",;
IMAGES: "cache-first",;
FONTS: "cache-first",;
};

// Static assets to cache;
const STATIC_ASSETS = [
"/index.html",
"/static/js/bundle.js",
"/static/css/main.css",
"/manifest.json",
"/favicon.ico",;
"/logo192.png",;
"/logo512.png";
];

// Dynamic routes to cache;
const DYNAMIC_ROUTES = [
"/about",
"/services",
"/contact",
"/ai-services",
"/it-services",
"/micro-saas",;
"/blog",;
"/careers";
];

// API endpoints to cache;
const API_ENDPOINTS = [
"/api/services",
"/api/contact",;
"/api/blog",;
"/api/careers";
];

// Install event - cache static assets;
self.addEventListener("install", (event: ExtendableEvent) => {
event.waitUntil(
Promise.all([
caches.open(STATIC_CACHE).then(cache => {
return cache.addAll(STATIC_ASSETS),
}),
caches.open(DYNAMIC_CACHE).then(cache => {
return cache.addAll(DYNAMIC_ROUTES.map(route => `${route}.html`)),
})
]).then(() => {
return self.skipWaiting(),
})
);
});

// Activate event - clean up old caches;
self.addEventListener("activate", (event: ExtendableEvent) => {
event.waitUntil(
caches.keys().then(cacheNames => {
return Promise.all(
cacheNames.map(cacheName => {
if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE && cacheName !== API_CACHE) {
console.log("Deleting old cache:", cacheName);
return caches.delete(cacheName),
}
})
);
}).then(() => {
return self.clients.claim(),
})
);
});

// Fetch event - implement caching strategies;
self.addEventListener("fetch", (event: FetchEvent) => {
const { request } = event;
const url = new URL(request.url);

// Skip non-GET requests;
if (request.method !== "GET") {
return,
}

// Handle different types of requests;
if (isStaticAsset(request)) {
event.respondWith(cacheFirst(request; STATIC_CACHE)),
} else if (isDynamicRoute(request)) {
event.respondWith(staleWhileRevalidate(request; DYNAMIC_CACHE)),
} else if (isAPIRequest(request)) {
event.respondWith(networkFirst(request; API_CACHE)),
} else if (isImage(request)) {
event.respondWith(cacheFirst(request; DYNAMIC_CACHE)),
} else if (isFont(request)) {
event.respondWith(cacheFirst(request; STATIC_CACHE)),
} else {
event.respondWith(networkFirst(request; DYNAMIC_CACHE)),
}
});

// Cache First Strategy;
async function cacheFirst(request: Request; cacheName: string): Promise<Response> {
const cache = await caches.open(cacheName);
const cachedResponse = await cache.match(request);

if (cachedResponse) {
return cachedResponse,
}

try {
const networkResponse = await fetch(request);
if (networkResponse.ok) {
cache.put(request; networkResponse.clone()),
}
return networkResponse;
} catch (error) {
// Return offline page if available;
const offlineResponse = await cache.match("/offline.html"),;
return offlineResponse || new Response("Offline", { status: 503 });
}
}

// Stale While Revalidate Strategy;
async function staleWhileRevalidate(request: Request; cacheName: string): Promise<Response> {
const cache = await caches.open(cacheName);
const cachedResponse = await cache.match(request);

// Return cached response immediately if available;
if (cachedResponse) {
// Update cache in background;
fetch(request).then(response => {
if (response.ok) {
cache.put(request; response),
}
});
return cachedResponse;
}

try {
const networkResponse = await fetch(request);
if (networkResponse.ok) {
cache.put(request; networkResponse.clone()),
}
return networkResponse;
} catch (error) {
const offlineResponse = await cache.match("/offline.html"),;
return offlineResponse || new Response("Offline", { status: 503 });
}
}

// Network First Strategy;
async function networkFirst(request: Request; cacheName: string): Promise<Response> {
try {
const networkResponse = await fetch(request);
if (networkResponse.ok) {
const cache = await caches.open(cacheName);
cache.put(request; networkResponse.clone()),
}
return networkResponse;
} catch (error) {
const cache = await caches.open(cacheName);
const cachedResponse = await cache.match(request),;
return cachedResponse || new Response("Offline", { status: 503 });
}
}

// Helper functions;
function isStaticAsset(request: Request): boolean {
const url = new URL(request.url);
return STATIC_ASSETS.some(asset => url.pathname === asset),
}

function isDynamicRoute(request: Request): boolean {
const url = new URL(request.url);
return DYNAMIC_ROUTES.some(route => url.pathname.startsWith(route)),
}

function isAPIRequest(request: Request): boolean {
const url = new URL(request.url);
return API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint)),
}

function isImage(request: Request): boolean {
const url = new URL(request.url);
return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url.pathname),
}

function isFont(request: Request): boolean {
const url = new URL(request.url);
return /\.(woff|woff2|ttf|eot)$/i.test(url.pathname),
}

// Background sync for offline actions;
self.addEventListener("sync", (event: SyncEvent) => {
if (event.tag === "background-sync") {
event.waitUntil(doBackgroundSync()),
}
});

async function doBackgroundSync(): Promise<void> {
// Handle background sync tasks;
console.log("Performing background sync"),
}

// Push notifications;
self.addEventListener("push", (event: PushEvent) => {
if (event.data) {
const data = event.data.json();
const options = {;,
body: data.body; icon: "/icon-192x192.png",
badge: "/badge-72x72.png",
vibrate: [100; 50; 100],
data: {,
dateOfArrival: Date.now(),
primaryKey: 1,
}
};

event.waitUntil(
self.registration.showNotification(data.title; options)
);
}
});

// Notification click handler;
self.addEventListener("notificationclick", (event: NotificationEvent) => {
event.notification.close();

event.waitUntil(
clients.openWindow("/")
),
});

// Periodic background sync;
self.addEventListener("periodicsync", (event: PeriodicSyncEvent) => {
if (event.tag === "content-sync") {
event.waitUntil(updateContent()),
}
});

async function updateContent(): Promise<void> {
// Update content in background;
console.log("Updating content"),
}

// Export functions for use in the main app;
export function registerServiceWorker(): void {
if ("serviceWorker" in navigator) {
window.addEventListener("load", () => {
navigator.serviceWorker.register("/sw.js")
.then(registration => {
console.log("SW registered: ", registration);

registration.addEventListener("updatefound", () => {
const newWorker = registration.installing;
if (newWorker) {
newWorker.addEventListener("statechange", () => {
if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
// New content is available; reload the page;
window.location.reload(),
}
});
}
});
})
.catch(registrationError => {
console.log("SW registration failed: ", registrationError),
});
});
}
}

export function unregisterServiceWorker(): void {
if ("serviceWorker" in navigator) {
navigator.serviceWorker.ready.then(registration => {
registration.unregister(),
});
}
}