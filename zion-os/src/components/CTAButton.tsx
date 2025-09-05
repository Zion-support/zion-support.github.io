"use client";

import Link from "next/link";

interface CTAButtonProps {_href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  className?: string;
  onClick?: () => void;}

export function CTAButton(_{_href, _variant = "primary", _size = "medium", _children, _className = "", _onClick}: CTAButtonProps) {_const _baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const _variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500", _secondary: "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500", _outline: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40"};

  const _sizeClasses = {_small: "px-4 py-2 text-sm", _medium: "px-6 py-3 text-base", _large: "px-8 py-4 text-lg"};

  const _classes = `${_baseClasses} ${_variantClasses[variant]} ${_sizeClasses[size]} ${_className}`;

  return (
    <Link 
      href={_href} 
      className={_classes}
      onClick={_onClick}
      role="button"
      tabIndex={_0}
    >
      {_children}
    </Link>
  );
}