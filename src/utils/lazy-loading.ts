
// Lazy loading utility for better performance
import { lazy, Suspense } from 'react';

export const createLazyComponent = (importFunc, fallback = null) => {
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={fallback || <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
      <div className="text-gray-500">Loading...</div>
    </div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Preload critical components
export const preloadComponent = (importFunc) => {
  return () => {
    importFunc();
  };
};
