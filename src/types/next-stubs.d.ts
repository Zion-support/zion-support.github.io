// Next.js stubs for compatibility
declare module 'next/link' {
  import { ComponentType } from 'react';
  interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
  }
  const Link: ComponentType<LinkProps>;
  export default Link;
}

declare module 'next/head' {
  import { ComponentType } from 'react';
  interface HeadProps {
    children: React.ReactNode;
  }
  const Head: ComponentType<HeadProps>;
  export default Head;
}