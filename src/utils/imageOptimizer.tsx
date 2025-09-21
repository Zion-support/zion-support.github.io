import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ImageOptimizerProps {
  src: string,
  alt: string,
  width?: number,
  height?: number,
  quality?: number,
  placeholder?: string,
  className?: string,
  lazy?: boolean,
  onLoad?: () => void,
  onError?: () => void
}

interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number,
  height?: number,
  quality?: number,
  className?: string,
  onLoad?: () => void,
  onError?: () => void
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  quality = 80,
  className,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.addEventListener('load', handleLoad);
      imgRef.current.addEventListener('error', handleError);
      
      return () => {
        imgRef.current?.removeEventListener('load', handleLoad);
        imgRef.current?.removeEventListener('error', handleError);
      };
    }
  }, [handleLoad, handleError]);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className || ''}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className || ''}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ width, height }}
      />
    </div>
  );
};

export const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  quality = 80,
  placeholder,
  className,
  lazy = true,
  onLoad,
  onError
}) => {
  const [isInView, setIsInView] = useState(!lazy);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  useEffect(() => {
    if (lazy && imgRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observerRef.current.observe(imgRef.current);
      
      return () => {
        observerRef.current?.disconnect();
      };
    }
  }, [lazy]);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.addEventListener('load', handleLoad);
      imgRef.current.addEventListener('error', handleError);
      
      return () => {
        imgRef.current?.removeEventListener('load', handleLoad);
        imgRef.current?.removeEventListener('error', handleError);
      };
    }
  }, [handleLoad, handleError]);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className || ''}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className || ''}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        >
          {placeholder && (
            <div className="flex items-center justify-center h-full">
              <span className="text-gray-500 text-sm">{placeholder}</span>
            </div>
          )}
        </div>
      )}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ width, height }}
        />
      )}
    </div>
  );
};