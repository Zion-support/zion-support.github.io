export function debounce<T extends (...args: any[]) =></T> any>(
export function throttle<T extends (...args: any[]) =></T> any>(
export function createIntersectionObserver(
export function getMemoryUsage(): any {
export function preloadCriticalResources(): void {
export function optimizeImage(src: string, width?: number, height?: number): string {
export function createLazyImageObserver(): IntersectionObserver | null {
export function checkPerformanceBudget(): void {
export function addResourceHints(): void {
/**
 * Performance optimization utilities for the Zion Tech Group application;
 */

// Debounce function for performance optimization;
  func: T,
  wait: number;
): (...args: Parameters<T></T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T></T>) => {
    clearTimeout(timeout);
 func(...args), wait);
  } ;

// Throttle function for performance optimization;
  func: T,
  limit: number;
): (...args: Parameters<T></T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T></T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
 (inThrottle = false), limit);
  } ;

// Intersection Observer for lazy loading;
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit;
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options} );

// Performance monitoring utilities;
 void): void {
  if (typeof window === 'undefined' || !('performance' in window)) {
    fn();
    return;

  const start = performance.now();
  fn();
  const end = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${end - start} milliseconds`);

// Memory usage monitoring;
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  
  return (performance, as, any).memory;

// Bundle size optimization - preload critical resources;
  if (typeof window === 'undefined') return;
  
  const criticalResources = [
    '/fonts/inter.woff2',
    '/images/logo.png',
    '/images/og-image.jpg'
  ];
  
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 'image';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  } );

// Image optimization utility;
  // Add image optimization parameters if needed;
  const url = new URL(src, window.location.origin);
  if (width) url.searchParams.set('w', width.toString());
  if (height) url.searchParams.set('h', height.toString());
  url.searchParams.set('q', '80'); // Quality;
  url.searchParams.set('f', 'webp'); // Format;
  return url.toString();

// Lazy loading utility for images;
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.classList.remove('lazy');
          img.classList.add('loaded');
    } );
  });

// Performance budget monitoring;
  if (typeof window === 'undefined') return;
  
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return;
  
  const loadTime = navigation.loadEventEnd - navigation.fetchStart;
  const budget = 3000; // 3 seconds;
 budget) {
 ${budget} ms`);

// Resource hints for better performance;
  if (typeof window === 'undefined') return;
  
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' } ,
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' } ,
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' } ,
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } ,
  ];
  
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });