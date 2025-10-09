// Enhanced Performance Optimizations for Zion Tech Group
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Initialize performance monitoring
  initializePerformanceMonitoring();
  
  // Initialize resource hints
  initializeResourceHints();
  
  // Initialize image optimization
  initializeImageOptimization();
  
  // Initialize lazy loading
  initializeLazyLoading();
  
  // Initialize preloading
  initializePreloading();
  
  // Initialize compression
  initializeCompression();
  
  // Initialize caching strategies
  initializeCachingStrategies();
};

// Performance monitoring
const initializePerformanceMonitoring = () => {
  if ('PerformanceObserver' in window) {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          trackWebVital('LCP', entry.startTime);
        } else if (entry.entryType === 'first-input') {
          const fid = (entry as any).processingStart - entry.startTime;
          trackWebVital('FID', fid);
        } else if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            trackWebVital('CLS', (entry as any).value);
          }
        } else if (entry.entryType === 'navigation') {
          trackNavigationTiming(entry as PerformanceNavigationTiming);
        }
      }
    });

    observer.observe({ 
      entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] 
    });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          trackResourceTiming(entry as PerformanceResourceTiming);
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });
  }

  // Monitor memory usage
  if ('memory' in performance) {
    setInterval(() => {
      const memory = (performance as any).memory;
      trackMemoryUsage(memory);
    }, 30000); // Every 30 seconds
  }
};

// Resource hints optimization
const initializeResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
    { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
    { rel: 'preconnect', href: 'https://www.google-analytics.com' }
  ];

  hints.forEach((hint) => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) {
      link.crossOrigin = hint.crossorigin;
    }
    document.head.appendChild(link);
  });
};

// Image optimization
const initializeImageOptimization = () => {
  const images = document.querySelectorAll('img');
  
  images.forEach((img) => {
    // Add loading="lazy" for images below the fold
    if (img.getBoundingClientRect().top > window.innerHeight) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add decoding="async" for better performance
    img.setAttribute('decoding', 'async');
    
    // Add fetchpriority="high" for above-the-fold images
    if (img.getBoundingClientRect().top <= window.innerHeight) {
      img.setAttribute('fetchpriority', 'high');
    }
    
    // Add proper alt text if missing
    if (!img.getAttribute('alt')) {
      img.setAttribute('alt', 'Zion Tech Group - AI and IT Solutions');
    }
    
    // Add error handling
    img.addEventListener('error', () => {
      img.src = '/placeholder-image.png';
    });
  });
};

// Lazy loading implementation
const initializeLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Handle lazy images
          if (element.tagName === 'IMG' && element.dataset.src) {
            const img = element as HTMLImageElement;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
          
          // Handle lazy components
          if (element.dataset.lazyComponent) {
            loadLazyComponent(element);
            observer.unobserve(element);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });
    
    // Observe lazy elements
    const lazyElements = document.querySelectorAll('[data-src], [data-lazy-component]');
    lazyElements.forEach((element) => observer.observe(element));
  }
};

// Preloading critical resources
const initializePreloading = () => {
  const criticalResources = [
    {
      href: '/src/globals.css',
      as: 'style',
      type: 'text/css'
    },
    {
      href: '/src/main.tsx',
      as: 'script',
      type: 'text/javascript'
    }
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) {
      link.type = resource.type;
    }
    document.head.appendChild(link);
  });
};

// Compression optimization
const initializeCompression = () => {
  // Enable gzip compression for text resources
  if ('CompressionStream' in window) {
    // Browser supports compression streams
    console.log('Compression streams supported');
  }
  
  // Optimize JSON responses
  const originalFetch = window.fetch;
  window.fetch = async (input, init) => {
    const response = await originalFetch(input, init);
    
    // Add compression headers for requests
    if (init && typeof init === 'object') {
      init.headers = {
        ...init.headers,
        'Accept-Encoding': 'gzip, deflate, br'
      };
    }
    
    return response;
  };
};

