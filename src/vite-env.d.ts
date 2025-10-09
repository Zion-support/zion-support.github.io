<<<<<<< HEAD
// / 
          
          
          
          
          
          
          
          
          <reference types="vite/client" />
=======
/// <reference types="vite/client" />

>>>>>>> cursor/fix-errors-and-merge-to-main-2b60
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}