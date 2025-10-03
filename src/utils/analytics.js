
// Comprehensive Analytics Implementation
export class ComprehensiveAnalytics {
  constructor() {
    this.isInitialized = false;
    this.sessionId = this.generateSessionId();
    this.userId = this.getOrCreateUserId();
    this.startTime = Date.now();
    this.pageViews = [];
    this.events = [];
    this.performanceMetrics = {};
  }

  // Initialize analytics
  async initialize() {
    if (this.isInitialized) return;

    try {
      // Initialize Google Analytics 4
      await this.initializeGA4();
      
      // Initialize performance monitoring
      this.initializePerformanceMonitoring();
      
      // Initialize error tracking
      this.initializeErrorTracking();
      
      // Initialize user behavior tracking
      this.initializeUserBehaviorTracking();
      
      // Track initial page view
      this.trackPageView();
      
      this.isInitialized = true;
      console.log('Analytics initialized successfully');
    } catch (error) {
      console.error('Analytics initialization failed:', error);
    }
  }

  // Google Analytics 4 initialization
  async initializeGA4() {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          custom_parameter_1: 'session_id',
          custom_parameter_2: 'user_id'
        }
      });
    }
  }

  // Performance monitoring
  initializePerformanceMonitoring() {
    // Web Vitals
    this.measureWebVitals();
    
    // Custom performance metrics
    this.measureCustomMetrics();
    
    // Memory usage
    this.measureMemoryUsage();
    
    // Network performance
    this.measureNetworkPerformance();
  }

  // Measure Web Vitals
  measureWebVitals() {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.performanceMetrics.lcp = lastEntry.startTime;
      this.trackEvent('performance', 'lcp', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        this.performanceMetrics.fid = entry.processingStart - entry.startTime;
        this.trackEvent('performance', 'fid', this.performanceMetrics.fid);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      let clsValue = 0;
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.performanceMetrics.cls = clsValue;
      this.trackEvent('performance', 'cls', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });

    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        this.performanceMetrics.fcp = entry.startTime;
        this.trackEvent('performance', 'fcp', entry.startTime);
      });
    }).observe({ entryTypes: ['paint'] });

    // Time to First Byte
    if (performance.timing) {
      this.performanceMetrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.trackEvent('performance', 'ttfb', this.performanceMetrics.ttfb);
    }
  }

  // Custom performance metrics
  measureCustomMetrics() {
    // Page load time
    window.addEventListener('load', () => {
      const loadTime = Date.now() - this.startTime;
      this.performanceMetrics.pageLoadTime = loadTime;
      this.trackEvent('performance', 'page_load_time', loadTime);
    });

    // Time to interactive
    this.measureTimeToInteractive();
    
    // Bundle size analysis
    this.measureBundleSize();
  }

  // Memory usage monitoring
  measureMemoryUsage() {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        this.trackEvent('performance', 'memory_used', memory.usedJSHeapSize);
        this.trackEvent('performance', 'memory_total', memory.totalJSHeapSize);
        this.trackEvent('performance', 'memory_limit', memory.jsHeapSizeLimit);
      }, 30000); // Every 30 seconds
    }
  }

  // Network performance
  measureNetworkPerformance() {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      this.trackEvent('performance', 'connection_type', connection.effectiveType);
      this.trackEvent('performance', 'connection_downlink', connection.downlink);
      this.trackEvent('performance', 'connection_rtt', connection.rtt);
    }
  }

  // Error tracking
  initializeErrorTracking() {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.trackError('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError('unhandled_promise_rejection', {
        reason: event.reason,
        promise: event.promise
      });
    });

    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.trackError('resource_error', {
          type: event.target.tagName,
          src: event.target.src || event.target.href,
          alt: event.target.alt
        });
      }
    }, true);
  }

  // User behavior tracking
  initializeUserBehaviorTracking() {
    // Click tracking
    document.addEventListener('click', (event) => {
      this.trackEvent('user_interaction', 'click', {
        element: event.target.tagName,
        id: event.target.id,
        class: event.target.className,
        text: event.target.textContent?.substring(0, 100)
      });
    });

    // Scroll tracking
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        this.trackEvent('user_interaction', 'scroll', scrollPercent);
      }, 100);
    });

    // Form interactions
    document.addEventListener('submit', (event) => {
      this.trackEvent('form', 'submit', {
        formId: event.target.id,
        formClass: event.target.className
      });
    });

    // Focus tracking
    document.addEventListener('focusin', (event) => {
      this.trackEvent('user_interaction', 'focus', {
        element: event.target.tagName,
        id: event.target.id,
        class: event.target.className
      });
    });
  }

  // Track page view
  trackPageView(page = null) {
    const pageData = {
      page: page || window.location.pathname,
      title: document.title,
      referrer: document.referrer,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId
    };

    this.pageViews.push(pageData);

    // Send to analytics
    this.sendToAnalytics('page_view', pageData);
    
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageData.title,
        page_location: window.location.href
      });
    }
  }

  // Track custom event
  trackEvent(category, action, label = null, value = null) {
    const eventData = {
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId
    };

    this.events.push(eventData);

    // Send to analytics
    this.sendToAnalytics('event', eventData);
    
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  // Track errors
  trackError(errorType, errorData) {
    const error = {
      type: errorType,
      data: errorData,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Send to analytics
    this.sendToAnalytics('error', error);
    
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: errorData.message || errorType,
        fatal: false
      });
    }
  }

  // Send data to analytics
  sendToAnalytics(eventType, data) {
    // Implement your analytics endpoint
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventType,
        data,
        timestamp: Date.now()
      })
    }).catch(error => {
      console.error('Analytics send failed:', error);
    });
  }

  // Utility functions
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  getOrCreateUserId() {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }

  measureTimeToInteractive() {
    // Implementation for measuring Time to Interactive
    // This is a simplified version
    const tti = performance.now();
    this.trackEvent('performance', 'tti', tti);
  }

  measureBundleSize() {
    // Implementation for measuring bundle size
    // This would typically be done during build time
    const bundleSize = performance.getEntriesByType('resource')
      .reduce((total, resource) => total + resource.transferSize, 0);
    this.trackEvent('performance', 'bundle_size', bundleSize);
  }

  // Get analytics summary
  getSummary() {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      pageViews: this.pageViews.length,
      events: this.events.length,
      performanceMetrics: this.performanceMetrics,
      sessionDuration: Date.now() - this.startTime
    };
  }
}

// Initialize analytics
const analytics = new ComprehensiveAnalytics();
analytics.initialize();

export default analytics;
