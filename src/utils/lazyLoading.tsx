import React, { lazy, ComponentType, useState, useRef, useEffect } from 'react';

/**
 * Enhanced lazy loading utility with error boundaries and loading states
 */
export function createLazyComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: ComponentType
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyWrapper(props: any) {
    return (
      <LazyComponent
        {...props}
        fallback={fallback}
      />
    );
  };
}

/**
 * Preload a component for better performance
 */
export function preloadComponent(importFunc: () => Promise<any>) {
  return () => {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = importFunc.toString();
    document.head.appendChild(link);
  };
}

/**
 * Lazy load with intersection observer for better performance
 */
export function createIntersectionLazyComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options?: IntersectionObserverInit
) {
  const LazyComponent = lazy(importFunc);
  
  return function IntersectionLazyWrapper(props: any) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
          ...options
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div ref={ref}>
        {isVisible ? <LazyComponent {...props} /> : <div>Loading...</div>}
      </div>
    );
  };
}

/**
 * Batch preload multiple components
 */
export function preloadComponents(importFuncs: (() => Promise<any>)[]) {
  return Promise.all(importFuncs.map(func => func()));
}

/**
 * Lazy load with retry mechanism
 */
export function createRetryLazyComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  maxRetries: number = 3
) {
  const LazyComponent = lazy(() => {
    let retries = 0;
    
    const loadComponent = async () => {
      try {
        return await importFunc();
      } catch (error) {
        if (retries < maxRetries) {
          retries++;
          console.warn(`Failed to load component, retrying... (${retries}/${maxRetries})`);
          await new Promise(resolve => setTimeout(resolve, 1000 * retries));
          return loadComponent();
        }
        throw error;
      }
    };
    
    return loadComponent();
  });
  
  return LazyComponent;
}

/**
 * Hook for lazy loading images with intersection observer
 */
export function useLazyImage(src: string, placeholder?: string) {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return { elementRef, imageSrc, isLoaded };
}