export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== &apos;undefined&apos;) { importFn()} };
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import { lazy } from 'react';

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
export const dynamicImport = (importFn) => {
  return lazy(importFn);
};

export const createLazyComponent = (componentPath) => {
  return dynamicImport(() => import(componentPath));
};

export const preloadComponent = (importFn) => {
  if (typeof window !== 'undefined') {
    importFn();
  }
};
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
