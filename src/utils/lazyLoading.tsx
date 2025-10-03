// Lazy loading utility
import React from 'react';

export const lazyLoadComponent = (importFn: () => Promise<any>, fallback: React.ReactNode = null) => {
  return React.lazy(() => importFn().catch(() => ({ 
    default: () => fallback || <div>Loading...</div> 
  })));
};

// Intersection observer for lazy loading
export const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, options: IntersectionObserverInit = {}) => {
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