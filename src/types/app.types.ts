/**
 * Application Type Definitions
 */

export interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  tti: number;
  tbt: number;
  si: number;
}

export interface UserMetrics {
  userId: string;
  sessionId: string;
  timestamp: number;
  page: string;
  referrer?: string;
  userAgent: string;
  viewport: {
    width: number;
    height: number;
  };
}

export interface ErrorMetrics {
  message: string;
  stack?: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  timestamp: number;
  userId?: string;
  sessionId?: string;
  page: string;
}

export interface ApiMetrics {
  endpoint: string;
  method: string;
  statusCode: number;
  responseTime: number;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export interface NavigationMetrics {
  from: string;
  to: string;
  duration: number;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export interface CustomEvent {
  name: string;
  category: string;
  value?: number;
  properties?: Record<string, any>;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export type MetricType = 
  | 'performance'
  | 'user'
  | 'error'
  | 'api'
  | 'navigation'
  | 'custom';

export interface MetricData {
  type: MetricType;
  data: PerformanceMetrics | UserMetrics | ErrorMetrics | ApiMetrics | NavigationMetrics | CustomEvent;
  timestamp: number;
}