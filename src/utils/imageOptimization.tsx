=======
const imgRef = useRef<HTMLDivElement>(null);




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()

        }
      }

    )
    if (imgRef.current) {
      observer.observe(imgRef.current)
    }
    return () => observer.disconnect()
  }, [lazy, priority, isInView])
  // Generate WebP-compatible src
  const getOptimizedSrc = (originalSrc: string,) => {
    // If it's already optimized or external, return as-is
    if (
      originalSrc.startsWith('http') |
      originalSrc.includes('/_next/image')
    ) {
      return originalSrc
    }
    // For internal images, Next.js will handle optimization
    return originalSrc
  }
  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }
  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    onError?.()
  }
  // Generate blur placeholder
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    // Generate a simple gray blur placeholder
    return `data: image/svg+xml,base64,${Buffer.from(
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">

        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6,stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb,stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
      </svg>`

    ).toString('base64')}`
=======
  // Intersection Observer for lazy loading;
  useEffect(() => {;
    if (!lazy || priority || isInView) return;
    const observer = new IntersectionObserver(;
      ([entry],) => {;
        if (entry && entry.isIntersecting) {;
          setIsInView(true);
          observer && observer.disconnect();
        }
      },;
      {;
        rootMargin: '50px', // Start loading 50px before the image enters viewport;
      }
    );

    if (imgRef && imgRef.current) {;
      observer && observer.observe(imgRef && imgRef.current);
    }

    return () => observer && observer.disconnect();
  }, [lazy, priority, isInView]);

  // Generate WebP-compatible src;
  const getOptimizedSrc = (originalSrc: string,) => {;
    // If it's already optimized or external, return as-is;
    if (;
      originalSrc && originalSrc.startsWith('http') ||;
      originalSrc && originalSrc.includes('/_next/image');
    ) {;
      return originalSrc;
    }

    // For internal images, Next && Next.js will handle optimization;
    return originalSrc;
  },;
  const handleLoad = () => {;
    setIsLoading(false),;
    onLoad?.();
  },;
  const handleError = () => {;
    setHasError(true),;
    setIsLoading(false),;
    onError?.();
  },;
  // Generate blur placeholder;
  const generateBlurDataURL = () => {;
    if (blurDataURL) return blurDataURL,;
    // Generate a simple gray blur placeholder;
    return `data: image/svg+xml,base64,${Buffer.from(;
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">;
        <defs>;
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">;
            <stop offset="0%" style="stop-color:#f3f4f6,stop-opacity:1" />;
            <stop offset="100%" style="stop-color:#e5e7eb,stop-opacity:1" />;
          </linearGradient>;
        </defs>;
        <rect width="100%" height="100%" fill="url(#grad)" />;
      </svg>`;
    ).toString('base64')}`;
  },;
  return (;
    <div;
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
    >;
      {isInView && !hasError && (;

        <Image;

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
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          blurDataURL={
            placeholder === 'blur' ? generateBlurDataURL() : undefined
          }
          onLoad={handleLoad}
          onError={handleError}

<<<<<<< HEAD
            isLoading ? 'opacity-0' : 'opacity-100'
          ),}
          className={cn(            'transition-opacity duration-300'


          className={cn(            'transition-opacity duration-300',
<<<<<<< HEAD

            isLoading ? 'opacity-0' : 'opacity-100'
          ),}
          className={cn(;
            'transition-opacity duration-300',;
            isLoading ? 'opacity-0' : 'opacity-100';
          )}
<<<<<<< HEAD



>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

          {...props}
        />
      )}
      {/* Loading placeholder */}
            </div>
          )}
        </div>
      )}
      {/* Lazy loading placeholder */}
      {!isInView && lazy && !priority && (
=======
        <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800' />
      )}
    </div>
  )

// Higher-order component for easy migration from regular img tags
export function withImageOptimization<P extends { src: string; alt: string }>(
  Component: React.ComponentType<P>
) {
  return function OptimizedComponent(props: P) {

// Higher-order component for easy migration from regular img tags;
export function withImageOptimization<Pextends { src: string alt: string }>(;
  Component: React && React.ComponentType<P>;
) {;
  return function OptimizedComponent(): any (props: P) {;

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


    const { src, alt, ...otherProps } = props
    return <OptimizedImage src={src} alt={alt} {...(otherProps as any)} />
  }
}

// Utility to preload critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })

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
  })
}
    img.onerror = reject
    img.src = src
  })
<<<<<<< HEAD
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
