/**
 * Advanced Analytics Tracking System
 * Comprehensive event tracking for user engagement and conversion optimization
 */

export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: string;
  sessionId?: string;
  userId?: string;
  metadata?: Record<string, string | number | boolean>;
}

export interface PageViewEvent {
path: string;
title: string;
referrer?: string;
timestamp: string;
duration?: number;
}

export interface ConversionEvent {
type: 'newsletter_signup' | 'contact_form' | 'service_inquiry' | 'blog_read';
value: number;
source?: string;
campaign?: string;
}

/**
 * Initialize analytics tracking
 */
export const initAnalytics = (): void => {
  // Generate or retrieve session ID
  const sessionId = getOrCreateSessionId();
  
  // Track initial page view
  trackPageView(window.location.pathname);
  
  // Set up automatic event listeners
  setupAutoTracking();
  
  console.log(`Analytics initialized - Session: ${sessionId}`);
};

/**
 * Track custom event
 */
export const trackEvent = (event: Partial<AnalyticsEvent>): void => {
  const fullEvent: AnalyticsEvent = {
    category: event.category || 'general',
    action: event.action || 'unknown',
    label: event.label,
    value: event.value,
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    userId: getUserId(),
    metadata: event.metadata
  };
  
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', fullEvent.action, {
      event_category: fullEvent.category,
      event_label: fullEvent.label,
      value: fullEvent.value,
      ...fullEvent.metadata
    });
  }
  
  // Send to custom analytics endpoint
  sendToAnalytics(fullEvent);
  
  // Store locally for offline analysis
  storeEventLocally(fullEvent);
};

/**
 * Track page view
 */
export const trackPageView = (path: string, title?: string): void => {
  const event: PageViewEvent = {
    path,
    title: title || document.title,
    referrer: document.referrer,
    timestamp: new Date().toISOString()
  };
  
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
      page_title: event.title
    });
  }
  
  // Custom tracking
  trackEvent({
    category: 'page_view',
    action: 'view',
    label: path,
    metadata: event
  });
};

/**
 * Track banner interaction
 */
export const trackBannerInteraction = (
  bannerId: string,
  action: 'impression' | 'click' | 'close',
  metadata?: Record<string, any>
): void => {
  trackEvent({
    category: 'banner',
    action: action,
    label: bannerId,
    metadata: {,
      bannerId
      ...metadata
    }
  });
};

/**
 * Track conversion
 */
export const trackConversion = (conversion: ConversionEvent): void => {
  trackEvent({
    category: 'conversion',
    action: conversion.type,
    value: conversion.value,
    metadata: {,
      source: conversion.source,
      campaign: conversion.campaign
    }
  });
  
  // Send to conversion API if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID',
      value: conversion.value,
      currency: 'USD',
      transaction_id: generateTransactionId()
    });
  }
};

/**
 * Track user engagement metrics
 */
export const trackEngagement = (
  type: 'scroll' | 'time' | 'interaction',
  value: number,
  metadata?: Record<string, any>
): void => {
  trackEvent({
    category: 'engagement',
    action: type,
    value,
    metadata
  });
};

/**
 * Track error
 */
export const trackError = (
  error: Error,
  context?: string
  severity: 'low' | 'medium' | 'high' | 'critical' = 'medium'
): void => {
  trackEvent({
    category: 'error',
    action: 'exception',
    label: error.message,
    metadata: {,
      stack: error.stack,
      context,
      severity,
      userAgent: navigator.userAgent
    }
  });
  
  // Send to error tracking service
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    (window as any).Sentry.captureException(error, {
      contexts: { custom: { context, severity } }
    });
  }
};

/**
 * Track form submission
 */
export const trackFormSubmission = (
  formName: string,
  success: boolean,
  errorMessage?: string
): void => {
  trackEvent({
    category: 'form',
    action: success ? 'submit_success' : 'submit_error',
    label: formName,
    metadata: {,
      formName,
      errorMessage
    }
  });
};

/**
 * Track search
 */
export const trackSearch = (query: string, results: number): void => {
  trackEvent({
    category: 'search',
    action: 'query',
    label: query,
    value: results,
    metadata: {,
      query,
      resultsCount: results
    }
  });
};

/**
 * Track social share
 */
export const trackSocialShare = (platform: string, url: string): void => {
  trackEvent({
    category: 'social',
    action: 'share',
    label: platform,
    metadata: {,
      platform,
      url
    }
  });
};

