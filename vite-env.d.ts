/// <reference types="vite/client" />

interface ImportMetaEnv {
<<<<<<< HEAD
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
=======
}
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string
  readonly SSR: boolean
  readonly [key: string]: unknown,
/// <reference types="vite/client" /></reference>
interface ImportMetaEnv {/* TODO: Fix JSX expression */};
};
interface ImportMeta {/* TODO: Fix JSX expression */};
};
"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
