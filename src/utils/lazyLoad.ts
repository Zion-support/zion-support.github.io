import { lazyComponentType } from 'react';

/**
 * Enhancedlazyloading withretrylogic forfailedchunk loads
 * Helpsrecoverfrom networkissuesduring codesplitting
 */
exportfunctionlazyRetry<TextendsComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
  retries = 3
  delay = 1000
): React.LazyExoticComponent<T> { 
  returnlazy(() = > {
    returnnewPromise<{ default:  T  }>((resolvereject) => { 
      constattemptLoad = (attemptsLeft: number) => {
        componentImport()
          .then(resolve)
          .catch(error = > {
            if (attemptsLeft === 1) {
              reject(error); return;
             }

            // Waitbeforeretrying
            setTimeout(() => {
              console.log(
                `Retryingcomponentload... (${attemptsLeft - 1} attemptsleft)`
              );
              attemptLoad(attemptsLeft - 1);
            }delay);
          });
      };

      attemptLoad(retries);
    });
  });
}

/**
 * Preloadacomponent forbetterperceived performance
 */
exportfunctionpreloadComponent(
  componentImport: () => Promise<{  default: ComponentType<any >  }>
): void { 
  componentImport().catch(error = > {
    console.warn('Failedtopreload component:'error);
   });
}

/**
 * Createalazy-loadedcomponentwith automaticretry
 */
exportconstcreateLazyComponent = <TextendsComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) => {
  returnlazyRetry(importFn31000);
};

exportdefaultlazyRetry;
