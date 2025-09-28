/**
 * Comprehensive type definitions for all components and utilities
 */

import { ReactNode } from 'react';

// Enhanced Notification Types
export interface EnhancedNotification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: number;
  duration?: number;
  actions?: NotificationAction[];
  persistent?: boolean;
}

export interface NotificationAction {
  label: string;
  action: () => void;
  variant?: 'primary' | 'secondary';
}

// Performance Report Types
export interface PerformanceReport {
  lcp: number;
  fcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
  alerts: PerformanceAlert[];
  recommendations: PerformanceRecommendation[];
}

export interface PerformanceAlert {
  type: 'warning' | 'error' | 'info';
  message: string;
  metric: string;
  value: number;
  threshold: number;
  timestamp: number;
}

export interface PerformanceRecommendation {
  category: 'performance' | 'seo' | 'accessibility' | 'security';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
  effort: 'low' | 'medium' | 'high';
  implementation?: string;
}

// SEO Audit Types
export interface SEOAuditResult {
  score: number;
  issues: SEOIssue[];
  recommendations: PerformanceRecommendation[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
  };
  technical: {
    robotsTxt: boolean;
    sitemap: boolean;
    structuredData: boolean;
    mobileFriendly: boolean;
  };
}

export interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  category: string;
  message: string;
  element?: string;
  line?: number;
  column?: number;
  impact: 'high' | 'medium' | 'low';
  fix?: string;
}

// Cache Stats Types
export interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  maxSize: number;
  hitRate: number;
  lastAccessed: number;
  entries: number;
}

// Monitoring Dashboard Types
export interface MonitoringMetrics {
  performance: PerformanceReport | null;
  seo: SEOAuditResult | null;
  cache: {
    api: CacheStats;
    image: CacheStats;
    data: CacheStats;
  };
}

// Optimization Suggestion Types
export interface OptimizationSuggestion {
  id: string;
  category: 'performance' | 'seo' | 'accessibility' | 'security';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
  effort: 'low' | 'medium' | 'high';
  implementation?: string;
  estimatedSavings?: {
    time?: number;
    size?: number;
    score?: number;
  };
}

// Enhanced Performance Metrics
export interface EnhancedPerformanceMetrics {
  lcp: number;
  fcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
  renderTime: number;
  memory: {
    used: number;
    total: number;
    limit: number;
  };
  domContentLoaded: number;
  domInteractive: number;
  violations: string[];
}

// Chart and Data Visualization Types
export interface DataPoint {
  x: number;
  y: number;
  name?: string;
  value?: number;
  color?: string;
}

export interface ChartData {
  name: string;
  data: DataPoint[];
  type: 'line' | 'bar' | 'pie' | 'area';
  color?: string;
}

export interface VisualizationOptions {
  title?: string;
  subtitle?: string;
  width?: number;
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  colors?: string[];
  animation?: boolean;
}

export interface StoredChart {
  data: ChartData;
  options: VisualizationOptions;
  container: HTMLElement;
}

// Analytics Types
export interface AnalyticsData {
  events: Array<{
    event: string;
    timestamp: number;
    properties?: Record<string, unknown>;
  }>;
  sources: Array<{
    source: string;
    percentage: number;
  }>;
  metrics: Record<string, number>;
}

// Component Props Types
export interface EnhancedPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

export interface LazyComponentProps {
  fallback?: ReactNode;
  children: ReactNode;
}

// Keyboard Shortcuts Types
export interface KeyboardShortcuts {
  navigation: string;
  tools: string;
  system: string;
  editing: string;
  view: string;
  help: string;
}

// Security System Types
export interface SecuritySystem {
  logSecurityEvent: (event: SecurityEvent) => void;
  detectSuspiciousContent: (content: string) => boolean;
  validateInput: (input: string) => boolean;
  sanitizeContent: (content: string) => string;
}

export interface SecurityEvent {
  type: 'xss' | 'injection' | 'csrf' | 'suspicious';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  source?: string;
  data?: Record<string, unknown>;
}

// Accessibility Types
export interface AccessibilityEnhancement {
  type: 'keyboard' | 'screenreader' | 'high-contrast' | 'reduced-motion';
  enabled: boolean;
  options?: Record<string, unknown>;
}

// Error Recovery Types
export interface ErrorRecoveryStrategy {
  type: 'retry' | 'fallback' | 'circuit-breaker' | 'graceful-degradation';
  maxAttempts: number;
  backoffMs: number;
  fallbackAction?: () => void;
}

// Export all types
export type {
  EnhancedNotification,
  NotificationAction,
  PerformanceReport,
  PerformanceAlert,
  PerformanceRecommendation,
  SEOAuditResult,
  SEOIssue,
  CacheStats,
  MonitoringMetrics,
  OptimizationSuggestion,
  EnhancedPerformanceMetrics,
  DataPoint,
  ChartData,
  VisualizationOptions,
  StoredChart,
  AnalyticsData,
  EnhancedPerformanceDashboardProps,
  LazyComponentProps,
  KeyboardShortcuts,
  SecuritySystem,
  SecurityEvent,
  AccessibilityEnhancement,
  ErrorRecoveryStrategy,
};