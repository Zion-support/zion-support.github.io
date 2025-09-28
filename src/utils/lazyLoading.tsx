import React, { lazy, ComponentType, useState, useEffect, useRef, Suspense } from 'react';

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
      <Suspense fallback={fallback ? <fallback /> : <div>Loading...</div>}>
        <LazyComponent {...props} />
      </Suspense>
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
<<<<<<< HEAD
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
=======
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-14db
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
<<<<<<< HEAD
        {isVisible ? (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent {...props} />
          </Suspense>
        ) : (
          <div>Loading...</div>
        )}
=======
        {isVisible ? <LazyComponent {...props} /> : <div>Loading...</div>}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-14db
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