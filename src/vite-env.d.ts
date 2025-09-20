/// <reference types="vite/client" />;
/// <reference types="react" />;
/// <reference types="react-dom" />;

interface ImportMetaEnv {
<<<<<<< HEAD
readonly VITE_APP_TITLE: string;
readonly MODE: string;
readonly DEV: boolean;
readonly PROD: boolean}
=======
  readonly VITE_APP_TITLE: string,
  readonly MODE: string,
  readonly DEV: boolean,
  readonly PROD: boolean,
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

interface ImportMeta {
readonly env: ImportMetaEnv}

declare namespace JSX {
interface IntrinsicElements {
[elemName: string]: any}
}