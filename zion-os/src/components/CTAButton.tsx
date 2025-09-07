"use client",

import Link from "next/link";
import { ReactNode } from "react";
interface CTAButtonProps {
  href: string,
  variant?: "primary" | "secondary" | "outline",
  size?: "small" | "medium" | "large",
  children: ReactNode,
  className?: string,
  onClick?: () => void
}

export function CTAButton({ 
  href,
  variant = $2;
  size = $2;
  children, 
  className = $2;
  onClick 
}: CTAButtonProps) {
  const baseClasses = $2;
  const variantClasses = $2;
    secondary: "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500",
    outline: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40"
  },

  const sizeClasses = $2;
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  },

  const classes = $2;
  return (
    <Link 
      href={href} 
      className={classes}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </Link>
  )
}