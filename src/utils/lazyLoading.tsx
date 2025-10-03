// Lazy loading utility
export const lazyLoadComponent = (importFn, fallback = null) => {
  return React.lazy(() => importFn().catch(() => ({ 
    default: () => fallback || <div>Loading...</div> 
  })));
};

// Intersection observer for lazy loading
export const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [ref, options]);
  
  return isIntersecting;
};