/**
 * Application Type Definitions
 * Centralized type definitions for the application
 */

/**
 * Performance Metrics Interface
 * Defines the structure for performance monitoring data
 */
export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  domLoadTime?: number; // DOM Load Time
  resourceLoadTime?: number; // Resource Load Time
  customMetrics?: Record<string, number>; // Custom performance metrics
}

/**
 * Performance Report Interface
 * Complete performance report structure
 */
export interface PerformanceReport {
  webVitals: Partial<PerformanceMetrics>;
  resources: ResourceStats;
  memory: MemoryStats | null;
  timestamp: number;
}

/**
 * Resource Statistics Interface
 * Tracks resource loading statistics
 */
export interface ResourceStats {
  total: number;
  scripts: number;
  styles: number;
  images: number;
  fonts: number;
}

/**
 * Memory Statistics Interface
 * Browser memory usage statistics
 */
export interface MemoryStats {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

/**
 * Performance Observer Interface
 * Browser performance observer interface
 */
export interface PerformanceObserver {
  observe: (options: { entryTypes: string[] }) => void;
  disconnect: () => void;
}

/**
 * Layout Shift Interface
 * Layout shift performance entry
 */
export interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

/**
 * Performance with Memory Interface
 * Extended performance interface with memory information
 */
export interface PerformanceWithMemory extends Performance {
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

/**
 * SEO Configuration Interface
 * SEO optimization configuration
 */
export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: Record<string, any>;
}

/**
 * Analytics Event Interface
 * Analytics tracking event structure
 */
export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

/**
 * Error Boundary Props Interface
 * Error boundary component props
 */
export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

/**
 * Error Boundary State Interface
 * Error boundary component state
 */
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * Log Context Interface
 * Logging context structure
 */
export interface LogContext {
  component: string;
  action: string;
  metadata?: Record<string, any>;
}

/**
 * API Response Interface
 * Standard API response structure
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Service Configuration Interface
 * Service configuration structure
 */
export interface ServiceConfig {
  name: string;
  description: string;
  features: string[];
  pricing?: {
    type: 'free' | 'paid' | 'enterprise';
    amount?: number;
    currency?: string;
  };
  category: string;
  tags: string[];
}