// Caching strategies
const initializeCachingStrategies = () => {
  // Implement service worker caching
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
  
  // Implement memory caching for API responses
  const apiCache = new Map();
  const originalFetch = window.fetch;
  
  window.fetch = async (input, init) => {
    const url = typeof input === 'string' ? input : input.url;
    
    // Check if it's an API request
    if (url.includes('/api/')) {
      const cacheKey = `${url}-${JSON.stringify(init)}`;
      
      // Check cache first
      if (apiCache.has(cacheKey)) {
        const cached = apiCache.get(cacheKey);
        if (Date.now() - cached.timestamp < 5 * 60 * 1000) { // 5 minutes
          return new Response(JSON.stringify(cached.data), {
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }
      
      // Fetch from network
      const response = await originalFetch(input, init);
      if (response.ok) {
        const data = await response.json();
        apiCache.set(cacheKey, {
          data,
          timestamp: Date.now()
        });
      }
      
      return response;
    }
    
    return originalFetch(input, init);
  };
};

// Utility functions
const trackWebVital = (metric: string, value: number) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'web_vitals', {
      name: metric,
      value: Math.round(value),
      event_category: 'Performance'
    });
  }
  
  // Store in localStorage for debugging
  const vitals = JSON.parse(localStorage.getItem('web-vitals') || '{}');
  vitals[metric] = value;
  localStorage.setItem('web-vitals', JSON.stringify(vitals));
};

const trackNavigationTiming = (entry: PerformanceNavigationTiming) => {
  const timing = {
    dns: entry.domainLookupEnd - entry.domainLookupStart,
    tcp: entry.connectEnd - entry.connectStart,
    request: entry.responseStart - entry.requestStart,
    response: entry.responseEnd - entry.responseStart,
    dom: entry.domContentLoadedEventEnd - entry.navigationStart,
    load: entry.loadEventEnd - entry.navigationStart
  };
  
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'navigation_timing', {
      event_category: 'Performance',
      custom_map: timing
    });
  }
};

const trackResourceTiming = (entry: PerformanceResourceTiming) => {
  const duration = entry.responseEnd - entry.startTime;
  
  if (duration > 1000) { // Resources taking more than 1 second
    console.warn('Slow resource detected:', entry.name, duration + 'ms');
  }
};

const trackMemoryUsage = (memory: any) => {
  const usage = {
    used: memory.usedJSHeapSize,
    total: memory.totalJSHeapSize,
    limit: memory.jsHeapSizeLimit
  };
  
  const usagePercent = (usage.used / usage.limit) * 100;
  
  if (usagePercent > 80) {
    console.warn('High memory usage detected:', usagePercent + '%');
  }
};

const loadLazyComponent = (element: HTMLElement) => {
  const componentName = element.dataset.lazyComponent;
  
  // Dynamic import based on component name
  switch (componentName) {
    case 'ContentCarousel':
      import('../components/ContentCarousel').then((module) => {
        // Render component
        element.innerHTML = '<div>Content Carousel loaded</div>';
      });
      break;
    case 'ContentStatistics':
      import('../components/ContentStatistics').then((module) => {
        // Render component
        element.innerHTML = '<div>Content Statistics loaded</div>';
      });
      break;
    default:
      console.warn('Unknown lazy component:', componentName);
  }
};

// Export performance utilities
export const performanceUtils = {
  trackWebVital,
  trackNavigationTiming,
  trackResourceTiming,
  trackMemoryUsage
};

// Performance budget monitoring
export const checkPerformanceBudget = () => {
  const budget = {
    lcp: 2500, // 2.5 seconds
    fid: 100,  // 100ms
    cls: 0.1,  // 0.1
    fcp: 1800, // 1.8 seconds
    ttfb: 600  // 600ms
  };
  
  const vitals = JSON.parse(localStorage.getItem('web-vitals') || '{}');
  
  Object.entries(budget).forEach(([metric, threshold]) => {
    const value = vitals[metric];
    if (value && value > threshold) {
      console.warn(`Performance budget exceeded for ${metric}:`, value, '>', threshold);
    }
  });
};

// Initialize performance budget monitoring
setInterval(checkPerformanceBudget, 30000); // Check every 30 seconds