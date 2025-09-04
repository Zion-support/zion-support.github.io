<<<<<<< HEAD

// Dynamic import helper for code splitting
export const dynamicImport = (importFn) => {
  return React.lazy(importFn)};

// Route-based code splitting
export const createLazyComponent = (componentPath) => {
  return dynamicImport(() => import(componentPath))};

// Preload critical components
export const preloadComponent = (importFn) => {
  if (typeof window !== 'undefined') {
    importFn()}
};
=======
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
