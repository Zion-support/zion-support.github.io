'use client';
import React, { lazy, Suspense, ComponentType } from 'react';
interface DynamicOptions {
  loading?: () => React.ReactElement;
  ssr?: boolean;
}
export function dynamic<T extends ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  options: DynamicOptions = {}
): ComponentType<unknown> {
  const LazyComponent = lazy(importFunc);
  return (props: any) => (
    <Suspense fallback={options.loading ? options.loading() : <div>Loading...</div>}>
      <LazyComponent {...(props as any)} />
    </Suspense>
  );
}
export default dynamic;
