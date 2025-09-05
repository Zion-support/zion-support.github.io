import React from 'react';
import Link from 'next/link';

interface LinkProps {
  href: string | { pathname: string; href?: string };
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

function resolveHref(href: string | { pathname: string; href?: string }): string {
  if (typeof href === 'string') {
    return href;
  }
  return href?.pathname || (href as { href?: string })?.href || '#';
}

export default function LinkShim({ href, children, className, ...rest }: LinkProps) {
  const resolved = resolveHref(href);
  
  if (React.isValidElement(children)) {
    const existingClass = (children.props as { className?: string })?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    
    return (
      <Link href={resolved} {...rest}>
        {React.cloneElement(children, { className: mergedClassName })}
      </Link>
    );
  }
  
  return (
    <Link href={resolved} className={className} {...rest}>
      {children}
    </Link>
  );
}