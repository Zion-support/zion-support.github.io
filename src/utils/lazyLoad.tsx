import React, { Suspense, lazy, ComponentType } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

// Loading fallback component
const LoadingFallback = ({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) => (
  <div className="flex items-center justify-center p-4">
    <LoadingSpinner size={size} />
  </div>
);

// Higher-order component for lazy loading
export const withLazyLoad = <P extends object>(
  Component: ComponentType<P>,
  fallbackSize: 'small' | 'medium' | 'large' = 'medium'
) => {
  return (props: P) => (
    <Suspense fallback={<LoadingFallback size={fallbackSize} />}>
      <Component {...props} />
    </Suspense>
  );
};

// Lazy load pages
export const LazyHome = lazy(() => import('../pages/Home'));
export const LazyAbout = lazy(() => import('../pages/About'));
export const LazyContact = lazy(() => import('../pages/Contact'));
export const LazyNotFound = lazy(() => import('../pages/NotFound'));

// Lazy load components
export const LazyAnalytics = lazy(() => import('../components/Analytics'));
export const LazyPerformanceMonitor = lazy(() => import('../components/PerformanceMonitor'));

// Utility function to preload components
export const preloadComponent = (importFn: () => Promise<any>) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'script';
  link.href = importFn.toString();
  document.head.appendChild(link);
};

// Intersection Observer for lazy loading images
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

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