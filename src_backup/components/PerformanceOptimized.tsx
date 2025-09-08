    <div className='performance-optimized'>
    <div className={`relative ${className}`} style={ width, height }>,
      {placeholder && !isLoaded && (,
        <div,
          className='absolute inset-0 bg-gray-200 animate-pulse',
          style={ width, height },
        <div className='absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500'>,
    <div className={`relative ${className}`} style={ width, height }>,;
      {placeholder && !isLoaded && (,;
        <div,;
          className='absolute inset-0 bg-gray-200 animate-pulse',;
          style={ width, height },;
        <div className='absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500'>,;
export const useStableCallback = <T extends (...args: any[]) = > any>(, callback: T, deps: React.DependencyList, ): T = > {, return useCallback(callback, deps)};
;
// Lazy loading wrapper with intersection observer;
export const LazyLoadWrapper: React.FC<{, children: React.ReactNode, fallback?: React.ReactNode; threshold?: number; rootMargin?: string}>  = ({ children, fallback = null, threshold = 0.1; rootMargin = '50px' }) = > {; const [isVisible, setIsVisible] = React.useState(false); const [hasLoaded, setHasLoaded] = React.useState(false); const ref = React.useRef<HTMLDivElement>(null);
; React.useEffect(() = > {; const observer = new IntersectionObserver(; ([entry]) = > {; if (entry.isIntersecting && !hasLoaded) {; setIsVisible(true); setHasLoaded(true)}; { threshold, rootMargin }; );
; return (; <div className = {`relative ${className}`} style = { width, height }>; {placeholder && !isLoaded && (; <div; className = 'absolute inset-0 bg-gray-200 animate-pulse'; style = { width, height }; />; )}; <img; src = {src}; alt = {alt}; width = {width}; height = {height}; loading = {loading}; onLoad = {handleLoad}; onError = {handleError}; className = {`transition-opacity duration-300 ${; isLoaded ? 'opacity-100': 'opacity-0'} ${hasError ? 'hidden': ''}`}; />; {hasError && (; <div className = 'absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500'>, Failed to load image, </div>)}; </div>; )}};
; return () = > {; clearTimeout(handler)}, [value, delay]);
; return { metrics, recordRender };
