import { lazy, ComponentType } from 'react';

// Generic lazy loading utility
export const lazyLoad = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) => {
  return lazy(importFn);
};

// Utility function to preload components
export const preloadComponent = (importFn: () => Promise<unknown>) => {
  return importFn();
};

// Higher-order component for lazy loading with fallback
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ComponentType
) => {
  return (props: P) => {
    const FallbackComponent = fallback || (() => <div>Loading...</div>);
    
    return (
      <React.Suspense fallback={<FallbackComponent />}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [hasIntersected, setHasIntersected] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options, hasIntersected]);

  return { isIntersecting, hasIntersected };
};

export default lazyLoad;