/**
 * Image optimization utilities for better performance
 */
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  ...props
}) => {
  return React.createElement('img', {
    src,
    alt,
    width,
    height,
    className: `transition-opacity duration-300 ${className}`,
    loading: priority ? 'eager' : loading,
    decoding: 'async',
    ...props
  });
};

// Lazy image component with intersection observer
export const LazyImage: React.FC<OptimizedImageProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return React.createElement('div', {
    ref: imgRef,
    className: `relative overflow-hidden ${props.className || ''}`
  }, [
    !isInView && React.createElement('div', {
      key: 'placeholder',
      className: 'absolute inset-0 bg-gray-200 animate-pulse'
    }),
    isInView && React.createElement(OptimizedImage, {
      ...props,
      key: 'image',
      onLoad: () => setIsLoaded(true),
      className: `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${props.className || ''}`
    })
  ]);
};

export default OptimizedImage;