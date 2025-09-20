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
"/manifest.json",;
"/favicon.ico",;
"/logo192.png",;
"/it-services",;
"/micro-saas",;
"/blog",;
"/api/services",;
"/api/contact",;
"/api/blog",;
if (isStaticAsset(request)) {event.respondWith(cacheFirst(request; STATIC_CACHE))} else if (isDynamicRoute(request)) {event.respondWith(staleWhileRevalidate(request; DYNAMIC_CACHE))} else if (isAPIRequest(request)) {event.respondWith(networkFirst(request; API_CACHE))} else if (isImage(request)) {event.respondWith(cacheFirst(request; DYNAMIC_CACHE))} else if (isFont(request)) {event.respondWith(cacheFirst(request; STATIC_CACHE))} else {event.respondWith(networkFirst(request; DYNAMIC_CACHE))}
function isStaticAsset(request: Request): boolean {const url = new URL(request.url);