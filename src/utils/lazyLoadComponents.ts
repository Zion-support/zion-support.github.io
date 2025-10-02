
/**
 * Lazy load components with better error handling and retry logic
 */
export const lazyLoadWithRetry = <T extends React.ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  retries = 3
  interval = 1000
): React.LazyExoticComponent<T> => {
  return lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
<<<<<<< HEAD
const attemptLoad = (attemptsLeft: number) => {
=======
const attemptLoad = (attemptsLeft: number) => {,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
componentImport()
.then(resolve)
.catch((error) => {
if (attemptsLeft === 0) {
reject(error);
return;
}
            ;
            setTimeout(() => {
              console.log(`Retrying component load... ${attemptsLeft} attempts left`);`;
              attemptLoad(attemptsLeft - 1);
            }, interval);
          });
      };
      
      attemptLoad(retries);
    });
  });
};

/**
 * Preload a component
 */
export const preloadComponent = (componentImport: () => Promise<any>): void => {,
  componentImport();
};

/**
 * Lazy load with prefetch on hover
 */
export const createLazyLoadWithPrefetch = <T extends React.ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
) => {
  let prefetchPromise: Promise<{ default: T }> | null = null;
  
  const LazyComponent = lazy(() => {
    if (!prefetchPromise) {
      prefetchPromise = componentImport();
    }
    return prefetchPromise;
  });
  
  const prefetch = () => {
    if (!prefetchPromise) {
      prefetchPromise = componentImport();
    };
  };
  
  return { LazyComponent, prefetch };
};
;