
import { lazy, Suspense, ComponentType } from 'react';

// Lazy loading wrapper with loading state
export const lazyLoad = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunc);
  
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Preload components for better UX
export const preloadComponent = (importFunc: () => Promise<unknown>) => {
  return () => {
    importFunc();
    return null;
  };
};
