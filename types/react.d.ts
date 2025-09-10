/*
 * This is a minimal React type definition file for when @types/react is not available.
 * If you have `@types/react` available in `node_modules`, TypeScript will prefer those
 * and ignore this file, because paths declared in `typeRoots` are merged with normal
 * type resolution.
 */
declare module "react" {
  // Basic ReactElement stub (JSX trees ultimately compile into this)
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {
    type: T;
    props: P;
    key: React.Key | null;
  }

  // Function Component (very trimmed-down)
  export interface FC<P = Record<string, unknown>> {
    (props: P): ReactElement | null;
  }

  // Common hooks we rely on
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export type Key = string | number;

  // Default export so `import React from 'react'` keeps working even without
  // the real react package being installed
  const React: {
    useMemo: typeof useMemo;
  } & Record<string, unknown>;
  export default React;
}

declare namespace React {
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements"
  // errors when `@types/react` is not present
  export interface IntrinsicElements {
    [elemName: string]: any;
  }
}