import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonRounded = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  rounded?: ButtonRounded;
  children?: React.ReactNode;
}

const baseClasses = 'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

function getVariantClasses(variant: ButtonVariant): string {
  switch (variant) {
    case 'secondary':
      return 'bg-zinc-700 text-white hover:bg-zinc-600';
    case 'outline':
      return 'border border-white/20 text-white hover:bg-white/10';
    case 'ghost':
      return 'text-white hover:bg-white/10';
    case 'primary':
    default:
      return 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700';
  }
}

function getSizeClasses(size: ButtonSize): string {
  switch (size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm';
    case 'lg':
      return 'px-6 py-3 text-base';
    case 'xl':
      return 'px-7 py-3.5 text-lg';
    case 'md':
    default:
      return 'px-4 py-2 text-sm';
  }
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  fullWidth = false,
  rounded = 'md',
  children
}: ButtonProps) {
  const roundedClass = rounded === 'full' ? 'rounded-full' : `rounded-${rounded}`;
  const widthClass = fullWidth ? 'w-full' : '';
  const content = (
    <span className="inline-flex items-center gap-2">
      {icon && iconPosition === 'left' ? icon : null}
      <span>{loading ? 'Loading…' : children}</span>
      {icon && iconPosition === 'right' ? icon : null}
    </span>
  );

  const classes = [
    baseClasses,
    getVariantClasses(variant),
    getSizeClasses(size),
    roundedClass,
    widthClass,
    disabled ? 'opacity-60 cursor-not-allowed' : '',
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classes} aria-disabled={disabled || loading} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled || loading}>
      {content}
    </button>
  );
}

export default Button;
