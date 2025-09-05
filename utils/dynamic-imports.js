export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== &apos;undefined&apos;) { importFn()} };
<<<<<<< HEAD

import { lazy } from 'react';

>>>>>>> origin/main

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
module.exports = const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== "undefined") { importFn()} };''"
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
import { lazy } from 'react';
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
import { lazy } from 'react';

>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
import { lazy } from 'react';

>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
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

>>>>>>> origin/main

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
<<<<<<< HEAD
=======
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
>>>>>>> origin/main
