<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react';
type Href = string | { pathname?: string; href?: string };
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Href;
  children: React.ReactNode;
=======
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children};
};
};
};
>>>>>>> origin/automation-improvements-final
import React from 'react';
// Define HTMLAnchorElement if not available
interface HTMLElement {
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';

// Define HTMLAnchorElement if not available;
interface HTMLElement {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className: string;
  id: string;
  innerHTML: string;
  textContent: string | null;
  style: { [key: string]: string }
}
<<<<<<< HEAD
interface HTMLAnchorElement extends HTMLElement {
=======

interface HTMLAnchorElement extends HTMLElement {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  tagName: 'A';
  href: string;
  target: string;
}
<<<<<<< HEAD
type Href = string | { pathname?: string; href?: string }
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Href;
  children: React.ReactNode;
}
function resolveHref(href: Href): string {
=======

type Href = string | { pathname?: string; href?: string };

type LinkProps = React && React.AnchorHTMLAttributes<HTMLAnchorElement> & {;
  href: Href;
  children: React && React.ReactNode;
};

function resolveHref(): any (href: Href): string {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (typeof href === 'string') return href;
  return href?.pathname |(href as { href?: string })?.href |'#';
}
export default function Link({ href, children, className, ...rest }: LinkProps) {
  const resolved = resolveHref(href);
  if (React.isValidElement(children)) {
    const existingClass = (children.props as { className?: string })?.className |'';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    return React.cloneElement(children as React.ReactElement<{ href?: string; className?: string }>, {

      href: resolved
      className: mergedClassName
      ...rest

    });
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react';
type Href = string | { pathname?: string; href?: string };
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  "href": Href;
  children: React.ReactNode;
};
function resolveHref("href": Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as { href?: string })?.href || '#';
}
<<<<<<< HEAD
export default function Link({ href, children, className, ...rest }: LinkProps) {
  const resolved = resolveHref(href);
  if (React.isValidElement(children)) {
    const existingClass = (children.props as { className?: string })?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    return React.cloneElement(children as React.ReactElement, {
      "href": resolved,
      "className": mergedClassName,
      ...rest});
=======

export default function Link(): any ({ href, children, className, ...rest }: LinkProps) {;
  const resolved = resolveHref(href);

  if (React && React.isValidElement(children)) {;
    const existingClass = (children && children.props as { className?: string })?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');

    return React && React.cloneElement(children as React && React.ReactElement<{ href?: string; className?: string }>, {;
      href: resolved,;
      className: mergedClassName,;
      ...rest,;
    });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
  return (
    <a href={resolved} className={className} {...rest}>;
      {children}
    </a>;
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
=======
<<<<<<< HEAD
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
=======
}
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
