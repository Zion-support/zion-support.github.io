/**
 * Application Type Definitions
 * Core types used across the application
 */

/**
 * Performance Metrics Interface
 * Web Vitals and performance measurement types
 */
export interface PerformanceMetrics {
  /** First Contentful Paint */
  fcp?: number;
  /** Largest Contentful Paint */
  lcp?: number;
  /** First Input Delay */
  fid?: number;
  /** Cumulative Layout Shift */
  cls?: number;
  /** Time to First Byte */
  ttfb?: number;
}

/**
 * Navigation Performance Metrics
 */
export interface NavigationMetrics {
  /** Time to First Byte */
  ttfb: number;
  /** First Contentful Paint */
  fcp: number;
  /** Largest Contentful Paint */
  lcp: number;
  /** First Input Delay */
  fid: number;
  /** Cumulative Layout Shift */
  cls: number;
  /** Total Blocking Time */
  tbt: number;
  /** Speed Index */
  si: number;
}

/**
 * Resource Performance Metrics
 */
export interface ResourceMetrics {
  /** Total number of resources */
  total: number;
  /** Number of script resources */
  scripts: number;
  /** Number of style resources */
  styles: number;
  /** Number of image resources */
  images: number;
  /** Number of font resources */
  fonts: number;
  /** Total transfer size in bytes */
  transferSize: number;
  /** Total decoded size in bytes */
  decodedSize: number;
}

/**
 * Memory Performance Metrics
 */
export interface MemoryMetrics {
  /** Used JavaScript heap size in bytes */
  usedJSHeapSize: number;
  /** Total JavaScript heap size in bytes */
  totalJSHeapSize: number;
  /** JavaScript heap size limit in bytes */
  jsHeapSizeLimit: number;
}

/**
 * Performance Report Interface
 */
export interface PerformanceReport {
  /** Web Vitals metrics */
  webVitals: Partial<PerformanceMetrics>;
  /** Resource loading statistics */
  resources: ResourceMetrics;
  /** Memory usage statistics */
  memory: MemoryMetrics | null;
  /** Report timestamp */
  timestamp: number;
  /** User agent string */
  userAgent?: string;
  /** Connection information */
  connection?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
}

/**
 * Performance Thresholds
 */
export interface PerformanceThresholds {
  /** Good performance threshold for FCP (ms) */
  fcp: { good: number; needsImprovement: number };
  /** Good performance threshold for LCP (ms) */
  lcp: { good: number; needsImprovement: number };
  /** Good performance threshold for FID (ms) */
  fid: { good: number; needsImprovement: number };
  /** Good performance threshold for CLS */
  cls: { good: number; needsImprovement: number };
  /** Good performance threshold for TTFB (ms) */
  ttfb: { good: number; needsImprovement: number };
}

/**
 * Performance Observer Entry Types
 */
export type PerformanceEntryType = 
  | 'navigation'
  | 'resource'
  | 'paint'
  | 'largest-contentful-paint'
  | 'first-input'
  | 'layout-shift'
  | 'measure'
  | 'mark';

/**
 * Performance Measurement Options
 */
export interface PerformanceMeasurementOptions {
  /** Whether to include resource timing */
  includeResources?: boolean;
  /** Whether to include memory information */
  includeMemory?: boolean;
  /** Whether to include connection information */
  includeConnection?: boolean;
  /** Custom thresholds */
  thresholds?: Partial<PerformanceThresholds>;
}

/**
 * Performance Event Callback
 */
export type PerformanceEventCallback = (report: PerformanceReport) => void;

/**
 * Performance Monitor Configuration
 */
export interface PerformanceMonitorConfig {
  /** Whether to automatically start monitoring */
  autoStart?: boolean;
  /** Measurement options */
  options?: PerformanceMeasurementOptions;
  /** Event callback */
  onReport?: PerformanceEventCallback;
  /** Report interval in milliseconds */
  reportInterval?: number;
}

/**
 * Error Types
 */
export interface AppError {
  /** Error message */
  message: string;
  /** Error code */
  code?: string;
  /** Error stack trace */
  stack?: string;
  /** Additional error context */
  context?: Record<string, unknown>;
  /** Error timestamp */
  timestamp: number;
}

/**
 * API Response Types
 */
export interface ApiResponse<T = unknown> {
  /** Response data */
  data: T;
  /** Success status */
  success: boolean;
  /** Error message if any */
  error?: string;
  /** Response timestamp */
  timestamp: number;
}

/**
 * Component Props Base Interface
 */
export interface BaseComponentProps {
  /** CSS class name */
  className?: string;
  /** Component ID */
  id?: string;
  /** Test ID for testing */
  'data-testid'?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Theme Types
 */
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  /** Current theme */
  theme: Theme;
  /** Whether to use system preference */
  useSystemPreference: boolean;
}

/**
 * SEO Types
 */
export interface SEOConfig {
  /** Page title */
  title: string;
  /** Meta description */
  description: string;
  /** Open Graph title */
  ogTitle?: string;
  /** Open Graph description */
  ogDescription?: string;
  /** Open Graph image */
  ogImage?: string;
  /** Canonical URL */
  canonical?: string;
  /** Keywords */
  keywords?: string[];
  /** Robots directive */
  robots?: string;
}

/**
 * Analytics Types
 */
export interface AnalyticsEvent {
  /** Event name */
  name: string;
  /** Event parameters */
  parameters?: Record<string, unknown>;
  /** Event timestamp */
  timestamp: number;
  /** User ID */
  userId?: string;
  /** Session ID */
  sessionId?: string;
}

/**
 * Feature Flag Types
 */
export interface FeatureFlag {
  /** Flag name */
  name: string;
  /** Whether the flag is enabled */
  enabled: boolean;
  /** Flag description */
  description?: string;
  /** Flag value */
  value?: unknown;
  /** Flag conditions */
  conditions?: Record<string, unknown>;
}

/**
 * Configuration Types
 */
export interface AppConfig {
  /** Application name */
  name: string;
  /** Application version */
  version: string;
  /** Environment */
  environment: 'development' | 'staging' | 'production';
  /** API base URL */
  apiBaseUrl: string;
  /** Feature flags */
  featureFlags: FeatureFlag[];
  /** Performance thresholds */
  performanceThresholds: PerformanceThresholds;
}

/**
 * Utility Types
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Event Types
 */
export interface CustomEvent<T = unknown> extends Event {
  detail: T;
}

/**
 * Storage Types
 */
export interface StorageItem<T = unknown> {
  /** Item value */
  value: T;
  /** Expiration timestamp */
  expires?: number;
  /** Creation timestamp */
  createdAt: number;
}

/**
 * Cache Types
 */
export interface CacheConfig {
  /** Cache key */
  key: string;
  /** Cache TTL in milliseconds */
  ttl: number;
  /** Whether to use memory cache */
  useMemory: boolean;
  /** Whether to use localStorage */
  useLocalStorage: boolean;
  /** Cache version */
  version?: string;
}