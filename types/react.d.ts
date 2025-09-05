/*
  Minimal React type declarations.
  ---------------------------------------------------------------------------
  These definitions are **not** a replacement for `@types/react` – they only
  exist so that isolated compilation of individual files (e.g., in CI or code
  review bots) will not fail when full React type declarations are not
  present.  They purposefully model just enough surface-area used throughout
  the code-base.  If you have `@types/react` available in `node_modules`,
  TypeScript will prefer those and ignore this file, because paths declared in
  `typeRoots` are merged with normal type resolution.
*/

<<<<<<< HEAD
declare module "react" {
  // Basic ReactElement stub (JSX trees ultimately compile into this).
   
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {
    type: T,
    props: P,
    key: React.Key | null
  }

  // Function Component (very trimmed-down).
   
  export interface FC<P = Record<string, unknown>> {
    (props: P): ReactElement | null
  }

  // Common hooks we rely on.
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T,
=======
declare module "react" {_// Basic ReactElement stub (JSX trees ultimately compile into this).
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface ReactElement<P = any, _T extends string | React.JSXElementConstructor<any> = any> {
    type: T;
    props: P;
    key: React.Key | null;}

  // Function Component (very trimmed-down).
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface FC<P = Record<string, unknown>> {_(props: P): ReactElement | null;}

  // Common hooks we rely on.
  export function useMemo<T>(_factory: () => T, deps: readonly unknown[]): T;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  export type Key = string | number,

  // Default export so `import React from 'react'` keeps working even without
  // the real react package being installed.
<<<<<<< HEAD
  const React: {
    useMemo: typeof useMemo
  } & Record<string, unknown>,
=======
  const React: {_useMemo: typeof useMemo;} & Record<string, unknown>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  export default React
}

declare namespace React {_// Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements"
  // errors when `@types/react` is not present.
   
  export interface IntrinsicElements {
<<<<<<< HEAD
    [elemName: string]: any
  }
=======
    [elemName: string]: unknown;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}