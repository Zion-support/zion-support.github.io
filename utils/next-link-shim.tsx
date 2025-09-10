import React from 'react';
type Href = string | { pathname?: string; href?: string };
function resolveHref(href: Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as any)?.href || '#';}
export default function Link({ href, children, className, ...rest }: LinkProps) {