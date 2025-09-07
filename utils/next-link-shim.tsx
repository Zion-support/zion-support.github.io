<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

;
  };
  };
  return (,;
    <a href={resolved} className={className} {...rest}>,;
;
      {children};};
};
};
;
origin/cursor/integrate-build-improve-and-re-verify-242d
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}};
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
};
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children}
};
}
};

};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children};
};
};
};

import React from 'react';

};

}

};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children};
};
};
};
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/main
=======
}
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children}
};
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
import React from 'react';

type Href = string | { pathname?: string; href?: string };

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Href;
<<<<<<< HEAD
<<<<<<< HEAD
  children: React.ReactNode;
<<<<<<< HEAD
};

function resolveHref(href: Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as { href?: string })?.href || '#';
=======
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}};
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
  children: React.ReactNode
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  children: React.ReactNode
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
<<<<<<< HEAD
<<<<<<< HEAD
      {children};
=======
      {children}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
}
};
<<<<<<< HEAD
};
origin/automation-improvements-final
import React from 'react';
// Define HTMLAnchorElement if not available
interface HTMLElement {
=======
import React from "react";

=======
      {children}
};
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from "react";

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  className: string;
  id: string;
  innerHTML: string;
  textContent: string | null;
  style: { [key: string]: string }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

interface HTMLAnchorElement extends HTMLElement {;

  tagName: 'A';
=======
interface HTMLAnchorElement extends HTMLElement {
  tagName: "A";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  href: string;
=======
  tagName: 'A';  href: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  tagName: 'A';  href: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  target: string;
}
type Href = string | { pathname?: string; href?: string }
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Href;
  children: React.ReactNode;
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}};
origin/cursor/integrate-build-improve-and-re-verify-c7b5
}
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children}
};
};
ursor/integrate-build-improve-and-re-verify-8f7d
};
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
origin/main
function resolveHref(href: Href): string {
=======
=======
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
<<<<<<< HEAD
<<<<<<< HEAD
      {children};
};
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
};
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
}
>>>>>>> origin/main
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
function resolveHref(href: Href): string {
=======
      {children}
};
=======
      {children}
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
};
=======

interface HTMLAnchorElement extends HTMLElement {
  tagName: "A";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from 'react';
import Link from 'next/link';

interface NextLinkShimProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  if (typeof href === 'string') return href;
  return href?.pathname |(href as { href?: string })?.href |'#';
=======
function resolveHref(href: Href): string {
  if (typeof href === "string") return href;
  return href?.pathname || (href as { href?: string })?.href || "#";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
}

export default function Link({
  href,
  children,
  className,
  ...rest
}: LinkProps) {
  const resolved = resolveHref(href);

<<<<<<< HEAD
  if (React.isValidElement(children)) {
    const existingClass = (children.props as { className?: string })?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    
    return React.cloneElement(children as React.ReactElement<{ href?: string; className?: string }>, {
      href: resolved,
      className: mergedClassName,
      ...rest,
    });
  }

=======
<<<<<<< HEAD
      href: resolved
      className: mergedClassName
      ...rest

    });
  }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from 'react';
type Href = string | { pathname?: string; href?: string };
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  "href": Href;
<<<<<<< HEAD
<<<<<<< HEAD
  children: React.ReactNode;
=======
  children: React.ReactNode
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  children: React.ReactNode
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
function resolveHref("href": Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as { href?: string })?.href || '#';
<<<<<<< HEAD
}
export default function Link({ href, children, className, ...rest }: LinkProps) {

<<<<<<< HEAD
export default function Link({ href, children, className, ...rest }: LinkProps) {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const resolved = resolveHref(href);
  if (React.isValidElement(children)) {
    const existingClass = (children.props as { className?: string })?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    return React.cloneElement(children as React.ReactElement, {
      "href": resolved,
      "className": mergedClassName,
      ...rest});
  }
=======





>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
  return (
    <a href={resolved} className={className} {...rest}>
=======
function resolveHref(href: Href): string {
  if (typeof href === "string") return href;
  return href?.pathname || (href as { href?: string })?.href || "#";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function Link({ href, children, className, ...rest }: LinkProps) {;


  const resolved = resolveHref(href);
  if (React.isValidElement(children)) {
    const existingClass =
      (children.props as { className?: string })?.className || "";
    const mergedClassName = [existingClass, className]
      .filter(Boolean)
      .join(" ");

    return React.cloneElement(
      children as React.ReactElement<{ href?: string; className?: string }>,
      {
        href: resolved,
        className: mergedClassName,
        ...rest,
      },
    );
  }
  return (
    <a href={resolved} className={class_name} {...rest}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      {children}
    </a>
  );
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
}
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
}
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
}
ursor/integrate-build-improve-and-re-verify-b76c
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/cursor/integrate-build-improve-and-re-verify-242d
}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
origin/main
origin/automation-improvements-final

}
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
=======
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

>>>>>>> origin/automation-improvements-final
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
