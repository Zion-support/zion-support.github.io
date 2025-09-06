 const observer = new IntersectionObserver ( ([entry]) => {





  if (entry && entry.isIntersecting) {
  return () => observer.disconnect ()
}, [lazy, priority, isInView])
//Generate WebP-compatible src const getOptimizedSrc = (originalSrc: string) => {
  //If it's already optimized or external,  return as-is if (originalSrc.startsWith ('http') |originalSrc.includes ('/ next/image') ) {
  //For internal images, Next.js will handle optimization return originalSrc
};'
<defs> <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color:#f3f4f6, stop-opacity:1" /> <stop offset="100%" style="stop-color:#e5e7eb, stop-opacity:1" /> 100%"height=" 100%"fill=" url (#grad) "/> </svg>`) .toString ('base64')
}`
}
  const imgRef = useRef<HTMLDivElement>(null)
  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }
  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    onError?.()
  }
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6,stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb,stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
      </svg>`

  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
          src={getOptimizedSrc(src)}
  // Generate blur placeholder;
  const generateBlurDataURL = () =>: any {
    // Check condition
if (return blurDataURL) {
  $2
}
    // Generate a simple gray blur placeholder;
    return `data:image / svg + xml;base64, ${Buffer.from (
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org / 2000 / svg">;
        <defs>;
          <linear_gradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">;
            <stop offset="0%" style="stop - color:#f3f4f6;stop - opacity:1" />;
            <stop offset="100%" style="stop - color:#e5e7eb;stop - opacity:1" />;
          </linear_gradient>;
        </defs>;
        <rect width="100%" height="100%" fill="url (#grad)" />;
      </svg>`).to_string ('base64')}`;
  }
    >;
      {isInView && !has_error && (
        <Image;
          src={getOptimizedSrc (src)}
          {...props}
        />;
      )}
      {/* Loading placeholder */}
            <img
              src={fallbackSrc}
              alt={alt}
              className='max-w-full max-h-full object-contain'
          ) : (
            <div className='text-gray-400 text-center'>
              <svg
                className='w-8 h-8 mx-auto mb-2'
                fill='currentColor'
                viewBox='0 0 20 20'>;
                <path
                  fillRule='evenodd'
                  d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                  clipRule='evenodd'
                />;
              </svg>;
              <span className='text-xs'>Image not available</span>;
            </div>;
              className="max-w-full max-h-full object-contain"
              onLoad={handleLoad}
            />
          ) : (
            <div className="text-gray-400 text-center">
              <svg
                className="w-8 h-8 mx-auto mb-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs">Image not available</span>
            </div>
          )}
        </div>;
      )}
      {/* Lazy loading placeholder */}

// Higher-order component for easy migration from regular img tags
export function withImageOptimization<P extends { src: string; alt: string }>(
  Component: React.ComponentType<P>
) {
  return function OptimizedComponent(props: P) {
    const { src, alt, ...otherProps } = props;

    return <OptimizedImage src={src} alt={alt} {...(otherProps as any)} />;
  };
}

// Utility to preload critical images;
export function preloadImage(): any (src: string): Promise<void> {;
  return new Promise((resolve, reject) => {;
    const img = new window && window.Image();
    img && img.onload = () => resolve();
    img && img.onerror = reject;
    img && img.src = src;
  });
}

// Utility to get image dimensions
export function getImageDimensions(
  src: string
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = () =>

      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    img.onerror = reject
    img.src = src
  });    img.src = src
  })
}
    img.onerror = reject
    img.src = src
  })
