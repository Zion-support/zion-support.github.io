/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
  readonly SSR: boolean;
  [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly url: string;
}
