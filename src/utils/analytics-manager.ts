/**
 * Analytics Manager for Zion Tech Group Website
 * 
 * This utility provides comprehensive analytics and tracking including:
 * - Google Analytics 4
 * - Google Tag Manager
 * - Custom event tracking
 * - Performance monitoring
 * - User behavior analytics
 * - Conversion tracking
 * - Privacy-compliant data collection
 */

export interface AnalyticsConfig {
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  enablePerformanceTracking: boolean;
  enableUserBehaviorTracking: boolean;
  enableConversionTracking: boolean;
  enablePrivacyMode: boolean;
  enableDebugMode: boolean;
  customEvents: Record<string, any>;
}

export interface AnalyticsEvent {
  event_name: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
  timestamp?: number;
}

export interface UserProperties {
  user_id?: string;
  user_type?: 'visitor' | 'lead' | 'customer';
  industry?: string;
  company_size?: string;
  source?: string;
  medium?: string;
  campaign?: string;
}

export const defaultAnalyticsConfig: AnalyticsConfig = {
  enablePerformanceTracking: true,
  enableUserBehaviorTracking: true,
  enableConversionTracking: true,
  enablePrivacyMode: true,
  enableDebugMode: false,
  customEvents: {}
};

/**
 * Analytics Manager Class
 */
export class AnalyticsManager {
  private config: AnalyticsConfig;
  private isInitialized = false;
  private userProperties: UserProperties = {};
  private sessionData: Record<string, any> = {};
  private eventQueue: AnalyticsEvent[] = [];

  constructor(config: AnalyticsConfig = defaultAnalyticsConfig) {
    this.config = config;
    this.init();
  }

