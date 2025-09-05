import React from 'react'
  if (typeof href === 'string'
  return href?.pathname || (href as { href?: string })?.href || '#'
export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '