<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
"use client",
import Link from './next / link';,
import { ReactNode  } from './react';,
interface CTAButtonProps {
  href: string,
  variant?: "primary" | "secondary" | "outline",
  size?: "small" | "medium" | "large",
  children: ReactNode,
  class_name?: string,
  on_click?: () => void;
<<<<<<< HEAD
"use client";
import Link from "next/link";
import { ReactNode } from "react";
interface CTAButtonProps {href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
export /**
 * CTAButton - Function description
 */
function CTAButton() {
  const base_classes = "inline - flex items - center justify - center font - semibold rounded - lg transition - all duration - 200 transform hover: scale - 105 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - offset - gray - 900",
  const variant_classes = {
    primary: "bg - blue - 600 hover:bg - blue - 700 text - white focus:ring - blue - 500",
    secondary: "bg - gray - 700 hover:bg - gray - 600 text - white border border - gray - 600 hover:border - gray - 500",
    outline: "bg - transparent hover:bg - white / 10 text - white border border - white / 20 hover:border - white / 40";
  },
  const size_classes = {
    small: "px - 4 py - 2 text - sm",
    medium: "px - 6 py - 3 text - base",
    large: "px - 8 py - 4 text - lg";
  }
  const classes = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${class_name}`;
  return (

    <Link;
      href={href}
<<<<<<< HEAD
=======
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
"use client",;
import Link from "next/link",;
import { ReactNode } from "react",;
interface CTAButtonProps {;
  href: string,;
  variant?: "primary" | "secondary" | "outline",;
  size?: "small" | "medium" | "large",;
  children: ReactNode,;
  className?: string,;
  onClick?: () => void;
}
;
export function CTAButton({;
  href,;
  variant = "primary",;
  size = "medium",;
  children,;
  className = "",;
  onClick;
}: CTAButtonProps) {;
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 transform hover: scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900",;
  const variantClasses = {;
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",;
    secondary: "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500",;
    outline: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40";
  },;
  const sizeClasses = {;
    small: "px-4 py-2 text-sm",;
    medium: "px-6 py-3 text-base",;
    large: "px-8 py-4 text-lg";
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  return (;
    <Link;
      href={href} ;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className={classes}
      onClick={onClick}
      role="button";
      tabIndex={0}
    >;
      {children}
    </Link>);
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
