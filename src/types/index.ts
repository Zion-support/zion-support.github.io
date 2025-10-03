export interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
}

export interface MemoryUsage {
  used: number; // MB
  total: number; // MB
  limit: number; // MB
}

export interface ResourceTiming {
  name: string;
  duration: number;
  size: number;
  type: string;
}

export interface NavigationTiming {
  domContentLoaded: number;
  loadComplete: number;
  totalTime: number;
  dns: number;
  tcp: number;
  request: number;
  response: number;
  domProcessing: number;
}

export interface PerformanceStatus {
  fcp: boolean;
  lcp: boolean;
  fid: boolean;
  cls: boolean;
}