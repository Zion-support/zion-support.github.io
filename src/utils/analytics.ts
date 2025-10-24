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