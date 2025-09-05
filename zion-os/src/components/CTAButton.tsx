"use client&quot;;

import Link from &quot;next/link&quot;;
import { ReactNode } from &quot;react&quot;;

interface CTAButtonProps {
  href: string;
  variant?: &quot;primary&quot; | &quot;secondary&quot; | &quot;outline&quot;;
  size?: &quot;small&quot; | &quot;medium&quot; | &quot;large&quot;;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CTAButton({ 
  href, 
  variant = &quot;primary&quot;, 
  size = &quot;medium&quot;, 
  children, 
  className = "&quot;,
  onClick 
}: CTAButtonProps) {
  const baseClasses = &quot;inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900&quot;;
  
  const variantClasses = {
    primary: &quot;bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500&quot;,
    secondary: &quot;bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500&quot;,
    outline: &quot;bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40&quot;
  };

  const sizeClasses = {
    small: &quot;px-4 py-2 text-sm&quot;,
    medium: &quot;px-6 py-3 text-base&quot;,
    large: &quot;px-8 py-4 text-lg&quot;
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <Link 
      href={href} 
      className={classes}
      onClick={onClick}
      role=&quot;button&quot;
      tabIndex={0}
    >
      {children}
    </Link>
  );
}