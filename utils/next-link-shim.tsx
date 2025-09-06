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

=======

=======
}}; return (; <a href = {resolved} className = {className} {...rest}>; {children}}}};

};
};
  return (;
    <a href={resolved} className={className} {...rest}>;
      {children};
};
};

};
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
