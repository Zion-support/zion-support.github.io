import React from 'react';
type Href = string | { pathname?: string; href?: string };
<<<<<<< HEAD
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
<<<<<<< HEAD
  "href": Href;
  children: React.ReactNode;
};
function resolveHref("href": Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as { href?: string })?.href || '#';
=======
  href: Href;
  children: React.ReactNode;
};

function resolveHref(href: Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as any)?.href || '#';
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
}
export default function Link({ href, children, className, ...rest }: LinkProps) {
  const resolved = resolveHref(href);

  if (React.isValidElement(children)) {
<<<<<<< HEAD
    const existingClass = (children.props as { className?: string })?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    return React.cloneElement(children as React.ReactElement, {
      "href": resolved,
      "className": mergedClassName,
      ...rest});
  }
  return (
    <a href={resolved} className={className} {...rest}>
      {children}
    </a>
  );
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
=======
    const existingClass = (children.props as any)?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    return React.cloneElement(children as any, {
      href: resolved,
      className: mergedClassName,
      ...rest,
    });
  }
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
