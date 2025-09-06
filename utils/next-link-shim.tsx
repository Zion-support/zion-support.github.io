import React from "react";


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

  className: string;
  id: string;
  innerHTML: string;
  textContent: string | null;
  style: { [key: string]: string }
}

interface HTMLAnchorElement extends HTMLElement {
  tagName: "A";
  href: string;
  target: string;
}
type Href = string | { pathname?: string; href?: string }
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Href;
  children: React.ReactNode;
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}};
origin/cursor/integrate-build-improve-and-re-verify-c7b5
};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children};
};
};
ursor/integrate-build-improve-and-re-verify-8f7d
};
}
function resolveHref(href: Href): string {
  if (typeof href === "string") return href;
  return href?.pathname || (href as { href?: string })?.href || "#";
}

export default function Link({
  href,
  children,
  className,
  ...rest
}: LinkProps) {
  const resolved = resolveHref(href);


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
      {children}
    </a>
  );
}
