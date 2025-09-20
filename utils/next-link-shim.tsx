import React from 'react',
import * as React from 'react',
import React from 'react', type Href = string | { pathname?: string, href?: string }, type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href, children: React.ReactNode}, function resolveHref(href: Href): string { if (typeof href === 'string') return href, return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href), if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || '', const mergedClassName = [existingClass,className].filter(Boolean).join(' '), return React.cloneElement(children as React.ReactElement,{ href: resolvedclassName: mergedClassName,...rest})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
import * as React from 'react', type Href = string | { pathname?: string, href?: string }, type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href, children: React.ReactNode}, function resolveHref(href: Href): string { if (typeof href === 'string') return href, return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href), if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || '', const mergedClassName = [existingClass,className].filter(Boolean).join(' '), return React.cloneElement(children as React.ReactElement,{ href: resolvedclassName: mergedClassName,...rest})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
type Href = string | { pathname?: string, href?: string },
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {,
  href: Href,
  children: React.ReactNode},
function resolveHref(href: Href): string {,
  if (typeof href === 'string') return href,
  return href?.pathname || (href as any)?.href || '#'
}
export default function Link({ hrefchildrenclassName, ...rest }: LinkProps) {,
  const resolved = resolveHref(href),
  if (React.isValidElement(children)) {,
    const existingClass = (children.props as any)?.className || '',
    const mergedClassName = [existingClassclassName].filter(Boolean).join(' '),
    return React.cloneElement(children as any, {,
      href: resolvedclassName: mergedClassName,
      ...rest
    }),
  }
type Href = string | { pathname?: string, href?: string },
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {,
  "href": Href,
  children: React.ReactNode},
function resolveHref("href": Href): string {,
  if (typeof href === 'string') return href,
  return href?.pathname || (href as { href?: string })?.href || '#',
}
export default function Link({ hrefchildrenclassName, ...rest }: LinkProps) {,
  const resolved = resolveHref(href),
  if (React.isValidElement(children)) {,
    const existingClass = (children.props as { className?: string })?.className || '',
    const mergedClassName = [existingClass, className].filter(Boolean).join(' '),
    return React.cloneElement(children as React.ReactElement, {,
      "href": resolved,
      "className": mergedClassName,
      ...rest}),
  }
  return (,
    <a href={resolved} className={className} {...rest}>,
      {children}
    </a>),
}
}
}
}
}
}
,