/**
 * Track download
 */
export const trackDownload = (fileName: string, fileType: string): void => {
  trackEvent({
    category: 'download',
    action: 'file',
    label: fileName,
    metadata: {,
      fileName,
      fileType
    }
  });
};

/**
 * Track video interaction
 */
export const trackVideo = (
  action: 'play' | 'pause' | 'complete',
  videoId: string,
  progress?: number
): void => {
  trackEvent({
    category: 'video',
    action,
    label: videoId,
    value: progress,
    metadata: {,
      videoId,
      progress
    }
  });
};

/**
 * Set up automatic tracking
 */
const setupAutoTracking = (): void => {
  // Track scroll depth
  let maxScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      // Track milestones
      if (maxScroll >= 25 && maxScroll < 26) {
        trackEngagement('scroll', 25, { milestone: '25%' });
      } else if (maxScroll >= 50 && maxScroll < 51) {
        trackEngagement('scroll', 50, { milestone: '50%' });
      } else if (maxScroll >= 75 && maxScroll < 76) {
        trackEngagement('scroll', 75, { milestone: '75%' });
      } else if (maxScroll >= 90 && maxScroll < 91) {
        trackEngagement('scroll', 90, { milestone: '90%' });
      }
    }
  });
  
  // Track time on page
  const startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeOnPage = (Date.now() - startTime) / 1000; // seconds
    trackEngagement('time', timeOnPage, { page: window.location.pathname });
  });
  
  // Track outbound links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href && link.hostname !== window.location.hostname) {
      trackEvent({
        category: 'outbound',
        action: 'click',
        label: link.href,
        metadata: {,
          text: link.textContent,
          url: link.href
        }
      });
    }
  });
};

/**
 * Send event to custom analytics endpoint
 */
const sendToAnalytics = async (event: AnalyticsEvent): Promise<void> => {
  try {
    // Only send in production
    if (process.env.NODE_ENV !== 'production') return;
    
    await fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
  } catch (error) {
    console.warn('Failed to send analytics:', error);
  }
};

/**
 * Store event locally for offline analysis
 */
const storeEventLocally = (event: AnalyticsEvent): void => {
try {
const key = 'analytics_events';
const stored = localStorage.getItem(key);
const events: AnalyticsEvent[] = stored ? JSON.parse(stored) : [];
events.push(event);
// Keep only last 100 events
if (events.length > 100) {
events.shift();
}
    
    localStorage.setItem(key, JSON.stringify(events));
  } catch (error) {
    console.warn('Failed to store event locally:', error);
  }
};

/**
 * Get or create session ID
 */
const getOrCreateSessionId = (): string => {
  const key = 'analytics_session_id';
  let sessionId = sessionStorage.getItem(key);
  
  if (!sessionId) {
    sessionId = generateId();
    sessionStorage.setItem(key, sessionId);
  }
  
  return sessionId;
};

/**
 * Get session ID
 */
const getSessionId = (): string => {
  return sessionStorage.getItem('analytics_session_id') || '';
};

/**
 * Get or create user ID
 */
const getUserId = (): string | undefined => {
  const key = 'analytics_user_id';
  let userId = localStorage.getItem(key);
  
  if (!userId) {
    userId = generateId();
    localStorage.setItem(key, userId);
  }
  
  return userId;
};

/**
 * Generate unique ID
 */
const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Generate transaction ID
 */
const generateTransactionId = (): string => {
  return `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Get analytics summary
 */
export const getAnalyticsSummary = (): {
events: AnalyticsEvent[];
sessionId: string;
userId: string;
} => {
  const stored = localStorage.getItem('analytics_events');
  const events: AnalyticsEvent[] = stored ? JSON.parse(stored) : [];
  
  return {
    events,
    sessionId: getSessionId(),
    userId: getUserId() || ''
  };
};

/**
 * Clear analytics data
 */
export const clearAnalytics = (): void => {
  localStorage.removeItem('analytics_events');
  sessionStorage.removeItem('analytics_session_id');
  console.log('Analytics data cleared');
};

export default {
  initAnalytics,
  trackEvent,
  trackPageView,
  trackBannerInteraction,
  trackConversion,
  trackEngagement,
  trackError,
  trackFormSubmission,
  trackSearch,
  trackSocialShare,
  trackDownload,
  trackVideo,
  getAnalyticsSummary,
  clearAnalytics
};
