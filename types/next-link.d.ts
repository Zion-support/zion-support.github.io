declare module 'next/link' {/* content */}
  import * as React from 'react';
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {/* content */}
    href: string;
    children?: React.ReactNode;
    className?: string;
  }
  const Link: React.FC<LinkProps>;
  export default Link;
}

