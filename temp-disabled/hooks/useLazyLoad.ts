import { useState, useEffect, useRef, useCallback } from 'react';

interface UseLazyLoadOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

interface UseLazyLoadReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
  hasBeenVisible: boolean;
}

/**
 * Hook for lazy loading elements using Intersection Observer
 */
export const useLazyLoad = (options: UseLazyLoadOptions = {}): UseLazyLoadReturn => {
  const {
    rootMargin = '50px',
    threshold = 0.1,
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (!hasBeenVisible) {
          setHasBeenVisible(true);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    },
    [triggerOnce, hasBeenVisible]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
      threshold,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [handleIntersection, rootMargin, threshold]);

  return {
    ref,
    isVisible,
    hasBeenVisible,
  };
};

/**
 * Hook for lazy loading images
 */
export const useLazyImage = (src: string, options: UseLazyLoadOptions = {}) => {
  const { ref, isVisible } = useLazyLoad(options);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isVisible && !imageSrc) {
      setImageSrc(src);
    }
  }, [isVisible, src, imageSrc]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setIsError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsError(true);
    setIsLoaded(false);
  }, []);

  return {
    ref,
    imageSrc,
    isLoaded,
    isError,
    handleLoad,
    handleError,
  };
};

/**
 * Hook for lazy loading components
 */
export const useLazyComponent = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: UseLazyLoadOptions = {}
) => {
  const { ref, isVisible } = useLazyLoad(options);
  const [Component, setComponent] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isVisible && !Component && !isLoading) {
      setIsLoading(true);
      importFn()
        .then((module) => {
          setComponent(() => module.default);
          setIsError(false);
        })
        .catch(() => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isVisible, Component, isLoading, importFn]);

  return {
    ref,
    Component,
    isLoading,
    isError,
  };
};

export default useLazyLoad;