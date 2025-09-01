// Minimal type declarations for offline development

// React stubs
declare module 'react' {

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
  const react: ;
  export default react}
<<<<<<< HEAD

declare module 'react/jsx-runtime' {

  export {}}
=======
'declare module 'react/jsx-runtime' {

  export {}}
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

declare namespace JSX {

  interface Element {

}
  interface IntrinsicElements {

<<<<<<< HEAD

    [elemName: string]: ;

}
=======
    [elemName: string]: }
>>>>>>> main
}

declare module 'react-dom' {

  export function reactDom: ;
  export default reactDom}
<<<<<<< HEAD

declare module 'react-router-dom' {

=======
'declare module 'react-router-dom' {

>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  export function useNavigate(): ;
  export const Link: ;
  export const Routes: ;
  export const Navigate: ;
  const rr: ;
  export default rr}
<<<<<<< HEAD

declare module 'react-hook-form' {

=======
'declare module 'react-hook-form' {

>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  export function useForm<T = any>(...args: unknown[]): ;
  const rhf: ;
  export default rhf}

declare module '@hookform/resolvers/zod' {

  export function zodResolver(...args: unknown[]): }
<<<<<<< HEAD

declare module '@tanstack/react-query' {

=======
'declare module '@tanstack/react-query' {

>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  export function useMutation<T = any>(...args: unknown[]): ;
  const rq: ;
  export default rq}

declare module 'jspdf' {

  export class jsPDF {

    constructor(...args: unknown[]);
    [key: string]: ;
<<<<<<< HEAD
  }
}

=======
  }}
'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
declare module 'path' {

  const path: ;
  export default path}

declare module 'jspdf-autotable' {

  const autotable: ;
  export default autotable}
<<<<<<< HEAD

declare module 'zod' {

=======
'declare module 'zod' {

>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  export type infer<T> = ;
  const z: ;
  export { z };
<<<<<<< HEAD
  export default z;
}

=======
  export default z}

;
>>>>>>> main
export default useEffect;
export default useRef;