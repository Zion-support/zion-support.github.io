<<<<<<< HEAD
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}};
};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children};
};
};
};
import React from 'react';

// Define HTMLAnchorElement type if not available
interface HTMLElement {
  className?: string;
}

interface HTMLAnchorElement extends HTMLElement {
  href: string,
  className?: string;
}

type Href = string | { pathname?: string; href?: string };

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Href,
  children: React.ReactNode,
};
=======
import React from 'react';

// Define HTMLAnchorElement type if not available
interface HTMLElement {
  className?: string;
}

interface HTMLAnchorElement extends HTMLElement {
  href: string,
  className?: string;
}

type Href = string | { pathname?: string; href?: string };

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Href,
  children: React.ReactNode,
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function resolveHref(href: Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as { href?: string })?.href || '#';
}

export default function Link({ href, children, className, ...rest }: LinkProps) {
  const resolved = resolveHref(href);

  if (React.isValidElement(children)) {
    const existingClass = (children.props as { className?: string })?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    
    return React.cloneElement(children as React.ReactElement<{ href?: string; className?: string }>, {
      href: resolved,
      className: mergedClassName,
      ...rest,
    });
  }

  return (
    <a href={resolved} className={className} {...rest}>
      {children}
    </a>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
