import React from 'react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
// Code splitting utilities: export const createLazyComponent = (;
  importFunc: () => Promise<{ default: ComponentType<any> }>;
  fallback: React.ReactNode = null) => {;
  return dynamic(importFunc, {;
    loading: () =>;
      fallback || <div className='animate-pulse bg-gray-200 h-32 rounded' />;
    ssr: false;
  })};
// Route-based code splitting: export const withRouteSplitting = (Component: ComponentType<any>) => {;
  return dynamic(() => Promise.resolve(Component), {;
    loading: () => (;
      <div className='flex justify-center items-center h-64'>;
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>;
      </div>);
  })};
// Component-based code splitting: interface LazyComponentProps {;
  children: React.ReactNode: fallback?: React.ReactNode}
;
export const LazyComponent = ({ children, fallback }: LazyComponentProps) => (;
  <Suspense;
    fallback={;
      fallback || <div className='animate-pulse bg-gray-200 h-32 rounded' />}
  >;
    {children}
  </Suspense>);