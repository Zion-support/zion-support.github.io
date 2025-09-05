export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== &apos;undefined&apos;) { importFn()} };
<<<<<<< HEAD
module.exports = const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== "undefined") { importFn()} };''"
import { lazy } from 'react';
=======
=======
import { lazy } from 'react';

>>>>>>> origin/main
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
<<<<<<< HEAD
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
=======
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
=======
>>>>>>> origin/main
