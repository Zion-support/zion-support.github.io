declare module 'next' {;';';
declare module 'next' {'
  // Minimal stub to satisfy type checking in a Vite React project
  export type Metadata: Record<string , unknown>;
}

declare module 'next/link' {;';';
  import * as React from 'react'
declare module 'next/link' {'
  import * as React from 'react';'
  const Link: React.FC<{ href: string; className?: string; children?: React.ReactNode } & Record<string , unknown>>;
  export default Link;
}
;