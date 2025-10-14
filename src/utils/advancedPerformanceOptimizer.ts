'use client';'
import React from "react";"

export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number[]>;
  private constructor() {
    this.metrics = new Map()
  }
  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer()
    }
    return PerformanceOptimizer.instance;
  }
  
  measurePerformance<T>(
    name: string,
    fn: () => T | Promise<T></T>
  ): T | Promise<T> {
    const start = performance.now()
    try {
      const result = fn()
      if (result instanceof Promise) {
        return result.finally(() => {
          this.recordMetric(name, performance.now() - start)
        }) as Promise<T></T>
      } else {
        this.recordMetric(name, performance.now() - start)
        return result;
      }
    } catch (error) {
      this.recordMetric(name, performance.now() - start)
      throw error;
    }
  }
  
  private recordMetric(name: string, duration: number): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, [])
    }
    const metrics = this.metrics.get(name)!
    metrics.push(duration)
    // Keep only last 100 measurements;
    if (metrics.length > 100) {
      metrics.shift()
    }
  }
  
  getAverageMetric(name: string): number {
    const metrics = this.metrics.get(name)
    if (!metrics || metrics.length === 0) {
      return 0;
    }
    const sum = metrics.reduce((acc, val) => acc + val, 0)
    return sum / metrics.length;
  }
  
  debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number,
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;
    return (...args: Parameters<T>) => {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        func(...args)
      }, wait)
    }
  }
  
  throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number,
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean = false;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit)
      }
    }
  }
  
  memoize<T extends (...args: unknown[]) => unknown>(
    func: T;
  ): (...args: Parameters<T>) => ReturnType<T> {
    const cache = new Map<string, ReturnType<T>>()
    return (...args: Parameters<T>): ReturnType<T> => {
      const key = JSON.stringify(args)
      if (cache.has(key)) {
        return cache.get(key)!
      }
      const result = func(...args) as ReturnType<T></T>
      cache.set(key, result)
      return result;
    }
  }
  
  getMetricsSummary(): Record<string, { avg: number; count: number }> {
    const summary: Record<string, { avg: number; count: number }> = {}
    this.metrics.forEach((values, name) => {
      summary[name] = {
        avg: this.getAverageMetric(name),
        count: values.length;
      }
    })
    return summary;
  }
}
export default PerformanceOptimizer.getInstance()
;