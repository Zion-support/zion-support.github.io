<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
import React from 'react';
type Href = string | { pathname?: string; href?: string };
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Href;
  children: React.ReactNode;
};
function resolveHref(href: Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as any)?.href || '#';
}
export default function Link({ href, children, className, ...rest }: LinkProps) {
  const resolved = resolveHref(href);
  if (React.isValidElement(children)) {
    const existingClass = (children.props as any)?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    return React.cloneElement(children as any, {
      href: resolved,
      className: mergedClassName,
      ...rest,
    });
  }
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
import React from 'react';
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import React from 'react';
import * as React from 'react';
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
type Href = string | { pathname?: string; href?: string };
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  "href": Href;
  children: React.ReactNode;
};
function resolveHref("href": Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as { href?: string })?.href || '#';
}
export default function Link({ href, children, className, ...rest }: LinkProps) {
  const resolved = resolveHref(href);
  if (React.isValidElement(children)) {
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
<<<<<<< HEAD
<<<<<<< HEAD
}
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
=======
}
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import * as React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
