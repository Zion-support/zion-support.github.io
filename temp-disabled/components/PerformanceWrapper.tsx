import React, { memo, Suspense, lazy, ComponentType, ReactNode } from 'react';
import { useLazyComponent } from '../hooks/useLazyLoad';

interface PerformanceWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  enableLazyLoading?: boolean;
  lazyImport?: () => Promise<{ default: ComponentType<any> }>;
  memoize?: boolean;
  className?: string;
}

/**
 * Performance wrapper component that provides lazy loading and memoization
 */
const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  fallback = <div>Loading...</div>,
  enableLazyLoading = false,
  lazyImport,
  memoize = true,
  className,
}) => {
  // If lazy loading is enabled and import function is provided
  if (enableLazyLoading && lazyImport) {
    const { ref, Component, isLoading, isError } = useLazyComponent(lazyImport);

    if (isError) {
      return <div className={className}>Error loading component</div>;
    }

    if (isLoading) {
      return <div className={className}>{fallback}</div>;
    }

    return (
      <div ref={ref} className={className}>
        {Component && <Component />}
      </div>
    );
  }

  // Regular rendering with optional memoization
  const content = <Suspense fallback={fallback}>{children}</Suspense>;

  return <div className={className}>{content}</div>;
};

// Memoize the component for better performance
export default memo(PerformanceWrapper);

/**
 * Higher-order component for lazy loading
 */
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  importFn: () => Promise<{ default: ComponentType<P> }>,
  fallback?: ReactNode
) => {
  const LazyComponent = lazy(importFn);

  return memo((props: P) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  ));
};

/**
 * Higher-order component for memoization
 */
export const withMemoization = <P extends object>(
  Component: ComponentType<P>,
  areEqual?: (prevProps: P, nextProps: P) => boolean
) => {
  return memo(Component, areEqual);
};

/**
 * Hook for creating memoized callbacks
 */
export const useMemoizedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList
): T => {
  return React.useCallback(callback, deps);
};

/**
 * Hook for creating memoized values
 */
export const useMemoizedValue = <T,>(
  factory: () => T,
  deps: React.DependencyList
): T => {
  return React.useMemo(factory, deps);
};
