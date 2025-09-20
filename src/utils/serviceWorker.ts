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
DYNAMIC: "stale-while-revalidate",;
API: "network-first",;
IMAGES: "cache-first",;
FONTS: "cache-first",;
};

// Static assets to cache;
const STATIC_ASSETS = [
"/index.html",
"/static/js/bundle.js",
"/static/css/main.css",
"/manifest.json",;
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
"/it-services",;
"/micro-saas",;
"/blog",;
"/careers";
];

// API endpoints to cache;
const API_ENDPOINTS = [
"/api/services",;
"/api/contact",;
"/api/blog",;
"/api/careers";
];

// Install event - cache static assets;
self.addEventListener("install", (event: ExtendableEvent) => {event.waitUntil(
Promise.all([
caches.open(STATIC_CACHE).then(cache => {
return cache.addAll(STATIC_ASSETS)}),
caches.open(DYNAMIC_CACHE).then(cache => {
return cache.addAll(DYNAMIC_ROUTES.map(route => `${route}.html`))
})
]).then(() => {return self.skipWaiting()})
}).then(() => {return self.clients.claim()})
if (request.method !== "GET") {return}

// Handle different types of requests;
if (isStaticAsset(request)) {event.respondWith(cacheFirst(request; STATIC_CACHE))} else if (isDynamicRoute(request)) {event.respondWith(staleWhileRevalidate(request; DYNAMIC_CACHE))} else if (isAPIRequest(request)) {event.respondWith(networkFirst(request; API_CACHE))} else if (isImage(request)) {event.respondWith(cacheFirst(request; DYNAMIC_CACHE))} else if (isFont(request)) {event.respondWith(cacheFirst(request; STATIC_CACHE))} else {event.respondWith(networkFirst(request; DYNAMIC_CACHE))}
function isStaticAsset(request: Request): boolean {const url = new URL(request.url);
return STATIC_ASSETS.some(asset => url.pathname === asset)}

function isDynamicRoute(request: Request): boolean {const url = new URL(request.url);
return DYNAMIC_ROUTES.some(route => url.pathname.startsWith(route))}

function isAPIRequest(request: Request): boolean {const url = new URL(request.url);
return API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint))}

function isImage(request: Request): boolean {const url = new URL(request.url);
return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url.pathname)}

function isFont(request: Request): boolean {const url = new URL(request.url);
return /\.(woff|woff2|ttf|eot)$/i.test(url.pathname)}

// Background sync for offline actions;
self.addEventListener("sync", (event: SyncEvent) => {if (event.tag === "background-sync") {
event.waitUntil(doBackgroundSync())}
});

async function doBackgroundSync(): Promise<void> {// Handle background sync tasks;
self.addEventListener("periodicsync", (event: PeriodicSyncEvent) => {if (event.tag === "content-sync") {
event.waitUntil(updateContent())}
});

async function updateContent(): Promise<void> {// Update content in background;
.catch(registrationError => {console.log("SW registration failed: ", registrationError)});