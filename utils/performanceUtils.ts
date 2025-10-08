/**
 * Performance utilities for optimizing application performance
 */

// Debounce function for performance optimization
  func: T,
  wait: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle function for performance optimization
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
    }
  };
};

};

// Preload critical resources
export const preloadCriticalResources = (): void => {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
