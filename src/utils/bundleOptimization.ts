/**
 * Bundle optimization utilities for better performance
 */

// Dynamic imports for code splitting
export const lazyImport = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) => {
  return React.lazy(importFunc);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = '/fonts/inter-var.woff2';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // Preload critical images
  const imagePreload = document.createElement('link');
  imagePreload.rel = 'preload';
  imagePreload.href = '/images/hero-bg.webp';
  imagePreload.as = 'image';
  document.head.appendChild(imagePreload);
};

// Resource hints for better performance
export const addResourceHints = () => {
  if (typeof window === 'undefined') return;

  // DNS prefetch for external domains
  const domains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'cdn.jsdelivr.net'
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });
};

// Bundle analysis and optimization
export const analyzeBundleSize = () => {
  if (typeof window === 'undefined') return null;

  const scripts = Array.from(document.querySelectorAll('script[src]'));
  const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  
  const analysis = {
    scripts: scripts.length,
    stylesheets: stylesheets.length,
    totalScriptSize: scripts.reduce((total, script) => {
      const src = script.getAttribute('src');
      // This would need to be enhanced with actual size fetching
      return total + (src ? 1 : 0);
    }, 0),
    recommendations: [] as string[]
  };

  // Add recommendations based on analysis
  if (analysis.scripts > 10) {
    analysis.recommendations.push('Consider code splitting to reduce initial bundle size');
  }
  
  if (analysis.stylesheets > 5) {
    analysis.recommendations.push('Consider consolidating CSS files');
  }

  return analysis;
};

// Performance budget monitoring
export const checkPerformanceBudget = () => {
  if (typeof window === 'undefined') return null;

  const budget = {
    maxBundleSize: 500 * 1024, // 500KB
    maxLoadTime: 3000, // 3 seconds
    maxFirstContentfulPaint: 1500 // 1.5 seconds
  };

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  const metrics = {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    bundleSize: 0, // Would need to be calculated from actual bundle
    firstContentfulPaint: 0 // Would need to be measured
  };

  const violations = [];
  
  if (metrics.loadTime > budget.maxLoadTime) {
    violations.push(`Load time ${metrics.loadTime}ms exceeds budget of ${budget.maxLoadTime}ms`);
  }

  return {
    metrics,
    budget,
    violations,
    withinBudget: violations.length === 0
  };
};

// Tree shaking optimization helpers
export const optimizeImports = {
  // Only import what you need from large libraries
  recharts: () => import('recharts').then(module => ({
    LineChart: module.LineChart,
    Line: module.Line,
    XAxis: module.XAxis,
    YAxis: module.YAxis,
    CartesianGrid: module.CartesianGrid,
    Tooltip: module.Tooltip,
    ResponsiveContainer: module.ResponsiveContainer
  })),
  
  // Optimize React imports
  react: () => import('react').then(module => ({
    useState: module.useState,
    useEffect: module.useEffect,
    useCallback: module.useCallback,
    useMemo: module.useMemo,
    lazy: module.lazy,
    Suspense: module.Suspense
  }))
};

// Service Worker optimization
export const optimizeServiceWorker = () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registered successfully:', registration);
      
      // Update service worker
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, prompt user to refresh
              console.log('New content available, please refresh.');
            }
          });
        }
      });
    })
    .catch(error => {
      console.log('Service Worker registration failed:', error);
    });
};

// Memory optimization
export const optimizeMemoryUsage = () => {
  if (typeof window === 'undefined') return;

  // Clean up event listeners periodically
  const cleanupInterval = setInterval(() => {
    // This would be enhanced with actual cleanup logic
    if (performance.memory && performance.memory.usedJSHeapSize > 50 * 1024 * 1024) {
      // Trigger garbage collection if available
      if (window.gc) {
        window.gc();
      }
    }
  }, 30000); // Every 30 seconds

  return () => clearInterval(cleanupInterval);
};

// Export all optimization functions
export const performanceOptimizations = {
  preloadCriticalResources,
  addResourceHints,
  analyzeBundleSize,
  checkPerformanceBudget,
  optimizeImports,
  optimizeServiceWorker,
  optimizeMemoryUsage
};