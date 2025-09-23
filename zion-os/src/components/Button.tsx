"use client";

import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  className = "",
  type = "button",
  fullWidth = false,
  rounded = "md",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center transition-colors font-medium";
  const sizes: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
    xl: "px-6 py-3 text-lg",
  };
  const variants: Record<Variant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-white/20 text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
  };
  const roundedMap: Record<Required<ButtonProps>["rounded"], string> = {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };
  const width = fullWidth ? "w-full" : "";
  const content = (
    <span className="inline-flex items-center gap-2">
      {icon && iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? icon : null}
    </span>
  );

  const classes = [base, sizes[size], variants[variant], roundedMap[rounded], width, disabled ? "opacity-50 pointer-events-none" : "", className].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled} onClick={onClick}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled || loading}>
      {content}
    </button>
  );
}