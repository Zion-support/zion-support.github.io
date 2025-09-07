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
import React from 'react';
import Link from 'next/link';

interface NextLinkShimProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
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
