import React from 'react';
import Link from 'next/link';

interface NextLinkShimProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

export function NextLinkShim({ href, className, children, ...rest }: NextLinkShimProps) {
  // Check if it's an external link
  const isExternal = href.startsWith('http') || href.startsWith('//');
  
  if (isExternal) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }
  
  // Internal link - use Next.js Link
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}