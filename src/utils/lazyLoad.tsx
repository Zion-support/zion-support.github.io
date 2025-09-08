<<<<<<< HEAD
import React, { Suspense, lazy, ComponentType } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
// Generic lazy loading utility
export const lazyLoad = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) => {
  return lazy(importFn);
};

import React, { lazy } from 'react';

// Lazy loaded pagesexport const LazyHome = lazy(() => import('../pages/Home'));
export const LazyAbout = lazy(() => import('../pages/About'));
export const LazyContact = lazy(() => import('../pages/Contact'));
export const LazyNotFound = lazy(() => import('../pages/NotFound'));

// Lazy image component
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  onLoad,
  onError,
}) => {
  const [imageSrc, setImageSrc] = React.useState(placeholder);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const isIntersecting = useIntersectionObserver(imgRef);

  React.useEffect(() => {
    if (isIntersecting && !isLoaded) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
        onLoad?.();
      };
      img.onerror = () => {
        onError?.();
      };
      img.src = src;
    }
  }, [isIntersecting, src, isLoaded, onLoad, onError]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-50'} ${className}`}
    />
  );
};

export default {
  withLazyLoad,
  LazyHome,
  LazyAbout,
  LazyContact,
  LazyNotFound,
  LazyAnalytics,
  LazyPerformanceMonitor,
  preloadComponent,
  useIntersectionObserver,
  LazyImage,
};
=======
// Lazy loaded components
export const LazyAnalytics = lazy(() => import('../components/PerformanceDashboard'));
export const LazyPerformanceMonitor = lazy(() => import('../components/PerformanceOptimizations'));>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
