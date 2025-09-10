/*
  Minimal React type declarations.
  These are only used if @types/react is not present.
*/

declare module "react" {
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {
    type: T;
    props: P;
    key: React.Key | null;
  }

  export interface FC<P = Record<string, unknown>> {
    (props: P): ReactElement | null;
  }

  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export type Key = string | number;

  const React: {
    useMemo: typeof useMemo;
  } & Record<string, unknown>;
  export default React;
}

declare namespace React {
  export interface IntrinsicElements {
    [elemName: string]: any;
  }
}
