/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
  readonly VITE_APP_TITLE?: string;
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  // Add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly url: string;
  readonly hot?: {
    readonly data: Record<string, unknown>;
    accept(): void;
    accept(cb: (mod: unknown) => void): void;
    accept(dep: string, cb: (mod: unknown) => void): void;
    accept(deps: readonly string[], cb: (mods: unknown[]) => void): void;
    dispose(cb: (data: Record<string, unknown>) => void): void;
    decline(): void;
    invalidate(): void;
    on(event: string, cb: (...args: unknown[]) => void): void;
  };
}
