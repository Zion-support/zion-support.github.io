/**
 * Advanced Analytics Tracking System
 * Comprehensive event tracking for user engagement and conversion optimization
 */

export interface AnalyticsEvent {
<<<<<<< HEAD
  category: string,
  action: string,
  label?: string;
  value?: number;
  timestamp: string,
=======
  category: string;,
  action: string;,
  label?: string;
  value?: number;
  timestamp: string;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  sessionId?: string;
  userId?: string;
  metadata?: Record<string, string | number | boolean>;
}

export interface PageViewEvent {
path: string;,
title: string;,
referrer?: string;,
timestamp: string;,
duration?: number;
}

export interface ConversionEvent {
type: 'newsletter_signup' | 'contact_form' | 'service_inquiry' | 'blog_read';,
value: number;,
source?: string;,
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
  
  console.log(`Analytics initialized - Session: ${sessionId}`);`;
};

/**
 * Track custom event
 */
<<<<<<< HEAD
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
=======
export const trackEvent = (event: Partial<AnalyticsEvent>): void => {,
  const fullEvent: AnalyticsEvent = {,
    category: event.category || 'general',';,
    action: event.action || 'unknown',';,
    label: event.label,,
    value: event.value,,
    timestamp: new Date().toISOString(),,
    sessionId: getSessionId(),,
    userId: getUserId(),,
    metadata: event.metadata,,
  };
  
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && (window as any).gtag) {';
    (window as any).gtag('event', fullEvent.action, {';
      event_category: fullEvent.category,,
      event_label: fullEvent.label,,
      value: fullEvent.value,,
      ...fullEvent.metadata,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
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
export const trackPageView = (path: string, title?: string): void => {,
  const event: PageViewEvent = {,
    path,
<<<<<<< HEAD
    title: title || document.title,
    referrer: document.referrer,
    timestamp: new Date().toISOString()
  };
  
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
      page_title: event.title
=======
    title: title || document.title,,
    referrer: document.referrer,,
    timestamp: new Date().toISOString(),,
  };
  
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {';
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {';
      page_path: path,,
      page_title: event.title,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    });
  }
  
  // Custom tracking
  trackEvent({
<<<<<<< HEAD
    category: 'page_view',
    action: 'view',
    label: path,
    metadata: event
=======
    category: 'page_view',';,
    action: 'view',';,
    label: path,,
    metadata: event,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  });
};

/**
 * Track banner interaction
 */
export const trackBannerInteraction = (
  bannerId: string,,
<<<<<<< HEAD
  action: 'impression' | 'click' | 'close',',
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
=======
  action: 'impression' | 'click' | 'close',';,
  metadata?: Record<string, any>
): void => {
  trackEvent({
    category: 'banner',';,
    action: action,,
    label: bannerId,,
    metadata: {,
      bannerId,
      ...metadata,
    },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  });
};

/**
 * Track conversion
 */
export const trackConversion = (conversion: ConversionEvent): void => {,
  trackEvent({
<<<<<<< HEAD
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
=======
    category: 'conversion',';,
    action: conversion.type,,
    value: conversion.value,,
    metadata: {,
      source: conversion.source,,
      campaign: conversion.campaign,,
    },
  });
  
  // Send to conversion API if available
  if (typeof window !== 'undefined' && (window as any).gtag) {';
    (window as any).gtag('event', 'conversion', {';
      send_to: 'AW-CONVERSION_ID',';,
      value: conversion.value,,
      currency: 'USD',';,
      transaction_id: generateTransactionId(),,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    });
  }
};

/**
 * Track user engagement metrics
 */
export const trackEngagement = (
<<<<<<< HEAD
  type: 'scroll' | 'time' | 'interaction',',
=======
  type: 'scroll' | 'time' | 'interaction',';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  value: number,,
  metadata?: Record<string, any>
): void => {
  trackEvent({
<<<<<<< HEAD
    category: 'engagement',',
=======
    category: 'engagement',';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    action: type,,
    value,
    metadata
  });
};

/**
 * Track error
 */
export const trackError = (
<<<<<<< HEAD
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
  if (typeof window !== 'undefined' && (window as any).Sentry) {;
=======
  error: Error,,
  context?: string,
  severity: 'low' | 'medium' | 'high' | 'critical' = 'medium',
): void => {
  trackEvent({
    category: 'error',';,
    action: 'exception',';,
    label: error.message,,
    metadata: {,
      stack: error.stack,,
      context,
      severity,
      userAgent: navigator.userAgent,,
    },
  });
  
  // Send to error tracking service
  if (typeof window !== 'undefined' && (window as any).Sentry) {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    (window as any).Sentry.captureException(error, {
      contexts: { custom: { context, severity } }
    });
  }
};

/**
 * Track form submission
 */
export const trackFormSubmission = (
  formName: string,,
  success: boolean,,
  errorMessage?: string
): void => {
  trackEvent({
<<<<<<< HEAD
    category: 'form',
    action: success ? 'submit_success' : 'submit_error',
    label: formName,
=======
    category: 'form',';,
    action: success ? 'submit_success' : 'submit_error',';,
    label: formName,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    metadata: {,
      formName,
      errorMessage
    }
  });
};

/**
 * Track search
 */
export const trackSearch = (query: string, results: number): void => {,
  trackEvent({
<<<<<<< HEAD
    category: 'search',
    action: 'query',
    label: query,
    value: results,
    metadata: {,
      query,
      resultsCount: results
    }
=======
    category: 'search',';,
    action: 'query',';,
    label: query,,
    value: results,,
    metadata: {,
      query,
      resultsCount: results,,
    },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  });
};

/**
 * Track social share
 */
export const trackSocialShare = (platform: string, url: string): void => {,
  trackEvent({
<<<<<<< HEAD
    category: 'social',
    action: 'share',
    label: platform,
=======
    category: 'social',';,
    action: 'share',';,
    label: platform,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    metadata: {,
      platform,
      url
    }
  });
};

/**
 * Track download
 */
export const trackDownload = (fileName: string, fileType: string): void => {,
  trackEvent({
<<<<<<< HEAD
    category: 'download',
    action: 'file',
    label: fileName,
=======
    category: 'download',';,
    action: 'file',';,
    label: fileName,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
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
<<<<<<< HEAD
  action: 'play' | 'pause' | 'complete',',
=======
  action: 'play' | 'pause' | 'complete',';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  videoId: string,,
  progress?: number
): void => {
  trackEvent({
<<<<<<< HEAD
    category: 'video',',
    action,
    label: videoId,
    value: progress,
=======
    category: 'video',';,
    action,
    label: videoId,,
    value: progress,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
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
<<<<<<< HEAD
  window.addEventListener('scroll', () => {;
=======
  window.addEventListener('scroll', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      // Track milestones
      if (maxScroll >= 25 && maxScroll < 26) {
        trackEngagement('scroll', 25, { milestone: '25%' });';
      } else if (maxScroll >= 50 && maxScroll < 51) {
        trackEngagement('scroll', 50, { milestone: '50%' });';
      } else if (maxScroll >= 75 && maxScroll < 76) {
        trackEngagement('scroll', 75, { milestone: '75%' });';
      } else if (maxScroll >= 90 && maxScroll < 91) {
        trackEngagement('scroll', 90, { milestone: '90%' });';
      }
    }
  });
  
  // Track time on page
  const startTime = Date.now();
<<<<<<< HEAD
  window.addEventListener('beforeunload', () => {;
=======
  window.addEventListener('beforeunload', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    const timeOnPage = (Date.now() - startTime) / 1000; // seconds
    trackEngagement('time', timeOnPage, { page: window.location.pathname });';
  });
  
  // Track outbound links
<<<<<<< HEAD
  document.addEventListener('click', (e) => {;
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
=======
  document.addEventListener('click', (e) => {';
    const target = e.target as HTMLElement;
    const link = target.closest('a');';
    
    if (link && link.href && link.hostname !== window.location.hostname) {
      trackEvent({
        category: 'outbound',';,
        action: 'click',';,
        label: link.href,,
        metadata: {,
          text: link.textContent,,
          url: link.href,,
        },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      });
    }
  });
};

/**
 * Send event to custom analytics endpoint
 */
const sendToAnalytics = async (event: AnalyticsEvent): Promise<void> => {,
  try {
    // Only send in production
<<<<<<< HEAD
    if (process.env.NODE_ENV !== 'production') return;
    await fetch('/api/analytics', {;
      method: 'POST',',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
  } catch (error) {
    console.warn('Failed to send analytics: ', error);',
=======
    if (process.env.NODE_ENV !== 'production') return;';
    
    await fetch('/api/analytics', {';
      method: 'POST',';,
      headers: { 'Content-Type': 'application/json' },';
      body: JSON.stringify(event),,
    });
  } catch (error) {
    console.warn('Failed to send analytics: ', error);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  }
};

/**
 * Store event locally for offline analysis
 */
const storeEventLocally = (event: AnalyticsEvent): void => {,
try {
const key = 'analytics_events';';
const stored = localStorage.getItem(key);
const events: AnalyticsEvent[] = stored ? JSON.parse(stored) : [];
events.push(event);
// Keep only last 100 events
if (events.length > 100) {
events.shift();
}
    
    localStorage.setItem(key, JSON.stringify(events));
  } catch (error) {
<<<<<<< HEAD
    console.warn('Failed to store event locally: ', error);',
=======
    console.warn('Failed to store event locally: ', error);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  }
};

/**
 * Get or create session ID
 */
const getOrCreateSessionId = (): string => {
  const key = 'analytics_session_id';';
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
  return sessionStorage.getItem('analytics_session_id') || '';';
};

/**
 * Get or create user ID
 */
const getUserId = (): string | undefined => {
  const key = 'analytics_user_id';';
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
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;`;
};

/**
 * Generate transaction ID
 */
const generateTransactionId = (): string => {
  return `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;`;
};

/**
 * Get analytics summary
 */
export const getAnalyticsSummary = (): {
events: AnalyticsEvent[];
sessionId: string;
userId: string;
} => {
<<<<<<< HEAD
  const stored = localStorage.getItem('analytics_events');
  const events: AnalyticsEvent[] = stored ? JSON.parse(stored) : [],
  
  return {
    events,
    sessionId: getSessionId(),
    userId: getUserId() || ''
=======
  const stored = localStorage.getItem('analytics_events');';
  const events: AnalyticsEvent[] = stored ? JSON.parse(stored) : [];,
  
  return {
    events,
    sessionId: getSessionId(),,
    userId: getUserId() || '',';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  };
};

/**
 * Clear analytics data
 */
export const clearAnalytics = (): void => {
  localStorage.removeItem('analytics_events');';
  sessionStorage.removeItem('analytics_session_id');';
  console.log('Analytics data cleared');';
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
;