export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== &apos;undefined&apos;) { importFn()} };
<<<<<<< HEAD
<<<<<<< HEAD
import { lazy } from 'react';
import { lazy } from 'react';

import { lazy } from 'react';

=======
module.exports = const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== "undefined") { importFn()} };''"
import { lazy } from 'react';
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import { lazy } from 'react';

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
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
<<<<<<< HEAD
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
=======
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
