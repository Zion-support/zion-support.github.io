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
