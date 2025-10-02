<<<<<<< HEAD
declare module 'next' {;
=======
declare module 'next' {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  // Minimal stub to satisfy type checking in a Vite React project
  export type Metadata = Record<string, unknown>;
}

<<<<<<< HEAD
declare module 'next/link' {;
  import * as React from 'react';
=======
declare module 'next/link' {';
  import * as React from 'react';';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  const Link: React.FC<{ href: string; className?: string; children?: React.ReactNode } & Record<string, unknown>>;
  export default Link;
}
;