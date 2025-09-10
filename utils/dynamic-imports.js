export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== &apos;undefined&apos;) { importFn()} };
<<<<<<< HEAD
import { lazy } from 'react';

export const dynamicImport = (importFn) => {
  return lazy(importFn);
=======
module.exports = const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== "undefined") { importFn()} };''"
import { lazy } from 'react';export const dynamicImport = (importFn) => {  return lazy(importFn);
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
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
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
