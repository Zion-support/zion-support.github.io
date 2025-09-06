}};
export const dynamicImport = (importFn) = > { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) = > { return dynamicImport(() = > import(componentPath))}; export const preloadComponent = (importFn) = > { if (typeof window ! = = 'undefined') { importFn()} };
export const dynamicImport = (importFn) = > { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) = > { return dynamicImport(() = > import(componentPath))}; export const preloadComponent = (importFn) = > { if (typeof window ! = = 'undefined') { importFn()} };
export const dynamicImport = (importFn) = > { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) = > { return dynamicImport(() = > import(componentPath))}; export const preloadComponent = (importFn) = > { if (typeof window ! = = 'undefined') { importFn()} };
;
;
<<<<<<< HEAD

=======
};
export const dynamicImport = (importFn) => { return React.lazy(importFn)}, export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}, export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
export const dynamicImport = (importFn) => { return React.lazy(importFn)}, export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}, export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
export const dynamicImport = (importFn) => { return React.lazy(importFn)}, export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}, export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
