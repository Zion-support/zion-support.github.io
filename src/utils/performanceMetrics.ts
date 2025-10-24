'use client';
/**
 * Performance Metrics Utility
 * Advanced performance tracking and monitoring for web applications
 */;
export interface PerformanceMetric {
;
  name: string,value: number,unit: string,timestamp: Date,category: 'load' | 'runtime' | 'network' | 'memory' | 'custom';
metadata?: Record<string,unknown>
}
}
;
export interface WebVitalsMetrics {
;
  FCP?: number // First Contentful Paint;
LCP?: number // Largest Contentful Paint;
FID?: number // First Input Delay;
CLS?: number // Cumulative Layout Shift;
TTFB?: number // Time to First Byte;
INP?: number // Interaction to Next Paint
}
}
;
export interface PerformanceReport {
;
  metrics: PerformanceMetric[];
webVital,s: WebVitalsMetrics,summary: {;
avgLoadTim,e: number,totalMetrics: number,performanceScore: number,recommendations: string[],
}
  };
  timestamp: Date
,}
;
export class PerformanceMetrics {;
  private static instance: PerformanceMetrics;
private metrics: PerformanceMetric[] = [];
private webVital,s: WebVitalsMetrics = {,}
  private observers: PerformanceObserver[] = [];
constructor() {;
if(typeof,window !== 'undefined') {,;
this.initializeObservers();,