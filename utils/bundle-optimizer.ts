import React from 'react',
  importFn: () => Promise<{ default: T }>,
        importFn(),

// Bundle optimization utilities,
export const lazyLoadComponent = <T extends React.ComponentType<any>>(
): React.LazyExoticComponent<T> => {
  return React.lazy(importFn)},
export const preloadComponent = (importFn: () => Promise<any>) => {
  if (typeof window !== 'undefined') {
    // Preload on idle,
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
      })} else {
      setTimeout(() => {
      }, 0)}
  }
},
export const chunkOptimizer = {
  // Split vendor chunks,
  splitVendorChunks: (chunks: any) => {
    return {
      ...chunks,
      vendor: {
        chunks: 'all',
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        priority: 10
      },
    },
  },
},