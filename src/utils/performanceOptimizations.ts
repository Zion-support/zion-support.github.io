'use client';
/**
 * Advanced Performance Optimizations for Zion Tech Group
 * Implements cutting-edge performance techniques
 */

// Critical resource preloading
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/css/critical.css', as: 'style' },
    { href: '/js/vendor.js', as: 'script' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    document.head.appendChild(link);
  });
};

// Image optimization with WebP support
export const optimizeImages = () => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    // Add loading="lazy" for better performance
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add proper alt text if missing
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', 'Zion Tech Group content');
    }
    
    // Convert to WebP if supported
    if (supportsWebP() && (img.src.includes('.jpg') || img.src.includes('.jpeg'))) {
      img.src = img.src.replace(/\.(jpg|jpeg)$/i, '.webp');
    }
  });
};

// Check WebP support
const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Advanced lazy loading with Intersection Observer
export const setupAdvancedLazyLoading = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const lazyElements = document.querySelectorAll('[data-lazy]');
  const lazyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const src = element.getAttribute('data-lazy');
          if (src) {
            if (element.tagName === 'IMG') {
              (element as HTMLImageElement).src = src;
            } else {
              element.style.backgroundImage = `url(${src})`;
            }
            element.removeAttribute('data-lazy');
            lazyObserver.unobserve(element);
          }
        }
      });
    },
    { rootMargin: '50px' }
  );

  lazyElements.forEach((element) => {
    lazyObserver.observe(element);
  });
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      // Service Worker registered successfully
    })
    .catch((error) => {
      // Service Worker registration failed - handled silently
    });
};

// Critical CSS inlining
export const inlineCriticalCSS = () => {
  if (typeof window === 'undefined') return;

  const criticalCSS = `
    /* Critical CSS for above-the-fold content */
    .cyber-grid { background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px); background-size: 50px 50px; }
    .neon-text { color: #00ffff; text-shadow: 0 0 10px #00ffff; }
    .cyber-button { background: linear-gradient(45deg, #00ffff, #8b5cf6); border: none; padding: 12px 24px; border-radius: 8px; color: white; font-weight: 600; }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Performance monitoring
export const monitorPerformance = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return;

  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'largest-contentful-paint') {
        // Track LCP
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            metric_name: 'LCP',
            metric_value: Math.round(entry.startTime),
            metric_rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs-improvement' : 'poor'
          });
        }
      }
    });
  });

  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
};

// Initialize all optimizations
export const initializePerformanceOptimizations = () => {
  preloadCriticalResources();
  optimizeImages();
  setupAdvancedLazyLoading();
  registerServiceWorker();
  inlineCriticalCSS();
  monitorPerformance();
};