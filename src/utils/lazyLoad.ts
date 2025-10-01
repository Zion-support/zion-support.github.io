import { lazy, ComponentType } from 'react';

/**
 * Enhanced lazy loading utility with retry logic and better error handling
 */
export function lazyLoadWithRetry<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  retries = 3,
  interval = 1000
): ReturnType<typeof lazy> {
  return lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
      const attemptLoad = (attemptsLeft: number) => {
        importFunc()
          .then(resolve)
          .catch((error) => {
            if (attemptsLeft === 0) {
              reject(error);
              return;
            }
            
            console.warn(`Failed to load component, retrying... (${attemptsLeft} attempts left)`);
            setTimeout(() => attemptLoad(attemptsLeft - 1), interval);
          });
      };
      
      attemptLoad(retries);
    });
  });
}

/**
 * Preload a component for faster subsequent loads
 */
export function preloadComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
): Promise<{ default: T }> {
  return importFunc();
}

/**
 * Create a lazy-loaded component with prefetch on hover
 */
export function createLazyWithPrefetch<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) {
  const LazyComponent = lazyLoadWithRetry(importFunc);
  
  const prefetch = () => {
    preloadComponent(importFunc);
  };
  
  return { LazyComponent, prefetch };
}
