/**
 * Analytics Optimizer
 * Advanced analytics tracking with performance optimization and privacy compliance
 */

class AnalyticsOptimizer {
  constructor() {
    this.config = {
      trackingEnabled: true,
      privacyMode: false,
      batchSize: 10,
      flushInterval: 30000, // 30 seconds
      maxRetries: 3,
      retryDelay: 1000
    };
    
    this.eventQueue = [];
    this.sessionId = this.generateSessionId();
    this.userId = this.getUserId();
    this.pageViews = 0;
    this.startTime = Date.now();
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupPerformanceTracking();
    this.setupErrorTracking();
    this.setupUserBehaviorTracking();
    this.startBatchProcessor();
    this.setupPrivacyCompliance();
  }

  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  getUserId() {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }

  setupEventListeners() {
    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      this.track('page_visibility', {
        hidden: document.hidden,
        timestamp: Date.now()
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', this.throttle(() => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.track('scroll_depth', {
          depth: scrollDepth,
          maxDepth: maxScrollDepth
        });
      }
    }, 1000));

    // Track click events
    document.addEventListener('click', (event) => {
      const element = event.target;
      this.track('click', {
        element: element.tagName,
        id: element.id,
        className: element.className,
        text: element.textContent?.substring(0, 100),
        href: element.href
      });
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      this.track('form_submit', {
        formId: event.target.id,
        formClass: event.target.className,
        action: event.target.action
      });
    });
  }

  setupPerformanceTracking() {
    // Track Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => this.trackWebVital('CLS', metric));
        getFID((metric) => this.trackWebVital('FID', metric));
        getFCP((metric) => this.trackWebVital('FCP', metric));
        getLCP((metric) => this.trackWebVital('LCP', metric));
        getTTFB((metric) => this.trackWebVital('TTFB', metric));
      });
    }

    // Track page load performance
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        this.track('page_load_performance', {
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
          domInteractive: perfData.domInteractive - perfData.navigationStart,
          totalLoadTime: perfData.loadEventEnd - perfData.navigationStart
        });
      }
    });

    // Track resource loading
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        this.track('resource_load', {
          name: entry.name,
          duration: entry.duration,
          size: entry.transferSize,
          type: entry.initiatorType
        });
      });
    });
    observer.observe({ entryTypes: ['resource'] });
  }

  setupErrorTracking() {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      this.track('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.track('unhandled_rejection', {
        reason: event.reason?.message || 'Unknown rejection',
        stack: event.reason?.stack
      });
    });

    // Track fetch errors
    const originalFetch = window.fetch;
    window.fetch = (...args) => {
      return originalFetch(...args).catch(error => {
        this.track('fetch_error', {
          url: args[0],
          error: error.message
        });
        throw error;
      });
    };
  }

  setupUserBehaviorTracking() {
    // Track time on page
    let timeOnPage = 0;
    setInterval(() => {
      timeOnPage += 1000;
      this.track('time_on_page', {
        seconds: timeOnPage / 1000,
        minutes: Math.round(timeOnPage / 60000)
      });
    }, 10000); // Track every 10 seconds

    // Track mouse movement patterns
    let mouseMovements = 0;
    document.addEventListener('mousemove', this.throttle(() => {
      mouseMovements++;
      if (mouseMovements % 50 === 0) {
        this.track('mouse_activity', {
          movements: mouseMovements,
          timestamp: Date.now()
        });
      }
    }, 1000));

    // Track keyboard activity
    let keystrokes = 0;
    document.addEventListener('keydown', this.throttle(() => {
      keystrokes++;
      if (keystrokes % 20 === 0) {
        this.track('keyboard_activity', {
          keystrokes: keystrokes,
          timestamp: Date.now()
        });
      }
    }, 1000));
  }

  setupPrivacyCompliance() {
    // Check for privacy settings
    if (localStorage.getItem('privacy_mode') === 'true') {
      this.config.privacyMode = true;
      this.config.trackingEnabled = false;
    }

    // Respect Do Not Track
    if (navigator.doNotTrack === '1') {
      this.config.trackingEnabled = false;
    }

    // GDPR compliance
    if (localStorage.getItem('gdpr_consent') !== 'true') {
      this.config.trackingEnabled = false;
    }
  }

  track(eventName, properties = {}) {
    if (!this.config.trackingEnabled) return;

    const event = {
      event: eventName,
      properties: {
        ...properties,
        sessionId: this.sessionId,
        userId: this.userId,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`
      }
    };

    this.eventQueue.push(event);

    // Process immediately if batch is full
    if (this.eventQueue.length >= this.config.batchSize) {
      this.flush();
    }
  }

  trackWebVital(name, metric) {
    this.track('web_vital', {
      metric: name,
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType
    });
  }

  trackPageView(page = window.location.pathname) {
    this.pageViews++;
    this.track('page_view', {
      page: page,
      pageViews: this.pageViews,
      referrer: document.referrer,
      title: document.title
    });
  }

  trackCustomEvent(eventName, properties = {}) {
    this.track(eventName, properties);
  }

  startBatchProcessor() {
    setInterval(() => {
      if (this.eventQueue.length > 0) {
        this.flush();
      }
    }, this.config.flushInterval);
  }

  async flush() {
    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    try {
      await this.sendEvents(events);
    } catch (error) {
      console.error('Failed to send analytics events:', error);
      // Re-queue events for retry
      this.eventQueue.unshift(...events);
    }
  }

  async sendEvents(events) {
    const payload = {
      events: events,
      sessionId: this.sessionId,
      userId: this.userId,
      timestamp: Date.now()
    };

    // Send to multiple analytics services
    const promises = [
      this.sendToGoogleAnalytics(payload),
      this.sendToCustomEndpoint(payload)
    ];

    await Promise.allSettled(promises);
  }

  async sendToGoogleAnalytics(payload) {
    if (typeof gtag !== 'undefined') {
      payload.events.forEach(event => {
        gtag('event', event.event, {
          custom_parameters: event.properties
        });
      });
    }
  }

  async sendToCustomEndpoint(payload) {
    try {
      const response = await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.warn('Failed to send to custom analytics endpoint:', error);
    }
  }

  throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }

  // Analytics insights and reporting
  getSessionData() {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      pageViews: this.pageViews,
      timeOnSite: Date.now() - this.startTime,
      eventsQueued: this.eventQueue.length
    };
  }

  getPerformanceMetrics() {
    const navigation = performance.getEntriesByType('navigation')[0];
    return {
      loadTime: navigation ? navigation.loadEventEnd - navigation.navigationStart : 0,
      domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
      firstPaint: this.getFirstPaint(),
      memoryUsage: this.getMemoryUsage()
    };
  }

  getFirstPaint() {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? firstPaint.startTime : 0;
  }

  getMemoryUsage() {
    if ('memory' in performance) {
      return {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      };
    }
    return null;
  }

  // Privacy controls
  enableTracking() {
    this.config.trackingEnabled = true;
    localStorage.setItem('analytics_consent', 'true');
  }

  disableTracking() {
    this.config.trackingEnabled = false;
    this.eventQueue = [];
    localStorage.setItem('analytics_consent', 'false');
  }

  clearUserData() {
    localStorage.removeItem('analytics_user_id');
    localStorage.removeItem('analytics_consent');
    this.userId = this.getUserId();
    this.sessionId = this.generateSessionId();
  }
}

// Initialize analytics optimizer
const analyticsOptimizer = new AnalyticsOptimizer();

// Track initial page view
analyticsOptimizer.trackPageView();

// Export for use in other modules
export default analyticsOptimizer;

// Global analytics instance
window.analyticsOptimizer = analyticsOptimizer;