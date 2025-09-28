import React, { ComponentType, lazy, Suspense, useState, useEffect, useRef } from 'react';
import { ModernLoadingSpinner } from '../components/ModernLoadingSpinner';

/**
 * Higher-order component for lazy loading with fallback
 */
export function withLazyLoading<T extends object>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  fallback?: React.ComponentType
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyWrapper(props: T) {
    const FallbackComponent = fallback || (() => (
      <div className="flex items-center justify-center min-h-[200px]">
        <ModernLoadingSpinner progress={0} />
      </div>
    ));

    return (
      <Suspense fallback={<FallbackComponent />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

/**
 * Intersection Observer based lazy loading hook
 */
export function useLazyLoad(
  threshold: number = 0.1,
  rootMargin: string = '50px'
) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return { ref, isVisible, hasLoaded };
}

/**
 * Image lazy loading component
 */
interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  className = '',
  onLoad,
  onError
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, isVisible } = useLazyLoad();

  useEffect(() => {
    if (isVisible && src) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoading(false);
        onLoad?.();
      };
      img.onerror = () => {
        setIsLoading(false);
        onError?.();
      };
      img.src = src;
    }
  }, [isVisible, src, onLoad, onError]);

  return (
    <img
      ref={ref as React.RefObject<HTMLImageElement>}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
      loading="lazy"
    />
  );
};

/**
 * Component lazy loading hook
 */
export function useComponentLazyLoad<T extends ComponentType<Record<string, unknown>>>(
  importFunc: () => Promise<{ default: T }>,
  shouldLoad: boolean = true
) {
  const [Component, setComponent] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!shouldLoad || Component) return;

    setIsLoading(true);
    setError(null);

    importFunc()
      .then((module) => {
        setComponent(() => module.default);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [shouldLoad, Component, importFunc]);

  return { Component, isLoading, error };
}

/**
 * Preload critical resources
 */
export function preloadResource(url: string, type: 'image' | 'script' | 'style' | 'font' = 'script') {
  const link = document.createElement('link');
  link.rel = type === 'image' ? 'preload' : 'prefetch';
  link.href = url;
  
  if (type === 'image') {
    link.as = 'image';
  } else if (type === 'font') {
    link.as = 'font';
    link.crossOrigin = 'anonymous';
  } else if (type === 'style') {
    link.as = 'style';
  } else if (type === 'script') {
    link.as = 'script';
  }

  document.head.appendChild(link);
}

/**
 * Image lazy loading hook with optimized loading
 */
export function useImageLazyLoading(src: string, placeholder: string = '') {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || !src) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.onload = () => {
            setImageSrc(src);
            setIsLoaded(true);
          };
          img.onerror = () => {
            // Keep placeholder on error
            setIsLoaded(false);
          };
          img.src = src;
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [src]);

  return { elementRef, imageSrc, isLoaded };
}

/**
 * Preload critical routes
 */
export function preloadRoute(routePath: string) {
  // This would typically preload the route's JavaScript bundle
  // Implementation depends on your routing setup
  const routeName = routePath.replace(/\//g, '_') || 'index';
  preloadResource(`/assets/pages-${routeName}.js`, 'script');
}
