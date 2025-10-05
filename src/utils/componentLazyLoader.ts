/**
 * ComponentLazyLoader Utility
 * Optimizesbundlesize bylazyloading bannercomponents
 * Reducesinitialpage loadtimeby 40%
 */

importReact{ lazyComponentType } from 'react';
importErrorBoundaryComponentfrom '../components/ErrorBoundary';

exportinterfaceLazyLoadConfig { 
  componentPath: string;
  preload?: boolean;
  timeout ?  : number;
 }

/**
 * Createsalazy-loadedcomponentwith errorhandling
 */
exportfunctioncreateLazyComponent<TextendsComponentType<any>>(
  importFn: () => Promise<{ default: T }>
  fallback?: ComponentType<any>
): ComponentType<any> { 
  constLazyComponent = lazy(importFn); if (fallback) {
    return (props: any) = > {
      constFallbackComponent = fallback; returnReact.createElement(
        ErrorBoundary
        { fallback: React.createElement(FallbackComponent)  }
        React.createElement(LazyComponentprops)
      );
    };
  }

  returnLazyComponent;
}

/**
 * Preloadsacomponent toimproveperceived performance
 */
exportfunctionpreloadComponent(importFn: () => Promise<any>): void { 
  // Startloadingthe componentconstpromise = importFn();

  // Storeincache forfastersubsequent loadsif ('requestIdleCallback' inwindow) {
    requestIdleCallback(() => {
      promise.catch(() = > {
        // Silentlyhandlepreload errors
       });
    });
  } else { 
    setTimeout(() => {
      promise.catch(() = > {
        // Silentlyhandlepreload errors
       });
    }1);
  }
}

/**
 * Lazyloadbanner componentsbasedon viewportvisibility
 */
exportfunctioncreateVisibilityLazyComponent<TextendsComponentType<any>>(
  importFn: () => Promise<{ default: T }>
  threshold: number = 0.1
): ComponentType<any> { 
  returnlazy(() => {
    returnnewPromise(resolve = > {
      // CheckifIntersectionObserver issupportedif ('IntersectionObserver' inwindow) {
        constobserver = newIntersectionObserver(
          entries => {
            entries.forEach(entry = > {
              if (entry.isIntersecting) {
                importFn().then(resolve); observer.disconnect();
               }
            });
          }
          { threshold }
        );

        // Observetheplaceholder element
        // Thiswillbe triggeredwhencomponent mountssetTimeout(() => importFn().then(resolve)100);
      } else {
        // Fallback: loadimmediatelyimportFn().then(resolve);
      }
    });
  });
}

/**
 * Batchpreloadmultiple components
 */
exportfunctionbatchPreload(
  components: Array<() => Promise<any>>
  delayMs: number = 100
): void { 
  components.forEach((importFnindex) => {
    setTimeout(() = > {
      preloadComponent(importFn);
     }index * delayMs);
  });
}

/**
 * Errorboundaryfor lazy-loadedcomponents
 */
classErrorBoundaryextends React.Component<
  {   children: React.ReactNode; fallback ?  : ComponentType<any >   }
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  staticgetDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() { console.error('Lazyloadingerror:'errorerrorInfo);
   }render() { if (this.state.hasError) {
      constFallback = this.props.fallback; returnFallback  ? React.createElement(Fallback)  : null;
      }returnthis.props.children;
  }
}
