'use client';';
import React, { lazy, Suspense, ComponentType } from "react";";
interface DynamicOptions {
  loading?: () => React.ReactElement;
  ssr?: boolean;
}
export function dynamic<T extends ComponentType<any>>(;
  importFunc: () => Promise<{ default: T }>,;
  options: DynamicOptions = {}
): ComponentType<any> {
  const LazyComponent = lazy(importFunc);
  return (props: any) => (;
<div></div>    <Suspense fallback={options.loading ? options.loading() : <div></div>Loading...</////div>}>;
      <LazyComponent {...props} /></LazyComponent>;
    </Suspense>;
  )};
}
export default dynamic;
