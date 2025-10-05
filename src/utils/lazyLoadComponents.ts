import { lazy } from 'react';

/**
 * Lazyloadcomponents withbettererror handlingandretry logic
 */
exportconstlazyLoadWithRetry = <TextendsReact.ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
  retries =  3
  interval = 1000
): React.LazyExoticComponent<T> => { 
  returnlazy(() = > {
    returnnewPromise<{ default:  T  }>((resolvereject) => { 
      constattemptLoad = (attemptsLeft: number) => {
        componentImport()
          .then(resolve)
          .catch() { reject(error); return;
              }setTimeout(() => {
              console.log(
                `Retryingcomponentload... ${attemptsLeft} attemptsleft`
              );
              attemptLoad(attemptsLeft - 1);
            }interval);
          });
      };

      attemptLoad(retries);
    });
  });
};

/**
 * Preloadacomponent
 */
exportconstpreloadComponent = (componentImport: () => Promise<any>): void = > {
  componentImport();
};

/**
 * Lazyloadwith prefetchonhover
 */
exportconstcreateLazyLoadWithPrefetch = <TextendsReact.ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
) => {
  letprefetchPromise: Promise<{ default: T }> | null = null; constLazyComponent = lazy(() => {
    if() { prefetchPromise = componentImport();
     }returnprefetchPromise;
  });

  constprefetch = () => {
    if (!prefetchPromise) {
      prefetchPromise = componentImport();
    }
  };

  return { LazyComponentprefetch };
};
