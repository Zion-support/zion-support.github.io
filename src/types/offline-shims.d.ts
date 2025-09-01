/**
 * Offline shims for external dependencies;
 * These provide minimal type definitions for when packages are not available;
 */

// React stubs;
declare module 'react' {}
  export type FC<P = any> = props: anyP ;
  export type ReactNode = ;
  export interface ChangeEvent<T = any> { target: T }
  export interface FormEvent<T = any> {}
  export interface KeyboardEvent<T = any> {};
  export interface RefObject<T> { current: T };
  export type RefCallback<T> = value: anyT void;
  export type Ref<T> = RefObject<T> | RefCallback<T> | null;
  export type LegacyRef<T> = Ref<T>;
  export function useRef<T = any>(initial: T): { current: T };
  const react: any;
  export default react}'
'declare module 'react/jsx-runtime' {}
  export {}}

  export const motion: {}
    div: MotionComponent;
    span: MotionComponent;
    p: MotionComponent;
    h1: MotionComponent;
    h2: MotionComponent;
    h3: MotionComponent;
    button: MotionComponent;
    img: MotionComponent;
    section: MotionComponent;
    article: MotionComponent;
    header: MotionComponent;
    footer: MotionComponent;
    nav: MotionComponent;
    ul: MotionComponent;
    li: MotionComponent;
    a: MotionComponent;
    form: MotionComponent;
    input: MotionComponent;
    [key: string]: MotionComponent;
  };

  export const AnimatePresence: React.ComponentType<{}
    children?: React.ReactNode;
    mode?: string;
    initial?: boolean;
  }>;

  export const useAnimation: () => any;
  export const useMotionValue: (value: any) => any;
  export const useTransform: (value: any, input: any[], output: any[]) => any;
  export const useSpring: (value: any, config?: any) => any;
}
'
declare module 'react-dom' {}
  export function reactDom: any;
  export default reactDom}'
'declare module 'react-router-dom' {}
  export function useNavigate(): any;
  export const Link: any;
  export const Routes: any;
  export const Navigate: any;
  const rr: any;
  export default rr}'
'declare module 'react-hook-form' {}
  export function useForm<T = any>(...args: unknown[]): any;
  const rhf: any;
  export default rhf}
'
declare module '@hookform/resolvers/zod' {}
  export function zodResolver(...args: unknown[]): any }'
'declare module '@tanstack/react-query' {}
  export function useMutation<T = any>(...args: unknown[]): any;
  const rq: any;
  export default rq}
'
declare module 'jspdf' {}
  export class jsPDF {}
    constructor(...args: unknown[]);
    [key: string]: any;
  }}'
''
declare module 'path' {}
  const path: any;
  export default path}
'
declare module 'jspdf-autotable' {}
  const autotable: any;
  export default autotable}'
'declare module 'zod' {}
  export type infer<T> = ;
  const z: any;
  export { z };
  export default z}

;
export default useEffect;
export default useRef;'
