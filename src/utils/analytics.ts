<<<<<<< HEAD
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {</string>if</string> (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle});
  }
};

export const initAnalytics = (measurementId: string) => {
  if (typeof window !== 'undefined') {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
=======
'use client';
import React from 'react'

// Declare gtag function for Google Analytics
declare global {
  function gtag(command: string, targetId: string, config?: any): void;
}

/**
 * Enhanced Analytics Utility
 * Provides type-safe analytics tracking with error handling
 */
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}
export interface AnalyticsUser {
  id?: string;
  properties?: Record<string, unknown>;
}
class AnalyticsService {
  private isInitialized = false
  private queue: AnalyticsEvent[] = []
  private readonly maxQueueSize = 100
  private config = {
    gaId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'
  }
  /**
   * Initialize analytics service
   */
  initialize(): void {
    if (this.isInitialized) return
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined') return
      // Process queued events
      this.processQueue()
      this.isInitialized = true
    } catch (error) {
      // console.error('Analytics initialization failed:', error)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0468
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId);
  }
};

// Declare global types
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}