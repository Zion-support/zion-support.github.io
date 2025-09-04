import React from 'react';

type Href = string | { pathname?: string; href?: string };

// eslint-disable-next-line no-undef
<<<<<<< HEAD
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode;
};
=======
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Href;
  children: React.ReactNode};
>>>>>>> 2449664315b75e5ee00d8e23bc10e38e9ae3ef15

function resolveHref(href: Href): string {
  if (typeof href === 'string') return href;
  return href ? .pathname || (href as any)?.href || '#'}

export default function Link() { const resolved = resolveHref(href);

  if (React.isValidElement(children)) {
    const existingClass = (children.props as any)?.className || '';
<<<<<<< HEAD
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    return React.cloneElement(children as any, { href: resolved,
      className: mergedClassName,
      ...rest,
    });
=======
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ') : return React.cloneElement(children as any, {
      href
>>>>>>> 2449664315b75e5ee00d8e23bc10e38e9ae3ef15
  }

  return (
    <a href={resolved} className={className} {...rest}>
      {children}
    </a>
  );
}
