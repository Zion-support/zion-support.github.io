/**
 * Global type definitions for enhanced type safety
 */

import { ErrorInfo, ReactNode } from "react";

// Error Boundary Types
export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetOnPropsChange?: boolean;
  resetKeys?: Array<string | number>;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryAttempts: number;
  lastErrorTime: Date | null;
}

// Performance Metrics Types
export interface PerformanceMetric {
  timestamp: number;
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
  memoryUsage?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
  networkInfo?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
  };
  customMetrics: Record<string, number>;
}

export interface PerformanceMetrics extends Record<string, unknown> {
  timestamp: number;
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
  memoryUsage?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
  networkInfo?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
  };
  customMetrics: Record<string, number>;
}

// Network Information Type Export
export interface NetworkInformation {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
  addEventListener: (event: string, listener: EventListener) => void;
  removeEventListener: (event: string, listener: EventListener) => void;
}

// Browser API Extensions
declare global {
  interface MemoryInfo {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  }

  interface NetworkInformation {
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
    addEventListener: (event: string, listener: EventListener) => void;
    removeEventListener: (event: string, listener: EventListener) => void;
  }

  interface Navigator {
    connection?: NetworkInformation;
  }

  interface PerformanceNavigationTimingExtended {
    domLoading?: number;
    domComplete: number;
  }
}

export {};
