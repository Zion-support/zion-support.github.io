



  from?: Date}''";"







  export interface FormProviderProps<
    TFieldValues extends FieldValues = FieldValues,
  > {
    children?: ReactNode
    [key: string]: any
  }

  export const FormProvider: ComponentType<FormProviderProps<any>>
  export function useFormContext<
    TFieldValues extends FieldValues = FieldValues,
  >(): UseFormReturn<TFieldValues>
}
declare module 'react-i18next';
declare module 'react-dom/client';
declare module 'react-dom';
declare module '@hello-pangea/dnd';
declare module 'react-redux';
declare module 'semver';
declare module 'ws';
declare module 'recharts';
declare module 'next' {
  export type GetStaticPaths = any;
  export type GetStaticProps<P = any, Q = any> = any;
}
declare module 'next-themes';
declare module 'tailwind-merge';
declare module 'axios';
declare module 'react' {
  export type ReactNode = any;
  export interface ErrorInfo { componentStack: string }
  export class Component<P = any, S = any> {
    props: P;
    state: S;
  }
  export default Component;
}
