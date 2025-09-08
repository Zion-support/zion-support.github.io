import React, { lazy } from 'react';

// Lazy loaded pages
export const LazyHome = lazy(() => import('../pages/Home'));
export const LazyAbout = lazy(() => import('../pages/About'));
export const LazyContact = lazy(() => import('../pages/Contact'));
export const LazyNotFound = lazy(() => import('../pages/NotFound'));

// Lazy loaded components
export const LazyAnalytics = lazy(() => import('../components/PerformanceDashboard'));
export const LazyPerformanceMonitor = lazy(() => import('../components/PerformanceOptimizations'));