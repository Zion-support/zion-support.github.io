import React from "react",
/**
 * Performance Optimization Utilities
 * Advanced performance monitoring and optimization tools
 */
import { useState, useEffect } from "react",
interface PerformanceMetrics {
  loadTime: number,
  renderTime: number,
  memoryUsage: number,
  bundleSize: number}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0;
    bundleSize: 0
  },
  private observers: PerformanceObserver[] = [],
  constructor() {
    this.initializeObservers();

  private initializeObservers(): void {
    // Observe navigation timing
    if ("PerformanceObserver" in window) {
      try {
        const navObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === "navigation") {
              const navEntry = entry as PerformanceNavigationTiming;
              this.metrics.loadTime = navEntry.loadEventEnd - navEntry.fetchStart;
            }
          });
        });
        navObserver.observe({ entryTypes: ["navigation"] }),
        this.observers.push(navObserver);
      } catch (error) {
        console.warn("Navigation observer failed:", error);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }, }

  public calculatePerformanceScore(): number {
    const { loadTime, renderTime, memoryUsage } = this.metrics;
    
    // Simple scoring algorithm (0-100)
    let score = 100;
    
    if (loadTime > 3000) score -= 20;
    else if (loadTime > 2000) score -= 10;
    
    if (renderTime > 1000) score -= 20;
    else if (renderTime > 500) score -= 10;
    
    if (memoryUsage > 50) score -= 15;
    else if (memoryUsage > 30) score -= 8;
    
    return Math.max(0, score);

  public preloadResources(urls: string[]): void {
    urls.forEach(url => {
      const link = document.createElement("link"),
      link.rel = "preload";
      link.href = url;
      link.as = this.getResourceType(url);
      document.head.appendChild(link););

  private getResourceType(url: string): string {
    const extension = url.split('.').pop()?.toLowerCase(),
    switch (extension) {
      case 'css':
        return 'style',
      case 'js':
        return 'script',
      case 'woff':
      case 'woff2':
      case 'ttf':
      case 'otf':
        return 'font',
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'webp':
      case 'svg':
        return 'image';
      default: return 'fetch'}
  }

  private updateMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize, }
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [], }
}

// Initialize the optimizer
const performanceOptimizer = new PerformanceOptimizer();

// React hook for performance monitoring
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0
  }),
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const optimizer = new PerformanceOptimizer();
    
    const updateMetrics = () => {
      const currentMetrics = optimizer.getMetrics();
      setMetrics(currentMetrics);
      
      // Calculate performance score
      const score = calculatePerformanceScore(currentMetrics);
      setScore(score);;

    // Update metrics on load
    if (document.readyState === "complete") {
      updateMetrics(); else {
      window.addEventListener("load", updateMetrics);

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", updateMetrics);
      optimizer.cleanup();, }, []);

  return { metrics, score }, };

const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
  let score = 100,
  // Deduct points for poor performance
  if (metrics.loadTime > 3000) score -= 20;
  if (metrics.renderTime > 100) score -= 15;
  if (metrics.memoryUsage > 50 * 1024 * 1024) score -= 25; // 50MB
  if (metrics.bundleSize > 1000 * 1024) score -= 10; // 1MB
  
  return Math.max(0, score);;

export default PerformanceOptimizer;