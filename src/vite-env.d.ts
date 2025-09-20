/// <reference types="vite/client" />;
/// <reference types="react" />;
/// <reference types="react-dom" />;

interface ImportMetaEnv {readonly VITE_APP_TITLE: string;
readonly MODE: string;
readonly DEV: boolean;
}
}
readonly PROD: boolean}

interface ImportMeta {readonly env: ImportMetaEnv}

declare namespace JSX {interface IntrinsicElements {
<<<<<<< HEAD
=======
readonly PROD: boolean}

interface ImportMeta {
readonly env: ImportMetaEnv}

declare namespace JSX {
interface IntrinsicElements {
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
[elemName: string]: any}
}