  /**
   * Initialize analytics
   */
  async init(): Promise<void> {
    if (typeof window === 'undefined') return;

    try {
      await this.initializeGoogleAnalytics();
      await this.initializeGoogleTagManager();
      await this.initializePerformanceTracking();
      await this.initializeUserBehaviorTracking();
      await this.setupPrivacyCompliance();
      
      this.isInitialized = true;
      this.processEventQueue();
      
      console.log('Analytics Manager initialized successfully');
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }

  /**
   * Initialize Google Analytics 4
   */
  private async initializeGoogleAnalytics(): Promise<void> {
    if (!this.config.googleAnalyticsId) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.googleAnalyticsId}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', this.config.googleAnalyticsId, {
      send_page_view: false, // We'll send page views manually
      anonymize_ip: this.config.enablePrivacyMode,
      allow_google_signals: !this.config.enablePrivacyMode,
      allow_ad_personalization_signals: !this.config.enablePrivacyMode
    });

    if (this.config.enableDebugMode) {
      gtag('config', this.config.googleAnalyticsId, {
        debug_mode: true
      });
    }
  }

  /**
   * Initialize Google Tag Manager
   */
  private async initializeGoogleTagManager(): Promise<void> {
    if (!this.config.googleTagManagerId) return;

    // GTM script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${this.config.googleTagManagerId}');
    `;
    document.head.appendChild(gtmScript);

    // GTM noscript
    const gtmNoscript = document.createElement('noscript');
    gtmNoscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${this.config.googleTagManagerId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertBefore(gtmNoscript, document.body.firstChild);
  }

  /**
   * Initialize performance tracking
   */
  private async initializePerformanceTracking(): Promise<void> {
    if (!this.config.enablePerformanceTracking) return;

    // Track Core Web Vitals (web-vitals v5+)
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }: any) => {
      onCLS((metric: any) => this.trackPerformanceMetric('CLS', metric));
      onINP((metric: any) => this.trackPerformanceMetric('INP', metric));
      onFCP((metric: any) => this.trackPerformanceMetric('FCP', metric));
      onLCP((metric: any) => this.trackPerformanceMetric('LCP', metric));
      onTTFB((metric: any) => this.trackPerformanceMetric('TTFB', metric));
    });

    // Track page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        this.trackEvent('page_performance', {
          event_category: 'Performance',
          load_time: navigation.loadEventEnd - navigation.fetchStart,
          dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          first_byte: navigation.responseStart - navigation.fetchStart
        });
      }, 0);
    });
  }

  /**
   * Initialize user behavior tracking
   */
  private async initializeUserBehaviorTracking(): Promise<void> {
    if (!this.config.enableUserBehaviorTracking) return;

    // Track scroll depth
    this.trackScrollDepth();
    
    // Track time on page
    this.trackTimeOnPage();
    
    // Track clicks on important elements
    this.trackImportantClicks();
    
    // Track form interactions
    this.trackFormInteractions();
  }

  /**
   * Setup privacy compliance
   */
  private async setupPrivacyCompliance(): Promise<void> {
    if (!this.config.enablePrivacyMode) return;

    // Check for consent
    const consent = localStorage.getItem('analytics_consent');
    if (consent === 'false') {
      this.disableTracking();
    }

    // Setup consent banner if needed
    this.setupConsentBanner();
  }

  /**
   * Track performance metric
   */
  private trackPerformanceMetric(name: string, metric: any): void {
    this.trackEvent('performance_metric', {
      event_category: 'Performance',
      event_label: name,
      value: Math.round(metric.value),
      metric_id: metric.id,
      metric_delta: metric.delta,
      metric_rating: metric.rating
    });
  }

  /**
   * Track scroll depth
   */
  private trackScrollDepth(): void {
    let maxScrollDepth = 0;
    const scrollThresholds = [25, 50, 75, 90, 100];
    const trackedThresholds = new Set<number>();

    const trackScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage;
      }

      scrollThresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          this.trackEvent('scroll_depth', {
            event_category: 'Engagement',
            event_label: `${threshold}%`,
            value: threshold
          });
        }
      });
    };

    window.addEventListener('scroll', this.throttleEvent(trackScroll, 1000));
  }

  /**
   * Track time on page
   */
  private trackTimeOnPage(): void {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      this.trackEvent('time_on_page', {
        event_category: 'Engagement',
        value: timeOnPage
      });
    });
  }

  /**
   * Track important clicks
   */
  private trackImportantClicks(): void {
    const importantSelectors = [
      'a[href^="/services"]',
      'a[href^="/contact"]',
      'button[data-tracking]',
      '.cta-button',
      '.service-card',
      '.testimonial'
    ];

    importantSelectors.forEach(selector => {
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const element = target.closest(selector);
        
        if (element) {
          const elementText = element.textContent?.trim() || 'Unknown';
          const elementHref = element.getAttribute('href') || '';
          
          this.trackEvent('click', {
            event_category: 'Engagement',
            event_label: elementText,
            element_href: elementHref,
            element_class: element.className
          });
        }
      });
    });
  }

  /**
   * Track form interactions
   */
  private trackFormInteractions(): void {
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formName = form.name || form.id || 'unknown_form';
      
      this.trackEvent('form_submit', {
        event_category: 'Conversion',
        event_label: formName,
        form_fields: form.elements.length
      });
    });

    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        const form = target.closest('form');
        if (form) {
          this.trackEvent('form_field_focus', {
            event_category: 'Engagement',
            event_label: (target.getAttribute('name') || target.id || 'unknown_field'),
            form_name: form.name || form.id || 'unknown_form'
          });
        }
      }
    });
  }

  /**
   * Setup consent banner
   */
  private setupConsentBanner(): void {
    const consent = localStorage.getItem('analytics_consent');
    if (consent !== null) return; // User has already made a choice

    const banner = document.createElement('div');
    banner.className = 'fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50';
    banner.innerHTML = `
      <div class="max-w-4xl mx-auto flex items-center justify-between">
        <div class="flex-1">
          <p class="text-sm">
            We use analytics to improve your experience. 
            <a href="/privacy" class="underline">Learn more</a>
          </p>
        </div>
        <div class="flex space-x-2 ml-4">
          <button id="accept-analytics" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Accept
          </button>
          <button id="decline-analytics" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Decline
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    // Handle consent buttons
    document.getElementById('accept-analytics')?.addEventListener('click', () => {
      localStorage.setItem('analytics_consent', 'true');
      banner.remove();
      this.enableTracking();
    });

    document.getElementById('decline-analytics')?.addEventListener('click', () => {
      localStorage.setItem('analytics_consent', 'false');
      banner.remove();
      this.disableTracking();
    });
  }

  /**
   * Enable tracking
   */
  private enableTracking(): void {
    this.config.enablePrivacyMode = false;
    // Re-initialize with tracking enabled
    this.init();
  }

  /**
   * Disable tracking
   */
  private disableTracking(): void {
    // Clear existing data
    if ((window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    }
  }

  /**
   * Process queued events
   */
  private processEventQueue(): void {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift();
      if (event) {
        this.sendEvent(event);
      }
    }
  }

  /**
   * Track custom event
   */
  trackEvent(eventName: string, parameters: Record<string, any> = {}): void {
    const event: AnalyticsEvent = {
      event_name: eventName,
      timestamp: Date.now(),
      custom_parameters: parameters
    };

    if (this.isInitialized) {
      this.sendEvent(event);
    } else {
      this.eventQueue.push(event);
    }
  }

  /**
   * Send event to analytics services
   */
  private sendEvent(event: AnalyticsEvent): void {
    // Send to Google Analytics
    if ((window as any).gtag && this.config.googleAnalyticsId) {
      (window as any).gtag('event', event.event_name, {
        event_category: event.event_category,
        event_label: event.event_label,
        value: event.value,
        ...event.custom_parameters
      });
    }

    // Send to Google Tag Manager
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: event.event_name,
        ...event.custom_parameters
      });
    }

    // Send custom event
    if (this.config.customEvents[event.event_name]) {
      const customHandler = this.config.customEvents[event.event_name];
      customHandler(event);
    }

    if (this.config.enableDebugMode) {
      console.log('Analytics Event:', event);
    }
  }

  /**
   * Track page view
   */
  trackPageView(pagePath: string, pageTitle?: string): void {
    const pageTitleToUse = pageTitle || document.title;

    // Google Analytics
    if ((window as any).gtag && this.config.googleAnalyticsId) {
      (window as any).gtag('config', this.config.googleAnalyticsId, {
        page_path: pagePath,
        page_title: pageTitleToUse
      });
    }

    // Google Tag Manager
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'page_view',
        page_path: pagePath,
        page_title: pageTitleToUse,
        page_location: window.location.href
      });
    }

    this.trackEvent('page_view', {
      event_category: 'Navigation',
      page_path: pagePath,
      page_title: pageTitleToUse,
      page_location: window.location.href
    });
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: UserProperties): void {
    this.userProperties = { ...this.userProperties, ...properties };

    // Google Analytics
    if ((window as any).gtag && this.config.googleAnalyticsId) {
      (window as any).gtag('config', this.config.googleAnalyticsId, {
        user_id: properties.user_id,
        custom_map: {
          user_type: properties.user_type,
          industry: properties.industry,
          company_size: properties.company_size
        }
      });
    }

    // Google Tag Manager
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        user_properties: properties
      });
    }
  }

  /**
   * Track conversion
   */
  trackConversion(conversionType: string, value?: number, currency = 'USD'): void {
    this.trackEvent('conversion', {
      event_category: 'Conversion',
      event_label: conversionType,
      value: value,
      currency: currency
    });

    // Google Analytics Enhanced Ecommerce
    if ((window as any).gtag && this.config.googleAnalyticsId) {
      (window as any).gtag('event', 'purchase', {
        transaction_id: `conv_${Date.now()}`,
        value: value,
        currency: currency,
        items: [{
          item_name: conversionType,
          category: 'Service',
          quantity: 1,
          price: value
        }]
      });
    }
  }

  /**
   * Throttle function
   */
  private throttleEvent<T extends (event: Event) => void>(handler: T, delay: number): (event: Event) => void {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let lastExecTime = 0;

    return (event: Event) => {
      const currentTime = Date.now();

      if (currentTime - lastExecTime > delay) {
        handler(event);
        lastExecTime = currentTime;
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          handler(event);
          lastExecTime = Date.now();
        }, Math.max(0, delay - (currentTime - lastExecTime)));
      }
    };
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<AnalyticsConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get current configuration
   */
  getConfig(): AnalyticsConfig {
    return { ...this.config };
  }
}

