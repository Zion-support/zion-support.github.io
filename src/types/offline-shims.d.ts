// Minimal type declarations for offline development

// React stubs
declare module 'react' {
  const React: any;
  export default React;
  export as namespace React;

  // Basic placeholders to satisfy TypeScript when node modules are not installed
  export type ReactNode = any;
  export type ReactElement = any;
  export interface FC<P = {}> {
    (props: P & { children?: ReactNode }): ReactElement | null;
  }
  export interface SyntheticEvent<T = Element> { target: T; preventDefault(): void; }
  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {}
  export interface KeyboardEvent<T = Element> extends SyntheticEvent<T> {
    key?: string;
    shiftKey?: boolean;
  }
  export interface MouseEvent<T = Element> extends SyntheticEvent<T> {}
  export interface FormEvent<T = Element> extends SyntheticEvent<T> {}
  export type LegacyRef<T> = any;
  export type Ref<T> = any;
  export type ElementRef<T> = any;
  export type ComponentPropsWithoutRef<T> = any;
  export type ComponentProps<T> = any;
  export type ComponentPropsWithRef<T> = any;
  export type HTMLAttributes<T> = any;
  export type ButtonHTMLAttributes<T> = any;
  export type TextareaHTMLAttributes<T> = any;
  export type ThHTMLAttributes<T> = any;
  export type TdHTMLAttributes<T> = any;
  export function useState<S>(initialState: S | (() => S)): [
    S,
    (value: S | ((prev: S) => S)) => void
  ];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T>(initialValue?: T): { current: T };
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useCallback<T extends (...args: any[]) => any>(fn: T, deps: any[]): T;
  export function createContext<T>(defaultValue?: T): any;
  export function useContext<T>(context: any): T;
  export function forwardRef<T, P = {}>(render: (props: P, ref: any) => ReactElement | null):
    (props: P & { ref?: any }) => ReactElement | null;
  export const Children: {
    toArray(children: ReactNode): ReactNode[];
    map(children: ReactNode, fn: (child: ReactNode, index: number) => ReactNode): ReactNode[];
  };
  export function isValidElement(object: any): object is ReactElement;
  // JSX runtime fragments
  export const Fragment: any;
  export const StrictMode: any;
  export function cloneElement(element: ReactElement, props?: any, ...children: ReactNode[]): ReactElement;
}

declare module 'react/jsx-runtime' {
  export {};
}

declare module 'react-dom' {
  export function render(...args: any[]): any;
  const reactDom: any;
  export default reactDom;
}

declare module 'react-router-dom' {
  export function useParams<T = any>(): T;
  export function useNavigate(): any;
  export const Link: any;
  export const Route: any;
  export const Routes: any;
  export const Navigate: any;
  const rr: any;
  export default rr;
}

declare module 'react-hook-form' {
  export function useForm<T = any>(...args: any[]): any;
  const rhf: any;
  export default rhf;
}

declare module '@hookform/resolvers/zod' {
  export function zodResolver(...args: any[]): any;
}

declare module '@tanstack/react-query' {
  export function useQuery<T = any>(...args: any[]): any;
  export function useMutation<T = any>(...args: any[]): any;
  const rq: any;
  export default rq;
}

declare module 'zod' {
  export type infer<T> = any;
  const z: any;
  export { z };
  export default z;
}

// Basic jsPDF stub
declare module 'jspdf' {
  export class jsPDF {
    constructor(...args: any[]);
    [key: string]: any;
  }
  export default jsPDF;
}

declare module 'clsx' {
  const clsx: (...classes: any[]) => string;
  export default clsx;
}

declare module 'lucide-react' {
  export type LucideIcon = any;
}

declare module '@supabase/supabase-js' {
  export type User = any;
  export interface SupabaseClient {}
}
