/// <reference types="vite/client" />;
/// <reference types="react" />;
/// <reference types="react-dom" />;

interface ImportMetaEnv {readonly VITE_APP_TITLE: string;
readonly MODE: string;
readonly DEV: boolean;
<<<<<<< HEAD
readonly PROD: boolean}

interface ImportMeta {
readonly env: ImportMetaEnv}

declare namespace JSX {
interface IntrinsicElements {
=======
}
}
readonly PROD: boolean}

interface ImportMeta {readonly env: ImportMetaEnv}

declare namespace JSX {interface IntrinsicElements {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
[elemName: string]: any}
}