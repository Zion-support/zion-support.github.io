


interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly NEXT_PUBLIC_SUPABASE_URL?: string;
  readonly NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly url?: string;
}

// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from 'vite';
}

declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite';
  export default function reactSWC(): Plugin;
}

declare module 'path' {
  export function resolve(...paths: string[]): string;
  export function join(...paths: string[]): string;
  export function dirname(path: string): string;
}

declare module 'lovable-tagger' {
  import { Plugin } from 'vite';
  export function componentTagger(): Plugin;
}

// Add Node.js globals
<<<<<<< HEAD
<<<<<<< HEAD
declare const __dirname: string;
declare const process: {
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
declare var __dirname: string;
declare var process: {
=======
declare const __dirname: string;
declare const process: {
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
declare const __dirname: string;
declare const process: {
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  env: {
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
  }
};
