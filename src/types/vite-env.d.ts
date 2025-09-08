


interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly NEXT_PUBLIC_SUPABASE_URL?: string;
  readonly NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  readonly VITE_API_URL?: string;
  // add more env variables as needed
}




declare module 'path' {
  export function resolve(...paths: string[]): string;
  export function join(...paths: string[]): string;
  export function dirname(path: string): string;
  const path: {
    resolve(...paths: string[]): string;
    join(...paths: string[]): string;
    dirname(path: string): string;
  };
  export default path;
}

