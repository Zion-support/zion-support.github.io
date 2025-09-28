import React, { lazy, ComponentType, useState, useEffect, useRef, Suspense } from 'react';

// Add useLazyImage hook export
export function useLazyImage(src: string, placeholder?: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  return {
    elementRef,
    imageSrc,
    isLoaded
  };
}

/**
 * Enhanced lazy loading utility with error boundaries and loading states
 */
export function createLazyComponent<T extends ComponentType<Record<string, unknown>>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: ComponentType
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyWrapper(props: Record<string, unknown>) {
    return (
      <Suspense fallback={fallback ? React.createElement(fallback) : <div>Loading...</div>}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

/**
 * Preload a component for better performance
 */
export function preloadComponent(importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>) {
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
export function createIntersectionLazyComponent<T extends ComponentType<Record<string, unknown>>>(
  importFunc: () => Promise<{ default: T }>,
  options?: IntersectionObserverInit
) {
  const LazyComponent = lazy(importFunc);
  
  return function IntersectionLazyWrapper(props: Record<string, unknown>) {
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
        {isVisible ? (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent {...props} />
          </Suspense>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  };
}

/**
 * Batch preload multiple components
 */
export function preloadComponents(importFuncs: (() => Promise<{ default: ComponentType<Record<string, unknown>> }>)[]) {
  return Promise.all(importFuncs.map(func => func()));
}

/**
 * Lazy load with retry mechanism
 */
export function createRetryLazyComponent<T extends ComponentType<Record<string, unknown>>>(
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
export function useImageLazyLoading(
  src: string,
  placeholder?: string
) {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && src) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.src = src;
    }
  }, [isInView, src]);

  return {
    elementRef,
    imageSrc,
    isLoaded
  };
}