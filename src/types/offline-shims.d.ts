// Minimal type declarations for offline development

declare module 'react' {
  export type FC<P = any> = (props: P) => any;
  export type ReactNode = any;
  export interface ChangeEvent<T = any> { target: T }
  export interface FormEvent<T = any> {}
  export interface KeyboardEvent<T = any> {}
  export interface RefObject<T> { current: T }
  export type RefCallback<T> = (value: T) => void;
  export type Ref<T> = RefObject<T> | RefCallback<T> | null;
  export type LegacyRef<T> = Ref<T>;
  export function useRef<T = any>(initial: T): { current: T }
  export function useEffect(effect: () => void, deps?: any[]): void;
  export function useState<T>(initial: T): [T, (value: T) => void];
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export default any;
}

declare module 'react/jsx-runtime' {
  export {};
}

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react-dom' {
  export function createRoot(container: any): any;
  export default any;
}

declare module 'react-router-dom' {
  export function useNavigate(): () => void;
  export const Link: any;
  export const Routes: any;
  export const Navigate: any;
  export default any;
}

declare module 'react-hook-form' {
  export function useForm<T = any>(...args: unknown[]): any;
  export default any;
}

declare module '@hookform/resolvers/zod' {
  export function zodResolver(...args: unknown[]): any;
}

declare module '@tanstack/react-query' {
  export function useMutation<T = any>(...args: unknown[]): any;
  export default any;
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