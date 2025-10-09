'use client';
import React from 'react'
/**
 * Enhanced Error Monitoring System for Zion Tech Group Website
 * Provides comprehensive error tracking, reporting, and recovery
 */
interface ErrorContext {
  userId?: string;
  sessionId: string;
  url: string;
  userAgent: string;
  timestamp: string;
  component?: string;
  action?: string;
  metadata?: Record<string, unknown>;
  filename?: string;
  lineno?: number;
  colno?: number;
  reason?: any;
  resource?: string;
  status?: number;
  statusText?: string;
  category?: string;
  duration?: number;
  startTime?: number;
  memoryUsage?: number;
}
interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'promise' | 'resource' | 'custom';
  resolved: boolean;
  occurrences: number;
  firstSeen: string;
  lastSeen: string;
}
class EnhancedErrorMonitoring {
  private static instance: EnhancedErrorMonitoring;
  private errorQueue: ErrorReport[] = [];
  private maxQueueSize = 1000;
  private sessionId: string;
  private userId?: string;
  private isOnline = true;
  private constructor() {
    this.sessionId = this.generateSessionId()
    this.initializeMonitoring()
    this.setupNetworkMonitoring()
  }
  static getInstance(): EnhancedErrorMonitoring {
    if (!EnhancedErrorMonitoring.instance) {
      EnhancedErrorMonitoring.instance = new EnhancedErrorMonitoring()
    }
    return EnhancedErrorMonitoring.instance
  }
  /**
   * Initialize comprehensive error monitoring
   */
  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError(event.error || new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        category: 'javascript'
      });
    })
    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(new Error(`Unhandled Promise Rejection: ${event.reason}`), {
        reason: event.reason,
        category: 'promise'
      });
    })
    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.handleError(new Error(`Resource loading error: ${event.type}`), {
          category: 'resource'
        })
      }
    }, true)
    // Network errors
    this.setupNetworkErrorMonitoring()
    // Performance monitoring
    this.setupPerformanceErrorMonitoring()
  }
  /**
   * Setup network error monitoring
   */
  private setupNetworkErrorMonitoring(): void {
    const originalFetch = window.fetch
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch.apply(window, args)
        if (!response.ok) {
          this.handleError(new Error(`HTTP ${response.status}: ${response.statusText}`), {
            url: args[0] as string,
            status: response.status,
            statusText: response.statusText,
            category: 'network'
          });
        }
        return response
      } catch (error) {
