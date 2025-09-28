import React, { lazy, ComponentType } from 'react';

/**
 * Enhanced lazy loading utility with error boundaries and loading states
 */
export function createLazyComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: ComponentType
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyWrapper(props: any) {
    return React.createElement(LazyComponent, {
      ...props,
      fallback: fallback
    });
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
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
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

    return React.createElement('div', { ref: ref },
      isVisible ? React.createElement(LazyComponent, props) : React.createElement('div', null, 'Loading...')
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
export function useLazyImage(src: string, options?: IntersectionObserverInit) {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, options]);

  const handleLoad = React.useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = React.useCallback(() => {
    setIsError(true);
  }, []);

  return {
    imgRef,
    imageSrc,
    isLoaded,
    isError,
    handleLoad,
    handleError
  };
}