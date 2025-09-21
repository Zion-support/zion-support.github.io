import React, { useState, useEffect, useRef, useCallback } from 'react',
interface ImageOptimizerProps {
  src: string,
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  placeholder?: string;
  className?: string;
  lazy?: boolean;
  onLoad?: () => void;
  onError?: () => void, }

interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
  onLoad?: () => void;
  onError?: () => void, }

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  quality = 80,
  className,
  onLoad;
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();, [onError]);

  const optimizedSrc = React.useMemo(() => {
    if (!src) return src;
    
    // If it's already an optimized URL, return as is
    if (src.includes('w_') || src.includes('h_') || src.includes('q_')) {
      return src, }

    // For external images, we can't optimize them
    if (src.startsWith('http') && !src.includes('your-cdn-domain.com')) {
      return src, }

    // For local images or CDN images, add optimization parameters
    const url = new URL(src, window.location.origin);
    if (width) url.searchParams.set('w', width.toString());
    if (height) url.searchParams.set('h', height.toString());
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('f', 'auto'); // Auto format
    url.searchParams.set('fit', 'crop'); // Crop to fit

    return url.toString();, [src, width, height, quality]);

  if (hasError) {
    return (
      <div 
        className={`image-error ${className || ''}`}
        style={{ width, height }}
      >
        <div className="error-content">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="currentColor"
            />
          </svg>
          <span>Failed to load image</span>
        </div>
      </div>
    );

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      className={`optimized-image ${isLoaded ? 'loaded' : 'loading'} ${className || ''}`}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    />
  );;

export const LazyImage: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  quality = 80,
  placeholder,
  className,
  lazy = true,
  onLoad;
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) {
      setIsInView(true);
      return, }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);

    return () => observer.disconnect();, [lazy]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();, [onLoad]);

  const handleError = useCallback(() => {
    onError?.();, [onError]);

  return (
    <div className={`lazy-image-container ${className || ''}`}>
      {!isLoaded && placeholder && (
        <div className="image-placeholder">
          <img src={placeholder} alt="Loading..." />
        </div>
      )}
      {isInView && (
        <OptimizedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );;

export const ImageGallery: React.FC<{
  images: string[],
  alt: string,
  className?: string, }> = ({ images, alt, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className={`image-gallery ${className || ''}`}>
      <div className="gallery-main">
        <LazyImage
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="gallery-image"
        />
        {images.length > 1 && (
          <>
            <button
              className="gallery-nav gallery-prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="gallery-nav gallery-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <LazyImage
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                width={80}
                height={80}
                quality={60}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );;

export default OptimizedImage;