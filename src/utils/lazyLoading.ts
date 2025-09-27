import React, { useEffect, useRef, useState } from 'react';

interface UseLazyLoadingOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const useLazyLoading = (options: UseLazyLoadingOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const {
    rootMargin = '0px',
    threshold = 0.1,
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [rootMargin, threshold, triggerOnce]);

  return {
    elementRef,
    isVisible: triggerOnce ? (hasTriggered || isVisible) : isVisible
  };
};

// Hook for lazy loading images
export const useLazyImage = (src: string, options: UseLazyLoadingOptions = {}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { elementRef, isVisible } = useLazyLoading(options);

  useEffect(() => {
    if (isVisible && !imageSrc) {
      setImageSrc(src);
    }
  }, [isVisible, src, imageSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  return {
    elementRef,
    imageSrc,
    isLoaded,
    isError,
    handleLoad,
    handleError
  };
};

// Hook for lazy loading components
export const useLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: UseLazyLoadingOptions = {}
) => {
  const [Component, setComponent] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { elementRef, isVisible } = useLazyLoading(options);

  useEffect(() => {
    if (isVisible && !Component && !isLoading) {
      setIsLoading(true);
      importFunc()
        .then(module => {
          setComponent(() => module.default);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Failed to load component:', error);
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, [isVisible, Component, isLoading, importFunc]);

  return {
    elementRef,
    Component,
    isLoading,
    isError
  };
};

// Hook for lazy loading data
export const useLazyData = <T>(
  fetchFunc: () => Promise<T>,
  options: UseLazyLoadingOptions = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { elementRef, isVisible } = useLazyLoading(options);

  useEffect(() => {
    if (isVisible && !data && !isLoading) {
      setIsLoading(true);
      fetchFunc()
        .then(result => {
          setData(result);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Failed to fetch data:', error);
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, [isVisible, data, isLoading, fetchFunc]);

  return {
    elementRef,
    data,
    isLoading,
    isError
  };
};

// Utility function for creating lazy-loaded images
export const createLazyImage = (
  src: string,
  alt: string,
  className?: string,
  options: UseLazyLoadingOptions = {}
) => {
  return {
    src,
    alt,
    className: className ? `${className} lazy` : 'lazy',
    loading: 'lazy' as const,
    'data-src': src,
    ...options
  };
};

// Utility function for creating lazy-loaded components
export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode,
  options: UseLazyLoadingOptions = {}
) => {
  return React.lazy(importFunc);
};

// Intersection Observer utility
export class LazyLoadingManager {
  private observers = new Map<string, IntersectionObserver>();
  private callbacks = new Map<string, (entry: IntersectionObserverEntry) => void>();

  createObserver(
    key: string,
    callback: (entry: IntersectionObserverEntry) => void,
    options: IntersectionObserverInit = {}
  ): IntersectionObserver {
    if (this.observers.has(key)) {
      return this.observers.get(key)!;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (this.callbacks.has(key)) {
            this.callbacks.get(key)!(entry);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
        ...options
      }
    );

    this.observers.set(key, observer);
    this.callbacks.set(key, callback);

    return observer;
  }

  observe(key: string, element: Element): void {
    const observer = this.observers.get(key);
    if (observer) {
      observer.observe(element);
    }
  }

  unobserve(key: string, element: Element): void {
    const observer = this.observers.get(key);
    if (observer) {
      observer.unobserve(element);
    }
  }

  disconnect(key: string): void {
    const observer = this.observers.get(key);
    if (observer) {
      observer.disconnect();
      this.observers.delete(key);
      this.callbacks.delete(key);
    }
  }

  disconnectAll(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.callbacks.clear();
  }
}

// Create singleton instance
export const lazyLoadingManager = new LazyLoadingManager();

// Cleanup on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    lazyLoadingManager.disconnectAll();
  });
}