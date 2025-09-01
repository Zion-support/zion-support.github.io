// Minimal type declarations for offline development

// React stubs
declare module 'react' {
  export type FC<P = any> = (props: P) => JSX.Element;
  export type ReactNode = any;
  export interface ChangeEvent<T = any> { target: T }
  export interface FormEvent<T = any> {}
  export interface KeyboardEvent<T = any> {}
  export interface RefObject<T> { current: T | null }
  export type RefCallback<T> = (value: T | null) => void;
  export type Ref<T> = RefObject<T> | RefCallback<T> | null;
  export type LegacyRef<T> = Ref<T>;
  export function useRef<T = any>(initial: T): { current: T };
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  const react: any;
  export default react;
}

declare module 'react/jsx-runtime' {
  export {};
}

declare namespace JSX {
  interface Element {
    type: any;
    props: any;
  }
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react-dom' {
  export function render(element: any, container: any): void;
  const reactDom: any;
  export default reactDom;
}

declare module 'react-router-dom' {
  export function useNavigate(): (path: string) => void;
  export const Link: any;
  export const Routes: any;
  export const Navigate: any;
  const rr: any;
  export default rr;
}

declare module 'react-hook-form' {
  export function useForm<T = any>(...args: unknown[]): any;
  const rhf: any;
  export default rhf;
}

declare module '@hookform/resolvers/zod' {
  export function zodResolver(...args: unknown[]): any;
}

declare module '@tanstack/react-query' {
  export function useMutation<T = any>(...args: unknown[]): any;
  const rq: any;
  export default rq;
}

declare module 'jspdf' {
  export class jsPDF {
    constructor(...args: unknown[]);
    [key: string]: any;
  }
}

declare module 'path' {
  const path: any;
  export default path;
}

declare module 'jspdf-autotable' {
  const autotable: any;
  export default autotable;
}

declare module 'zod' {
  export type infer<T> = any;
  const z: any;
  export { z };
  export default z;
}