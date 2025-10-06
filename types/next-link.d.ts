declare module 'next/link' {
  import * as React from 'react';

  export interface LinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children?: React.ReactNode;
    className?: string;
  }

  const Link: React.FC<LinkProps>;
  export default Link;
}
