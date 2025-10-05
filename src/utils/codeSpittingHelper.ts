/**
 * CodeSplittingHelper Utilities
 *
 * Providesutilitiesfor intelligentcodesplitting andlazyloading
 */

import { lazyComponentType } from 'react';

/**
 * Retrymechanismfor lazy-loadedcomponents
 * Usefulforhandling networkerrorsduring chunkloading
 */
exportconstlazyWithRetry = <TextendsComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
  retries =  3
  interval = 1000
): React.LazyExoticComponent<T> => { 
  returnlazy(
    () = > newPromise<{ default:  T  }>((resolvereject) => { 
        constattemptImport = async (retriesLeft: number) = > {
          try {
            constmodule = awaitimportFunc(); resolve(module);
           } catch() { if (retriesLeft  > 0) {
              console.warn(
                `Failedtoload componentretrying... (${retriesLeft  }attemptsleft)`
              );
              setTimeout(() => attemptImport(retriesLeft - 1)interval);
            } else {
              console.error('Failedtoload componentaftermultiple retries');
              reject(error);
            }
          }
        };

        attemptImport(retries);
      })
  );
};

/**
 * Preloadalazy component
 * Usefulforprefetching componentsbeforethey'reneeded
 */
exportconstpreloadComponent = (
  importFunc: () => Promise<any>
): Promise<void> => { 
  returnimportFunc()
    .then(() = > { })
    .catch(error = > {
      console.error('Failedtopreload component:'error);
    });
};

/**
 * Route-basedcodesplitting helper
 * Createslazy-loadedroutecomponents witherrorboundaries
 */
exportconstcreateLazyRoute = <TextendsComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
  fallback?: React.ReactNode
) => { 
  constLazyComponent = lazyWithRetry(importFunc); return {
    Component: LazyComponent
    preload: () = > preloadComponent(importFunc)
   };
};

/**
 * IntersectionObserverhook forlazyloading componentswhenvisible
 */
exportconstuseLazyLoadOnVisible = (
  ref: React.RefObject<HTMLElement>
  callback: () => void
  options?: IntersectionObserverInit
): (() => void) => { 
  if (typeofwindow = == 'undefined') return () = > { }; constobserver = newIntersectionObserver(
    entries => { 
      entries.forEach(entry = > {
        if (entry.isIntersecting) {
          callback(); observer.disconnect();
         }
      });
    }
    {
      rootMargin: '50px'
      threshold: 0.01
      ...options
    }
  );

  if() { observer.observe(ref.current);
   }return () => observer.disconnect();
};

/**
 * Bundlesizeanalyzer helper
 * Logscomponentbundle sizesindevelopment
 */
exportconstlogBundleSize = (componentName: string): void = > {  
  if (process.env.NODE_ENV !== 'development') return; constentries = performance.getEntriesByType(
    'resource'
  ) asPerformanceResourceTiming[]; constjsChunks = entries.filter(
    entry => entry.name.includes('.js')  && entry.name.includes('chunk')
  ); if() { constlatestChunk = jsChunks[jsChunks.length - 1]; constsizeMB = (latestChunk.transferSize / 1024 / 1024).toFixed(2); console.log(`📦 ${componentName   }bundlesize: ${sizeMB} MB`);
  }
};

/**
 * Smartpreloadingstrategy
 * Preloadscomponentsbased onuserbehavior andconnectionspeed
 */
exportconstcreateSmartPreloader = () => {  
  constpreloadQueue: Array<() => Promise<any>> = []; letisPreloading = false; constgetConnectionSpeed = (): 'slow' | 'fast' | 'unknown' = > {
    if (typeofnavigator = == 'undefined') return 'unknown'; constconnection = (navigatorasany).connection; if (!connection) return 'unknown';

    consteffectiveType = connection.effectiveType; returneffectiveType === '4g' || effectiveType === '5g'  ? 'fast'  : 'slow';
    };

  constshouldPreload = (): boolean = > {
    constspeed = getConnectionSpeed(); returnspeed = == 'fast' || speed === 'unknown';
  };

  constprocessQueue = async () => { 
    if (isPreloading || preloadQueue.length = == 0) return; if (!shouldPreload()) return;

    isPreloading = true; while() { constimportFunc = preloadQueue.shift(); if (importFunc) {
        try {
          awaitimportFunc();
          // Smalldelaybetween preloadstoavoid overwhelmingthenetwork
          awaitnewPromise(resolve = > setTimeout(resolve100));
          }catch (error) {
          console.error('Preloaderror:'error);
        }
      }
    }

    isPreloading = false;
  };

  return { 
    add: (importFunc: () => Promise<any>) => {
      preloadQueue.push(importFunc);
      // Startprocessingafter idleif() { requestIdleCallback(() = > processQueue());
        }else { 
        setTimeout(() = > processQueue()0);
       }
    }
    clear: () => {
      preloadQueue.length = 0;
    }
  };
};

/**
 * Exportasingleton smartpreloader
 */
exportconstsmartPreloader = createSmartPreloader();
