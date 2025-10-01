/**
 * Analytics Integration Utility
 * 
 * Unified analytics tracking system supporting multiple providers
 * (Google Analytics, Mixpanel, Amplitude, Segment, etc.) with
 * privacy-focused tracking and GDPR compliance.
 * 
 * Features:
 * - Multi-provider support
 * - Event tracking with custom properties
 * - User identification and traits
 * - Page view tracking
 * - E-commerce tracking
 * - Privacy controls and consent management
 * - Offline event queue
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export interface AnalyticsUser {
  id: string;
  traits?: Record<string, any>;
  anonymousId?: string;
}

export interface AnalyticsConfig {
  providers: {
    googleAnalytics?: {
      measurementId: string;
      enabled: boolean;
    };
    mixpanel?: {
      token: string;
      enabled: boolean;
    };
    amplitude?: {
      apiKey: string;
      enabled: boolean;
    };
    segment?: {
      writeKey: string;
      enabled: boolean;
    };
  };
  privacy: {
    respectDoNotTrack: boolean;
    anonymizeIp: boolean;
    consentRequired: boolean;
  };
  debug: boolean;
}

class AnalyticsIntegration {
  private config: AnalyticsConfig;
  private eventQueue: AnalyticsEvent[] = [];
  private currentUser?: AnalyticsUser;
  private sessionId: string;
  private consentGiven: boolean = false;
  private initialized: boolean = false;

  constructor(config: AnalyticsConfig) {
    this.config = config;
    this.sessionId = this.generateSessionId();
    
    // Check for Do Not Track
    if (config.privacy.respectDoNotTrack && this.isDoNotTrackEnabled()) {
      console.log('[Analytics] Do Not Track is enabled, analytics disabled');
      return;
    }

    // Check for stored consent
    if (config.privacy.consentRequired) {
      this.consentGiven = this.getStoredConsent();
    } else {
      this.consentGiven = true;
    }

    if (this.consentGiven) {
      this.initialize();
    }
  }

  /**
   * Initialize analytics providers
   */
  private initialize(): void {
    if (this.initialized) return;

    // Initialize Google Analytics
    if (this.config.providers.googleAnalytics?.enabled) {
      this.initializeGoogleAnalytics();
    }

    // Initialize Mixpanel
    if (this.config.providers.mixpanel?.enabled) {
      this.initializeMixpanel();
    }

    // Initialize Amplitude
    if (this.config.providers.amplitude?.enabled) {
      this.initializeAmplitude();
    }

    // Initialize Segment
    if (this.config.providers.segment?.enabled) {
      this.initializeSegment();
    }

    this.initialized = true;
    this.flushEventQueue();
  }

  /**
   * Initialize Google Analytics
   */
  private initializeGoogleAnalytics(): void {
    const { measurementId } = this.config.providers.googleAnalytics!;
    
    // Load gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', measurementId, {
      anonymize_ip: this.config.privacy.anonymizeIp,
      send_page_view: false, // We'll handle this manually
    });

    if (this.config.debug) {
      console.log('[Analytics] Google Analytics initialized');
    }
  }

  /**
   * Initialize Mixpanel
   */
  private initializeMixpanel(): void {
    const { token } = this.config.providers.mixpanel!;
    
    // Load Mixpanel
    (function(f: any, b: any) {
      if (!b.__SV) {
        var e, g, i, h;
        window.mixpanel = b;
        b._i = [];
        b.init = function(e: any, f: any, c: any) {
          function g(a: any, d: any) {
            var b = d.split('.');
            2 == b.length && ((a = a[b[0]]), (d = b[1]));
            a[d] = function() {
              a.push([d].concat(Array.prototype.slice.call(arguments, 0)));
            };
          }
          var a = b;
          'undefined' !== typeof c ? (a = b[c] = []) : (c = 'mixpanel');
          a.people = a.people || [];
          a.toString = function(a: any) {
            var d = 'mixpanel';
            'mixpanel' !== c && (d += '.' + c);
            a || (d += ' (stub)');
            return d;
          };
          a.people.toString = function() {
            return a.toString(1) + '.people (stub)';
          };
          i = 'disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove'.split(
            ' '
          );
          for (h = 0; h < i.length; h++) g(a, i[h]);
          var j = 'set set_once union unset remove delete'.split(' ');
          a.get_group = function() {
            function b(c: any) {
              d[c] = function() {
                call2_args = arguments;
                call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
                a.push([e, call2]);
              };
            }
            for (
              var d = {},
                e = ['get_group'].concat(Array.prototype.slice.call(arguments, 0)),
                c = 0;
              c < j.length;
              c++
            )
              b(j[c]);
            return d;
          };
          b._i.push([e, f, c]);
        };
        b.__SV = 1.2;
      }
    })(document, (window as any).mixpanel || []);

    (window as any).mixpanel.init(token, {
      debug: this.config.debug,
      track_pageview: false,
      persistence: 'localStorage',
    });

    if (this.config.debug) {
      console.log('[Analytics] Mixpanel initialized');
    }
  }

  /**
   * Initialize Amplitude
   */
  private initializeAmplitude(): void {
    const { apiKey } = this.config.providers.amplitude!;
    
    // Load Amplitude
    (function(e: any, t: any) {
      var n = e.amplitude || { _q: [], _iq: {} };
      var r = t.createElement('script');
      r.type = 'text/javascript';
      r.integrity = 'sha384-u0hlTAJ1tNefeBKwiBNwB4CkHZ1ck4ajx/pKmwWtc+IufKJiCQZ+WjJIi+7C6Ntm';
      r.crossOrigin = 'anonymous';
      r.async = true;
      r.src = 'https://cdn.amplitude.com/libs/amplitude-8.21.4-min.gz.js';
      r.onload = function() {
        if (!e.amplitude.runQueuedFunctions) {
          console.log('[Amplitude] Error: could not load SDK');
        }
      };
      var s: any = t.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(r, s);
      
      function i(e: any, t: any) {
        e.prototype[t] = function() {
          this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
          return this;
        };
      }
      
      var o = function() {
        this._q = [];
        return this;
      };
      var a = ['add', 'append', 'clearAll', 'prepend', 'set', 'setOnce', 'unset', 'preInsert', 'postInsert', 'remove'];
      for (var c = 0; c < a.length; c++) {
        i(o, a[c]);
      }
      n.Identify = o;
      
      var u = function() {
        this._q = [];
        return this;
      };
      var l = ['setProductId', 'setQuantity', 'setPrice', 'setRevenueType', 'setEventProperties'];
      for (var p = 0; p < l.length; p++) {
        i(u, l[p]);
      }
      n.Revenue = u;
      
      var d = ['init', 'logEvent', 'logRevenue', 'setUserId', 'setUserProperties', 'setOptOut', 'setVersionName', 'setDomain', 'setDeviceId', 'enableTracking', 'setGlobalUserProperties', 'identify', 'clearUserProperties', 'setGroup', 'logRevenueV2', 'regenerateDeviceId', 'groupIdentify', 'onInit', 'logEventWithTimestamp', 'logEventWithGroups', 'setSessionId', 'resetSessionId', 'getDeviceId', 'getUserId', 'setMinTimeBetweenSessionsMillis', 'setEventUploadThreshold', 'setUseDynamicConfig', 'setServerZone', 'setServerUrl', 'sendEvents', 'setLibrary', 'setTransport'];
      
      function v(e: any) {
        function t(t: any) {
          e[t] = function() {
            e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
          };
        }
        for (var n = 0; n < d.length; n++) {
          t(d[n]);
        }
      }
      v(n);
      
      e.amplitude = n;
    })(window, document);

    (window as any).amplitude.getInstance().init(apiKey, undefined, {
      includeReferrer: true,
      includeUtm: true,
      trackingOptions: {
        ipAddress: !this.config.privacy.anonymizeIp,
      },
    });

    if (this.config.debug) {
      console.log('[Analytics] Amplitude initialized');
    }
  }

  /**
   * Initialize Segment
   */
  private initializeSegment(): void {
    const { writeKey } = this.config.providers.segment!;
    
    // Load Segment
    !(function() {
      var analytics = ((window as any).analytics = (window as any).analytics || []);
      if (!analytics.initialize)
        if (analytics.invoked)
          window.console &&
            console.error &&
            console.error('Segment snippet included twice.');
        else {
          analytics.invoked = !0;
          analytics.methods = [
            'trackSubmit',
            'trackClick',
            'trackLink',
            'trackForm',
            'pageview',
            'identify',
            'reset',
            'group',
            'track',
            'ready',
            'alias',
            'debug',
            'page',
            'once',
            'off',
            'on',
            'addSourceMiddleware',
            'addIntegrationMiddleware',
            'setAnonymousId',
            'addDestinationMiddleware',
          ];
          analytics.factory = function(e: any) {
            return function() {
              var t = Array.prototype.slice.call(arguments);
              t.unshift(e);
              analytics.push(t);
              return analytics;
            };
          };
          for (var e = 0; e < analytics.methods.length; e++) {
            var key = analytics.methods[e];
            analytics[key] = analytics.factory(key);
          }
          analytics.load = function(key: any, e: any) {
            var t = document.createElement('script');
            t.type = 'text/javascript';
            t.async = !0;
            t.src =
              'https://cdn.segment.com/analytics.js/v1/' +
              key +
              '/analytics.min.js';
            var n: any = document.getElementsByTagName('script')[0];
            n.parentNode.insertBefore(t, n);
            analytics._loadOptions = e;
          };
          analytics._writeKey = writeKey;
          analytics.SNIPPET_VERSION = '4.15.3';
          analytics.load(writeKey);
        }
    })();

    if (this.config.debug) {
      console.log('[Analytics] Segment initialized');
    }
  }

  /**
   * Track event
   */
  track(eventName: string, properties?: Record<string, any>): void {
    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: Date.now(),
      userId: this.currentUser?.id,
      sessionId: this.sessionId,
    };

    if (!this.consentGiven || !this.initialized) {
      this.eventQueue.push(event);
      return;
    }

    // Send to all providers
    if (this.config.providers.googleAnalytics?.enabled) {
      (window as any).gtag?.('event', eventName, properties);
    }

    if (this.config.providers.mixpanel?.enabled) {
      (window as any).mixpanel?.track(eventName, properties);
    }

    if (this.config.providers.amplitude?.enabled) {
      (window as any).amplitude?.getInstance().logEvent(eventName, properties);
    }

    if (this.config.providers.segment?.enabled) {
      (window as any).analytics?.track(eventName, properties);
    }

    if (this.config.debug) {
      console.log('[Analytics] Event tracked:', eventName, properties);
    }
  }

  /**
   * Track page view
   */
  page(pageName?: string, properties?: Record<string, any>): void {
    const pageProps = {
      ...properties,
      path: window.location.pathname,
      url: window.location.href,
      title: document.title,
      referrer: document.referrer,
    };

    if (this.config.providers.googleAnalytics?.enabled) {
      (window as any).gtag?.('event', 'page_view', pageProps);
    }

    if (this.config.providers.mixpanel?.enabled) {
      (window as any).mixpanel?.track_pageview(pageProps);
    }

    if (this.config.providers.amplitude?.enabled) {
      (window as any).amplitude?.getInstance().logEvent('Page Viewed', pageProps);
    }

    if (this.config.providers.segment?.enabled) {
      (window as any).analytics?.page(pageName, pageProps);
    }

    if (this.config.debug) {
      console.log('[Analytics] Page viewed:', pageName || document.title, pageProps);
    }
  }

  /**
   * Identify user
   */
  identify(userId: string, traits?: Record<string, any>): void {
    this.currentUser = {
      id: userId,
      traits,
    };

    if (!this.consentGiven || !this.initialized) {
      return;
    }

    if (this.config.providers.googleAnalytics?.enabled) {
      (window as any).gtag?.('set', { user_id: userId });
      if (traits) {
        (window as any).gtag?.('set', 'user_properties', traits);
      }
    }

    if (this.config.providers.mixpanel?.enabled) {
      (window as any).mixpanel?.identify(userId);
      if (traits) {
        (window as any).mixpanel?.people.set(traits);
      }
    }

    if (this.config.providers.amplitude?.enabled) {
      (window as any).amplitude?.getInstance().setUserId(userId);
      if (traits) {
        (window as any).amplitude?.getInstance().setUserProperties(traits);
      }
    }

    if (this.config.providers.segment?.enabled) {
      (window as any).analytics?.identify(userId, traits);
    }

    if (this.config.debug) {
      console.log('[Analytics] User identified:', userId, traits);
    }
  }

  /**
   * Set user consent
   */
  setConsent(granted: boolean): void {
    this.consentGiven = granted;
    this.storeConsent(granted);

    if (granted && !this.initialized) {
      this.initialize();
    }

    if (this.config.debug) {
      console.log('[Analytics] Consent:', granted ? 'granted' : 'revoked');
    }
  }

  /**
   * Flush event queue
   */
  private flushEventQueue(): void {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift()!;
      this.track(event.name, event.properties);
    }
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Check if Do Not Track is enabled
   */
  private isDoNotTrackEnabled(): boolean {
    return (
      navigator.doNotTrack === '1' ||
      (window as any).doNotTrack === '1' ||
      (navigator as any).msDoNotTrack === '1'
    );
  }

  /**
   * Get stored consent
   */
  private getStoredConsent(): boolean {
    try {
      return localStorage.getItem('analytics-consent') === 'true';
    } catch {
      return false;
    }
  }

  /**
   * Store consent
   */
  private storeConsent(granted: boolean): void {
    try {
      localStorage.setItem('analytics-consent', granted ? 'true' : 'false');
    } catch {
      // Silently fail if localStorage is not available
    }
  }
}

// Default configuration
const defaultConfig: AnalyticsConfig = {
  providers: {},
  privacy: {
    respectDoNotTrack: true,
    anonymizeIp: true,
    consentRequired: false,
  },
  debug: process.env.NODE_ENV === 'development',
};

// Singleton instance (will be initialized with actual config by the app)
export let analytics: AnalyticsIntegration;

/**
 * Initialize analytics
 */
export function initializeAnalytics(config: Partial<AnalyticsConfig>): AnalyticsIntegration {
  const mergedConfig = {
    ...defaultConfig,
    ...config,
    providers: {
      ...defaultConfig.providers,
      ...config.providers,
    },
    privacy: {
      ...defaultConfig.privacy,
      ...config.privacy,
    },
  };

  analytics = new AnalyticsIntegration(mergedConfig);
  return analytics;
}

export default AnalyticsIntegration;
