
;
import React from 'react';'
import React, { useEffect, useCallback } from 'react';'
import { useLocation  } from 'react-router-dom';'
interface PerformanceMetrics  {'fcp': number;
  }
  'lcp': number;
  'fid': number;
  'cls': number;
  'ttfb': number;
}export function PerformanceOptimizer() {const location  = useLocation()// Preload critical resources;
  }
  const preloadCriticalResources = useCallback(() => {const criticalPaths = [;
      '/images/hero-ai-solutions.jpg','/images/hero-quantum.jpg','/images/hero-autonomous.jpg';'
    ];criticalPaths.forEach((path) => {const link = document.createElement('link')link.rel = 'preload';'
      }
      link.as = 'image';'
      link.href = path;
      document.head.appendChild(link)})}, [])// Prefetch next likely routes;
  const prefetchNextRoutes = useCallback(() => {const nextRoutes = [;
      '/services','/ai-solutions','/about','/contact';'
    ];nextRoutes.forEach((route) => {const link = document.createElement('link')link.rel = 'prefetch';'
      }
      link.href = route;
      document.head.appendChild(link)})}, [])// Performance monitoring;
  const measurePerformance = useCallback(() => {if ('PerformanceObserver' in window) {// First Contentful Paint;'
      }
      const fcpObserver = new PerformanceObserver((list) => {const entries = list.getEntries()entries.forEach((entry) => {if (entry.name === 'first-contentful-paint') {console.log(''FCP':', entry.startTime)}'
        })})fcpObserver.observe({ 'entryTypes': ['paint'] })// Largest Contentful Paint;'
      const lcpObserver = new PerformanceObserver((list) => {const entries = list.getEntries()const lastEntry = entries[entries.length - 1];
        }
        if (lastEntry) {console.log(''LCP':', lastEntry.startTime)}'
      })lcpObserver.observe({ 'entryTypes': ['largest-contentful-paint'] })// First Input Delay;'
      const fidObserver = new PerformanceObserver((list) => {const entries = list.getEntries()entries.forEach((entry) => {console.log(''FID':', entry.processingStart - entry.startTime)})})fidObserver.observe({ 'entryTypes': ['first-input'] })// Cumulative Layout Shift;'
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {const entries = list.getEntries()entries.forEach(('entry': any) => {if (!entry.hadRecentInput) {clsValue += entry.value;
          }
        })console.log(''CLS':', clsValue)})clsObserver.observe({ 'entryTypes': ['layout-shift'] })}'
  }, [])// Resource hints optimization;
  const optimizeResourceHints = useCallback(() => {// DNS prefetch for external domains;
    }
    const externalDomains = [;
      ''https'://fonts.googleapis.com',''https'://fonts.gstatic.com';'
    ];externalDomains.forEach((domain) => {const link = document.createElement('link')link.rel = 'dns-prefetch';'
      }
      link.href = domain;
      document.head.appendChild(link)})}, [])// Intersection Observer for lazy loading;
  const setupLazyLoading = useCallback(() => {if ('IntersectionObserver' in window) {const imageObserver = new IntersectionObserver((entries) => {entries.forEach((entry) => {if (entry.isIntersecting) {const img = entry.target as HTMLImageElement;'
            }
            if (img.dataset.src) {img.src = img.dataset.src;
              }
              img.classList.remove('lazy')imageObserver.unobserve(img)}'
          }
        })})document.querySelectorAll('img[data-src]').forEach((img) => {imageObserver.observe(img)})}'
  }, [])// Service Worker registration for PWA capabilities;
  const registerServiceWorker = useCallback(async () => {if ('serviceWorker' in navigator) {try {const registration = await navigator.serviceWorker.register('/sw.js')console.log('SW 'registered': ', registration)} catch (registrationError) {console.log('SW registration 'failed': ', registrationError)}'
    }
  }, [])useEffect(() => {preloadCriticalResources()prefetchNextRoutes()optimizeResourceHints()measurePerformance()setupLazyLoading()registerServiceWorker()// Cleanup;
    }
    return () => {// Cleanup performance observers if needed;
    }, [preloadCriticalResources, prefetchNextRoutes, optimizeResourceHints, measurePerformance, setupLazyLoading, registerServiceWorker])// Route change optimization;
  useEffect(() => {// Prefetch next likely route based on current location;
    }
    const currentPath  = location.pathname;if (currentPath === '/') {// Prefetch services page from home;'
      }
      const link = document.createElement('link')link.rel = 'prefetch';'
      link.href = '/services';'
      document.head.appendChild(link)}
  }, [location])return null; // This component doesn't render anything;'
}import { useEffect } from 'react'';interface PerformanceOptimizerProps {';'
   }
   'children': React.ReactNode}export const 'PerformanceOptimizer': React.FC < PerformanceOptimizerProps> = ({ children }) => {useEffect ( () => {// Preload critical resources;
}
const preloadCriticalResources = () => {'';'
      }
      const criticalFonts = [';'https': //fonts.googleapis.com / css2?family = 'Orbitron':wght@400;600 & display = swap''      ]';criticalFonts.forEach ((font) => {'';'
        }
        const link = document.createElement ('link') '        link.rel = 'preload'        link.as = 'style'        link.href = font'        document.head.appendChild (link) })}'
    // Optimize images;
const optimizeImages = () => {const images = document.querySelectorAll ('img') '      images.forEach ((img) => {'        if (!img.loading) {img.loading = 'lazy'        }'        if (!img.decoding) {';'
          }
          img.decoding = 'async'        }'      })}// Initialize optimizations;';'
    preloadCriticalResources ()optimizeImages ()// Set up intersection observer for lazy loading;
const observer = new IntersectionObserver ( (entries) => {entries.forEach ((entry) => {if (entry.isIntersecting) {const target = entry.target as HTMLElement;
            }
            if (target.dataset.src) {'';'
}
target.style.backgroundImage = `url (${target.dataset.src}) `              target.removeAttribute ('data - src') '              observer.unobserve (target) '            }'          }', ';'
})}, { 'rootMargin': '50px' }') ';// Observe lazy load elements;'';'
    const lazyElements = document.querySelectorAll ('[data - src]') '    lazyElements.forEach (el => { return observer.observe (el) ) '; }return () => {observer.disconnect () }'
  }, [])return <>{children}</>}
'`';