// Global analytics manager instance
let analyticsManager: AnalyticsManager | null = null;

/**
 * Initialize analytics manager
 */
export function initializeAnalytics(config?: AnalyticsConfig): AnalyticsManager {
  if (typeof window === 'undefined') {
    throw new Error('Analytics manager can only be initialized in browser environment');
  }

  if (!analyticsManager) {
    analyticsManager = new AnalyticsManager(config);
  }

  return analyticsManager;
}

/**
 * Get analytics manager instance
 */
export function getAnalyticsManager(): AnalyticsManager | null {
  return analyticsManager;
}

/**
 * Analytics utilities
 */
export const analyticsUtils = {
  // Track service page view
  trackServiceView: (serviceName: string) => {
    const manager = getAnalyticsManager();
    if (manager) {
      manager.trackEvent('service_view', {
        event_category: 'Services',
        event_label: serviceName,
        service_name: serviceName
      });
    }
  },

  // Track blog post view
  trackBlogView: (postTitle: string, category: string) => {
    const manager = getAnalyticsManager();
    if (manager) {
      manager.trackEvent('blog_view', {
        event_category: 'Content',
        event_label: postTitle,
        post_title: postTitle,
        blog_category: category
      });
    }
  },

  // Track contact form submission
  trackContactSubmission: (formType: string) => {
    const manager = getAnalyticsManager();
    if (manager) {
      manager.trackEvent('contact_submission', {
        event_category: 'Conversion',
        event_label: formType,
        form_type: formType
      });
    }
  },

  // Track download
  trackDownload: (fileName: string, fileType: string) => {
    const manager = getAnalyticsManager();
    if (manager) {
      manager.trackEvent('download', {
        event_category: 'Engagement',
        event_label: fileName,
        file_name: fileName,
        file_type: fileType
      });
    }
  }
};

// Avoid conflicting global type declarations; rely on runtime checks only

export default {
  AnalyticsManager,
  initializeAnalytics,
  getAnalyticsManager,
  analyticsUtils,
  defaultAnalyticsConfig
};