
/**
 * Enhanced lazy loading with retry logic for failed chunk loads
 * Helps recover from network issues during code splitting
 */
export function lazyRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  retries = 3,
  delay = 1000
): React.LazyExoticComponent<T> {
  return lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
const attemptLoad = (attemptsLeft: number) => {
componentImport()
.then(resolve)
.catch((error) => {
if (attemptsLeft === 1) {
reject(error);
return;
}
            
            // Wait before retrying
            setTimeout(() => {
              console.log(`Retrying component load... (${attemptsLeft - 1} attempts left)`);
              attemptLoad(attemptsLeft - 1);
            }, delay);
          });
      };
      
      attemptLoad(retries);
    });
  });
}

/**
 * Preload a component for better perceived performance
 */
export function preloadComponent(
  componentImport: () => Promise<{ default: ComponentType<any> }>
): void {
  componentImport().catch((error) => {
    console.warn('Failed to preload component:', error);
  });
}

/**
 * Create a lazy-loaded component with automatic retry
 */
export const createLazyComponent = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) => {
  return lazyRetry(importFn, 3, 1000);
};

export default lazyRetry;
