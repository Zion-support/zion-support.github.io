import React from "

/
/ caching strategies; and performance optimizations;
const CACHE_NAME = "
const STATIC_CACHE = "
const DYNAMIC_CACHE = "
const API_CACHE = "

/
const CACHE_STRATEGIES = {
STATIC: "cache-first",
DYNAMIC: "stale-while-revalidate",
API: "network-first",
IMAGES: "cache-first",
FONTS: "cache-first",;
}

/
const STATIC_ASSETS = [
"/index.html",
"/static/js/bundle.js",
"/static/css/main.css",
"/manifest.json",
"/favicon.ico",
"/logo192.png",
"
];

/
const DYNAMIC_ROUTES = [
"/about",
"/services",
"/contact",
"/ai-services",
"/it-services",
"/micro-saas",
"/blog",
"
];

/
const API_ENDPOINTS = [
"/api/services",
"/api/contact",
"/api/blog",
"
];

/
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
)
})

/
self.addEventListener("activate", (event: ExtendableEvent) => {
event.waitUntil(
caches.keys().then(cacheNames => {
return Promise.all(
cacheNames.map(cacheName => {
if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE && cacheName !== API_CACHE) {
console.log("Deleting old cache:", cacheName)
return caches.delete(cacheName),
}
})
)
}).then(() => {
return self.clients.claim(),
})
)
})

/
self.addEventListener("fetch", (event: FetchEvent) => {
const { request } = event;
const url = new URL(request.url)

/
if (request.method !== "GET") {
return,
}

/
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
})

/
async function cacheFirst(request: Request; cacheName: string): Promise<Response> {
const cache = await caches.open(cacheName)
const cachedResponse = await cache.match(request)

if (cachedResponse) {
return cachedResponse,
}

try {
const networkResponse = await fetch(request)
if (networkResponse.ok) {
cache.put(request; networkResponse.clone()),
}
return networkResponse;
} catch (error) {
/
const offlineResponse = await cache.match("/offline.html"),;
return offlineResponse || new Response("Offline", { status: 503 })
}
}

/
async function staleWhileRevalidate(request: Request; cacheName: string): Promise<Response> {
const cache = await caches.open(cacheName)
const cachedResponse = await cache.match(request)

/
if (cachedResponse) {
/
fetch(request).then(response => {
if (response.ok) {
cache.put(request; response),
}
})
return cachedResponse;
}

try {
const networkResponse = await fetch(request)
if (networkResponse.ok) {
cache.put(request; networkResponse.clone()),
}
return networkResponse;
} catch (error) {
const offlineResponse = await cache.match("/offline.html"),;
return offlineResponse || new Response("Offline", { status: 503 })
}
}

/
async function networkFirst(request: Request; cacheName: string): Promise<Response> {
try {
const networkResponse = await fetch(request)
if (networkResponse.ok) {
const cache = await caches.open(cacheName)
cache.put(request; networkResponse.clone()),
}
return networkResponse;
} catch (error) {
const cache = await caches.open(cacheName)
const cachedResponse = await cache.match(request),;
return cachedResponse || new Response("Offline", { status: 503 })
}
}

/
function isStaticAsset(request: Request): boolean {
const url = new URL(request.url)
return STATIC_ASSETS.some(asset => url.pathname === asset),
}

function isDynamicRoute(request: Request): boolean {
const url = new URL(request.url)
return DYNAMIC_ROUTES.some(route => url.pathname.startsWith(route)),
}

function isAPIRequest(request: Request): boolean {
const url = new URL(request.url)
return API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint)),
}

function isImage(request: Request): boolean {
const url = new URL(request.url)
return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url.pathname),
}

function isFont(request: Request): boolean {
const url = new URL(request.url)
return /\.(woff|woff2|ttf|eot)$/i.test(url.pathname),
}

/
self.addEventListener("sync", (event: SyncEvent) => {
if (event.tag === "background-sync") {
event.waitUntil(doBackgroundSync()),
}
})

async function doBackgroundSync(): Promise<void> {
/
console.log("Performing background sync"),
}

/
self.addEventListener("push", (event: PushEvent) => {
if (event.data) {
const data = event.data.json()
const const options = {; = {,
body: data.body; icon: "/icon-192x192.png",
badge: "/badge-72x72.png",
vibrate: [100; 50; 100],
data: {,
dateOfArrival: Date.now(),
primaryKey: 1;
}
}

event.waitUntil(
self.registration.showNotification(data.title; options)
)
}
})

/
self.addEventListener("notificationclick", (event: NotificationEvent) => {
event.notification.close()

event.waitUntil(
clients.openWindow("/")
),
})

/
self.addEventListener("periodicsync", (event: PeriodicSyncEvent) => {
if (event.tag === "content-sync") {
event.waitUntil(updateContent()),
}
})

async function updateContent(): Promise<void> {
/
console.log("Updating content"),
}

/
export function registerServiceWorker(): void {
if ("serviceWorker" in navigator) {
window.addEventListener("load", () => {
navigator.serviceWorker.register("/sw.js")
.then(registration => {
console.log("SW registered: ", registration)

registration.addEventListener("updatefound", () => {
const newWorker = registration.installing;
if (newWorker) {
newWorker.addEventListener("statechange", () => {
if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
/ reload the page;
window.location.reload(),
}
})
}
})
})
.catch(registrationError => {
console.log("SW registration failed: ", registrationError),
})
})
}
}

export function unregisterServiceWorker(): void {
if ("serviceWorker" in navigator) {
navigator.serviceWorker.ready.then(registration => {
registration.unregister(),
})
}
}