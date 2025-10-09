'use client';
import React, { lazy, Suspense, ComponentType } from 'react;
interface DynamicOptions {
  loading?: () => React.ReactElement;
  ssr?: boolean;
}
export function dynamic<T extends ComponentType<unknown>>(
  importFunc: any,
    t: any}>,
  _options: any,
    s= {}
): ComponentType<unknown> {
  return (props: any,;
    k={options.loading ? options.loading() : <div>Loading...</div>}>;
      <LazyComponent {...props} />;
    </Suspense>;
  );
}
export default dynamic;
