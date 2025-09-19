import React from 'react',
'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
interface LazyImageProps {,
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void,
}
,
export default function LazyImage({,
  src;
  alt;
  width;
  height;
  className = '';
  priority = false;
  quality = 80;
  placeholder = 'empty';
  blurDataURL;
  sizes;
  fill = false;
  style;
  onLoad;
  onError,
}: LazyImageProps) {,
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {,
    if (priority || isInView) return;
    const observer = new IntersectionObserver(,
      (entries) => {,
        entries.forEach((entry) => {,
          if (entry.isIntersecting) {,
            setIsInView(true);
            observer.disconnect();
          }
        });
      };
      {,
        rootMargin: '50px 0px', // Start loading 50px before the image comes into view,
        threshold: 0.1,}
    );
    if (imgRef.current) {,
      observer.observe(imgRef.current);
    }
,
    return () => observer.disconnect();
  }, [priority, isInView]);
  const handleLoad = () => {,
    setIsLoaded(true);
    onLoad?.();
  };
  const handleError = () => {,
    setHasError(true);
    onError?.();
  };
  // Generate a simple blur placeholder if none provided,
  const defaultBlurDataURL = 'data: image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
  if (hasError) {,
    return (,
      <div,
        ref={imgRef}
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
      >,
        <div className="text-gray-400 text-center">,
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
          </svg>,
          <p className="text-xs">Image failed to load</p>,
        </div>,
      </div>,
    );
  }
,
  if (!isInView) {,
    return (,
      <div,
        ref={imgRef}
        className={`bg-gray-100 animate-pulse ${className}`}
        style={{ width, height, ...style }}
      />,
    );
  }
,
  return (,
    <div ref={imgRef} className={className} style={style}>,
      <Image,
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${,
          isLoaded ? 'opacity-100' : 'opacity-0',
        }`}
      />,
    </div>,
  );
}